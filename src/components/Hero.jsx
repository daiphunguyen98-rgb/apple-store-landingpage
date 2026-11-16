import { ArrowDown, ArrowUpRight, CreditCard, RefreshCw, ShieldCheck, Truck } from 'lucide-react'
import { highlights, productImageFallback } from '../data/mockData'

const highlightIcons = {
  shield: ShieldCheck,
  refresh: RefreshCw,
  credit: CreditCard,
  truck: Truck,
}

export default function Hero({ onReserve }) {
  return (
    <section id="top" className="pt-20">
      <div className="section-wrap pb-12 pt-9 sm:pb-16 sm:pt-14">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#08090D] px-6 py-14 text-center text-white sm:px-12 sm:py-20 lg:py-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(74,108,170,0.42),transparent_58%)]" />
          <div className="absolute -bottom-48 left-1/2 -z-10 h-80 w-[80%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <span className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/75 backdrop-blur">
            Apple Authorized Reseller
          </span>
          <p className="mb-3 text-sm font-medium tracking-wide text-[#A7C9F6]">iPhone 16 Series</p>
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Sức mạnh trong
            <br className="sm:hidden" /> từng khoảnh khắc.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            Titan tinh xảo. Camera đỉnh cao. Trải nghiệm Apple trọn vẹn, cùng dịch vụ chính hãng tận tâm.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-[#0071E3] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0077ED]"
            >
              Khám phá sản phẩm <ArrowUpRight size={16} />
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Khám phá đặc quyền
            </a>
          </div>
          <button
            type="button"
            onClick={onReserve}
            aria-label="Đặt trước iPhone 16 Pro Max hoặc nhận tư vấn"
            className="group mx-auto mt-12 flex w-full max-w-md items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-left backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2997FF] sm:mt-16"
          >
            <img
              src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=240&q=80"
              alt="iPhone 16 Series"
              className="h-16 w-16 rounded-xl object-cover"
              onError={(event) => {
                event.currentTarget.onerror = null
                event.currentTarget.src = productImageFallback
              }}
            />
            <div className="flex-1">
              <p className="text-sm font-medium">iPhone 16 Pro Max</p>
              <p className="mt-1 text-xs text-white/55">Đặt trước · Nhận tư vấn ưu đãi</p>
            </div>
            <ArrowDown size={16} className="text-white/50 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>

        <div id="benefits" className="mt-14 scroll-mt-24 sm:mt-20">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Mua sắm đặc quyền</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] sm:text-3xl">
                Trải nghiệm Apple, theo cách tốt nhất.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#86868B]">
              Tận hưởng dịch vụ và những quyền lợi dành riêng cho bạn.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {highlights.map((highlight) => {
              const Icon = highlightIcons[highlight.icon]

              return (
                <article
                  key={highlight.id}
                  className={`group rounded-3xl border border-black/5 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#1D1D1F] ${highlight.className}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5F5F7] text-[#0071E3] dark:bg-white/10 dark:text-[#2997ff]">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <span className="rounded-full bg-[#F5F5F7] px-3 py-1 text-[11px] font-medium text-[#6E6E73] dark:bg-white/10 dark:text-[#d2d2d7]">
                      {highlight.detail}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-[#86868B]">
                    {highlight.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
