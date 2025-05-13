import type { Metadata } from "next";
import { Roboto, Poppins, Inter } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrepVia",
  description:
    "Prepvia is a next-generation logistics and product prep partner for modern e-commerce. We specialize in Amazon FBA and marketplace fulfillment, offering fast, tech-driven solutions that help sellers scale with ease.",
  icons: {
    icon: "./favicon.png",
  },
  openGraph: {
    title: "Prepvia – Logistics That Move You Forward",
    description:
      "Prepvia is your next-gen logistics and product prep partner, specializing in Amazon FBA and marketplace fulfillment. Fast, precise, and built to scale your business.",
    url: "#",
    siteName: "PrepVia",
    images: [
      {
        url: "./Electric cyan.png",
        width: 1200,
        height: 630,
        alt: "prepvia logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prepvia – Logistics That Move You Forward",
    description:
      "Prepvia is your next-gen logistics and product prep partner, specializing in Amazon FBA and marketplace fulfillment. Fast, precise, and built to scale your business.",
    images: ["./Electric cyan.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
