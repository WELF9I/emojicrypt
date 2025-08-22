import type { Metadata } from "next"
import { EncodeDecode } from "@/components/encode-decode"

export const metadata: Metadata = {
  title: "Emoji Encoder Tool - Encode & Decode Hidden Messages Online",
  description:
    "Free online tool to encode secret messages into emojis, letters, digits, or special characters. Hide and reveal hidden messages instantly with EmojiCrypt.",
  keywords:
    "emoji encoder, emoji message encoder, hidden message tool, encode message with emojis, secret message encoder, text to emoji encoder, emoji cipher tool, encode text in emojis, hidden text decoder, secret text encoder, special character encoder, hidden message generator, message encoder online, emoji code translator, digital message encoder, text encryption with emojis, emoji alphabet encoder, message hiding tool, emoji-based encryption, encode message online",
  openGraph: {
    title: "Emoji Encoder Tool - Encode & Decode Hidden Messages Online",
    description:
      "Create secret messages using emojis, alphabets, digits, or special characters. Copy and decode hidden texts easily.",
    type: "website",
    url: "https://emojicrypt.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emoji Encoder Tool - Encode & Decode Hidden Messages Online",
    description:
      "Create secret messages using emojis, alphabets, digits, or special characters. Copy and decode hidden texts easily.",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "EmojiCrypt",
            description:
              "Free online tool to encode secret messages into emojis, letters, digits, or special characters. Hide and reveal hidden messages instantly.",
            url: "https://emojicrypt.vercel.app",
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
              "Browser-based processing",
              "Zero data storage",
            ],
          }),
        }}
      />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <EncodeDecode />
      </main>
    </div>
  )
}
