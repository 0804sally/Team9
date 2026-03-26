import { Leaf, Apple, Wheat, Beef, Milk } from "lucide-react"

const CATEGORIES = [
  { name: "채소", icon: Leaf, color: "bg-green-100 text-green-600" },
  { name: "과일", icon: Apple, color: "bg-red-100 text-red-600" },
  { name: "곡류", icon: Wheat, color: "bg-yellow-100 text-yellow-600" },
  { name: "축산물", icon: Beef, color: "bg-pink-100 text-pink-600" },
  { name: "가공식품", icon: Milk, color: "bg-blue-100 text-blue-600" },
]

export function CategoryNav() {
  return (
    <section className="py-12 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-2xl font-bold text-gray-800 text-center">어떤 상품을 찾으시나요?</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {CATEGORIES.map((category) => (
            <button
              key={category.name}
              className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${category.color} shadow-sm transition-all group-hover:shadow-md group-hover:bg-white`}>
                <category.icon className="h-8 w-8 text-inherit" />
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-brand-green">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
