import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - EmojiCrypt | Data Protection and Privacy",
  description:
    "Learn how EmojiCrypt protects your privacy. We process all data locally in your browser and never store your messages. Comprehensive privacy policy for 2025.",
  keywords: "EmojiCrypt privacy policy, data protection, browser-based encryption, secure messaging, steganography privacy, local data processing, privacy 2025",
  openGraph: {
    title: "Privacy Policy - EmojiCrypt",
    description: "Comprehensive privacy policy for EmojiCrypt - Your data protection and privacy guidelines.",
    type: "website",
  },
}

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground">Last updated: August 2025</p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment to Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              At EmojiCrypt, we believe privacy is a fundamental right. This Privacy Policy explains how we collect,
              use, and protect your information when you use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Processing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Local Processing Only:</strong> All encoding and decoding operations happen entirely in your
              browser. Your messages and data never leave your device.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>No Server Storage:</strong> We do not store, log, or have access to any of your messages,
              encoded content, or personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Basic analytics data (page views, browser type) through standard web analytics</li>
              <li>Technical information necessary for the website to function properly</li>
              <li>No personal information, messages, or encoded content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Local Storage</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use local storage to save your theme preferences and improve your user experience. This data
              remains on your device and is not transmitted to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party analytics services to understand how our website is used. These services may
              collect anonymous usage data in accordance with their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              Since all processing happens in your browser, your data security depends on your device's security. We
              recommend using updated browsers and keeping your devices secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
              updated revision date.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
