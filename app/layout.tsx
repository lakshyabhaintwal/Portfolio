import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lakshya Bhaintwal | Software Engineer",
  description:
    "Portfolio of Lakshya Bhaintwal, a software engineer building production systems across backend, performance, full stack, and applied machine learning.",
  keywords: [
    "Lakshya Bhaintwal",
    "Software Engineer",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "Portfolio"
  ],
  authors: [{ name: "Lakshya Bhaintwal" }],
  creator: "Lakshya Bhaintwal",
  metadataBase: new URL("https://lakshyabhaintwal.dev"),
  openGraph: {
    title: "Lakshya Bhaintwal | Software Engineer",
    description:
      "Software engineer focused on backend systems, performance, full stack development, and applied machine learning integration.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-ink text-white antialiased">
        {children}
      </body>
    </html>
  );
}
