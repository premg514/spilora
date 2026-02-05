import "./globals.css";
import { Noto_Sans_Telugu } from "next/font/google";
import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const teluguFont = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["400", "500", "700"],
  variable: "--font-telugu",
});

export const metadata: Metadata = {
  title: "Spilora | Pure Organic Spirulina",
  description:
    "Spilora offers pure, organic spirulina for better health and immunity.",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={teluguFont.variable}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
