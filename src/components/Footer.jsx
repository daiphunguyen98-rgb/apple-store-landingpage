import { Apple, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F7] py-10 dark:bg-black">
      <div className="section-wrap">
        <div className="flex flex-col justify-between gap-8 border-b border-black/10 pb-8 dark:border-white/10 sm:flex-row sm:items-start">
          <div className="max-w-sm">
            <a href="#top" className="inline-flex items-center gap-2 text-[#1D1D1F] dark:text-[#F5F5F7]">
              <Apple size={22} />
              <span className="text-sm font-semibold">Apple Flagship Store</span>
            </a>
            <p className="mt-3 text-sm leading-6 text-[#86868B]">
              Đại lý ủy quyền Apple tại Việt Nam. Sản phẩm chính hãng, dịch vụ tận tâm, trải nghiệm trọn vẹn.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
            <a href="#products" className="text-[#6E6E73] hover:text-[#0071E3] dark:text-[#a1a1a6]">Sản phẩm</a>
            <a href="#benefits" className="text-[#6E6E73] hover:text-[#0071E3] dark:text-[#a1a1a6]">Đặc quyền</a>
            <a href="#faq" className="text-[#6E6E73] hover:text-[#0071E3] dark:text-[#a1a1a6]">Hỏi đáp</a>
            <a href="#contact" className="inline-flex items-center gap-1 text-[#6E6E73] hover:text-[#0071E3] dark:text-[#a1a1a6]">
              Liên hệ <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-5 text-xs text-[#86868B] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Apple Flagship Store. Mọi quyền được bảo lưu.</p>
          <p>Apple, iPhone, Mac và các nhãn hiệu liên quan thuộc Apple Inc.</p>
        </div>
      </div>
    </footer>
  )
}
