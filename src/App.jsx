import { useCallback, useEffect, useState } from 'react'
import ContactForm from './components/ContactForm'
import FaqAccordion from './components/FaqAccordion'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductCatalog from './components/ProductCatalog'
import ProductModal from './components/ProductModal'
import SavedDrawer from './components/SavedDrawer'
import Toast from './components/Toast'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [theme, setTheme] = useLocalStorage('apple-store-theme', 'light')
  const [wishlist, setWishlist] = useLocalStorage('apple-store-wishlist', [])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [drawerMode, setDrawerMode] = useState('saved')
  const [selectedDevice, setSelectedDevice] = useState('')
  const [toastMessage, setToastMessage] = useState('')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  const toggleSaved = (productId) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    )
  }

  const openDrawer = useCallback((mode) => {
    setDrawerMode(mode)
    setIsDrawerOpen(true)
  }, [])

  const closeDrawer = useCallback(() => setIsDrawerOpen(false), [])
  const closeModal = useCallback(() => setSelectedProduct(null), [])
  const closeToast = useCallback(() => setToastMessage(''), [])

  const handleReserve = (product) => {
    setSelectedDevice(product.name)
    setSelectedProduct(null)
    setIsDrawerOpen(false)
    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] transition-colors duration-300 dark:bg-black dark:text-[#F5F5F7]">
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        wishlistCount={wishlist.length}
        onOpenSaved={() => openDrawer('saved')}
        onOpenMenu={() => openDrawer('menu')}
      />
      <main>
        <Hero onReserve={() => handleReserve({ name: 'iPhone 16 Pro Max' })} />
        <ProductCatalog
          wishlist={wishlist}
          onToggleSaved={toggleSaved}
          onSelectProduct={setSelectedProduct}
        />
        <FaqAccordion />
        <ContactForm
          selectedDevice={selectedDevice}
          onDeviceChange={setSelectedDevice}
          onSuccess={() => setToastMessage('Cảm ơn bạn! Chuyên viên sẽ sớm liên hệ tư vấn.')}
        />
      </main>
      <Footer />
      <ProductModal
        product={selectedProduct}
        onClose={closeModal}
        onReserve={handleReserve}
      />
      <SavedDrawer
        isOpen={isDrawerOpen}
        mode={drawerMode}
        wishlist={wishlist}
        onClose={closeDrawer}
        onSelectProduct={(product) => {
          setIsDrawerOpen(false)
          setSelectedProduct(product)
        }}
        onReserve={handleReserve}
      />
      <Toast message={toastMessage} onClose={closeToast} />
    </div>
  )
}

export default App
