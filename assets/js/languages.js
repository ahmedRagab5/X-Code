// ترجمات النصوص بالعربية والإنجليزية
const translations = {
  ar: {
    // Navigation
    "nav-home": "الصفحة الرئيسية",
    "nav-services": "الخدمات",
    "nav-portfolio": "الأعمال",
    "nav-team": "الفريق",
    "nav-contact": "اتصل بنا",
    
    // Hero Section
    "hero-title": "X CODE",
    "hero-subtitle": "هنبرمج فكرتك",
    
    // About Section
    "about-title": "نبذة عن الشركة",
    "about-heading": "نقدم لك حلول تقنية متكاملة تساعد اي من اصحاب الشركات او المشاريع",
    "about-subtitle": "نحن شركة متخصصة في تطوير البرمجيات وتصميم المواقع الإلكترونية. نقدم حلول تقنية متكاملة تساعد أصحاب الشركات والمشاريع على تحقيق أهدافهم الرقمية.",
    "about-mission-title": "مهمتنا",
    "about-mission": "نسعى لتقديم حلول تقنية مبتكرة ومتطورة تساعد الشركات والمشاريع على النمو والتطور في العالم الرقمي.",
    "about-vision-title": "رؤيتنا",
    "about-vision": "أن نكون الشريك التقني الموثوق به للشركات والمشاريع الناجحة في المنطقة.",
    "about-values-title": "قيمنا",
    "about-values": "الابتكار، الجودة، الموثوقية، والالتزام بتقديم أفضل الحلول لعملائنا.",
    
    // Services Section
    "services-title": "الخدمات",
    "services-heading": "أفضل خدماتنا",
    "services-subtitle": "خدمات متكاملة، حلول ذكية، ونتايج تفرق، اختر اللي يناسبك وابدأ بقوة.",
    
    "service-desktop-title": "تطبيقات ديسكتوب احترافية",
    "service-desktop-desc": "تطبيقات سطح المكتب المتقدمة لنظامي Windows و macOS واجهات مستخدم عصرية وسهلة الاستخدام حلول مخصصة لإدارة الأعمال والشركات",
    
    "service-graphic-title": "تصميم الجرافيك والهوية البصرية",
    "service-graphic-desc": "تصميم شعارات وهوية بصرية احترافية تصميم مواد دعائية وطباعية تصميم واجهات المستخدم UI/UX",
    
    "service-ecommerce-title": "إنشاء متاجر الكترونية جاهزة للعمل فورًا",
    "service-ecommerce-desc": "تصميم احترافي نظام طلب و دفع الكترونيةإدارة كاملة للمنتجات و الطلبات لوحة تحكم لصاحب المتجر يقدر يدير منها كل حاجه بسهولة",
    
    "service-mobile-title": "تطبيقات موبايل مخصصة(ios/Android)",
    "service-mobile-desc": "تطبيقات سريعة وسهلة الاستخدم متزامنة مع المتجر ولوحة التحكم اشعارات لحظية للعميل",
    
    "service-web-title": "برمجة مواقع الكترونية حسب الطلب",
    "service-web-desc": "أي نظام خاص:إدارة عيادات- حجز مواعيد- منصات تعليمية- إدارة موظفين..إلخ تصمبم مخصص حسب طبيعة الشروع تجربة مستخدم سهلة واحترافية",
    
    "service-business-title": "أنظمة إدارة الأعمال المتكاملة",
    "service-business-desc": "أنظمة إدارة المخزون والمبيعات أنظمة إدارة الموظفين والرواتب أنظمة المحاسبة والمالية",
    
    // Portfolio Section
    "portfolio-title": "ملف الاعمال",
    "portfolio-heading": "أعمالنا الأخيرة",
    "portfolio-subtitle": "ملف الاعمال الذي يحتوي على جميع الاعمال التي قمنا بها",
    "portfolio-all": "جميع الاعمال",
    "portfolio-web": "تطوير المواقع",
    "portfolio-apps": "تطوير التطبيقات",
    "portfolio-desktop": "تطبيقات الديسكتوب",
    "portfolio-graphic": "الجرافيك ديزاين",
    "portfolio-graphic-title": "متجر ملابس إلكتروني",
    "portfolio-graphic-desc": "نظام متكامل لإدارة متجر خاص بتطبيق موبايل، يوفّر تجربة تسوّق مرنة وسهلة للمستخدم" ,
    "portfolio-web-title": "متجر زهور وهدايا",
    "portfolio-web-desc": "موقع إلكتروني متكامل لإدارة متجر زهور وهداييتيح للمستخدمين تصفح المنتجات، الشراء أونلاين، واختيار وسيلة الدفع المناسبة، مع لوحة تحكم قوية لصاحب المتجر لإدارة الطلبات والمخزون والمبيعات. تم تطويره بواجهة عصرية تدعم اللغتين العربية والإنجليزية، مع دعم كامل للتنبيهات والتقارير. ",
    "portfolio-app-title": "متجر فواكه إلكتروني",
    "portfolio-app-desc": "نظام متجر فواكه إلكتروني عبر تطبيق موبايل لتصفح المنتجات وتنفيذ الطلبات بسهولة.  يوفّر تسجيل دخول، سلة مشتريات، دفع إلكتروني، ومتابعة حالة الطلب.  مصمم لأنشطة بيع الأغذية والمنتجات الطازجة أونلاين  ",
    "portfolio-desktop-title": "متجر الكتروني",
    "portfolio-desktop-desc": "موقع إلكتروني متكامل لإدارة متجر لمنتجات مختلفه، يتيح للمستخدمين تصفح المنتجات، الشراء أونلاين، واختيار وسيلة الدفع المناسبة، مع لوحة تحكم قوية لصاحب المتجر لإدارة الطلبات والمخزون والمبيعات.            ",
    
    // Team Section
    "team-title": "فريق العمل",
    "team-heading": "فريقنا الإبداعي",
    "team-subtitle": "نؤمن بأن الابداع هو سر التميز، ويقود فريقنا الموهوب نحو الابتكار و الجودة.",
    "team-member-1-name": "عبدالرحمن عامر",
    "team-member-1-role": "مطور تطبيقات الموبايل",
    "team-member-2-name": "محمد عماد",
    "team-member-2-role": "مطور تطبيقات الويب",
    "team-member-3-name": "عبدالله محمود",
    "team-member-3-role": "مصمم واجهات المستخدم",
    "team-member-4-name": "احمد رجب",
    "team-member-4-role": "مطور واجهات امامية",
    
    // FAQ Section
    "faq-title": "الأسئلة الشائعة",
    "faq-heading": "هل لديك أي أسئلة؟ انظر هنا",
    "faq-subtitle": "جمعنا لك أكثر الأسئلة الشائعة، مع إجابات واضحة وسريعة تساعدك تفهم خدماتنا بشكل أفضل.",
    "faq-q1": "؟    X Code ما هي الخدمات التي تقدمها",
    "faq-a1": "نحن نقدم تصميم وتطوير مواقع الويب، تطبيقات الموبايل، تطبيقات الديسكتوب، ولوحات التحكم الخاصة بالشركات.",
    "faq-q2": "ما المدة المتوقعة لتصميم المشروع؟",
    "faq-a2": "مدة تنفيذ المشروع تعتمد علي حجم وتعقيد المشروع، لكنها غالبًا بتتراوح بين أسبوعين الي 5 أسابيع",
    "faq-q3": "هل تقدمون دعم فني بعد التسليم؟",
    "faq-a3": "نعم، نحن نوفر الدعم الفني مجانًا لفترة محددة بعد التسليم، مع إمكانية التعاقد علي باقات صيانة شهرية.",
    "faq-q4": "هل يمكن التعديل علي المشروع بعد تسليمه؟",
    "faq-a4": "طبعًا،بنوفر عدد معين من التغديلات حسب الباقة، وممكن نعمل اي تعديل إضافي حسب الإتفاق.",
    "faq-q5": "هل يمكنكم تصميم موقع أو تطبيق حسب فكرتي الخاصة؟",
    "faq-a5": "أكيد! بنشتغل على أفكار العملاء من الصفر ونحوّلها لحلول رقمية متكاملة.",
    "faq-q6": "هل أحتاج لدفع مقدم قبل بدء المشروع؟",
    "faq-a6": "نعم، عادة بنطلب دفعة مقدمة لبدء العمل، وتكون نسبة من إجمالي التكلفة .",
    "faq-q7": "كيف يمكنني بدء التعامل معكم؟",
    "faq-a7": "تقدر تتواصل معنا من خلال صفحة \"اتصل بنا\" أو واتساب، وهنبدأ معاك بتحديد الفكرة والمتطلبات .",
    "faq-q8": "هل تقدمون خدمات SEO (تحسين محركات البحث)؟",
    "faq-a8": "نعم، بنقدّم خدمات تحسين ظهور المواقع في محركات البحث ضمن باقاتنا .",
    "faq-q9": "هل تتعاملون مع عملاء خارج مصر؟",
    "faq-a9": "نعم، فريقنا بيشتغل مع عملاء من داخل وخارج مصر عبر الإنترنت بشكل كامل .",
    "faq-q10": "هل أسعاركم مناسبة للمشاريع الصغيرة؟",
    "faq-a10": "بنقدّم باقات مرنة تناسب كل الاحتياجات، من مشاريع ناشئة لحد شركات كبيرة .",
    
    // Contact Section
    "contact-title": "تواصل معنا",
    "contact-heading": "معلومات التواصل",
    "contact-subtitle": "يمكنك التواصل معنا عبر الوسائل التالية أو ملء النموذج وسيتم الرد عليك في أقرب وقت.",
    "contact-info": "معلومات الإتصال",
    "contact-address": "العنوان",
    "contact-address-text": "بني سويف، تزمنت الشرقية",
    "contact-address-country": "مصر",
    "contact-schedule": "جدول العمل",
    "contact-schedule-text": "مفتوح 24 ساعة / 7 أيام أوقات العمل: من الساعة 10:00 صباحًا حتي 5:30 مساءً",
    "work-schedule-title": "جدول العمل",
    "work-schedule-open": "مفتوح 24 ساعة / 7 أيام",
    "work-schedule-hours": "أوقات العمل: من الساعة 10:00 صباحًا حتي 5:30 مساءً",
    
    // Call to Action
    "cta-heading": "نحن نحب أن نقدم حلولاً مثالية لعملك",
    "cta-text": "نستخدم أحدث الأدوات و التقنيات لبناء حلول تساعدك تحقق أهدافك وتنمي شغلك.",
    "cta-button": "تواصل معنا وابدأ الآن",
    
    // Footer
    "footer-description": "نحن نعمل علي إنشاء تجارب رقمية للعلامات التجارية و الشركات باستخدام التكنولوجيا.",
    "footer-copyright": "جميع الحقوق محفوظة لشركة X Code ©",
    "footer-solutions": "الحلول",
    "footer-support": "يدعم",
    "footer-marketing": "التسويق",
    "footer-analytics": "التحليلات",
    "footer-commerce": "تجارة",
    "footer-insights": "رؤى",
    "footer-maintenance": "الصيانة المستمرة",
    "footer-documentation": "التوثيق",
    "footer-api-status": "حالة واجهة برمجة التطبيقات"
  },
  
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-services": "Services",
    "nav-portfolio": "Portfolio",
    "nav-team": "Team",
    "nav-contact": "Contact",
    
    // Hero Section
    "hero-title": "X CODE",
    "hero-subtitle": "We Program Your Idea",
    
    // About Section
    "about-title": "About Company",
    "about-heading": "We provide integrated technical solutions that help business owners and projects",
    "about-subtitle": "We are a company specialized in software development and website design. We provide integrated technical solutions that help business owners and projects achieve their digital goals.",
    "about-mission-title": "Our Mission",
    "about-mission": "We strive to provide innovative and advanced technical solutions that help companies and projects grow and develop in the digital world.",
    "about-vision-title": "Our Vision",
    "about-vision": "To be the trusted technical partner for successful companies and projects in the region.",
    "about-values-title": "Our Values",
    "about-values": "Innovation, Quality, Reliability, and Commitment to providing the best solutions for our clients.",
    
    // Services Section
    "services-title": "Services",
    "services-heading": "Our Best Services",
    "services-subtitle": "Integrated services, smart solutions, and results that make a difference. Choose what suits you and start strong.",
    
    "service-desktop-title": "Professional Desktop Applications",
    "service-desktop-desc": "Advanced desktop applications for Windows and macOS systems. Modern and easy-to-use interfaces. Custom solutions for business and company management.",
    
    "service-graphic-title": "Graphic Design & Visual Identity",
    "service-graphic-desc": "Professional logo and visual identity design. Promotional and print material design. UI/UX user interface design.",
    
    "service-ecommerce-title": "Ready-to-Use E-commerce Stores",
    "service-ecommerce-desc": "Professional design. Electronic ordering and payment system. Complete product and order management. Admin panel for store owner to manage everything easily.",
    
    "service-mobile-title": "Custom Mobile Applications (iOS/Android)",
    "service-mobile-desc": "Fast and easy-to-use applications. Synchronized with store and admin panel. Instant notifications for customers.",
    
    "service-web-title": "Custom Website Programming",
    "service-web-desc": "Any special system: clinic management, appointment booking, educational platforms, employee management, etc. Custom design according to project nature. Easy and professional user experience.",
    
    "service-business-title": "Integrated Business Management Systems",
    "service-business-desc": "Inventory and sales management systems. Employee and payroll management systems. Accounting and financial systems.",
    
    // Portfolio Section
    "portfolio-title": "Portfolio",
    "portfolio-heading": "Our Latest Work",
    "portfolio-subtitle": "Portfolio containing all the work we have done",
    "portfolio-all": "All Work",
    "portfolio-web": "Web Development",
    "portfolio-apps": "App Development",
    "portfolio-desktop": "Desktop Applications",
    "portfolio-graphic": "Graphic Design",
    "portfolio-graphic-title": "Online Clothing Store",
    "portfolio-graphic-desc": "A complete system for managing a mobile app-based store, providing a smooth and easy shopping experience for users.",
    "portfolio-web-title": "Flowers & Gifts Store",
    "portfolio-web-desc": "A fully integrated e-commerce website for managing a flower and gift shop. It allows users to browse products, purchase online, and choose suitable payment methods, with a powerful admin dashboard for managing orders, inventory, and sales. Developed with a modern interface supporting both Arabic and English, with full support for notifications and reports.",
    "portfolio-app-title": "Online Fruit Store",
    "portfolio-app-desc": "An online fruit store system through a mobile app for easy product browsing and order placement. It offers login, shopping cart, online payment, and order tracking. Designed for businesses selling fresh foods and products online.",
    "portfolio-desktop-title": "Online Store",
    "portfolio-desktop-desc": "A fully integrated e-commerce website for managing a store with various products. It allows users to browse products, shop online, and choose suitable payment methods, with a powerful admin dashboard for managing orders, inventory, and sales.",

    // Team Section
    "team-title": "Our Team",
    "team-heading": "Our Creative Team",
    "team-subtitle": "We believe that creativity is the secret of excellence, and our talented team leads towards innovation and quality.",
    "team-member-1-name": "Abdelrahman Amer",
    "team-member-1-role": "Mobile App Developer",
    "team-member-2-name": "Mohamed Emad",
    "team-member-2-role": "Web App Developer",
    "team-member-3-name": "Abdullah Mahmoud",
    "team-member-3-role": "UI/UX Designer",
    "team-member-4-name": "Ahmed ragab ",
    "team-member-4-role": "Front-End Developer",
    
    // FAQ Section
    "faq-title": "FAQ",
    "faq-heading": "Have a question? See here",
    "faq-subtitle": "We have collected the most frequently asked questions, with clear and quick answers to help you understand our services better.",
    "faq-q1": "What services does X Code offer?",
    "faq-a1": "We offer web design and development, mobile app development, desktop app development, and custom dashboards for companies.",
    "faq-q2": "How long does it take to design a project?",
    "faq-a2": "The project duration depends on its size and complexity, but it usually ranges from two to five weeks.",
    "faq-q3": "Do you provide technical support after delivery?",
    "faq-a3": "Yes, we provide free technical support for a limited period after delivery, with the possibility of contracting for monthly maintenance packages.",
    "faq-q4": "Can I request modifications after project delivery?",
    "faq-a4": "Of course! We offer a certain number of modifications depending on the package, and we can do any additional changes as agreed.",
    "faq-q5": "Can you design a website or app based on my own idea?",
    "faq-a5": "Absolutely! We work on clients' ideas from scratch and turn them into integrated digital solutions.",
    "faq-q6": "Do I need to pay a deposit before starting the project?",
    "faq-a6": "Yes, we usually require a deposit to start the work, which is a percentage of the total cost.",
    "faq-q7": "How can I start working with you?",
    "faq-a7": "You can contact us through the 'Contact Us' page or WhatsApp, and we will start by defining the idea and requirements with you.",
    "faq-q8": "Do you offer SEO (Search Engine Optimization) services?",
    "faq-a8": "Yes, we offer SEO services as part of our packages.",
    "faq-q9": "Do you work with clients outside Egypt?",
    "faq-a9": "Yes, our team works with clients inside and outside Egypt completely online.",
    "faq-q10": "Are your prices suitable for small projects?",
    "faq-a10": "We offer flexible packages to suit all needs, from startups to large companies.",
    
    // Contact Section
    "contact-title": "Contact Us",
    "contact-heading": "Contact Information",
    "contact-subtitle": "You can contact us through the following methods or fill out the form and we will get back to you as soon as possible.",
    "contact-info": "Contact Information",
    "contact-address": "Address",
    "contact-address-text": "Beni Suef, Tazmant Al-Sharqiya",
    "contact-address-country": "Egypt",
    "contact-schedule": "Work Schedule",
    "contact-schedule-text": "Open 24/7 Working hours: 10:00 AM to 5:30 PM",
    "work-schedule-title": "Work Schedule",
    "work-schedule-open": "Open 24 hours / 7 days",
    "work-schedule-hours": "Working hours: from 10:00 AM to 5:30 PM",
    
    // Call to Action
    "cta-heading": "We love to provide perfect solutions for your business",
    "cta-text": "We use the latest tools and technologies to build solutions that help you achieve your goals and grow your business.",
    "cta-button": "Contact us and start now",
    
    // Footer
    "footer-description": "We work on creating digital experiences for brands and companies using technology.",
    "footer-copyright": "All rights reserved to X Code company ©",
    "footer-solutions": "Solutions",
    "footer-support": "Support",
    "footer-marketing": "Marketing",
    "footer-analytics": "Analytics",
    "footer-commerce": "Commerce",
    "footer-insights": "Insights",
    "footer-maintenance": "Continuous Maintenance",
    "footer-documentation": "Documentation",
    "footer-api-status": "API Status"
  }
};

