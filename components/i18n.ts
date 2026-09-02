export type Language = "en" | "uz" | "ru";

export const translations = {
  en: {
    nav: {
      menu: "MENU",
      shop: "SHOP",
      story: "OUR STORY",
      reserve: "RESERVE",
      locations: "LOCATIONS",
    },
    hero: {
      title: "Mastering the Art of Coffee",
      subtitle: "EXPERIENCE THE EXTRAORDINARY",
      scroll: "SCROLL TO EXPLORE",
    },
    marquee: {
      text1: "ARTISANAL ROASTS",
      text2: "SINGLE ORIGIN",
      text3: "POUR OVER",
      text4: "ESPRESSO BAR",
      text5: "COLD BREW",
    },
    story: {
      title: "Our Story",
      p1: "Born from a passion for the perfect brew, Aura Roasters started as a small dream in a vintage garage. Today, we are a sanctuary for coffee lovers seeking the extraordinary.",
      p2: "We believe that coffee is more than just a drink; it is an experience, a ritual, and an art form. From the high-altitude farms to your cup, we obsess over every detail.",
      f1_title: "Ethically Sourced",
      f1_desc:
        "We partner directly with farmers across the globe to ensure fair wages and sustainable farming practices.",
      f2_title: "Master Roasted",
      f2_desc:
        "Every bean is hand-roasted in small batches to unlock its full potential and deepest flavors.",
      f3_title: "Perfectly Crafted",
      f3_desc:
        "Our baristas are artisans, turning every cup into a masterpiece of taste and presentation.",
    },
    menu: {
      title: "Signature Brews",
      view_details: "VIEW DETAILS",
      origin: "Origin",
      bean: "Selected Bean",
      roast: "Roast",
      add_to_cart: "ADD TO CART",
    },
    shop: {
      title: "Take Aura Home",
      subtitle:
        "Bring the extraordinary experience of our master roasters to your own kitchen with our premium whole bean selections.",
      add_to_cart: "ADD TO CART",
    },
    reserve: {
      title: "Reserve Your Experience",
      subtitle:
        "Whether it's a quiet morning of reflection, a casual business meeting, or an afternoon catching up with friends, secure your spot in our sanctuary.",
      note: "* For parties larger than 6, please contact us directly.",
      date: "Date",
      time: "Time",
      guests: "Guests",
      book: "BOOK TABLE",
      person: "Person",
      people: "People",
    },
    locations: {
      title: "Visit Us",
    },
    footer: {
      desc: "Elevating your daily ritual with artisanal roasts and uncompromising quality.",
      explore: "Explore",
      legal: "Legal",
      stay: "Stay Connected",
      stay_desc:
        "Subscribe to receive exclusive offers, new roast announcements, and brewing tips.",
      placeholder: "Enter your email",
      rights: "© 2026 Aura Roasters. All rights reserved.",
      crafted: "Crafted for perfection.",
    },
    cart: {
      title: "Your Cart",
      empty: "Your cart is empty",
      total: "Total",
      checkout: "CHECKOUT",
    },
    guide: {
      title: "The Art of Brewing",
      subtitle: "Every cup is a scientific masterpiece. Explore our process.",
    },
    toast: {
      added: "added to cart!",
      reserved: "Table reserved. We look forward to hosting you!",
      subscribed: "Successfully subscribed to our newsletter!",
      checkout: "Order placed successfully! Thank you.",
    },
  },
  uz: {
    nav: {
      menu: "MENYU",
      shop: "DO'KON",
      story: "BIZ HAQIMIZDA",
      reserve: "BAND QILISH",
      locations: "MANZILLAR",
    },
    hero: {
      title: "Qahva San'atini Mukammallashtirish",
      subtitle: "G'AYRIODDIY TAASSUROTNI HIS QILING",
      scroll: "KASHF ETISH UCHUN SURING",
    },
    marquee: {
      text1: "MAXSUS QOVURILGAN",
      text2: "YAKKA HUDUDLI",
      text3: "POUR OVER",
      text4: "ESPRESSO BAR",
      text5: "SOVUQ QAHVA",
    },
    story: {
      title: "Bizning Hikoya",
      p1: "Mukammal qahvaga bo'lgan ehtirosdan tug'ilgan Aura Roasters dastlab kichik garajdagi orzu edi. Bugun esa biz o'ziga xoslikni qidiruvchi qahva ixlosmandlari uchun ochiq maskanmiz.",
      p2: "Biz qahvani shunchaki ichimlik deb bilmaymiz; u o'zgacha bir his, marosim va san'at asaridir. Baland tog'lardagi plantatsiyalardan tortib finjoningizgacha, biz har bir detalga jiddiy e'tibor beramiz.",
      f1_title: "Halol Savdo",
      f1_desc:
        "Biz dehqonlarga adolatli haq to'lanishini va tabiatni asrashni ta'minlash uchun dunyo bo'ylab fermerlar bilan to'g'ridan-to'g'ri ishlaymiz.",
      f2_title: "Usta Qovuruvchilar",
      f2_desc:
        "Har bir qahva donasi eng chuqur ta'mini ochish uchun kichik partiyalarda qo'lda qovuriladi.",
      f3_title: "Mukammal Tayyorlangan",
      f3_desc:
        "Bizning baristalarimiz o'z ishining ustasi bo'lib, har bir finjonni ta'm va ko'rinish jihatdan san'at asariga aylantiradilar.",
    },
    menu: {
      title: "Maxsus Ichimliklar",
      view_details: "BATAFSIL",
      origin: "Kelib chiqishi",
      bean: "Tanlangan nav",
      roast: "Qovurilishi",
      add_to_cart: "SAVATGA QO'SHISH",
    },
    shop: {
      title: "Aura Uyga Oling",
      subtitle:
        "Bizning usta qovuruvchilarimizning g'ayrioddiy tajribasini premium butun qahva donalari orqali o'z oshxonangizga olib kiring.",
      add_to_cart: "SAVATGA QO'SHISH",
    },
    reserve: {
      title: "Joyni Band Qilish",
      subtitle:
        "Xoh u tinch tonggi tafakkur bo'lsin, xoh biznes uchrashuvi yoki do'stlar bilan suhbat, bizning maskanda o'z joyingizni band qiling.",
      note: "* 6 kishidan ko'p bo'lgan guruhlar uchun to'g'ridan-to'g'ri biz bilan bog'laning.",
      date: "Sana",
      time: "Vaqt",
      guests: "Mehmonlar",
      book: "BAND QILISH",
      person: "Kishi",
      people: "Kishi",
    },
    locations: {
      title: "Manzillarimiz",
    },
    footer: {
      desc: "Kunlik marosimingizni hunarmandlar tayyorlagan qahva va murosasiz sifat bilan yuqoriga ko'taring.",
      explore: "Kashf Etish",
      legal: "Huquqiy",
      stay: "Biz Bilan Qoling",
      stay_desc:
        "Maxsus takliflar, yangi qahvalar va tayyorlash sirlari haqida xabardor bo'lish uchun obuna bo'ling.",
      placeholder: "Emailingizni kiriting",
      rights: "© 2026 Aura Roasters. Barcha huquqlar himoyalangan.",
      crafted: "Mukammallik uchun yaratilgan.",
    },
    cart: {
      title: "Savatchangiz",
      empty: "Savatchangiz bo'sh",
      total: "Jami",
      checkout: "BUYURTMA BERISH",
    },
    guide: {
      title: "Qahva Tayyorlash San'ati",
      subtitle:
        "Har bir finjon - bu ilmiy san'at asari. Bizning jarayon bilan tanishing.",
    },
    toast: {
      added: "savatga qo'shildi!",
      reserved: "Stol band qilindi. Sizni kutib qolamiz!",
      subscribed: "Muvaffaqiyatli obuna bo'ldingiz!",
      checkout: "Buyurtma qabul qilindi! Rahmat.",
    },
  },
  ru: {
    nav: {
      menu: "МЕНЮ",
      shop: "МАГАЗИН",
      story: "О НАС",
      reserve: "БРОНЬ",
      locations: "ЛОКАЦИИ",
    },
    hero: {
      title: "Освоение Искусства Кофе",
      subtitle: "ИСПЫТАЙТЕ НЕВЕРОЯТНОЕ",
      scroll: "ЛИСТАЙТЕ ВНИЗ",
    },
    marquee: {
      text1: "АВТОРСКАЯ ОБЖАРКА",
      text2: "ОДИН РЕГИОН",
      text3: "ПУРОВЕР",
      text4: "ЭСПРЕССО БАР",
      text5: "КОЛД БРЮ",
    },
    story: {
      title: "Наша История",
      p1: "Рожденная из страсти к идеальному кофе, Aura Roasters началась как маленькая мечта в винтажном гараже. Сегодня мы — убежище для любителей кофе, ищущих невероятное.",
      p2: "Мы верим, что кофе — это больше, чем просто напиток; это опыт, ритуал и искусство. От высокогорных ферм до вашей чашки мы заботимся о каждой детали.",
      f1_title: "Этичное Производство",
      f1_desc:
        "Мы работаем напрямую с фермерами по всему миру, чтобы обеспечить справедливую оплату и устойчивое земледелие.",
      f2_title: "Мастерская Обжарка",
      f2_desc:
        "Каждое зерно обжаривается вручную небольшими партиями, чтобы раскрыть его полный потенциал и глубокие вкусы.",
      f3_title: "Идеально Приготовлено",
      f3_desc:
        "Наши бариста — ремесленники, превращающие каждую чашку в шедевр вкуса и презентации.",
    },
    menu: {
      title: "Фирменные Напитки",
      view_details: "ПОДРОБНЕЕ",
      origin: "Происхождение",
      bean: "Сорт кофе",
      roast: "Обжарка",
      add_to_cart: "В КОРЗИНУ",
    },
    shop: {
      title: "Возьми Aura Домой",
      subtitle:
        "Принесите невероятный опыт наших мастеров-обжарщиков на свою кухню с нашими премиальными зернами.",
      add_to_cart: "В КОРЗИНУ",
    },
    reserve: {
      title: "Забронировать Столик",
      subtitle:
        "Будь то тихое утро для размышлений, деловая встреча или послеобеденная беседа с друзьями, зарезервируйте место в нашем убежище.",
      note: "* Для групп более 6 человек, пожалуйста, свяжитесь с нами напрямую.",
      date: "Дата",
      time: "Время",
      guests: "Гости",
      book: "ЗАБРОНИРОВАТЬ",
      person: "Человек",
      people: "Человек",
    },
    locations: {
      title: "Наши Локации",
    },
    footer: {
      desc: "Возвышая ваш ежедневный ритуал благодаря авторской обжарке и бескомпромиссному качеству.",
      explore: "Навигация",
      legal: "Юр. информация",
      stay: "Будьте на связи",
      stay_desc:
        "Подпишитесь, чтобы получать эксклюзивные предложения, анонсы новых обжарок и советы по приготовлению.",
      placeholder: "Введите ваш email",
      rights: "© 2026 Aura Roasters. Все права защищены.",
      crafted: "Создано для совершенства.",
    },
    cart: {
      title: "Ваша Корзина",
      empty: "Ваша корзина пуста",
      total: "Итого",
      checkout: "ОФОРМИТЬ",
    },
    guide: {
      title: "Искусство Приготовления",
      subtitle: "Каждая чашка — это научный шедевр. Изучите наш процесс.",
    },
    toast: {
      added: "добавлено в корзину!",
      reserved: "Столик забронирован. Будем рады видеть вас!",
      subscribed: "Вы успешно подписались!",
      checkout: "Заказ оформлен! Спасибо.",
    },
  },
};
