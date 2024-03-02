import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zenchat",
  description: "A chat application known as Zenchat, byuilt by David Hype",
  creator:"David Hype",
  keywords:["Chat application", "David Hype", "Zenchat", "Zenchat chat application"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
