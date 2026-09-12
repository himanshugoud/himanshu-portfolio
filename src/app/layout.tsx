import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Himanshu Goud — Full-Stack Developer",
  description:
    "Himanshu Goud is a full-stack developer and B.Tech Computer Science student building thoughtful digital products where engineering meets design.",
  openGraph: {
    title: "Himanshu Goud — Full-Stack Developer",
    description:
      "Full-stack developer and B.Tech Computer Science student building thoughtful digital products where engineering meets design.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Goud — Full-Stack Developer",
    description:
      "Full-stack developer and B.Tech Computer Science student building thoughtful digital products where engineering meets design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-paper text-ink">{children}</body>
    </html>
  );
}
