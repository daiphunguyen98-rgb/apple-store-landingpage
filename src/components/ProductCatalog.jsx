import { useEffect, useMemo, useState } from 'react'
import { Heart, RotateCcw, Search, SlidersHorizontal, X } from 'lucide-react'
import { categories, products } from '../data/mockData'
import ProductCard from './ProductCard'

export default function ProductCatalog({
  wishlist,
  onToggleSaved,
  onSelectProduct,
}) {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [searchValue, setSearchValue] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [savedOnly, setSavedOnly] = useState(false)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedSearch(searchValue.trim().toLocaleLowerCase('vi'))
    }, 250)

    return () => window.clearTimeout(timeoutId)
  }, [searchValue])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === categories[0] || product.category === activeCategory
      const searchText = `${product.name} ${product.tagline}`.toLocaleLowerCase('vi')
      const matchesSearch = searchText.includes(debouncedSearch)
      const matchesWishlist = !savedOnly || wishlist.includes(product.id)

      return matchesCategory && matchesSearch && matchesWishlist
    })
  }, [activeCategory, debouncedSearch, savedOnly, wishlist])

  const resetFilters = () => {
    setActiveCategory(categories[0])
    setSearchValue('')
    setDebouncedSearch('')
    setSavedOnly(false)
  }

  return (
    <section id="products" className="scroll-mt-20 bg-white/60 py-16 dark:bg-[#111112] sm:py-20">
      <div className="section-wrap">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Cửa hàng</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-[#1D1D1F] dark:text-[#F5F5F7] sm:text-4xl">
              Chọn điều bạn yêu.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#86868B] sm:text-base">
              Khám phá những sản phẩm Apple mới nhất, được tuyển chọn dành cho bạn.
            </p>
          </div>
          <label className="relative block w-full lg:max-w-xs">
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#86868B]" />
            <input
              type="search"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Tìm sản phẩm..."
              className="h-12 w-full rounded-full border border-black/10 bg-white pl-11 pr-11 text-sm text-[#1D1D1F] outline-none transition focus:border-[#0071E3] dark:border-white/10 dark:bg-[#1D1D1F] dark:text-[#F5F5F7]"
            />
            {searchValue && (
              <button
                type="button"
                onClick={() => setSearchValue('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#86868B] hover:bg-black/5 dark:hover:bg-white/10"
                aria-label="Xóa từ khóa"
              >
                <X size={15} />
              </button>
            )}
          </label>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#1D1D1F] text-white dark:bg-white dark:text-[#1D1D1F]'
                    : 'bg-white text-[#6E6E73] hover:bg-black/5 dark:bg-[#1D1D1F] dark:text-[#d2d2d7] dark:hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setSavedOnly((current) => !current)}
            aria-pressed={savedOnly}
            className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
              savedOnly
                ? 'border-[#0071E3] bg-[#0071E3]/10 text-[#0071E3] dark:text-[#64b5ff]'
                : 'border-black/10 text-[#6E6E73] hover:border-black/20 dark:border-white/10 dark:text-[#d2d2d7]'
            }`}
          >
            {savedOnly ? <Heart size={16} fill="currentColor" /> : <SlidersHorizontal size={16} />}
            Chỉ xem thiết bị đã lưu
          </button>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isSaved={wishlist.includes(product.id)}
                onToggleSaved={onToggleSaved}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 flex min-h-72 flex-col items-center justify-center rounded-3xl border border-dashed border-black/10 bg-white px-6 text-center dark:border-white/10 dark:bg-[#1D1D1F]">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5F5F7] text-[#86868B] dark:bg-white/10">
              <Search size={22} />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              Chưa tìm thấy thiết bị phù hợp
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-[#86868B]">
              Thử từ khóa khác hoặc đặt lại bộ lọc để xem tất cả sản phẩm.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0071E3] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0077ED]"
            >
              <RotateCcw size={15} /> Đặt lại bộ lọc
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
