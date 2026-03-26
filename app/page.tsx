import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/home/hero-section"
import { CategoryNav } from "@/components/home/category-nav"
import { ProductGrid } from "@/components/home/product-grid"
import { FarmerStory } from "@/components/home/farmer-story"
import { Footer } from "@/components/layout/footer"
import { Bell } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* Real-time Notification Tip */}
      <div className="bg-brand-green/10 py-2.5 text-center text-sm font-medium text-brand-green border-b border-brand-green/20">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <Bell className="h-4 w-4 animate-bounce" />
          <span>방금 전 남양주에서 수확한 <strong>설향 딸기</strong>가 입고되었습니다! (한정수량)</span>
        </div>
      </div>

      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <CategoryNav />
        <ProductGrid />
        <FarmerStory />
      </main>

      <Footer />
    </div>
  )
}
