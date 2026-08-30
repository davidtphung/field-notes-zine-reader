import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";
import { BookmarksProvider } from "@/hooks/use-bookmarks";
import { journal } from "@/lib/journal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(journal.siteUrl),
  title: {
    default: `${journal.name} · ${journal.issue.title}`,
    template: `%s · ${journal.name}`,
  },
  description: journal.tagline,
  applicationName: journal.name,
  authors: [{ name: journal.name }],
  openGraph: {
    title: `${journal.name} · ${journal.issue.title}`,
    description: journal.tagline,
    siteName: journal.name,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full`}
    >
      <body className={`${inter.className} flex min-h-full flex-col antialiased`}>
        <BookmarksProvider>
          <SkipLink />
          <SiteHeader />
          {children}
          <SiteFooter />
        </BookmarksProvider>
      </body>
    </html>
  );
}
