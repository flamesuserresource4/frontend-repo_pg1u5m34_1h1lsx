import { useLang } from '../context/LanguageContext'
import { Globe, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-rose-600">{t('brand')}</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="/" className="hover:text-amber-600 transition-colors">{t('nav.home')}</a>
          <a href="/products" className="hover:text-amber-600 transition-colors">{t('nav.products')}</a>
          <a href="/about" className="hover:text-amber-600 transition-colors">{t('nav.about')}</a>
          <a href="/contact" className="hover:text-amber-600 transition-colors">{t('nav.contact')}</a>
          <button onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 hover:bg-amber-100">
            <Globe size={16} /> {lang.toUpperCase()}
          </button>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-white/50">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            <a href="/" className="hover:text-amber-600" onClick={() => setOpen(false)}>{t('nav.home')}</a>
            <a href="/products" className="hover:text-amber-600" onClick={() => setOpen(false)}>{t('nav.products')}</a>
            <a href="/about" className="hover:text-amber-600" onClick={() => setOpen(false)}>{t('nav.about')}</a>
            <a href="/contact" className="hover:text-amber-600" onClick={() => setOpen(false)}>{t('nav.contact')}</a>
            <button onClick={() => { setLang(lang === 'tr' ? 'en' : 'tr'); setOpen(false) }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 w-max">
              <Globe size={16} /> {lang.toUpperCase()}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
