/* ===================================================================
   VECTOR — Security & Electrical Services
   Shared translation dictionary (GE / EN / RU)
   Loaded by every page BEFORE app.js
=================================================================== */

const PHONE_DISPLAY = "595 70 83 00";
const PHONE_TEL = "595708300";
const WHATSAPP_URL = "https://wa.me/995595708300";

const SERVICE_ORDER = ["cctv", "alarm", "fire", "locks", "access", "network", "electrical", "smart"];

const SERVICE_META = {
  cctv:       { icon: "camera",      page: "cameras.html",       img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=80" },
  alarm:      { icon: "bell-ring",   page: "alarm.html",         img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80" },
  fire:       { icon: "flame",       page: "fire.html",          img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1600&q=80" },
  locks:      { icon: "key-round",   page: "locks.html",         img: "https://images.unsplash.com/photo-1558617320-a56d5bcd8bde?auto=format&fit=crop&w=1600&q=80" },
  access:     { icon: "fingerprint", page: "access.html",        img: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1600&q=80" },
  network:    { icon: "network",     page: "network.html",       img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80" },
  electrical: { icon: "zap",         page: "wiring.html",        img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1600&q=80" },
  smart:      { icon: "cpu",         page: "smart-devices.html", img: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=1600&q=80" }
};

const BLOG_ORDER = ["post1", "post2", "post3", "post4", "post5", "post6", "post7", "post8"];

const BLOG_META = {
  post1: { page: "blog-post-1.html", service: "cctv",       minutes: 4, img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80" },
  post2: { page: "blog-post-2.html", service: "alarm",      minutes: 5, img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80" },
  post3: { page: "blog-post-3.html", service: "fire",       minutes: 4, img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=80" },
  post4: { page: "blog-post-4.html", service: "locks",      minutes: 4, img: "https://images.unsplash.com/photo-1558617320-a56d5bcd8bde?auto=format&fit=crop&w=1200&q=80" },
  post5: { page: "blog-post-5.html", service: "access",     minutes: 5, img: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1200&q=80" },
  post6: { page: "blog-post-6.html", service: "network",    minutes: 5, img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80" },
  post7: { page: "blog-post-7.html", service: "electrical", minutes: 4, img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80" },
  post8: { page: "blog-post-8.html", service: "smart",      minutes: 5, img: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=1200&q=80" }
};

const translations = {
  /* =================================================== GEORGIAN =================================================== */
  ge: {
    common: {
      brandTag: "უსაფრთხოება & ელექტრო სერვისი",
      nav: { home: "მთავარი", services: "სერვისები", blog: "ბლოგი", contact: "კონტაქტი" },
      callNow: "დარეკვა ახლავე",
      learnMore: "ვრცლად",
      consultBtn: "მოითხოვეთ კონსულტაცია",
      whatsapp: "WhatsApp",
      backToServices: "ყველა სერვისი",
      viewService: "სერვისის ნახვა",
      breadcrumbHome: "მთავარი",
      breadcrumbServices: "სერვისები",
      featuresTitle: "თვისებები",
      equipmentTitle: "გამოყენებული აღჭურვილობა",
      processTitle: "სამონტაჟო პროცესი",
      ctaBannerTitle: "დაინტერესდით ამ სერვისით?",
      ctaBannerSubtitle: "დაგვირეკეთ უფასო კონსულტაციისა და ობიექტზე შეფასებისთვის.",
      footer: { about: "VECTOR — უსაფრთხოებისა და ელექტრო სისტემების პროფესიონალური მონტაჟი თბილისსა და შემოგარენში. კამერებიდან სრულ ელექტრო გაყვანილობამდე.", quickLinks: "ნავიგაცია", servicesTitle: "სერვისები", contactTitle: "კონტაქტი", rights: "ყველა უფლება დაცულია." },
      contact: { phoneLabel: "ტელეფონი", whatsappLabel: "WhatsApp", areaLabel: "მომსახურების არეალი", area: "მომსახურება მთელ თბილისსა და შემოგარენში", hoursLabel: "სამუშაო საათები", hoursWeek: "ორშ–შაბ: 09:00 – 19:00", hoursEmergency: "ავარიული გამოძახება: 24/7" }
    },
    home: {
      hero: {
        badgeLive: "მონიტორინგი აქტიურია",
        eyebrow: "დაცვა & ელექტრო ინსტალაციები",
        title1: "თქვენი ობიექტის",
        title2: "სრული უსაფრთხოება",
        subtitle: "ვაპროექტებთ და ვმონტაჟებთ სამეთვალყურეო, სიგნალიზაციის, სახანძრო და ელექტრო სისტემებს — საცხოვრებელი და კომერციული ობიექტებისთვის, თბილისსა და შემოგარენში.",
        ctaCall: "დაგვირეკეთ: 595 70 83 00",
        ctaServices: "სერვისების ნახვა",
        stat1: "500+", stat1Label: "დამონტაჟებული ობიექტი",
        stat2: "11", stat2Label: "წლის გამოცდილება",
        stat3: "24/7", stat3Label: "გამოძახება და მხარდაჭერა"
      },
      servicesIntro: { eyebrow: "სერვისები", title: "ყველაფერი ერთ სისტემაში", subtitle: "დაცვის, ხანძარსაწინააღმდეგო და ელექტრო ინფრასტრუქტურის სრული სპექტრი — ერთი გუნდისგან." },
      whyUs: {
        eyebrow: "რატომ ჩვენ",
        title: "რატომ აირჩიონ VECTOR",
        items: [
          { icon: "badge-check", title: "ხარისხის გარანტია", desc: "ვამონტაჟებთ მხოლოდ სერტიფიცირებულ, ხარისხიან მოწყობილობებს." },
          { icon: "timer", title: "სწრაფი მომსახურება თბილისსა და შემოგარენში", desc: "ოპერატიულად ვრეაგირებთ გამოძახებაზე ქალაქისა და მიმდებარე რეგიონის ნებისმიერ წერტილში." },
          { icon: "file-check", title: "ოფიციალური გარანტია", desc: "ყველა სამუშაოზე გაიცემა წერილობითი გარანტია." },
          { icon: "wrench", title: "პროფესიონალური მონტაჟი", desc: "გამოცდილი ტექნიკოსები, სწორი ინსტრუმენტები და სუფთა შესრულება." }
        ]
      },
      process: {
        eyebrow: "როგორ ვმუშაობთ",
        title: "მარტივი 3 ნაბიჯი",
        subtitle: "დარეკვიდან სრულ გამართვამდე — გამჭვირვალე და სწრაფი პროცესი.",
        steps: [
          { icon: "phone-call", title: "დარეკვა / კონსულტაცია", desc: "დაგვიკავშირდით ტელეფონით ან WhatsApp-ით — გავეცნობით თქვენს საჭიროებებს." },
          { icon: "search", title: "ობიექტის დათვალიერება", desc: "სპეციალისტი ეწვევა ობიექტს და შემოგთავაზებთ ოპტიმალურ გადაწყვეტას." },
          { icon: "settings", title: "მონტაჟი და გამართვა", desc: "ვამონტაჟებთ სისტემას პროფესიონალურად და გასწავლით მის გამოყენებას." }
        ]
      },
      faq: {
        eyebrow: "კითხვები",
        title: "ხშირად დასმული კითხვები",
        items: [
          { q: "რომელ რაიონებში მუშაობთ?", a: "ვმუშაობთ მთელ თბილისსა და შემოგარენში — ქალაქის ყველა უბანში და მიმდებარე დასახლებულ პუნქტებში." },
          { q: "გაქვთ თუ არა გარანტია მომსახურებაზე?", a: "დიახ, ყველა სამონტაჟო სამუშაოსა და მოწყობილობაზე გაიცემა ოფიციალური წერილობითი გარანტია." },
          { q: "საჭიროა თუ არა ობიექტის წინასწარი დათვალიერება?", a: "დიდი ან რთული პროექტებისთვის გირჩევთ უფასო დათვალიერებას — ეს გვეხმარება ზუსტი შეფასების მომზადებაში." },
          { q: "რამდენ ხანში სრულდება მონტაჟი?", a: "სტანდარტული ობიექტისთვის მონტაჟი სრულდება 1-3 დღეში, პროექტის მასშტაბიდან გამომდინარე." }
        ]
      },
      contactSection: { eyebrow: "კონტაქტი", title: "დაგვიკავშირდით", subtitle: "დაგვირეკეთ ან მოგვწერეთ WhatsApp-ზე — გიპასუხებთ სწრაფად." }
    },
    services: {
      cctv: {
        title: "კამერები (CCTV)", tag: "24/7 ვიდეო მეთვალყურეობა",
        summary: "IP და HD/4K კამერების მონტაჟი დისტანციური მონიტორინგით. ღამის ხედვა, მოძრაობის დეტექცია და უსაფრთხო არქივირება.",
        overview: "ჩვენი გუნდი აპროექტებს და აყენებს სრულ სამეთვალყურეო სისტემას — კამერების შერჩევიდან დისტანციური მონიტორინგის კონფიგურაციამდე. ვმუშაობთ როგორც საცხოვრებელი, ისე კომერციული ობიექტებისთვის.",
        features: ["IP/HD/4K კამერების არჩევანი", "დისტანციური ნახვა მობილური აპლიკაციით", "ღამის ხედვა და ფართო დინამიური დიაპაზონი (WDR)", "მოძრაობაზე რეაგირების შეტყობინებები", "წყალგაუმტარი კორპუსი გარე დამონტაჟებისთვის"],
        equipment: ["IP კამერა (Dome/Bullet)", "NVR/DVR ჩამწერი", "PoE სვიჩი", "მყარი დისკი (HDD)", "წყალგამძლე საკაბელო სისტემა"],
        process: ["ობიექტის დათვალიერება და კამერების განლაგების გეგმა", "საკაბელო და კვების ინსტალაცია", "კამერების მონტაჟი და კუთხის კალიბრაცია", "NVR-ის კონფიგურაცია და მობილურ აპთან დაკავშირება", "ტესტირება და კლიენტისთვის გადაცემა/ინსტრუქტაჟი"]
      },
      alarm: {
        title: "სიგნალიზაცია", tag: "საიმედო დაცვა ნებისმიერ დროს",
        summary: "მოძრაობის სენსორები და ჭკვიანი შეტყობინებები ობიექტის დასაცავად. სადენიანი და უსადენო ვარიანტები, 24/7 მონიტორინგით.",
        overview: "ვაინსტალირებთ საიმედო საგანგაშო სისტემებს, რომლებიც დაუყოვნებლივ გატყობინებთ არასანქცირებულ შეღწევაზე — სახლში თუ ოფისში.",
        features: ["მოძრაობის და კარ-ფანჯრის სენსორები", "სადენიანი ან უსადენო კონფიგურაცია", "მყისიერი Push/SMS შეტყობინებები", "საგანგაშო (Panic) ღილაკის ოფცია", "ინტეგრაცია 24-საათიან საგუშაგო ცენტრთან"],
        equipment: ["PIR მოძრაობის დეტექტორები", "კარ-ფანჯრის მაგნიტური კონტაქტები", "საკონტროლო პანელი და კლავიატურა", "საირენა (შიდა/გარე)", "GSM/IP კომუნიკატორი"],
        process: ["რისკის შეფასება და ზონების დაგეგმვა", "სენსორებისა და პანელის მონტაჟი", "სადენიანი ან უსადენო დაკავშირება", "სისტემის დაპროგრამება და ტესტირება", "მომხმარებლის ინსტრუქტაჟი და მონიტორინგის აქტივაცია"]
      },
      fire: {
        title: "სახანძრო სისტემები", tag: "სახანძრო უსაფრთხოება პირველ ადგილზე",
        summary: "კვამლის დეტექტორები და სახანძრო პანელები სრული უსაფრთხოებისთვის. ავტომატური შეტყობინება და ნორმებთან შესაბამისობა.",
        overview: "ვამონტაჟებთ სახანძრო სიგნალიზაციისა და შეტყობინების სისტემებს სრული ნორმატიული შესაბამისობით — ადამიანების და ქონების დასაცავად.",
        features: ["კვამლისა და სითბოს დეტექტორები", "მისამართობრივი ან კონვენციური პანელები", "ავტომატური შეტყობინება სახანძრო სამსახურთან", "ხელით ამოქმედების წერტილები (Call Points)", "სახანძრო უსაფრთხოების ნორმებთან შესაბამისობა"],
        equipment: ["კვამლის/სითბოს დეტექტორები", "სახანძრო საკონტროლო პანელი", "ხელით ამოქმედების წერტილები", "სირენა და შუქური სიგნალიზატორები", "სარეზერვო ბატარეის ბლოკი"],
        process: ["შენობის რისკის შეფასება", "დეტექტორებისა და პანელის განლაგების დაგეგმვა", "მონტაჟი და საკაბელო სისტემის გაყვანა", "პანელის დაპროგრამება და ზონების ტესტირება", "სერტიფიცირება და შესაბამისობის დადასტურება"]
      },
      locks: {
        title: "ელექტრო საკეტები", tag: "ჭკვიანი წვდომა თქვენს კარზე",
        summary: "მაგნიტური და კოდური საკეტები დისტანციური მართვის ფუნქციით. სრულყოფილად ერწყმის დაშვების სისტემებს.",
        overview: "ვაყენებთ ჭკვიან საკეტის სისტემებს კარებისა და ჭიშკრებისთვის — უსაფრთხო, მოსახერხებელი და დისტანციურად მართვადი.",
        features: ["მაგნიტური (Maglock) საკეტები", "კოდური და ბარათიანი წვდომა", "დისტანციური/აპლიკაციით გახსნა", "Fail-safe / Fail-secure ვარიანტები", "ინტეგრაცია დაშვების კონტროლის სისტემასთან"],
        equipment: ["მაგნიტური საკეტის ბლოკი", "კლავიატურა/ბარათის წამკითხველი", "გასასვლელი ღილაკი (Exit Button)", "კარის დამხურავი მექანიზმი", "კვების წყარო/სარეზერვო ბატარეა"],
        process: ["კარისა და ჩარჩოს შეფასება", "საკეტისა და წამკითხველის მონტაჟი", "კვების და საკაბელო შეერთება", "კოდის/ბარათის დაპროგრამება", "Fail-safe რეჟიმის ტესტირება"]
      },
      access: {
        title: "დაშვების სისტემები", tag: "აკონტროლეთ ვინ შემოდის",
        summary: "ტურნიკეტები, RFID და ბიომეტრიული იდენტიფიკაცია წვდომის სამართავად. სამუშაო დროის აღრიცხვის ინტეგრაციით.",
        overview: "ვნერგავთ წვდომის კონტროლის სისტემებს ოფისების, ქარხნებისა და საცხოვრებელი კომპლექსებისთვის — უსაფრთხო და აღრიცხვად.",
        features: ["ტურნიკეტები და ბარიერული კარიბჭეები", "RFID ბარათის მკითხველები", "ბიომეტრიული (თითის ანაბეჭდი/სახე) იდენტიფიკაცია", "სტუმრების მართვის სისტემა", "სამუშაო დროის აღრიცხვა"],
        equipment: ["ტურნიკეტი/ბარიერის ერთეული", "RFID წამკითხველი და ბარათები", "ბიომეტრიული სკანერი", "დაშვების საკონტროლო პანელი", "მართვის პროგრამული უზრუნველყოფა"],
        process: ["ნაკადისა და შესასვლელი წერტილების ანალიზი", "აღჭურვილობის მონტაჟი და გაყვანილობა", "პროგრამული უზრუნველყოფის კონფიგურაცია", "მომხმარებელთა რეგისტრაცია (ბარათები/ბიომეტრია)", "პერსონალის ინსტრუქტაჟი და გაშვება"]
      },
      network: {
        title: "ქსელური მონტაჟი", tag: "სტაბილური კავშირი ყოველთვის",
        summary: "სტრუქტურირებული საკაბელო სისტემები და Wi-Fi ოპტიმიზაცია. სტაბილური და სწრაფი ინტერნეტი ნებისმიერი ზომის ობიექტისთვის.",
        overview: "ვაშენებთ საიმედო ქსელურ ინფრასტრუქტურას — სტაბილური ინტერნეტისა და კავშირისთვის ოფისსა თუ სახლში.",
        features: ["სტრუქტურირებული საკაბელო სისტემა (Cat6/Cat6a)", "როუტერისა და სვიჩების კონფიგურაცია", "პაჩ-პანელისა და სერვერული კარადის მოწყობა", "Wi-Fi დაფარვის ოპტიმიზაცია", "ქსელის ძირითადი უსაფრთხოება"],
        equipment: ["Cat6/Cat6a საკაბელო სისტემა", "პაჩ-პანელი და სერვერული კარადა", "მართვადი სვიჩი", "როუტერი/ფაიერვოლი", "უსადენო წვდომის წერტილები (AP)"],
        process: ["ობიექტის დათვალიერება და ქსელის დაგეგმვა", "კაბელის გაყვანა და დაბოლოება", "კარადისა და აღჭურვილობის მონტაჟი", "კონფიგურაცია და Wi-Fi მორგება", "სიჩქარის ტესტირება და დოკუმენტაცია"]
      },
      electrical: {
        title: "ელექტრო გაყვანილობა", tag: "უსაფრთხო ელექტრო სისტემა საძირკვლიდან",
        summary: "სრული ელექტრო გაყვანილობა საცხოვრებელი და კომერციული ობიექტებისთვის. საკომუტაციო კარადები და უსაფრთხოების შემოწმება.",
        overview: "ვასრულებთ სრულ ელექტრო სამონტაჟო სამუშაოებს — უსაფრთხოების საერთაშორისო სტანდარტების სრული დაცვით.",
        features: ["საცხოვრებელი და კომერციული გაყვანილობა", "საკომუტაციო კარადების აწყობა", "ძველი გაყვანილობის ჩანაცვლება", "დამიწება და ჭარბი ძაბვისგან დაცვა", "უსაფრთხოების შემოწმება და სერტიფიცირება"],
        equipment: ["სპილენძის კაბელი და გუბკები (Conduit)", "საკომუტაციო კარადა/ამომრთველები", "ავტომატები და დიფავტომატები (RCD)", "როზეტები და გამომრთველები", "დამიწების სისტემა"],
        process: ["დატვირთვის შეფასება და დაგეგმვა", "გუბკის და კაბელის გაყვანა", "კარადის აწყობა და ამომრთველების მონტაჟი", "სანათებისა და როზეტების შეერთება", "უსაფრთხოების ტესტირება და სერტიფიცირება"]
      },
      smart: {
        title: "ჭკვიანი მოწყობილობები", tag: "თქვენი სახლი, თქვენი კონტროლით",
        summary: "ჭკვიანი რელეები და კონტროლერები განათების, გათბობისა და ელექტრომოწყობილობების დისტანციური მართვისთვის. სრული ავტომატიზაცია სმარტფონიდან.",
        overview: "ვაინსტალირებთ ჭკვიან რელეებსა და მიკროკონტროლერებს (Sonoff, Shelly, Tuya, Ajax), რომლებიც საშუალებას გაძლევთ მართოთ განათება, გათბობა, კარიბჭეები და ელექტრომოწყობილობები ტელეფონიდან, ნებისმიერი წერტილიდან.",
        features: ["განათების დისტანციური მართვა", "ელექტრომოწყობილობების ჩართვა/გამორთვა აპლიკაციით", "ავტომატური კარიბჭისა და ჭიშკრის მართვა", "ჭკვიანი კლიმატ-კონტროლი (თერმოსტატები)", "სცენარები და განრიგის დაპროგრამება"],
        equipment: ["ჭკვიანი რელეები (Sonoff/Shelly)", "Wi-Fi/Zigbee კონტროლერები", "ჭკვიანი ჩამრთველები და როზეტები", "სენსორები (ტემპერატურა/გახსნა/მოძრაობა)", "ცენტრალური ჰაბი (Ajax/Tuya)"],
        process: ["საჭიროებების ანალიზი და მოწყობილობების შერჩევა", "რელეებისა და კონტროლერების მონტაჟი", "Wi-Fi/Zigbee ქსელთან დაკავშირება", "აპლიკაციისა და სცენარების კონფიგურაცია", "ტესტირება და მომხმარებლის გაწვრთნა"]
      }
    },
    blog: {
      eyebrow: "ბლოგი",
      title: "სასარგებლო სტატიები",
      subtitle: "რჩევები და გზამკვლევები უსაფრთხოებისა და ელექტრო სისტემების შესახებ.",
      readMore: "სრულად წაკითხვა",
      minReadSuffix: "წუთის საკითხავი",
      backToBlog: "ყველა სტატია",
      posts: {
        post1: {
          title: "როგორ ავირჩიოთ IP კამერები სახლისა და ოფისისთვის",
          excerpt: "გაიგეთ, რაზე მიაქციოთ ყურადღება კამერის შერჩევისას — გარჩევადობა, ღამის ხედვა და შენახვის ვარიანტები.",
          intro: "სწორი კამერის შერჩევა დამოკიდებულია ობიექტის ზომაზე, განათებასა და უსაფრთხოების მოთხოვნებზე. ამ სტატიაში განვიხილავთ მთავარ კრიტერიუმებს.",
          sections: [
            { h: "გარჩევადობა და ხარისხი", p: "HD (2MP) საკმარისია პატარა სივრცისთვის, ხოლო 4K რეკომენდირებულია დიდი ტერიტორიის ან სახის ამოცნობისთვის." },
            { h: "ღამის ხედვა", p: "IR ან ფერადი ღამის ხედვის მქონე კამერები უზრუნველყოფენ მკაფიო გამოსახულებას სუსტი განათების პირობებშიც." },
            { h: "შენახვის ვარიანტი", p: "აირჩიეთ ლოკალური NVR/DVR ან ღრუბლოვანი შენახვა — თითოეულს აქვს თავისი უპირატესობები ბიუჯეტისა და წვდომის მიხედვით." }
          ],
          conclusion: "სწორად შერჩეული სისტემა უზრუნველყოფს გრძელვადიან, საიმედო დაცვას. საჭიროების შემთხვევაში, ჩვენი გუნდი დაგეხმარებათ ოპტიმალური გადაწყვეტის შერჩევაში."
        },
        post2: {
          title: "უსადენო vs სადენიანი სიგნალიზაცია: რომელია უკეთესი?",
          excerpt: "შევადაროთ უსადენო და სადენიანი სიგნალიზაციის სისტემები — რომელი მოირგება თქვენს ობიექტს.",
          intro: "სიგნალიზაციის არჩევისას მთავარი დილემაა — უსადენო თუ სადენიანი სისტემა. თითოეულს აქვს დადებითი და უარყოფითი მხარეები.",
          sections: [
            { h: "დამონტაჟების სისწრაფე", p: "უსადენო სისტემები მარტივად და სწრაფად მონტაჟდება, განსაკუთრებით უკვე დასრულებულ შენობებში." },
            { h: "საიმედოობა", p: "სადენიანი სისტემები ნაკლებად მგრძნობიარეა ინტერფერენციისადმი და გამორთვის რისკისადმი, რაც მათ საიმედოს ხდის დიდი ობიექტებისთვის." },
            { h: "ფასი და მასშტაბირება", p: "უსადენო სისტემების გაფართოება უფრო ეკონომიურია, თუმცა სადენიანი გრძელვადიან პერსპექტივაში უფრო სტაბილურია." }
          ],
          conclusion: "არჩევანი დამოკიდებულია ობიექტის ტიპსა და ბიუჯეტზე — ჩვენ დაგეხმარებით სწორი გადაწყვეტილების მიღებაში."
        },
        post3: {
          title: "სახანძრო უსაფრთხოების თანამედროვე სტანდარტები",
          excerpt: "რას მოითხოვს თანამედროვე სახანძრო უსაფრთხოების ნორმები კომერციული და საცხოვრებელი ობიექტებისთვის.",
          intro: "სახანძრო უსაფრთხოება მოითხოვს სისტემურ მიდგომას — დეტექციიდან ევაკუაციამდე. განვიხილოთ ძირითადი მოთხოვნები.",
          sections: [
            { h: "ადრეული გამოვლენა", p: "კვამლისა და სითბოს დეტექტორები უნდა განთავსდეს სტრატეგიულ წერტილებში სწრაფი რეაგირებისთვის." },
            { h: "შეტყობინების სისტემა", p: "სირენები და შუქური სიგნალიზატორები უზრუნველყოფენ დროულ ევაკუაციას, განსაკუთრებით მაღალხმაურიან გარემოში." },
            { h: "რეგულარული შემოწმება", p: "სისტემების პერიოდული ტესტირება და სერტიფიცირება აუცილებელია მუდმივი ეფექტურობისთვის." }
          ],
          conclusion: "ნორმებთან შესაბამისობა იცავს როგორც ადამიანებს, ისე ქონებას — ჩვენ ვუზრუნველყოფთ სრულ ციკლს დაგეგმვიდან სერტიფიცირებამდე."
        },
        post4: {
          title: "ჭკვიანი ელექტრო საკეტები — უსაფრთხოება და კომფორტი",
          excerpt: "როგორ აუმჯობესებენ ჭკვიანი საკეტები როგორც უსაფრთხოებას, ისე ყოველდღიურ კომფორტს.",
          intro: "ჭკვიანი საკეტები ცვლის ტრადიციულ გასაღებებს დისტანციური და კოდური წვდომით, რაც მნიშვნელოვნად ზრდის მოხერხებულობას.",
          sections: [
            { h: "წვდომის კონტროლი", p: "კოდები და ბარათები საშუალებას გაძლევთ მართოთ ვინ და როდის შედის თქვენს ობიექტზე." },
            { h: "დისტანციური მართვა", p: "აპლიკაციის საშუალებით შეგიძლიათ გახსნათ ან დაკეტოთ კარი ნებისმიერი ადგილიდან." },
            { h: "ინტეგრაცია", p: "ჭკვიანი საკეტები ერწყმის დაშვების კონტროლისა და სიგნალიზაციის სისტემებს ერთიან ეკოსისტემად." }
          ],
          conclusion: "ინვესტიცია ჭკვიან საკეტებში ზრდის როგორც უსაფრთხოებას, ისე ყოველდღიურ კომფორტს."
        },
        post5: {
          title: "დაშვების სისტემების (Access Control) მნიშვნელობა ბიზნესში",
          excerpt: "რატომ საჭიროებს თანამედროვე ბიზნესი წვდომის კონტროლის სისტემას.",
          intro: "თანამშრომელთა და სტუმართა ნაკადის მართვა კრიტიკულია ბიზნესის უსაფრთხოებისა და ეფექტურობისთვის.",
          sections: [
            { h: "უსაფრთხოების გაძლიერება", p: "წვდომის შეზღუდვა მხოლოდ ავტორიზებული პირებისთვის ამცირებს არასანქცირებული შეღწევის რისკს." },
            { h: "სამუშაო დროის აღრიცხვა", p: "სისტემა ავტომატურად აღრიცხავს თანამშრომელთა შემოსვლა-გასვლის დროს, რაც ამარტივებს HR პროცესებს." },
            { h: "მასშტაბირებადობა", p: "სისტემა ადვილად ფართოვდება ახალი მომხმარებლებისა და შესასვლელი წერტილების დამატებით." }
          ],
          conclusion: "წვდომის კონტროლი არის ინვესტიცია, რომელიც იხდის თავს უსაფრთხოებასა და ორგანიზებულობაში."
        },
        post6: {
          title: "სწორი სტრუქტურირებული საკაბელო სისტემის (LAN) დაგეგმვა",
          excerpt: "საკაბელო ინფრასტრუქტურის დაგეგმვის ძირითადი პრინციპები სტაბილური ქსელისთვის.",
          intro: "სტრუქტურირებული საკაბელო სისტემა საფუძველია სტაბილური და სწრაფი ინტერნეტისთვის ნებისმიერ ოფისში.",
          sections: [
            { h: "სწორი კაბელის შერჩევა", p: "Cat6/Cat6a კაბელები უზრუნველყოფენ მაღალ გამტარუნარიანობას მომავალი საჭიროებებისთვის." },
            { h: "სტრუქტურა და მარკირება", p: "სწორად მარკირებული პორტები და პანელები ამარტივებენ მომავალ დიაგნოსტიკასა და გაფართოებას." },
            { h: "Wi-Fi დაფარვა", p: "წვდომის წერტილების სწორი განლაგება უზრუნველყოფს თანაბარ სიგნალს მთელ ოფისში." }
          ],
          conclusion: "გააზრებული დაგეგმვა დღეს ზოგავს დროსა და ხარჯებს მომავალში."
        },
        post7: {
          title: "უსაფრთხო ელექტრო გაყვანილობა — რას მივაქციოთ ყურადღება",
          excerpt: "ძირითადი უსაფრთხოების პრინციპები ელექტრო გაყვანილობის დაგეგმვისა და მონტაჟისას.",
          intro: "ელექტრო გაყვანილობა პირდაპირ გავლენას ახდენს ობიექტის უსაფრთხოებაზე — არასწორი მონტაჟი სერიოზული რისკია.",
          sections: [
            { h: "სწორი დატვირთვის გაანგარიშება", p: "კაბელისა და ავტომატების შერჩევა უნდა შეესაბამებოდეს რეალურ დატვირთვას გადახურების თავიდან ასაცილებლად." },
            { h: "დამიწება", p: "სათანადო დამიწების სისტემა იცავს მოწყობილობებსა და ადამიანებს დენის დარტყმისგან." },
            { h: "რეგულარული შემოწმება", p: "პერიოდული ტექნიკური დათვალიერება ვლენს ცვეთას და პოტენციურ საფრთხეებს დროულად." }
          ],
          conclusion: "პროფესიონალური მონტაჟი და რეგულარული შემოწმება უზრუნველყოფს უსაფრთხო და საიმედო ელექტრო სისტემას."
        },
        post8: {
          title: "როგორ ვაქციოთ სახლი ან ოფისი ჭკვიანად რელეების საშუალებით",
          excerpt: "მარტივი გზები, თუ როგორ დაიწყოთ სახლის ავტომატიზაცია ჭკვიანი რელეებით.",
          intro: "სახლის ავტომატიზაცია აღარ არის ძვირადღირებული ან რთული — ჭკვიანი რელეები საშუალებას გაძლევთ ეტაპობრივად დანერგოთ ავტომატიზაცია.",
          sections: [
            { h: "საიდან დავიწყოთ", p: "დაიწყეთ ერთი ან ორი ოთახის განათებისა თუ როზეტების ავტომატიზაციით და თანდათან გააფართოვეთ სისტემა." },
            { h: "აპლიკაციები და ინტეგრაცია", p: "Tuya, Sonoff და Shelly გთავაზობთ მარტივ აპლიკაციებს ერთი სივრციდან ყველა მოწყობილობის სამართავად." },
            { h: "სცენარები და ავტომატიზაცია", p: "დააპროგრამეთ სცენარები — მაგალითად, განათების ავტომატური ჩართვა მოძრაობის დეტექციისას." }
          ],
          conclusion: "მცირე ინვესტიციით შეგიძლიათ მნიშვნელოვნად გაზარდოთ კომფორტი და ენერგოეფექტურობა."
        }
      }
    }
  },

  /* =================================================== ENGLISH =================================================== */
  en: {
    common: {
      brandTag: "Security & Electrical Services",
      nav: { home: "Home", services: "Services", blog: "Blog", contact: "Contact" },
      callNow: "Call Now",
      learnMore: "Learn More",
      consultBtn: "Request a Consultation",
      whatsapp: "WhatsApp",
      backToServices: "All Services",
      viewService: "View Service",
      breadcrumbHome: "Home",
      breadcrumbServices: "Services",
      featuresTitle: "Features",
      equipmentTitle: "Equipment Used",
      processTitle: "Installation Process",
      ctaBannerTitle: "Interested in this service?",
      ctaBannerSubtitle: "Call us for a free consultation and on-site assessment.",
      footer: { about: "VECTOR — professional security and electrical systems installation across Tbilisi and the surrounding area. From CCTV to full electrical wiring.", quickLinks: "Navigation", servicesTitle: "Services", contactTitle: "Contact", rights: "All rights reserved." },
      contact: { phoneLabel: "Phone", whatsappLabel: "WhatsApp", areaLabel: "Service Area", area: "Services available across Tbilisi and surrounding areas", hoursLabel: "Working Hours", hoursWeek: "Mon–Sat: 09:00 – 19:00", hoursEmergency: "Emergency call-out: 24/7" }
    },
    home: {
      hero: {
        badgeLive: "Monitoring Active",
        eyebrow: "Security & Electrical Installations",
        title1: "Complete Protection",
        title2: "For Your Property",
        subtitle: "We design and install surveillance, alarm, fire-safety and electrical systems for residential and commercial properties across Tbilisi and the surrounding area.",
        ctaCall: "Call us: 595 70 83 00",
        ctaServices: "View Services",
        stat1: "500+", stat1Label: "Installed Sites",
        stat2: "11", stat2Label: "Years of Experience",
        stat3: "24/7", stat3Label: "Emergency Support"
      },
      servicesIntro: { eyebrow: "Services", title: "Everything, one system", subtitle: "The full spectrum of security, fire-safety and electrical infrastructure — from a single team." },
      whyUs: {
        eyebrow: "Why Us",
        title: "Why choose VECTOR",
        items: [
          { icon: "badge-check", title: "Quality Guarantee", desc: "We install only certified, high-quality hardware." },
          { icon: "timer", title: "Fast Service in Tbilisi & Area", desc: "We respond promptly anywhere in the city and surrounding region." },
          { icon: "file-check", title: "Official Warranty", desc: "Every job comes with a written warranty." },
          { icon: "wrench", title: "Professional Installation", desc: "Experienced technicians, the right tools, and clean workmanship." }
        ]
      },
      process: {
        eyebrow: "How We Work",
        title: "Three simple steps",
        subtitle: "From the first call to full setup — a transparent, fast process.",
        steps: [
          { icon: "phone-call", title: "Call / Consultation", desc: "Reach us by phone or WhatsApp — we'll learn about your needs." },
          { icon: "search", title: "Site Inspection", desc: "A specialist visits your property and proposes the best solution." },
          { icon: "settings", title: "Installation & Setup", desc: "We install the system professionally and walk you through using it." }
        ]
      },
      faq: {
        eyebrow: "FAQ",
        title: "Frequently Asked Questions",
        items: [
          { q: "Which areas do you cover?", a: "We work across all of Tbilisi and the surrounding area — every district and nearby settlement." },
          { q: "Do you offer a warranty on your work?", a: "Yes, every installation and piece of equipment comes with an official written warranty." },
          { q: "Is a site inspection required beforehand?", a: "For larger or complex projects we recommend a free inspection — it helps us prepare an accurate assessment." },
          { q: "How long does installation take?", a: "A standard property is typically completed in 1–3 days, depending on the scope of the project." }
        ]
      },
      contactSection: { eyebrow: "Contact", title: "Get in Touch", subtitle: "Call us or message us on WhatsApp — we reply quickly." }
    },
    services: {
      cctv: {
        title: "CCTV & Video Surveillance", tag: "24/7 Video Surveillance",
        summary: "IP and HD/4K camera installation with remote monitoring. Night vision, motion detection, and secure archive storage.",
        overview: "Our team designs and installs complete surveillance systems — from camera selection to remote-monitoring setup. We work with both residential and commercial properties.",
        features: ["Choice of IP/HD/4K cameras", "Remote viewing via mobile app", "Night vision & wide dynamic range (WDR)", "Motion-triggered alerts", "Weatherproof housing for outdoor use"],
        equipment: ["IP camera (dome/bullet)", "NVR/DVR recorder", "PoE switch", "Hard disk drive (HDD)", "Weatherproof cabling"],
        process: ["Site survey & camera placement plan", "Cabling and power installation", "Camera mounting & angle calibration", "NVR setup & mobile app pairing", "Testing and handover/training"]
      },
      alarm: {
        title: "Alarm Systems", tag: "Reliable protection, any time",
        summary: "Motion sensors and smart alerts to protect your property. Wired and wireless options with 24/7 monitoring.",
        overview: "We install reliable alarm systems that notify you immediately of unauthorized entry — at home or in the office.",
        features: ["Motion and door/window sensors", "Wired or wireless configuration", "Instant push/SMS notifications", "Optional panic button", "Integration with a 24-hour monitoring center"],
        equipment: ["PIR motion detectors", "Door/window magnetic contacts", "Control panel and keypad", "Siren (indoor/outdoor)", "GSM/IP communicator"],
        process: ["Risk assessment & zone planning", "Sensor and panel installation", "Wired or wireless pairing", "System programming and testing", "User training & monitoring activation"]
      },
      fire: {
        title: "Fire Safety Systems", tag: "Fire safety comes first",
        summary: "Smoke detectors and fire alarm panels for complete safety. Automatic notification and full regulatory compliance.",
        overview: "We install fire alarm and notification systems in full regulatory compliance — to protect people and property.",
        features: ["Smoke and heat detectors", "Addressable or conventional panels", "Automatic notification to the fire service", "Manual call points", "Compliance with fire safety standards"],
        equipment: ["Smoke/heat detectors", "Fire alarm control panel", "Manual call points", "Sounders and strobe signals", "Backup battery unit"],
        process: ["Building risk assessment", "Detector & panel layout design", "Installation and cable routing", "Panel programming & zone testing", "Certification and compliance sign-off"]
      },
      locks: {
        title: "Smart & Electric Locks", tag: "Smart access at your door",
        summary: "Magnetic and keypad locks with remote control. Integrates seamlessly with access-control systems.",
        overview: "We install smart locking systems for doors and gates — secure, convenient, and controllable remotely.",
        features: ["Magnetic (maglock) door locks", "Keypad and card-based entry", "Remote / app-based unlocking", "Fail-safe / fail-secure options", "Integration with access-control systems"],
        equipment: ["Magnetic lock unit", "Keypad / card reader", "Exit push button", "Door closer", "Power supply / battery backup"],
        process: ["Door and frame assessment", "Lock and reader mounting", "Power and cable connection", "Code / card programming", "Fail-safe mode testing"]
      },
      access: {
        title: "Access Control Systems", tag: "Control who comes in",
        summary: "Turnstiles, RFID and biometric identification to manage access. Integrated with time-and-attendance tracking.",
        overview: "We implement access-control systems for offices, factories and residential complexes — secure and fully accountable.",
        features: ["Turnstiles and barrier gates", "RFID card readers", "Biometric (fingerprint / face) identification", "Visitor management", "Time and attendance tracking"],
        equipment: ["Turnstile / barrier unit", "RFID reader and cards", "Biometric scanner", "Access control panel", "Management software"],
        process: ["Traffic flow & entry-point analysis", "Hardware installation and wiring", "Software / database configuration", "User enrollment (cards / biometrics)", "Staff training and go-live"]
      },
      network: {
        title: "Network Infrastructure", tag: "Reliable connection, always",
        summary: "Structured cabling systems and Wi-Fi optimization. Stable, fast internet for a property of any size.",
        overview: "We build reliable network infrastructure — for stable internet and connectivity at home or in the office.",
        features: ["Structured cabling (Cat6/Cat6a)", "Router and switch configuration", "Patch panel & rack setup", "Wi-Fi coverage optimization", "Basic network security"],
        equipment: ["Cat6/Cat6a cabling", "Patch panel and server rack", "Managed switch", "Router / firewall", "Wireless access points"],
        process: ["Site survey & network design", "Cable pulling and termination", "Rack and equipment installation", "Configuration and Wi-Fi tuning", "Speed testing and documentation"]
      },
      electrical: {
        title: "Electrical Wiring", tag: "Safe electrical systems, built right",
        summary: "Full electrical wiring for residential and commercial properties. Distribution panels and safety inspection.",
        overview: "We carry out complete electrical installation work — in full compliance with international safety standards.",
        features: ["Residential and commercial wiring", "Distribution panel assembly", "Replacement of old wiring", "Grounding and surge protection", "Safety inspection and certification"],
        equipment: ["Copper cable and conduit", "Distribution panel / breakers", "Circuit breakers and RCDs", "Sockets and switches", "Grounding system"],
        process: ["Load assessment and planning", "Conduit and cable routing", "Panel assembly and breaker installation", "Fixture and socket connection", "Safety testing and certification"]
      },
      smart: {
        title: "Smart Devices", tag: "Your home, your control",
        summary: "Smart relays and controllers for remote control of lighting, heating and appliances. Full automation from your smartphone.",
        overview: "We install smart relays and micro-controllers (Sonoff, Shelly, Tuya, Ajax) that let you control lighting, heating, gates and appliances from your phone, from anywhere.",
        features: ["Remote lighting control", "Turn appliances on/off via app", "Automated gate and barrier control", "Smart climate control (thermostats)", "Scenes and schedule programming"],
        equipment: ["Smart relays (Sonoff/Shelly)", "Wi-Fi/Zigbee controllers", "Smart switches and sockets", "Sensors (temperature/open/motion)", "Central hub (Ajax/Tuya)"],
        process: ["Needs analysis and device selection", "Relay and controller installation", "Connecting to Wi-Fi/Zigbee network", "App and scene configuration", "Testing and user training"]
      }
    },
    blog: {
      eyebrow: "Blog",
      title: "Helpful Articles",
      subtitle: "Tips and guides on security and electrical systems.",
      readMore: "Read More",
      minReadSuffix: "min read",
      backToBlog: "All Articles",
      posts: {
        post1: {
          title: "How to Choose IP Cameras for Home and Office",
          excerpt: "Learn what to look for when choosing a camera — resolution, night vision, and storage options.",
          intro: "Choosing the right camera depends on the size of the property, lighting conditions, and security requirements. This article covers the key criteria.",
          sections: [
            { h: "Resolution & Quality", p: "HD (2MP) is enough for small spaces, while 4K is recommended for larger areas or facial recognition." },
            { h: "Night Vision", p: "Cameras with IR or color night vision provide clear footage even in low-light conditions." },
            { h: "Storage Options", p: "Choose between local NVR/DVR storage or cloud storage — each has its advantages depending on budget and access needs." }
          ],
          conclusion: "A well-chosen system provides long-term, reliable protection. Our team can help you find the optimal solution if needed."
        },
        post2: {
          title: "Wireless vs Wired Alarm Systems: Which Is Better?",
          excerpt: "Comparing wireless and wired alarm systems to help you choose what fits your property.",
          intro: "When choosing an alarm system, the main choice is between wireless and wired setups. Each has its own pros and cons.",
          sections: [
            { h: "Installation Speed", p: "Wireless systems are quick and easy to install, especially in already-finished buildings." },
            { h: "Reliability", p: "Wired systems are less susceptible to interference or signal loss, making them dependable for larger properties." },
            { h: "Cost & Scalability", p: "Expanding a wireless system is more economical, though wired systems tend to be more stable long-term." }
          ],
          conclusion: "The right choice depends on your property type and budget — we can help you decide."
        },
        post3: {
          title: "Modern Fire Safety Standards",
          excerpt: "What today's fire safety regulations require for commercial and residential properties.",
          intro: "Fire safety requires a systematic approach — from detection to evacuation. Let's look at the key requirements.",
          sections: [
            { h: "Early Detection", p: "Smoke and heat detectors should be placed at strategic points for a fast response." },
            { h: "Notification Systems", p: "Sirens and strobe signals ensure timely evacuation, especially in high-noise environments." },
            { h: "Regular Inspection", p: "Periodic testing and certification of systems is essential for continued effectiveness." }
          ],
          conclusion: "Compliance protects both people and property — we handle the full cycle, from planning to certification."
        },
        post4: {
          title: "Smart Electric Locks — Security and Convenience",
          excerpt: "How smart locks improve both security and everyday convenience.",
          intro: "Smart locks replace traditional keys with remote and code-based access, significantly increasing convenience.",
          sections: [
            { h: "Access Control", p: "Codes and cards let you control who enters your property and when." },
            { h: "Remote Control", p: "An app lets you lock or unlock your door from anywhere." },
            { h: "Integration", p: "Smart locks integrate with access-control and alarm systems into one unified ecosystem." }
          ],
          conclusion: "Investing in smart locks improves both security and daily convenience."
        },
        post5: {
          title: "The Importance of Access Control Systems in Business",
          excerpt: "Why modern businesses need an access-control system.",
          intro: "Managing employee and visitor flow is critical for business security and efficiency.",
          sections: [
            { h: "Stronger Security", p: "Restricting access to authorized personnel only reduces the risk of unauthorized entry." },
            { h: "Time & Attendance Tracking", p: "The system automatically logs employee entry and exit times, simplifying HR processes." },
            { h: "Scalability", p: "The system expands easily as you add new users and entry points." }
          ],
          conclusion: "Access control is an investment that pays off in security and organization."
        },
        post6: {
          title: "Planning the Right Structured Cabling (LAN) System",
          excerpt: "Key principles for planning a cabling infrastructure that keeps your network stable.",
          intro: "Structured cabling is the foundation of a stable, fast network in any office.",
          sections: [
            { h: "Choosing the Right Cable", p: "Cat6/Cat6a cabling provides the bandwidth needed for future requirements." },
            { h: "Structure & Labeling", p: "Properly labeled ports and panels make future diagnostics and expansion much easier." },
            { h: "Wi-Fi Coverage", p: "Correct access point placement ensures even signal strength throughout the office." }
          ],
          conclusion: "Thoughtful planning today saves time and money down the road."
        },
        post7: {
          title: "Safe Electrical Wiring — What to Pay Attention To",
          excerpt: "Key safety principles for planning and installing electrical wiring.",
          intro: "Electrical wiring directly affects a property's safety — improper installation is a serious risk.",
          sections: [
            { h: "Correct Load Calculation", p: "Cable and breaker selection must match the actual load to prevent overheating." },
            { h: "Grounding", p: "A proper grounding system protects both equipment and people from electric shock." },
            { h: "Regular Inspection", p: "Periodic technical inspection reveals wear and potential hazards early." }
          ],
          conclusion: "Professional installation and regular inspection ensure a safe, reliable electrical system."
        },
        post8: {
          title: "How to Make Your Home or Office Smart with Relays",
          excerpt: "Simple ways to start automating your home with smart relays.",
          intro: "Home automation is no longer expensive or complicated — smart relays let you roll out automation step by step.",
          sections: [
            { h: "Where to Start", p: "Start by automating the lighting or sockets in one or two rooms, then gradually expand the system." },
            { h: "Apps & Integration", p: "Tuya, Sonoff, and Shelly offer simple apps to control every device from one place." },
            { h: "Scenes & Automation", p: "Program scenes — for example, automatically turning on lights when motion is detected." }
          ],
          conclusion: "With a small investment you can significantly boost comfort and energy efficiency."
        }
      }
    }
  },

  /* =================================================== RUSSIAN =================================================== */
  ru: {
    common: {
      brandTag: "Охранные и электромонтажные услуги",
      nav: { home: "Главная", services: "Услуги", blog: "Блог", contact: "Контакты" },
      callNow: "Позвонить",
      learnMore: "Подробнее",
      consultBtn: "Запросить консультацию",
      whatsapp: "WhatsApp",
      backToServices: "Все услуги",
      viewService: "Смотреть услугу",
      breadcrumbHome: "Главная",
      breadcrumbServices: "Услуги",
      featuresTitle: "Особенности",
      equipmentTitle: "Используемое оборудование",
      processTitle: "Процесс монтажа",
      ctaBannerTitle: "Заинтересовала услуга?",
      ctaBannerSubtitle: "Позвоните нам для бесплатной консультации и оценки объекта.",
      footer: { about: "VECTOR — профессиональный монтаж охранных и электрических систем в Тбилиси и окрестностях. От видеонаблюдения до полного электромонтажа.", quickLinks: "Навигация", servicesTitle: "Услуги", contactTitle: "Контакты", rights: "Все права защищены." },
      contact: { phoneLabel: "Телефон", whatsappLabel: "WhatsApp", areaLabel: "Зона обслуживания", area: "Услуги доступны по всему Тбилиси и в пригородах", hoursLabel: "Часы работы", hoursWeek: "Пн–Сб: 09:00 – 19:00", hoursEmergency: "Аварийный вызов: 24/7" }
    },
    home: {
      hero: {
        badgeLive: "Мониторинг активен",
        eyebrow: "Охрана и электромонтаж",
        title1: "Полная защита",
        title2: "вашего объекта",
        subtitle: "Проектируем и устанавливаем системы видеонаблюдения, сигнализации, пожарной безопасности и электрики для жилых и коммерческих объектов в Тбилиси и окрестностях.",
        ctaCall: "Позвонить: 595 70 83 00",
        ctaServices: "Смотреть услуги",
        stat1: "500+", stat1Label: "Установленных объектов",
        stat2: "11", stat2Label: "Лет опыта",
        stat3: "24/7", stat3Label: "Экстренный вызов"
      },
      servicesIntro: { eyebrow: "Услуги", title: "Всё в одной системе", subtitle: "Полный спектр охранной, противопожарной и электрической инфраструктуры — от одной команды." },
      whyUs: {
        eyebrow: "Почему мы",
        title: "Почему выбирают VECTOR",
        items: [
          { icon: "badge-check", title: "Гарантия качества", desc: "Устанавливаем только сертифицированное, качественное оборудование." },
          { icon: "timer", title: "Быстрое обслуживание в Тбилиси и окрестностях", desc: "Оперативно реагируем на вызовы в любой точке города и региона." },
          { icon: "file-check", title: "Официальная гарантия", desc: "На каждую работу выдаётся письменная гарантия." },
          { icon: "wrench", title: "Профессиональный монтаж", desc: "Опытные техники, правильные инструменты и аккуратное исполнение." }
        ]
      },
      process: {
        eyebrow: "Как мы работаем",
        title: "Три простых шага",
        subtitle: "От звонка до полной настройки — прозрачный и быстрый процесс.",
        steps: [
          { icon: "phone-call", title: "Звонок / Консультация", desc: "Свяжитесь с нами по телефону или WhatsApp — узнаем о ваших потребностях." },
          { icon: "search", title: "Осмотр объекта", desc: "Специалист посетит объект и предложит оптимальное решение." },
          { icon: "settings", title: "Монтаж и настройка", desc: "Профессионально устанавливаем систему и обучаем пользованию." }
        ]
      },
      faq: {
        eyebrow: "Вопросы",
        title: "Часто задаваемые вопросы",
        items: [
          { q: "В каких районах вы работаете?", a: "Работаем по всему Тбилиси и в пригородах — во всех районах города и ближайших населённых пунктах." },
          { q: "Предоставляете ли вы гарантию на работу?", a: "Да, на все монтажные работы и оборудование выдаётся официальная письменная гарантия." },
          { q: "Нужен ли предварительный осмотр объекта?", a: "Для крупных или сложных проектов рекомендуем бесплатный осмотр — это помогает подготовить точную оценку." },
          { q: "Сколько времени занимает монтаж?", a: "Стандартный объект обычно завершается за 1–3 дня, в зависимости от масштаба проекта." }
        ]
      },
      contactSection: { eyebrow: "Контакты", title: "Свяжитесь с нами", subtitle: "Позвоните или напишите нам в WhatsApp — ответим быстро." }
    },
    services: {
      cctv: {
        title: "Видеонаблюдение (CCTV)", tag: "Видеонаблюдение 24/7",
        summary: "Установка IP и HD/4K камер с удалённым мониторингом. Ночное видение, детекция движения и надёжное хранение архива.",
        overview: "Наша команда проектирует и устанавливает полные системы видеонаблюдения — от выбора камер до настройки удалённого мониторинга. Работаем как с жилыми, так и с коммерческими объектами.",
        features: ["Выбор IP/HD/4K камер", "Удалённый просмотр через мобильное приложение", "Ночное видение и широкий динамический диапазон (WDR)", "Уведомления при обнаружении движения", "Влагозащищённый корпус для улицы"],
        equipment: ["IP-камера (купольная/цилиндрическая)", "Видеорегистратор NVR/DVR", "PoE-коммутатор", "Жёсткий диск (HDD)", "Влагозащищённый кабель"],
        process: ["Осмотр объекта и план размещения камер", "Прокладка кабеля и монтаж питания", "Установка камер и калибровка угла", "Настройка NVR и подключение к приложению", "Тестирование и передача клиенту"]
      },
      alarm: {
        title: "Сигнализация", tag: "Надёжная защита в любое время",
        summary: "Датчики движения и умные уведомления для защиты объекта. Проводные и беспроводные варианты с мониторингом 24/7.",
        overview: "Устанавливаем надёжные системы сигнализации, которые мгновенно оповещают о несанкционированном проникновении — дома или в офисе.",
        features: ["Датчики движения и на двери/окна", "Проводная или беспроводная конфигурация", "Мгновенные push/SMS-уведомления", "Опциональная тревожная кнопка", "Интеграция с круглосуточным пультом охраны"],
        equipment: ["PIR-датчики движения", "Магнитные контакты на двери/окна", "Контрольная панель и клавиатура", "Сирена (внутренняя/наружная)", "GSM/IP-коммуникатор"],
        process: ["Оценка рисков и планирование зон", "Установка датчиков и панели", "Проводное или беспроводное подключение", "Программирование и тестирование системы", "Обучение пользователя и активация мониторинга"]
      },
      fire: {
        title: "Пожарная безопасность", tag: "Пожарная безопасность — приоритет",
        summary: "Дымовые извещатели и пожарные панели для полной безопасности. Автоматическое оповещение и соответствие нормам.",
        overview: "Устанавливаем системы пожарной сигнализации и оповещения с полным соблюдением нормативных требований — для защиты людей и имущества.",
        features: ["Дымовые и тепловые извещатели", "Адресные или пороговые панели", "Автоматическое оповещение пожарной службы", "Ручные пожарные извещатели", "Соответствие нормам пожарной безопасности"],
        equipment: ["Дымовые/тепловые извещатели", "Пожарная контрольная панель", "Ручные извещатели", "Сирены и световые оповещатели", "Блок резервной батареи"],
        process: ["Оценка рисков здания", "Планирование расположения извещателей и панели", "Монтаж и прокладка кабеля", "Программирование панели и тестирование зон", "Сертификация и подтверждение соответствия"]
      },
      locks: {
        title: "Электронные замки", tag: "Умный доступ к вашей двери",
        summary: "Магнитные и кодовые замки с дистанционным управлением. Полностью интегрируются с системами контроля доступа.",
        overview: "Устанавливаем умные системы запирания для дверей и ворот — безопасные, удобные и управляемые дистанционно.",
        features: ["Магнитные замки (maglock)", "Кодовый и карточный доступ", "Удалённое / мобильное открытие", "Режимы fail-safe / fail-secure", "Интеграция с системами контроля доступа"],
        equipment: ["Блок магнитного замка", "Клавиатура / карт-ридер", "Кнопка выхода (Exit Button)", "Доводчик двери", "Блок питания / резервная батарея"],
        process: ["Оценка двери и дверной коробки", "Монтаж замка и считывателя", "Подключение питания и кабеля", "Программирование кода / карты", "Тестирование режима fail-safe"]
      },
      access: {
        title: "Системы контроля доступа", tag: "Контролируйте, кто входит",
        summary: "Турникеты, RFID и биометрическая идентификация для управления доступом. С интеграцией учёта рабочего времени.",
        overview: "Внедряем системы контроля доступа для офисов, заводов и жилых комплексов — безопасно и с полным учётом.",
        features: ["Турникеты и шлагбаумы", "RFID-считыватели карт", "Биометрическая идентификация (отпечаток пальца / лицо)", "Управление посетителями", "Учёт рабочего времени"],
        equipment: ["Турникет / шлагбаум", "RFID-считыватель и карты", "Биометрический сканер", "Панель контроля доступа", "Программное обеспечение управления"],
        process: ["Анализ потоков и точек входа", "Монтаж оборудования и кабельная разводка", "Настройка ПО и базы данных", "Регистрация пользователей (карты/биометрия)", "Обучение персонала и запуск"]
      },
      network: {
        title: "Сетевая инфраструктура", tag: "Стабильная связь всегда",
        summary: "Структурированные кабельные системы и оптимизация Wi-Fi. Стабильный и быстрый интернет для объекта любого размера.",
        overview: "Строим надёжную сетевую инфраструктуру — для стабильного интернета и связи дома или в офисе.",
        features: ["Структурированная кабельная система (Cat6/Cat6a)", "Настройка роутера и коммутаторов", "Монтаж патч-панели и стойки", "Оптимизация покрытия Wi-Fi", "Базовая сетевая безопасность"],
        equipment: ["Кабель Cat6/Cat6a", "Патч-панель и серверная стойка", "Управляемый коммутатор", "Роутер / файервол", "Точки беспроводного доступа (AP)"],
        process: ["Осмотр объекта и проектирование сети", "Прокладка и разделка кабеля", "Монтаж стойки и оборудования", "Настройка и оптимизация Wi-Fi", "Тестирование скорости и документация"]
      },
      electrical: {
        title: "Электропроводка", tag: "Безопасная электросистема с основания",
        summary: "Полная электропроводка для жилых и коммерческих объектов. Распределительные щиты и проверка безопасности.",
        overview: "Выполняем полный комплекс электромонтажных работ — с полным соблюдением международных стандартов безопасности.",
        features: ["Жилой и коммерческий электромонтаж", "Сборка распределительных щитов", "Замена старой проводки", "Заземление и защита от перенапряжения", "Проверка безопасности и сертификация"],
        equipment: ["Медный кабель и кабель-канал", "Распределительный щит / автоматы", "Автоматические выключатели и УЗО", "Розетки и выключатели", "Система заземления"],
        process: ["Оценка нагрузки и планирование", "Прокладка кабель-канала и кабеля", "Сборка щита и монтаж автоматов", "Подключение светильников и розеток", "Тестирование безопасности и сертификация"]
      },
      smart: {
        title: "Умные устройства", tag: "Ваш дом под вашим контролем",
        summary: "Умные реле и контроллеры для дистанционного управления освещением, отоплением и техникой. Полная автоматизация со смартфона.",
        overview: "Устанавливаем умные реле и микроконтроллеры (Sonoff, Shelly, Tuya, Ajax), которые позволяют управлять освещением, отоплением, воротами и техникой с телефона из любой точки.",
        features: ["Дистанционное управление освещением", "Включение/выключение техники через приложение", "Автоматическое управление воротами и шлагбаумом", "Умный климат-контроль (термостаты)", "Программирование сценариев и расписаний"],
        equipment: ["Умные реле (Sonoff/Shelly)", "Wi-Fi/Zigbee контроллеры", "Умные выключатели и розетки", "Датчики (температура/открытие/движение)", "Центральный хаб (Ajax/Tuya)"],
        process: ["Анализ потребностей и подбор устройств", "Монтаж реле и контроллеров", "Подключение к сети Wi-Fi/Zigbee", "Настройка приложения и сценариев", "Тестирование и обучение пользователя"]
      }
    },
    blog: {
      eyebrow: "Блог",
      title: "Полезные статьи",
      subtitle: "Советы и руководства по охранным и электрическим системам.",
      readMore: "Читать полностью",
      minReadSuffix: "мин чтения",
      backToBlog: "Все статьи",
      posts: {
        post1: {
          title: "Как выбрать IP-камеры для дома и офиса",
          excerpt: "Узнайте, на что обратить внимание при выборе камеры — разрешение, ночное видение и варианты хранения.",
          intro: "Выбор подходящей камеры зависит от размера объекта, освещения и требований безопасности. В этой статье рассмотрим ключевые критерии.",
          sections: [
            { h: "Разрешение и качество", p: "HD (2MP) достаточно для небольших помещений, а 4K рекомендуется для больших площадей или распознавания лиц." },
            { h: "Ночное видение", p: "Камеры с ИК или цветным ночным видением обеспечивают чёткое изображение даже при слабом освещении." },
            { h: "Варианты хранения", p: "Выбирайте между локальным NVR/DVR или облачным хранением — у каждого варианта свои преимущества в зависимости от бюджета и доступа." }
          ],
          conclusion: "Правильно подобранная система обеспечивает надёжную защиту на долгие годы. При необходимости наша команда поможет подобрать оптимальное решение."
        },
        post2: {
          title: "Беспроводная vs проводная сигнализация: что лучше?",
          excerpt: "Сравниваем беспроводные и проводные системы сигнализации, чтобы помочь выбрать подходящую для вашего объекта.",
          intro: "При выборе сигнализации главная дилемма — беспроводная или проводная система. У каждой есть свои плюсы и минусы.",
          sections: [
            { h: "Скорость установки", p: "Беспроводные системы устанавливаются быстро и просто, особенно в уже готовых зданиях." },
            { h: "Надёжность", p: "Проводные системы менее подвержены помехам и потере сигнала, что делает их надёжными для крупных объектов." },
            { h: "Стоимость и масштабируемость", p: "Расширение беспроводной системы экономичнее, хотя проводная в долгосрочной перспективе более стабильна." }
          ],
          conclusion: "Выбор зависит от типа объекта и бюджета — мы поможем принять правильное решение."
        },
        post3: {
          title: "Современные стандарты пожарной безопасности",
          excerpt: "Что требуют современные нормы пожарной безопасности для коммерческих и жилых объектов.",
          intro: "Пожарная безопасность требует системного подхода — от обнаружения до эвакуации. Рассмотрим ключевые требования.",
          sections: [
            { h: "Раннее обнаружение", p: "Дымовые и тепловые извещатели должны размещаться в стратегических точках для быстрого реагирования." },
            { h: "Система оповещения", p: "Сирены и световые сигнализаторы обеспечивают своевременную эвакуацию, особенно в шумной среде." },
            { h: "Регулярная проверка", p: "Периодическое тестирование и сертификация систем необходимы для постоянной эффективности." }
          ],
          conclusion: "Соответствие нормам защищает и людей, и имущество — мы обеспечиваем полный цикл от планирования до сертификации."
        },
        post4: {
          title: "Умные электронные замки — безопасность и комфорт",
          excerpt: "Как умные замки повышают безопасность и повседневный комфорт.",
          intro: "Умные замки заменяют традиционные ключи дистанционным и кодовым доступом, значительно повышая удобство.",
          sections: [
            { h: "Контроль доступа", p: "Коды и карты позволяют контролировать, кто и когда входит на объект." },
            { h: "Дистанционное управление", p: "Приложение позволяет открывать или закрывать дверь из любой точки." },
            { h: "Интеграция", p: "Умные замки объединяются с системами контроля доступа и сигнализацией в единую экосистему." }
          ],
          conclusion: "Инвестиция в умные замки повышает как безопасность, так и повседневный комфорт."
        },
        post5: {
          title: "Важность систем контроля доступа для бизнеса",
          excerpt: "Почему современному бизнесу нужна система контроля доступа.",
          intro: "Управление потоком сотрудников и посетителей критически важно для безопасности и эффективности бизнеса.",
          sections: [
            { h: "Усиление безопасности", p: "Ограничение доступа только авторизованным лицам снижает риск несанкционированного проникновения." },
            { h: "Учёт рабочего времени", p: "Система автоматически фиксирует время прихода и ухода сотрудников, упрощая HR-процессы." },
            { h: "Масштабируемость", p: "Система легко расширяется с добавлением новых пользователей и точек входа." }
          ],
          conclusion: "Контроль доступа — это инвестиция, которая окупается безопасностью и организованностью."
        },
        post6: {
          title: "Правильное планирование структурированной кабельной системы (LAN)",
          excerpt: "Ключевые принципы планирования кабельной инфраструктуры для стабильной сети.",
          intro: "Структурированная кабельная система — основа стабильной и быстрой сети в любом офисе.",
          sections: [
            { h: "Выбор правильного кабеля", p: "Кабели Cat6/Cat6a обеспечивают пропускную способность, необходимую для будущих потребностей." },
            { h: "Структура и маркировка", p: "Правильно маркированные порты и панели значительно упрощают будущую диагностику и расширение." },
            { h: "Покрытие Wi-Fi", p: "Правильное размещение точек доступа обеспечивает равномерный сигнал по всему офису." }
          ],
          conclusion: "Продуманное планирование сегодня экономит время и деньги в будущем."
        },
        post7: {
          title: "Безопасная электропроводка — на что обратить внимание",
          excerpt: "Ключевые принципы безопасности при планировании и монтаже электропроводки.",
          intro: "Электропроводка напрямую влияет на безопасность объекта — неправильный монтаж представляет серьёзный риск.",
          sections: [
            { h: "Правильный расчёт нагрузки", p: "Выбор кабеля и автоматов должен соответствовать реальной нагрузке во избежание перегрева." },
            { h: "Заземление", p: "Правильная система заземления защищает оборудование и людей от поражения электрическим током." },
            { h: "Регулярная проверка", p: "Периодический технический осмотр своевременно выявляет износ и потенциальные угрозы." }
          ],
          conclusion: "Профессиональный монтаж и регулярная проверка обеспечивают безопасную и надёжную электросистему."
        },
        post8: {
          title: "Как сделать дом или офис умным с помощью реле",
          excerpt: "Простые способы начать автоматизацию дома с помощью умных реле.",
          intro: "Автоматизация дома больше не дорогая и не сложная — умные реле позволяют внедрять автоматизацию поэтапно.",
          sections: [
            { h: "С чего начать", p: "Начните с автоматизации освещения или розеток в одной-двух комнатах, затем постепенно расширяйте систему." },
            { h: "Приложения и интеграция", p: "Tuya, Sonoff и Shelly предлагают простые приложения для управления всеми устройствами из одного места." },
            { h: "Сценарии и автоматизация", p: "Запрограммируйте сценарии — например, автоматическое включение света при обнаружении движения." }
          ],
          conclusion: "При небольших вложениях вы можете значительно повысить комфорт и энергоэффективность."
        }
      }
    }
  }
};
