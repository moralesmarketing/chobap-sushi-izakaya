import type { Metadata } from "next";
import { Shippori_Mincho, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const shippori = Shippori_Mincho({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
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
    <html lang="en" className={`${shippori.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-surface text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
