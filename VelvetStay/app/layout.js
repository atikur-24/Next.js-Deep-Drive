import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Velvet Stay",
  description:
    "Velvet Stay is a luxurious and comfortable stay experience that offers a wide range of amenities and services to ensure that guests have a memorable and enjoyable stay. Our properties are designed to provide the perfect blend of comfort, style, and convenience, making them ideal for both business and leisure travelers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
