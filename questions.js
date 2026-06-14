const quizQuestions = [
    {
        question: "Organel sel yang berfungsi sebagai tempat respirasi sel dan penghasil energi adalah...",
        options: ["A. Mitokondria", "B. Ribosom", "C. Kloroplas", "D. Badan Golgi"],
        answer: 0
    },
    {
        question: "Enzim yang terdapat pada lambung manusia dan berfungsi mengubah protein menjadi pepton adalah...",
        options: ["A. Amilase", "B. Pepsin", "C. Tripsin", "D. Lipase"],
        answer: 1
    },
    {
        question: "Ciri makhluk hidup yang bertujuan untuk mempertahankan jenisnya agar tidak punah adalah...",
        options: ["A. Berkembang biak", "B. Tumbuh dan berkembang", "C. Memerlukan nutrisi", "D. Peka terhadap rangsang"],
        answer: 0
    },
    {
        question: "Padi, jagung, dan rumput dapat dikelompokkan ke dalam satu kelompok karena memiliki ciri...",
        options: ["A. Tulang daun menyirip", "B. Akar tunggang", "C. Batang bercabang", "D. Biji berkeping satu (Monokotil)"],
        answer: 3
    },
    {
        question: "Hubungan antara kerbau dan burung jalak merupakan contoh symbiosis...",
        options: ["A. Parasitisme", "B. Mutualisme", "C. Komensalisme", "D. Amensalisme"],
        answer: 1
    },
    {
        question: "Bagian darah yang berfungsi dalam proses pembekuan darah saat terjadi luka adalah...",
        options: ["A. Sel darah merah", "B. Sel darah putih", "C. Keping darah (Trombosit)", "D. Plasma darah"],
        answer: 2
    },
    {
        question: "Penyakit pada sistem pernapasan yang disebabkan oleh infeksi bakteri Mycobacterium tuberculosis adalah...",
        options: ["A. Asma", "B. TBC", "C. Bronkitis", "D. Influenza"],
        answer: 1
    },
    {
        question: "Proses fotosintesis pada tumbuhan utamanya terjadi di jaringan...",
        options: ["A. Palisade (Tiang)", "B. Epidermis", "C. Xilem", "D. Floem"],
        answer: 0
    },
    {
        question: "Jaringan yang berfungsi mengangkut air dan garam mineral dari akar ke daun adalah...",
        options: ["A. Floem", "B. Xilem", "C. Kambium", "D. Korteks"],
        answer: 1
    },
    {
        question: "Alat ekskresi manusia yang berfungsi menyaring darah dan menghasilkan urine adalah...",
        options: ["A. Hati", "B. Paru-paru", "C. Kulit", "D. Ginjal"],
        answer: 3
    },
    {
        question: "Tempat terjadinya proses fertilisasi (pembuahan sel telur oleh sperma) pada wanita adalah...",
        options: ["A. Uterus", "B. Ovarium", "C. Tuba fallopi (Oviduk)", "D. Vagina"],
        answer: 2
    },
    {
        question: "Hormon yang memicu perkembangan ciri kelamin sekunder pada pria adalah...",
        options: ["A. Estrogen", "B. Progesteron", "C. Testosteron", "D. Insulin"],
        answer: 2
    },
    {
        question: "Urutan jalannya rangsang pada gerak refleks yang benar adalah...",
        options: [
            "A. Reseptor - Saraf Sensorik - Sumsum Tulang Belakang - Saraf Motorik - Efektor",
            "B. Reseptor - Saraf Motorik - Otak - Saraf Sensorik - Efektor",
            "C. Reseptor - Otak - Saraf Motorik - Efektor",
            "D. Efektor - Saraf Sensorik - Otak - Saraf Motorik - Reseptor"
        ],
        answer: 0
    },
    {
        question: "Persilangan antara mawar merah (MM) dengan mawar putih (mm) menghasilkan keturunan mawar merah muda (Mm). Sifat ini disebut...",
        options: ["A. Dominan", "B. Resesif", "C. Intermediet", "D. Kodominan"],
        answer: 2
    },
    {
        question: "Komponen biotik dalam suatu ekosistem contohnya adalah...",
        options: ["A. Air dan batu", "B. Bakteri dan tanaman", "C. Cahaya matahari", "D. Derajat keasaman (pH)"],
        answer: 1
    },
    {
        question: "Zat adiktif yang dapat menyebabkan kecanduan dan ditemukan di dalam daun tembakau adalah...",
        options: ["A. Ganja", "B. Alkohol", "C. Kafein", "D. Nikotin"],
        answer: 3
    },
    {
        question: "Bakteri yang digunakan dalam proses pembuatan yoghurt adalah...",
        options: ["A. Saccharomyces cerevisiae", "B. Rhizopus oryzae", "C. Lactobacillus bulgaricus", "D. Acetobacter xylinum"],
        answer: 2
    },
    {
        question: "Fungsi utama sel darah putih (Leukosit) di dalam tubuh adalah...",
        options: ["A. Mengedarkan oksigen", "B. Melawan kuman penyakit dan infeksi", "C. Membantu pembekuan darah", "D. Mengangkut sari makanan"],
        answer: 1
    },
    {
        question: "Bagian jantung yang berfungsi memompa darah bersih ke seluruh tubuh adalah...",
        options: ["A. Serambi kanan", "B. Bilik kanan", "C. Serambi kiri", "D. Bilik kiri"],
        answer: 3
    },
    {
        question: "Pencernaan mekanik di dalam saluran pencernaan manusia terjadi di...",
        options: ["A. Mulut dan lambung", "B. Lambung dan usus halus", "C. Kerongkongan saja", "D. Usus besar"],
        answer: 0
    },
    {
        question: "Penyakit osteoporosis disebabkan karena tubuh kekurangan...",
        options: ["A. Vitamin C", "B. Zat besi", "C. Kalsium dan Vitamin D", "D. Vitamin A"],
        answer: 2
    },
    {
        question: "Alat pernapasan pada tumbuhan yang terletak di permukaan daun disebut...",
        options: ["A. Stomata", "B. Lentisel", "C. Trikom", "D. Kutikula"],
        answer: 0
    },
    {
        question: "Hewan yang mengalami metamorfosis sempurna dalam siklus hidupnya adalah...",
        options: ["A. Belalang", "B. Kupu-kupu", "C. Kecoak", "D. Jangkrik"],
        answer: 1
    },
    {
        question: "Zat sisa metabolisme yang diekskresikan oleh organ paru-paru adalah...",
        options: ["A. Urine", "B. Keringat", "C. Empedu", "D. Karbondioksida dan uap air"],
        answer: 3
    },
    {
        question: "Sifat kromosom sel tubuh (somatis) manusia adalah...",
        options: ["A. Haploid (n)", "B. Diploid (2n)", "C. Triploid (3n)", "D. Poliploid"],
        answer: 1
    },
    {
        question: "Pemberian vaksin bertujuan untuk...",
        options: ["A. Mengobati penyakit kronis", "B. Memicu pembentukan antibodi tubuh", "C. Membunuh bakteri secara langsung", "D. Menambah stamina fisik"],
        answer: 1
    },
    {
        question: "Jamur tidak dapat digolongkan ke dalam dunia tumbuhan karena...",
        options: ["A. Tidak memiliki dinding sel", "B. Bergerak aktif", "C. Tidak memiliki klorofil", "D. Bersifat prokariotik"],
        answer: 2
    },
    {
        question: "Teknologi reproduksi tumbuhan dengan cara menumbuhkan jaringan tumbuhan dalam medium buatan yang steril disebut...",
        options: ["A. Hidroponik", "B. Kultur jaringan", "C. Vertikultur", "D. Inseminasi buatan"],
        answer: 1
    },
    {
        question: "Organ manusia yang berfungsi menawarkan racun yang masuk ke dalam tubuh adalah...",
        options: ["A. Lambung", "B. Ginjal", "C. Hati", "D. Jantung"],
        answer: 2
    },
    {
        question: "Kelompok hewan vertebrata yang menyusui anaknya dikelompokkan dalam kelas...",
        options: ["A. Aves", "B. Reptilia", "C. Amphibia", "D. Mamalia"],
        answer: 3
    },
    {
        question: "Ciri utama dari sel prokariotik adalah...",
        options: ["A. Tidak memiliki membran inti", "B. Tidak memiliki dinding sel", "C. Memiliki banyak mitokondria", "D. Ukuran sel sangat besar"],
        answer: 0
    },
    {
        question: "Berikut ini yang merupakan contoh penyerbukan oleh angin (anemogami) adalah pada tanaman...",
        options: ["A. Mawar", "B. Padi dan jagung", "C. Anggrek", "D. Vanili"],
        answer: 1
    },
    {
        question: "Penyakit anemia terjadi karena tubuh kekurangan...",
        options: ["A. Sel darah putih", "B. Kalsium", "C. Hemoglobin atau sel darah merah", "D. Yodium"],
        answer: 2
    },
    {
        question: "Bagian mata yang berfungsi mengatur jumlah cahaya yang masuk ke dalam mata adalah...",
        options: ["A. Iris dan Pupil", "B. Retina", "C. Kornea", "D. Lensa mata"],
        answer: 0
    },
    {
        question: "Pembuluh darah yang mengalirkan darah keluar dari jantung dinamakan...",
        options: ["A. Pembuluh balik (Vena)", "B. Pembuluh nadi (Arteri)", "C. Kapiler", "D. Venula"],
        answer: 1
    },
    {
        question: "Zat hijau daun yang berperan penting dalam menangkap cahaya saat fotosintesis adalah...",
        options: ["A. Karoten", "B. Xanthofil", "C. Klorofil", "D. Antosianin"],
        answer: 2
    },
    {
        question: "Hewan yang berkembang biak dengan cara bertelur sekaligus melahirkan (ovovivipar) adalah...",
        options: ["A. Ayam dan bebek", "B. Kucing dan sapi", "C. Paus dan lumba-lumba", "D. Sebagian jenis hiu dan kadal"],
        answer: 3
    },
    {
        question: "Di dalam ekosistem sawah, jika populasi katak menurun drastis, dampak langsung yang terjadi adalah...",
        options: ["A. Populasi padi meningkat", "B. Populasi belalang meningkat", "C. Populasi ular meningkat", "D. Elang punah"],
        answer: 1
    },
    {
        question: "Bagian sel tumbuhan yang menjaga struktur sel agar tetap kokoh dan kaku adalah...",
        options: ["A. Membran sel", "B. Dinding sel", "C. Sitoplasma", "D. Vakuola"],
        answer: 1
    },
    {
        question: "Organ pencernaan yang berfungsi menyerap air dari sisa-sisa makanan adalah...",
        options: ["A. Lambung", "B. Usus halus", "C. Usus besar", "D. Kerongkongan"],
        answer: 2
    },
    {
        question: "Suhu tubuh manusia yang normal dipertahankan konstan melalui mekanisme...",
        options: ["A. Homeostasis", "B. Fotosintesis", "C. Metamorfosis", "D. Fermentasi"],
        answer: 0
    },
    {
        question: "Penyakit gondok disebabkan karena tubuh kekurangan asupan mineral berupa...",
        options: ["A. Zat besi", "B. Kalsium", "C. Fosfor", "D. Yodium"],
        answer: 3
    },
    {
        question: "Perubahan struktur DNA atau materi genetik yang dapat diturunkan kepada generasi berikutnya disebut...",
        options: ["A. Modifikasi", "B. Mutasi", "C. Mitosis", "D. Meiosis"],
        answer: 1
    },
    {
        question: "Jenis pembelahan sel yang menghasilkan sel anakan dengan jumlah kromosom setengah dari sel induknya adalah...",
        options: ["A. Mitosis", "B. Meiosis", "C. Amitosis", "D. Fragmentasi"],
        answer: 1
    },
    {
        question: "Gas yang dihasilkan dari proses fotosintesis dan sangat dibutuhkan oleh manusia adalah...",
        options: ["A. Karbondioksida", "B. Nitrogen", "C. Oksigen", "D. Hidrogen"],
        answer: 2
    },
    {
        question: "Bagian saraf neuron yang berfungsi menghantarkan impuls keluar dari badan sel saraf menuju neuron lain adalah...",
        options: ["A. Dendrit", "B. Akson (Neurit)", "C. Sinapsis", "D. Selubung mielin"],
        answer: 1
    },
    {
        question: "Bioteknologi konvensional yang memanfaatkan jamur Rhizopus oryzae digunakan untuk membuat...",
        options: ["A. Tempe", "B. Tahu", "C. Keju", "D. Kecap"],
        answer: 0
    },
    {
        question: "Kelompok tumbuhan yang bijinya tidak ditutupi oleh daging buah dinamakan...",
        options: ["A. Angiospermae", "B. Gymnospermae", "C. Bryophyta", "D. Pteridophyta"],
        answer: 1
    },
    {
        question: "Interaksi antara tanaman anggrek yang menempel pada pohon mangga termasuk ke dalam simbiosis...",
        options: ["A. Mutualisme", "B. Parasitisme", "C. Komensalisme", "D. Amensalisme"],
        answer: 2
    },
    {
        question: "Penyakit diabetes melitus terjadi akibat tubuh kekurangan hormon...",
        options: ["A. Adrenalin", "B. Tiroksin", "C. Insulin", "D. Estrogen"],
        answer: 2
    }
];
