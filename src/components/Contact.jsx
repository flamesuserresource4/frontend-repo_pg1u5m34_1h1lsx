import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const { t } = useLang()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="pt-28 pb-16 min-h-screen bg-gradient-to-b from-white to-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-rose-600">
            {t('contact.title')}
          </h1>
          <p className="mt-3 text-gray-700">{t('contact.subtitle')}</p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="text-amber-600" size={18} />
              <span>+90 212 000 00 00</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-amber-600" size={18} />
              <span>İstanbul, Türkiye</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 ring-1 ring-amber-100 shadow-sm">
          {sent ? (
            <div className="text-green-700 font-medium">{t('contact.success')}</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">{t('contact.name')}</label>
                <input required className="mt-1 w-full rounded-xl border-gray-200 focus:ring-amber-500 focus:border-amber-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">{t('contact.email')}</label>
                <input type="email" required className="mt-1 w-full rounded-xl border-gray-200 focus:ring-amber-500 focus:border-amber-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">{t('contact.message')}</label>
                <textarea rows="5" required className="mt-1 w-full rounded-xl border-gray-200 focus:ring-amber-500 focus:border-amber-500" />
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600 text-white font-semibold shadow-lg hover:shadow-amber-200/60 hover:-translate-y-0.5 transition-all">
                <Send size={16} /> {t('contact.send')}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
