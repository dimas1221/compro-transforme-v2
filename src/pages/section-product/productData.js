export const PRODUCT_CATEGORIES = [
  {
    key: "ai",
    title: "Artificial Intelligence (AI)",
    tabs: ["New", "Best Seller", "Smart Watch"],
    items: {
      New: [
        {
          slug: "palm-vein-capture-terminal",
          title: {
            id: "Terminal Tangkap Telapak Tangan",
            en: "Palm Vein Capture Terminal",
          },
          description: {
            id: "Menggabungkan algoritma AI canggih untuk keamanan biometrik tingkat tinggi dan autentikasi cepat.",
            en: "Combining advanced AI algorithms for ultra-high biometric security and rapid authentication.",
          },
          description_long: {
            id: "Terminal Tangkap Telapak Tangan menggunakan teknologi pemindaian pembuluh darah telapak tangan yang canggih, dikombinasikan dengan algoritma AI untuk memberikan tingkat keamanan biometrik tertinggi. Perangkat ini mampu mengenali identitas pengguna bahkan dalam kondisi tangan basah atau lingkungan berkabut, menjadikannya solusi ideal untuk area dengan keamanan kritis seperti pusat data, laboratorium, dan fasilitas pemerintahan.",
            en: "The Palm Vein Capture Terminal utilizes advanced palm vein scanning technology, combined with AI algorithms to deliver the highest level of biometric security. This device can recognize user identity even with wet hands or in misty environments, making it an ideal solution for critical security areas such as data centers, laboratories, and government facilities.",
          },
          image: "/images/product/palm.png",
          detail: {
            features: {
              id: [
                "Autentikasi kecepatan tinggi",
                "Dapat mengenali tangan basah",
                "Karakter identifikasi unik",
                "Dapat digunakan di lingkungan berkabut",
                "Tingkat keamanan sangat tinggi",
              ],
              en: [
                "High-speed authentication",
                "Recognizable with wet hands",
                "Unique identification characteristics",
                "Works in mist environments",
                "Extremely high security level",
              ],
            },
            parameters: {
              accuracy: { id: "Tingkat penolakan <0.4% | Tingkat positif palsu <0.01%", en: "Rejection rate <0.4% | False positive rate <0.01%" },
              operatingSystem: { id: "Windows, Linux, Android", en: "Windows, Linux, Android" },
              communicationInterface: { id: "USB 2.0, Type-C", en: "USB 2.0, Type-C" },
              powerSupply: { id: "USB 5V, Arus masuk maks 500mA", en: "USB 5V, Max input current 500mA" },
              powerConsumption: { id: "<2W", en: "<2W" },
              operatingTemperature: { id: "-10°C ~ 55°C", en: "-10°C ~ 55°C" },
              workingHumidity: { id: "20%RH ~ 90%RH", en: "20%RH ~ 90%RH" },
            },
          },
        },
        {
          slug: "multi-biometric-iris-terminal",
          title: {
            id: "Terminal Multi-Biometrik (Iris)",
            en: "Multi-Biometric Capture Terminal (Iris)",
          },
          description: {
            id: "Identifikasi presisi tinggi menggunakan teknologi iris dan pengenalan wajah multi-lapisan.",
            en: "High precision identification using iris technology and multi-layer face recognition.",
          },
          description_long: {
            id: "Terminal Multi-Biometrik Iris menggabungkan pengenalan iris mata dan wajah dalam satu perangkat terintegrasi. Dengan keamanan multi-lapisan, perangkat ini menawarkan akurasi identifikasi yang sangat tinggi dan cocok untuk diterapkan di area dengan tingkat keamanan maksimum seperti bandara, gedung pemerintahan, dan fasilitas militer.",
            en: "The Multi-Biometric Iris Terminal combines iris and facial recognition in a single integrated device. With multi-layer security, this device offers extremely high identification accuracy and is suitable for deployment in maximum security areas such as airports, government buildings, and military facilities.",
          },
          image: "/images/product/iris.png",
          detail: {
            features: {
              id: [
                "Identifikasi iris presisi tinggi",
                "Mendukung pengenalan wajah",
                "Keamanan multi-lapisan",
                "Cocok untuk area dengan keamanan tinggi",
              ],
              en: [
                "High-precision iris recognition",
                "Face recognition supported",
                "Multi-layer security",
                "Ideal for high-security areas",
              ],
            },
            parameters: {
              accuracy: { id: "Pengenalan iris & wajah presisi tinggi", en: "High precision iris & face recognition" },
              operatingSystem: { id: "Windows, Linux", en: "Windows, Linux" },
              communicationInterface: { id: "USB, Ethernet", en: "USB, Ethernet" },
              powerSupply: { id: "DC 12V", en: "DC 12V" },
              powerConsumption: { id: "<5W", en: "<5W" },
              operatingTemperature: { id: "-5°C ~ 50°C", en: "-5°C ~ 50°C" },
              workingHumidity: { id: "20%RH ~ 85%RH", en: "20%RH ~ 85%RH" },
            },
          },
        },
        {
          slug: "face-recognition-terminal",
          title: {
            id: "Terminal Pengenalan Wajah",
            en: "Face Recognition Terminal",
          },
          description: {
            id: "Pengenalan wajah cepat dan aman dengan akurasi tinggi dalam berbagai kondisi pencahayaan.",
            en: "Fast and secure face recognition with high accuracy in various lighting conditions.",
          },
          description_long: {
            id: "Terminal Pengenalan Wajah dirancang untuk memberikan identifikasi real-time dengan akurasi tinggi, bahkan dalam kondisi pencahayaan rendah. Terintegrasi dengan sistem akses kontrol, perangkat ini ideal untuk perkantoran, apartemen, dan fasilitas komersial yang membutuhkan keamanan modern tanpa mengorbankan kenyamanan pengguna.",
            en: "The Face Recognition Terminal is designed to provide real-time identification with high accuracy, even in low-light conditions. Integrated with access control systems, this device is ideal for offices, apartments, and commercial facilities that require modern security without compromising user convenience.",
          },
          image: "/images/product/faceReg.png",
          detail: {
            features: {
              id: [
                "Pengenalan wajah real-time",
                "Akurasi tinggi dalam cahaya rendah",
                "Integrasi sistem akses kontrol",
              ],
              en: [
                "Real-time face recognition",
                "High accuracy in low light",
                "Access control system integration",
              ],
            },
            parameters: {
              accuracy: { id: "Pengenalan wajah akurasi tinggi", en: "High accuracy facial recognition" },
              operatingSystem: { id: "Linux, Android", en: "Linux, Android" },
              communicationInterface: { id: "USB, WiFi", en: "USB, WiFi" },
              powerSupply: { id: "USB 5V", en: "USB 5V" },
              powerConsumption: { id: "<3W", en: "<3W" },
              operatingTemperature: { id: "0°C ~ 50°C", en: "0°C ~ 50°C" },
              workingHumidity: { id: "20%RH ~ 90%RH", en: "20%RH ~ 90%RH" },
            },
          },
        },
        {
          slug: "ai-access-control",
          title: {
            id: "AI Access Control",
            en: "AI Access Control",
          },
          description: {
            id: "Sistem kontrol akses cerdas berbasis AI dengan integrasi multi-biometrik dan monitoring real-time.",
            en: "Intelligent AI-powered access control system with multi-biometric integration and real-time monitoring.",
          },
          description_long: {
            id: "AI Access Control adalah sistem kontrol akses generasi terbaru yang memanfaatkan kecerdasan buatan untuk mengelola dan memantau akses secara real-time. Dengan kemampuan integrasi multi-biometrik, sistem ini dapat menggabungkan pengenalan wajah, sidik jari, dan kartu akses dalam satu platform terpadu, memberikan fleksibilitas dan keamanan maksimum untuk berbagai jenis fasilitas.",
            en: "AI Access Control is a next-generation access control system that leverages artificial intelligence to manage and monitor access in real-time. With multi-biometric integration capabilities, this system can combine face recognition, fingerprint, and access cards in a single unified platform, providing maximum flexibility and security for various types of facilities.",
          },
          image:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&fit=crop&q=80",
          detail: {
            features: {
              id: [
                "Kontrol akses berbasis AI",
                "Integrasi multi-biometrik",
                "Monitoring real-time",
              ],
              en: [
                "AI-based access control",
                "Multi-biometric integration",
                "Real-time monitoring",
              ],
            },
            parameters: {
              accuracy: { id: "Pengenalan adaptif berbasis AI", en: "AI-based adaptive recognition" },
              operatingSystem: { id: "Windows, Linux", en: "Windows, Linux" },
              communicationInterface: { id: "Ethernet, WiFi", en: "Ethernet, WiFi" },
              powerSupply: { id: "DC 12V", en: "DC 12V" },
              powerConsumption: { id: "<10W", en: "<10W" },
              operatingTemperature: { id: "-10°C ~ 55°C", en: "-10°C ~ 55°C" },
              workingHumidity: { id: "10%RH ~ 90%RH", en: "10%RH ~ 90%RH" },
            },
          },
        },
        {
          slug: "ai-voice-assistant-module",
          title: {
            id: "Modul Asisten Suara AI",
            en: "AI Voice Assistant Module",
          },
          description: {
            id: "Modul asisten suara pintar dengan pemrosesan bahasa alami untuk integrasi smart home dan IoT.",
            en: "Smart voice assistant module with natural language processing for smart home and IoT integration.",
          },
          description_long: {
            id: "Modul Asisten Suara AI menghadirkan pengalaman interaksi suara yang natural dan responsif. Dilengkapi dengan pemrosesan bahasa alami (NLP) multi-bahasa, modul ini dapat diintegrasikan dengan berbagai perangkat smart home dan IoT. Dengan latensi rendah dan akurasi pengenalan suara di atas 95%, modul ini ideal untuk otomatisasi rumah, asisten virtual, dan aplikasi hands-free lainnya.",
            en: "The AI Voice Assistant Module delivers a natural and responsive voice interaction experience. Equipped with multi-language natural language processing (NLP), this module can be integrated with various smart home and IoT devices. With low latency and voice recognition accuracy above 95%, this module is ideal for home automation, virtual assistants, and other hands-free applications.",
          },
          image:
            "https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&fit=crop&q=80",
          detail: {
            features: {
              id: [
                "Pengenalan suara multi-bahasa",
                "Pemrosesan bahasa alami (NLP)",
                "Integrasi smart home",
                "Respons latensi rendah",
              ],
              en: [
                "Multi-language voice recognition",
                "Natural Language Processing (NLP)",
                "Smart home integration",
                "Low-latency response",
              ],
            },
            parameters: {
              accuracy: { id: "Akurasi pengenalan suara >95%", en: "Voice recognition accuracy >95%" },
              operatingSystem: { id: "Linux, Android", en: "Linux, Android" },
              communicationInterface: { id: "WiFi, Bluetooth 5.0", en: "WiFi, Bluetooth 5.0" },
              powerSupply: { id: "USB 5V", en: "USB 5V" },
              powerConsumption: { id: "<3W", en: "<3W" },
              operatingTemperature: { id: "0°C ~ 45°C", en: "0°C ~ 45°C" },
              workingHumidity: { id: "20%RH ~ 80%RH", en: "20%RH ~ 80%RH" },
            },
          },
        },
      ],

      "Best Seller": [
        {
          slug: "smart-fingerprint-lock",
          title: {
            id: "Kunci Sidik Jari Pintar",
            en: "Smart Fingerprint Lock",
          },
          description: {
            id: "Kunci pintu pintar dengan sensor sidik jari AI presisi tinggi dan desain tahan air IP65.",
            en: "Smart door lock with high-precision AI fingerprint sensor and IP65 waterproof design.",
          },
          description_long: {
            id: "Kunci Sidik Jari Pintar menghadirkan keamanan rumah generasi terbaru dengan sensor sidik jari bertenaga AI yang mampu membuka kunci dalam waktu kurang dari 0.5 detik. Dengan kapasitas hingga 100 sidik jari, alarm anti-perusakan, baterai tahan 12 bulan, dan desain tahan air IP65, kunci ini dirancang untuk memberikan perlindungan maksimum dan kenyamanan tanpa kunci konvensional.",
            en: "The Smart Fingerprint Lock delivers next-generation home security with an AI-powered fingerprint sensor capable of unlocking in less than 0.5 seconds. With capacity for up to 100 fingerprints, anti-tamper alarm, 12-month battery life, and IP65 waterproof design, this lock is designed to provide maximum protection and convenience without conventional keys.",
          },
          image: "/images/product/finger.png",
          detail: {
            features: {
              id: [
                "Pembukaan kunci <0.5 detik",
                "Kapasitas 100 sidik jari",
                "Anti-perusakan alarm",
                "Baterai tahan 12 bulan",
                "Desain tahan air IP65",
              ],
              en: [
                "Unlock in <0.5 seconds",
                "100 fingerprint capacity",
                "Anti-tamper alarm",
                "12-month battery life",
                "IP65 waterproof design",
              ],
            },
            parameters: {
              accuracy: { id: "FAR <0.002% | FRR <0.5%", en: "FAR <0.002% | FRR <0.5%" },
              operatingSystem: { id: "RTOS Tertanam", en: "Embedded RTOS" },
              communicationInterface: { id: "Bluetooth 5.0, NFC", en: "Bluetooth 5.0, NFC" },
              powerSupply: { id: "4x Baterai AA", en: "4x AA Batteries" },
              powerConsumption: { id: "<1W siaga", en: "<1W standby" },
              operatingTemperature: { id: "-20°C ~ 60°C", en: "-20°C ~ 60°C" },
              workingHumidity: { id: "20%RH ~ 95%RH", en: "20%RH ~ 95%RH" },
            },
          },
        },
        {
          slug: "ai-parking-system",
          title: {
            id: "Sistem Parkir AI",
            en: "AI Parking System",
          },
          description: {
            id: "Sistem parkir otomatis cerdas dengan pengenalan plat nomor berbasis AI dan pembayaran cashless.",
            en: "Smart automated parking system with AI-based license plate recognition and cashless payment.",
          },
          description_long: {
            id: "Sistem Parkir AI merevolusi manajemen parkir dengan teknologi pengenalan plat nomor otomatis yang memiliki akurasi di atas 98%. Dilengkapi dengan deteksi slot parkir real-time, pembayaran cashless terintegrasi, dan dashboard monitoring berbasis cloud, sistem ini meningkatkan efisiensi operasional dan pengalaman pengguna secara signifikan untuk pusat perbelanjaan, bandara, dan area parkir komersial.",
            en: "The AI Parking System revolutionizes parking management with automatic license plate recognition technology with over 98% accuracy. Equipped with real-time parking slot detection, integrated cashless payment, and cloud-based monitoring dashboard, this system significantly improves operational efficiency and user experience for shopping centers, airports, and commercial parking areas.",
          },
          image:
            "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&fit=crop&q=80",
          detail: {
            features: {
              id: [
                "Pengenalan plat nomor otomatis",
                "Deteksi slot parkir real-time",
                "Pembayaran cashless terintegrasi",
                "Dashboard monitoring cloud",
                "Akurasi pengenalan >98%",
              ],
              en: [
                "Automatic license plate recognition",
                "Real-time parking slot detection",
                "Integrated cashless payment",
                "Cloud monitoring dashboard",
                "Recognition accuracy >98%",
              ],
            },
            parameters: {
              accuracy: { id: "Akurasi LPR >98%", en: "LPR accuracy >98%" },
              operatingSystem: { id: "Linux", en: "Linux" },
              communicationInterface: { id: "Ethernet, WiFi, 4G", en: "Ethernet, WiFi, 4G" },
              powerSupply: { id: "DC 12V / 3A", en: "DC 12V / 3A" },
              powerConsumption: { id: "<20W", en: "<20W" },
              operatingTemperature: { id: "-20°C ~ 60°C", en: "-20°C ~ 60°C" },
              workingHumidity: { id: "10%RH ~ 95%RH", en: "10%RH ~ 95%RH" },
            },
          },
        },
        {
          slug: "ai-visitor-management",
          title: {
            id: "Manajemen Pengunjung AI",
            en: "AI Visitor Management",
          },
          description: {
            id: "Sistem manajemen pengunjung cerdas dengan registrasi mandiri dan pengenalan wajah otomatis.",
            en: "Smart visitor management system with self-registration and automatic face recognition.",
          },
          description_long: {
            id: "Manajemen Pengunjung AI menyederhanakan proses penerimaan tamu dengan registrasi mandiri via tablet, pengenalan wajah pengunjung, dan pencetakan badge otomatis. Terintegrasi dengan kalender tamu dan laporan kunjungan real-time, sistem ini meningkatkan keamanan dan profesionalisme di perkantoran, gedung pemerintahan, dan fasilitas publik lainnya.",
            en: "AI Visitor Management streamlines the guest reception process with self-registration via tablet, visitor face recognition, and automatic badge printing. Integrated with guest calendar and real-time visit reports, this system enhances security and professionalism in offices, government buildings, and other public facilities.",
          },
          image: "/images/product/ai1.png",
          detail: {
            features: {
              id: [
                "Registrasi mandiri via tablet",
                "Pengenalan wajah pengunjung",
                "Cetak badge otomatis",
                "Integrasi kalender tamu",
                "Laporan kunjungan real-time",
              ],
              en: [
                "Self-registration via tablet",
                "Visitor face recognition",
                "Automatic badge printing",
                "Guest calendar integration",
                "Real-time visit reports",
              ],
            },
            parameters: {
              accuracy: { id: "Pengenalan wajah >99%", en: "Face recognition >99%" },
              operatingSystem: { id: "Android 10", en: "Android 10" },
              communicationInterface: { id: "WiFi, Ethernet", en: "WiFi, Ethernet" },
              powerSupply: { id: "DC 12V / 2A", en: "DC 12V / 2A" },
              powerConsumption: { id: "<12W", en: "<12W" },
              operatingTemperature: { id: "0°C ~ 45°C", en: "0°C ~ 45°C" },
              workingHumidity: { id: "20%RH ~ 85%RH", en: "20%RH ~ 85%RH" },
            },
          },
        },
      ],

      "Smart Watch": [
        {
          slug: "ai-health-smartwatch",
          title: {
            id: "Smartwatch Kesehatan AI",
            en: "AI Health Smartwatch",
          },
          description: {
            id: "Jam tangan pintar dengan pemantauan kesehatan berbasis AI dan pelacakan aktivitas 24/7.",
            en: "Smart watch with AI-powered health monitoring and 24/7 activity tracking.",
          },
          description_long: {
            id: "Smartwatch Kesehatan AI adalah perangkat wearable canggih yang memantau detak jantung, SpO2, tingkat stres, dan kualitas tidur secara 24/7 menggunakan algoritma AI. Dengan GPS terintegrasi dan ketahanan air 5ATM, smartwatch ini menjadi pendamping sempurna untuk gaya hidup aktif dan sehat, memberikan insight kesehatan yang akurat dan rekomendasi personal.",
            en: "The AI Health Smartwatch is an advanced wearable device that monitors heart rate, SpO2, stress levels, and sleep quality 24/7 using AI algorithms. With built-in GPS and 5ATM water resistance, this smartwatch is the perfect companion for an active and healthy lifestyle, providing accurate health insights and personal recommendations.",
          },
          image:
            "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&fit=crop&q=80",
          detail: {
            features: {
              id: [
                "Pemantauan detak jantung 24/7",
                "Deteksi SpO2 dan stres",
                "Pelacakan tidur AI",
                "GPS terintegrasi",
                "Tahan air 5ATM",
              ],
              en: [
                "24/7 heart rate monitoring",
                "SpO2 and stress detection",
                "AI sleep tracking",
                "Built-in GPS",
                "5ATM water resistant",
              ],
            },
            parameters: {
              display: { id: "AMOLED 1,43\" 466x466", en: "1.43\" AMOLED 466x466" },
              battery: { id: "Hingga 14 hari", en: "Up to 14 days" },
              connectivity: { id: "Bluetooth 5.2, WiFi", en: "Bluetooth 5.2, WiFi" },
              sensors: { id: "Detak jantung, SpO2, Akselerometer, Giroskop", en: "Heart rate, SpO2, Accelerometer, Gyroscope" },
              waterResistance: { id: "5ATM", en: "5ATM" },
              operatingTemperature: { id: "-10°C ~ 50°C", en: "-10°C ~ 50°C" },
              weight: { id: "36g (tanpa tali)", en: "36g (without strap)" },
            },
          },
        },
        {
          slug: "smartwatch-pro-gps",
          title: {
            id: "Smartwatch Pro GPS",
            en: "Smartwatch Pro GPS",
          },
          description: {
            id: "Smartwatch premium dengan GPS ganda, layar AMOLED always-on, dan bodi titanium alloy.",
            en: "Premium smartwatch with dual GPS, always-on AMOLED display, and titanium alloy body.",
          },
          description_long: {
            id: "Smartwatch Pro GPS adalah jam tangan pintar kelas premium yang dirancang untuk para profesional dan penggemar olahraga serius. Dengan GPS ganda (GPS + GLONASS), layar AMOLED always-on, lebih dari 150 mode olahraga, baterai tahan hingga 21 hari, dan bodi titanium alloy yang elegan, smartwatch ini menawarkan performa dan gaya tanpa kompromi.",
            en: "The Smartwatch Pro GPS is a premium-class smart watch designed for professionals and serious sports enthusiasts. With dual GPS (GPS + GLONASS), always-on AMOLED display, over 150 sports modes, battery life up to 21 days, and an elegant titanium alloy body, this smartwatch offers uncompromised performance and style.",
          },
          image:
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&fit=crop&q=80",
          detail: {
            features: {
              id: [
                "GPS ganda (GPS + GLONASS)",
                "Layar AMOLED always-on",
                "150+ mode olahraga",
                "Baterai tahan 21 hari",
                "Bodi titanium alloy",
              ],
              en: [
                "Dual GPS (GPS + GLONASS)",
                "Always-on AMOLED display",
                "150+ sports modes",
                "21-day battery life",
                "Titanium alloy body",
              ],
            },
            parameters: {
              display: { id: "AMOLED 1,39\" 454x454", en: "1.39\" AMOLED 454x454" },
              battery: { id: "Hingga 21 hari", en: "Up to 21 days" },
              connectivity: { id: "Bluetooth 5.0, WiFi, NFC", en: "Bluetooth 5.0, WiFi, NFC" },
              sensors: { id: "Barometer, Kompas, Detak jantung, SpO2", en: "Barometer, Compass, Heart rate, SpO2" },
              waterResistance: { id: "10ATM", en: "10ATM" },
              operatingTemperature: { id: "-20°C ~ 55°C", en: "-20°C ~ 55°C" },
              weight: { id: "52g (tanpa tali)", en: "52g (without strap)" },
            },
          },
        },
        {
          slug: "smartwatch-kids-tracker",
          title: {
            id: "Smartwatch Pelacak Anak",
            en: "Kids Tracker Smartwatch",
          },
          description: {
            id: "Jam tangan pintar untuk anak dengan pelacakan lokasi real-time, panggilan dua arah, dan SOS darurat.",
            en: "Kids smart watch with real-time location tracking, two-way calling, and SOS emergency.",
          },
          description_long: {
            id: "Smartwatch Pelacak Anak dirancang khusus untuk keamanan dan kenyamanan orang tua dalam memantau anak-anak. Dilengkapi pelacakan GPS real-time, panggilan dua arah, tombol SOS darurat, geo-fencing zona aman, dan kamera terintegrasi, jam tangan ini memungkinkan orang tua tetap terhubung dengan anak kapan saja dan di mana saja dengan rasa aman.",
            en: "The Kids Tracker Smartwatch is specifically designed for parents' peace of mind in monitoring their children. Equipped with real-time GPS tracking, two-way calling, SOS emergency button, safe zone geo-fencing, and built-in camera, this watch allows parents to stay connected with their children anytime and anywhere with a sense of security.",
          },
          image:
            "https://images.unsplash.com/photo-1510017803434-a899b57f1f64?w=800&fit=crop&q=80",
          detail: {
            features: {
              id: [
                "Pelacakan GPS real-time",
                "Panggilan dua arah",
                "SOS darurat satu tombol",
                "Geo-fencing zona aman",
                "Kamera terintegrasi",
              ],
              en: [
                "Real-time GPS tracking",
                "Two-way calling",
                "One-button SOS emergency",
                "Safe zone geo-fencing",
                "Built-in camera",
              ],
            },
            parameters: {
              display: { id: "Layar Sentuh IPS 1,4\"", en: "1.4\" IPS Touch Screen" },
              battery: { id: "Hingga 3 hari", en: "Up to 3 days" },
              connectivity: { id: "4G LTE, WiFi, GPS", en: "4G LTE, WiFi, GPS" },
              sensors: { id: "Akselerometer, Proximity", en: "Accelerometer, Proximity" },
              waterResistance: { id: "IP67", en: "IP67" },
              operatingTemperature: { id: "0°C ~ 45°C", en: "0°C ~ 45°C" },
              weight: { id: "42g", en: "42g" },
            },
          },
        },
        {
          slug: "smartwatch-fitness-band",
          title: {
            id: "Smartband Fitness AI",
            en: "AI Fitness Smartband",
          },
          description: {
            id: "Gelang kebugaran pintar dengan analisis olahraga berbasis AI dan baterai tahan hingga 18 hari.",
            en: "Smart fitness band with AI-powered workout analysis and up to 18-day battery life.",
          },
          description_long: {
            id: "Smartband Fitness AI adalah gelang kebugaran pintar yang menggunakan kecerdasan buatan untuk menganalisis aktivitas olahraga secara otomatis. Dengan layar AMOLED fleksibel, pemantauan stres sepanjang hari, skor kualitas tidur, dan baterai yang tahan hingga 18 hari, smartband ini menjadi teman setia untuk mencapai target kebugaran harian Anda.",
            en: "The AI Fitness Smartband is a smart fitness band that uses artificial intelligence to automatically analyze workout activities. With a flexible AMOLED display, all-day stress monitoring, sleep quality score, and battery lasting up to 18 days, this smartband is your faithful companion for achieving your daily fitness goals.",
          },
          image:
            "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=800&fit=crop&q=80",
          detail: {
            features: {
              id: [
                "Analisis olahraga AI otomatis",
                "Layar AMOLED fleksibel",
                "Pemantauan stres sepanjang hari",
                "Skor kualitas tidur",
                "Baterai tahan 18 hari",
              ],
              en: [
                "Automatic AI workout analysis",
                "Flexible AMOLED display",
                "All-day stress monitoring",
                "Sleep quality score",
                "18-day battery life",
              ],
            },
            parameters: {
              display: { id: "AMOLED 1,47\" 194x368", en: "1.47\" AMOLED 194x368" },
              battery: { id: "Hingga 18 hari", en: "Up to 18 days" },
              connectivity: { id: "Bluetooth 5.1", en: "Bluetooth 5.1" },
              sensors: { id: "Detak jantung, SpO2, Akselerometer", en: "Heart rate, SpO2, Accelerometer" },
              waterResistance: { id: "5ATM", en: "5ATM" },
              operatingTemperature: { id: "-10°C ~ 45°C", en: "-10°C ~ 45°C" },
              weight: { id: "24g", en: "24g" },
            },
          },
        },
        {
          slug: "smartwatch-rugged-outdoor",
          title: {
            id: "Smartwatch Outdoor Tangguh",
            en: "Rugged Outdoor Smartwatch",
          },
          description: {
            id: "Jam tangan tangguh standar militer untuk petualangan luar ruangan dengan solar charging.",
            en: "Military-grade rugged smartwatch for outdoor adventures with solar charging capability.",
          },
          description_long: {
            id: "Smartwatch Outdoor Tangguh dirancang dengan standar militer MIL-STD-810G untuk menghadapi kondisi alam yang paling ekstrem. Dilengkapi navigasi offline peta topografi, sensor altimeter-barometer-kompas, baterai solar charging yang tahan hingga 24 hari, dan layar safir anti gores, jam tangan ini adalah pilihan utama para petualang, pendaki gunung, dan pecinta alam.",
            en: "The Rugged Outdoor Smartwatch is built to MIL-STD-810G military standards to withstand the most extreme natural conditions. Equipped with offline topographic map navigation, altimeter-barometer-compass sensors, solar charging battery lasting up to 24 days, and scratch-resistant sapphire screen, this watch is the top choice for adventurers, mountaineers, and nature enthusiasts.",
          },
          image:
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&fit=crop&q=80",
          detail: {
            features: {
              id: [
                "Standar militer MIL-STD-810G",
                "Navigasi offline peta topografi",
                "Altimeter, barometer, kompas",
                "Baterai solar charging",
                "Layar safir anti gores",
              ],
              en: [
                "MIL-STD-810G military standard",
                "Offline topographic map navigation",
                "Altimeter, barometer, compass",
                "Solar charging battery",
                "Scratch-resistant sapphire screen",
              ],
            },
            parameters: {
              display: { id: "MIP 1,4\" always-on", en: "1.4\" MIP always-on" },
              battery: { id: "Hingga 24 hari (solar)", en: "Up to 24 days (solar)" },
              connectivity: { id: "Bluetooth 5.0, ANT+, WiFi", en: "Bluetooth 5.0, ANT+, WiFi" },
              sensors: { id: "Sensor ABC, Detak jantung, SpO2, Termometer", en: "ABC sensor, Heart rate, SpO2, Thermometer" },
              waterResistance: { id: "10ATM", en: "10ATM" },
              operatingTemperature: { id: "-30°C ~ 60°C", en: "-30°C ~ 60°C" },
              weight: { id: "68g", en: "68g" },
            },
          },
        },
      ],
    },
  },

  {
    key: "iot",
    title: "Internet of Things (IoT)",
    tabs: ["Smart Home", "CCTV"],
    items: {
      "Smart Home": [
        {
          slug: "smart-hub",
          title: {
            id: "Smart Hub",
            en: "Smart Hub",
          },
          description: {
            id: "Pusat kendali terpadu untuk semua perangkat IoT di rumah Anda dengan koneksi multi-protokol.",
            en: "Unified central control for all IoT devices in your home with multi-protocol connectivity.",
          },
          description_long: {
            id: "Smart Hub adalah pusat kendali cerdas yang menghubungkan dan mengelola lebih dari 500 perangkat IoT di rumah Anda. Dengan dukungan multi-protokol (WiFi, Zigbee, Bluetooth), manajemen perangkat terpusat, dan kontrol real-time, Smart Hub menyederhanakan kehidupan sehari-hari Anda menjadi satu ekosistem yang terintegrasi dan mudah dioperasikan.",
            en: "Smart Hub is an intelligent control center that connects and manages over 500 IoT devices in your home. With multi-protocol support (WiFi, Zigbee, Bluetooth), centralized device management, and real-time control, Smart Hub simplifies your daily life into one integrated and easy-to-operate ecosystem.",
          },
          image:
            "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&fit=crop&q=80",
          detail: {
            features: {
              id: [
                "Manajemen perangkat terpusat",
                "Koneksi multi-protokol",
                "Kontrol real-time",
                "Kompatibel dengan 500+ perangkat",
              ],
              en: [
                "Centralized device management",
                "Multi-protocol connectivity",
                "Real-time control",
                "Compatible with 500+ devices",
              ],
            },
            parameters: {
              operatingSystem: { id: "Linux", en: "Linux" },
              communicationInterface: { id: "WiFi, Zigbee, Bluetooth", en: "WiFi, Zigbee, Bluetooth" },
              powerSupply: { id: "DC 5V", en: "DC 5V" },
              powerConsumption: { id: "<5W", en: "<5W" },
              operatingTemperature: { id: "0°C ~ 45°C", en: "0°C ~ 45°C" },
              workingHumidity: { id: "20%RH ~ 85%RH", en: "20%RH ~ 85%RH" },
            },
          },
        },
        {
          slug: "smart-light-system",
          title: {
            id: "Sistem Lampu Pintar",
            en: "Smart Light System",
          },
          description: {
            id: "Sistem pencahayaan pintar dengan 16 juta pilihan warna yang dapat dikendalikan via aplikasi dan suara.",
            en: "Smart lighting system with 16 million color options controllable via app and voice.",
          },
          description_long: {
            id: "Sistem Lampu Pintar menghadirkan pencahayaan yang dapat dipersonalisasi sepenuhnya dengan 16 juta pilihan warna dan kontrol via aplikasi maupun perintah suara. Dengan penjadwalan otomatis, mode hemat energi, dan integrasi dengan Alexa & Google Home, sistem ini memberikan kenyamanan, efisiensi, dan suasana pencahayaan sempurna untuk setiap ruangan di rumah Anda.",
            en: "The Smart Light System delivers fully customizable lighting with 16 million color options and control via app or voice commands. With automatic scheduling, energy saving mode, and Alexa & Google Home integration, this system provides comfort, efficiency, and the perfect lighting ambiance for every room in your home.",
          },
          image: "/images/product/slight.png",
          detail: {
            features: {
              id: [
                "Kontrol via aplikasi & suara",
                "16 juta pilihan warna",
                "Penjadwalan otomatis",
                "Mode hemat energi",
                "Integrasi Alexa & Google Home",
              ],
              en: [
                "App & voice control",
                "16 million color options",
                "Automatic scheduling",
                "Energy saving mode",
                "Alexa & Google Home integration",
              ],
            },
            parameters: {
              wattage: { id: "LED 9W (setara 60W)", en: "9W LED (equivalent 60W)" },
              colorTemp: { id: "2700K ~ 6500K", en: "2700K ~ 6500K" },
              communicationInterface: { id: "WiFi 2.4GHz, Bluetooth Mesh", en: "WiFi 2.4GHz, Bluetooth Mesh" },
              powerSupply: { id: "AC 100-240V", en: "AC 100-240V" },
              lifespan: { id: "25.000 jam", en: "25,000 hours" },
              operatingTemperature: { id: "-10°C ~ 40°C", en: "-10°C ~ 40°C" },
            },
          },
        },
        {
          slug: "smart-thermostat",
          title: {
            id: "Termostat Pintar",
            en: "Smart Thermostat",
          },
          description: {
            id: "Termostat cerdas yang mempelajari kebiasaan Anda secara otomatis untuk efisiensi energi hingga 30%.",
            en: "Intelligent thermostat that automatically learns your habits for up to 30% energy efficiency.",
          },
          description_long: {
            id: "Termostat Pintar menggunakan teknologi pembelajaran otomatis untuk memahami pola penggunaan Anda dan mengoptimalkan suhu ruangan demi efisiensi energi hingga 30%. Dengan kontrol zona multi-ruangan, sensor kehadiran terintegrasi, dan layar sentuh e-ink yang elegan, termostat ini memberikan kenyamanan premium sekaligus menghemat biaya energi secara signifikan.",
            en: "The Smart Thermostat uses automatic learning technology to understand your usage patterns and optimize room temperature for up to 30% energy efficiency. With multi-room zone control, built-in occupancy sensor, and elegant e-ink touch display, this thermostat delivers premium comfort while significantly reducing energy costs.",
          },
          image: "/images/product/temostat.png",
          detail: {
            features: {
              id: [
                "Pembelajaran pola penggunaan otomatis",
                "Kontrol zona multi-ruangan",
                "Sensor kehadiran terintegrasi",
                "Penghematan energi hingga 30%",
                "Layar sentuh e-ink",
              ],
              en: [
                "Automatic usage pattern learning",
                "Multi-room zone control",
                "Built-in occupancy sensor",
                "Up to 30% energy savings",
                "E-ink touch display",
              ],
            },
            parameters: {
              display: { id: "Layar Sentuh E-Ink 3,5\"", en: "3.5\" E-Ink Touch" },
              communicationInterface: { id: "WiFi 2.4GHz, Zigbee 3.0", en: "WiFi 2.4GHz, Zigbee 3.0" },
              powerSupply: { id: "24V AC / Cadangan baterai", en: "24V AC / Battery backup" },
              sensors: { id: "Suhu, Kelembapan, Proximity, Cahaya sekitar", en: "Temperature, Humidity, Proximity, Ambient light" },
              powerConsumption: { id: "<2W", en: "<2W" },
              operatingTemperature: { id: "0°C ~ 50°C", en: "0°C ~ 50°C" },
            },
          },
        },
        {
          slug: "smart-door-sensor",
          title: {
            id: "Sensor Pintu Pintar",
            en: "Smart Door Sensor",
          },
          description: {
            id: "Sensor pintu dan jendela pintar dengan notifikasi instan dan baterai tahan hingga 2 tahun.",
            en: "Smart door and window sensor with instant notification and up to 2-year battery life.",
          },
          description_long: {
            id: "Sensor Pintu Pintar memberikan keamanan ekstra untuk rumah Anda dengan deteksi buka/tutup instan dan notifikasi push real-time langsung ke smartphone. Dengan baterai yang tahan hingga 2 tahun, pemasangan tanpa kabel, dan riwayat aktivitas 30 hari, sensor ini mudah dipasang dan ideal untuk memantau pintu utama, jendela, dan area sensitif lainnya.",
            en: "The Smart Door Sensor provides extra security for your home with instant open/close detection and real-time push notifications directly to your smartphone. With battery lasting up to 2 years, wireless installation, and 30-day activity history, this sensor is easy to install and ideal for monitoring main doors, windows, and other sensitive areas.",
          },
          image: "images/product/door.png",
          detail: {
            features: {
              id: [
                "Deteksi buka/tutup instan",
                "Notifikasi push real-time",
                "Baterai tahan 2 tahun",
                "Pemasangan tanpa kabel",
                "Riwayat aktivitas 30 hari",
              ],
              en: [
                "Instant open/close detection",
                "Real-time push notifications",
                "2-year battery life",
                "Wireless installation",
                "30-day activity history",
              ],
            },
            parameters: {
              communicationInterface: { id: "Zigbee 3.0", en: "Zigbee 3.0" },
              powerSupply: { id: "Baterai CR2032", en: "CR2032 Battery" },
              batteryLife: { id: "Hingga 2 tahun", en: "Up to 2 years" },
              detectionRange: { id: "Hingga celah 22mm", en: "Up to 22mm gap" },
              dimensions: { id: "41 x 24 x 11mm", en: "41 x 24 x 11mm" },
              operatingTemperature: { id: "-10°C ~ 55°C", en: "-10°C ~ 55°C" },
            },
          },
        },
        {
          slug: "smart-plug-energy-monitor",
          title: {
            id: "Smart Plug Monitor Energi",
            en: "Smart Plug Energy Monitor",
          },
          description: {
            id: "Colokan pintar dengan pemantauan konsumsi energi real-time dan kontrol suara via Alexa/Google.",
            en: "Smart plug with real-time energy consumption monitoring and voice control via Alexa/Google.",
          },
          description_long: {
            id: "Smart Plug Monitor Energi memungkinkan Anda memantau dan mengontrol konsumsi daya perangkat elektronik secara real-time. Dengan penjadwalan on/off otomatis, kontrol suara via Alexa/Google, laporan konsumsi energi bulanan, dan proteksi beban lebih, colokan pintar ini membantu Anda menghemat listrik dan menjaga keamanan perangkat rumah tangga.",
            en: "The Smart Plug Energy Monitor allows you to monitor and control electronic device power consumption in real-time. With automatic on/off scheduling, voice control via Alexa/Google, monthly energy consumption reports, and overload protection, this smart plug helps you save electricity and maintain household device safety.",
          },
          image: "/images/product/plug.png",
          detail: {
            features: {
              id: [
                "Pemantauan daya real-time",
                "Penjadwalan on/off otomatis",
                "Kontrol suara via Alexa/Google",
                "Laporan konsumsi energi bulanan",
                "Proteksi beban lebih",
              ],
              en: [
                "Real-time power monitoring",
                "Automatic on/off scheduling",
                "Voice control via Alexa/Google",
                "Monthly energy consumption reports",
                "Overload protection",
              ],
            },
            parameters: {
              maxLoad: { id: "16A / 3680W", en: "16A / 3680W" },
              communicationInterface: { id: "WiFi 2.4GHz", en: "WiFi 2.4GHz" },
              powerMeasurement: { id: "Akurasi ±1%", en: "±1% accuracy" },
              dimensions: { id: "55 x 55 x 73mm", en: "55 x 55 x 73mm" },
              certifications: { id: "CE, FCC, RoHS", en: "CE, FCC, RoHS" },
              operatingTemperature: { id: "0°C ~ 40°C", en: "0°C ~ 40°C" },
            },
          },
        },
      ],

      CCTV: [
        {
          slug: "ai-outdoor-camera",
          title: {
            id: "Kamera Outdoor AI",
            en: "AI Outdoor Camera",
          },
          description: {
            id: "Kamera keamanan luar ruangan 4K Ultra HD dengan deteksi manusia dan kendaraan berbasis AI.",
            en: "4K Ultra HD outdoor security camera with AI-based human and vehicle detection.",
          },
          description_long: {
            id: "Kamera Outdoor AI menghadirkan keamanan luar ruangan terdepan dengan resolusi 4K Ultra HD, deteksi manusia dan kendaraan berbasis AI, night vision warna penuh hingga 30 meter, dan ketahanan cuaca IP67. Dengan penyimpanan cloud dan lokal, kamera ini memberikan pemantauan keamanan tanpa kompromi untuk rumah, perkantoran, dan area komersial.",
            en: "The AI Outdoor Camera delivers cutting-edge outdoor security with 4K Ultra HD resolution, AI-based human and vehicle detection, full-color night vision up to 30 meters, and IP67 weather resistance. With cloud and local storage, this camera provides uncompromised security monitoring for homes, offices, and commercial areas.",
          },
          image: "/images/product/cctv.png",
          detail: {
            features: {
              id: [
                "Resolusi 4K Ultra HD",
                "Deteksi manusia & kendaraan AI",
                "Night vision warna penuh",
                "Tahan cuaca IP67",
                "Penyimpanan cloud & lokal",
              ],
              en: [
                "4K Ultra HD resolution",
                "AI human & vehicle detection",
                "Full-color night vision",
                "IP67 weatherproof",
                "Cloud & local storage",
              ],
            },
            parameters: {
              resolution: { id: "3840x2160 (4K)", en: "3840x2160 (4K)" },
              lens: { id: "2,8mm tetap, sudut lebar 110°", en: "2.8mm fixed, 110° wide angle" },
              nightVision: { id: "Warna penuh hingga 30m", en: "Full-color up to 30m" },
              communicationInterface: { id: "Ethernet PoE, WiFi", en: "Ethernet PoE, WiFi" },
              powerSupply: { id: "PoE (802.3af) / DC 12V", en: "PoE (802.3af) / DC 12V" },
              storageSupport: { id: "MicroSD hingga 256GB", en: "MicroSD up to 256GB" },
              operatingTemperature: { id: "-30°C ~ 60°C", en: "-30°C ~ 60°C" },
            },
          },
        },
      ],
    },
  },
];
