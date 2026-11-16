import { useEffect, useState } from 'react'
import { Apple, Heart, Menu, Moon, Sun } from 'lucide-react'

const links = [
  { label: 'Sản phẩm', href: '#products' },
  { label: 'Đặc quyền', href: '#benefits' },
  { label: 'Hỏi đáp', href: '#faq' },
]

export default function Navbar({
  theme,
  onToggleTheme,
  wishlistCount,
  onOpenSaved,
  onOpenMenu,
}) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-transparent transition-all duration-300 ${
        isScrolled
          ? 'h-14 border-black/5 bg-white/80 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-black/80'
          : 'h-20 bg-[#F5F5F7]/80 backdrop-blur-md dark:bg-black/70'
      }`}
    >
      <nav className="section-wrap flex h-full items-center justify-between" aria-label="Điều hướng chính">
        <a href="#top" className="flex items-center gap-2 text-[#1D1D1F] dark:text-[#F5F5F7]" aria-label="Apple Flagship Store">
          <Apple size={23} strokeWidth={1.8} />
          <span className="text-sm font-semibold tracking-tight">Flagship Store</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-[#424245] transition-colors hover:text-[#0071E3] dark:text-[#d2d2d7] dark:hover:text-[#2997ff]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full p-2.5 text-[#424245] transition-colors hover:bg-black/5 dark:text-[#d2d2d7] dark:hover:bg-white/10"
            aria-label={theme === 'dark' ? 'Bật giao diện sáng' : 'Bật giao diện tối'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={onOpenSaved}
            className="relative rounded-full p-2.5 text-[#424245] transition-colors hover:bg-black/5 dark:text-[#d2d2d7] dark:hover:bg-white/10"
            aria-label={`Thiết bị đã lưu: ${wishlistCount}`}
          >
            <Heart size={18} />
            {wishlistCount > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#0071E3] px-1 text-[10px] font-semibold text-white">
                {wishlistCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={onOpenMenu}
            className="rounded-full p-2.5 text-[#424245] transition-colors hover:bg-black/5 dark:text-[#d2d2d7] dark:hover:bg-white/10 md:hidden"
            aria-label="Mở menu"
          >
            <Menu size={19} />
          </button>
        </div>
      </nav>
    </header>
  )
}
