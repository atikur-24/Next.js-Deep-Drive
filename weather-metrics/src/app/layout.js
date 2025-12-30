import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather Metrics",
  description: "Analyze real-time and historical weather data by location and time with Weather Metrics, a powerful platform for climate insights and weather analytics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
