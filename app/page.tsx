import type { Metadata } from "next"
import Link from "next/link"
import { EncodeDecode } from "@/components/encode-decode"
import { Button } from "@/components/ui/button"
import { ChevronRight, Shield, Zap, Eye, Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "Hide a message in an emoji - Encode & Decode Hidden Messages Online",
  description:
    "Free online tool to encode secret messages into emojis, letters, digits, or special characters. Hide and reveal hidden messages instantly with EmojiCrypt.",
  keywords:
    "emoji encoder, emoji message encoder, hidden message tool, encode message with emojis, secret message encoder, text to emoji encoder, emoji cipher tool, encode text in emojis, hidden text decoder, secret text encoder, special character encoder, hidden message generator, message encoder online, emoji code translator, digital message encoder, text encryption with emojis, emoji alphabet encoder, message hiding tool, emoji-based encryption, encode message online",
  openGraph: {
    title: "Emoji Encoder Tool - Encode & Decode Hidden Messages Online",
    description:
      "Create secret messages using emojis, alphabets, digits, or special characters. Copy and decode hidden texts easily.",
    type: "website",
    url: "https://emoji-crypt.vercel.app",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "EmojiCrypt - Hide Messages in Emojis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emoji Encoder Tool - Encode & Decode Hidden Messages Online",
    description:
      "Create secret messages using emojis, alphabets, digits, or special characters. Copy and decode hidden texts easily.",
    images: ["/og-image.webp"],
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
              "Browser-based processing",
              "Zero data storage",
            ],
          }),
        }}
      />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        {/* New Section Added Here */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Hide a message in an emoji</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            This free online tool uses steganography to hide secret messages within emojis, letters, digits, and special characters. Instantly encode and decode messages with a single click.
          </p>
        </div>
        
        <EncodeDecode />
        
        {/* Features Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose EmojiCrypt?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold">Secure & Private</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                All processing happens locally in your browser. Your messages never leave your device.
              </p>
            </div>
            
            <div className="border rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold">Lightning Fast</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Encode and decode messages instantly with our optimized algorithms.
              </p>
            </div>
            
            <div className="border rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold">Invisible Encoding</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Hidden messages are completely invisible to the naked eye, appearing as normal text.
              </p>
            </div>
            
            <div className="border rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold">Free Forever</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                No registration required, no premium features, and completely free to use.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Discover the power of steganography with EmojiCrypt. Learn more about how it works and creative use cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/blog/emoji-steganography-use-cases">
                Read Our Guide <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/faq">View FAQ</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
