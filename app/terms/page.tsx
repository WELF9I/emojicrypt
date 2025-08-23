import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - EmojiCrypt | Usage Terms and Conditions",
  description:
    "Terms of Service for EmojiCrypt. Learn about the rules and guidelines for using our emoji steganography tool. Updated for 2025 compliance.",
  keywords: "EmojiCrypt terms of service, usage terms, emoji encoder rules, steganography tool terms, terms and conditions 2025, online tool terms",
  openGraph: {
    title: "Terms of Service - EmojiCrypt",
    description: "Usage terms and conditions for EmojiCrypt - Your guidelines for using our steganography tool.",
    type: "website",
  },
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to EmojiCrypt
        </Link>
        <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
        <p className="text-lg text-muted-foreground">Last updated: August 2025</p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using EmojiCrypt, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Permission is granted to temporarily use EmojiCrypt for personal and commercial purposes. This is the
              grant of a license, not a transfer of title, and under this license you may:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Use the service for encoding and decoding messages</li>
              <li>Access the service from multiple devices</li>
              <li>Use the service for both personal and commercial purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Prohibited Uses</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You may not use EmojiCrypt:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>
                To violate any international, federal, provincial, or state regulations, rules, laws, or local
                ordinances
              </li>
              <li>
                To infringe upon or violate our intellectual property rights or the intellectual property rights of
                others
              </li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Service Availability</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to keep EmojiCrypt available 24/7, but we cannot guarantee uninterrupted service. We may
              temporarily suspend the service for maintenance, updates, or other operational reasons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law,
              this Company excludes all representations, warranties, conditions and terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall EmojiCrypt, nor its directors, employees, partners, agents, suppliers, or affiliates,
              be liable for any indirect, incidental, punitive, consequential, or similar damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably
              submit to the exclusive jurisdiction of the courts.
            </p>
          </section>
        </div>
        
        {/* Additional Links */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-lg font-semibold text-foreground mb-4">Additional Information</h3>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/privacy" 
              className="text-primary hover:underline"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/faq" 
              className="text-primary hover:underline"
            >
              Frequently Asked Questions
            </Link>
            <Link 
              href="/blog" 
              className="text-primary hover:underline"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
