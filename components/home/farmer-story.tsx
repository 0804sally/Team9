import { Quote } from "lucide-react"

export function FarmerStory() {
  return (
    <section className="py-20 bg-brand-green/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative flex flex-col lg:flex-row items-center gap-12 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-brand-green/10 border border-brand-green/10">
          
          {/* Farmer Image Wrapper */}
          <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1000"
              alt="Farmer Kim"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xl font-bold">김영호 생산자님</p>
              <p className="text-sm opacity-90">경기 남양주 유기농 농장 (12년차)</p>
            </div>
          </div>

          {/* Interview Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
              <Quote className="h-6 w-6 fill-current" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 leading-tight">
              "새벽 이슬을 맞고 <br />
              <span className="text-brand-green underline decoration-brand-green/30 decoration-8 underline-offset-4">직접 수확할 때가</span> 가장 행복합니다."
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed italic">
              "제 자식들이 먹는다는 생각으로 12년 동안 한결같이 유기농 농법을 고집해왔습니다. 
              유통 과정을 줄여 고객님들께 더 신선하게 전달할 수 있는 '농장직송'을 만나 정말 기쁩니다. 
              저희 땅의 정직한 맛을 오늘 식탁에서 꼭 느껴보세요."
            </p>
            <div className="pt-4 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                alt="Signature"
                className="h-12 w-12 rounded-full border-2 border-brand-green/20"
              />
              <div>
                <p className="font-bold text-gray-800">김영호 농부님</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="h-1 w-4 rounded-full bg-brand-green" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
