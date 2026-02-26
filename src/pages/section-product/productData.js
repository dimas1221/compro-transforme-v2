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
            id: "Menggabungkan algoritma AI untuk keamanan biometrik tingkat tinggi.",
            en: "Combining AI algorithms for ultra-high biometric security.",
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
              accuracy: "Rejection rate <0.4% | False positive rate <0.01%",
              operatingSystem: "Windows, Linux, Android",
              communicationInterface: "USB 2.0, Type-C",
              powerSupply: "USB 5V, Max input current 500mA",
              powerConsumption: "<2W",
              operatingTemperature: "-10°C ~ 55°C",
              workingHumidity: "20%RH ~ 90%RH",
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
            id: "Identifikasi presisi tinggi dengan iris dan wajah.",
            en: "High precision identification using iris and face.",
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
              accuracy: "High precision iris & face recognition",
              operatingSystem: "Windows, Linux",
              communicationInterface: "USB, Ethernet",
              powerSupply: "DC 12V",
              powerConsumption: "<5W",
              operatingTemperature: "-5°C ~ 50°C",
              workingHumidity: "20%RH ~ 85%RH",
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
            id: "Pengenalan wajah cepat dan aman.",
            en: "Fast and secure face recognition.",
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
              accuracy: "High accuracy facial recognition",
              operatingSystem: "Linux, Android",
              communicationInterface: "USB, WiFi",
              powerSupply: "USB 5V",
              powerConsumption: "<3W",
              operatingTemperature: "0°C ~ 50°C",
              workingHumidity: "20%RH ~ 90%RH",
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
            id: "Kontrol akses berbasis AI.",
            en: "AI-powered access control system.",
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
              accuracy: "AI-based adaptive recognition",
              operatingSystem: "Windows, Linux",
              communicationInterface: "Ethernet, WiFi",
              powerSupply: "DC 12V",
              powerConsumption: "<10W",
              operatingTemperature: "-10°C ~ 55°C",
              workingHumidity: "10%RH ~ 90%RH",
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
            id: "Modul asisten suara pintar dengan pemrosesan bahasa alami.",
            en: "Smart voice assistant module with natural language processing.",
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
              accuracy: "Voice recognition accuracy >95%",
              operatingSystem: "Linux, Android",
              communicationInterface: "WiFi, Bluetooth 5.0",
              powerSupply: "USB 5V",
              powerConsumption: "<3W",
              operatingTemperature: "0°C ~ 45°C",
              workingHumidity: "20%RH ~ 80%RH",
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
            id: "Kunci pintu pintar dengan sensor sidik jari AI presisi tinggi.",
            en: "Smart door lock with high-precision AI fingerprint sensor.",
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
              accuracy: "FAR <0.002% | FRR <0.5%",
              operatingSystem: "Embedded RTOS",
              communicationInterface: "Bluetooth 5.0, NFC",
              powerSupply: "4x AA Batteries",
              powerConsumption: "<1W standby",
              operatingTemperature: "-20°C ~ 60°C",
              workingHumidity: "20%RH ~ 95%RH",
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
            id: "Sistem parkir otomatis dengan pengenalan plat nomor berbasis AI.",
            en: "Automated parking system with AI-based license plate recognition.",
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
              accuracy: "LPR accuracy >98%",
              operatingSystem: "Linux",
              communicationInterface: "Ethernet, WiFi, 4G",
              powerSupply: "DC 12V / 3A",
              powerConsumption: "<20W",
              operatingTemperature: "-20°C ~ 60°C",
              workingHumidity: "10%RH ~ 95%RH",
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
            id: "Sistem manajemen pengunjung cerdas dengan registrasi mandiri.",
            en: "Smart visitor management system with self-registration.",
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
              accuracy: "Face recognition >99%",
              operatingSystem: "Android 10",
              communicationInterface: "WiFi, Ethernet",
              powerSupply: "DC 12V / 2A",
              powerConsumption: "<12W",
              operatingTemperature: "0°C ~ 45°C",
              workingHumidity: "20%RH ~ 85%RH",
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
            id: "Jam tangan pintar dengan pemantauan kesehatan berbasis AI.",
            en: "Smart watch with AI-powered health monitoring.",
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
              display: '1.43" AMOLED 466x466',
              battery: "Up to 14 days",
              connectivity: "Bluetooth 5.2, WiFi",
              sensors: "Heart rate, SpO2, Accelerometer, Gyroscope",
              waterResistance: "5ATM",
              operatingTemperature: "-10°C ~ 50°C",
              weight: "36g (without strap)",
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
            id: "Smartwatch premium dengan GPS ganda dan layar AMOLED.",
            en: "Premium smartwatch with dual GPS and AMOLED display.",
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
              display: '1.39" AMOLED 454x454',
              battery: "Up to 21 days",
              connectivity: "Bluetooth 5.0, WiFi, NFC",
              sensors: "Barometer, Compass, Heart rate, SpO2",
              waterResistance: "10ATM",
              operatingTemperature: "-20°C ~ 55°C",
              weight: "52g (without strap)",
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
            id: "Jam tangan pintar untuk anak dengan pelacakan lokasi real-time.",
            en: "Kids smart watch with real-time location tracking.",
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
              display: '1.4" IPS Touch Screen',
              battery: "Up to 3 days",
              connectivity: "4G LTE, WiFi, GPS",
              sensors: "Accelerometer, Proximity",
              waterResistance: "IP67",
              operatingTemperature: "0°C ~ 45°C",
              weight: "42g",
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
            id: "Gelang kebugaran pintar dengan analisis olahraga berbasis AI.",
            en: "Smart fitness band with AI-powered workout analysis.",
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
              display: '1.47" AMOLED 194x368',
              battery: "Up to 18 days",
              connectivity: "Bluetooth 5.1",
              sensors: "Heart rate, SpO2, Accelerometer",
              waterResistance: "5ATM",
              operatingTemperature: "-10°C ~ 45°C",
              weight: "24g",
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
            id: "Jam tangan tangguh untuk petualangan luar ruangan dengan standar militer.",
            en: "Military-grade rugged smartwatch built for outdoor adventures.",
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
              display: '1.4" MIP always-on',
              battery: "Up to 24 days (solar)",
              connectivity: "Bluetooth 5.0, ANT+, WiFi",
              sensors: "ABC sensor, Heart rate, SpO2, Thermometer",
              waterResistance: "10ATM",
              operatingTemperature: "-30°C ~ 60°C",
              weight: "68g",
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
            id: "Pusat kendali perangkat IoT di rumah Anda.",
            en: "Central control for all IoT devices in your home.",
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
              operatingSystem: "Linux",
              communicationInterface: "WiFi, Zigbee, Bluetooth",
              powerSupply: "DC 5V",
              powerConsumption: "<5W",
              operatingTemperature: "0°C ~ 45°C",
              workingHumidity: "20%RH ~ 85%RH",
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
            id: "Sistem pencahayaan pintar yang dapat dikendalikan via aplikasi.",
            en: "Smart lighting system controllable via mobile app.",
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
              wattage: "9W LED (equivalent 60W)",
              colorTemp: "2700K ~ 6500K",
              communicationInterface: "WiFi 2.4GHz, Bluetooth Mesh",
              powerSupply: "AC 100-240V",
              lifespan: "25,000 hours",
              operatingTemperature: "-10°C ~ 40°C",
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
            id: "Termostat cerdas yang mempelajari kebiasaan Anda untuk efisiensi energi.",
            en: "Intelligent thermostat that learns your habits for energy efficiency.",
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
              display: '3.5" E-Ink Touch',
              communicationInterface: "WiFi 2.4GHz, Zigbee 3.0",
              powerSupply: "24V AC / Battery backup",
              sensors: "Temperature, Humidity, Proximity, Ambient light",
              powerConsumption: "<2W",
              operatingTemperature: "0°C ~ 50°C",
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
            id: "Sensor pintu dan jendela pintar dengan notifikasi instan.",
            en: "Smart door and window sensor with instant notification.",
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
              communicationInterface: "Zigbee 3.0",
              powerSupply: "CR2032 Battery",
              batteryLife: "Up to 2 years",
              detectionRange: "Up to 22mm gap",
              dimensions: "41 x 24 x 11mm",
              operatingTemperature: "-10°C ~ 55°C",
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
            id: "Colokan pintar dengan pemantauan konsumsi energi real-time.",
            en: "Smart plug with real-time energy consumption monitoring.",
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
              maxLoad: "16A / 3680W",
              communicationInterface: "WiFi 2.4GHz",
              powerMeasurement: "±1% accuracy",
              dimensions: "55 x 55 x 73mm",
              certifications: "CE, FCC, RoHS",
              operatingTemperature: "0°C ~ 40°C",
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
            id: "Kamera keamanan luar ruangan dengan deteksi objek berbasis AI.",
            en: "Outdoor security camera with AI-based object detection.",
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
              resolution: "3840x2160 (4K)",
              lens: "2.8mm fixed, 110° wide angle",
              nightVision: "Full-color up to 30m",
              communicationInterface: "Ethernet PoE, WiFi",
              powerSupply: "PoE (802.3af) / DC 12V",
              storageSupport: "MicroSD up to 256GB",
              operatingTemperature: "-30°C ~ 60°C",
            },
          },
        },
      ],
    },
  },
];
