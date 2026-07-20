import type { Metadata } from "next";
// 1. Import the font loader
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

// 2. Initialize the font with required weights and assign a CSS variable name
const assignmentMontserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat", // This connects to your CSS configuration
});

export const metadata: Metadata = {
  title: "My Next.js App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 3. Inject the font's variable class into the HTML element
    <html lang="en" className={assignmentMontserrat.variable}>
      <body className="flex min-h-screen flex-col bg-slate-50">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
