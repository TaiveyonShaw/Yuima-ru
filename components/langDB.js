// Date Constructor
const tuesdate = new Date();
const sundate = new Date();

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Date Automation
const sunday = 7 - sundate.getDay();
const tuesday = 7 - tuesdate.getDay() + 2;

const nextSunday = new Date(sundate.setDate(sundate.getDate() + sunday));
const nextTuesday = new Date(tuesdate.setDate(tuesdate.getDate() + tuesday));

// Loading updated dates for first time load
window.addEventListener("load", () => {
   document.querySelector('.biblestudy__date').innerHTML = '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + "Tue, " + months[nextTuesday.getMonth()] + " " + nextTuesday.getDate().toString() + ", 9:30 AM";
   document.querySelector('.biblestudy__date-modal').innerHTML = '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + 'Date/Time: ' + "Tue, " + months[nextTuesday.getMonth()] + " " + nextTuesday.getDate().toString() + ", 9:30 AM";
   document.querySelector('.worship__date').innerHTML = '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + "Sun, " + months[nextSunday.getMonth()] + " " + nextSunday.getDate().toString() + ", 10:00 AM";
   document.querySelector('.worship__date-modal').innerHTML = '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + 'Date/Time: ' + "Sun, " + months[nextSunday.getMonth()] + " " + nextSunday.getDate().toString() + ", 10:00 AM";
   document.querySelector('.jrchurch__date').innerHTML = '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + "Sun, " + months[nextSunday.getMonth()] + " " + nextSunday.getDate().toString() + ", 9:30 AM";
   document.querySelector('.jrchurch__date-modal').innerHTML = '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + 'Date/Time: ' + "Sun, " + months[nextSunday.getMonth()] + " " + nextSunday.getDate().toString() + ", 9:30 AM";
});

//  Language Selection variables
const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.languager');

/*=============== TRANSLATION CLASS VARIABLES ===============*/
// Nav Section
const nav__logoEl = document.querySelector('.nav__logo');
const nav__homeEl = document.querySelector('.nav__home');
const nav__aboutEl = document.querySelector('.nav__about');
const nav__scheduleEl = document.querySelector('.nav__schedule');
const nav__locationEl = document.querySelector('.nav__location');
const nav__contactEl = document.querySelector('.nav__contact');

// Home Section
const subtitleEl = document.querySelector('.home__subtitle');
const titleEl = document.querySelector('.home__title');
const home__descriptionEl = document.querySelector('.home__description');
const home__buttonEl = document.querySelector('.home__button');

// About Section
const about__titleEl = document.querySelector('.about__title');
const about__descriptionEl = document.querySelector('.about__announcement__description');
const about__announcement__buttonEl = document.querySelector('.about__announcement__button');
const about__location__titleEl = document.querySelector('.about__location__title');
const about__location__descriptionEl = document.querySelector('.about__location__description');
const about__locationEl = document.querySelector('.about__location');
const about__schedule__titleEl = document.querySelector('.about__schedule__title');
const about__schedule__descriptionEl = document.querySelector('.about__schedule__description');
const about__scheduleEl = document.querySelector('.about__schedule');

// Announcement Section
const announcement__titleEl = document.querySelector('.announcement__title');
const announcement__subtitleEl = document.querySelector('.announcement__subtitle');
const sunday__titleEl = document.querySelector('.sunday__title');
const sunday__descriptionEl = document.querySelector('.sunday__description');

// Annoucement Items
const lunch__titleEl = document.querySelector('.lunch__title');
const lunch__descriptionEl = document.querySelector('.lunch__description');
const templocation__titleEl = document.querySelector('.templocation__title');
const templocation__descriptionEl = document.querySelector('.templocation__description');
const prayer__titleEl = document.querySelector('.prayer__title');
const prayer__descriptionEl = document.querySelector('.prayer__description');

