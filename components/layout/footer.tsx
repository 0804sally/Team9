import Link from "next/link"
import { PhoneCall } from "lucide-react"

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17Z"/><path d="m10 15 5-3-5-3z"/></svg>
)

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 pb-12 border-b border-gray-800">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green text-white font-bold text-lg">
                농
              </div>
              <span className="text-2xl font-bold text-white">농장직송</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              생산자의 진심을 식탁으로 바로 전달하는 
              믿을 수 있는 농산물 직거래 플랫폼입니다.
            </p>
            <div className="flex gap-4">
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-brand-green hover:text-white transition-all">
                <InstagramIcon />
              </button>
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-brand-green hover:text-white transition-all">
                <YoutubeIcon />
              </button>
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-brand-green hover:text-white transition-all">
                <FacebookIcon />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-bold">서비스</h4>
              <ul className="space-y-2 text-sm italic">
                <li><Link href="#" className="hover:text-brand-green transition-colors">새벽배송 안내</Link></li>
                <li><Link href="#" className="hover:text-brand-green transition-colors">정기구독 서비스</Link></li>
                <li><Link href="#" className="hover:text-brand-green transition-colors">농장 투어 신청</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold">고객지원</h4>
              <ul className="space-y-2 text-sm italic">
                <li><Link href="#" className="hover:text-brand-green transition-colors">자주 묻는 질문</Link></li>
                <li><Link href="#" className="hover:text-brand-green transition-colors">1:1 문의</Link></li>
                <li><Link href="#" className="hover:text-brand-green transition-colors">입점 문의</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold">약관</h4>
              <ul className="space-y-2 text-sm italic">
                <li><Link href="#" className="hover:text-brand-green transition-colors">이용약관</Link></li>
                <li><Link href="#" className="hover:text-brand-green transition-colors">개인정보처리방침</Link></li>
              </ul>
            </div>
          </div>

          {/* Customer Center */}
          <div className="space-y-4">
            <h4 className="text-white font-bold">고객센터</h4>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-brand-green/10 text-brand-green">
                <PhoneCall className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-black text-white">1588-1234</p>
              </div>
            </div>
            <p className="text-xs">
              평일 09:00 - 18:00 (주말/공휴일 휴무) <br />
              점심 12:00 - 13:00
            </p>
            <button className="w-full py-3 rounded-xl border border-gray-700 hover:border-brand-green hover:text-brand-green transition-all text-sm font-bold">
              카카오톡 실시간 상담
            </button>
          </div>

        </div>

        {/* Business Info */}
        <div className="pt-8 text-xs leading-relaxed opacity-60">
          <p>상호명: (주)농장직송 | 대표자: 최예슬 | 사업자번호: 000-00-00000 | 통신판매업신고: 2026-서울강남-0000호</p>
          <p>주소: 서울특별시 강남구 테헤란로 000 농장빌딩 12층 | 개인정보책임자: 최예슬</p>
          <p className="mt-4">© 2026 FarmDirect Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
