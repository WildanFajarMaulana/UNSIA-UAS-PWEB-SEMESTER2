export const dataQuiz = [
  {
    id: 1,
    title: "Quiz Pemrograman Web",
    soal: [
      {
        id: 1,
        text: "Apa tag yang benar untuk membuat teks menjadi bold?",
        pilihan_jawaban: [
          { id: 1, abjad: "A", text: "<i></i>" },
          { id: 2, abjad: "B", text: "<b></b>" },
          { id: 3, abjad: "C", text: "<p></p>" },
          { id: 4, abjad: "D", text: "<span></span>" },
        ],
        jawaban_benar: 2,
      },
      {
        id: 2,
        text: "Apa tag yang benar untuk memformat teks menjadi italic?",
        pilihan_jawaban: [
          { id: 1, abjad: "A", text: "<i></i>" },
          { id: 2, abjad: "B", text: "<b></b>" },
          { id: 3, abjad: "C", text: "<em></em>" },
          { id: 4, abjad: "D", text: "<span></span>" },
        ],
        jawaban_benar: 3,
      },
      {
        id: 3,
        text: "Apa fungsi dari tag <img> dalam HTML?",
        pilihan_jawaban: [
          { id: 1, abjad: "A", text: "Menambahkan gambar" },
          { id: 2, abjad: "B", text: "Membuat link" },
          { id: 3, abjad: "C", text: "Membuat judul" },
          { id: 4, abjad: "D", text: "Membuat paragraf" },
        ],
        jawaban_benar: 1,
      },
      {
        id: 4,
        text: "Apa kepanjangan dari CSS?",
        pilihan_jawaban: [
          { id: 1, abjad: "A", text: "Computer Style Sheets" },
          { id: 2, abjad: "B", text: "Cascading Style Sheets" },
          { id: 3, abjad: "C", text: "Colorful Style Sheets" },
          { id: 4, abjad: "D", text: "Creative Style Sheets" },
        ],
        jawaban_benar: 2,
      },
    ],
  },
  {
    id: 2,
    title: "Quiz Bahasa Pemrograman",
    soal: [
      {
        id: 1,
        text: "Bahasa pemrograman apa yang digunakan untuk membuat halaman web interaktif?",
        pilihan_jawaban: [
          { id: 1, abjad: "A", text: "Python" },
          { id: 2, abjad: "B", text: "JavaScript" },
          { id: 3, abjad: "C", text: "Java" },
          { id: 4, abjad: "D", text: "C++" },
        ],
        jawaban_benar: 2,
      },
      {
        id: 2,
        text: "Manakah di antara berikut ini merupakan framework JavaScript?",
        pilihan_jawaban: [
          { id: 1, abjad: "A", text: "React" },
          { id: 2, abjad: "B", text: "Django" },
          { id: 3, abjad: "C", text: "Flask" },
          { id: 4, abjad: "D", text: "Vue" },
        ],
        jawaban_benar: 1,
      },
      {
        id: 3,
        text: "Variabel dalam JavaScript dideklarasikan dengan kata kunci apa?",
        pilihan_jawaban: [
          { id: 1, abjad: "A", text: "let" },
          { id: 2, abjad: "B", text: "var" },
          { id: 3, abjad: "C", text: "const" },
          { id: 4, abjad: "D", text: "int" },
        ],
        jawaban_benar: 1,
      },
      {
        id: 4,
        text: "Apa itu JSON?",
        pilihan_jawaban: [
          { id: 1, abjad: "A", text: "Java Script Object Notation" },
          { id: 2, abjad: "B", text: "Java Script Online Network" },
          { id: 3, abjad: "C", text: "Just Some Ordinary Notes" },
          { id: 4, abjad: "D", text: "Java Serialized Object Notation" },
        ],
        jawaban_benar: 1,
      },
    ],
  },
];

export const dataModule = [
  {},
  {},
  // Add more modules here as needed
];