// Staff Section
const staff__titleEl = document.querySelector('.staff__title');
const staff__subtitleEl = document.querySelector('.staff__subtitle');
const staff1El = document.querySelector('.staff1');
const staff1__descriptionEl = document.querySelector('.staff1__description');
const staff2El = document.querySelector('.staff2');
const staff2__descriptionEl = document.querySelector('.staff2__description');

// Schedule Section
const schedule__titleEl = document.querySelector('.schedule__title');
const schedule__subtitleEl = document.querySelector('.schedule__subtitle');

// Event 1
const biblestudy__titleEl = document.querySelector('.biblestudy__title');
const biblestudy__locationEl = document.querySelector('.biblestudy__location');
const biblestudy__timeEl = document.querySelector('.biblestudy__time');
const biblestudy__addressEl = document.querySelector('.biblestudy__address');
const biblestudy__dateEl = document.querySelector('.biblestudy__date');
const biblestudy__descriptionEl = document.querySelector('.biblestudy__description');
const biblestudy__modaltitleEl = document.querySelector('.biblestudy__title-modal');
const biblestudy__modalEl = document.querySelector('.biblestudy__modal');

// Event 2
const worship__titleEl = document.querySelector('.worship__title');
const worship__locationEl = document.querySelector('.worship__location');
const worship__timeEl = document.querySelector('.worship__time');
const worship__addressEl = document.querySelector('.worship__address');
const worship__dateEl = document.querySelector('.worship__date');
const worship__descriptionEl = document.querySelector('.worship__description');
const worship__modaltitleEl = document.querySelector('.worship__modaltitle');
const worship__modalEl = document.querySelector('.worship__modal');

// Event 3
const jrchurch__titleEl = document.querySelector('.jrchurch__title');
const jrchurch__locationEl = document.querySelector('.jrchurch__location');
const jrchurch__timeEl = document.querySelector('.jrchurch__time');
const jrchurch__addressEl = document.querySelector('.jrchurch__address');
const jrchurch__dateEl = document.querySelector('.jrchurch__date');
const jrchurch__descriptionEl = document.querySelector('.jrchurch__description');
const jrchurch__modaltitleEl = document.querySelector('.jrchurch__modaltitle');
const jrchurch__modalEl = document.querySelector('.jrchurch__modal');

// Location Section
const location__titleEl = document.querySelector('.location__title');
const location__descriptionEl = document.querySelector('.location__description');
const location__addressEl = document.querySelector('.location__address');
const location__disclaimerEl = document.querySelector('.location__disclaimer');

// Contact Section
const contact__titleEl = document.querySelector('.contact__section_title');
const contact__subtitleEl = document.querySelector('.contact__section_subtitle');

// Left Contact Form
const left__contactEl = document.querySelector('.left__contact');

const email__titleEl = document.querySelector('.email__title');
const email__buttonEl = document.querySelector('.email__button');

const phone__titleEl = document.querySelector('.phone__title');
const phone__buttonEl = document.querySelector('.phone__button');

const address__titleEl = document.querySelector('.address__title');
const address__infoEl = document.querySelector('.address__info');
const address__buttonEl = document.querySelector('.address__button');

// Right Contact Form
const right__contactEl = document.querySelector('.right__contact');
const form__nameEl = document.querySelector('.form__name');
const form__emailEl = document.querySelector('.form__email');
const form__questionEl = document.querySelector('.form__question');
const submit__buttonEl = document.querySelector('.submit__button');

// Footer Section
const footer__logoEl = document.querySelector('.footer__logo');
const footer__descriptionEl = document.querySelector('.footer__description');
const footer__aboutEl = document.querySelector('.footer__about');
const about__usEl = document.querySelector('.about__us');
const about__staffEl = document.querySelector('.about__staff');
const about__announcementEl = document.querySelector('.about__announcement');
const footer__informationEl = document.querySelector('.footer__information');
const information__scheduleEl = document.querySelector('.information__schedule');
const information__locationEl = document.querySelector('.information__location');
const footer__contactEl = document.querySelector('.footer__contact');
const contact__phoneEl = document.querySelector('.contact__phone');
const contact__emailEl = document.querySelector('.contact__email');
const contact__addressEl = document.querySelector('.contact__address');
const underconstructionEl = document.querySelector('.underconstruction');

