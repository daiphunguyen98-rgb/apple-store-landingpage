import { Heart, Plus } from 'lucide-react'
import { productImageFallback } from '../data/mockData'

const formatPrice = (price) => `${new Intl.NumberFormat('vi-VN').format(price)}₫`

export default function ProductCard({ product, isSaved, onToggleSaved, onSelect }) {
  return (
    <article
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-black/5 bg-white transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl dark:border-white/10 dark:bg-[#1D1D1F]"
      onClick={() => onSelect(product)}
    >
      <div className="relative flex h-60 items-center justify-center overflow-hidden bg-[#F5F5F7] p-5 dark:bg-[#252527] sm:h-64">
        {product.badge && (
          <span className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#0071E3] shadow-sm backdrop-blur dark:bg-black/50 dark:text-[#64b5ff]">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          aria-label={isSaved ? `Bỏ lưu ${product.name}` : `Lưu ${product.name}`}
          aria-pressed={isSaved}
          className={`absolute right-4 top-4 z-10 rounded-full p-2.5 transition-all ${
            isSaved
              ? 'bg-[#0071E3] text-white'
              : 'bg-white/90 text-[#6E6E73] hover:text-[#0071E3] dark:bg-black/50 dark:text-[#d2d2d7]'
          }`}
          onClick={(event) => {
            event.stopPropagation()
            onToggleSaved(product.id)
          }}
        >
          <Heart size={17} fill={isSaved ? 'currentColor' : 'none'} />
        </button>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = productImageFallback
          }}
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-medium text-[#86868B]">{product.category}</p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
          {product.name}
        </h3>
        <p className="mt-1 min-h-10 text-sm leading-5 text-[#86868B]">{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <p className="font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
              {formatPrice(product.price)}
            </p>
            {product.originalPrice > product.price && (
              <p className="mt-0.5 text-xs text-[#86868B] line-through">
                {formatPrice(product.originalPrice)}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onSelect(product)
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0071E3] text-white transition-colors hover:bg-[#0077ED]"
            aria-label={`Xem ${product.name}`}
          >
            <Plus size={18} />
          </button>
        </div>
        <div className="mt-4 flex items-center gap-1.5" aria-label="Màu sắc">
          {product.colors.map((color) => (
            <span
              key={`${product.id}-${color}`}
              className="h-3.5 w-3.5 rounded-full border border-black/10 dark:border-white/20"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </article>
  )
}
