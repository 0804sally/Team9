import { Star, ShoppingCart } from "lucide-react"

const PRODUCTS = [
  {
    id: 1,
    name: "해남 고당도 꿀고구마 5kg",
    price: 24900,
    originalPrice: 32000,
    discount: 22,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600",
    tag: "수확직후"
  },
  {
    id: 2,
    name: "제주 한라봉 가정용 3kg",
    price: 18500,
    originalPrice: 21000,
    discount: 12,
    rating: 4.9,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=600",
    tag: "베스트"
  },
  {
    id: 3,
    name: "무농약 유기농 상추 200g",
    price: 3500,
    originalPrice: 4200,
    discount: 16,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1622206148070-eb811306a401?auto=format&fit=crop&q=80&w=600",
    tag: "방금수확"
  },
  {
    id: 4,
    name: "충북 괴산 명품 사과 5kg",
    price: 38000,
    originalPrice: 45000,
    discount: 15,
    rating: 5.0,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=600",
    tag: "한정수량"
  }
]

export function ProductGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">지금 가장 인기있는 품목</h2>
            <p className="text-gray-500 mt-2">오늘 아침 산지에서 도착한 신선한 먹거리</p>
          </div>
          <button className="text-sm font-semibold text-brand-green hover:underline">
            전체보기 &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-brand-green px-3 py-1 text-xs font-bold text-white shadow-sm">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-bold text-gray-700">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>
                
                <h3 className="mb-2 text-lg font-bold text-gray-800 line-clamp-2 min-h-[3.5rem] group-hover:text-brand-green transition-colors">
                  {product.name}
                </h3>

                <div className="mt-auto">
                  <div className="flex items-end gap-2">
                    <span className="text-xl font-black text-brand-orange">
                      {product.discount}%
                    </span>
                    <span className="text-xl font-black text-gray-900">
                      {product.price.toLocaleString()}원
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 line-through">
                    {product.originalPrice.toLocaleString()}원
                  </p>
                </div>

                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-50 py-3 text-sm font-bold text-gray-700 transition-all hover:bg-brand-green hover:text-white border border-gray-100 hover:border-brand-green">
                  <ShoppingCart className="h-4 w-4" />
                  담기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