// Translation
link.forEach(el => {
   el.addEventListener('click', () => {
      // Select Language
      langEl.querySelector('.langActive').classList.remove('langActive');
      el.classList.add('langActive');
            
      const attr = el.getAttribute('lang');

      /*=============== TRANSLATION HTML ===============*/
      // Nav Bar
      nav__logoEl.innerHTML = data[attr].nav__logo;
      nav__homeEl.innerHTML = data[attr].nav__home;
      nav__aboutEl.innerHTML = data[attr].nav__about;
      nav__scheduleEl.innerHTML = data[attr].nav__schedule;
      nav__locationEl.innerHTML = data[attr].nav__location;
      nav__contactEl.innerHTML = data[attr].nav__contact;

      // Home Section
      subtitleEl.innerHTML = data[attr].home__subtitle;
      titleEl.innerHTML = data[attr].home__title;
      home__descriptionEl.innerHTML = data[attr].home__description;
      home__buttonEl.innerHTML = data[attr].home__button;

      // About Section
      about__titleEl.innerHTML = data[attr].about__title;
      about__descriptionEl.innerHTML = data[attr].about__announcement__description;
      about__announcement__buttonEl.innerHTML = data[attr].about__announcement__button;
      about__location__titleEl.innerHTML = data[attr].about__location__title;
      about__location__descriptionEl.innerHTML = data[attr].about__location__description;
      about__locationEl.innerHTML = data[attr].about__location;
      about__schedule__titleEl.innerHTML = data[attr].about__schedule__title;
      about__schedule__descriptionEl.innerHTML = data[attr].about__schedule__description;
      about__scheduleEl.innerHTML = data[attr].about__schedule;

      // Announcement Section
      announcement__titleEl.innerHTML = data[attr].announcement__title;
      announcement__subtitleEl.innerHTML = data[attr].announcement__subtitle;
      sunday__titleEl.innerHTML = data[attr].sunday__title;
      sunday__descriptionEl.innerHTML = data[attr].sunday__description;
      lunch__titleEl.innerHTML = data[attr].lunch__title;
      lunch__descriptionEl.innerHTML = data[attr].lunch__description;
      templocation__titleEl.innerHTML = data[attr].templocation__title;
      templocation__descriptionEl.innerHTML = data[attr].templocation__description;
      prayer__titleEl.innerHTML = data[attr].prayer__title;
      prayer__descriptionEl.innerHTML = data[attr].prayer__description;
      
      // Staff Section
      staff__titleEl.innerHTML = data[attr].staff__title;
      staff__subtitleEl.innerHTML = data[attr].staff__subtitle;
      staff1El.innerHTML = data[attr].staff1;
      staff1__descriptionEl.innerHTML = data[attr].staff1__description;
      staff2El.innerHTML = data[attr].staff2;
      staff2__descriptionEl.innerHTML = data[attr].staff2__description;
      
      // Schedule Section
      schedule__titleEl.innerHTML = data[attr].schedule__title;
      schedule__subtitleEl.innerHTML = data[attr].schedule__subtitle;

      // Event 1
      biblestudy__titleEl.innerHTML = data[attr].biblestudy__title;
      biblestudy__locationEl.innerHTML = data[attr].biblestudy__location;
      biblestudy__timeEl.innerHTML = data[attr].biblestudy__time;
      biblestudy__addressEl.innerHTML = data[attr].biblestudy__address;
      biblestudy__dateEl.innerHTML = data[attr].biblestudy__date;
      biblestudy__descriptionEl.innerHTML = data[attr].biblestudy__description;
      biblestudy__modaltitleEl.innerHTML = data[attr].biblestudy__modaltitle;
      biblestudy__modalEl.innerHTML = data[attr].biblestudy__modal;

      // Event 2
      worship__titleEl.innerHTML = data[attr].worship__title;
      worship__locationEl.innerHTML = data[attr].worship__location;
      worship__timeEl.innerHTML = data[attr].worship__time;
      worship__addressEl.innerHTML = data[attr].worship__address;
      worship__dateEl.innerHTML = data[attr].worship__date;
      worship__descriptionEl.innerHTML = data[attr].worship__description;
      worship__modaltitleEl.innerHTML = data[attr].worship__modaltitle;
      worship__modalEl.innerHTML = data[attr].worship__modal;

      // Event 3
      jrchurch__titleEl.innerHTML = data[attr].jrchurch__title;
      jrchurch__locationEl.innerHTML = data[attr].jrchurch__location;
      jrchurch__timeEl.innerHTML = data[attr].jrchurch__time;
      jrchurch__addressEl.innerHTML = data[attr].jrchurch__address;
      jrchurch__dateEl.innerHTML = data[attr].jrchurch__date;
      jrchurch__descriptionEl.innerHTML = data[attr].jrchurch__description;
      jrchurch__modaltitleEl.innerHTML = data[attr].jrchurch__modaltitle;
      jrchurch__modalEl.innerHTML = data[attr].jrchurch__modal;
      
      // Location Section
      location__titleEl.innerHTML = data[attr].location__title;
      location__descriptionEl.innerHTML = data[attr].location__description;
      location__addressEl.innerHTML = data[attr].location__address;
      location__disclaimerEl.innerHTML = data[attr].location__disclaimer;
      
      // Contact Section
      contact__titleEl.innerHTML = data[attr].contact__section_title;
      contact__subtitleEl.innerHTML = data[attr].contact__section_subtitle;
      left__contactEl.innerHTML = data[attr].left__contact;
      email__titleEl.innerHTML = data[attr].email__title;
      email__buttonEl.innerHTML = data[attr].email__button;
      phone__titleEl.innerHTML = data[attr].phone__title;
      phone__buttonEl.innerHTML = data[attr].phone__button;
      address__titleEl.innerHTML = data[attr].address__title;
      address__infoEl.innerHTML = data[attr].address__info;
      address__buttonEl.innerHTML = data[attr].address__button;
      right__contactEl.innerHTML = data[attr].right__contact;
      form__nameEl.innerHTML = data[attr].form__name;
      form__emailEl.innerHTML = data[attr].form__email;
      form__questionEl.innerHTML = data[attr].form__question;
      submit__buttonEl.innerHTML = data[attr].submit__button;
      
      // Footer Section
      footer__logoEl.innerHTML = data[attr].footer__logo;
      footer__descriptionEl.innerHTML = data[attr].footer__description;
      footer__aboutEl.innerHTML = data[attr].footer__about;
      about__usEl.innerHTML = data[attr].about__us;
      about__staffEl.innerHTML = data[attr].about__staff;
      about__announcementEl.innerHTML = data[attr].about__announcement;
      footer__informationEl.innerHTML = data[attr].footer__information;
      information__scheduleEl.innerHTML = data[attr].information__schedule;
      information__locationEl.innerHTML = data[attr].information__location;
      footer__contactEl.innerHTML = data[attr].footer__contact;
      contact__phoneEl.innerHTML = data[attr].contact__phone;
      contact__emailEl.innerHTML = data[attr].contact__email;
      contact__addressEl.innerHTML = data[attr].contact__address;
      underconstructionEl.innerHTML = data[attr].underconstruction;
   });
});

