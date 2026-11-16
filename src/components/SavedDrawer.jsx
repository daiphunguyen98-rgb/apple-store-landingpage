import { useEffect } from 'react'
import { ArrowRight, Heart, Menu, X } from 'lucide-react'
import { products, productImageFallback } from '../data/mockData'

const formatPrice = (price) => `${new Intl.NumberFormat('vi-VN').format(price)}₫`

export default function SavedDrawer({
  isOpen,
  mode,
  wishlist,
  onClose,
  onSelectProduct,
  onReserve,
}) {
  useEffect(() => {
    if (!isOpen) return undefined

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
  }, [isOpen, onClose])

  if (!isOpen) return null

  const savedProducts = products.filter((product) => wishlist.includes(product.id))

  return (
    <div className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        className="animate-drawer-in ml-auto flex h-full w-full max-w-md flex-col bg-white shadow-2xl dark:bg-[#1D1D1F]"
      >
        <div className="flex items-center justify-between border-b border-black/5 px-6 py-5 dark:border-white/10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F7] text-[#0071E3] dark:bg-white/10">
              {mode === 'menu' ? <Menu size={19} /> : <Heart size={19} />}
            </span>
            <div>
              <h2 id="drawer-title" className="text-lg font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                {mode === 'menu' ? 'Khám phá' : 'Thiết bị đã lưu'}
              </h2>
              <p className="text-xs text-[#86868B]">
                {mode === 'menu' ? 'Apple Flagship Store' : `${savedProducts.length} sản phẩm`}
              </p>
            </div>
          </div>
          <button type="button" onClick={onClose} aria-label="Đóng" className="rounded-full bg-black/5 p-2 text-[#6E6E73] hover:bg-black/10 dark:bg-white/10 dark:text-[#d2d2d7]">
            <X size={18} />
          </button>
        </div>

        {mode === 'menu' ? (
          <nav className="flex-1 px-6 py-4" aria-label="Menu di động">
            {[
              { label: 'Sản phẩm', href: '#products' },
              { label: 'Đặc quyền', href: '#benefits' },
              { label: 'Hỏi đáp', href: '#faq' },
              { label: 'Đặt lịch tư vấn', href: '#contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between border-b border-black/5 py-5 text-base font-medium text-[#1D1D1F] dark:border-white/10 dark:text-[#F5F5F7]"
              >
                {link.label} <ArrowRight size={17} className="text-[#86868B]" />
              </a>
            ))}
          </nav>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {savedProducts.length > 0 ? (
              <div className="space-y-3">
                {savedProducts.map((product) => (
                  <article key={product.id} className="flex gap-4 rounded-2xl bg-[#F5F5F7] p-3 dark:bg-[#252527]">
                    <button type="button" onClick={() => onSelectProduct(product)} className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-white p-2 dark:bg-[#1D1D1F]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain"
                        onError={(event) => {
                          event.currentTarget.onerror = null
                          event.currentTarget.src = productImageFallback
                        }}
                      />
                    </button>
                    <div className="flex min-w-0 flex-1 flex-col justify-center">
                      <button type="button" onClick={() => onSelectProduct(product)} className="text-left text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                        {product.name}
                      </button>
                      <p className="mt-1 text-sm font-medium text-[#424245] dark:text-[#d2d2d7]">{formatPrice(product.price)}</p>
                      <button type="button" onClick={() => onReserve(product)} className="mt-2 w-fit text-xs font-medium text-[#0071E3] hover:underline">
                        Nhận báo giá
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F5F7] text-[#86868B] dark:bg-white/10">
                  <Heart size={24} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">Chưa có thiết bị nào</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[#86868B]">
                  Chạm vào biểu tượng trái tim trên sản phẩm để lưu những thiết bị bạn yêu thích.
                </p>
              </div>
            )}
          </div>
        )}
        {mode !== 'menu' && savedProducts.length > 0 && (
          <div className="border-t border-black/5 p-6 dark:border-white/10">
            <a href="#products" onClick={onClose} className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0071E3] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0077ED]">
              Tiếp tục khám phá <ArrowRight size={16} />
            </a>
          </div>
        )}
      </aside>
    </div>
  )
}
