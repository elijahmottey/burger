import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Responsive from "./components/Navigation/Responsive";

const barlow_condensed = Barlow_Condensed({ weight:['300','400','500','600','700'],
  subsets:['latin']
 });


export const metadata: Metadata = {
  title: "Meat Pie site",
  description: "Meat pie site for orders and delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow_condensed.className}>
        <Responsive/>
        {children}
        
        </body>
    </html>
  );
}
