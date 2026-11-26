// =============================================================================
// DATA TANAMAN - data/plants.js
// =============================================================================
//
// CARA MENGEDIT TEKS:
//   Edit langsung nilai string di bawah ini. Pastikan tanda koma dan tanda
//   kutip tetap benar setelah diedit.
//
// CARA MENAMBAH TANAMAN:
//   1. Salin satu blok objek { slug, namaLokal, ... } beserta koma penutupnya.
//   2. Tempel di akhir array plants (sebelum kurung tutup ']').
//   3. Ganti slug dengan nama unik, huruf kecil, tanpa spasi (pakai tanda hubung),
//      misalnya: "lidah-buaya", "sambiloto", "jahe-putih".
//   4. Isi semua field dengan data yang benar.
//
// CARA MENGGANTI FOTO:
//   1. Taruh file JPG di public/plants/ dengan nama sesuai slug,
//      misalnya: public/plants/lidah-buaya.jpg
//   2. Isi field "foto" dengan path: "/plants/lidah-buaya.jpg"
//   3. Kosongkan ("") jika foto belum tersedia – otomatis tampil maskot.
//
// =============================================================================

export const site = {
  event: "Kampung Binaan Mahasiswa X",
  title: "Cultivare",
  tagline: "Katalog Tanaman Herbal",
};

