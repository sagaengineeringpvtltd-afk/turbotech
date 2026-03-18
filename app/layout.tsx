import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TurboTech | Quality Machinery & Custom Engineering',
  
  other: {
    site_name: "TurboTech"
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },

  description: 'Powering productivity with quality machinery and industrial tools. 25+ years of excellence in machinery importing, distribution, and custom engineering.',

  keywords:
    "power tools Sri Lanka, industrial tools, tool suppliers, TurboTech, lorry body manufacturing, custom truck body, engineering solutions, tool distribution, workshops equipment Sri Lanka, construction tools",

  authors: [{ name: "TurboTech" }],
  creator: "TurboTech",
  publisher: "TurboTech",

  robots: "index, follow",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.turbotech.lk/",
    title: "TurboTech | Power Tools & Engineering Solutions",
    description:
      "TurboTech supplies high-quality power tools and provides custom lorry body design and manufacturing solutions in Sri Lanka.",
    siteName: "TurboTech",
  },

  twitter: {
    card: "summary_large_image",
    title: "TurboTech | Power Tools & Engineering Solutions",
    description:
      "Reliable power tools supplier and custom lorry body manufacturer in Sri Lanka.",
  },

  verification: {
    google: "", 
  },

  alternates: {
    canonical: "https://www.turbotech.lk/",
  },
};

function addOrganizationJsonLd() {
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "TurboTech",
      "alternateName": "TurboTech",
      "description": "TurboTech is a trusted importer and distributor of high-quality power tools and industrial equipment, also specializing in custom lorry body design and manufacturing.",
      "url": "https://www.turbotech.lk/",
      "logo": "https://www.turbotech.lk/logo.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+94 74 302 2963",
        "contactType": "customer service",
        "availableLanguage": ["English"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8/A, Kahathuduwa",
        "addressLocality": "Polgasowita",
        "addressCountry": "LK"
      }
    }`,
  };
}

function addWebsiteJsonLd() {
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "TurboTech",
      "alternateName": "TurboTech",
      "url": "https://www.turbotech.lk/",
      "description": "TurboTech supplies high-quality power tools and provides custom lorry body design and manufacturing solutions.",
      "publisher": {
        "@type": "Organization",
        "name": "TurboTech",
        "logo": "https://www.turbotech.lk/logo.svg"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.turbotech.lk/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
            <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta property="og:site_name" content="TurboTech" />
        <meta property="og:url" content="https://www.turbotech.lk/" />
        <meta property="og:title" content="TurboTech - Quality Machinery & Custom Engineering" />
        <meta property="og:description" content="Powering productivity with quality machinery and industrial tools. 25+ years of excellence in machinery importing, distribution, and custom engineering." />
        <meta property="og:image" content="https://www.turbotech.lk/TurboTech.svg" />
        <link rel="canonical" href="https://www.turbotech.lk/" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="icon" href="/favicon-32x32.png?v=2" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png?v=2" sizes="16x16" />
        <link rel="alternate" hrefLang="en" href="https://www.turbotech.lk/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.turbotech.lk/" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addOrganizationJsonLd()}
          key="organization-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addWebsiteJsonLd()}
          key="website-jsonld"
        />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "TurboTech",
      alternateName: "TurboTech",
      description:
        "TurboTech is a trusted importer and distributor of high-quality power tools and industrial equipment, also specializing in custom lorry body design and manufacturing.",
      url: "https://www.turbotech.lk/",
      logo: "https://www.turbotech.lk/TurboTech.svg", // update if needed
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+94 74 302 2963",
        contactType: "customer service",
        availableLanguage: ["English"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "8/A, Kahathuduwa",
        addressLocality: "Polgasowita",
        addressCountry: "LK",
      },
      // optional (add later if available)
      // sameAs: [
      //   "https://facebook.com/turbotech",
      //   "https://linkedin.com/company/turbotech"
      // ]
    }),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "TurboTech",
      alternateName: "TurboTech",
      url: "https://www.turbotech.lk/",
      description:
        "TurboTech supplies high-quality power tools and provides custom lorry body design and manufacturing solutions.",
      publisher: {
        "@type": "Organization",
        name: "TurboTech",
        logo: "https://www.turbotech.lk/TurboTech.svg",
      },

      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.turbotech.lk/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },

      mainEntity: [
        {
          "@type": "WebPage",
          "@id": "https://www.turbotech.lk/",
          name: "Home",
          url: "https://www.turbotech.lk/",
        },
        {
          "@type": "WebPage",
          "@id": "https://www.turbotech.lk/#about",
          name: "About Us",
          url: "https://www.turbotech.lk/#about",
        },
        {
          "@type": "WebPage",
          "@id": "https://www.turbotech.lk/#services",
          name: "Our Services",
          url: "https://www.turbotech.lk/#services",
        },
        {
          "@type": "WebPage",
          "@id": "https://www.turbotech.lk/#industries",
          name: "Industries We Serve",
          url: "https://www.turbotech.lk/#industries",
        },
        {
          "@type": "WebPage",
          "@id": "https://www.turbotech.lk/#contact",
          name: "Contact Us",
          url: "https://www.turbotech.lk/#contact",
        }
      ]
    }),
  }}
/>

  <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.turbotech.lk/"
                },
               
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About Us",
                  item: "https://www.turbotech.lk/#about"
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Our Services", 
                  item: "https://www.turbotech.lk/#services"
                },
                     {
                  "@type": "ListItem",
                  position: 5,
                  name: "Industries We Serve", 
                  item: "https://www.turbotech.lk/#industries"
                },
                                {
                  "@type": "ListItem",
                  position: 6,
                  name: "News & Updates",
                  item: "https://www.turbotech.lk/#news"
                },
                               {
                  "@type": "ListItem", 
                  position: 3,
                  name: "Contact Us",
                  item: "https://www.turbotech.lk/#contact"
                }
              ]
            }),
          }}
        />

    </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
