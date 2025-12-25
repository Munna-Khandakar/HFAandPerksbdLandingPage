import {ReactNode} from 'react';
import { Inter } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//Theme Provider
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Perks Group - Premium Import/Export Trading Company",
  description: "International trading company specializing in import/export services across Japan, USA, Pakistan, and Bangladesh. Quality products, reliable global logistics.",
  keywords: ["import", "export", "trading", "international", "logistics"],
};

export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
            {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
