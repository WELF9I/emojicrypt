import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteLayout } from "@/components/site-layout"
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Hide a message in an emoji - Encode & Decode Hidden Messages Online",
  description:
    "Encode secret messages into emojis, letters, digits, or special characters. Easily copy-paste encoded text and decode hidden messages instantly. Free online steganography tool.",
  keywords:
    "emoji encoder, emoji message encoder, hidden message encoder, encode hidden messages with emojis, secret message encoder tool, emoji text encoder, encode message in emojis, emoji cipher tool, secret text encoder, hidden text decoder, encode text with special characters, emoji encryption tool, message encoding online, text to emoji converter, encode message with digits and symbols, emoji alphabet encoder, hidden message generator, emoji-based secret messages, encode and decode messages, online secret message tool",
  authors: [{ name: "Mohamed Amine Welfeki" }],
  creator: "Mohamed Amine Welfeki",
  publisher: "Mohamed Amine Welfeki",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://emoji-crypt.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Emoji Encoder Tool - Encode & Decode Hidden Messages with Emojis & Text",
    description:
      "Hide secret messages inside emojis, alphabets, digits, or special characters. Copy, paste, and decode hidden texts instantly. Free online steganography tool.",
    url: "https://emoji-crypt.vercel.app",
    siteName: "EmojiCrypt",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "EmojiCrypt - Hide Messages in Emojis",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emoji Encoder Tool - Encode & Decode Hidden Messages with Emojis & Text",
    description:
      "Hide secret messages inside emojis, alphabets, digits, or special characters. Copy, paste, and decode hidden texts instantly.",
    images: ["/og-image.webp"],
    creator: "@emojicrypt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png" },
      { url: "/favicon.webp" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "EmojiCrypt",
              description:
                "Encode secret messages into emojis, letters, digits, or special characters. Easily copy-paste encoded text and decode hidden messages instantly. Free online steganography tool.",
              url: "https://emoji-crypt.vercel.app",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Person",
                name: "Mohamed Amine Welfeki",
                email: "welfkimedamine@hotmail.com",
              },
              featureList: [
                "Hide messages in emojis",
                "Encode text in letters and numbers",
                "Special character encoding",
                "Instant decoding",
                "Mobile responsive",
                "Dark/Light theme",
                "Free to use",
                "No registration required",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SiteLayout>{children}<Analytics /><SpeedInsights /></SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
