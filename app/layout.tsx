import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Эмалированное судно",
  description: "시구들을 모아 시인에 대한 단서를 찾아 보자.",
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased w-screen h-screen font-mono`}
      >
        {children}
      </body>
    </html>
  )
}
