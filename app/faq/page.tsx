import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "FAQ - EmojiCrypt | Frequently Asked Questions",
  description:
    "Find answers to common questions about EmojiCrypt, the free online tool for hiding messages in emojis and letters.",
  keywords: "EmojiCrypt FAQ, emoji encoder questions, steganography help, hidden message tool support",
}

const faqs = [
  {
    question: "How does EmojiCrypt work?",
    answer:
      "EmojiCrypt uses steganography techniques to hide your secret message within invisible Unicode characters that are embedded between emojis, letters, or special characters. The hidden data is completely invisible to the naked eye but can be decoded using our tool.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Yes! All encoding and decoding happens entirely in your browser. Your messages never leave your device or get sent to our servers. We don't store, log, or have access to any of your data.",
  },
  {
    question: "Can I combine emojis with letters and numbers?",
    answer:
      "EmojiCrypt allows you to mix and match emojis, uppercase letters, lowercase letters, numbers, and special characters as carriers for your hidden message.",
  },
  {
    question: "What's the maximum message length I can encode?",
    answer:
      "The message length depends on the number of carrier characters you select. Each carrier can hold a portion of your message, so more carriers allow for longer messages.",
  },
  {
    question: "Will the encoded message work on all platforms?",
    answer:
      "Yes! The encoded messages use standard Unicode characters and will work across all modern browsers, operating systems, and messaging platforms that support Unicode.",
  },
  {
    question: "Can others see that there's a hidden message?",
    answer:
      "No! The hidden message is completely invisible. To others, it will just look like regular emojis, letters, or characters. Only someone with access to EmojiCrypt can decode the hidden message.",
  },
  {
    question: "Is EmojiCrypt free to use?",
    answer: "Yes! EmojiCrypt is completely free to use with no limitations, registration requirements, or hidden fees.",
  },
  {
    question: "Can I use this for commercial purposes?",
    answer:
      "Yes, you can use EmojiCrypt for both personal and commercial purposes. However, please ensure you comply with your local laws and regulations regarding data privacy and communication.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to EmojiCrypt
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about EmojiCrypt and hiding messages in emojis.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Still have questions?</CardTitle>
              <CardDescription>Can't find the answer you're looking for? We're here to help!</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:support@emojicrypt.com"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
