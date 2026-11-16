import { useEffect } from 'react'
import { Check, CreditCard, X } from 'lucide-react'
import { productImageFallback } from '../data/mockData'

const formatPrice = (price) => `${new Intl.NumberFormat('vi-VN').format(price)}₫`

export default function ProductModal({ product, onClose, onReserve }) {
  useEffect(() => {
    if (!product) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [product, onClose])

  if (!product) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      role="presentation"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl dark:bg-[#1D1D1F]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng chi tiết sản phẩm"
          className="absolute right-4 top-4 z-10 rounded-full bg-black/5 p-2 text-[#6E6E73] transition hover:bg-black/10 dark:bg-white/10 dark:text-[#d2d2d7]"
        >
          <X size={18} />
        </button>
        <div className="grid md:grid-cols-2">
          <div className="flex min-h-72 items-center justify-center bg-[#F5F5F7] p-8 dark:bg-[#252527] md:min-h-[500px]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[420px] w-full object-contain"
              onError={(event) => {
                event.currentTarget.onerror = null
                event.currentTarget.src = productImageFallback
              }}
            />
          </div>
          <div className="p-6 sm:p-9">
            <p className="eyebrow">{product.category}</p>
            <h2 id="product-modal-title" className="mt-2 pr-7 text-2xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] sm:text-3xl">
              {product.name}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#86868B]">{product.description}</p>
            <div className="mt-5 flex items-center gap-2" aria-label="Màu sắc">
              {product.colors.map((color, index) => (
                <span
                  key={`${product.id}-modal-${color}`}
                  className={`h-6 w-6 rounded-full border border-black/10 dark:border-white/20 ${index === 0 ? 'ring-2 ring-[#0071E3] ring-offset-2 dark:ring-offset-[#1D1D1F]' : ''}`}
                  style={{ backgroundColor: color }}
                />
              ))}
              <span className="ml-1 text-xs text-[#86868B]">Màu sắc tùy chọn</span>
            </div>
            <div className="mt-6 border-y border-black/5 py-5 dark:border-white/10">
              <p className="text-2xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                {formatPrice(product.price)}
              </p>
              <p className="mt-1 text-sm text-[#86868B]">Giá đã bao gồm VAT · Bảo hành chính hãng 12 tháng</p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#F5F5F7] px-3 py-1.5 text-xs text-[#6E6E73] dark:bg-white/10 dark:text-[#d2d2d7]">
                <CreditCard size={14} className="text-[#0071E3]" />
                Hỗ trợ trả góp 0% lãi suất
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">Thông số kỹ thuật</h3>
              <dl className="mt-3 space-y-3">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex gap-4 text-sm">
                    <dt className="w-28 shrink-0 text-[#86868B]">{spec.label}</dt>
                    <dd className="text-[#424245] dark:text-[#d2d2d7]">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <button
              type="button"
              onClick={() => onReserve(product)}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#0071E3] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0077ED]"
            >
              <Check size={17} /> Đặt trước / Nhận báo giá máy này
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
