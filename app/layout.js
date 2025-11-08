import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mizan's Portfolio",
  description: "My personal portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <footer className="w-full p-4 mt-20 text-center text-gray-500 border-t border-gray-200 dark:border-gray-800">
          © 2025 Mizan. All rights reserved.
        </footer>

        <Script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
        />
      </body>
    </html>
  );
}