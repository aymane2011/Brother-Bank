// ========== Translation Data ==========
const translations = {
    ar: {
        'hero-title': 'مخاطر الإنترنت والأشعة الزرقاء',
        'hero-subtitle': 'دليلك الشامل للحماية من المخاطر الرقمية والحفاظ على صحتك في العالم الرقمي',
        'stat-levels': 'مستويات',
        'stat-solutions': 'حل عملي',
        'stat-info': 'معلومة مهمة',
        'section-charts': 'إحصائيات ومخططات مهمة',
        'section-info': '13 معلومة أساسية للسلامة الرقمية',
        'section-glossary': 'شرح المفاهيم والمصطلحات',
        'section-problems': '16 مشكلة وحلها',
        'section-quiz': 'اختبر معلوماتك - 7 مستويات',
        'section-game': 'لعبة الذاكرة',
        'quiz-question': 'السؤال',
        'quiz-score': 'النقاط:',
        'quiz-next': 'السؤال التالي',
        'game-level': 'المستوى',
        'game-moves': 'الحركات',
        'game-matches': 'التطابقات',
        'game-time': 'الوقت',
        'game-reset': 'إعادة اللعب',
        'footer-title': 'مشروع السلامة الرقمية',
        'footer-text': 'صُمم بحب لحمايتك في العالم الرقمي',
        
        charts: [
            {
                title: 'ساعات الاستخدام اليومي',
                data: [
                    { label: 'الأطفال', value: 75, display: '6 ساعات' },
                    { label: 'المراهقون', value: 90, display: '7.5 ساعة' },
                    { label: 'البالغون', value: 60, display: '5 ساعات' }
                ]
            },
            {
                title: 'مخاطر الأشعة الزرقاء',
                data: [
                    { label: 'إجهاد العين', value: 85, display: '85%' },
                    { label: 'الأرق', value: 70, display: '70%' },
                    { label: 'الصداع', value: 65, display: '65%' }
                ]
            },
            {
                title: 'أنواع التهديدات',
                data: [
                    { label: 'التصيد الاحتيالي', value: 80, display: '80%' },
                    { label: 'البرامج الخبيثة', value: 60, display: '60%' },
                    { label: 'سرقة الهوية', value: 55, display: '55%' }
                ]
            },
            {
                title: 'طرق الحماية',
                data: [
                    { label: 'كلمات مرور قوية', value: 95, display: '95%' },
                    { label: 'تحديثات أمنية', value: 88, display: '88%' },
                    { label: 'مضاد فيروسات', value: 82, display: '82%' }
                ]
            }
        ],
        
        infoCards: [
            { title: 'حماية البيانات الشخصية', text: 'لا تشارك معلوماتك الشخصية مثل العنوان ورقم الهاتف مع الغرباء على الإنترنت' },
            { title: 'كلمات المرور القوية', text: 'استخدم كلمات مرور تحتوي على أحرف كبيرة وصغيرة وأرقام ورموز، وغيّرها بانتظام' },
            { title: 'التحديثات الأمنية', text: 'حدّث نظام التشغيل والتطبيقات باستمرار لسد الثغرات الأمنية' },
            { title: 'التصفح الآمن', text: 'تأكد من وجود HTTPS في عنوان المواقع قبل إدخال معلومات حساسة' },
            { title: 'الأشعة الزرقاء', text: 'تسبب الأشعة الزرقاء إجهاد العين والأرق، استخدم فلاتر الحماية' },
            { title: 'استراحات منتظمة', text: 'خذ استراحة 20 ثانية كل 20 دقيقة وانظر لشيء يبعد 20 قدماً' },
            { title: 'التنمر الإلكتروني', text: 'أبلغ عن أي محتوى مسيء أو تنمر واطلب المساعدة من شخص موثوق' },
            { title: 'الخصوصية', text: 'راجع إعدادات الخصوصية في حساباتك وتحكم بمن يرى معلوماتك' },
            { title: 'النسخ الاحتياطي', text: 'احتفظ بنسخ احتياطية من ملفاتك المهمة بانتظام' },
            { title: 'الشبكات العامة', text: 'تجنب إجراء معاملات مالية عبر شبكات الواي فاي العامة' },
            { title: 'رسائل التصيد', text: 'لا تفتح روابط أو مرفقات من مصادر غير معروفة' },
            { title: 'المحتوى المناسب', text: 'استخدم أدوات الرقابة الأبوية وفلاتر المحتوى للأطفال' },
            { title: 'التوازن الرقمي', text: 'خصص وقتاً للأنشطة البعيدة عن الشاشات لصحة أفضل' }
        ],
        
        glossary: [
            { term: 'التصيد الاحتيالي (Phishing)', definition: 'محاولة خداع المستخدمين للحصول على معلوماتهم الشخصية عبر رسائل أو مواقع مزيفة' },
            { term: 'البرامج الخبيثة (Malware)', definition: 'برامج مصممة لإلحاق الضرر بالأجهزة أو سرقة المعلومات' },
            { term: 'جدار الحماية (Firewall)', definition: 'نظام أمني يراقب ويتحكم في حركة البيانات بين الشبكات' },
            { term: 'التشفير (Encryption)', definition: 'تحويل البيانات إلى شكل غير قابل للقراءة لحمايتها من الوصول غير المصرح' },
            { term: 'الأشعة الزرقاء', definition: 'ضوء عالي الطاقة ينبعث من الشاشات الرقمية ويؤثر على النوم والعينين' },
            { term: 'VPN', definition: 'شبكة افتراضية خاصة تحمي خصوصيتك وتشفر اتصالك بالإنترنت' },
            { term: 'التحقق بخطوتين', definition: 'طبقة أمان إضافية تتطلب إدخال رمز ثانٍ بعد كلمة المرور' },
            { term: 'ملفات الكوكيز', definition: 'ملفات صغيرة تحفظ معلومات عن تصفحك للمواقع' },
            { term: 'الهندسة الاجتماعية', definition: 'خداع الأشخاص نفسياً للحصول على معلومات سرية' },
            { term: 'برامج الفدية', definition: 'برامج خبيثة تشفر ملفاتك وتطلب فدية لفك التشفير' },
            { term: 'البصمة الرقمية', definition: 'الأثر الذي تتركه أنشطتك على الإنترنت' },
            { term: 'هجمات DDoS', definition: 'إغراق موقع بزيارات وهمية لتعطيله' }
        ],
        
        problems: [
            { problem: 'إدمان الإنترنت', solution: 'حدد ساعات معينة للاستخدام، استخدم تطبيقات إدارة الوقت، وخصص وقتاً للأنشطة الأخرى' },
            { problem: 'إجهاد العين', solution: 'استخدم قاعدة 20-20-20، اضبط سطوع الشاشة، واستخدم نظارات الحماية من الأشعة الزرقاء' },
            { problem: 'اضطرابات النوم', solution: 'تجنب الشاشات قبل النوم بساعتين، فعّل الوضع الليلي، واتبع روتين نوم منتظم' },
            { problem: 'التنمر الإلكتروني', solution: 'لا ترد على المتنمرين، احفظ الأدلة، أبلغ عن الحسابات، واطلب المساعدة من البالغين' },
            { problem: 'سرقة الهوية', solution: 'استخدم كلمات مرور قوية ومختلفة، فعّل التحقق بخطوتين، وراقب حساباتك بانتظام' },
            { problem: 'رسائل التصيد', solution: 'لا تفتح روابط مشبوهة، تحقق من عنوان المرسل، ولا تشارك معلومات شخصية عبر البريد' },
            { problem: 'البرامج الخبيثة', solution: 'استخدم برنامج مضاد فيروسات موثوق، حدّث نظامك باستمرار، وتجنب تحميل الملفات المشبوهة' },
            { problem: 'انتهاك الخصوصية', solution: 'راجع إعدادات الخصوصية، تحكم بمن يرى منشوراتك، ولا تقبل طلبات صداقة من غرباء' },
            { problem: 'الإفراط في المشاركة', solution: 'فكر قبل النشر، لا تشارك موقعك المباشر، وتجنب نشر معلومات حساسة' },
            { problem: 'الآلام الجسدية', solution: 'حافظ على وضعية جلوس صحيحة، خذ استراحات للحركة، ومارس تمارين الإطالة' },
            { problem: 'المحتوى غير المناسب', solution: 'استخدم أدوات الرقابة الأبوية، فعّل البحث الآمن، وراقب أنشطة الأطفال' },
            { problem: 'إضاعة الوقت', solution: 'حدد أهدافاً واضحة، استخدم مؤقتات، والتزم بجدول زمني للأنشطة' },
            { problem: 'المعلومات المضللة', solution: 'تحقق من المصادر، ابحث عن مصادر متعددة، وكن ناقداً للمعلومات' },
            { problem: 'الاحتيال المالي', solution: 'لا تشارك معلومات بطاقتك، استخدم مواقع آمنة فقط، وراقب كشوف حسابك' },
            { problem: 'فقدان البيانات', solution: 'احتفظ بنسخ احتياطية منتظمة، استخدم التخزين السحابي، واحمِ أجهزتك بكلمات مرور' },
            { problem: 'إدمان الألعاب', solution: 'حدد وقتاً محدداً للعب، خذ استراحات منتظمة، وتوازن بين الألعاب والأنشطة الأخرى' }
        ],
        
        quizLevels: [
            { name: 'مبتدئ', icon: '●', color: '#10b981' },
            { name: 'سهل', icon: '●●', color: '#3b82f6' },
            { name: 'متوسط', icon: '●●●', color: '#f59e0b' },
            { name: 'متقدم', icon: '●●●●', color: '#f97316' },
            { name: 'صعب', icon: '●●●●●', color: '#ef4444' },
            { name: 'خبير', icon: '●●●●●●', color: '#8b5cf6' },
            { name: 'أسطوري', icon: '★', color: '#ec4899' }
        ],
        
        quizQuestions: {
            1: [
                { q: 'ما هي الأشعة الزرقاء؟', options: ['ضوء من الشاشات', 'نوع من الإشعاع النووي', 'لون السماء', 'نوع من الليزر'], answer: 0 },
                { q: 'كم ساعة يُنصح بقضائها أمام الشاشات يومياً للأطفال؟', options: ['أقل من ساعتين', '6 ساعات', '10 ساعات', 'بدون حد'], answer: 0 },
                { q: 'ما هو التصيد الاحتيالي؟', options: ['محاولة سرقة المعلومات', 'نوع من الأسماك', 'لعبة إلكترونية', 'تطبيق للهاتف'], answer: 0 },
                { q: 'ماذا يعني HTTPS في عنوان الموقع؟', options: ['اتصال آمن', 'موقع سريع', 'موقع شهير', 'موقع مجاني'], answer: 0 },
                { q: 'ما هي قاعدة 20-20-20 للعين؟', options: ['كل 20 دقيقة انظر لـ20 قدم لـ20 ثانية', 'العمل 20 ساعة', 'النوم 20 ساعة', 'اللعب 20 دقيقة'], answer: 0 }
            ],
            2: [
                { q: 'ما هي أفضل طريقة لحماية حساباتك؟', options: ['كلمات مرور قوية ومختلفة', 'كلمة مرور واحدة سهلة', 'مشاركة كلمة المرور', 'عدم استخدام كلمة مرور'], answer: 0 },
                { q: 'متى يجب تحديث نظام التشغيل؟', options: ['عند توفر التحديثات الأمنية', 'مرة كل سنة', 'لا حاجة للتحديث', 'كل 5 سنوات'], answer: 0 },
                { q: 'ما هو التنمر الإلكتروني؟', options: ['إيذاء الآخرين عبر الإنترنت', 'لعبة فيديو', 'تطبيق دردشة', 'موقع ويب'], answer: 0 },
                { q: 'لماذا يجب تجنب الواي فاي العام للمعاملات المالية؟', options: ['غير آمن', 'سريع جداً', 'مكلف', 'غير متوفر'], answer: 0 },
                { q: 'ما هي البرامج الخبيثة؟', options: ['برامج ضارة بالجهاز', 'برامج مفيدة', 'ألعاب', 'متصفحات'], answer: 0 }
            ],
            3: [
                { q: 'ما هو التحقق بخطوتين؟', options: ['طبقة أمان إضافية', 'نوع من الفيروسات', 'تطبيق للهاتف', 'متصفح ويب'], answer: 0 },
                { q: 'ما هو VPN؟', options: ['شبكة افتراضية خاصة', 'فيروس', 'لعبة', 'متصفح'], answer: 0 },
                { q: 'ما هي الهندسة الاجتماعية في الأمن السيبراني؟', options: ['خداع نفسي للحصول على معلومات', 'بناء المواقع', 'تصميم التطبيقات', 'برمجة الألعاب'], answer: 0 },
                { q: 'كم مرة يجب تغيير كلمات المرور؟', options: ['كل 3-6 أشهر', 'كل 10 سنوات', 'مرة واحدة فقط', 'لا حاجة للتغيير'], answer: 0 },
                { q: 'ما هي برامج الفدية؟', options: ['برامج تشفر ملفاتك وتطلب فدية', 'برامج مجانية', 'ألعاب', 'متصفحات'], answer: 0 }
            ],
            4: [
                { q: 'ما هو هجوم DDoS؟', options: ['إغراق موقع بزيارات وهمية', 'فيروس', 'برنامج حماية', 'متصفح'], answer: 0 },
                { q: 'ما هي البصمة الرقمية؟', options: ['أثر أنشطتك على الإنترنت', 'نوع من الهواتف', 'تطبيق', 'لعبة'], answer: 0 },
                { q: 'ما هو التشفير من طرف إلى طرف؟', options: ['تشفير الرسائل بين المرسل والمستقبل فقط', 'تشفير كل الإنترنت', 'نوع من الفيروسات', 'تطبيق دردشة'], answer: 0 },
                { q: 'ما هي الكوكيز في المتصفح؟', options: ['ملفات تحفظ معلومات التصفح', 'نوع من الحلويات', 'فيروسات', 'برامج حماية'], answer: 0 },
                { q: 'ما هو جدار الحماية؟', options: ['نظام يراقب حركة البيانات', 'حائط فعلي', 'برنامج ألعاب', 'متصفح'], answer: 0 }
            ],
            5: [
                { q: 'ما الفرق بين HTTP و HTTPS؟', options: ['HTTPS مشفر وHTTP غير مشفر', 'لا فرق', 'HTTP أسرع', 'HTTPS أقدم'], answer: 0 },
                { q: 'ما هو Zero-day exploit؟', options: ['ثغرة غير معروفة للمطورين', 'يوم عطلة', 'نوع من الألعاب', 'متصفح'], answer: 0 },
                { q: 'ما هي تقنية SSL/TLS؟', options: ['بروتوكول أمان للاتصالات', 'نوع من الفيروسات', 'لغة برمجة', 'نظام تشغيل'], answer: 0 },
                { q: 'ما هو Man-in-the-middle attack؟', options: ['اعتراض الاتصال بين طرفين', 'نوع من الألعاب', 'تطبيق', 'متصفح'], answer: 0 },
                { q: 'ما هو SQL Injection؟', options: ['ثغرة لإدخال أوامر ضارة في قواعد البيانات', 'لغة برمجة', 'نظام تشغيل', 'متصفح'], answer: 0 }
            ],
            6: [
                { q: 'ما هو Blockchain في سياق الأمن؟', options: ['سلسلة موزعة غير قابلة للتعديل', 'نوع من البلوكات', 'لعبة', 'متصفح'], answer: 0 },
                { q: 'ما هو Penetration Testing؟', options: ['اختبار أمني لاكتشاف الثغرات', 'نوع من الألعاب', 'تطبيق', 'نظام تشغيل'], answer: 0 },
                { q: 'ما هي تقنية Sandbox في الأمن السيبراني؟', options: ['بيئة معزولة لاختبار البرامج', 'صندوق رمل حقيقي', 'لعبة', 'متصفح'], answer: 0 },
                { q: 'ما هو Honeypot؟', options: ['فخ لجذب المهاجمين', 'نوع من العسل', 'لعبة', 'تطبيق'], answer: 0 },
                { q: 'ما هو Zero Trust Security Model؟', options: ['نموذج أمني لا يثق بأي شيء افتراضياً', 'عدم الثقة بالإنترنت', 'نوع من البرامج', 'متصفح'], answer: 0 }
            ],
            7: [
                { q: 'ما هو Advanced Persistent Threat (APT)?', options: ['هجوم متقدم ومستمر لفترة طويلة', 'برنامج حماية', 'نوع من الألعاب', 'متصفح'], answer: 0 },
                { q: 'ما هو Quantum Cryptography؟', options: ['تشفير باستخدام ميكانيكا الكم', 'نوع من الألعاب', 'متصفح', 'تطبيق'], answer: 0 },
                { q: 'ما هو Rootkit؟', options: ['برنامج خبيث يخفي نفسه في النظام', 'جذر النبات', 'نظام تشغيل', 'لعبة'], answer: 0 },
                { q: 'ما هو Side-channel attack؟', options: ['هجوم يستغل معلومات جانبية', 'قناة تلفزيونية', 'تطبيق', 'متصفح'], answer: 0 },
                { q: 'ما هو Homomorphic Encryption؟', options: ['تشفير يسمح بالعمليات على البيانات المشفرة', 'نوع من البرامج', 'لعبة', 'متصفح'], answer: 0 }
            ]
        }
    },
    
    fr: {
        'hero-title': 'Dangers d\'Internet et de la Lumière Bleue',
        'hero-subtitle': 'Votre guide complet pour vous protéger des risques numériques et préserver votre santé dans le monde numérique',
        'stat-levels': 'niveaux',
        'stat-solutions': 'solutions',
        'stat-info': 'informations',
        'section-charts': 'Statistiques et Graphiques Importants',
        'section-info': '13 Informations Essentielles pour la Sécurité Numérique',
        'section-glossary': 'Explication des Concepts et Termes',
        'section-problems': '16 Problèmes et Solutions',
        'section-quiz': 'Testez Vos Connaissances - 7 Niveaux',
        'section-game': 'Jeu de Mémoire',
        'quiz-question': 'Question',
        'quiz-score': 'Points:',
        'quiz-next': 'Question Suivante',
        'game-level': 'Niveau',
        'game-moves': 'Mouvements',
        'game-matches': 'Correspondances',
        'game-time': 'Temps',
        'game-reset': 'Rejouer',
        'footer-title': 'Projet Sécurité Numérique',
        'footer-text': 'Conçu avec amour pour vous protéger dans le monde numérique',
        
        charts: [
            {
                title: 'Heures d\'utilisation quotidienne',
                data: [
                    { label: 'Enfants', value: 75, display: '6 heures' },
                    { label: 'Adolescents', value: 90, display: '7.5 heures' },
                    { label: 'Adultes', value: 60, display: '5 heures' }
                ]
            },
            {
                title: 'Risques de la lumière bleue',
                data: [
                    { label: 'Fatigue oculaire', value: 85, display: '85%' },
                    { label: 'Insomnie', value: 70, display: '70%' },
                    { label: 'Maux de tête', value: 65, display: '65%' }
                ]
            },
            {
                title: 'Types de menaces',
                data: [
                    { label: 'Hameçonnage', value: 80, display: '80%' },
                    { label: 'Logiciels malveillants', value: 60, display: '60%' },
                    { label: 'Vol d\'identité', value: 55, display: '55%' }
                ]
            },
            {
                title: 'Méthodes de protection',
                data: [
                    { label: 'Mots de passe forts', value: 95, display: '95%' },
                    { label: 'Mises à jour sécurité', value: 88, display: '88%' },
                    { label: 'Antivirus', value: 82, display: '82%' }
                ]
            }
        ],
        
        infoCards: [
            { title: 'Protection des données personnelles', text: 'Ne partagez pas vos informations personnelles comme l\'adresse et le numéro de téléphone avec des inconnus en ligne' },
            { title: 'Mots de passe forts', text: 'Utilisez des mots de passe contenant des majuscules, minuscules, chiffres et symboles, et changez-les régulièrement' },
            { title: 'Mises à jour de sécurité', text: 'Mettez à jour constamment votre système d\'exploitation et vos applications pour combler les failles de sécurité' },
            { title: 'Navigation sécurisée', text: 'Vérifiez la présence de HTTPS dans l\'adresse des sites avant d\'entrer des informations sensibles' },
            { title: 'Lumière bleue', text: 'La lumière bleue cause fatigue oculaire et insomnie, utilisez des filtres de protection' },
            { title: 'Pauses régulières', text: 'Faites une pause de 20 secondes toutes les 20 minutes et regardez quelque chose à 20 pieds' },
            { title: 'Cyberharcèlement', text: 'Signalez tout contenu offensant ou harcèlement et demandez de l\'aide à une personne de confiance' },
            { title: 'Confidentialité', text: 'Vérifiez les paramètres de confidentialité de vos comptes et contrôlez qui voit vos informations' },
            { title: 'Sauvegarde', text: 'Faites régulièrement des sauvegardes de vos fichiers importants' },
            { title: 'Réseaux publics', text: 'Évitez les transactions financières via les réseaux Wi-Fi publics' },
            { title: 'Messages de phishing', text: 'N\'ouvrez pas les liens ou pièces jointes de sources inconnues' },
            { title: 'Contenu approprié', text: 'Utilisez des outils de contrôle parental et des filtres de contenu pour les enfants' },
            { title: 'Équilibre numérique', text: 'Consacrez du temps aux activités loin des écrans pour une meilleure santé' }
        ],
        
        glossary: [
            { term: 'Hameçonnage (Phishing)', definition: 'Tentative de tromper les utilisateurs pour obtenir leurs informations personnelles via des messages ou sites falsifiés' },
            { term: 'Logiciels malveillants (Malware)', definition: 'Programmes conçus pour endommager les appareils ou voler des informations' },
            { term: 'Pare-feu (Firewall)', definition: 'Système de sécurité qui surveille et contrôle le trafic de données entre les réseaux' },
            { term: 'Chiffrement (Encryption)', definition: 'Conversion des données en forme illisible pour les protéger d\'accès non autorisés' },
            { term: 'Lumière bleue', definition: 'Lumière à haute énergie émise par les écrans numériques affectant le sommeil et les yeux' },
            { term: 'VPN', definition: 'Réseau privé virtuel protégeant votre vie privée et chiffrant votre connexion Internet' },
            { term: 'Authentification à deux facteurs', definition: 'Couche de sécurité supplémentaire nécessitant un code secondaire après le mot de passe' },
            { term: 'Cookies', definition: 'Petits fichiers sauvegardant des informations sur votre navigation des sites' },
            { term: 'Ingénierie sociale', definition: 'Tromper psychologiquement les personnes pour obtenir des informations confidentielles' },
            { term: 'Rançongiciels', definition: 'Logiciels malveillants chiffrant vos fichiers et demandant une rançon pour déchiffrer' },
            { term: 'Empreinte numérique', definition: 'Trace laissée par vos activités sur Internet' },
            { term: 'Attaques DDoS', definition: 'Surcharge d\'un site avec des visites fictives pour le désactiver' }
        ],
        
        problems: [
            { problem: 'Dépendance à Internet', solution: 'Fixez des heures spécifiques d\'utilisation, utilisez des applications de gestion du temps, et consacrez du temps à d\'autres activités' },
            { problem: 'Fatigue oculaire', solution: 'Utilisez la règle 20-20-20, ajustez la luminosité de l\'écran, et utilisez des lunettes de protection contre la lumière bleue' },
            { problem: 'Troubles du sommeil', solution: 'Évitez les écrans deux heures avant de dormir, activez le mode nuit, et suivez une routine de sommeil régulière' },
            { problem: 'Cyberharcèlement', solution: 'Ne répondez pas aux harceleurs, sauvegardez les preuves, signalez les comptes, et demandez de l\'aide aux adultes' },
            { problem: 'Vol d\'identité', solution: 'Utilisez des mots de passe forts et différents, activez l\'authentification à deux facteurs, et surveillez régulièrement vos comptes' },
            { problem: 'Messages de phishing', solution: 'N\'ouvrez pas les liens suspects, vérifiez l\'adresse de l\'expéditeur, et ne partagez pas d\'informations personnelles par e-mail' },
            { problem: 'Logiciels malveillants', solution: 'Utilisez un antivirus fiable, mettez à jour votre système constamment, et évitez de télécharger des fichiers suspects' },
            { problem: 'Violation de la vie privée', solution: 'Vérifiez les paramètres de confidentialité, contrôlez qui voit vos publications, et n\'acceptez pas les demandes d\'amis d\'inconnus' },
            { problem: 'Surpartage', solution: 'Réfléchissez avant de publier, ne partagez pas votre localisation en direct, et évitez de publier des informations sensibles' },
            { problem: 'Douleurs physiques', solution: 'Maintenez une posture assise correcte, faites des pauses pour bouger, et pratiquez des étirements' },
            { problem: 'Contenu inapproprié', solution: 'Utilisez des outils de contrôle parental, activez la recherche sûre, et surveillez les activités des enfants' },
            { problem: 'Perte de temps', solution: 'Fixez des objectifs clairs, utilisez des minuteries, et respectez un emploi du temps pour les activités' },
            { problem: 'Désinformation', solution: 'Vérifiez les sources, cherchez plusieurs sources, et soyez critique envers l\'information' },
            { problem: 'Fraude financière', solution: 'Ne partagez pas les informations de votre carte, utilisez uniquement des sites sécurisés, et surveillez vos relevés de compte' },
            { problem: 'Perte de données', solution: 'Faites des sauvegardes régulières, utilisez le stockage cloud, et protégez vos appareils avec des mots de passe' },
            { problem: 'Dépendance aux jeux', solution: 'Fixez un temps limité pour jouer, faites des pauses régulières, et équilibrez entre les jeux et autres activités' }
        ],
        
        quizLevels: [
            { name: 'Débutant', icon: '●', color: '#10b981' },
            { name: 'Facile', icon: '●●', color: '#3b82f6' },
            { name: 'Moyen', icon: '●●●', color: '#f59e0b' },
            { name: 'Avancé', icon: '●●●●', color: '#f97316' },
            { name: 'Difficile', icon: '●●●●●', color: '#ef4444' },
            { name: 'Expert', icon: '●●●●●●', color: '#8b5cf6' },
            { name: 'Légendaire', icon: '★', color: '#ec4899' }
        ],
        
        quizQuestions: {
            1: [
                { q: 'Qu\'est-ce que la lumière bleue?', options: ['Lumière des écrans', 'Type de radiation nucléaire', 'Couleur du ciel', 'Type de laser'], answer: 0 },
                { q: 'Combien d\'heures recommandées devant les écrans quotidiennement pour les enfants?', options: ['Moins de 2 heures', '6 heures', '10 heures', 'Sans limite'], answer: 0 },
                { q: 'Qu\'est-ce que le phishing?', options: ['Tentative de vol d\'informations', 'Type de poisson', 'Jeu électronique', 'Application mobile'], answer: 0 },
                { q: 'Que signifie HTTPS dans l\'adresse du site?', options: ['Connexion sécurisée', 'Site rapide', 'Site populaire', 'Site gratuit'], answer: 0 },
                { q: 'Qu\'est-ce que la règle 20-20-20 pour les yeux?', options: ['Toutes les 20 min regarder à 20 pieds pour 20 sec', 'Travailler 20 heures', 'Dormir 20 heures', 'Jouer 20 minutes'], answer: 0 }
            ],
            2: [
                { q: 'Quelle est la meilleure façon de protéger vos comptes?', options: ['Mots de passe forts et différents', 'Un seul mot de passe facile', 'Partager le mot de passe', 'Ne pas utiliser de mot de passe'], answer: 0 },
                { q: 'Quand faut-il mettre à jour le système d\'exploitation?', options: ['Lors des mises à jour de sécurité', 'Une fois par an', 'Pas besoin de mise à jour', 'Tous les 5 ans'], answer: 0 },
                { q: 'Qu\'est-ce que le cyberharcèlement?', options: ['Nuire aux autres en ligne', 'Jeu vidéo', 'Application de chat', 'Site web'], answer: 0 },
                { q: 'Pourquoi éviter le Wi-Fi public pour les transactions financières?', options: ['Pas sécurisé', 'Trop rapide', 'Coûteux', 'Indisponible'], answer: 0 },
                { q: 'Qu\'est-ce qu\'un logiciel malveillant?', options: ['Programme nuisible', 'Programme utile', 'Jeux', 'Navigateurs'], answer: 0 }
            ],
            3: [
                { q: 'Qu\'est-ce que l\'authentification à deux facteurs?', options: ['Couche de sécurité supplémentaire', 'Type de virus', 'Application mobile', 'Navigateur web'], answer: 0 },
                { q: 'Qu\'est-ce qu\'un VPN?', options: ['Réseau privé virtuel', 'Virus', 'Jeu', 'Navigateur'], answer: 0 },
                { q: 'Qu\'est-ce que l\'ingénierie sociale en cybersécurité?', options: ['Tromperie psychologique pour obtenir des informations', 'Construction de sites', 'Conception d\'applications', 'Programmation de jeux'], answer: 0 },
                { q: 'À quelle fréquence changer les mots de passe?', options: ['Tous les 3-6 mois', 'Tous les 10 ans', 'Une seule fois', 'Pas besoin de changer'], answer: 0 },
                { q: 'Qu\'est-ce qu\'un rançongiciel?', options: ['Programme qui chiffre vos fichiers et demande rançon', 'Programme gratuit', 'Jeux', 'Navigateurs'], answer: 0 }
            ],
            4: [
                { q: 'Qu\'est-ce qu\'une attaque DDoS?', options: ['Surcharge d\'un site avec des visites fictives', 'Virus', 'Programme de protection', 'Navigateur'], answer: 0 },
                { q: 'Qu\'est-ce qu\'une empreinte numérique?', options: ['Trace de vos activités sur Internet', 'Type de téléphone', 'Application', 'Jeu'], answer: 0 },
                { q: 'Qu\'est-ce que le chiffrement de bout en bout?', options: ['Chiffrement des messages entre expéditeur et destinataire uniquement', 'Chiffrement de tout Internet', 'Type de virus', 'Application de chat'], answer: 0 },
                { q: 'Que sont les cookies dans le navigateur?', options: ['Fichiers qui sauvegardent les informations de navigation', 'Type de biscuit', 'Virus', 'Programmes de protection'], answer: 0 },
                { q: 'Qu\'est-ce qu\'un pare-feu?', options: ['Système qui surveille le trafic de données', 'Mur réel', 'Programme de jeux', 'Navigateur'], answer: 0 }
            ],
            5: [
                { q: 'Quelle différence entre HTTP et HTTPS?', options: ['HTTPS chiffré et HTTP non chiffré', 'Pas de différence', 'HTTP plus rapide', 'HTTPS plus ancien'], answer: 0 },
                { q: 'Qu\'est-ce qu\'un exploit Zero-day?', options: ['Faille inconnue des développeurs', 'Jour férié', 'Type de jeu', 'Navigateur'], answer: 0 },
                { q: 'Qu\'est-ce que la technologie SSL/TLS?', options: ['Protocole de sécurité pour communications', 'Type de virus', 'Langage de programmation', 'Système d\'exploitation'], answer: 0 },
                { q: 'Qu\'est-ce qu\'une attaque Man-in-the-middle?', options: ['Interception de communication entre deux parties', 'Type de jeu', 'Application', 'Navigateur'], answer: 0 },
                { q: 'Qu\'est-ce que l\'injection SQL?', options: ['Faille pour insérer commandes nuisibles dans bases de données', 'Langage de programmation', 'Système d\'exploitation', 'Navigateur'], answer: 0 }
            ],
            6: [
                { q: 'Qu\'est-ce que Blockchain dans le contexte de sécurité?', options: ['Chaîne distribuée non modifiable', 'Type de blocs', 'Jeu', 'Navigateur'], answer: 0 },
                { q: 'Qu\'est-ce que le test de pénétration?', options: ['Test de sécurité pour découvrir failles', 'Type de jeu', 'Application', 'Système d\'exploitation'], answer: 0 },
                { q: 'Qu\'est-ce que la technique Sandbox en cybersécurité?', options: ['Environnement isolé pour tester programmes', 'Vraie boîte à sable', 'Jeu', 'Navigateur'], answer: 0 },
                { q: 'Qu\'est-ce qu\'un Honeypot?', options: ['Piège pour attirer les attaquants', 'Type de miel', 'Jeu', 'Application'], answer: 0 },
                { q: 'Qu\'est-ce que le modèle Zero Trust Security?', options: ['Modèle de sécurité ne fait confiance à rien par défaut', 'Ne pas faire confiance à Internet', 'Type de programme', 'Navigateur'], answer: 0 }
            ],
            7: [
                { q: 'Qu\'est-ce qu\'une menace persistante avancée (APT)?', options: ['Attaque avancée et continue longue durée', 'Programme de protection', 'Type de jeu', 'Navigateur'], answer: 0 },
                { q: 'Qu\'est-ce que la cryptographie quantique?', options: ['Chiffrement utilisant mécanique quantique', 'Type de jeu', 'Navigateur', 'Application'], answer: 0 },
                { q: 'Qu\'est-ce qu\'un Rootkit?', options: ['Programme malveillant se cache dans système', 'Racine de plante', 'Système d\'exploitation', 'Jeu'], answer: 0 },
                { q: 'Qu\'est-ce qu\'une attaque par canal latéral?', options: ['Attaque exploitant informations latérales', 'Chaîne TV', 'Application', 'Navigateur'], answer: 0 },
                { q: 'Qu\'est-ce que le chiffrement homomorphe?', options: ['Chiffrement permet opérations sur données chiffrées', 'Type de programme', 'Jeu', 'Navigateur'], answer: 0 }
            ]
        }
    },
    
    en: {
        'hero-title': 'Internet Dangers and Blue Light Risks',
        'hero-subtitle': 'Your comprehensive guide to protect from digital risks and maintain your health in the digital world',
        'stat-levels': 'levels',
        'stat-solutions': 'solutions',
        'stat-info': 'key info',
        'section-charts': 'Important Statistics and Charts',
        'section-info': '13 Essential Information for Digital Safety',
        'section-glossary': 'Explanation of Basic Concepts and Terms',
        'section-problems': '16 Problems and Solutions',
        'section-quiz': 'Test Your Knowledge - 7 Levels',
        'section-game': 'Memory Game',
        'quiz-question': 'Question',
        'quiz-score': 'Score:',
        'quiz-next': 'Next Question',
        'game-level': 'Level',
        'game-moves': 'Moves',
        'game-matches': 'Matches',
        'game-time': 'Time',
        'game-reset': 'Play Again',
        'footer-title': 'Digital Safety Project',
        'footer-text': 'Designed with love to protect you in the digital world',
        
        charts: [
            {
                title: 'Daily usage hours',
                data: [
                    { label: 'Children', value: 75, display: '6 hours' },
                    { label: 'Teenagers', value: 90, display: '7.5 hours' },
                    { label: 'Adults', value: 60, display: '5 hours' }
                ]
            },
            {
                title: 'Blue light risks',
                data: [
                    { label: 'Eye strain', value: 85, display: '85%' },
                    { label: 'Insomnia', value: 70, display: '70%' },
                    { label: 'Headaches', value: 65, display: '65%' }
                ]
            },
            {
                title: 'Types of threats',
                data: [
                    { label: 'Phishing', value: 80, display: '80%' },
                    { label: 'Malware', value: 60, display: '60%' },
                    { label: 'Identity theft', value: 55, display: '55%' }
                ]
            },
            {
                title: 'Protection methods',
                data: [
                    { label: 'Strong passwords', value: 95, display: '95%' },
                    { label: 'Security updates', value: 88, display: '88%' },
                    { label: 'Antivirus', value: 82, display: '82%' }
                ]
            }
        ],
        
        infoCards: [
            { title: 'Personal data protection', text: 'Don\'t share your personal information like address and phone number with strangers online' },
            { title: 'Strong passwords', text: 'Use passwords containing uppercase, lowercase, numbers and symbols, and change them regularly' },
            { title: 'Security updates', text: 'Constantly update your operating system and applications to patch security vulnerabilities' },
            { title: 'Safe browsing', text: 'Check for HTTPS in website addresses before entering sensitive information' },
            { title: 'Blue light', text: 'Blue light causes eye strain and insomnia, use protection filters' },
            { title: 'Regular breaks', text: 'Take a 20-second break every 20 minutes and look at something 20 feet away' },
            { title: 'Cyberbullying', text: 'Report any offensive content or bullying and ask for help from a trusted person' },
            { title: 'Privacy', text: 'Review privacy settings in your accounts and control who sees your information' },
            { title: 'Backup', text: 'Regularly keep backups of your important files' },
            { title: 'Public networks', text: 'Avoid financial transactions via public Wi-Fi networks' },
            { title: 'Phishing messages', text: 'Don\'t open links or attachments from unknown sources' },
            { title: 'Appropriate content', text: 'Use parental control tools and content filters for children' },
            { title: 'Digital balance', text: 'Dedicate time to activities away from screens for better health' }
        ],
        
        glossary: [
            { term: 'Phishing', definition: 'Attempt to trick users into revealing their personal information through fake messages or websites' },
            { term: 'Malware', definition: 'Programs designed to damage devices or steal information' },
            { term: 'Firewall', definition: 'Security system that monitors and controls data traffic between networks' },
            { term: 'Encryption', definition: 'Converting data into an unreadable form to protect from unauthorized access' },
            { term: 'Blue light', definition: 'High-energy light emitted from digital screens affecting sleep and eyes' },
            { term: 'VPN', definition: 'Virtual private network protecting your privacy and encrypting your internet connection' },
            { term: 'Two-factor authentication', definition: 'Additional security layer requiring a secondary code after password' },
            { term: 'Cookies', definition: 'Small files that save information about your browsing of websites' },
            { term: 'Social engineering', definition: 'Psychologically deceiving people to obtain confidential information' },
            { term: 'Ransomware', definition: 'Malicious programs that encrypt your files and demand ransom to decrypt' },
            { term: 'Digital footprint', definition: 'Trace left by your activities on the Internet' },
            { term: 'DDoS attacks', definition: 'Flooding a site with fake visits to disable it' }
        ],
        
        problems: [
            { problem: 'Internet addiction', solution: 'Set specific usage hours, use time management apps, and dedicate time to other activities' },
            { problem: 'Eye strain', solution: 'Use the 20-20-20 rule, adjust screen brightness, and use blue light protection glasses' },
            { problem: 'Sleep disorders', solution: 'Avoid screens two hours before sleep, enable night mode, and follow a regular sleep routine' },
            { problem: 'Cyberbullying', solution: 'Don\'t respond to bullies, save evidence, report accounts, and ask adults for help' },
            { problem: 'Identity theft', solution: 'Use strong and different passwords, enable two-factor authentication, and regularly monitor your accounts' },
            { problem: 'Phishing messages', solution: 'Don\'t open suspicious links, verify sender address, and don\'t share personal information via email' },
            { problem: 'Malware', solution: 'Use reliable antivirus, constantly update your system, and avoid downloading suspicious files' },
            { problem: 'Privacy violation', solution: 'Review privacy settings, control who sees your posts, and don\'t accept friend requests from strangers' },
            { problem: 'Oversharing', solution: 'Think before posting, don\'t share your live location, and avoid posting sensitive information' },
            { problem: 'Physical pain', solution: 'Maintain correct sitting posture, take movement breaks, and practice stretching exercises' },
            { problem: 'Inappropriate content', solution: 'Use parental control tools, enable safe search, and monitor children\'s activities' },
            { problem: 'Time wasting', solution: 'Set clear goals, use timers, and stick to a schedule for activities' },
            { problem: 'Misinformation', solution: 'Verify sources, look for multiple sources, and be critical of information' },
            { problem: 'Financial fraud', solution: 'Don\'t share your card information, use only secure sites, and monitor your account statements' },
            { problem: 'Data loss', solution: 'Make regular backups, use cloud storage, and protect your devices with passwords' },
            { problem: 'Gaming addiction', solution: 'Set limited time for playing, take regular breaks, and balance between games and other activities' }
        ],
        
        quizLevels: [
            { name: 'Beginner', icon: '●', color: '#10b981' },
            { name: 'Easy', icon: '●●', color: '#3b82f6' },
            { name: 'Medium', icon: '●●●', color: '#f59e0b' },
            { name: 'Advanced', icon: '●●●●', color: '#f97316' },
            { name: 'Hard', icon: '●●●●●', color: '#ef4444' },
            { name: 'Expert', icon: '●●●●●●', color: '#8b5cf6' },
            { name: 'Legendary', icon: '★', color: '#ec4899' }
        ],
        
        quizQuestions: {
            1: [
                { q: 'What is blue light?', options: ['Light from screens', 'Type of nuclear radiation', 'Sky color', 'Type of laser'], answer: 0 },
                { q: 'How many hours recommended in front of screens daily for children?', options: ['Less than 2 hours', '6 hours', '10 hours', 'No limit'], answer: 0 },
                { q: 'What is phishing?', options: ['Attempt to steal information', 'Type of fish', 'Electronic game', 'Mobile app'], answer: 0 },
                { q: 'What does HTTPS mean in website address?', options: ['Secure connection', 'Fast site', 'Popular site', 'Free site'], answer: 0 },
                { q: 'What is the 20-20-20 rule for eyes?', options: ['Every 20 min look 20 feet for 20 sec', 'Work 20 hours', 'Sleep 20 hours', 'Play 20 minutes'], answer: 0 }
            ],
            2: [
                { q: 'What is the best way to protect your accounts?', options: ['Strong and different passwords', 'One easy password', 'Share password', 'Don\'t use password'], answer: 0 },
                { q: 'When should you update the operating system?', options: ['When security updates available', 'Once a year', 'No need to update', 'Every 5 years'], answer: 0 },
                { q: 'What is cyberbullying?', options: ['Harming others online', 'Video game', 'Chat app', 'Website'], answer: 0 },
                { q: 'Why avoid public Wi-Fi for financial transactions?', options: ['Not secure', 'Too fast', 'Expensive', 'Unavailable'], answer: 0 },
                { q: 'What is malware?', options: ['Harmful program', 'Useful program', 'Games', 'Browsers'], answer: 0 }
            ],
            3: [
                { q: 'What is two-factor authentication?', options: ['Additional security layer', 'Type of virus', 'Mobile app', 'Web browser'], answer: 0 },
                { q: 'What is VPN?', options: ['Virtual Private Network', 'Virus', 'Game', 'Browser'], answer: 0 },
                { q: 'What is social engineering in cybersecurity?', options: ['Psychological deception to get information', 'Building websites', 'App design', 'Game programming'], answer: 0 },
                { q: 'How often should passwords be changed?', options: ['Every 3-6 months', 'Every 10 years', 'Only once', 'No need to change'], answer: 0 },
                { q: 'What is ransomware?', options: ['Program that encrypts your files and demands ransom', 'Free program', 'Games', 'Browsers'], answer: 0 }
            ],
            4: [
                { q: 'What is a DDoS attack?', options: ['Flooding a site with fake visits', 'Virus', 'Protection program', 'Browser'], answer: 0 },
                { q: 'What is a digital footprint?', options: ['Trace of your activities on Internet', 'Type of phone', 'Application', 'Game'], answer: 0 },
                { q: 'What is end-to-end encryption?', options: ['Encrypting messages between sender and receiver only', 'Encrypting all Internet', 'Type of virus', 'Chat app'], answer: 0 },
                { q: 'What are cookies in browser?', options: ['Files that save browsing information', 'Type of sweets', 'Viruses', 'Protection programs'], answer: 0 },
                { q: 'What is a firewall?', options: ['System that monitors data traffic', 'Actual wall', 'Game program', 'Browser'], answer: 0 }
            ],
            5: [
                { q: 'What\'s the difference between HTTP and HTTPS?', options: ['HTTPS encrypted and HTTP not', 'No difference', 'HTTP faster', 'HTTPS older'], answer: 0 },
                { q: 'What is a Zero-day exploit?', options: ['Vulnerability unknown to developers', 'Holiday', 'Type of game', 'Browser'], answer: 0 },
                { q: 'What is SSL/TLS technology?', options: ['Security protocol for communications', 'Type of virus', 'Programming language', 'Operating system'], answer: 0 },
                { q: 'What is a Man-in-the-middle attack?', options: ['Intercepting communication between two parties', 'Type of game', 'Application', 'Browser'], answer: 0 },
                { q: 'What is SQL Injection?', options: ['Vulnerability to insert harmful commands in databases', 'Programming language', 'Operating system', 'Browser'], answer: 0 }
            ],
            6: [
                { q: 'What is Blockchain in security context?', options: ['Distributed immutable chain', 'Type of blocks', 'Game', 'Browser'], answer: 0 },
                { q: 'What is Penetration Testing?', options: ['Security test to discover vulnerabilities', 'Type of game', 'Application', 'Operating system'], answer: 0 },
                { q: 'What is Sandbox technique in cybersecurity?', options: ['Isolated environment to test programs', 'Real sandbox', 'Game', 'Browser'], answer: 0 },
                { q: 'What is a Honeypot?', options: ['Trap to attract attackers', 'Type of honey', 'Game', 'Application'], answer: 0 },
                { q: 'What is Zero Trust Security Model?', options: ['Security model trusts nothing by default', 'Don\'t trust Internet', 'Type of program', 'Browser'], answer: 0 }
            ],
            7: [
                { q: 'What is Advanced Persistent Threat (APT)?', options: ['Advanced long-term continuous attack', 'Protection program', 'Type of game', 'Browser'], answer: 0 },
                { q: 'What is Quantum Cryptography?', options: ['Encryption using quantum mechanics', 'Type of game', 'Browser', 'Application'], answer: 0 },
                { q: 'What is a Rootkit?', options: ['Malicious program hides in system', 'Plant root', 'Operating system', 'Game'], answer: 0 },
                { q: 'What is a Side-channel attack?', options: ['Attack exploiting side information', 'TV channel', 'Application', 'Browser'], answer: 0 },
                { q: 'What is Homomorphic Encryption?', options: ['Encryption allows operations on encrypted data', 'Type of program', 'Game', 'Browser'], answer: 0 }
            ]
        }
    }
};

