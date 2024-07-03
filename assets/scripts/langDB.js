const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Date Automation
const sunday = 7 - new Date().getDay();
const tuesday = 7 - new Date().getDay() + 2;

const nextSunday = new Date(new Date().setDate(new Date().getDate() + sunday));
const nextTuesday = new Date(
  new Date().setDate(new Date().getDate() + tuesday)
);

// Loading updated dates for first time load
window.addEventListener("load", () => {
  // document.querySelector(".biblestudy__date").innerHTML =
  //   '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
  //   "Tue, " +
  //   months[nextTuesday.getMonth()] +
  //   " " +
  //   nextTuesday.getDate().toString() +
  //   ", 9:30 AM";
  // document.querySelector(".biblestudy__date-modal").innerHTML =
  //   '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
  //   "Date/Time: " +
  //   "Tue, " +
  //   months[nextTuesday.getMonth()] +
  //   " " +
  //   nextTuesday.getDate().toString() +
  //   ", 9:30 AM";
  document.querySelector(".worshipDate").innerHTML =
    '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
    "Sun, " +
    months[nextSunday.getMonth()] +
    " " +
    nextSunday.getDate().toString() +
    ", 10:00 AM";
  document.querySelector(".worshipDate-modal").innerHTML =
    '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
    "Date/Time: " +
    "Sun, " +
    months[nextSunday.getMonth()] +
    " " +
    nextSunday.getDate().toString() +
    ", 10:00 AM";
  // document.querySelector(".jrchurch__date").innerHTML =
  //   '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
  //   "Sun, " +
  //   months[nextSunday.getMonth()] +
  //   " " +
  //   nextSunday.getDate().toString() +
  //   ", 9:30 AM";
  // document.querySelector(".jrchurch__date-modal").innerHTML =
  //   '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
  //   "Date/Time: " +
  //   "Sun, " +
  //   months[nextSunday.getMonth()] +
  //   " " +
  //   nextSunday.getDate().toString() +
  //   ", 9:30 AM";
});

//  Language Selection variables
const langEl = document.querySelector(".langWrap");
const link = document.querySelectorAll(".languager");

/*=============== TRANSLATION CLASS VARIABLES ===============*/
// Nav Section
const navLogoEl = document.querySelector(".navLogo");
const navHomeEl = document.querySelector(".navHome");
const navAboutEl = document.querySelector(".navAbout");
const navScheduleEl = document.querySelector(".navSchedule");
const navLocationEl = document.querySelector(".navLocation");
const navContactEl = document.querySelector(".navContact");

// Home Section
const subtitleEl = document.querySelector(".homeSubtitle");
const titleEl = document.querySelector(".homeTitle");
const homeDescriptionEl = document.querySelector(".homeDescription");
const homeButtonEl = document.querySelector(".homeButton");

// About Section
const aboutTitleEl = document.querySelector(".aboutTitle");
const aboutDescriptionEl = document.querySelector(
  ".aboutAnnouncementDescription"
);
const aboutAnnouncementButtonEl = document.querySelector(
  ".aboutAnnouncementButton"
);
const aboutLocationTitleEl = document.querySelector(".aboutLocationTitle");
const aboutLocationDescriptionEl = document.querySelector(
  ".aboutLocationDescription"
);
const aboutLocationEl = document.querySelector(".aboutLocation");
const aboutScheduleTitleEl = document.querySelector(".aboutScheduleTitle");
const aboutScheduleDescriptionEl = document.querySelector(
  ".aboutScheduleDescription"
);
const aboutScheduleEl = document.querySelector(".aboutSchedule");

// Announcement Section
const announcementTitleEl = document.querySelector(".announcementTitle");
const announcementSubtitleEl = document.querySelector(".announcementSubtitle");
const sundayTitleEl = document.querySelector(".sundayTitle");
const sundayDescriptionEl = document.querySelector(".sundayDescription");

// Annoucement Items
const lunch__titleEl = document.querySelector(".lunch__title");
const lunch__descriptionEl = document.querySelector(".lunch__description");
const templocationTitleEl = document.querySelector(".templocationTitle");
const templocationDescriptionEl = document.querySelector(
  ".templocationDescription"
);
const prayerTitleEl = document.querySelector(".prayerTitle");
const prayerDescriptionEl = document.querySelector(".prayerDescription");

