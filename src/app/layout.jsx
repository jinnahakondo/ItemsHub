import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/sections/Navbar/NavBar";
import Footer from "@/components/sections/Footer/Footer";
import { ToastContainer } from "react-toastify";

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
        <main className="mt-40 mb-20">
          {children}
          <ToastContainer />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