// ========== Global Variables ==========
let currentLang = 'ar';
let currentFlippedCard = null;
let currentQuizLevel = 1;
let currentQuestionIndex = 0;
let quizScore = 0;
let currentGameLevel = 1;
let gameCards = [];
let flippedGameCards = [];
let matchedPairs = 0;
let gameMoves = 0;
let gameTime = 0;
let gameInterval = null;

const gameIcons = ['🔒', '🛡️', '🔐', '💻', '📱', '🌐', '⚠️', '🚨', '🔑', '👁️', '🧠', '💡', '🔍', '📡', '🗝️', '🚪'];

// ========== Initialize ==========
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    renderCharts();
    renderInfoCards();
    renderGlossary();
    renderProblems();
    renderQuizLevels();
    renderGameLevels();
    setupEventListeners();
});

// ========== Event Listeners ==========
function setupEventListeners() {
    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => changeLanguage(btn.dataset.lang));
    });
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Quiz next button
    document.getElementById('quizNextBtn').addEventListener('click', nextQuestion);
    
    // Game reset button
    document.getElementById('gameResetBtn').addEventListener('click', resetGame);
}

// ========== Language Functions ==========
function changeLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update direction
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
    
    updatePageContent();
}

function initializeLanguage() {
    updatePageContent();
}