// Translation
let data = {
   "en": 
   {
    "nav__logo": "Yuima-ru",
    "nav__home": "Home",
    "nav__about": "About",
    "nav__schedule": "Schedule",
    "nav__location": "Location",
    "nav__contact": "Contact Us",
    "home__subtitle": "The Spirit of Cooperation",
    "home__title": "Yuima-ru Ishikawa Christian Church",
    "home__description": "Come join us in Ishikawa, Okinawa to learn about Christ with our Pastor, Ken Suzuki.",
    "home__button": "Learn more about us!" + '<i class="ri-arrow-right-line"></i>',
    "about__title": "About Us",
    "about__announcement__description": '<b>"Let us love each other as Jesus has loved us!"</b>',
    "about__announcement__button": "Check our Announcements" + '<i class="ri-arrow-right-line"></i>',
    "about__location__title": "Where are we?",
    "about__location__description": "We are a small and newly founded church located in Ishikawa! Come Join us to praise the lord with us!",
    "about__location": "See our Location" +  '<i class="ri-arrow-right-line"></i>',
    "about__schedule__title": "When should I come?",
    "about__schedule__description": "Please come 5 minutes before service to prepare and be seated for the service! See our schedule below for more details!",
    "about__schedule": "See our Schedule" + '<i class="ri-arrow-right-line"></i>',
    "announcement__title": "Announcements",
    "announcement__subtitle": "Weekly Announcement",
    "sunday__title": "Sunday Service",
    "sunday__description": "We will have service every Sunday at 10:00pm",
    "lunch__title": "Join us for Lunch",
    "lunch__description": "After the service, we will prepare lunch. Please join us!",
    "templocation__title": "Location until Heat Cools Down",
    "templocation__description": "The address will temporarily be at: <br> Uruma-shi Ishikawa 2107-8 (Pastor's house)",
    "prayer__title": "Prayer Requests",
    "prayer__description": "- For the city of Uruma. <br> - Family and Friends for salvation. <br> - For Peace in Israel. <br> - For peace between Russian and Ukraine",
    "staff__title": "Meet our Staff Members",
    "staff__subtitle": "Learn about our Staff Members",
    "staff1": "Ken Suzuki",
    "staff1__description": "Pastor / Missionary",
    "staff2": "Hisae Suzuki",
    "staff2__description": "Assistant",
    "schedule__title": "Schedule",
    "schedule__subtitle": "Weekly Schedule",
    "biblestudy__title": "Bible Study Session",
    "biblestudy__location": '<i class="fas fa-map-marker-alt qualification__modal-icon"></i>' + "Ishikawa, Uruma, Okinawa",
    "biblestudy__date": '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + "Tue, " + months[nextTuesday.getMonth()] + " " + nextTuesday.getDate().toString() + ", 9:30AM JST",
    "biblestudy__modal": "Read More" + '<i class="ri-arrow-right-line"></i>',
    "biblestudy__modaltitle": "Bible Study Session",
    "biblestudy__description": "Come join us for a Bible study session to better understand god's message!",
    "biblestudy__address": '<i class="ri-map-pin-line qualification__modal-icon"></i>' + '<a href="https://www.google.com/maps?ll=26.430002,127.828314&z=19&t=h&hl=en&gl=JP&mapclient=embed&q=1-ch%C5%8Dme-28-7+Ishikawa+Uruma,+Okinawa+904-1106" class="address__button" target="_blank">' + "Address: 1-chōme-28-6 Ishikawa" + "<br>" + "Uruma, Okinawa 〒904-1106 </a>",
    "biblestudy__time": '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + "Tue, " + months[nextTuesday.getMonth()] + " " + nextTuesday.getDate().toString() + ", 9:30AM JST",
    "worship__title": "Worship Services",
    "worship__location": '<i class="fas fa-map-marker-alt qualification__modal-icon"></i>' + "Ishikawa, Uruma, Okinawa",
    "worship__date": '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + "Sun, " + months[nextSunday.getMonth()] + " " + nextSunday.getDate().toString() + ", 10:00AM JST",
    "worship__modal": "Read More" + '<i class="ri-arrow-right-line"></i>',
    "worship__description": "Come join us for a Worship Service and Jr. Church to learn about god together!",
    "worship__modaltitle": "Bible Study Session",
    "worship__address": '<i class="ri-map-pin-line qualification__modal-icon"></i>' + '<a href="https://www.google.com/maps?ll=26.430002,127.828314&z=19&t=h&hl=en&gl=JP&mapclient=embed&q=1-ch%C5%8Dme-28-7+Ishikawa+Uruma,+Okinawa+904-1106" class="address__button" target="_blank">' + "Address: 1-chōme-28-6 Ishikawa" + "<br>" + "Uruma, Okinawa 〒904-1106 </a>",
    "worship__time": '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + "Date/Time: " + "Sun, " + months[nextSunday.getMonth()] + " " + nextSunday.getDate().toString() + ", 10:00AM JST",
    "jrchurch__title": "Jr. Church (English)",
    "jrchurch__location": '<i class="fas fa-map-marker-alt qualification__modal-icon"></i>' + "Ishikawa, Uruma, Okinawa",
    "jrchurch__date": '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + "Sun, " + months[nextSunday.getMonth()] + " " + nextSunday.getDate().toString() + ", 9:30AM JST",
    "jrchurch__modal": "Read More" + '<i class="ri-arrow-right-line"></i>',
    "jrchurch__modaltitle": "Jr. Church (English Only)",
    "jrchurch__description": "Come join us for Jr. Church for kids to learn about god!",
    "jrchurch__address": '<i class="ri-map-pin-line qualification__modal-icon"></i>' + '<a href="https://www.google.com/maps?ll=26.430002,127.828314&z=19&t=h&hl=en&gl=JP&mapclient=embed&q=1-ch%C5%8Dme-28-7+Ishikawa+Uruma,+Okinawa+904-1106" class="address__button" target="_blank">' + "Address: 1-chōme-28-6 Ishikawa" + "<br>" + "Uruma, Okinawa 〒904-1106 </a>",
    "jrchurch__time": '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + "Sun, " + months[nextSunday.getMonth()] + " " + nextSunday.getDate().toString() + ", 9:30AM JST",
    "location__title": "Location",
    "location__description": "Where are we located?",
    "location__address": "Address: 1-chōme-28-6 Ishikawa Uruma, Okinawa 〒904-1106",
    "location__disclaimer": "Note: The building is left of this building. Google maps for unknown reason has not recognized this address yet. <br> <br> Sorry for the inconvenience and confusion.",
    "contact__section_title": "Contact Us",
    "contact__section_subtitle": "Our Contact Info",
    "left__contact": '<i class="ri-information-line"></i>' + "Contact Information",
    "email__title": "E-mail",
    "email__button": "E-mail Us" + '<i class="ri-mail-line"></i>',
    "phone__title": "Phone Number",
    "phone__button": "Call Us" + '<i class="ri-phone-line"></i>',
    "address__title": "Our Address",
    "address__info": "1-chōme-28-6 Ishikawa <br> Uruma, Okinawa <br> 〒904-1106",
    "address__button": "Find our Address" + '<i class="ri-home-2-line"></i>',
    "right__contact": '<i class="ri-send-plane-line"></i>' + "Contact us!",
    "form__name": "Name",
    "form__email": "E-mail",
    "form__question": "Questions",
    "submit__button": "Submit" +  '<i class="ri-arrow-right-up-line"></i>',
    "footer__logo": "Yuima-ru",
    "footer__description": "The Spirit of Cooperation",
    "footer__about": "About",
    "about__us": "About Us",
    "about__staff": "Meet Our Staffs",
    "about__announcement": "Announcements",
    "footer__information": "Information",
    "information__schedule": "Schedules",
    "information__location": "Location",
    "footer__contact": "Contact",
    "contact__phone": "Phone Number",
    "contact__email": "E-mail",
    "contact__address": "Address",
    "underconstruction": "*Socials currently in-progress*",
  },
   "ja": 
   {
      "nav__logo": "ゆいまーる",
      "nav__home": "ホーム",
      "nav__about": "私たちについて",
      "nav__schedule": "スケジュール",
      "nav__location": "アクセス",
      "nav__contact": "コンタクト",
      "home__subtitle": "助け合い",
      "home__title": "ゆいまーる石川キリスト教会",
      "home__description": "沖縄県石川で鈴木健牧師と一緒にキリストについて学びましょう。",
      "home__button": "もっと詳しく知る" + '<i class="ri-arrow-right-line"></i>',
      "about__title": "私たちについて",
      "about__announcement__description": "<b>”イエスが私たちを愛してくださったように、私たちもお互いを愛し合いましょう！”</b>",
      "about__announcement__button": "お知らせ" + '<i class="ri-arrow-right-line"></i>',
      "about__location__title": "アクセス",
      "about__location__description": "私たちは、石川県にある新しく設立された小さな教会です。さあ、私たちと一緒に主を賛美しましょう！ ",
      "about__location": "アクセス" +  '<i class="ri-arrow-right-line"></i>',
      "about__schedule__title": "何時から",
      "about__schedule__description": "準備を整えてサービスの 5 分前に着席してください。",
      "about__schedule": "スケジュール" + '<i class="ri-arrow-right-line"></i>',
      "announcement__title": "お知らせ",
      "announcement__subtitle": "",
      "sunday__title": "主日礼拝",
      "sunday__description": "毎週日曜日10時より礼拝を行います.",
      "lunch__title": "昼食",
      "lunch__description": "礼拝後は昼食を準備します。皆さんご参加ください",
      "templocation__title": "残暑が厳しいため",
      "templocation__description": "残暑が厳しいため、当面、礼拝は10時より牧師宅で行います。 <br> うるま市石川 ２１０７－８ (牧師の家で)",
      "prayer__title": "祈りの課題",
      "prayer__description": "- うるま市石川地区の救いのために <br> - 家族、友人の救いの為に <br> - イスラエルの平和の為に <br> - ロシアとウクライナの平和の為に",
      "staff__title": "スタッフ紹介",
      "staff__subtitle": "当社のスタッフについて",
      "staff1": "鈴木 ケン",
      "staff1__description": "牧師 / 宣教師",
      "staff2": "鈴木 ひさえ（ちゃいちゃん）",
      "staff2__description": "アシスタント",
      "schedule__title": "スケジュール",
      "schedule__subtitle": "週間スケジュール",
      "biblestudy__title": "聖書勉強会",
      "biblestudy__location": '<i class="fas fa-map-marker-alt qualification__modal-icon"></i>' + "石川県うるま市沖縄",
      "biblestudy__time": '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + "火曜日, " + (nextTuesday.getMonth() + 1) + "月" + nextTuesday.getDate().toString() + "日, 9:30午前",
      "biblestudy__modal": "詳しく知る" + '<i class="ri-arrow-right-line"></i>',
      "biblestudy__modaltitle": "聖書勉強会",
      "biblestudy__description": "神のメッセージをより深く理解するために、聖書の勉強会にぜひご参加ください。",
      "biblestudy__address": '<i class="ri-map-pin-line qualification__modal-icon"></i>' + '<a href="https://www.google.com/maps?ll=26.430002,127.828314&z=19&t=h&hl=en&gl=JP&mapclient=embed&q=1-ch%C5%8Dme-28-7+Ishikawa+Uruma,+Okinawa+904-1106" class="address__button" target="_blank">' + "石川県うるま市1丁目28-6〒904-1106" + '</a>',
      "biblestudy__date": '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + "火曜日, " + (nextTuesday.getMonth() + 1) + "月" + nextTuesday.getDate().toString() + "日, 9:30午前",
      "worship__title": "主日礼拝",
      "worship__location": '<i class="fas fa-map-marker-alt qualification__modal-icon"></i>' + "石川県うるま市沖縄",
      "worship__time": '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + "日曜日, " + (nextSunday.getMonth() + 1) + "月" + nextSunday.getDate().toString() + "日, 10:00午前",
      "worship__modal": "詳しく知る" + '<i class="ri-arrow-right-line"></i>',
      "worship__modaltitle": "主日礼拝",
      "worship__description": "一緒に神様について学ぶ礼拝にぜひご参加ください！",
      "worship__address": '<i class="ri-map-pin-line qualification__modal-icon"></i>' + '<a href="https://www.google.com/maps?ll=26.430002,127.828314&z=19&t=h&hl=en&gl=JP&mapclient=embed&q=1-ch%C5%8Dme-28-7+Ishikawa+Uruma,+Okinawa+904-1106" class="address__button" target="_blank">' + "石川県うるま市1丁目28-6〒904-1106" + '</a>',
      "worship__date": '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + "日曜日, " + (nextSunday.getMonth() + 1) + "月" + nextSunday.getDate().toString() + "日, 10:00午前",
      "jrchurch__title": "ジュニアチャーチ（英語）",
      "jrchurch__location": '<i class="fas fa-map-marker-alt qualification__modal-icon"></i>' + "石川県うるま市沖縄",
      "jrchurch__time": '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + "日曜日, " + (nextSunday.getMonth() + 1) + "月" + nextSunday.getDate().toString() + "日, 9:30午前",
      "jrchurch__modal": "詳しく知る" + '<i class="ri-arrow-right-line"></i>',
      "jrchurch__modaltitle": "ジュニアチャーチ（英語)",
      "jrchurch__description": "子供たちが神について学ぶためのジュニアチャーチにぜひ参加してください！",
      "jrchurch__address": '<i class="ri-map-pin-line qualification__modal-icon"></i>' + '<a href="https://www.google.com/maps?ll=26.430002,127.828314&z=19&t=h&hl=en&gl=JP&mapclient=embed&q=1-ch%C5%8Dme-28-7+Ishikawa+Uruma,+Okinawa+904-1106" class="address__button" target="_blank">' + "石川県うるま市1丁目28-6〒904-1106" + '</a>',
      "jrchurch__date": '<i class="far fa-calendar-alt qualification__modal-icon"></i>' + "日曜日, " + (nextSunday.getMonth() + 1) + "月" + nextSunday.getDate().toString() + "日, 9:30午前",
      "location__title": "アクセス",
      "location__description": "私たちはどこにいますか?",
      "location__address": "アドレス: 〒904-1106 沖縄県うるま市石川1丁目28-6",
      "location__disclaimer": "注: この建物の左側にあります。不明な理由により、Google マップはこの住所をまだ認識していません。 <br> <br> ご迷惑と混乱をおかけして申し訳ございません。",
      "contact__section_title": "コンタクト",
      "contact__section_subtitle": "弊社の連絡先情報",
      "left__contact": '<i class="ri-information-line"></i>' + "連絡先",
      "email__title": "Eメール",
      "email__button": "Eメールする" + '<i class="ri-mail-line"></i>',
      "phone__title": "電話番号",
      "phone__button": "電話する" + '<i class="ri-phone-line"></i>',
      "address__title": "渡したちの教会",
      "address__info": "〒904-1106 <br> 沖縄県うるま市 <br> 石川1丁目28-6",
      "address__button": "アドレスリンク" + '<i class="ri-home-2-line"></i>',
      "right__contact": '<i class="ri-send-plane-line"></i>' + "連絡する！",
      "form__name": "名前",
      "form__email": "Eメールアドレス",
      "form__question": "質問",
      "submit__button": "送る" +  '<i class="ri-arrow-right-up-line"></i>',
      "footer__logo": "ゆいまーる",
      "footer__description": "助け合い",
      "footer__about": "概要",
      "about__us": "私たちについて",
      "about__staff": "スタッフ紹介",
      "about__announcement": "報告",
      "footer__information": "情報",
      "information__schedule": "スケジュール",
      "information__location": "アクセス",
      "footer__contact": "コンタクト",
      "contact__phone": "電話番号",
      "contact__email": "Eメールアドレス",
      "contact__address": "住所",
      "underconstruction": "*SNSは作成中です*"
   },
}