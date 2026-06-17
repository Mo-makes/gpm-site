# Global Pain Management — Website

Production-ready Next.js website for Global Pain Management, a pain management medical practice located at 8031 Ritchie Highway, Suite 100, Pasadena, MD 21122.

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Fonts:** Syne (headings), DM Sans (body) via `next/font/google`
- **Forms:** React Hook Form → Resend email API
- **Analytics:** Vercel Analytics
- **Sitemap:** next-sitemap (auto-generated on build)

---

## Local Development Setup

### 1. Clone and install

```bash
git clone <your-repo-url>
cd gpm-site
npm install
```

### 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and fill in your values:

| Variable | Description | Required |
|---|---|---|
| `RESEND_API_KEY` | Your Resend API key for contact form emails | Yes (for form to work) |
| `CONTACT_EMAIL` | Email address that receives form submissions | Optional (defaults to `info@globalpainmd.com`) |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY` | Google Maps Embed API key | Optional |

> **Contact form note:** If `RESEND_API_KEY` is not set, form submissions will fail with a 500 error but the rest of the site works fine. Get a free API key at [resend.com](https://resend.com).

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/                        # Next.js App Router pages
├── page.tsx                # Homepage (all 12 sections)
├── layout.tsx              # Root layout (fonts, Analytics, skip link)
├── globals.css             # Tailwind + brand theme variables
├── about/
│   ├── page.tsx
│   ├── team/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx  # Individual provider bios
│   ├── patient-resources/page.tsx
│   └── areas-we-serve/page.tsx
├── conditions/
│   ├── page.tsx
│   └── [slug]/page.tsx     # Individual condition pages
├── procedures/
│   ├── page.tsx
│   └── [slug]/page.tsx     # Individual procedure pages
├── testimonials/page.tsx
├── contact/page.tsx
├── privacy-policy/page.tsx
└── api/contact/route.ts    # Contact form → Resend email

components/                 # Reusable UI components
lib/
└── data/                   # Content data files (TypeScript)
    ├── providers.ts
    ├── conditions.ts
    ├── procedures.ts
    └── testimonials.ts
```

---

## How to Update Provider Bios

All provider data lives in [`lib/data/providers.ts`](lib/data/providers.ts).

Each provider is an object with these fields:

```typescript
{
  slug: string;           // URL slug — e.g. "haddi-ogunsola-md"
  name: string;           // Full name without credentials
  credentials: string;    // "M.D.", "CRNP", etc.
  title: string;          // Job title
  isFounder?: boolean;    // Shows "Founder" badge if true
  bio: string[];          // Array of paragraphs
  specialties: string[];  // List for sidebar
  education?: string[];   // Education items for sidebar
  telemedicineUrl: string; // doxy.me link
  imageAlt: string;       // Alt text for when photos are added
}
```

**To add or update a provider:**
1. Edit the `providers` array in `lib/data/providers.ts`
2. The provider will automatically appear on `/about/team`, the homepage provider grid, the telemedicine section, and get its own bio page at `/about/team/[slug]`

**To add a provider photo:**
1. Add the image to `public/images/`
2. Update `ProviderCard.tsx` and the `[slug]/page.tsx` to use `next/image` pointing to that path

---

## How to Add a New Condition Page

All condition data lives in [`lib/data/conditions.ts`](lib/data/conditions.ts).

**To add a full-content condition page:**

```typescript
{
  slug: "my-condition-slug",          // URL: /conditions/my-condition-slug
  name: "My Condition Name",
  shortDescription: "Short text for cards",
  icon: "🦴",
  fullContent: {                       // Omit this for a simple stub page
    intro: "Opening paragraph...",
    whatItIs: "Description of the condition...",
    howWeTreat: "Treatment approach...",
    symptoms: ["Symptom 1", "Symptom 2"],
    treatments: ["Treatment 1", "Treatment 2"],
  },
}
```

The page at `/conditions/[slug]` renders automatically — no additional files needed.

---

## How to Add a New Procedure Page

Edit [`lib/data/procedures.ts`](lib/data/procedures.ts) and add an entry. For sub-procedures (e.g., a specific injection type under Interventional Injections), set `parentSlug` to the parent procedure's slug.

---

## Build for Production

```bash
npm run build
```

This runs `next build` followed by `next-sitemap` (generates `/sitemap.xml` and `/robots.txt` in `public/`).

---

## Deploying to Vercel

### First deployment

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository
3. Add environment variables in the Vercel dashboard:
   - `RESEND_API_KEY` — required for contact form
   - `CONTACT_EMAIL` — optional, defaults to `info@globalpainmd.com`
4. Set the **Production domain** to `globalpainmd.com` in **Settings → Domains**
5. Click **Deploy**

### Environment variables on Vercel

Set these under **Project → Settings → Environment Variables**. Apply them to **Production**, **Preview**, and **Development** as appropriate.

### Subsequent deployments

Every push to `main` triggers an automatic production deployment. Pull requests get preview deployments at unique URLs for review before merging.

### Custom domain

In **Project → Settings → Domains**, add `globalpainmd.com` and `www.globalpainmd.com`. Update DNS at your registrar to point to Vercel's nameservers or use A/CNAME records as shown in the Vercel dashboard.

---

## SEO Notes

- Each page exports `metadata` with unique `title` and `description`
- Homepage has LocalBusiness JSON-LD (`MedicalClinic` type)
- Conditions page has FAQ JSON-LD
- Individual condition pages have `MedicalCondition` JSON-LD
- Individual provider pages have `Physician` JSON-LD
- Sitemap and robots.txt auto-generated on build via `next-sitemap`
- All images use `next/image` with descriptive `alt` text

---

## Accessibility

- Skip-to-content link at top of every page
- All interactive elements keyboard accessible
- ARIA labels on icon-only controls
- Focus rings use `:focus-visible` (not suppressed)
- WCAG AA color contrast for all text
- Semantic heading hierarchy on every page

---

## TODO Before Launch

- [ ] Add real provider photos to `public/images/` and update `ProviderCard.tsx` and `[slug]/page.tsx`
- [ ] Confirm exact office hours with the practice (see `components/OfficeHoursCard.tsx` and `components/Footer.tsx`)
- [ ] Add `RESEND_API_KEY` to Vercel environment variables
- [ ] Verify Google Maps embed is showing the correct location
- [ ] Confirm contact email address for form submissions
- [ ] Set up domain `globalpainmd.com` in Vercel dashboard
- [ ] Review and confirm all copy with the practice before going live
