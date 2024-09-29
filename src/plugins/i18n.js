import { createI18n } from "vue-i18n";

const messages = {
  tk: {
    mail: "Mail",
    tel_belgi: "Telefon belgisi",
    salgy: "Salgy",
    dowamy: "Dowamy",
    gara: "Gara",
    ak: "Ak",
    tazelikler: "Täzelikler",
    suratlar: "Suratlar",
    haryt_gözle: " Haryt gözle",
    argroup_taze:
      "Nusaý ýollary täze döwrebap ýaşaýyş jaýlaryň gurluşygyna başlady",
    sowda_nokat: "Biziň söwda nokatlarymyz",
    at: "Adyňyz",
    mail: "Mail Adresiňiz",
    hat: "Hatyňyz",
    ugrat: "Ugrat",
    habarlashmak_un: "Habarlaşmak üçin",
    topar: "Topar",
    tema: "Tema",
    dil: "Dil",
    Biz_Barada: "Biz Barada",
    Habarlashmak: "Habarlaşmak",
    topar: "Topar",
  },
  // en:{
  //   mail: 'Mail',
  //   tel_belgi: 'Phone Numbers',
  //   salgy: 'Address',
  //   dowamy: 'Sequel',
  //   gara:"Dark",
  //   ak:"Light",
  //   tazelikler:"News",
  //   suratlar:'Photos',
  //   haryt_gözle:" Search for items",
  //   argroup_taze:"Nusaý ýollary started the construction of new modern houses",
  //   sowda_nokat:'Our Outlets',
  //   at:'Name',
  //   mail:'Email Address',
  //   hat:"Feedback",
  //   ugrat:'Send',
  //   habarlashmak_un:"For Contact",
  //   topar: 'Team',
  //   tema:'Theme',
  //   dil: 'Language',
  //   Biz_Barada: 'About Us',
  //   Habarlashmak: 'Contact Us',
  //   topar: 'Team',
  // },
  ru: {
    mail: "Эл. почта",
    tel_belgi: "Номер телефона",
    salgy: "Адрес",
    dowamy: "Продолжение",
    gara: "Черный",
    ak: "Белый",
    tazelikler: "Новости",
    suratlar: "Картинки",
    haryt_gözle: " Поиск предметов",
    sowda_nokat: "Наши магазины",
    at: "Ваше имя",
    mail: "Эл. почта",
    hat: "Сообщение",
    ugrat: "Отправить",
    habarlashmak_un: "Общаться",
    topar: "Группа",
    tema: "Тема",
    dil: "Язык",
    Biz_Barada: "О нас",
    Habarlashmak: "Связаться с нами",
    topar: "Группа",
  },
};

const i18n = createI18n({
  locale: "tk",
  legacy: false,
  messages,
  fallbackLocale: "ru",
});

// const app = createApp(App);
// app.use(i18n)
// app.mount(#app)

export default i18n;
