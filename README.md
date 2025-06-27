# 🛍️ FAKE - E-Commerce

A modern e-commerce platform built with Next.js, TypeScript, and Tailwind CSS, featuring server-side rendering, static generation, and real-time product data.

## Getting Started

### Prerequisites
- Node.js `>=18.x`
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/your-project.git
```
2. Install dependencies:
```bash
npm install
# or
yarn install
```
3. Set up environment variables:
```bash
cp .env.local
```
4. Update .env.local with your API endpoints:
```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Running the Project
- Development Mode:
```bash
npm run dev
# or
yarn dev
```
- Production build:
```bash
npm run build && npm run start
# or
yarn build && yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure (App Router)
```bash
/
├── app/
│   ├── api/                    # API routes (mock or real)
│   │   ├── products/
│   │   │   └── route.ts        # e.g., GET /api/products
│   │   └── ...
│   ├── products/
│   │   └── [id]/
│   │       └── page.tsx        # Product detail (ISR)
│   ├── (main)/
│   │   └── page.tsx            # Product listing (ISR)
│   ├── styles/
│   │   └── global.css          # Global styles
│   └── ...
├── components/                 # Reusable components (DRIER*)
│   ├── filters/
│   │   ├── filter-selector.tsx # PascalCase for components
│   │   └── ...
│   ├── products/
│   │   ├── product-card.tsx    # Individual product UI
│   │   ├── product-list.tsx    # Wrapper for listing
│   │   └── ...
│   └── ...
├── data/                       # Mock data (JSON/TS)
│   └── products.json
├── helpers/                    # Utility functions
│   ├── common.ts               # Generic helpers (e.g., formatters)
│   └── fetch-helper.ts         # API-specific helpers
├── public/                     # Static assets
└── ...
```

## Why chose ISR approach
For a typical e-commerce site (in this case product listing and product detail page), ISR (getStaticProps) with 10-minute revalidation is perfect unless:
- It have sub-minute stock/price updates (I will use SSR or client-side polling).
- My CMS lacks webhook support for on-demand revalidation.

## More ideas?
1. We can add more information in product detail page, for example product rrecomendation or interactive UI for user engagement.
2. Need aditional validation regarding stock or price change in product checkout or cart page before the transaction for data consistency. 

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

