# Bonela Consulting Website

A modern, responsive website for Bonela Consulting - a Level-2 B-BBEE People Solutions company specializing in People-Skills Development, Organisational Effectiveness Interventions, and Occupational Psychometric Assessments.

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Remix Icon](https://remixicon.com/)
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # UI components
│   │   ├── Navbar.tsx    # Navigation component
│   │   ├── Footer.tsx    # Footer component
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Features.tsx  # Features showcase
│   │   └── ...
│   └── ...
├── lib/                  # Utility functions
└── ...
public/
├── images/               # Static images
├── BonelaLogo.tsx       # Company logo component
└── ...
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone git@gitlab.com:bonela-consulting/website-v2.git
cd website-v2
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌟 Features

### Business Features

- **Professional Services Showcase**: Comprehensive display of 80+ training courses
- **B-BBEE Level-2 Certification**: Prominently displayed credentials
- **Psychometric Assessments**: HPCSA-compliant assessment information
- **Organizational Effectiveness**: Detailed intervention methodologies
- **Contact Integration**: Multiple contact methods and consultation requests

### Technical Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Next.js optimizations and lazy loading
- **Accessibility**: ARIA labels and keyboard navigation support
- **Type Safety**: Full TypeScript implementation

## 🎨 Design System

The website uses a consistent design system with:

- **Primary Color**: Orange (#f97316) - representing energy and transformation
- **Typography**: Clean, professional fonts with proper hierarchy
- **Components**: Reusable UI components with consistent styling
- **Animations**: Subtle animations for enhanced user experience

## 🌍 About Bonela Consulting

**Bonela Consulting** is a Level-2 B-BBEE People Solutions company specializing in:

- **People-Skills Development**: 80+ courses across leadership, management, and soft skills
- **Organisational Effectiveness Interventions**: Strategic alignment and team dynamics
- **Occupational Psychometric Assessments**: HPCSA-compliant personality and cognitive assessments

*"Where people and technology meet."*

## 📧 Contact

- **Email**: <info@bonelaconsulting.com>
- **Website**: [www.bonelaconsulting.com](http://www.bonelaconsulting.com)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitLab/GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

The project can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is proprietary software owned by Bonela Consulting.

---

Built with ❤️ for transforming individuals and teams across Africa.
