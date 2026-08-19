/* ===================================================================
   VECTOR — Security & Electrical Services
   Shared translation dictionary (GE / EN / RU)
   Loaded by every page BEFORE app.js
=================================================================== */

const PHONE_DISPLAY = "595 70 83 00";
const PHONE_TEL = "595708300";
const WHATSAPP_URL = "https://wa.me/995595708300";

const SERVICE_ORDER = ["cctv", "alarm", "fire", "locks", "access", "network", "electrical"];

const SERVICE_META = {
  cctv:       { icon: "camera",      page: "cameras.html", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=80" },
  alarm:      { icon: "bell-ring",   page: "alarm.html",   img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80" },
  fire:       { icon: "flame",       page: "fire.html",    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1600&q=80" },
  locks:      { icon: "key-round",   page: "locks.html",   img: "https://images.unsplash.com/photo-1558617320-a56d5bcd8bde?auto=format&fit=crop&w=1600&q=80" },
  access:     { icon: "fingerprint", page: "access.html",  img: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1600&q=80" },
  network:    { icon: "network",     page: "network.html", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80" },
  electrical: { icon: "zap",         page: "wiring.html",  img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1600&q=80" }
};

const translations = {
  /* =================================================== GEORGIAN =================================================== */
  ge: {
    common: {
      brandTag: "უსაფრთხოება & ელექტრო სერვისი",
      nav: { home: "მთავარი", services: "სერვისები", contact: "კონტაქტი" },
      callNow: "დარეკვა ახლავე",
      learnMore: "ვრცლად",
      consultBtn: "მოითხოვეთ კონსულტაცია",
      whatsapp: "WhatsApp",
      backToServices: "ყველა სერვისი",
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
      }
    }
  },

  /* =================================================== ENGLISH =================================================== */
  en: {
    common: {
      brandTag: "Security & Electrical Services",
      nav: { home: "Home", services: "Services", contact: "Contact" },
      callNow: "Call Now",
      learnMore: "Learn More",
      consultBtn: "Request a Consultation",
      whatsapp: "WhatsApp",
      backToServices: "All Services",
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
      }
    }
  },

  /* =================================================== RUSSIAN =================================================== */
  ru: {
    common: {
      brandTag: "Охранные и электромонтажные услуги",
      nav: { home: "Главная", services: "Услуги", contact: "Контакты" },
      callNow: "Позвонить",
      learnMore: "Подробнее",
      consultBtn: "Запросить консультацию",
      whatsapp: "WhatsApp",
      backToServices: "Все услуги",
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
      }
    }
  }
};
