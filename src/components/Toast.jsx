import { useEffect } from 'react'
import { CheckCircle2, X } from 'lucide-react'

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return undefined
    const timeoutId = window.setTimeout(onClose, 4500)
    return () => window.clearTimeout(timeoutId)
  }, [message, onClose])

  if (!message) return null

  return (
    <div role="status" aria-live="polite" className="fixed bottom-5 right-5 z-[60] flex max-w-sm items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-xl dark:border-white/10 dark:bg-[#252527]">
      <CheckCircle2 size={21} className="shrink-0 text-emerald-500" />
      <p className="flex-1 text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">{message}</p>
      <button type="button" onClick={onClose} aria-label="Đóng thông báo" className="rounded-full p-1 text-[#86868B] hover:bg-black/5 dark:hover:bg-white/10">
        <X size={16} />
      </button>
    </div>
  )
}
