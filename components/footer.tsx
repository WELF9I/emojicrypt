"use client"

import Link from "next/link"
import { Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const handleEmailClick = (provider: "gmail" | "outlook") => {
    const email = "welfkimedamine@hotmail.com"
    const subject = "EmojiCrypt - Contact"
    const body = "Hello, I would like to get in touch regarding EmojiCrypt."

    let mailtoUrl = ""
    if (provider === "gmail") {
      mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    } else {
      mailtoUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    window.open(mailtoUrl, "_blank")
  }

  return (
    <footer className="border-t bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">EmojiCrypt</h3>
            <p className="text-sm text-muted-foreground">
              Hide and reveal secret messages using emojis, letters, and special characters. Free online steganography
              tool for secure communication.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>welfkimedamine@hotmail.com</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => handleEmailClick("gmail")} className="text-xs">
                  Gmail
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleEmailClick("outlook")} className="text-xs">
                  Outlook
                </Button>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Resources Section */}
        <div className="border-t mt-8 pt-6">
          <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h5 className="font-medium mb-2">Learning</h5>
              <ul className="space-y-1 text-muted-foreground">
                <li>
                  <a 
                    href="https://en.wikipedia.org/wiki/Steganography" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    Steganography <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://en.wikipedia.org/wiki/Unicode" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    Unicode Standard <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Security</h5>
              <ul className="space-y-1 text-muted-foreground">
                <li>
                  <a 
                    href="https://www.eff.org/issues/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    Digital Privacy <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.eff.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    Electronic Frontier Foundation <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Tools</h5>
              <ul className="space-y-1 text-muted-foreground">
                <li>
                  <a 
                    href="https://haveibeenpwned.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    Password Security <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EmojiCrypt. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Made with ❤️ for secure communication</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
