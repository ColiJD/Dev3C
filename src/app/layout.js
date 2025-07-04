import { Roboto, Montserrat } from "next/font/google";
import { Header } from "@/components/Header/Header";
import "../style/globals.css";

const getRoboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const getMontserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Dev3C",
  description: "Startup de ingeniería y tecnología",
  icons: {
    icon: "/DEV.ico",
    apple: "/DEV.jpg",
    shortcut: "/DEV.jpg",
  },
  keywords: [
    "ingeniería",
    "tecnología",
    "software",
    "web",
    "móvil",
    "startup",
    "Dev3C",
    "desarrollo web",
    "aplicaciones móviles",
  ],
  openGraph: {
    title: "Dev3C",
    description: "Startup de ingeniería y tecnología",
    url: "",
    siteName: "Dev3C",
    images: [
      {
        url: "/DEV.webp",
        width: 1200,
        height: 630,
        alt: "Dev3C - Startup de ingeniería y tecnología",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

import { Footer } from "@/components/footer/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${getRoboto.variable} ${getMontserrat.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
