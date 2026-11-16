import { useState } from 'react'
import { LoaderCircle, Send } from 'lucide-react'
import { products } from '../data/mockData'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  purchaseType: 'Mua thẳng',
  note: '',
}

function validateForm(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Vui lòng nhập họ và tên.'
  if (!/^(03|05|07|08|09)[0-9]{8}$/.test(form.phone.trim())) {
    errors.phone = 'Số điện thoại cần có 10 số và bắt đầu bằng 03, 05, 07, 08 hoặc 09.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
    errors.email = 'Vui lòng nhập địa chỉ email hợp lệ.'
  }
  if (!form.device) errors.device = 'Vui lòng chọn thiết bị bạn quan tâm.'
  return errors
}

export default function ContactForm({ selectedDevice, onDeviceChange, onSuccess }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm({ ...form, device: selectedDevice })
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    setIsSubmitting(true)
    window.setTimeout(() => {
      setIsSubmitting(false)
      setForm(initialForm)
      onDeviceChange('')
      setErrors({})
      onSuccess()
    }, 1500)
  }

  const inputClass =
    'mt-2 h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-[#1D1D1F] outline-none transition focus:border-[#0071E3] dark:border-white/10 dark:bg-[#111112] dark:text-[#F5F5F7]'
  const errorClass = 'mt-1.5 block text-xs text-red-600 dark:text-red-400'

  return (
    <section id="contact" className="scroll-mt-20 bg-white/60 py-16 dark:bg-[#111112] sm:py-20">
      <div className="section-wrap">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">Đồng hành cùng bạn</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#1D1D1F] dark:text-[#F5F5F7] sm:text-4xl">
              Một trải nghiệm
              <br /> thật riêng.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#86868B]">
              Để lại thông tin, chuyên viên Apple của chúng tôi sẽ liên hệ tư vấn đặt trước, Trade-in hoặc báo giá doanh nghiệp.
            </p>
            <div className="mt-8 rounded-3xl bg-[#F5F5F7] p-6 dark:bg-[#1D1D1F]">
              <p className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">Tư vấn tận tâm, không áp lực.</p>
              <p className="mt-2 text-sm leading-6 text-[#86868B]">Chọn thiết bị phù hợp, nhận thông tin giá và ưu đãi mới nhất từ cửa hàng.</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-[#1D1D1F] sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-[#424245] dark:text-[#d2d2d7]">
                Họ và tên
                <input
                  className={inputClass}
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  placeholder="Nguyễn Đại Phú"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <span className={errorClass}>{errors.name}</span>}
              </label>
              <label className="block text-sm font-medium text-[#424245] dark:text-[#d2d2d7]">
                Số điện thoại
                <input
                  className={inputClass}
                  value={form.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                  placeholder="0919999999"
                  autoComplete="tel"
                  inputMode="tel"
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && <span className={errorClass}>{errors.phone}</span>}
              </label>
              <label className="block text-sm font-medium text-[#424245] dark:text-[#d2d2d7] sm:col-span-2">
                Email
                <input
                  className={inputClass}
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  placeholder="daiphunguyen98@gmail.com"
                  autoComplete="email"
                  inputMode="email"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <span className={errorClass}>{errors.email}</span>}
              </label>
              <label className="block text-sm font-medium text-[#424245] dark:text-[#d2d2d7]">
                Thiết bị quan tâm
                <select
                  className={inputClass}
                  value={selectedDevice}
                  onChange={(event) => {
                    onDeviceChange(event.target.value)
                    setErrors((current) => ({ ...current, device: undefined }))
                  }}
                  aria-invalid={Boolean(errors.device)}
                >
                  <option value="">Chọn thiết bị</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.name}>{product.name}</option>
                  ))}
                </select>
                {errors.device && <span className={errorClass}>{errors.device}</span>}
              </label>
              <label className="block text-sm font-medium text-[#424245] dark:text-[#d2d2d7]">
                Hình thức
                <select
                  className={inputClass}
                  value={form.purchaseType}
                  onChange={(event) => updateField('purchaseType', event.target.value)}
                >
                  <option>Mua thẳng</option>
                  <option>Trả góp 0%</option>
                  <option>Thu cũ đổi mới Trade-in</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-[#424245] dark:text-[#d2d2d7] sm:col-span-2">
                Ghi chú <span className="font-normal text-[#86868B]">(không bắt buộc)</span>
                <textarea
                  rows="3"
                  value={form.note}
                  onChange={(event) => updateField('note', event.target.value)}
                  placeholder="Bạn cần tư vấn thêm điều gì?"
                  className="mt-2 w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-[#1D1D1F] outline-none transition focus:border-[#0071E3] dark:border-white/10 dark:bg-[#111112] dark:text-[#F5F5F7]"
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0071E3] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0077ED] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {isSubmitting ? <LoaderCircle size={17} className="animate-spin" /> : <Send size={16} />}
              {isSubmitting ? 'Đang gửi yêu cầu...' : 'Gửi yêu cầu tư vấn'}
            </button>
            <p className="mt-4 text-xs leading-5 text-[#86868B]">Thông tin của bạn được sử dụng để liên hệ tư vấn theo yêu cầu.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
