import { EncodeDecode } from "@/components/encode-decode"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <EncodeDecode />
      </main>
    </div>
  )
}
