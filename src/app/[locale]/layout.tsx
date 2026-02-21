import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GTProvider } from "gt-next";
import { getGT } from "gt-next/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const gt = await getGT();
  const title = gt("Stride Club | General Translation");
  const description = gt("Running club and race tracker with countdown timer, elevation profiles, training plans, and leaderboard.");
  return {
    title,
    description,
    openGraph: { title, description, locale, type: "website", siteName: "General Translation" },
    twitter: { card: "summary", title, description },
    alternates: {
      canonical: "https://running-club.generaltranslation.dev",
      languages: { en: "/en", es: "/es", fr: "/fr", ja: "/ja", zh: "/zh" },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen flex flex-col`}>
        <GTProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </GTProvider>
      </body>
    </html>
  );
}
