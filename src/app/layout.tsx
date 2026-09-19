import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExitIntentPopup } from "@/components/conversion/ExitIntentPopup";
import { MobileCTABar } from "@/components/conversion/MobileCTABar";
import { SITE } from "@/lib/constants";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gatesgillplumbing.com"),
  title: {
    default: `${SITE.name} | Brampton Plumbers & Install Quotes`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Khalsa M.S. Plumbing and Renovation Inc. — plumber in Brampton, Ontario. Open 24 hours. Call (437) 438-7502.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: SITE.name,
    title: `${SITE.name} | Brampton Plumber`,
    description:
      "Plumbing and renovation in Brampton and nearby areas. Open 24 hours.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-white pb-20 font-body text-ink antialiased lg:pb-0">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTABar />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
