import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto_Slab({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Vignesh K U — Fashion Technology Portfolio",
  description: "Personal portfolio of Vignesh K U | Apparel Production & Product Development",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
