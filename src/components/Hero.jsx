import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-amber-300/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] rounded-full bg-rose-300/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700">
              {t('hero.title')}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-gray-700 max-w-xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex gap-4"
          >
            <a href="/products" className="px-6 py-3 rounded-full bg-amber-600 text-white font-semibold shadow-lg hover:shadow-amber-200/60 hover:-translate-y-0.5 transition-all">
              {t('hero.ctaPrimary')}
            </a>
            <a href="/about" className="px-6 py-3 rounded-full bg-white text-amber-700 ring-1 ring-amber-200 hover:bg-amber-50 font-semibold transition-all">
              {t('hero.ctaSecondary')}
            </a>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scale: 0.9, rotate: -8, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 12 }}
            className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-100 to-rose-100 p-2 shadow-2xl"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-center bg-cover animate-[float_6s_ease-in-out_infinite]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1600&auto=format&fit=crop)' }} />
            </div>
          </motion.div>
          <style>{`@keyframes float {0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)}}`}</style>
        </div>
      </div>
    </section>
  )
}
