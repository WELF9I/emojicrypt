import { Shield } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-4xl">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            EmojiCrypt
          </h1>
        </Link>
        <ModeToggle />
      </div>
    </header>
  )
}
