import { RiCheckLine, RiLockLine, RiShieldCheckLine, RiUserLine } from "@remixicon/react"
import { Metadata } from "next"
import BackToTop from "@/components/ui/BackToTop"
import TableOfContents from "@/components/ui/TableOfContents"
import { siteConfig } from "../siteConfig"

export const metadata: Metadata = {
    title: "Bonela | Privacy Policy",
    description: "Bonela Consulting Privacy and Personal Information Policy. Learn how we protect your personal information in accordance with the South African Protection of Personal Information Act (POPI).",
    keywords: [
        ...siteConfig.keywords,
        "privacy policy",
        "POPI compliance",
        "data protection",
        "personal information",
        "privacy rights",
        "data security"
    ],
    openGraph: {
        title: "Privacy Policy - Bonela Consulting",
        description: "Our commitment to protecting your personal information in accordance with South African data protection laws.",
        url: `${siteConfig.url}/privacy`,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: "Bonela Consulting Privacy Policy"
            }
        ]
    },
    twitter: {
        title: "Privacy Policy - Bonela Consulting",
        description: "Our commitment to protecting your personal information in accordance with South African data protection laws."
    },
    alternates: {
        canonical: `${siteConfig.url}/privacy`
    }
}

export default function PrivacyPolicyPage() {
    return (
        <main className="relative mx-auto flex flex-col">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 xl:px-0">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="mb-6">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                <RiShieldCheckLine className="size-4 mr-2" />
                                POPI Act Compliant
                            </span>
                        </div>
                        <h1 className="text-5xl font-semibold tracking-tighter text-gray-900 sm:text-6xl mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-600 mb-4">
                            Bonela Consulting Privacy and Personal Information Policy
                        </p>
                        <p className="text-lg text-gray-600">
                            Last updated: 16 June 2025
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-8 px-4 xl:px-0 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="mx-auto max-w-4xl">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        <strong>Bonela Consulting Pty Ltd.</strong> (reg: 2013/142625/07) (&ldquo;Bonela Consulting&rdquo;) adheres to the highest
                        standards of protecting your personal information when we process it by virtue of your use of our
                        Services, your use of our website <strong>www.bonelaconsulting.com</strong> or any of its related blogs, websites,
                        applications or platforms (collectively, &ldquo;the Website&rdquo;), or by providing us with your personal information
                        in any other way (such as being involved in tests or assessments). As such, we have created this
                        specific and detailed Privacy Policy for you to read and appreciate exactly how we safeguard your
                        personal information and respect your privacy (&ldquo;Policy&rdquo;).
                    </p>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                                <RiCheckLine className="size-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Bonela Consulting is a private limited liability company duly registered and operating in accordance with the laws of South Africa.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <RiCheckLine className="size-5 text-green-600 shrink-0 mt-0.5" />
                                <span>For more information regarding your personal information lawfully stored or used by Bonela Consulting, please contact <strong>Ettiene Viljoen</strong>, <a href="mailto:ettiene@bonelaconsulting.com" className="text-orange-600 hover:text-orange-700">ettiene@bonelaconsulting.com</a> who will gladly assist.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <RiCheckLine className="size-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Not all terms are necessarily defined in order.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <RiCheckLine className="size-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Please ensure that you read all the provisions below, and our other Bonela Consulting rules and policies which may apply from time to time and made available to you, to understand all your, and our, rights and duties.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="py-12 px-4 xl:px-0">
                <div className="mx-auto max-w-4xl">
                    <TableOfContents />
                </div>
            </section>

            {/* Section 1: Important Information */}
            <section id="section-1" className="py-12 px-4 xl:px-0 bg-white">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                        Important Information and Who We Are
                    </h2>

                    <div className="space-y-8">
                        {/* 1.1 Purpose */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">1.1 Purpose of this Privacy Policy</h3>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <h4 className="font-semibold mb-2">1.1.1</h4>
                                    <p>
                                        This Privacy Policy aims to give you information on how Bonela Consulting collects
                                        and processes your personal data through any form of your engagement with
                                        Bonela Consulting such as your engagement with us when contracting or
                                        corresponding with us, when using our Services, accessing or using the Website,
                                        or providing us with your personal information in any other way (such as when
                                        participating in surveys, participating in assessments or signing up for newsletters
                                        with Bonela Consulting).
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">1.1.2</h4>
                                    <p className="mb-3">
                                        This Privacy Policy complies with, and facilitates the obligations required from, the
                                        South African <em>Protection of Personal Information Act, No. 4 of 2013</em> (&ldquo;POPI&rdquo;), as
                                        amended.
                                    </p>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 ml-6">
                                        <h5 className="font-semibold mb-2">1.1.2.1</h5>
                                        <p className="text-sm text-gray-800">
                                            Users with citizenships from jurisdictions other than of South
                                            Africa, please note that Bonela Consulting complies with all
                                            South African data protection laws when processing your
                                            personal information pursuant to the Services as we are a South
                                            African entity operating in the South African market. Should
                                            foreign law be applicable in any regard to your use of the
                                            Services and/or the Website in any way, including how we may
                                            process your personal information, please contact Bonela
                                            Consulting at <a href="mailto:ettiene@bonelaconsulting.com" className="text-orange-600 hover:text-orange-700">ettiene@bonelaconsulting.com</a> who will gladly
                                            engage you on its application and your rights.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">1.1.3</h4>
                                    <p>
                                        It is important that you read this Privacy Policy together with any other privacy
                                        policy or fair processing notice we may provide on specific occasions when we are
                                        collecting or processing personal data about you, so that you are fully aware of
                                        how and why we are using your data. This Privacy Policy supplements the other
                                        notices and is not intended to override them.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">1.1.4</h4>
                                    <p>
                                        By virtue of the fact that our business is centred around people skills development
                                        interventions, we have to process categories of personal data, including gender,
                                        contact details and ID numbers, but same processing is always at standards higher
                                        than conventional data, and is, for the vast majority of the time, on specific
                                        instruction from another &ldquo;Responsible Party&rdquo; who uses Skills4U for its analysis and
                                        &ldquo;Operator&rdquo; functions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 1.2 Controller and Operator */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">1.2 Controller and Operator</h3>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <h4 className="font-semibold mb-2">1.2.1</h4>
                                    <p>
                                        Bonela Consulting is the &ldquo;Responsible Party&rdquo; and is responsible for your personal
                                        data in instances where we decide the processing operations concerning your
                                        personal data, and for the purposes and needs of Bonela Consulting only.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">1.2.2</h4>
                                    <p>
                                        We also operate as a &ldquo;Operator&rdquo; of personal data on behalf of a third-party
                                        Responsible Party (such as our clients who wish to attain analysis of candidates
                                        and/or assessors who provide us with data from their own Responsible Parties),
                                        where that Responsible Party&rsquo;s privacy terms will apply. Please consult the privacy
                                        policy of any such parties to whom you may be providing your personal data as
                                        their terms will apply as they are the Responsible Party directing us to process
                                        your personal data for <em>their</em> purposes.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">1.2.3</h4>
                                    <p>
                                        We have appointed a data representative at Bonela Consulting who is responsible
                                        for overseeing questions in relation to this Privacy Policy. If you have any
                                        questions about this Privacy Policy, including any requests to exercise your legal
                                        rights, please contact the representative using the details set out below.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 1.3 Contact Details */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">1.3 Our Contact Details</h3>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <h4 className="font-semibold mb-3">1.3.1 Our full details are:</h4>
                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                        <dl className="space-y-2 text-gray-700">
                                            <div className="flex gap-3">
                                                <dt className="font-semibold min-w-[180px]">Full name of legal entity:</dt>
                                                <dd>Bonela Consulting Pty Ltd.</dd>
                                            </div>
                                            <div className="flex gap-3">
                                                <dt className="font-semibold min-w-[180px]">Name of Information Officer:</dt>
                                                <dd>Ettiene Viljoen</dd>
                                            </div>
                                            <div className="flex gap-3">
                                                <dt className="font-semibold min-w-[180px]">Email address:</dt>
                                                <dd><a href="mailto:ettiene@bonelaconsulting.com" className="text-orange-600 hover:text-orange-700">ettiene@bonelaconsulting.com</a></dd>
                                            </div>
                                            <div className="flex gap-3">
                                                <dt className="font-semibold min-w-[180px]">Postal address:</dt>
                                                <dd>PO Box 133, George, 6530</dd>
                                            </div>
                                            <div className="flex gap-3">
                                                <dt className="font-semibold min-w-[180px]">Telephone number:</dt>
                                                <dd>+27 84 506 5026</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">1.3.2</h4>
                                    <p>
                                        You have the right to make a complaint at any time to the South African regulator&rsquo;s
                                        office (Information Regulator&rsquo;s Office of South Africa). We would, however,
                                        appreciate the chance to deal with your concerns before you approach any such
                                        regulator, so please contact us in the first instance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 1.4 Changes to Privacy Policy */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">1.4 Changes to the Privacy Policy and your Duty to Inform us of Changes</h3>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <h4 className="font-semibold mb-2">1.4.1</h4>
                                    <p>
                                        This Privacy Policy version was last updated on 16 June 2025 and historic versions
                                        are archived and can be obtained by contacting us.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">1.4.2</h4>
                                    <p>
                                        It is important that the personal data we hold about you is accurate and current.
                                        Please keep us informed if your personal data changes during your relationship with us.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 1.5 Third-Party Links */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">1.5 Third-Party Links on Website or otherwise</h3>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <h4 className="font-semibold mb-2">1.5.1</h4>
                                    <p>
                                        The Website may include links to third-party websites, plug-ins and applications.
                                        Clicking on those links or enabling those connections may allow third parties to
                                        collect or share data about you. We do not control these third-party websites and
                                        are not responsible for their privacy statements or terms. When you leave our
                                        Website, or engage with such third parties, we encourage you to read the distinct
                                        privacy policy of every third-party you engage with.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Data Collection */}
            <section id="section-2" className="py-12 px-4 xl:px-0 bg-gray-50">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                        The Data We Collect About You
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.6</h3>
                            <p className="text-gray-700">
                                Personal data, or personal identifiable information, means any information about an
                                individual, both natural and juristic entities (i.e., people and companies), from which that
                                entity can be identified. It does not include data where the identity has been removed
                                (anonymous data).
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.7</h3>
                            <p className="text-gray-700 mb-4">
                                We may collect, use, store and transfer (&ldquo;process&rdquo;) different kinds of personal data about
                                you, for our own purposes, which we have grouped together as follows:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    {
                                        number: "1.7.1",
                                        title: "Identity Data",
                                        description: "including first name, last name, ID Number, gender, or the information about your company such as company registration details, company address and name."
                                    },
                                    {
                                        number: "1.7.2",
                                        title: "Contact Data",
                                        description: "including email addresses and telephone numbers."
                                    },
                                    {
                                        number: "1.7.3",
                                        title: "Social Media Data",
                                        description: "including all information accessible on your publicly available profile such as images, photos, photo tags, likes, followers, comments, posts and stories."
                                    },
                                    {
                                        number: "1.7.4",
                                        title: "Transaction Data",
                                        description: "including details about payments to and from you, contracts, contractual terms, contract fees, signups, subscriptions, invoices and other details of products and services you have obtained from us or provide to us."
                                    },
                                    {
                                        number: "1.7.5",
                                        title: "Technical Data",
                                        description: "including internet protocol address/es, your login data, browser type and version, time zone setting and location, cookies, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access the Website."
                                    },
                                    {
                                        number: "1.7.6",
                                        title: "Profile Data",
                                        description: "including your Website/Profile username and password, preferences, feedback, ratings and reviews, and survey responses."
                                    },
                                    {
                                        number: "1.7.7",
                                        title: "Qualifications Data",
                                        description: "including highest level of education / qualifications, discipline (HR, Marketing etc.), job title, employment history, current employer (only in some cases) and years' experience."
                                    },
                                    {
                                        number: "1.7.8",
                                        title: "Usage Data",
                                        description: "including information about how you use our company, Website, surveys, events, and services; and"
                                    },
                                    {
                                        number: "1.7.9",
                                        title: "Marketing and Communications Data",
                                        description: "including your preferences in receiving notices and marketing from us and our third parties and your communication preferences."
                                    }
                                ].map((item) => (
                                    <div key={item.number} className="bg-white p-5 rounded-lg border border-gray-200">
                                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                            <span className="text-sm text-gray-600">{item.number}</span>
                                            <RiUserLine className="size-5 text-orange-600" />
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                            <h4 className="font-semibold text-gray-900 mb-2">1.8 Aggregated Data</h4>
                            <p className="text-gray-700 text-sm">
                                We also collect, use and share <strong>Aggregated Data</strong> such as statistical or demographic data
                                for any purpose. Aggregated Data may be derived from your personal data but is not
                                considered personal data in law as this data does <strong>not</strong> directly or indirectly reveal your
                                identity. For example, we may aggregate your Usage Data to calculate the percentage of
                                users accessing a specific Website feature. However, if we combine or connect Aggregated
                                Data with your personal data so that it can directly or indirectly identify you, we treat the
                                combined data as personal data which will be used in accordance with this Privacy Policy.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-900 mb-2">1.9</h4>
                            <p className="text-gray-700">
                                Where we need to collect personal data by law, or under the terms of a contract we have
                                with you and you fail to provide that data when requested, we may not be able to perform
                                the contract we have or are trying to enter into with you (for example, to provide you with
                                services or allow you to provide us with your services). In this case, we may have to cancel
                                Website-access or Services you have with us, but we will notify you if this is the case at the
                                time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: How Data is Collected */}
            <section id="section-3" className="py-12 px-4 xl:px-0 bg-white">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                        How is your personal data collected?
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.10</h3>
                            <p className="text-gray-700 mb-4">
                                We use different methods to collect data from and about you, including through:
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">1.10.1 Direct interactions</h3>
                            <p className="text-gray-700 mb-4">
                                You may give us your <strong>Identity, Contact, Profile, Social Media, Transaction, Qualifications, Marketing</strong> and <strong>Financial Data</strong> by filling in
                                various Bonela Consulting forms, Website forms or by corresponding with us by
                                post, phone, email or otherwise. This includes personal data you provide when you:
                            </p>
                            <ul className="space-y-2 text-gray-700 ml-6">
                                {[
                                    { num: "1.10.1.1", text: "use our Services." },
                                    { num: "1.10.1.2", text: "contract with us." },
                                    { num: "1.10.1.3", text: "consult with us." },
                                    { num: "1.10.1.4", text: "complete forms." },
                                    { num: "1.10.1.5", text: "interact with us via webinar or social platform group, such as a Facebook™ group." },
                                    { num: "1.10.1.6", text: "provide any services to us as a service provider or independent contractor on contract with us." },
                                    { num: "1.10.1.7", text: "request information to be sent to you." },
                                    { num: "1.10.1.8", text: "attend any Bonela Consulting event whether online or in person or" },
                                    { num: "1.10.1.9", text: "give us some feedback." }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-gray-600 text-sm min-w-[80px]">{item.num}</span>
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">1.10.2 Automated technologies or interactions</h3>
                            <p className="text-gray-700">
                                As you interact with our Website, we may automatically collect <strong>Technical Data, Profile</strong> and <strong>Usage Data</strong> about your
                                equipment, browsing actions and patterns. We may collect this personal data by
                                using cookies, server logs and other similar technologies. We may also receive
                                Technical Data about you if you visit other websites employing our cookies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: How We Use Data with Complete Table - This is a critical section */}
            <section id="section-4" className="py-12 px-4 xl:px-0 bg-gray-50">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                        How we use your personal data
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.11</h3>
                            <p className="text-gray-700 mb-4">
                                We will only use your personal data when the law allows us to and for legitimate reasons,
                                which you hereby expressly understand and consent to. Most commonly, we will use your
                                personal data in the following circumstances:
                            </p>

                            <div className="grid gap-3 ml-6">
                                {[
                                    { num: "1.11.1", text: "where we have your express consent to do so;" },
                                    { num: "1.11.2", text: "where we need to consult with you or perform on the Services contract we are about to enter into or have entered into with you;" },
                                    { num: "1.11.3", text: "where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests; and/or" },
                                    { num: "1.11.4", text: "where we need to comply with a legal or regulatory obligation." }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <span className="text-gray-600 text-sm min-w-[60px]">{item.num}</span>
                                        <span className="text-gray-700">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.12 Purposes for which we will use your personal data:</h3>

                            <div className="space-y-4 ml-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">1.12.1</h4>
                                    <p className="text-gray-700">
                                        We have set out below, in a table format, a description of all the ways we plan to
                                        use your personal data for our own purposes, and which of the legal bases we rely
                                        on to do so. We have also identified what our legitimate interests are, where
                                        appropriate, and which exact External Third Parties your personal data is handed
                                        to for same reasons.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">1.12.2</h4>
                                    <p className="text-gray-700">
                                        Note that we may process your personal data for more than one lawful ground
                                        depending on the specific purpose for which we are using your data. Please
                                        contact us if you need details about the specific legal ground we are relying on to
                                        process your personal data where more than one ground has been set out in the
                                        table below.
                                    </p>
                                </div>
                            </div>

                            {/* Complete Data Processing Table with all 12 rows */}
                            <div className="mt-6">
                                <div className="overflow-x-auto -mx-4 sm:mx-0">
                                    <div className="inline-block min-w-full align-middle">
                                        <div className="overflow-hidden border border-gray-300 rounded-lg">
                                            <p className="text-sm text-gray-600 mb-2 px-4 pt-4">This is a complex table. For the best viewing experience on mobile devices, you may need to scroll horizontally.</p>
                                            <table className="min-w-full divide-y divide-gray-300">
                                                <thead className="bg-gray-800 text-white">
                                                    <tr>
                                                        <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold min-w-[200px]">Purpose / Activity</th>
                                                        <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold min-w-[150px]">Type of Data</th>
                                                        <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold min-w-[250px]">Lawful Basis for Processing Including Basis of Legitimate Interest</th>
                                                        <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold min-w-[200px]">Specific External Third Party to Whom the Information is Provided (If Any)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white text-sm">
                                                    {/* Row 1 */}
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-gray-900">To engage with you after you have contacted us requesting an engagement via the Website or otherwise</td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Identity<br/>
                                                            (b) Contact<br/>
                                                            (c) Marketing and Communications
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Express consent<br/>
                                                            (b) Performance of a contract with you<br/>
                                                            (c) Necessary for our legitimate interests (to contact a person who has a legitimate desire to engage us for valid business purposes)
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            • Sandvik (Pty) ltd – based in South Africa<br/>
                                                            • Sandvik Zimbabwe – based in Zimbabwe<br/>
                                                            • Sandvik Botswana – based in Botswana<br/>
                                                            • Sandvik Mining RSA - based in South Africa<br/>
                                                            • South32 - based in South Africa<br/>
                                                            • Sanofi Zentiva – based in South Africa<br/>
                                                            • Sanofi – based in South Africa<br/>
                                                            • Nafasi Water – based in Africa<br/>
                                                            • DFC based in South Africa<br/>
                                                            • Cell C based in South Africa<br/>
                                                            • Redpath Mining Based in South Africa<br/>
                                                            • Concor based in South Africa<br/>
                                                            • Moolmans based in South Africa
                                                        </td>
                                                    </tr>

                                                    {/* Row 2 */}
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-gray-900">To provide you with our Services as a Candidate doing an Assessment or participating in any prescribed Test</td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Identity<br/>
                                                            (b) Contact<br/>
                                                            (c) Profile<br/>
                                                            (d) Technical<br/>
                                                            (e) Qualifications<br/>
                                                            (f) Usage
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Performance of a contract with you<br/>
                                                            (b) Express consent<br/>
                                                            (c) Necessary to comply with a legal obligation<br/>
                                                            (d) Necessary for our legitimate interests (to provide you with the Services you contracted to acquire from us, and to keep our records updated and to study how engagees use our Services)
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            • Petro Viljoen<br/>
                                                            • Suzanne Gericke<br/>
                                                            • Ettiene Viljoen
                                                        </td>
                                                    </tr>

                                                    {/* Row 3 */}
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-gray-900">To provide you with our Services as a learner during training activities or when performing any assessment</td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Identity<br/>
                                                            (b) Contact<br/>
                                                            (c) Profile<br/>
                                                            (d) Technical<br/>
                                                            (e) Qualifications<br/>
                                                            (f) Usage
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Performance of a contract with you<br/>
                                                            (b) Express consent<br/>
                                                            (c) Necessary to comply with a legal obligation<br/>
                                                            (d) Necessary for our legitimate interests (to provide you with the Services you contracted to acquire from us, and to keep our records updated and to study how engagees use our Services)
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            • Suzanne Gericke<br/>
                                                            • Petro Viljoen<br/>
                                                            • Ettiene Viljoen
                                                        </td>
                                                    </tr>

                                                    {/* Row 4 */}
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-gray-900">To contract with you as a service provider to Bonela Consulting</td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Identity<br/>
                                                            (b) Contact<br/>
                                                            (c) Financial<br/>
                                                            (d) Transaction
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Performance of a contract with you<br/>
                                                            (b) Express consent<br/>
                                                            (c) Necessary to comply with a legal obligation<br/>
                                                            (d) Necessary for our legitimate interests (to allow you to provide us with your services, and to keep our records updated and to study how we may use third-party services)
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            • Petro Viljoen<br/>
                                                            • Ettiene Viljoen<br/>
                                                            • Eugene Viljoen<br/>
                                                            • Xola Mphahlele
                                                        </td>
                                                    </tr>

                                                    {/* Row 5 */}
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-gray-900">To provide you with our Services as a Client</td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Identity<br/>
                                                            (b) Contact<br/>
                                                            (c) Technical<br/>
                                                            (d) Usage<br/>
                                                            (e) Financial<br/>
                                                            (f) Transactional<br/>
                                                            (g) Marketing and Communications
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Performance of a contract with you<br/>
                                                            (b) Express consent<br/>
                                                            (c) Necessary to comply with a legal obligation<br/>
                                                            (d) Necessary for our legitimate interests (to provide you with the Services you contracted to acquire from us, and to keep our records updated and to study how engagees use our Services)
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            • Petro Viljoen<br/>
                                                            • Ettiene Viljoen<br/>
                                                            • Xola Mphahlele<br/>
                                                            • Eugene Viljoen<br/>
                                                            • Nadia Viljoen
                                                        </td>
                                                    </tr>

                                                    {/* Row 6 */}
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-gray-900">To allow you to use the Website or participate in any Bonela Consulting event</td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Identity<br/>
                                                            (b) Contact<br/>
                                                            (c) Usage<br/>
                                                            (d) Technical<br/>
                                                            (e) Profile
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Performance of a contract with you<br/>
                                                            (b) Express consent<br/>
                                                            (c) Necessary to comply with a legal obligation<br/>
                                                            (d) Necessary for our legitimate interests (to provide you with the Services you contracted to acquire from us, and to keep our records updated and to study how engagees use our Services)
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            • Eugene Viljoen<br/>
                                                            • Petro Viljoen<br/>
                                                            • Ettiene Viljoen<br/>
                                                            • Xola Mphahlele
                                                        </td>
                                                    </tr>

                                                    {/* Row 7 */}
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-gray-900">To provide it to our authorised third-party service providers who need your personal data to provide their private services to you (such as payment gateway providers, Test Providers and Assessors)</td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Identity<br/>
                                                            (b) Contact<br/>
                                                            (c) Financial<br/>
                                                            (d) Transaction
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Performance of a contract with you<br/>
                                                            (b) Necessary for our legitimate interests (to provide you with the Services you have contracted from the authorised third-party, and to develop our services and grow our organisation)<br/>
                                                            (c) Express consent
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            • Eugene Viljoen<br/>
                                                            • Petro Viljoen<br/>
                                                            • Suzanne Gericke<br/>
                                                            • Ettiene Viljoen<br/>
                                                            • Nadia Viljoen
                                                        </td>
                                                    </tr>

                                                    {/* Row 8 */}
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-gray-900">To process and service your payment for any services rendered by Bonela Consulting or its service providers<br/><br/>To manage payments, fees and charges</td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Identity<br/>
                                                            (b) Contact<br/>
                                                            (c) Financial<br/>
                                                            (d) Transaction
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Performance of a contract with you<br/>
                                                            (b) Necessary for our legitimate interests (to make or receive necessary organisation payments)<br/>
                                                            (c) Express consent
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            • Eugene Viljoen<br/>
                                                            • Petro Viljoen<br/>
                                                            • Suzanne Gericke<br/>
                                                            • Ettiene Viljoen<br/>
                                                            • Nadia Viljoen
                                                        </td>
                                                    </tr>

                                                    {/* Row 9 */}
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-gray-900">To manage our relationship with you which may include notifying you about changes to our terms or Privacy Policy or Services</td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Identity<br/>
                                                            (b) Contact<br/>
                                                            (c) Marketing and Communications
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Performance of a contract with you<br/>
                                                            (b) Necessary to comply with a legal obligation<br/>
                                                            (c) Necessary for our legitimate interests (to keep our records updated and to study how engagees use our Services)<br/>
                                                            (d) Express consent
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            • Eugene Viljoen<br/>
                                                            • Petro Viljoen<br/>
                                                            • Suzanne Gericke<br/>
                                                            • Ettiene Viljoen<br/>
                                                            • Inventixx Pty Ltd based in South Africa
                                                        </td>
                                                    </tr>

                                                    {/* Row 10 */}
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-gray-900">To administer and protect our organisation and our Website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data)</td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Identity<br/>
                                                            (b) Contact<br/>
                                                            (c) Technical<br/>
                                                            (d) Usage
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Necessary for our legitimate interests (for running our organisation, provision of administration and IT services, network security, to prevent fraud and in the context of an organisation restructuring exercise)<br/>
                                                            (b) Necessary to comply with a legal obligation<br/>
                                                            (c) Express consent
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            • Petro Viljoen<br/>
                                                            • Ettiene Viljoen<br/>
                                                            • Inventixx Pty Ltd based in South Africa
                                                        </td>
                                                    </tr>

                                                    {/* Row 11 */}
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-gray-900">To deliver relevant Website content and Services to you and measure or understand the effectiveness of the information we serve to you</td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Identity<br/>
                                                            (b) Contact<br/>
                                                            (c) Usage<br/>
                                                            (d) Marketing and Communications<br/>
                                                            (e) Technical<br/>
                                                            (f) Profile
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Necessary for our legitimate interests (to study how engagees use our services, to develop them, to grow our organisation and to inform our marketing strategy)<br/>
                                                            (b) Express consent
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            • Petro Viljoen<br/>
                                                            • Ettiene Viljoen<br/>
                                                            • Eugene Viljoen<br/>
                                                            • Inventixx based in South Africa
                                                        </td>
                                                    </tr>

                                                    {/* Row 12 */}
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-gray-900">To use data analytics to improve our Website, Services, engagee relationships and experiences</td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Technical<br/>
                                                            (b) Usage<br/>
                                                            (c) Identity
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            (a) Necessary for our legitimate interests (to define types of engagees for our services, to keep our Website updated and relevant, to develop our organisation and to inform our marketing strategy)<br/>
                                                            (b) Express consent
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            • Petro Viljoen<br/>
                                                            • Ettiene Viljoen<br/>
                                                            • Inventixx Pty Ltd based in South Africa
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Marketing, Third-Party Marketing, Opting Out, and Change of Purpose subsections */}
                            <div className="mt-8 space-y-6 ml-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">1.12.3 Marketing</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-2">1.12.3.1</h5>
                                            <p className="text-gray-700">
                                                We strive to provide you with choices regarding certain personal data
                                                uses, particularly around marketing and advertising. To manifest your
                                                rights attached to any marketing sent to you as an existing customer,
                                                please use the in-built prompts provided on those communications,
                                                or contact us.
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-2">1.12.3.2</h5>
                                            <p className="text-gray-700">
                                                You will receive marketing communications from us if you have
                                                requested information from us, have participated in any Bonela
                                                Consulting Service or event, or if you provided us with your details
                                                when registering for a promotion or event and, in each case, you have
                                                not opted-out of receiving that marketing.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">1.12.4 Third-Party Marketing</h4>
                                    <div>
                                        <h5 className="font-semibold text-gray-900 mb-2">1.12.4.1</h5>
                                        <p className="text-gray-700">
                                            Whilst we may use your personal data within our Bonela Consulting
                                            organisation group, we will get your express opt-in consent before we
                                            share your personal data publicly with any entity outside the Bonela
                                            Consulting group of organisations for public purposes.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">1.12.5 Opting-Out</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-2">1.12.5.1</h5>
                                            <p className="text-gray-700">
                                                You can ask us or authorised third parties to stop sending you
                                                marketing messages at any time by contacting us or the relevant third
                                                party at any time and requesting us to cease or change your
                                                marketing preferences.
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-2">1.12.5.2</h5>
                                            <p className="text-gray-700">
                                                Where you opt-out of receiving these marketing messages, this opt-out will not apply to other personal data of yours which we process
                                                for another lawful basis.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">1.12.6 Change of Purpose</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-2">1.12.6.1</h5>
                                            <p className="text-gray-700">
                                                We will only use your personal data for the purposes for which we
                                                collected it, unless we reasonably consider that we need to use it for
                                                another reason and that reason is compatible with the original
                                                purpose. If you wish to get an explanation as to how the processing
                                                for the new purpose is compatible with the original purpose, please
                                                contact us.
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-2">1.12.6.2</h5>
                                            <p className="text-gray-700">
                                                If we need to use your personal data for an unrelated purpose, we
                                                will notify you and we will explain the legal basis which allows us to
                                                do so.
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-2">1.12.6.3</h5>
                                            <p className="text-gray-700">
                                                Please note that we may process your personal data without your
                                                knowledge or consent, in compliance with the above rules, where this
                                                is required or permitted by law.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Disclosures */}
            <section id="section-5" className="py-12 px-4 xl:px-0 bg-white">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                        Disclosures of your personal data
                    </h2>

                    <div className="space-y-6 text-gray-700">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.13</h3>
                            <p className="mb-4">
                                We may have to share your personal data with the parties set out below for the purposes
                                set out in the table above.
                            </p>
                            <div className="ml-6 space-y-3">
                                <div>
                                    <h4 className="font-semibold mb-2">1.13.1</h4>
                                    <p>Internal Third Parties as set out in the Glossary.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">1.13.2</h4>
                                    <p>External Third Parties as set out in the Glossary.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">1.13.3</h4>
                                    <p>Specific third parties listed in the table above and/or</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">1.13.4</h4>
                                    <p>
                                        Third parties to whom we may choose to sell, transfer, or merge parts of our
                                        organisation or our assets. Alternatively, we may seek to acquire other
                                        organisations or merge with them. If a change happens to our organisation, then
                                        the new owners may use your personal data in the same way as set out in this
                                        Privacy Policy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.14</h3>
                            <p>
                                We require all third parties to respect the security of your personal data and to treat it in
                                accordance with the law. We do not allow our third-party service providers to use your
                                personal data for their own purposes and only permit them to process your personal data
                                for specified purposes and in accordance with our instructions and standards.
                            </p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Express Cookies provision</h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">1.15</h4>
                                    <p className="text-sm">
                                        The Website may make use of &ldquo;cookies&rdquo; to automatically collect information and data
                                        through the standard operation of the Internet servers. &ldquo;Cookies&rdquo; are small text files a
                                        website can use (and which we may use) to recognise repeat users, facilitate the user&rsquo;s on-going access to and use of a website and allow a website to track usage behaviour and
                                        compile aggregate data that will allow the Website operator to improve the functionality of
                                        the Website and its content, and to display more focused advertising to a user by way of
                                        third party tools.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">1.16</h4>
                                    <p className="text-sm">
                                        The type of information collected by cookies is not used to personally identify you. If you do
                                        not want information collected through the use of cookies, there is a simple procedure in
                                        most browsers that allows you to deny or accept the cookie feature. Please note that cookies
                                        may be necessary to provide you with certain features available on our Website, and thus if
                                        you disable the cookies on your browser you may not be able to use those features, and
                                        your access to our Website will therefore be limited. If you do not disable &ldquo;cookies&rdquo;, you are
                                        deemed to consent to our use of any personal information collected using those cookies,
                                        subject to the provisions of this Policy and our other policies or terms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: International Transfers */}
            <section id="section-6" className="py-12 px-4 xl:px-0 bg-gray-50">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                        International transfers
                    </h2>

                    <div className="space-y-6 text-gray-700">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.17</h3>
                            <p>
                                We share your personal data within the Bonela Consulting group of organisations and
                                affiliates, and this may involve transferring and processing your data outside of South Africa.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.18</h3>
                            <p className="mb-4">
                                Whenever we transfer your personal data out of either territory, we ensure a similar degree
                                of protection is afforded to it by ensuring at least one of the following safeguards is
                                implemented:
                            </p>
                            <div className="ml-6 space-y-3">
                                <div>
                                    <h4 className="font-semibold mb-2">1.18.1</h4>
                                    <p>
                                        We will only ever share data with an entity with whom we have a contract
                                        specifically detailing all same parties&rsquo; duties in relation to your data and
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">1.18.2</h4>
                                    <p>
                                        We will only transfer your personal data to countries that have been deemed to
                                        provide an adequate level of protection for personal data by the Information
                                        Regulator&rsquo;s Office of South Africa, and/or
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">1.18.3</h4>
                                    <p>
                                        Where we use certain service providers, we may use specific contracts/clauses
                                        approved by the Information Regulator&rsquo;s Office which give personal data the same
                                        protection it has in South Africa.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.19</h3>
                            <p>
                                Please contact us if you want further information on the specific mechanism used by us
                                when transferring your personal data out of South Africa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Data Security */}
            <section id="section-7" className="py-12 px-4 xl:px-0 bg-white">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
                        <RiLockLine className="size-8 text-orange-600" />
                        Data security
                    </h2>

                    <div className="space-y-6 text-gray-700">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.20</h3>
                            <p>
                                We have put in place appropriate security measures to prevent your personal data from
                                being accidentally lost, used or accessed in an unauthorised way, altered or disclosed by
                                using data encryption via strong SSL certificates, secure database hosting, restricted
                                database access as well as best practices around server and application maintenance and
                                updates. In addition, we limit access to your personal data to those employees, agents,
                                contractors and other third parties who have a legitimate need to know. They will only
                                process your personal data on our instructions and they are subject to a duty of
                                confidentiality.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.21</h3>
                            <p>
                                We have put in place procedures to deal with any suspected personal data breach and will
                                notify you and any applicable regulator of a breach where we are legally required to do so.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8: Data Retention */}
            <section id="section-8" className="py-12 px-4 xl:px-0 bg-gray-50">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                        Data retention
                    </h2>

                    <div className="space-y-6 text-gray-700">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.22</h3>
                            <p>
                                We will only retain your personal data for as long as necessary to fulfil the purposes we
                                collected it for, including for the purposes of satisfying any legal, accounting, or reporting
                                requirements.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.23</h3>
                            <p>
                                To determine the appropriate retention period for personal data, we consider the amount,
                                nature, and sensitivity of the personal data, the potential risk of harm from unauthorised use
                                or disclosure of your personal data, the purposes for which we process your personal data,
                                any other South African applicable law requiring us to retain the data and whether we can
                                achieve those purposes through other means, and the applicable legal requirements.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.24</h3>
                            <p>
                                Details of retention periods for different aspects of your personal data are available from us
                                by contacting us.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.25</h3>
                            <p>
                                In some circumstances you can ask us to delete your data; see below for further information.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.26</h3>
                            <p>
                                In some circumstances we may anonymise your personal data (so that it can no longer be
                                associated with you) for research or statistical purposes in which case we may use this
                                information indefinitely without further notice to you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 9: Your Legal Rights */}
            <section id="section-9" className="py-12 px-4 xl:px-0 bg-white">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
                        <RiShieldCheckLine className="size-8 text-orange-600" />
                        Your legal rights
                    </h2>

                    <div className="space-y-6 text-gray-700">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.27</h3>
                            <p className="mb-4">
                                Under certain circumstances, you have rights under data protection laws in relation to your
                                personal data where we are the relevant &ldquo;Responsible Party&rdquo; over such personal data.
                                Please contact us to find out more about, or manifest, these rights:
                            </p>
                            <div className="ml-6 space-y-2">
                                {[
                                    { num: "1.27.1", text: "request access to your personal data." },
                                    { num: "1.27.2", text: "request correction of your personal data." },
                                    { num: "1.27.3", text: "request erasure of your personal data." },
                                    { num: "1.27.4", text: "object to the processing of your personal data." },
                                    { num: "1.27.5", text: "request a restriction of processing your personal data." },
                                    { num: "1.27.6", text: "request transfer of your personal data, and/or" },
                                    { num: "1.27.7", text: "right to withdraw consent." }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <span className="text-gray-600 text-sm min-w-[60px]">{item.num}</span>
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.28</h3>
                            <p>
                                You will not have to pay a fee to access your personal data (or to exercise any of the other
                                rights). However, we may charge a reasonable fee if your request is clearly unfounded,
                                repetitive or excessive. Alternatively, we may refuse to comply with your request in these
                                circumstances.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.29</h3>
                            <p>
                                We may need to request specific information from you to help us confirm your identity and
                                ensure your right to access your personal data (or to exercise any of your other rights). This
                                is a security measure to ensure that personal data is not disclosed to any person who has
                                no right to receive it. We may also contact you to ask you for further information in relation
                                to your request to speed up our response.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">1.30</h3>
                            <p>
                                We try to respond to all legitimate requests within one month. Occasionally it may take us
                                longer than a month if your request is particularly complex or you have made a number of
                                requests. In this case, we will notify you and keep you updated.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 10: Glossary */}
            <section id="section-10" className="py-12 px-4 xl:px-0 bg-gray-50">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                        Glossary
                    </h2>

                    <div className="space-y-8 text-gray-700">
                        {/* 1.31 Lawful Basis */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">1.31 Lawful Basis</h3>
                            <div className="space-y-4 ml-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">1.31.1 Legitimate Interest</h4>
                                    <p>
                                        means the interest of our organisation in conducting and
                                        managing our organisation to enable us to give you the best service and the most
                                        secure experience. We make sure we consider and balance any potential impact
                                        on you (both positive and negative) and your rights before we process your
                                        personal data for our legitimate interests. We do not use your personal data for
                                        activities where our interests are overridden by the impact on you (unless we have
                                        your consent or are otherwise required or permitted to by law). You can obtain
                                        further information about how we assess our legitimate interests against any
                                        potential impact on you in respect of specific activities by contacting us.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">1.31.2 Performance of Contract</h4>
                                    <p>
                                        means processing your data where it is necessary for
                                        the performance of a contract to which you are a party or to take steps at your
                                        request before entering into such a contract.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">1.31.3 Comply with a legal or regulatory obligation</h4>
                                    <p>
                                        means processing your personal
                                        data where it is necessary for compliance with a legal or regulatory obligation that
                                        we are subject to.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">1.31.4 Express consent</h4>
                                    <p>
                                        means the confirmed express consent you have provided to our
                                        processing of your personal data by actively accepting this Privacy Policy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 1.32 Third Parties */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">1.32 Third Parties</h3>
                            <div className="space-y-4 ml-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">1.32.1 Internal Third Parties</h4>
                                    <p>
                                        means other entities or parties in the Bonela Consulting
                                        group acting as joint controllers or processors and who are based in South Africa
                                        and provide IT and system administration services and undertake reporting.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">1.32.2 External Third Parties</h4>
                                    <p className="mb-3">means:</p>
                                    <div className="ml-6 space-y-3">
                                        <div>
                                            <h5 className="font-semibold mb-2">1.32.2.1</h5>
                                            <p>
                                                Authorised third-party service providers under contract with Bonela
                                                Consulting who need your personal information in order to contact
                                                and transact with you pursuant to your use of the Services (such as
                                                Test Providers and/or Assessors).
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold mb-2">1.32.2.2</h5>
                                            <p>specific third parties who have been identified in the table above;</p>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold mb-2">1.32.2.3</h5>
                                            <p>
                                                service providers acting as processors based in South Africa who
                                                provide IT and system administration services.
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold mb-2">1.32.2.4</h5>
                                            <p>
                                                South African or other national governments and/or their respective
                                                authorities pursuant to our adherence with anti-corruption and crime-fighting legislation, and/or
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold mb-2">1.32.2.5</h5>
                                            <p>
                                                professional advisers acting as processors or joint controllers
                                                including lawyers, bankers, auditors and insurers based in South
                                                Africa who provide consultancy, banking, legal, insurance and
                                                accounting services as required.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 1.33 Your Legal Rights (detailed) */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">1.33 Your legal rights</h3>
                            <p className="mb-4">You have the right to:</p>
                            <div className="space-y-4 ml-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">1.33.1 Request access</h4>
                                    <p>
                                        to your personal data (commonly known as a &ldquo;data subject
                                        access request&rdquo;). This enables you to receive a copy of the personal data we hold
                                        about you and to check that we are lawfully processing it.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">1.33.2 Request correction</h4>
                                    <p>
                                        of the personal data that we hold about you. This enables
                                        you to have any incomplete or inaccurate data we hold about you corrected,
                                        though we may need to verify the accuracy of the new data you provide to us.
                                    </p>
                                </div>

                                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                    <h4 className="font-semibold text-gray-900 mb-2">1.33.3 Request erasure</h4>
                                    <p>
                                        of your personal data. This enables you to ask us to delete or
                                        remove personal data where there is no valid reason for us continuing to process
                                        it. You also have the right to ask us to delete or remove your personal data where
                                        you have successfully exercised your right to object to processing (see below),
                                        where we may have processed your information unlawfully or where we are
                                        required to erase your personal data to comply with local law. <strong>Note, however, that
                                        we may not always be able to comply with your request of erasure for
                                        specific legal reasons which will be communicated to you, if applicable, at
                                        the time of your request.</strong>
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">1.33.4 Object to processing</h4>
                                    <p>
                                        of your personal data where we are relying on a legitimate
                                        interest (or those of a third party) and there is something about your particular
                                        situation which makes you want to object to processing on this ground as you feel
                                        it impacts on your fundamental rights and freedoms. You also have the right to
                                        object where we are processing your personal data for direct marketing purposes.
                                        In some cases, we may demonstrate that we have compelling legitimate grounds
                                        to process your information which override your rights and freedoms.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">1.33.5 Request restriction of processing</h4>
                                    <p className="mb-3">
                                        of your personal data. This enables you to
                                        ask us to suspend the processing of your personal data in the following scenarios:
                                    </p>
                                    <div className="ml-6 space-y-2">
                                        <div>
                                            <h5 className="font-semibold mb-1">1.33.5.1</h5>
                                            <p>if you want us to establish the data&rsquo;s accuracy.</p>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold mb-1">1.33.5.2</h5>
                                            <p>
                                                where our use of the data is unlawful, but you do not want us to erase
                                                it.
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold mb-1">1.33.5.3</h5>
                                            <p>
                                                where you need us to hold the data even if we no longer require it as
                                                you need it to establish, exercise or defend legal claims, or
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold mb-1">1.33.5.4</h5>
                                            <p>
                                                you have objected to our use of your data, but we need to verify
                                                whether we have overriding legitimate grounds to use it.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">1.33.6 Request the transfer</h4>
                                    <p>
                                        of your personal data to you or to a third party. We will
                                        provide to you, or a third party you have chosen, your personal data in a structured,
                                        commonly used, machine-readable format. Note that this right only applies to
                                        automated information which you initially provided consent for us to use or where
                                        we used the information to perform on a contract with you.
                                    </p>
                                </div>

                                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                    <h4 className="font-semibold text-gray-900 mb-2">1.33.7 Withdraw consent at any time</h4>
                                    <p>
                                        where we are relying on consent to process your
                                        personal data. However, this will not affect the lawfulness of any processing
                                        carried out before you withdraw your consent. If you withdraw your consent, we
                                        may not be able to provide certain Website access or Services to you. We will
                                        advise you if this is the case at the time you withdraw your consent. <strong>Please take
                                        note that regardless of your right to withdraw consent under POPIA, other
                                        South African legislation applies and may require that we continue to
                                        process your data in order to comply with anti-corruption, crime-fighting
                                        and/or other national legislation, which you expressly understand and agree
                                        to.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Signature Section */}
            <section className="py-16 px-4 xl:px-0 bg-gray-900 text-white">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-8">
                        <p className="text-lg mb-2">Signed:</p>
                        <p className="text-lg mb-2"><strong>E Viljoen</strong></p>
                        <p className="text-gray-300">Managing Director</p>
                        <p className="text-gray-300">Date: 02 June 2025</p>
                    </div>
                    <div className="border-t border-gray-700 pt-8">
                        <h2 className="text-3xl font-semibold mb-4">
                            Questions About This Privacy Policy?
                        </h2>
                        <p className="text-lg text-gray-300 mb-8">
                            If you have any questions about this Privacy Policy or how we handle your personal data, please contact our Information Officer.
                        </p>
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                            <p className="text-lg mb-2"><strong>Ettiene Viljoen</strong> - Information Officer</p>
                            <p className="text-gray-300 mb-1">
                                <a href="mailto:ettiene@bonelaconsulting.com" className="text-orange-400 hover:text-orange-300">
                                    ettiene@bonelaconsulting.com
                                </a>
                            </p>
                            <p className="text-gray-300 mb-1">+27 84 506 5026</p>
                            <p className="text-gray-300">PO Box 133, George, 6530</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Top Button */}
            <BackToTop />
        </main>
    )
}