export const plants = [
  // ─── 1. KUNYIT ───────────────────────────────────────────────────────────────
  {
    slug: "kunyit",
    namaLokal: "Kunyit",
    namaIlmiah: "Curcuma longa",
    famili: "Zingiberaceae",
    foto: "/plants/kunyit.jpg",
    kreditFoto: "Foto: Simon A. Eugster / Wikimedia Commons, CC BY-SA 3.0",
    deskripsi:
      "Kunyit adalah tanaman rempah-rempah tropis yang dikenal luas di Asia Selatan dan Asia Tenggara. Rimpangnya berwarna oranye terang yang khas berasal dari senyawa kurkumin. Selain sebagai bumbu masak, kunyit sudah lama dimanfaatkan dalam pengobatan tradisional berbagai budaya.",
    ciriKhas: [
      "Rimpang berwarna oranye terang hingga kuning-oranye di dalam",
      "Daun lebar panjang dengan pelepah membentuk batang semu",
      "Bunga berbentuk kerucut berwarna kuning-putih pucat",
      "Aroma khas hangat sedikit pahit saat rimpang dipatahkan",
    ],
    manfaat: [
      "Mengandung kurkumin yang bersifat antioksidan tinggi",
      "Secara tradisional digunakan untuk mendukung kesehatan pencernaan",
      "Membantu meredakan rasa tidak nyaman pada perut",
      "Digunakan sebagai pewarna alami pada masakan dan kain",
      "Berperan dalam perawatan kecantikan kulit secara alami",
    ],
    khasiat: [
      "Secara tradisional diminum sebagai jamu kunyit-asam untuk meredakan nyeri haid",
      "Digunakan sebagai bahan boreh (lulur) dalam perawatan tubuh tradisional Jawa",
      "Secara turun-temurun dipakai untuk membantu mengurangi kembung dan maag ringan",
      "Dioleskan sebagai masker kunyit untuk membantu mencerahkan kulit",
    ],
    bisaDibuat: [
      "Jamu kunyit asam (direbus dengan asam jawa dan gula jawa)",
      "Wedang kunyit hangat untuk minuman malam",
      "Bumbu kuning untuk nasi kuning, opor, dan gulai",
      "Masker wajah kunyit campur madu untuk perawatan kulit",
      "Pewarna alami pada kain batik dan olahan makanan",
      "Kunyit instan serbuk untuk minuman praktis",
    ],
    perawatan: {
      cahaya: "Butuh sinar matahari penuh atau sebagian – minimal 4–6 jam per hari.",
      penyiraman: "Siram 2 kali sehari saat musim kemarau; pastikan tanah lembap tapi tidak tergenang.",
      media: "Tanah gembur, subur, dan berdrainase baik. Campurkan pupuk kandang atau kompos.",
      tips: "Panen rimpang setelah 8–10 bulan atau ketika daun mulai menguning. Sisakan sebagian rimpang di tanah agar tumbuh kembali musim berikutnya.",
    },
    catatan:
      "Konsumsi kunyit dalam jumlah besar sebaiknya dihindari oleh penderita gangguan empedu atau batu empedu. Kunyit dapat berinteraksi dengan obat pengencer darah. Ibu hamil disarankan berkonsultasi dengan dokter sebelum mengonsumsi suplemen kunyit dosis tinggi.",
  },

  // ─── 2. JAHE MERAH ───────────────────────────────────────────────────────────
  {
    slug: "jahe-merah",
    namaLokal: "Jahe Merah",
    namaIlmiah: "Zingiber officinale var. rubrum",
    famili: "Zingiberaceae",
    foto: "/plants/jahe-merah.jpg",
    kreditFoto: "Foto: Mk2010 / Wikimedia Commons, CC BY-SA 4.0",
    deskripsi:
      "Jahe Merah adalah varietas jahe dengan rimpang kecil berkulit kemerahan dan kandungan minyak atsiri lebih tinggi dibanding jahe biasa. Rasanya lebih pedas dan aromanya lebih tajam. Di Indonesia, jahe merah banyak dipakai dalam ramuan herbal karena dipercaya memiliki khasiat yang lebih kuat.",
    ciriKhas: [
      "Rimpang kecil-kecil dengan kulit berwarna kemerahan atau merah muda",
      "Rasa lebih pedas dan aroma lebih menyengat dibanding jahe putih",
      "Kandungan minyak atsiri (gingerol, shogaol) lebih tinggi",
      "Ukuran rimpang lebih kecil dan lebih padat dibanding jahe gajah",
    ],
    manfaat: [
      "Membantu menghangatkan tubuh dan meredakan masuk angin",
      "Secara tradisional digunakan untuk meredakan mual dan gangguan perut",
      "Mengandung gingerol dan shogaol yang bersifat antioksidan",
      "Membantu meningkatkan nafsu makan",
      "Digunakan dalam formulasi herbal untuk daya tahan tubuh",
    ],
    khasiat: [
      "Secara tradisional diminum sebagai wedang jahe untuk menghangatkan tubuh saat cuaca dingin",
      "Digunakan dalam ramuan herbal untuk membantu meringankan gejala masuk angin",
      "Secara turun-temurun digunakan untuk meredakan mual perjalanan",
      "Dioleskan bersama minyak zaitun sebagai balsem penghangat otot pegal",
    ],
    bisaDibuat: [
      "Wedang jahe merah dengan sereh dan cengkeh",
      "Jahe merah instan atau serbuk minuman herbal",
      "Campuran dalam jamu beras kencur atau kunyit asam",
      "Bahan dasar sirup jahe merah",
      "Permen jahe atau manisan jahe",
      "Minyak gosok herbal campuran minyak kelapa dan jahe merah parut",
    ],
    perawatan: {
      cahaya: "Cocok di tempat teduh sebagian – hindari paparan matahari langsung penuh di siang hari.",
      penyiraman: "Siram secara teratur agar tanah selalu lembap; kurangi penyiraman saat musim hujan.",
      media: "Tanah gembur dan kaya humus. Tambahkan sekam bakar untuk drainase optimal.",
      tips: "Tanam rimpang secara horizontal dengan bagian mata tunas menghadap ke atas. Panen dilakukan setelah 10–12 bulan.",
    },
    catatan:
      "Konsumsi berlebihan jahe merah dapat menyebabkan iritasi pada lambung, terutama bagi penderita tukak lambung atau maag berat. Jahe dapat berinteraksi dengan obat pengencer darah. Ibu hamil trimester pertama sebaiknya berkonsultasi dengan dokter sebelum mengonsumsi dalam jumlah banyak.",
  },

  // ─── 3. SERAI ────────────────────────────────────────────────────────────────
  {
    slug: "serai",
    namaLokal: "Serai",
    namaIlmiah: "Cymbopogon citratus",
    famili: "Poaceae",
    foto: "/plants/serai.jpg",
    kreditFoto: "Foto: Mokkie / Wikimedia Commons, CC BY-SA 4.0",
    deskripsi:
      "Serai atau sereh adalah tanaman rumput aromatik yang sangat populer di masakan Asia Tenggara. Bagian pangkal batangnya yang berwarna putih-hijau digunakan sebagai bumbu masak, sedangkan daunnya dapat dibuat menjadi teh herbal. Aroma segarnya berasal dari senyawa sitral yang terkandung dalam minyak atsirinya.",
    ciriKhas: [
      "Tumbuh membentuk rumpun rumput dengan daun panjang dan tipis",
      "Pangkal batang menggembung berwarna putih-hijau pucat",
      "Aroma segar seperti lemon yang khas saat daun diremas",
      "Tepi daun tajam (bisa melukai tangan jika dipegang sembarangan)",
    ],
    manfaat: [
      "Mengandung sitral yang bersifat antibakteri dan antijamur alami",
      "Secara tradisional digunakan untuk membantu meredakan kembung",
      "Aroma minyak atsirinya dapat membantu mengusir serangga",
      "Membantu memberikan efek relaksasi saat digunakan sebagai aromaterapi",
      "Kaya antioksidan dan senyawa flavonoid",
    ],
    khasiat: [
      "Secara tradisional direbus dan diminum untuk membantu mengatasi perut kembung dan mual",
      "Air rebusan serai digunakan untuk membantu meredakan demam ringan",
      "Daunnya dipakai dalam mandi herbal untuk menyegarkan tubuh",
      "Secara tradisional digunakan sebagai repelen alami untuk mengusir nyamuk",
    ],
    bisaDibuat: [
      "Teh serai (seduh daun atau batang yang dimemarkan)",
      "Bumbu rendaman daging, ayam, dan ikan panggang",
      "Bahan dalam minuman wedang sereh jahe",
      "Minyak esensial serai untuk aromaterapi (proses destilasi)",
      "Isian potpourri atau pengharum ruangan alami",
      "Campuran dalam sabun dan losion herbal alami",
    ],
    perawatan: {
      cahaya: "Butuh sinar matahari penuh sepanjang hari – minimal 6 jam paparan langsung.",
      penyiraman: "Siram 1–2 kali sehari; tahan kekeringan singkat namun tumbuh lebih subur dengan kelembapan cukup.",
      media: "Hampir semua jenis tanah cocok asal berdrainase baik. Tidak perlu pupuk berlebih.",
      tips: "Panen dengan memotong pangkal batang setinggi 5–10 cm dari tanah agar rumpun terus tumbuh. Pisahkan anakan untuk memperbanyak tanaman.",
    },
    catatan:
      "Minyak atsiri serai murni tidak disarankan langsung dioleskan ke kulit tanpa diencerkan terlebih dahulu karena dapat menyebabkan iritasi. Encerkan dengan minyak pembawa (minyak kelapa atau zaitun) sebelum digunakan topikal. Konsultasikan dengan dokter jika digunakan bersamaan dengan obat-obatan tertentu.",
  },

  // ─── 4. TEMULAWAK ────────────────────────────────────────────────────────────
  {
    slug: "temulawak",
    namaLokal: "Temulawak",
    namaIlmiah: "Curcuma zanthorrhiza",
    famili: "Zingiberaceae",
    foto: "/plants/temulawak.jpg",
    kreditFoto: "Foto: Herusutimbul / Wikimedia Commons, CC BY-SA 4.0",
    deskripsi:
      "Temulawak adalah tanaman rempah asli Indonesia yang telah lama digunakan dalam pengobatan tradisional Jawa. Rimpangnya besar berwarna kuning tua hingga jingga di dalam, dengan kandungan kurkuminoid dan xanthorrhizol yang khas. Tanaman ini dikenal sebagai salah satu tanaman obat asli Indonesia.",
    ciriKhas: [
      "Rimpang besar dan beruas-ruas berwarna kuning tua-jingga di dalam",
      "Daun lebar dengan garis ungu kemerahan di sepanjang ibu tulang daun",
      "Bunga berbentuk kerucut dengan mahkota berwarna putih-kuning pucat",
      "Aroma rimpang kuat dan khas, sedikit pahit",
    ],
    manfaat: [
      "Mengandung kurkuminoid dan xanthorrhizol yang bersifat antioksidan",
      "Secara tradisional dikenal untuk mendukung kesehatan hati (liver)",
      "Membantu mendukung fungsi pencernaan dan meredakan perut kembung",
      "Membantu meningkatkan nafsu makan, terutama pada anak-anak",
      "Digunakan dalam formulasi jamu tradisional untuk daya tahan tubuh",
    ],
    khasiat: [
      "Secara tradisional direbus dan diminum untuk membantu mendukung fungsi liver",
      "Jamu temulawak digunakan turun-temurun untuk meningkatkan nafsu makan",
      "Air rebusan temulawak secara tradisional diminum untuk membantu meredakan nyeri sendi",
      "Digunakan dalam ramuan herbal untuk membantu memulihkan kondisi setelah sakit",
    ],
    bisaDibuat: [
      "Jamu temulawak (direbus dengan gula dan sedikit kayu manis)",
      "Temulawak instan atau minuman herbal siap saji",
      "Campuran dalam minuman kunyit-temulawak",
      "Bahan dalam produk suplemen herbal tradisional",
      "Bubuk temulawak untuk campuran minuman atau masakan",
      "Wedang temulawak hangat dengan jahe dan kayu manis",
    ],
    perawatan: {
      cahaya: "Cocok di tempat teduh sebagian hingga terkena matahari penuh – toleran terhadap naungan ringan.",
      penyiraman: "Siram 1–2 kali sehari; pastikan tanah selalu lembap. Kurangi penyiraman saat awal masa dormansi.",
      media: "Tanah subur, gembur, dan kaya bahan organik. Campurkan kompos dan pasir untuk drainase baik.",
      tips: "Panen rimpang setelah 9–12 bulan saat tanaman mulai layu. Jemur irisan rimpang di bawah sinar matahari untuk membuat simplisia kering.",
    },
    catatan:
      "Penderita batu empedu atau gangguan saluran empedu sebaiknya berkonsultasi dengan dokter sebelum mengonsumsi temulawak dalam jumlah besar. Ibu hamil dan menyusui sebaiknya menghindari konsumsi suplemen temulawak dosis tinggi. Gunakan dalam batas wajar sebagaimana umumnya dikonsumsi sebagai minuman.",
  },
];
