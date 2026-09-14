import type { Metadata } from "next";
import "@fontsource/archivo-black/400.css";
import "@fontsource/hanken-grotesk/400.css";
import "@fontsource/hanken-grotesk/500.css";
import "@fontsource/hanken-grotesk/600.css";
import "@fontsource/caveat/500.css";
import "@fontsource/caveat/600.css";
import "@fontsource/spline-sans-mono/500.css";
import "@fontsource/spline-sans-mono/600.css";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import MotionProvider from "@/components/MotionProvider";

const description =
  "Himanshu Goud is a full-stack developer and B.Tech Computer Science student building thoughtful digital products where engineering meets design.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "Himanshu Goud — Full-Stack Developer",
  description,
  keywords: [
    "Himanshu Goud",
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack",
    "Portfolio",
  ],
  authors: [{ name: "Himanshu Goud" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Himanshu Goud — Full-Stack Developer",
    description,
    type: "website",
    images: ["/images/profile/himanshu.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Goud — Full-Stack Developer",
    description,
    images: ["/images/profile/himanshu.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-paper text-ink">
        <MotionProvider>
          <CustomCursor />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
