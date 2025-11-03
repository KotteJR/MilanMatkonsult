import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Milan Mätkonsult AB | Mätingenjör Skåne, Malmö | Laserskanning & Drönarscanning",
    template: "%s | Milan Mätkonsult AB"
  },
  description: "Mätingenjör i Skåne, Malmö. Milan Mätkonsult AB erbjuder laserskanning, drönarscanning, maskinstyrning och teknisk konsultation. Erfaren mätteknik i Skåne sedan 2005.",
  keywords: ["mätingenjör skåne", "mätingenjör malmö", "mätingenjör sverige", "laserskanning skåne", "drönarscanning malmö", "maskinstyrning skåne", "mätteknik skåne", "utstyrning malmö", "totalstation skåne", "3d skanning malmö"],
  authors: [{ name: "Milan Mätkonsult AB" }],
  creator: "Milan Mätkonsult AB",
  publisher: "Milan Mätkonsult AB",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.milanmatkonsult.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: '/',
    siteName: 'Milan Mätkonsult AB',
    title: 'Milan Mätkonsult AB | Mätingenjör Skåne, Malmö',
    description: 'Mätingenjör i Skåne, Malmö. Erbjuder laserskanning, drönarscanning, maskinstyrning och teknisk konsultation.',
    images: [
      {
        url: '/images/aboutus.png',
        width: 1200,
        height: 630,
        alt: 'Milan Mätkonsult AB - Mätingenjör Skåne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milan Mätkonsult AB | Mätingenjör Skåne, Malmö',
    description: 'Mätingenjör i Skåne, Malmö. Erbjuder laserskanning, drönarscanning, maskinstyrning och teknisk konsultation.',
    images: ['/images/aboutus.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when you have it
    // google: 'your-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

// Next.js recommends exporting viewport separately for theme color etc.
export const viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.milanmatkonsult.com",
    "name": "Milan Mätkonsult AB",
    "description": "Mätingenjör i Skåne, Malmö. Erbjuder laserskanning, drönarscanning, maskinstyrning och teknisk konsultation.",
    "url": "https://www.milanmatkonsult.com",
    "logo": "https://www.milanmatkonsult.com/logos/logo.svg",
    "image": "https://www.milanmatkonsult.com/images/aboutus.png",
    "telephone": "+46 40 123 45",
    "email": "info@milanmatkonsult.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Amiralsgatan 25",
      "addressLocality": "Malmö",
      "addressRegion": "Skåne",
      "postalCode": "211 55",
      "addressCountry": "SE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "55.6059",
      "longitude": "13.0007"
    },
    "openingHours": "Mo-Fr 08:00-17:00",
    "priceRange": "$$",
    "foundingDate": "2005",
    "areaServed": {
      "@type": "State",
      "name": "Skåne"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mättekniska tjänster",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Laserskanning",
            "description": "Avancerad laserscanning för 3D-dokumentation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Drönarscanning",
            "description": "Drönarscanning för stora ytor med hög precision"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Maskinstyrning",
            "description": "Maskinstyrning för grävmaskiner och hjullastare"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Teknisk konsultation",
            "description": "Teknisk konsultation inom byggnads- och geoteknik"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/company/milan-matkonsult-ab"
    ]
  };

  return (
    <html lang="sv">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
