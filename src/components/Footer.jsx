import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()
  return (
    <footer className="border-t mt-12 py-8 text-sm text-gray-600 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <p>© {year} {t('brand')} — {t('footer.rights')}</p>
        <div className="flex items-center gap-4">
          <a href="/" className="hover:text-amber-600">{t('nav.home')}</a>
          <a href="/products" className="hover:text-amber-600">{t('nav.products')}</a>
          <a href="/about" className="hover:text-amber-600">{t('nav.about')}</a>
          <a href="/contact" className="hover:text-amber-600">{t('nav.contact')}</a>
        </div>
      </div>
    </footer>
  )
}