// دالة تبديل اللغة
function toggleLanguage() {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  
  // تحديث لغة الصفحة
  document.documentElement.lang = newLang;
  document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  
  // تحديث نص الزر
  const currentLangSpan = document.getElementById('currentLang');
  currentLangSpan.textContent = newLang === 'ar' ? 'ع' : 'EN';
  
  // تطبيق الترجمات
  applyTranslations(newLang);
  
  // حفظ اللغة المفضلة
  localStorage.setItem('preferredLanguage', newLang);
}

// دالة تطبيق الترجمات
function applyTranslations(lang) {
  const texts = translations[lang];
  
  // تطبيق الترجمات على العناصر
  Object.keys(texts).forEach(key => {
    const elements = document.querySelectorAll(`[data-translate="${key}"]`);
    elements.forEach(element => {
      element.textContent = texts[key];
    });
  });
  
  // تطبيق الترجمات على العناوين
  const titleElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  titleElements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (key && texts[key]) {
      element.textContent = texts[key];
    }
  });
  
  // تطبيق الترجمات على الفقرات
  const paragraphElements = document.querySelectorAll('p');
  paragraphElements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (key && texts[key]) {
      element.textContent = texts[key];
    }
  });
  
  // تطبيق الترجمات على الأزرار
  const buttonElements = document.querySelectorAll('button, a');
  buttonElements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (key && texts[key]) {
      element.textContent = texts[key];
    }
  });
}

// تهيئة اللغة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('preferredLanguage') || 'ar';
  document.documentElement.lang = savedLang;
  document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
  
  const currentLangSpan = document.getElementById('currentLang');
  if (currentLangSpan) {
    currentLangSpan.textContent = savedLang === 'ar' ? 'ع' : 'EN';
  }
  
  applyTranslations(savedLang);
  
  // إضافة مستمع الحدث لزر تبديل اللغة
  const languageToggle = document.getElementById('languageToggle');
  if (languageToggle) {
    languageToggle.addEventListener('click', toggleLanguage);
  }
}); 