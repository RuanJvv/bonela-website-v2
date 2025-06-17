import sgMail from '@sendgrid/mail'
import { NextRequest, NextResponse } from 'next/server'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, company, phone, service, message, turnstileToken } = body

        const forwarded = request.headers.get('x-forwarded-for')
        const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || ''

        const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                secret: process.env.TURNSTILE_SECRET_KEY || '',
                response: turnstileToken,
                remoteip: ip,
            }),
        })

        const turnstileData = await turnstileResponse.json()

        if (!turnstileData.success) {
            return NextResponse.json(
                { error: 'Turnstile verification failed' },
                { status: 400 }
            )
        }

        try {
            const businessNotification = {
                to: process.env.BUSINESS_EMAIL || 'info@bonelaconsulting.com',
                from: process.env.FROM_EMAIL || 'admin@bonelaconsulting.com',
                templateId: process.env.SENDGRID_BUSINESS_TEMPLATE_ID || 'd-0923673cdb7743109798718ae756cd63',
                dynamicTemplateData: {
                    name,
                    email,
                    company: company || '',
                    phone: phone || '',
                    service: service || 'General Inquiry',
                    message,
                    submittedAt: new Date().toLocaleString(),
                }
            }

            const customerReply = {
                to: email,
                from: process.env.FROM_EMAIL || 'admin@bonelaconsulting.com',
                templateId: process.env.SENDGRID_CUSTOMER_TEMPLATE_ID || 'd-4876d2ce5d054e2b8225aaa4042648d6',
                dynamicTemplateData: {
                    name,
                    service: service || 'services',
                    message,
                    submittedAt: new Date().toLocaleString(),
                }
            }

            await Promise.all([
                sgMail.send(businessNotification),
                sgMail.send(customerReply)
            ])

            console.log('Contact form emails sent successfully:', {
                name,
                email,
                service,
                timestamp: new Date().toISOString(),
            })

        } catch (emailError) {
            console.error('Error sending emails:', emailError)
            return NextResponse.json(
                { error: 'Email sending failed' },
                { status: 500 }
            )
        }

        return NextResponse.json({ success: true, message: 'Form submitted successfully' })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}