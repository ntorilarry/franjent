import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Franjent",
  description:
    "franjent is a loyalty program that offers exclusive benefits and rewards to its members. With franjent, you can earn points for every purchase you make at our partner brands and redeem them for exciting rewards, such as discounts, free products, and special experiences. Join franjent today and start enjoying the perks of being a loyal customer!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className=" font-body">{children}</body>
    </html>
  );
}
