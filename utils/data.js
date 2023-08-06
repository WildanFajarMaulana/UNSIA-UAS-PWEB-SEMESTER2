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
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_1",
    title: "Module 1: Paragraf",
    description: "Description for Module 1",
    audioUrl: "https://example.com/audio1.mp3",
  },
  {
    id: 2,
    url: "/css-dasar",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_2",
    title: "Module 2: Display",
    description: "Description for Module 2",
    audioUrl: "https://example.com/audio2.mp3",
  },
  {
    id: 3,
    url: "/javascript-dasar",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_1",
    title: "Module 1: Array",
    description: "Description for Module 3",
    audioUrl: "https://example.com/audio1.mp3",
  },
  {
    id: 4,
    url: "/bootstrap-framework",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_1",
    title: "Module 1: Container",
    description: "Description for Module 4",
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