// Staff Section
const staffTitleEl = document.querySelector(".staffTitle");
const staffSubtitleEl = document.querySelector(".staffSubtitle");
const staff1El = document.querySelector(".staff1");
const staff1DescriptionEl = document.querySelector(".staff1Description");
const staff2El = document.querySelector(".staff2");
const staff2DescriptionEl = document.querySelector(".staff2Description");

// Schedule Section
const scheduleTitleEl = document.querySelector(".scheduleTitle");
const scheduleSubtitleEl = document.querySelector(".scheduleSubtitle");

// Event 1
// const biblestudy__titleEl = document.querySelector(".biblestudy__title");
const biblestudy__locationEl = document.querySelector(".biblestudy__location");
const biblestudy__timeEl = document.querySelector(".biblestudy__time");
const biblestudy__addressEl = document.querySelector(".biblestudy__address");
// const biblestudy__dateEl = document.querySelector(".biblestudy__date");
const biblestudy__descriptionEl = document.querySelector(
  ".biblestudy__description"
);
// const biblestudy__modaltitleEl = document.querySelector(
//   ".biblestudy__title-modal"
// );
const biblestudy__modalEl = document.querySelector(".biblestudy__modal");

// Event 2
const worshipTitleEl = document.querySelector(".worshipTitle");
const worshipLocationEl = document.querySelector(".worshipLocation");
const worshipTimeEl = document.querySelector(".worshipTime");
const worshipAddressEl = document.querySelector(".worshipAddress");
const worshipDateEl = document.querySelector(".worshipDate");
const worshipDescriptionEl = document.querySelector(".worshipDescription");
const worshipModaltitleEl = document.querySelector(".worshipModaltitle");
const worshipModalEl = document.querySelector(".worshipModal");

// Event 3
const jrchurch__titleEl = document.querySelector(".jrchurch__title");
const jrchurch__locationEl = document.querySelector(".jrchurch__location");
const jrchurch__timeEl = document.querySelector(".jrchurch__time");
const jrchurch__addressEl = document.querySelector(".jrchurch__address");
const jrchurch__dateEl = document.querySelector(".jrchurch__date");
const jrchurch__descriptionEl = document.querySelector(
  ".jrchurch__description"
);
const jrchurch__modaltitleEl = document.querySelector(".jrchurch__modaltitle");
const jrchurch__modalEl = document.querySelector(".jrchurch__modal");

// Location Section
const locationTitleEl = document.querySelector(".locationTitle");
const locationDescriptionEl = document.querySelector(".locationDescription");
const locationAddressEl = document.querySelector(".locationAddress");
const locationDisclaimerEl = document.querySelector(".locationDisclaimer");

// Contact Section
const contactTitleEl = document.querySelector(".contactSectionTitle");
const contact__subtitleEl = document.querySelector(".contactSectionSubtitle");

// Left Contact Form
const leftContactEl = document.querySelector(".leftContact");

const emailTitleEl = document.querySelector(".emailTitle");
const emailButtonEl = document.querySelector(".emailButton");

const phoneTitleEl = document.querySelector(".phoneTitle");
const phoneButtonEl = document.querySelector(".phoneButton");

const addressTitleEl = document.querySelector(".addressTitle");
const addressInfoEl = document.querySelector(".addressInfo");
const addressButtonEl = document.querySelector(".addressButton");

// Right Contact Form
const rightContactEl = document.querySelector(".rightContact");
const formNameEl = document.querySelector(".formName");
const formEmailEl = document.querySelector(".formEmail");
const formQuestionEl = document.querySelector(".formQuestion");
const submitButtonEl = document.querySelector(".submitButton");

