import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://works.crevionads.com";
const SITE_NAME = "CrevionAds Works";
const DESCRIPTION =
  "Portfolio showcase of CrevionAds — a Kerala-based digital agency building websites, mobile apps, e-commerce stores, and ERP solutions for ambitious brands worldwide.";

export const viewport: Viewport = {
  themeColor: "#6b21a8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Our Portfolio`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "CrevionAds",
    "digital agency Kerala",
    "web development India",
    "portfolio",
    "mobile apps",
    "e-commerce websites",
    "ERP solutions",
    "Next.js development",
    "UI/UX design",
    "Malappuram",
  ],
  authors: [{ name: "CrevionAds", url: "https://crevionads.com" }],
  creator: "CrevionAds",
  publisher: "CrevionAds",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Premium Digital Portfolio`,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CrevionAds — Digital Agency Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Premium Digital Portfolio`,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/clients/logo.png",
    apple: "/clients/logo.png",
  },
};

/* ── JSON-LD Structured Data ────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CrevionAds",
  url: "https://crevionads.com",
  logo: `${SITE_URL}/images/crevionads_logod.png`,
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Valanchery",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-81139-08262",
      contactType: "customer service",
      areaServed: "IN",
    },
    {
      "@type": "ContactPoint",
      telephone: "+971-54-254-5909",
      contactType: "customer service",
      areaServed: "AE",
    },
  ],
  sameAs: ["https://crevionads.com"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect for font performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#FFFDF9] text-[#1c0e35]">
        {children}
      </body>
    </html>
  );
}
