import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/custom/ToastProvider";
import Head from "next/head";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap", // Improves font rendering speed
});

export const metadata: Metadata = {
  title: "Expert Accounting & Business Solutions | Access A CPA",
  description:
    "Get expert help with accounting, tax, audit, and business needs. Access A CPA makes it easy to find professional financial solutions.",
  keywords: [
    "Accounting",
    "CPA",
    "Tax",
    "Audit",
    "Business Consulting",
    "Bookkeeping",
    "Financial Services",
    "Thalenta Ncube",
  ],
  authors: [{ name: "Your Brand Name", url: "https://yourwebsite.com" }],
  robots: "index, follow",
  openGraph: {
    title: "Expert Accounting & Business Solutions | Access A CPA",
    description:
      "Find expert accountants to handle your business, tax, and audit needs with ease.",
    url: "https://yourwebsite.com",
    siteName: "Access A CPA",
    images: [
      {
        url: "/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Accounting and tax consultation services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourbrand",
    title: "Expert Accounting & Business Solutions | Access A CPA",
    description:
      "Find expert accountants to handle your business, tax, and audit needs with ease.",
    images: ["/bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            name: "Access A CPA",
            url: "https://yourwebsite.com",
            logo: "https://yourwebsite.com/logo.png",
            description: "Professional accounting, business, and tax services.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Main St",
              addressLocality: "Your City",
              addressRegion: "Your State",
              postalCode: "12345",
              addressCountry: "Your Country",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1234567890",
              contactType: "customer service",
            },
          })}
        </script>
      </Head>
      <body className={`${roboto.variable} antialiased bg-gray-100`}>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