// Footer Section
const footerLogoEl = document.querySelector(".footerLogo");
const footerDescriptionEl = document.querySelector(".footerDescription");
const footerAboutEl = document.querySelector(".footerAbout");
const aboutUsEl = document.querySelector(".aboutUs");
const aboutStaffEl = document.querySelector(".aboutStaff");
const aboutAnnouncementEl = document.querySelector(".aboutAnnouncement");
const footerInformationEl = document.querySelector(".footerInformation");
const informationScheduleEl = document.querySelector(".informationSchedule");
const informationLocationEl = document.querySelector(".informationLocation");
const footerContactEl = document.querySelector(".footerContact");
const contactPhoneEl = document.querySelector(".contactPhone");
const contactEmailEl = document.querySelector(".contactEmail");
const contactAddressEl = document.querySelector(".contactAddress");
const underconstructionEl = document.querySelector(".underconstruction");
const adminEl = document.querySelector(".admin");
const admin__loginEl = document.querySelector(".admin__login");

// Translation
link.forEach((el) => {
  el.addEventListener("click", () => {
    // Select Language
    langEl.querySelector(".langActive").classList.remove("langActive");
    el.classList.add("langActive");

    const attr = el.getAttribute("lang");

    /*=============== TRANSLATION HTML ===============*/
    // Nav Bar
    navLogoEl.innerHTML = data[attr].navLogo;
    navHomeEl.innerHTML = data[attr].navHome;
    navAboutEl.innerHTML = data[attr].navAbout;
    navScheduleEl.innerHTML = data[attr].navSchedule;
    navLocationEl.innerHTML = data[attr].navLocation;
    navContactEl.innerHTML = data[attr].navContact;

    // Home Section
    subtitleEl.innerHTML = data[attr].homeSubtitle;
    titleEl.innerHTML = data[attr].homeTitle;
    homeDescriptionEl.innerHTML = data[attr].homeDescription;
    homeButtonEl.innerHTML = data[attr].homeButton;

    // About Section
    aboutTitleEl.innerHTML = data[attr].aboutTitle;
    aboutDescriptionEl.innerHTML = data[attr].aboutAnnouncementDescription;
    aboutAnnouncementButtonEl.innerHTML = data[attr].aboutAnnouncementButton;
    aboutLocationTitleEl.innerHTML = data[attr].aboutLocationTitle;
    aboutLocationDescriptionEl.innerHTML = data[attr].aboutLocationDescription;
    aboutLocationEl.innerHTML = data[attr].aboutLocation;
    aboutScheduleTitleEl.innerHTML = data[attr].aboutScheduleTitle;
    aboutScheduleDescriptionEl.innerHTML = data[attr].aboutScheduleDescription;
    aboutScheduleEl.innerHTML = data[attr].aboutSchedule;

    // Announcement Section
    announcementTitleEl.innerHTML = data[attr].announcementTitle;
    announcementSubtitleEl.innerHTML = data[attr].announcementSubtitle;
    sundayTitleEl.innerHTML = data[attr].sundayTitle;
    sundayDescriptionEl.innerHTML = data[attr].sundayDescription;
    prayerTitleEl.innerHTML = data[attr].prayerTitle;
    prayerDescriptionEl.innerHTML = data[attr].prayerDescription;

    // Staff Section
    staffTitleEl.innerHTML = data[attr].staffTitle;
    staffSubtitleEl.innerHTML = data[attr].staffSubtitle;
    staff1El.innerHTML = data[attr].staff1;
    staff1DescriptionEl.innerHTML = data[attr].staff1Description;
    staff2El.innerHTML = data[attr].staff2;
    staff2DescriptionEl.innerHTML = data[attr].staff2Description;

    // Schedule Section
    scheduleTitleEl.innerHTML = data[attr].scheduleTitle;
    scheduleSubtitleEl.innerHTML = data[attr].scheduleSubtitle;

    // Event 1
    // biblestudy__titleEl.innerHTML = data[attr].biblestudy__title;
    // biblestudy__locationEl.innerHTML = data[attr].biblestudy__location;
    // biblestudy__timeEl.innerHTML = data[attr].biblestudy__time;
    // biblestudy__addressEl.innerHTML = data[attr].biblestudy__address;
    // biblestudy__dateEl.innerHTML = data[attr].biblestudy__date;
    // biblestudy__descriptionEl.innerHTML = data[attr].biblestudy__description;
    // biblestudy__modaltitleEl.innerHTML = data[attr].biblestudy__modaltitle;
    // biblestudy__modalEl.innerHTML = data[attr].biblestudy__modal;

    // Event 2
    worshipTitleEl.innerHTML = data[attr].worshipTitle;
    worshipLocationEl.innerHTML = data[attr].worshipLocation;
    worshipTimeEl.innerHTML = data[attr].worshipTime;
    worshipAddressEl.innerHTML = data[attr].worshipAddress;
    worshipDateEl.innerHTML = data[attr].worshipDate;
    worshipDescriptionEl.innerHTML = data[attr].worshipDescription;
    worshipModaltitleEl.innerHTML = data[attr].worshipModaltitle;
    worshipModalEl.innerHTML = data[attr].worshipModal;

    // Event 3
    // jrchurch__titleEl.innerHTML = data[attr].jrchurch__title;
    // jrchurch__locationEl.innerHTML = data[attr].jrchurch__location;
    // jrchurch__timeEl.innerHTML = data[attr].jrchurch__time;
    // jrchurch__addressEl.innerHTML = data[attr].jrchurch__address;
    // jrchurch__dateEl.innerHTML = data[attr].jrchurch__date;
    // jrchurch__descriptionEl.innerHTML = data[attr].jrchurch__description;
    // jrchurch__modaltitleEl.innerHTML = data[attr].jrchurch__modaltitle;
    // jrchurch__modalEl.innerHTML = data[attr].jrchurch__modal;

    // Location Section
    locationTitleEl.innerHTML = data[attr].locationTitle;
    locationDescriptionEl.innerHTML = data[attr].locationDescription;
    locationAddressEl.innerHTML = data[attr].locationAddress;
    locationDisclaimerEl.innerHTML = data[attr].locationDisclaimer;

    // Contact Section
    contactTitleEl.innerHTML = data[attr].contactSectionTitle;
    contact__subtitleEl.innerHTML = data[attr].contactSectionSubtitle;
    leftContactEl.innerHTML = data[attr].leftContact;
    emailTitleEl.innerHTML = data[attr].emailTitle;
    emailButtonEl.innerHTML = data[attr].emailButton;
    phoneTitleEl.innerHTML = data[attr].phoneTitle;
    phoneButtonEl.innerHTML = data[attr].phoneButton;
    addressTitleEl.innerHTML = data[attr].addressTitle;
    addressInfoEl.innerHTML = data[attr].addressInfo;
    addressButtonEl.innerHTML = data[attr].addressButton;
    rightContactEl.innerHTML = data[attr].rightContact;
    formNameEl.innerHTML = data[attr].formName;
    formEmailEl.innerHTML = data[attr].formEmail;
    formQuestionEl.innerHTML = data[attr].formQuestion;
    submitButtonEl.innerHTML = data[attr].submitButton;

    // Footer Section
    footerLogoEl.innerHTML = data[attr].footerLogo;
    footerDescriptionEl.innerHTML = data[attr].footerDescription;
    footerAboutEl.innerHTML = data[attr].footerAbout;
    aboutUsEl.innerHTML = data[attr].aboutUs;
    aboutStaffEl.innerHTML = data[attr].aboutStaff;
    aboutAnnouncementEl.innerHTML = data[attr].aboutAnnouncement;
    footerInformationEl.innerHTML = data[attr].footerInformation;
    informationScheduleEl.innerHTML = data[attr].informationSchedule;
    informationLocationEl.innerHTML = data[attr].informationLocation;
    footerContactEl.innerHTML = data[attr].footerContact;
    contactPhoneEl.innerHTML = data[attr].contactPhone;
    contactEmailEl.innerHTML = data[attr].contactEmail;
    contactAddressEl.innerHTML = data[attr].contactAddress;
    underconstructionEl.innerHTML = data[attr].underconstruction;
  });
});

