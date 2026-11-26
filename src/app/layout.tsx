import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mtaani Dating | Location-Based Matching in Kenya",
  description: "Connect with nearby people in Kenya. Match by county, distance, interests, and more. Nairobi, Mombasa, Kisumu, and beyond.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-rose-50 to-pink-100 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
