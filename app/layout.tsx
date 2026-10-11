import type { Metadata } from "next";
import MotionSystem from "@/components/MotionSystem";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site-config";
import { organizationSchema, pageMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: pageMetadata("/").title,
  description: pageMetadata("/").description,
  robots: {
    index: process.env.VERCEL_ENV !== "preview",
    follow: true,
    googleBot: { index: process.env.VERCEL_ENV !== "preview", follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body><JsonLd data={organizationSchema} /><MotionSystem>{children}</MotionSystem></body></html>;
}
