import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/montserrat/wght.css";
import "@fontsource-variable/montserrat/wght-italic.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IMAGES, SITE } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030132",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Epoxy Garage & Concrete Coatings in Summit, NJ | Forms Designs",
    template: "%s | Forms Designs LLC",
  },
  description:
    "Epoxy garage floors, basement coatings and commercial concrete in Summit, NJ. Licensed & insured. 15-year warranty. Free estimates from Forms Designs LLC.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: "thefloorcrew.co",
  publisher: SITE.name,
  formatDetection: { telephone: true, email: true, address: true },
  icons: { icon: IMAGES.favicon, apple: IMAGES.favicon },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    url: "/",
    title: "Epoxy Garage & Concrete Coatings in Summit, NJ | Forms Designs",
    description:
      "Epoxy garage floors, basement coatings and commercial concrete in Summit, NJ. Licensed & insured. 15-year warranty. Free estimates from Forms Designs LLC.",
    images: [{ url: IMAGES.og, width: 1200, height: 675, alt: "Forms Designs LLC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epoxy Garage & Concrete Coatings in Summit, NJ | Forms Designs",
    description:
      "Epoxy garage floors, basement coatings and commercial concrete in Summit, NJ. Licensed & insured. 15-year warranty. Free estimates from Forms Designs LLC.",
    images: [IMAGES.og],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US">
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
