import type { Metadata } from "next";
import { Montserrat, Jost } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Pain Management in Pasadena, MD | Global Pain Management",
    template: "%s | Global Pain Management",
  },
  description:
    "Board-certified pain management specialists serving Pasadena, Kent Island, and Columbia, MD since 2013. Experience a world of difference. Call (443) 825-4050.",
  metadataBase: new URL("https://globalpainmd.com"),
  openGraph: {
    siteName: "Global Pain Management",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Global Pain Management — Pasadena, MD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GlobalPainMD",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${jost.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
