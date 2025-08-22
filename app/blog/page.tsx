import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Blog - EmojiCrypt | Steganography and Secure Communication",
  description:
    "Learn about emoji steganography, secure communication methods, and creative use cases for hiding messages in plain sight.",
  keywords: "emoji steganography, secure communication, hidden messages, privacy, cryptography, digital security",
  openGraph: {
    title: "EmojiCrypt Blog - Steganography Insights",
    description: "Discover the art of hiding messages in emojis and letters with our comprehensive guides.",
    type: "website",
  },
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to EmojiCrypt
        </Link>
        <h1 className="text-4xl font-bold text-foreground mb-4">EmojiCrypt Blog</h1>
        <p className="text-lg text-muted-foreground">
          Insights into steganography, secure communication, and creative ways to hide messages.
        </p>
      </div>

      <div className="space-y-8">
        {/* Featured Blog Post */}
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">Featured</Badge>
              <Badge variant="outline">Steganography</Badge>
            </div>
            <CardTitle className="text-2xl">
              <Link href="/blog/emoji-steganography-use-cases" className="hover:text-primary transition-colors">
                10 Creative Use Cases for Emoji Steganography in 2025
              </Link>
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                August 22, 2025
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                EmojiCrypt Team
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />8 min read
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Discover innovative ways to use emoji steganography for secure communication, creative storytelling, and
              privacy protection. From business communications to personal messaging, learn how hiding messages in
              plain sight can revolutionize your digital interactions.
            </p>
            <Link href="/blog/emoji-steganography-use-cases" className="text-primary hover:underline font-medium">
              Read full article →
            </Link>
          </CardContent>
        </Card>

        {/* Coming Soon Posts
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="opacity-75">
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2">
                Coming Soon
              </Badge>
              <CardTitle className="text-lg">The Science Behind Unicode Steganography</CardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  February 2025
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Deep dive into how zero-width characters and Unicode manipulation enable invisible message embedding.
              </p>
            </CardContent>
          </Card>

          <Card className="opacity-75">
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2">
                Coming Soon
              </Badge>
              <CardTitle className="text-lg">Privacy in the Digital Age: Why Steganography Matters</CardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  March 2025
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Exploring the importance of hidden communication methods in protecting personal privacy and freedom of
                expression.
              </p>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </div>
  )
}
