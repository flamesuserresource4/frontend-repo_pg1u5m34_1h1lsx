import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export default function Highlights() {
  const { t } = useLang()
  const items = t('highlights.items')

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          {t('highlights.h1')}
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white shadow/40 shadow-amber-100 ring-1 ring-amber-100"
            >
              <h3 className="font-semibold text-amber-700 text-lg">{it.title}</h3>
              <p className="text-gray-600 mt-2">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
