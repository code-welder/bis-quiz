import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const fontPrimary = Inter({
  variable: "--font-primary",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "BisQuiz",
  description: "Платформа для геймифицированного тимбилдинга и корпоративных квизов",
  openGraph: {
    description: "Платформа для геймифицированного тимбилдинга и корпоративных квизов",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${fontPrimary.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
