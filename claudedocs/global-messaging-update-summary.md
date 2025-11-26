# Global Messaging Update Summary

**Date:** 2025-11-26
**Purpose:** Update website messaging from Africa-focused to global service delivery

## Overview

Updated all website content to reflect that Bonela Consulting delivers services globally while maintaining South African roots and African inspiration. The messaging now emphasizes "Rooted in South Africa, delivering worldwide."

---

## Files Modified

### Core Configuration

| File | Line(s) | Original | Updated |
|------|---------|----------|---------|
| `src/app/siteConfig.ts` | 4 | "...Psychometric Assessments across Africa." | "...Psychometric Assessments. Rooted in South Africa, delivering worldwide." |

### Homepage (`src/app/page.tsx`)

| Line(s) | Original | Updated |
|---------|----------|---------|
| 12 | "...transforming individuals and teams across Africa..." | "...transforming individuals and teams worldwide..." |
| 16 | "people solutions Africa" | "people solutions worldwide" |
| 21 | "Transforming People Across Africa" | "Transforming People Worldwide" |
| 34 | "Transforming People Across Africa" | "Transforming People Worldwide" |

### Hero Component (`src/components/ui/Hero.tsx`)

| Line(s) | Original | Updated |
|---------|----------|---------|
| 33-34 | `<FadeSpan>Across</FadeSpan> <FadeSpan>Africa</FadeSpan>` | `<FadeSpan>Around</FadeSpan> <FadeSpan>the</FadeSpan> <FadeSpan>World</FadeSpan>` |

### Footer Component (`src/components/ui/Footer.tsx`)

| Line(s) | Original | Updated |
|---------|----------|---------|
| 141 | "...transforming individuals and teams across Africa..." | "...transforming individuals and teams around the world..." |

### Features Component (`src/components/ui/Features.tsx`)

| Line(s) | Original | Updated |
|---------|----------|---------|
| 133 | "Transforming individuals and teams across Africa" | "Transforming individuals and teams around the world" |

### Call To Action Component (`src/components/ui/CallToAction.tsx`)

| Line(s) | Original | Updated |
|---------|----------|---------|
| 25 | "...life-changing learning experiences across Africa." | "...life-changing learning experiences worldwide." |

### About Page (`src/app/about/page.tsx`)

| Line(s) | Original | Updated |
|---------|----------|---------|
| 8 | "...transforming individuals and teams across Africa." | "...transforming individuals and teams worldwide." |
| 61 | "...transforming individuals and teams across Africa..." | "...transforming individuals and teams around the world..." |
| 98 | "...transform individuals and teams across Africa..." | "...transform individuals and teams around the world..." |
| 353 | "...transforming individuals and teams across Africa..." | "...transforming individuals and teams around the world..." |

### Services Page (`src/app/services/page.tsx`)

| Line(s) | Original | Updated |
|---------|----------|---------|
| 8 | "...competitively priced solutions across Africa." | "...competitively priced solutions delivered worldwide." |
| 27 | "...Psychometric Assessments delivered across Africa." | "...Psychometric Assessments delivered worldwide." |
| 62 | "...transform individuals and teams across Africa..." | "...transform individuals and teams around the world..." |
| 440 | "Transforming individuals and teams across Africa..." | "Transforming individuals and teams around the world..." |

### Contact Page (`src/app/contact/page.tsx`)

| Line(s) | Original | Updated |
|---------|----------|---------|
| 294 | "Serving clients across Africa" | "Serving clients worldwide" |

### Layout (`src/app/layout.tsx`)

| Line(s) | Original | Updated |
|---------|----------|---------|
| 116 | `"areaServed": "Africa"` | `"areaServed": "Worldwide"` |

### Web Manifest (`public/site.webmanifest`)

| Line(s) | Original | Updated |
|---------|----------|---------|
| 4 | "...Psychometric Assessments across Africa." | "...Psychometric Assessments. Rooted in South Africa, delivering worldwide." |

### Email Templates

| File | Line(s) | Original | Updated |
|------|---------|----------|---------|
| `sendgrid-templates/business-notification.html` | 420 | "Transforming People & Organizations Across Africa" | "Transforming People & Organizations Around the World" |
| `sendgrid-templates/customer-auto-reply.html` | 644 | "Transforming People & Organizations Across Africa" | "Transforming People & Organizations Around the World" |

### Documentation (`README.md`)

| Line(s) | Original | Updated |
|---------|----------|---------|
| 152 | "Built with love for transforming individuals and teams across Africa." | "Built with love for transforming individuals and teams around the world." |

---

## Key Messaging Changes

### Primary Taglines

| Context | Original | Updated |
|---------|----------|---------|
| Hero headline | "Transforming People Across Africa" | "Transforming People Around the World" |
| Site description | "...across Africa" | "Rooted in South Africa, delivering worldwide" |
| Email footer | "Across Africa" | "Around the World" |

### Secondary Messaging

- **Location context:** "Serving clients across Africa" → "Serving clients worldwide"
- **Service delivery:** "delivered across Africa" → "delivered worldwide"
- **Mission statements:** "transform individuals and teams across Africa" → "transform individuals and teams around the world"

---

## What Remained Unchanged

The following Africa-related content was intentionally preserved:

- "South African company" references (maintains local identity)
- "South African consulting" keyword (SEO relevance)
- B-BBEE certification references (South African specific)
- Physical location: "South Africa" in contact information
- Cultural intelligence references to South African roots

---

## Verification

All instances of "across Africa" and "Across Africa" have been removed from the codebase. Verified with:

```bash
grep -ri "across Africa" src/ public/ sendgrid-templates/ README.md
# Result: No matches found
```

---

## Total Changes

- **Files modified:** 14
- **Individual text changes:** 22
- **Schema/metadata updates:** 3

---

## Notes

- The messaging now balances South African pride with global service capability
- SEO keywords updated to reflect worldwide service delivery
- Email templates updated for consistent branding across all customer touchpoints
- Schema.org structured data updated for search engines
