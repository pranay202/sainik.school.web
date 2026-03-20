# Commando Army Police Career Academy Website

A production-grade, highly optimized Next.js 14+ application designed for the Commando Army Police Career Academy. 

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS (v4 via PostCSS)
- **Language:** TypeScript
- **Icons:** Lucide React
- **SEO Elements:** Dynamic Metadata, JSON-LD schema integration for `EducationalOrganization` and `LocalBusiness`

## Getting Started

### 1. Install Dependencies
Run the following command to install the required packages:
```bash
npm install
```

### 2. Run the Development Server
Start the local development server to preview the site:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
To test a production build (which mimics the deployed performance exactly):
```bash
npm run build
npm start
```

## Structure & Architecture
- `app/(marketing)`: Contains the fully implemented homepage and route placeholders for internal pages.
- `app/layout.tsx` & `app/globals.css`: Contains the global Next.js configuration and Tailwind themes.
- `components/layout`: Core UI elements such as `Navbar`, `Footer`, and floating action buttons.
- `components/sections`: The beautifully crafted UI sections of the Homepage (Hero, About, Routine, Facilities, Results, Testimonials, Admission, Contact).
- `components/ui`: Custom UI elements utilizing Tailwind (e.g. `Button.tsx`, `Card.tsx`, `Input.tsx`).
- `data`: Typed static mock data replacing the database (courses, testimonials, results).
- `types`: TypeScript interfaces (`index.ts`).
- `lib`: Constants, SEO metadata generator, and utility functions (`cn` tailwind merge).

## Highlights
- **Performance:** Optimized images using `next/image`, semantic HTML structure, font optimization.
- **Conversion-Optimized:** Call-to-action buttons strategically placed, plus floating WhatsApp & Phone widgets for immediate inquiry.
- **SEO & Search Indexing:** Includes `generateMetadata`, JSON-LD script integrations, dynamic `sitemap.ts`, and `robots.ts` ensuring prime search performance for local queries like "Sainik School coaching Nagpur".
