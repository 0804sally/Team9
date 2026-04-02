import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import SmartCart from "@/components/SmartCartView/SmartCart";

export default function SmartCartPreviewPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 overflow-x-hidden">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Title */}
          <div className="mb-8 border-b border-gray-200 pb-4">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">장바구니</h1>
            <p className="text-gray-500 mt-2 text-sm">
              신선한 산지직송 농산물을 묶음 배송으로 더 저렴하게 만나보세요.
            </p>
          </div>
          
          {/* Main Cart Component */}
          <SmartCart />
        </div>
      </main>

      <Footer />
    </div>
  );
}