function updatePageContent() {
    const t = translations[currentLang];
    
    // Update all text elements
    document.querySelectorAll('[data-text]').forEach(el => {
        const key = el.dataset.text;
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    renderCharts();
    renderInfoCards();
    renderGlossary();
    renderProblems();
    renderQuizLevels();
    renderGameLevels();
}

// ========== Theme Toggle ==========
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// ========== Charts Rendering ==========
function renderCharts() {
    const t = translations[currentLang];
    const grid = document.getElementById('chartsGrid');
    
    grid.innerHTML = t.charts.map(chart => `
        <div class="chart-card">
            <div class="chart-title">${chart.title}</div>
            <div class="chart-bars">
                ${chart.data.map(item => `
                    <div class="chart-bar">
                        <div class="bar-header">
                            <span class="bar-label">${item.label}</span>
                            <span class="bar-value">${item.display}</span>
                        </div>
                        <div class="bar-track">
                            <div class="bar-fill" style="width: ${item.value}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// ========== Info Cards Rendering ==========
function renderInfoCards() {
    const t = translations[currentLang];
    const grid = document.getElementById('infoGrid');
    
    grid.innerHTML = t.infoCards.map(card => `
        <div class="info-card">
            <div class="info-card-title">${card.title}</div>
            <div class="info-card-text">${card.text}</div>
        </div>
    `).join('');
}

// ========== Glossary Rendering ==========
function renderGlossary() {
    const t = translations[currentLang];
    const grid = document.getElementById('glossaryGrid');
    
    grid.innerHTML = t.glossary.map(item => `
        <div class="glossary-card">
            <div class="glossary-term">${item.term}</div>
            <div class="glossary-definition">${item.definition}</div>
        </div>
    `).join('');
}

// ========== Problems Rendering ==========
function renderProblems() {
    const t = translations[currentLang];
    const grid = document.getElementById('problemsGrid');
    
    grid.innerHTML = t.problems.map((item, index) => `
        <div class="problem-card" onclick="flipProblemCard(this)">
            <div class="problem-card-inner">
                <div class="problem-card-front">
                    <div class="problem-number">${currentLang === 'ar' ? 'مشكلة' : currentLang === 'fr' ? 'Problème' : 'Problem'} ${index + 1}</div>
                    <div class="problem-title">${currentLang === 'ar' ? 'المشكلة' : currentLang === 'fr' ? 'Le Problème' : 'The Problem'}</div>
                    <div class="problem-text">${item.problem}</div>
                </div>
                <div class="problem-card-back">
                    <div class="problem-number">${currentLang === 'ar' ? 'حل' : currentLang === 'fr' ? 'Solution' : 'Solution'} ${index + 1}</div>
                    <div class="problem-title">${currentLang === 'ar' ? 'الحل' : currentLang === 'fr' ? 'La Solution' : 'The Solution'}</div>
                    <div class="problem-text">${item.solution}</div>
                </div>
            </div>
        </div>
    `).join('');
}

function flipProblemCard(card) {
    // Flip current card
    if (currentFlippedCard && currentFlippedCard !== card) {
        currentFlippedCard.classList.remove('flipped');
    }
    card.classList.toggle('flipped');
    currentFlippedCard = card.classList.contains('flipped') ? card : null;
}

// ========== Quiz Functions ==========
function renderQuizLevels() {
    const t = translations[currentLang];
    const container = document.getElementById('quizLevels');
    
    container.innerHTML = t.quizLevels.map((level, index) => `
        <button class="level-btn ${index === 0 ? 'active' : ''}" 
                onclick="startQuiz(${index + 1})"
                style="border-color: ${level.color}">
            <span style="color: ${level.color}">${level.icon}</span> ${level.name}
        </button>
    `).join('');
}

function startQuiz(level) {
    currentQuizLevel = level;
    currentQuestionIndex = 0;
    quizScore = 0;
    
    // Update active button
    const buttons = document.querySelectorAll('#quizLevels .level-btn');
    buttons.forEach((btn, index) => {
        btn.classList.toggle('active', index === level - 1);
    });
    
    // Show quiz container
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById('quizResult').classList.add('hidden');
    
    loadQuestion();
}

function loadQuestion() {
    const t = translations[currentLang];
    const questions = t.quizQuestions[currentQuizLevel];
    
    if (currentQuestionIndex >= questions.length) {
        showQuizResult();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    
    document.getElementById('quizCurrent').textContent = currentQuestionIndex + 1;
    document.getElementById('quizTotal').textContent = questions.length;
    document.getElementById('scoreValue').textContent = quizScore;
    document.getElementById('quizQuestion').textContent = question.q;
    
    // Shuffle options
    const shuffled = [...question.options];
    const correctAnswer = shuffled[question.answer];
    shuffled.sort(() => Math.random() - 0.5);
    const newCorrectIndex = shuffled.indexOf(correctAnswer);
    
    const answersHtml = shuffled.map((option, index) => `
        <div class="quiz-answer" onclick="selectAnswer(${index}, ${newCorrectIndex})">${option}</div>
    `).join('');
    
    document.getElementById('quizAnswers').innerHTML = answersHtml;
    document.getElementById('quizNextBtn').disabled = true;
}

function selectAnswer(selected, correct) {
    const answers = document.querySelectorAll('.quiz-answer');
    answers.forEach(answer => {
        answer.classList.add('disabled');
    });
    
    if (selected === correct) {
        answers[selected].classList.add('correct');
        quizScore += 10;
        document.getElementById('scoreValue').textContent = quizScore;
    } else {
        answers[selected].classList.add('incorrect');
        answers[correct].classList.add('correct');
    }
    
    document.getElementById('quizNextBtn').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showQuizResult() {
    const t = translations[currentLang];
    const totalQuestions = t.quizQuestions[currentQuizLevel].length;
    const percentage = (quizScore / (totalQuestions * 10)) * 100;
    
    let message = '';
    if (currentLang === 'ar') {
        message = percentage >= 80 ? 'ممتاز!' : percentage >= 60 ? 'جيد جداً!' : percentage >= 40 ? 'جيد!' : 'حاول مرة أخرى!';
    } else if (currentLang === 'fr') {
        message = percentage >= 80 ? 'Excellent!' : percentage >= 60 ? 'Très bien!' : percentage >= 40 ? 'Bien!' : 'Réessayez!';
    } else {
        message = percentage >= 80 ? 'Excellent!' : percentage >= 60 ? 'Very Good!' : percentage >= 40 ? 'Good!' : 'Try Again!';
    }
    
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('quizResult').innerHTML = `
        <div class="quiz-result">
            <div class="result-title">${message}</div>
            <div class="result-score">${quizScore}</div>
            <div class="result-message">${currentLang === 'ar' ? 'من' : currentLang === 'fr' ? 'sur' : 'out of'} ${totalQuestions * 10}</div>
            <button class="result-btn" onclick="startQuiz(${currentQuizLevel})">
                ${currentLang === 'ar' ? 'إعادة المحاولة' : currentLang === 'fr' ? 'Réessayer' : 'Try Again'}
            </button>
        </div>
    `;
    document.getElementById('quizResult').classList.remove('hidden');
}

// ========== Memory Game Functions ==========
function renderGameLevels() {
    const t = translations[currentLang];
    const container = document.getElementById('gameLevels');
    
    container.innerHTML = t.quizLevels.map((level, index) => `
        <button class="level-btn ${index === 0 ? 'active' : ''}" 
                onclick="startGame(${index + 1})"
                style="border-color: ${level.color}">
            <span style="color: ${level.color}">${level.icon}</span> ${level.name}
        </button>
    `).join('');
}

function startGame(level) {
    currentGameLevel = level;
    
    // Update active button
    const buttons = document.querySelectorAll('#gameLevels .level-btn');
    buttons.forEach((btn, index) => {
        btn.classList.toggle('active', index === level - 1);
    });
    
    // Show game container
    document.getElementById('gameContainer').classList.remove('hidden');
    
    initGame();
}

function initGame() {
    // Calculate pairs based on level
    const pairsCount = Math.min(4 + currentGameLevel, 12);
    
    // Create card pairs
    const icons = gameIcons.slice(0, pairsCount);
    gameCards = [...icons, ...icons].sort(() => Math.random() - 0.5);
    
    // Reset game state
    flippedGameCards = [];
    matchedPairs = 0;
    gameMoves = 0;
    gameTime = 0;
    
    // Update UI
    document.getElementById('gameLevelValue').textContent = currentGameLevel;
    document.getElementById('gameMovesValue').textContent = gameMoves;
    document.getElementById('gameMatchesValue').textContent = matchedPairs;
    document.getElementById('gameTimeValue').textContent = '0:00';
    
    // Render game board
    const board = document.getElementById('gameBoard');
    board.className = `game-board level-${currentGameLevel}`;
    board.innerHTML = gameCards.map((icon, index) => `
        <div class="game-card" data-index="${index}" onclick="flipGameCard(${index})">
            <div class="game-card-icon">${icon}</div>
        </div>
    `).join('');
    
    // Start timer
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(() => {
        gameTime++;
        const minutes = Math.floor(gameTime / 60);
        const seconds = gameTime % 60;
        document.getElementById('gameTimeValue').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function flipGameCard(index) {
    const card = document.querySelector(`[data-index="${index}"]`);
    
    // Don't flip if already flipped or matched
    if (card.classList.contains('flipped') || card.classList.contains('matched')) {
        return;
    }
    
    // Don't flip if two cards already flipped
    if (flippedGameCards.length >= 2) {
        return;
    }
    
    // Flip the card
    card.classList.add('flipped');
    flippedGameCards.push({ index, icon: gameCards[index], element: card });
    
    // Check for match if two cards are flipped
    if (flippedGameCards.length === 2) {
        gameMoves++;
        document.getElementById('gameMovesValue').textContent = gameMoves;
        
        setTimeout(checkGameMatch, 600);
    }
}

function checkGameMatch() {
    const [card1, card2] = flippedGameCards;
    
    if (card1.icon === card2.icon) {
        // Match found
        card1.element.classList.add('matched');
        card2.element.classList.add('matched');
        matchedPairs++;
        document.getElementById('gameMatchesValue').textContent = matchedPairs;
        
        // Check if game is complete
        if (matchedPairs === gameCards.length / 2) {
            clearInterval(gameInterval);
            setTimeout(() => {
                const message = currentLang === 'ar' ? `مبروك! أنهيت اللعبة في ${gameMoves} حركة و ${gameTime} ثانية!` :
                              currentLang === 'fr' ? `Félicitations! Vous avez terminé en ${gameMoves} mouvements et ${gameTime} secondes!` :
                              `Congratulations! You completed in ${gameMoves} moves and ${gameTime} seconds!`;
                alert(message);
            }, 300);
        }
    } else {
        // No match
        setTimeout(() => {
            card1.element.classList.remove('flipped');
            card2.element.classList.remove('flipped');
        }, 400);
    }
    
    flippedGameCards = [];
}

function resetGame() {
    initGame();
}
