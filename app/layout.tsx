import type { Metadata } from "next";
import { Cormorant_Garamond, Yellowtail, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const yellowtail = Yellowtail({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chobap Sushi & Izakaya | Chino Hills, CA",
  description:
    "Fresh-cut sushi, sashimi, and izakaya small plates in Chino Hills. Home of the signature Chino Hills Roll and the tableside-flaming Volcano Roll. 4.8 stars on Yelp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${yellowtail.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
