import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ItemHub",
  description: "Item showcasing app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <NavBar />
        </header>
        <main className="container mx-auto mt-36 mb-20 px-2">
          {children}
        </main>
        <footer>
          footer
        </footer>
      </body>
    </html>
  );
}
