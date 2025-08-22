import dynamic from "next/dynamic"

const Header = dynamic(() => import("@/components/header").then(mod => mod.Header), {
  loading: () => <div className="h-16" />
})

const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer), {
  loading: () => <div className="h-64" />
})

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}