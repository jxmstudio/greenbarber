# The Green Barber - Tree Services Website

Professional Next.js website for The Green Barber, a tree service company based in Dodges Ferry, Tasmania.

## Tech Stack

- **Framework**: Next.js 15+ (App Router) with TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Forms**: react-hook-form + zod
- **Email**: Resend API
- **SEO**: next-seo, next-sitemap

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://thegreenbarber.com.au
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=thegreenbarbertas@gmail.com
FROM_EMAIL=noreply@thegreenbarber.com.au
```

## Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project or create a new one.

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables in Vercel dashboard
6. Deploy!

## Environment Variables in Vercel

Add these in your Vercel project settings:

- `NEXT_PUBLIC_SITE_URL` - Your production URL
- `RESEND_API_KEY` - Your Resend API key
- `CONTACT_EMAIL` - Email to receive form submissions
- `FROM_EMAIL` - Email address for sending emails

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
├── data/            # Static data and content
└── lib/             # Utility functions
```

## Features

- ✅ SEO optimized with metadata and schema markup
- ✅ Responsive design
- ✅ Contact form with email notifications
- ✅ Facebook reviews integration
- ✅ Service pages with detailed content
- ✅ Dynamic sitemap generation
- ✅ Local business schema for SEO

## License

Private - The Green Barber
