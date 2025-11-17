import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export default function About() {
  const { t } = useLang()
  return (
    <section className="pt-28 pb-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-rose-600"
        >
          {t('about.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg text-gray-700"
        >
          {t('about.content')}
        </motion.p>
      </div>
    </section>
  )
}