export const dataListModule = [
  {
    id: 1,
    url: "/html-dasar",
    videoUrl: "https://www.youtube.com/watch?v=NBZ9Ro6UKV8",
    title: "Module 1: Pengantar Pemrograman Web Dasar",
    description: "Website di era sekarang sudah menjadi kebutuhan utama yang tidak bisa diabaikan. Seluruh sektor bisnis atau edukasi dapat memanfaatkan website sebagai alat untuk promosi, tukar informasi, dan lainnya. Berdasarkan data dari World Wide Web Technology Surveys, dari seluruh website yang aktif, 88.2% menggunakan HTML dan 95.6% menggunakan CSS. Kelas ini membahas tuntas mengenai HTML dan CSS sebagai fondasi dalam pembuatan website.Web merupakan platform yang dapat diakses melalui banyak macam perangkat. Hal ini menjadi keuntungan jika Anda mengembangkan aplikasi berbasis web.Pengembangan web tidak membutuhkan komputer/laptop yang memiliki spesifikasi tinggi sehingga bukan menjadi hambatan utama bagi Anda yang tidak memiliki perangkat yang mumpuni. Website adalah platform yang dijangkau oleh banyak Search Engine seperti Google Search sehingga sangat cocok sebagai media promosi bisnis atau konten. Mengembangkan website termasuk pengembangan yang mudah di-maintenance dan mudah untuk dipublikasi.",
    audioUrl: "https://example.com/audio1.mp3",
  },
  {
    id: 2,
    url: "/css-dasar",
    videoUrl: "https://www.youtube.com/watch?v=CleFk3BZB3g",
    title: "Module 2: Pengenalan Dasar CSS",
    description: "Setelah belajar HTML, bahasa berikutnya yang harus kita pelajari agar menjadi web developer adalah CSS. Pemahaman tentang CSS sangat penting, jika kamu ingin fokus pada front-end web development. Kalau back-end, yaa sekedar tahu aja sudah cukup. Tugas front-end developer biasanya akan membuat halaman web berdasarkan desain dari desainer.",
    audioUrl: "https://example.com/audio2.mp3",
  },
  {
    id: 3,
    url: "/javascript-dasar",
    videoUrl: "https://www.youtube.com/watch?v=RUTV_5m4VeI",
    title: "Module 3: Dasar Pemrograman dengan Javascript",
    description: "JavaScript adalah bahasa pemrograman yang digunakan untuk pengembangan website agar lebih dinamis. Ibarat kata, JavaScript memberikan “kehidupan” dalam website sehingga terciptanya interaksi antara pengunjung dengan situs tersebut. Website dinamis yang dimaksud berarti konten di dalamnya dapat bergerak atau mengubah apapun yang tampak di layar tanpa harus dimuat ulang secara manual. Misalnya seperti konten gambar animasi, maps, slideshow, polling, dan sebagainya. Elemen-elemen tersebut tentunya membuat website menjadi lebih menarik, sehingga pengunjung jadi betah mengeksplorasi isi di dalamnya. Awalnya, JavaScript hanya bekerja pada sisi client/frontend saja. Dengan begitu, proses pengolahan kode-kodenya hanya berjalan di sisi browser. Namun, seiring perkembangannya, JavaScript juga bisa digunakan di sisi server. Tentunya dengan bantuan berbagai framework seperti Node.js, dan React.js.",
    audioUrl: "https://example.com/audio1.mp3",
  },
  {
    id: 4,
    url: "/bootstrap-framework",
    videoUrl: "https://www.youtube.com/watch?v=aIDQSwr4ysY",
    title: "Module 4: BOOTSTRAP",
    description: "Tujuan dan fungsi Bootstrap adalah untuk membuat website responsive dan mobile-first. Jadi, semua elemen antarmuka website dipastikan bisa bekerja secara optimal di semua ukuran layar, baik desktop maupun perangkat seluler. Bootstrap tersedia dalam dua varian: versi yang sudah dikompilasi dan didasarkan pada source code (kode sumber). Developer yang sudah berpengalaman biasanya memilih penggunaan Bootstrap dengan source code, karena lebih bebas menyesuaikan gaya dengan proyek yang dikerjakan. Contohnya, versi “kode sumber” Bootstrap memungkinkan Anda mengakses port Sass. Jadi, framework ini akan membuat stylesheet khusus yang mengimpor Bootstrap sehingga Anda bisa memodifikasi dan menambahkan fungsinya sesuai kebutuhan. Anda juga bisa menginstal Bootstrap dengan package manager, yaitu tool yang mengelola dan memperbarui framework, library, dan aset. Beberapa package manager yang paling populer adalah npm, Composer, dan Bower. Npm mengelola dependensi sisi server, sementara Composer fokus pada front-end. Apabila menangani proyek berbasis PHP, Anda bisa mencoba menggunakan Bower. Karena popularitasnya ini, Bootstrap memiliki banyak komunitas. Para developer dan desainer web bisa menjelajahi komunitas ini untuk saling berbagi pengetahuan dan membahas versi terbaru patch Bootstrap.",
    audioUrl: "https://example.com/audio1.mp3",
  },
];

export const courses = [
  {
    imageSrc: "/images/book1.jpg",
    imageUrl: "/class/module",
    label: "Pemrograman Web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae justo vel neque lacinia pulvinar. Maecenas nibh orci, lobortis vehicula luctus in, pulvinar ac erat.",
  },
  {
    imageSrc: "/images/math.jpg",
    imageUrl: "/class/module",
    label: "Kalkulus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae justo vel neque lacinia pulvinar. Maecenas nibh orci, lobortis vehicula luctus in, pulvinar ac erat.",
  },
  {
    imageSrc: "/images/book2.jpg",
    imageUrl: "/class/module",
    label: "Stastitika",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae justo vel neque lacinia pulvinar. Maecenas nibh orci, lobortis vehicula luctus in, pulvinar ac erat.",
  },
  {
    imageSrc: "/images/laptop.jpg",
    imageUrl: "/class/module",
    label: "Sistem Basis Data",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae justo vel neque lacinia pulvinar. Maecenas nibh orci, lobortis vehicula luctus in, pulvinar ac erat.",
  },
];
