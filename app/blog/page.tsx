import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, BookOpen, Shield, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Blog - EmojiCrypt | Steganography and Secure Communication Guides",
  description:
    "Learn about emoji steganography, secure communication methods, and creative use cases for hiding messages in plain sight. Expert guides and tutorials.",
  keywords: "emoji steganography, secure communication, hidden messages, privacy, cryptography, digital security, steganography tutorials, secure messaging guides",
  openGraph: {
    title: "EmojiCrypt Blog - Steganography Insights and Tutorials",
    description: "Discover the art of hiding messages in emojis and letters with our comprehensive guides and tutorials.",
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

        {/* Additional Resources */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Explore More Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-border/50 hover:border-primary/30 transition-colors">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">FAQ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Find answers to common questions about EmojiCrypt and steganography.
                </p>
                <Link 
                  href="/faq" 
                  className="text-primary text-sm hover:underline"
                >
                  View FAQ
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 hover:border-primary/30 transition-colors">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn how we protect your privacy with our browser-only processing approach.
                </p>
                <Link 
                  href="/privacy" 
                  className="text-primary text-sm hover:underline"
                >
                  Privacy Policy
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 hover:border-primary/30 transition-colors">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Try EmojiCrypt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Start encoding and decoding hidden messages with our free online tool.
                </p>
                <Link 
                  href="/" 
                  className="text-primary text-sm hover:underline"
                >
                  Use Tool Now
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
