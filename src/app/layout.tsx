import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { Navbar } from "./components/navbar/navbar";
// import { Dock } from "./components/dock/dock";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peaceful Peak Planning",
  description: "Wedding planning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="autumn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Navbar /> */}
        <div className="relative flex flex-col items-center justify-center gap-4 text-center text-balance overflow-hidden rounded-b-3xl p-4">
          {/* Background Image */}
          <img
            src="/ardent4930.jpg"
            alt="hero background"
            className="absolute inset-0 w-full h-full object-cover object-top z-0"
          />

          {/* Optional Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>

          {/* Text Content */}
          <div className="z-20 px-4 text-neutral-100 flex flex-col items-center">
            <Image
              src="/logo_white.png"
              alt="Peaceful Peak Planning"
              width={200}
              height={0} // height: 0 + auto sizing via CSS
              style={{ height: "auto" }} // maintains aspect ratio
            />
          </div>
        </div>
        {children}
        {/* <Dock /> */}
      </body>
    </html>
  );
}
