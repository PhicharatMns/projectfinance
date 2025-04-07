// src/app/layout.js (RootLayout)

import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/src/app/component/Navbar";

// กำหนดฟอนต์ที่ต้องการ
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// กำหนดค่า metadata ทั่วทั้งแอป
export const metadata = {
  title: "การเงินการลงทุน",
  description: "Application Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar />
          {children}
          
      </body>
    </html>
  );
}
