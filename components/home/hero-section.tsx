import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto flex h-full items-center px-4 md:px-6">
        <div className="max-w-2xl space-y-6">
          <div className="inline-block rounded-full bg-brand-green/20 px-4 py-1.5 backdrop-blur-sm border border-brand-green/30">
            <span className="text-sm font-semibold tracking-wide text-white drop-shadow-md">
              신선한 산지 직송 알림
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
            산지의 신선함을 <br />
            <span className="text-brand-green">식탁으로 바로</span>
          </h1>
          <p className="max-w-lg text-lg text-gray-100 sm:text-xl md:text-2xl drop-shadow-md">
            유통 과정 없이 농부의 정성을 그대로 담아 전달합니다.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="flex h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-8 text-lg font-bold text-white transition-all hover:bg-green-700 hover:scale-105 active:scale-95 shadow-lg">
              지금 쇼핑하기
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="flex h-12 items-center justify-center rounded-full bg-white/20 px-8 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/30 hover:scale-105 active:scale-95 border border-white/40">
              생산자 이야기
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
