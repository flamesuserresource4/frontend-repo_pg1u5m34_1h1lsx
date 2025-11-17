import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export default function Products() {
  const { t } = useLang()
  const list = t('products.list')

  return (
    <section className="pt-28 pb-16 min-h-screen bg-gradient-to-b from-white to-amber-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-rose-600">
          {t('products.title')}
        </h1>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-5 ring-1 ring-amber-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-video rounded-xl bg-amber-100/50 mb-4 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src={`https://source.unsplash.com/collection/983219/800x600?sig=${i}`} alt={p.name} />
              </div>
              <h3 className="font-semibold text-lg text-amber-700">{p.name}</h3>
              <p className="text-gray-600 mt-1">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
