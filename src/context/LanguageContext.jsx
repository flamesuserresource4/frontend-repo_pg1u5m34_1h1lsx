import { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext()

const strings = {
  tr: {
    brand: 'Küresel Kadayıf',
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      products: 'Ürünlerimiz',
      contact: 'İletişim'
    },
    hero: {
      title: 'Dünyaya UZANAN KADAYIF LEZZETİ',
      subtitle: 'Ustalığın ve geleneğin buluştuğu, taptaze ve çıtır kadayıfı dünyanın dört bir yanına ulaştırıyoruz.',
      ctaPrimary: 'Ürünleri Keşfet',
      ctaSecondary: 'Hakkımızda'
    },
    highlights: {
      h1: 'Neden Biz?',
      items: [
        { title: '50+ Ülkeye İhracat', desc: 'Uluslararası kalite standartlarında üretim ve hızlı lojistik ağı.' },
        { title: 'Gelenekten Geleceğe', desc: 'Aile mirası tarifler, modern üretim teknolojileriyle buluşuyor.' },
        { title: 'Taze ve Doğal', desc: 'En kaliteli hammaddelerle günlük üretim.' }
      ]
    },
    products: {
      title: 'Ürünlerimiz',
      list: [
        { name: 'Tel Kadayıf', desc: 'Baklavalar ve özel tatlılar için ideal, ince tel dokulu kadayıf.' },
        { name: 'Yassı Kadayıf', desc: 'Kızartmalık tarifler için dengeli yapıda yassı kesim.' },
        { name: 'Dondurulmuş Kadayıf', desc: 'Uzun raf ömrü, pratik kullanım ve aynı tazelik.' },
        { name: 'Perakende Paket', desc: 'Market raflarına uygun, şık ambalajlarla perakende satış.' }
      ]
    },
    about: {
      title: 'Hakkımızda',
      content:
        'Gıda sektöründeki 30 yılı aşkın deneyimimizle, kadayıfı yerel lezzetten küresel bir markaya dönüştürdük. Üretim tesislerimiz uluslararası gıda güvenliği standartlarına (IFS, BRC, ISO 22000) uygundur.'
    },
    contact: {
      title: 'İletişim',
      subtitle: 'İhracat ve satış talepleriniz için bize ulaşın.',
      name: 'Ad Soyad',
      email: 'E‑posta',
      message: 'Mesajınız',
      send: 'Gönder',
      address: 'Adres',
      phone: 'Telefon',
      success: 'Teşekkürler! En kısa sürede dönüş yapacağız.'
    },
    footer: {
      rights: 'Tüm hakları saklıdır.'
    }
  },
  en: {
    brand: 'Global Kadaif',
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      contact: 'Contact'
    },
    hero: {
      title: 'CRISP DELIGHT FROM TURKEY TO THE WORLD',
      subtitle: 'We blend mastery and tradition to deliver fresh, crunchy kadaif across the globe.',
      ctaPrimary: 'Explore Products',
      ctaSecondary: 'Learn About Us'
    },
    highlights: {
      h1: 'Why Choose Us?',
      items: [
        { title: 'Export to 50+ Countries', desc: 'International grade production and rapid logistics network.' },
        { title: 'Heritage Meets Tech', desc: 'Family recipes crafted with modern manufacturing.' },
        { title: 'Fresh & Natural', desc: 'Top‑quality ingredients, daily production.' }
      ]
    },
    products: {
      title: 'Our Products',
      list: [
        { name: 'Shredded Kadaif', desc: 'Fine strands perfect for baklava and signature desserts.' },
        { name: 'Flat Kadaif', desc: 'Balanced cut for fried delicacies and savory uses.' },
        { name: 'Frozen Kadaif', desc: 'Extended shelf life with preserved freshness.' },
        { name: 'Retail Packs', desc: 'Elegant packaging designed for retail shelves.' }
      ]
    },
    about: {
      title: 'About Us',
      content:
        'With over 30 years in food manufacturing, we transformed kadaif from a local delicacy into a global brand. Our facilities comply with IFS, BRC, and ISO 22000 standards.'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Reach out for export and sales inquiries.',
      name: 'Full Name',
      email: 'Email',
      message: 'Your Message',
      send: 'Send',
      address: 'Address',
      phone: 'Phone',
      success: 'Thanks! We will get back to you shortly.'
    },
    footer: {
      rights: 'All rights reserved.'
    }
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('tr')
  const value = useMemo(() => ({
    lang,
    setLang,
    t: (path) => {
      const parts = path.split('.')
      let cur = strings[lang]
      for (const p of parts) {
        if (!cur) break
        cur = cur[p]
      }
      return cur || path
    },
    strings: strings[lang]
  }), [lang])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