// Translation
let data = {
  en: {
    navLogo: "Yuima-ru",
    navHome: "Home",
    navAbout: "About",
    navSchedule: "Schedule",
    navLocation: "Location",
    navContact: "Contact Us",
    homeSubtitle: "The Spirit of Cooperation",
    homeTitle: "Yuima-ru Ishikawa Christian Church",
    homeDescription:
      "Come join us in Ishikawa, Okinawa to learn about Christ with our Pastor, Ken Suzuki.",
    homeButton: "Learn more about us!" + '<i class="ri-arrow-right-line"></i>',
    aboutTitle: "About Us",
    aboutAnnouncementDescription:
      '<b>"Let us love each other as Jesus has loved us!"</b>',
    aboutAnnouncementButton:
      "Check our Announcements" + '<i class="ri-arrow-right-line"></i>',
    aboutLocationTitle: "Where are we?",
    aboutLocationDescription:
      "We are a small and newly founded church located in Ishikawa! Come Join us to praise the lord with us!",
    aboutLocation: "See our Location" + '<i class="ri-arrow-right-line"></i>',
    aboutScheduleTitle: "When should I come?",
    aboutScheduleDescription:
      "Please come 5 minutes before service to prepare and be seated for the service! See our schedule below for more details!",
    aboutSchedule: "See our Schedule" + '<i class="ri-arrow-right-line"></i>',
    announcementTitle: "Announcements",
    announcementSubtitle: "Weekly Announcement",
    sundayTitle: "Sunday Service",
    sundayDescription: "We will have service every Sunday at 10:00am",
    lunch__title: "Join us for Lunch",
    lunch__description:
      "After the service, we will prepare lunch. Please join us!",
    templocationTitle: "Location until Heat Cools Down",
    templocationDescription:
      "The address will temporarily be at: <br> Uruma-shi Ishikawa 2107-8 (Pastor's house)",
    prayerTitle: "Prayer Requests",
    prayerDescription:
      "- For the city of Uruma. <br> - Family and Friends for salvation. <br> - For Peace in Israel. <br> - For peace between Russian and Ukraine",
    staffTitle: "Meet our Staff Members",
    staffSubtitle: "Learn about our Staff Members",
    staff1: "Ken Suzuki",
    staff1Description: "Pastor / Missionary",
    staff2: "Hisae Suzuki",
    staff2Description: "Assistant",
    scheduleTitle: "Schedule",
    scheduleSubtitle: "Weekly Schedule",
    // biblestudy__title: "Bible Study Session",
    biblestudy__location:
      '<i class="fas fa-map-marker-alt qualificationModal-icon"></i>' +
      "Ishikawa, Uruma, Okinawa",
    // biblestudy__date:
    //   '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
    //   "Tue, " +
    //   months[nextTuesday.getMonth()] +
    //   " " +
    //   nextTuesday.getDate().toString() +
    //   ", 9:30AM JST",
    biblestudy__modal: "Read More" + '<i class="ri-arrow-right-line"></i>',
    biblestudy__modaltitle: "Bible Study Session",
    biblestudy__description:
      "Come join us for a Bible study session to better understand god's message!",
    biblestudy__address:
      '<i class="ri-map-pin-line qualificationModal-icon"></i>' +
      '<a href="https://www.google.com/maps?ll=26.430002,127.828314&z=19&t=h&hl=en&gl=JP&mapclient=embed&q=1-ch%C5%8Dme-28-7+Ishikawa+Uruma,+Okinawa+904-1106" class="addressButton" target="_blank">' +
      "Address: 1-chōme-28-6 Ishikawa" +
      "<br>" +
      "Uruma, Okinawa 〒904-1106 </a>",
    biblestudy__time:
      '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
      "Tue, " +
      months[nextTuesday.getMonth()] +
      " " +
      nextTuesday.getDate().toString() +
      ", 9:30AM JST",
    worshipTitle: "Worship Services",
    worshipLocation:
      '<i class="fas fa-map-marker-alt qualificationModal-icon"></i>' +
      "Ishikawa, Uruma, Okinawa",
    worshipDate:
      '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
      "Sun, " +
      months[nextSunday.getMonth()] +
      " " +
      nextSunday.getDate().toString() +
      ", 10:00AM JST",
    worshipModal: "Read More" + '<i class="ri-arrow-right-line"></i>',
    worshipDescription:
      "Come join us for a Worship Service and Jr. Church to learn about god together!",
    worshipModaltitle: "Bible Study Session",
    worshipAddress:
      '<i class="ri-map-pin-line qualificationModal-icon"></i>' +
      '<a href="https://www.google.com/maps?ll=26.430002,127.828314&z=19&t=h&hl=en&gl=JP&mapclient=embed&q=1-ch%C5%8Dme-28-7+Ishikawa+Uruma,+Okinawa+904-1106" class="addressButton" target="_blank">' +
      "Address: 1-chōme-28-6 Ishikawa" +
      "<br>" +
      "Uruma, Okinawa 〒904-1106 </a>",
    worshipTime:
      '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
      "Date/Time: " +
      "Sun, " +
      months[nextSunday.getMonth()] +
      " " +
      nextSunday.getDate().toString() +
      ", 10:00AM JST",
    jrchurch__title: "Jr. Church (English)",
    jrchurch__location:
      '<i class="fas fa-map-marker-alt qualificationModal-icon"></i>' +
      "Ishikawa, Uruma, Okinawa",
    jrchurch__date:
      '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
      "Sun, " +
      months[nextSunday.getMonth()] +
      " " +
      nextSunday.getDate().toString() +
      ", 9:30AM JST",
    jrchurch__modal: "Read More" + '<i class="ri-arrow-right-line"></i>',
    jrchurch__modaltitle: "Jr. Church (English Only)",
    jrchurch__description:
      "Come join us for Jr. Church for kids to learn about god!",
    jrchurch__address:
      '<i class="ri-map-pin-line qualificationModal-icon"></i>' +
      '<a href="https://www.google.com/maps?ll=26.430002,127.828314&z=19&t=h&hl=en&gl=JP&mapclient=embed&q=1-ch%C5%8Dme-28-7+Ishikawa+Uruma,+Okinawa+904-1106" class="addressButton" target="_blank">' +
      "Address: 1-chōme-28-6 Ishikawa" +
      "<br>" +
      "Uruma, Okinawa 〒904-1106 </a>",
    jrchurch__time:
      '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
      "Sun, " +
      months[nextSunday.getMonth()] +
      " " +
      nextSunday.getDate().toString() +
      ", 9:30AM JST",
    locationTitle: "Location",
    locationDescription: "Where are we located?",
    locationAddress: "Address: 1-chōme-28-6 Ishikawa Uruma, Okinawa 〒904-1106",
    locationDisclaimer:
      "Note: The building is left of this building. Google maps for unknown reason has not recognized this address yet. <br> <br> Sorry for the inconvenience and confusion.",
    contactSectionTitle: "Contact Us",
    contactSectionSubtitle: "Our Contact Info",
    leftContact: '<i class="ri-information-line"></i>' + "Contact Information",
    emailTitle: "E-mail",
    emailButton: "E-mail Us" + '<i class="ri-mail-line"></i>',
    phoneTitle: "Phone Number",
    phoneButton: "Call Us" + '<i class="ri-phone-line"></i>',
    addressTitle: "Our Address",
    addressInfo: "1-chōme-28-6 Ishikawa <br> Uruma, Okinawa <br> 〒904-1106",
    addressButton: "Find our Address" + '<i class="ri-home-2-line"></i>',
    rightContact: '<i class="ri-send-plane-line"></i>' + "Contact us!",
    formName: "Name",
    formEmail: "E-mail",
    formQuestion: "Questions",
    submitButton: "Submit" + '<i class="ri-arrow-right-up-line"></i>',
    footerLogo: "Yuima-ru",
    footerDescription: "The Spirit of Cooperation",
    footerAbout: "About",
    aboutUs: "About Us",
    aboutStaff: "Meet Our Staffs",
    aboutAnnouncement: "Announcements",
    footerInformation: "Information",
    informationSchedule: "Schedules",
    informationLocation: "Location",
    footerContact: "Contact",
    contactPhone: "Phone Number",
    contactEmail: "E-mail",
    contactAddress: "Address",
    underconstruction: "*Socials currently in-progress*",
    admin: "Admin",
    admin__login: "Admin Login",
  },
  ja: {
    navLogo: "ゆいまーる",
    navHome: "ホーム",
    navAbout: "私たちについて",
    navSchedule: "スケジュール",
    navLocation: "アクセス",
    navContact: "コンタクト",
    homeSubtitle: "助け合い",
    homeTitle: "ゆいまーる石川キリスト教会",
    homeDescription:
      "沖縄県石川で鈴木健牧師と一緒にキリストについて学びましょう。",
    homeButton: "もっと詳しく知る" + '<i class="ri-arrow-right-line"></i>',
    aboutTitle: "私たちについて",
    aboutAnnouncementDescription:
      "<b>”イエスが私たちを愛してくださったように、私たちもお互いを愛し合いましょう！”</b>",
    aboutAnnouncementButton: "お知らせ" + '<i class="ri-arrow-right-line"></i>',
    aboutLocationTitle: "アクセス",
    aboutLocationDescription:
      "私たちは、石川県にある新しく設立された小さな教会です。さあ、私たちと一緒に主を賛美しましょう！ ",
    aboutLocation: "アクセス" + '<i class="ri-arrow-right-line"></i>',
    aboutScheduleTitle: "何時から",
    aboutScheduleDescription:
      "準備を整えてサービスの 5 分前に着席してください。",
    aboutSchedule: "スケジュール" + '<i class="ri-arrow-right-line"></i>',
    announcementTitle: "お知らせ",
    announcementSubtitle: "",
    sundayTitle: "主日礼拝",
    sundayDescription: "毎週日曜日09時より礼拝を行います.",
    lunch__title: "昼食",
    lunch__description: "礼拝後は昼食を準備します。皆さんご参加ください",
    templocationTitle: "残暑が厳しいため",
    templocationDescription:
      "残暑が厳しいため、当面、礼拝９時より牧師宅で行います。 <br> うるま市石川 ２１０７－８ (牧師の家で)",
    prayerTitle: "祈りの課題",
    prayerDescription:
      "- うるま市石川地区の救いのために <br> - 家族、友人の救いの為に <br> - イスラエルの平和の為に <br> - ロシアとウクライナの平和の為に",
    staffTitle: "スタッフ紹介",
    staffSubtitle: "当社のスタッフについて",
    staff1: "鈴木 ケン",
    staff1Description: "牧師 / 宣教師",
    staff2: "鈴木 ひさえ（ちゃいちゃん）",
    staff2Description: "アシスタント",
    scheduleTitle: "スケジュール",
    scheduleSubtitle: "週間スケジュール",
    // biblestudy__title: "聖書勉強会",
    biblestudy__location:
      '<i class="fas fa-map-marker-alt qualificationModal-icon"></i>' +
      "石川県うるま市沖縄",
    biblestudy__time:
      '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
      "火曜日, " +
      (nextTuesday.getMonth() + 1) +
      "月" +
      nextTuesday.getDate().toString() +
      "日, 9:30午前",
    biblestudy__modal: "詳しく知る" + '<i class="ri-arrow-right-line"></i>',
    biblestudy__modaltitle: "聖書勉強会",
    biblestudy__description:
      "神のメッセージをより深く理解するために、聖書の勉強会にぜひご参加ください。",
    biblestudy__address:
      '<i class="ri-map-pin-line qualificationModal-icon"></i>' +
      '<a href="https://www.google.com/maps?ll=26.430002,127.828314&z=19&t=h&hl=en&gl=JP&mapclient=embed&q=1-ch%C5%8Dme-28-7+Ishikawa+Uruma,+Okinawa+904-1106" class="addressButton" target="_blank">' +
      "石川県うるま市1丁目28-6〒904-1106" +
      "</a>",
    // biblestudy__date:
    //   '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
    //   "火曜日, " +
    //   (nextTuesday.getMonth() + 1) +
    //   "月" +
    //   nextTuesday.getDate().toString() +
    //   "日, 9:30午前",
    worshipTitle: "主日礼拝",
    worshipLocation:
      '<i class="fas fa-map-marker-alt qualificationModal-icon"></i>' +
      "石川県うるま市沖縄",
    worshipTime:
      '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
      "日曜日, " +
      (nextSunday.getMonth() + 1) +
      "月" +
      nextSunday.getDate().toString() +
      "日, 10:00午前",
    worshipModal: "詳しく知る" + '<i class="ri-arrow-right-line"></i>',
    worshipModaltitle: "主日礼拝",
    worshipDescription: "一緒に神様について学ぶ礼拝にぜひご参加ください！",
    worshipAddress:
      '<i class="ri-map-pin-line qualificationModal-icon"></i>' +
      '<a href="https://www.google.com/maps?ll=26.430002,127.828314&z=19&t=h&hl=en&gl=JP&mapclient=embed&q=1-ch%C5%8Dme-28-7+Ishikawa+Uruma,+Okinawa+904-1106" class="addressButton" target="_blank">' +
      "石川県うるま市1丁目28-6〒904-1106" +
      "</a>",
    worshipDate:
      '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
      "日曜日, " +
      (nextSunday.getMonth() + 1) +
      "月" +
      nextSunday.getDate().toString() +
      "日, 10:00午前",
    jrchurch__title: "ジュニアチャーチ（英語）",
    jrchurch__location:
      '<i class="fas fa-map-marker-alt qualificationModal-icon"></i>' +
      "石川県うるま市沖縄",
    jrchurch__time:
      '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
      "日曜日, " +
      (nextSunday.getMonth() + 1) +
      "月" +
      nextSunday.getDate().toString() +
      "日, 9:30午前",
    jrchurch__modal: "詳しく知る" + '<i class="ri-arrow-right-line"></i>',
    jrchurch__modaltitle: "ジュニアチャーチ（英語)",
    jrchurch__description:
      "子供たちが神について学ぶためのジュニアチャーチにぜひ参加してください！",
    jrchurch__address:
      '<i class="ri-map-pin-line qualificationModal-icon"></i>' +
      '<a href="https://www.google.com/maps?ll=26.430002,127.828314&z=19&t=h&hl=en&gl=JP&mapclient=embed&q=1-ch%C5%8Dme-28-7+Ishikawa+Uruma,+Okinawa+904-1106" class="addressButton" target="_blank">' +
      "石川県うるま市1丁目28-6〒904-1106" +
      "</a>",
    jrchurch__date:
      '<i class="far fa-calendar-alt qualificationModal-icon"></i>' +
      "日曜日, " +
      (nextSunday.getMonth() + 1) +
      "月" +
      nextSunday.getDate().toString() +
      "日, 9:30午前",
    locationTitle: "アクセス",
    locationDescription: "私たちはどこにいますか?",
    locationAddress: "アドレス: 〒904-1106 沖縄県うるま市石川1丁目28-6",
    locationDisclaimer:
      "注: この建物の左側にあります。不明な理由により、Google マップはこの住所をまだ認識していません。 <br> <br> ご迷惑と混乱をおかけして申し訳ございません。",
    contactSectionTitle: "コンタクト",
    contactSectionSubtitle: "弊社の連絡先情報",
    leftContact: '<i class="ri-information-line"></i>' + "連絡先",
    emailTitle: "Eメール",
    emailButton: "Eメールする" + '<i class="ri-mail-line"></i>',
    phoneTitle: "電話番号",
    phoneButton: "電話する" + '<i class="ri-phone-line"></i>',
    addressTitle: "渡したちの教会",
    addressInfo: "〒904-1106 <br> 沖縄県うるま市 <br> 石川1丁目28-6",
    addressButton: "アドレスリンク" + '<i class="ri-home-2-line"></i>',
    rightContact: '<i class="ri-send-plane-line"></i>' + "連絡する！",
    formName: "名前",
    formEmail: "Eメールアドレス",
    formQuestion: "質問",
    submitButton: "送る" + '<i class="ri-arrow-right-up-line"></i>',
    footerLogo: "ゆいまーる",
    footerDescription: "助け合い",
    footerAbout: "概要",
    aboutUs: "私たちについて",
    aboutStaff: "スタッフ紹介",
    aboutAnnouncement: "報告",
    footerInformation: "情報",
    informationSchedule: "スケジュール",
    informationLocation: "アクセス",
    footerContact: "コンタクト",
    contactPhone: "電話番号",
    contactEmail: "Eメールアドレス",
    contactAddress: "住所",
    underconstruction: "*SNSは作成中です*",
    admin: "管理者",
    admin__login: "管理者ログイン",
  },
};
