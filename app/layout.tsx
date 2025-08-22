import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "EmojiCrypt - Hide Secret Messages in Emojis & Letters | Free Online Tool 2025",
  description:
    "Hide and reveal secret messages using emojis, letters, and special characters. Free online steganography tool for secure communication. Encode text within emojis instantly.",
  keywords:
    "emoji encoder, hide message in emoji, secret message tool, emoji steganography, encode text emoji, hidden message generator, emoji cryptography, secure messaging, text encoder 2025",
  authors: [{ name: "EmojiCrypt Team" }],
  creator: "EmojiCrypt",
  publisher: "EmojiCrypt",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://emojicrypt.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EmojiCrypt - Hide Secret Messages in Emojis & Letters",
    description:
      "Free online tool to hide and reveal secret messages using emojis, letters, and special characters. Secure steganography for modern communication.",
    url: "https://emojicrypt.vercel.app",
    siteName: "EmojiCrypt",
    images: [
      {
        url: "/og-image.png",
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
    title: "EmojiCrypt - Hide Secret Messages in Emojis",
    description:
      "Free online tool to encode and decode hidden messages using emojis and letters. Secure communication made simple.",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.app'
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
                "Hide and reveal secret messages using emojis, letters, and special characters. Free online steganography tool for secure communication.",
              url: "https://emojicrypt.vercel.app",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Organization",
                name: "EmojiCrypt Team",
              },
              featureList: [
                "Hide messages in emojis",
                "Encode text in letters",
                "Special character encoding",
                "Instant decoding",
                "Mobile responsive",
                "Dark/Light theme",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
