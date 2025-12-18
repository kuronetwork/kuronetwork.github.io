import type { Metadata } from "next";
import { Orbitron, Rajdhani, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import ParticleBackground from "@/components/ParticleBackground";

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: '--font-orbitron',
  weight: ['400', '700', '900'],
});

const rajdhani = Rajdhani({ 
  subsets: ["latin"],
  variable: '--font-rajdhani',
  weight: ['400', '500', '600', '700'],
});

const notoSansTC = Noto_Sans_TC({ 
  subsets: ["latin"],
  variable: '--font-noto',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Kuro - 資安工作者的學習手記",
  description: "Cyber Security Consultant | Medium Blogger - 分享資安、網路、證照與技術文章",
  keywords: "資安, cybersecurity, network, 證照, CISSP, CCSP, CISA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${orbitron.variable} ${rajdhani.variable} ${notoSansTC.variable} font-sans`}>
        <StarField />
        <ParticleBackground />
        <Header />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
