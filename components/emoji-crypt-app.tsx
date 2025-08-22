"use client"
import { Header } from "./header"
import { EncodeDecode } from "./encode-decode"
import { Footer } from "./footer"

export function EmojiCryptApp() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <EncodeDecode />
      </main>
      <Footer />
    </div>
  )
}
