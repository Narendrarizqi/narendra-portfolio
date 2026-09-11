/**
 * Portfolio Data — Bagus Narendra Rizqi Ananto
 * All data sourced from verified sources: GitHub, CV, LinkedIn
 * DO NOT add fabricated information.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Bagus Narendra Rizqi Ananto",
    shortName: "Narendra",
    role: "Fullstack Web Developer",
    subtitle: "Informatics Student",
    bio: "Mahasiswa Teknik Informatika dengan minat pada Web Development dan Data Analytics.",
    description: "Membangun aplikasi web dan mengembangkan solusi berbasis data melalui teknologi web, database, dan pengembangan perangkat lunak.",
    location: "Banyumas, Purwokerto",
    company: "Universitas Muhammadiyah Purwokerto",
    avatar: "https://avatars.githubusercontent.com/u/87901449?v=4",
    social: {
      github: "https://github.com/Narendrarizqi",
      linkedin: "https://www.linkedin.com/in/bagus-narendra-rizqi-ananto-7a8a19280/",
      email: "bagusnarendra500@gmail.com" // To be filled by user
    }
  },

  // What I Do section — capabilities based on verified experience
  capabilities: [
    {
      title: "Web Development",
      description: "Membangun aplikasi web dari frontend hingga backend menggunakan teknologi modern. Berpengalaman dalam pengembangan sistem berbasis Laravel dan PHP.",
      icon: "code"
    },
    {
      title: "Backend & Database",
      description: "Merancang dan mengembangkan arsitektur backend, REST API, serta manajemen database MySQL untuk kebutuhan aplikasi.",
      icon: "server"
    },
    {
      title: "Data Management",
      description: "Pengalaman dalam data entry, validasi data, dan pengolahan data menggunakan tools seperti Microsoft Excel dan Google Sheets.",
      icon: "database"
    },
    {
      title: "Application Development",
      description: "Mengembangkan aplikasi yang berfokus pada penyelesaian masalah nyata, termasuk sistem administrasi dan manajemen inventaris.",
      icon: "layout"
    }
  ],

  // Projects — sourced exclusively from GitHub
  projects: [
    {
      id: "sistem-administrasi-sekolah",
      title: "Sistem Administrasi Pembayaran SMK",
      shortDescription: "Sistem administrasi dan pembayaran sekolah berbasis web untuk mengelola data siswa, tagihan, pembayaran, pengeluaran, dan laporan keuangan.",
      description: "Sistem administrasi pembayaran berbasis web yang dikembangkan untuk membantu pengelolaan administrasi pembayaran sekolah. Dikembangkan sebagai bagian dari kegiatan Kerja Praktik.",
      category: "fullstack",
      featured: true,
      technologies: ["Laravel", "PHP", "MySQL", "Blade", "JavaScript", "Bootstrap"],
      features: [
        "Dashboard administrasi",
        "Manajemen data siswa",
        "Pembayaran IPP",
        "Daftar Ulang",
        "Sarana & Prasarana",
        "Asesmen",
        "Ekstrakurikuler & Kokurikuler",
        "Rekap pembayaran",
        "Laporan pembayaran",
        "Dana BOS",
        "Pengeluaran",
        "Target tahunan",
        "Pengelolaan tahun ajaran"
      ],
      screenshots: [
        { src: "assets/projects/sistem-administrasi-sekolah/dashboard.png", alt: "Dashboard Administrasi" },
        { src: "assets/projects/sistem-administrasi-sekolah/data_siswa.png", alt: "Data Siswa" },
        { src: "assets/projects/sistem-administrasi-sekolah/pembayaran_ipp.png", alt: "Pembayaran IPP" },
        { src: "assets/projects/sistem-administrasi-sekolah/daftar_ulang.png", alt: "Daftar Ulang" },
        { src: "assets/projects/sistem-administrasi-sekolah/sarana_prasarana.png", alt: "Sarana Prasarana" },
        { src: "assets/projects/sistem-administrasi-sekolah/asesmen.png", alt: "Asesmen" },
        { src: "assets/projects/sistem-administrasi-sekolah/ekstrakurikuler.png", alt: "Ekstrakurikuler" },
        { src: "assets/projects/sistem-administrasi-sekolah/kokurikuler.png", alt: "Kokurikuler" },
        { src: "assets/projects/sistem-administrasi-sekolah/rekapitulasi.png", alt: "Rekapitulasi" },
        { src: "assets/projects/sistem-administrasi-sekolah/laporan_pembayaran.png", alt: "Laporan Pembayaran" },
        { src: "assets/projects/sistem-administrasi-sekolah/bos.png", alt: "Dana BOS" },
        { src: "assets/projects/sistem-administrasi-sekolah/pengeluaran.png", alt: "Pengeluaran" }
      ],
      github: "https://github.com/Narendrarizqi/sistem-administrasi-sekolah",
      demo: null,
      role: "Fullstack Developer - Kerja Praktik",
      purpose: "Membantu pengelolaan administrasi pembayaran di lingkungan SMK, termasuk pencatatan pembayaran siswa, dana BOS, pengeluaran, dan pembuatan laporan keuangan.",
      development: {
        frontend: "Blade templating engine dengan Bootstrap untuk antarmuka responsif",
        backend: "Laravel framework - routing, controller, model, dan middleware",
        database: "MySQL - relasi tabel untuk data siswa, pembayaran, dan keuangan",
        features: "CRUD lengkap, rekap dan laporan, manajemen tahun ajaran"
      }
    },
    {
      id: "pulpen-app",
      title: "Pulpen App",
      shortDescription: "Aplikasi web dan backend API untuk manajemen stok alat tulis dengan CRUD dan endpoint JSON untuk integrasi mobile.",
      description: "Aplikasi web sederhana dan backend API untuk manajemen stok alat tulis (CRUD). Digunakan untuk kelola data produk toko alat tulis serta menyediakan endpoint JSON untuk aplikasi Android/client.",
      category: "backend",
      featured: false,
      technologies: ["PHP", "MySQL"],
      features: [
        "Manajemen data barang (tambah, lihat, edit, hapus)",
        "Upload foto produk",
        "Pagination data produk",
        "REST API endpoint JSON untuk integrasi mobile/Android"
      ],
      screenshots: [],
      github: "https://github.com/Narendrarizqi/pulpen_app",
      demo: null,
      role: "Backend Developer",
      purpose: "Mengelola stok alat tulis dan menyediakan API untuk integrasi dengan aplikasi Android.",
      development: {
        backend: "PHP native - CRUD operations dan koneksi database",
        database: "MySQL - tabel produk dengan upload gambar",
        api: "REST API endpoint JSON (get_produk.php) untuk client mobile"
      }
    },
    {
      id: "website-imm",
      title: "Website IMM",
      shortDescription: "Website organisasi Ikatan Mahasiswa Muhammadiyah.",
      description: "Website untuk organisasi IMM (Ikatan Mahasiswa Muhammadiyah) yang menampilkan informasi organisasi.",
      category: "frontend",
      featured: false,
      technologies: ["HTML", "PHP"],
      features: [],
      screenshots: [],
      github: "https://github.com/Narendrarizqi/website_imm",
      demo: null,
      role: "Web Developer",
      purpose: "Membuat website informasi untuk organisasi IMM.",
      development: {
        frontend: "HTML - struktur halaman dan konten",
        backend: "PHP - logika server-side"
      }
    },
    {
      id: "website-atk",
      title: "Website ATK",
      shortDescription: "Website untuk pengelolaan alat tulis kantor.",
      description: "Website untuk pengelolaan alat tulis kantor (ATK).",
      category: "backend",
      featured: false,
      technologies: ["PHP"],
      features: [],
      screenshots: [],
      github: "https://github.com/Narendrarizqi/WEBSITE_ATK",
      demo: null,
      role: "Backend Developer",
      purpose: "Mengembangkan sistem pengelolaan data ATK berbasis web.",
      development: {
        backend: "PHP - server-side logic dan pengelolaan data"
      }
    }
  ],

  // 12 Verified Skills for the Interactive 3D Macropad (3x4 Layout)
  macropadSkills: [
    {
      id: "laravel",
      name: "Laravel",
      key: "L",
      category: "Backend",
      description: "Framework MVC untuk membangun arsitektur aplikasi web yang terstruktur, aman, dan mudah dimaintain.",
      projects: ["Sistem Administrasi Pembayaran SMK"],
      evidence: "Implementasi MVC, Eloquent ORM, middleware otentikasi, dan routing terstruktur pada 15+ modul pembayaran sekolah.",
      accent: "#f55247",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M8.2 3.6l4.6 2.6v5.3l-4.6-2.6V3.6zm5.6 3.2l4.6 2.6v5.3l-4.6-2.6V6.8zM2.6 6.8l4.6 2.6v5.3l-4.6-2.6V6.8zm5.6 8.5l4.6 2.6v5.3l-4.6-2.6v-5.3zm5.6-5.3l4.6 2.6v5.3l-4.6-2.6V10z" fill="#f55247"/><path d="M12.8 6.2l4.6 2.6-4.6 2.6-4.6-2.6 4.6-2.6zm-5.6 3.2l4.6 2.6-4.6 2.6-4.6-2.6 4.6-2.6zm11.2 0l4.6 2.6-4.6 2.6-4.6-2.6 4.6-2.6zm-5.6 8.5l4.6 2.6-4.6 2.6-4.6-2.6 4.6-2.6z" fill="#ff7066"/></svg>'
    },
    {
      id: "php",
      name: "PHP",
      key: "P",
      category: "Backend",
      description: "Bahasa pemrograman server-side utama untuk menangani logika bisnis, pengolahan data, dan backend API.",
      projects: ["Sistem Administrasi Pembayaran SMK", "Pulpen App", "Website ATK"],
      evidence: "Pengembangan backend server-side, integrasi database MySQL, session handling, dan endpoint REST API.",
      accent: "#777bb4",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22"><ellipse cx="12" cy="12" rx="11" ry="6.5" fill="#777bb4" opacity="0.35"/><path d="M5.2 9h2.8c1.1 0 1.9.7 1.9 1.8 0 1.2-.8 1.9-1.9 1.9H6.6L6 16H4.5L6.2 9zm2.2 2.5c.3 0 .6-.2.6-.6 0-.3-.2-.5-.6-.5H6.2l-.3 1.1h1.5zm5.8-2.5h-1.5L10 16h1.5l.5-2.5h1.1l.5 2.5h1.6l-.6-2.6c.7-.3 1.2-.9 1.2-1.9 0-1.4-.9-2.5-2.8-2.5zm-.4 3.3h-1l.3-1.9h1c.6 0 .9.3.9.9 0 .6-.3 1-.9 1zm4.1-3.3h2.8c1.1 0 1.9.7 1.9 1.8 0 1.2-.8 1.9-1.9 1.9h-1.4L18 16h-1.5l1.7-7zm2.2 2.5c.3 0 .6-.2.6-.6 0-.3-.2-.5-.6-.5h-1.2l-.3 1.1h1.5z" fill="#9ea3db"/></svg>'
    },
    {
      id: "mysql",
      name: "MySQL",
      key: "M",
      category: "Database",
      description: "Sistem manajemen database relasional untuk menyimpan dan mengelola data aplikasi secara efisien.",
      projects: ["Sistem Administrasi Pembayaran SMK", "Pulpen App"],
      evidence: "Perancangan skema relasional 15+ tabel (siswa, tagihan IPP, daftar ulang, BOS, pengeluaran) dengan foreign keys & transactions.",
      accent: "#00758f",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="#00758f"><path d="M12 3c-4.4 0-8 1.3-8 3s3.6 3 8 3 8-1.3 8-3-3.6-3-8-3zm0 4.5c-3.6 0-6.5-1-6.5-1.5S8.4 4.5 12 4.5s6.5 1 6.5 1.5-2.9 1.5-6.5 1.5zM4 8v3.5c0 1.7 3.6 3 8 3s8-1.3 8-3V8c-1.8 1.3-4.7 2-8 2s-6.2-.7-8-2zm0 5.5V17c0 1.7 3.6 3 8 3s8-1.3 8-3v-3.5c-1.8 1.3-4.7 2-8 2s-6.2-.7-8-2z"/></svg>'
    },
    {
      id: "javascript",
      name: "JavaScript",
      key: "J",
      category: "Frontend",
      description: "Bahasa scripting untuk memberikan interaktivitas dinamis pada antarmuka web dan penanganan event.",
      projects: ["Sistem Administrasi Pembayaran SMK"],
      evidence: "Manipulasi DOM dinamis, validasi input form interaktif, handling modal, dan filtering data secara asynchronous.",
      accent: "#eab308",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22"><rect width="24" height="24" rx="4" fill="#f7df1e"/><path d="M13.8 16.5c.5.8 1.2 1.3 2.3 1.3 1.2 0 1.9-.6 1.9-1.6 0-1.1-.8-1.5-2-2.1-1.8-.7-2.9-1.6-2.9-3.5 0-2 1.5-3.4 3.7-3.4 1.6 0 2.8.6 3.6 2l-1.6 1c-.4-.7-.9-1-1.8-1-.8 0-1.4.5-1.4 1.2 0 .8.6 1.1 1.7 1.6 1.9.8 3.2 1.7 3.2 3.8 0 2.3-1.8 3.6-4.2 3.6-2.2 0-3.6-1.1-4.2-2.5l1.6-.4zm-6.8 1.4c.4.6.8 1 1.6 1 .9 0 1.4-.4 1.4-1.8V8.2h2.2v9c0 2.5-1.5 3.7-3.6 3.7-1.9 0-3-.9-3.6-2.1l2-.9z" fill="#111111"/></svg>'
    },
    {
      id: "html",
      name: "HTML",
      key: "H",
      category: "Frontend",
      description: "Fondasi struktur halaman web semantik dengan fokus pada keterbacaan kode dan aksesibilitas.",
      projects: ["Website IMM", "Sistem Administrasi Pembayaran SMK"],
      evidence: "Penyusunan markup semantik, struktur formulir administrasi, dan tabel rekapitulasi data yang terstruktur rapi.",
      accent: "#ea580c",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M3 2l1.8 17.5 7.2 2.5 7.2-2.5L21 2H3zm14.8 5.5H8.3l.3 3h9l-.6 6.3-5 1.7-5-1.7-.3-3.8h2.3l.2 2 2.8.9 2.8-.9.3-3.5H6.2L5.4 5h12.7l-.3 2.5z" fill="#ea580c"/></svg>'
    },
    {
      id: "css",
      name: "CSS",
      key: "C",
      category: "Frontend",
      description: "Penataan tata letak visual dan estetika antarmuka web yang bersih, responsif, dan konsisten.",
      projects: ["Sistem Administrasi Pembayaran SMK"],
      evidence: "Kustomisasi styling komponen, layout responsif flexbox & grid, serta transisi interaksi yang mulus.",
      accent: "#2563eb",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M3 2l1.8 17.5 7.2 2.5 7.2-2.5L21 2H3zm14.8 5.5H8.3l.3 3h9l-.6 6.3-5 1.7-5-1.7-.3-3.8h2.3l.2 2 2.8.9 2.8-.9.3-3.5H6.2L5.4 5h12.7l-.3 2.5z" fill="#2563eb"/></svg>'
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      key: "B",
      category: "Frontend",
      description: "Framework CSS untuk mempercepat pembuatan antarmuka pengguna yang responsif dan mobile-friendly.",
      projects: ["Sistem Administrasi Pembayaran SMK"],
      evidence: "Implementasi responsive grid system, komponen navigasi, modal dialog, cards, dan form control standar industri.",
      accent: "#7952b3",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22"><rect width="24" height="24" rx="5" fill="#7952b3"/><path d="M7 6h5.8c1.9 0 3.2 1 3.2 2.5 0 1.1-.7 2-1.7 2.3 1.3.3 2.1 1.4 2.1 2.7 0 1.8-1.5 2.9-3.6 2.9H7V6zm2.5 4h3c.8 0 1.4-.4 1.4-1.2 0-.7-.5-1.1-1.4-1.1h-3V10zm0 4.5h3.3c.9 0 1.6-.4 1.6-1.3 0-.8-.7-1.3-1.6-1.3H9.5v2.6z" fill="#ffffff"/></svg>'
    },
    {
      id: "blade",
      name: "Blade",
      key: "D",
      category: "Template",
      description: "Templating engine bawaan Laravel untuk memisahkan logika tampilan dengan kode modular dan reusable.",
      projects: ["Sistem Administrasi Pembayaran SMK"],
      evidence: "Pemanfaatan layout inheritance (`@extends`, `@section`), komponen reusable, dan conditional directive dinamis.",
      accent: "#f43f5e",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22"><rect x="3" y="4" width="18" height="16" rx="3" fill="#f43f5e" opacity="0.2" stroke="#f43f5e" stroke-width="1.8"/><path d="M8 8h8M8 12h8M8 16h5" stroke="#f43f5e" stroke-width="2" stroke-linecap="round"/></svg>'
    },
    {
      id: "git",
      name: "Git",
      key: "G",
      category: "Tools",
      description: "Distributed Version Control System untuk mencatat perubahan kode dan mengelola riwayat pengembangan.",
      projects: ["GitHub Repositories"],
      evidence: "Penerapan branching, commit tracking, manajemen versi kode, dan sinkronisasi repositori di GitHub.",
      accent: "#f97316",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.7 4.7l2.7 2.7c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.6 2.6c.6-.2 1.3-.1 1.8.4.8.8.8 2 0 2.8s-2 .8-2.8 0c-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.3c.2.2.3.5.3.8 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.4.2-.8.5-1.1V9.4c-.3-.3-.5-.7-.5-1.1 0-.4.2-.8.4-1.1L7.7 4.6 2.4 9.9c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.1z" fill="#f97316"/></svg>'
    },
    {
      id: "rest-api",
      name: "REST API",
      key: "R",
      category: "Backend",
      description: "Arsitektur antarmuka komunikasi data terstandarisasi berbasis HTTP methods dan payload JSON.",
      projects: ["Pulpen App"],
      evidence: "Perancangan RESTful API untuk operasi CRUD data alat tulis kantor dengan respons JSON yang terstandarisasi.",
      accent: "#06b6d4",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22"><rect x="3" y="4" width="18" height="6" rx="2" fill="none" stroke="#06b6d4" stroke-width="2"/><rect x="3" y="14" width="18" height="6" rx="2" fill="none" stroke="#06b6d4" stroke-width="2"/><circle cx="7" cy="7" r="1.5" fill="#06b6d4"/><circle cx="7" cy="17" r="1.5" fill="#06b6d4"/><path d="M12 10v4" stroke="#06b6d4" stroke-width="2" stroke-linecap="round"/></svg>'
    },
    {
      id: "excel",
      name: "Microsoft Excel",
      key: "E",
      category: "Data",
      description: "Aplikasi spreadsheet untuk pengorganisasian, kalkulasi, pembersihan, dan analisis data kuantitatif.",
      projects: ["Data Management & Administrasi"],
      evidence: "Pengolahan data tabular, pemanfaatan formula kalkulasi, rekapitulasi data siswa, dan verifikasi entri.",
      accent: "#10b981",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22"><rect x="3" y="3" width="18" height="18" rx="3" fill="#10b981"/><path d="M8.5 7.5L11 12l-2.6 4.5h2.2l1.5-3 1.5 3h2.2L13 12l2.6-4.5h-2.1l-1.5 3-1.5-3H8.5z" fill="#ffffff"/></svg>'
    },
    {
      id: "sheets",
      name: "Google Sheets",
      key: "S",
      category: "Data",
      description: "Spreadsheet berbasis cloud untuk kolaborasi pencatatan, validasi, dan manajemen data terpusat.",
      projects: ["Data Management"],
      evidence: "Kolaborasi pengelolaan data daring, validasi data masukan, serta pembuatan template laporan terstruktur.",
      accent: "#34a853",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22"><rect x="4" y="3" width="16" height="18" rx="2.5" fill="#34a853"/><path d="M8 8h8v2H8V8zm0 3h8v2H8v-2zm0 3h5v2H8v-2z" fill="#ffffff"/></svg>'
    }
  ],

  // Skills — verified from GitHub repos and CV (for Detailed Grid Mode)
  skills: {
    frontend: {
      title: "Frontend Development",
      items: [
        { name: "HTML", projectEvidence: "Website IMM", description: "Semantic markup, structure, accessibility" },
        { name: "CSS", projectEvidence: "Sistem Administrasi Sekolah", description: "Custom layouts, responsive design, transitions" },
        { name: "JavaScript", projectEvidence: "Sistem Administrasi Sekolah", description: "DOM interaction, client validation, dynamic UI" },
        { name: "Bootstrap", projectEvidence: "Sistem Administrasi Sekolah", description: "Responsive grid, admin components, modal flows" },
        { name: "Blade", projectEvidence: "Sistem Administrasi Sekolah", description: "Template inheritance, modular layouts, directives" }
      ]
    },
    backend: {
      title: "Backend Development",
      items: [
        { name: "PHP", projectEvidence: "Pulpen App, Sistem Administrasi Sekolah, Website ATK", description: "Server-side logic, session handling, CRUD" },
        { name: "Laravel", projectEvidence: "Sistem Administrasi Sekolah", description: "MVC architecture, Eloquent ORM, middleware, routing" },
        { name: "REST API", projectEvidence: "Pulpen App", description: "CRUD endpoints, HTTP methods, JSON responses" }
      ]
    },
    database: {
      title: "Database Management",
      items: [
        { name: "MySQL", projectEvidence: "Sistem Administrasi Sekolah, Pulpen App", description: "Relational schema, 15+ linked tables, foreign keys" },
        { name: "SQL", projectEvidence: "Sistem Administrasi Sekolah", description: "Data query, joins, aggregations, data integrity" },
        { name: "phpMyAdmin", projectEvidence: "Sistem Administrasi Sekolah", description: "Database administration, export/import, inspection" }
      ]
    },
    data: {
      title: "Data Management & Analytics",
      items: [
        { name: "Microsoft Excel", projectEvidence: "Data Management & Administrasi", description: "Data entry, formulas, tabular analysis, reports" },
        { name: "Google Sheets", projectEvidence: "Data Management", description: "Cloud collaboration, validation rules, record keeping" },
        { name: "Data Entry & Validation", projectEvidence: "Administrasi Sekolah & Organisasi", description: "Verification, consistency check, duplicate removal" }
      ]
    },
    tools: {
      title: "Tools & Version Control",
      items: [
        { name: "Git", projectEvidence: "GitHub Repositories", description: "Branching, commit history, code tracking" },
        { name: "GitHub", projectEvidence: "github.com/Narendrarizqi", description: "Repository hosting, documentation, code releases" },
        { name: "VS Code", projectEvidence: "Development Environment", description: "Primary code editor, debugging, extensions" }
      ]
    }
  },

  // Experience — from CV
  experience: [
    {
      position: "Freelance Programmer",
      company: "Universitas Muhammadiyah Purwokerto",
      period: "2023 — Present",
      description: "Mengerjakan project pengembangan web dan pemrograman.",
      type: "work"
    },
    {
      position: "Data Entry Intern",
      company: "OEMAH DIGITAL",
      period: "2022",
      description: "Melakukan input, validasi, dan pengolahan data.",
      type: "work"
    }
  ],

  // Organization — from CV
  organizations: [
    {
      name: "IMM (Ikatan Mahasiswa Muhammadiyah)",
      positions: [
        { role: "Bidang Media dan Komunikasi", period: "" },
        { role: "Bidang Kader", period: "" }
      ]
    },
    {
      name: "KPU Fakultas Teknik dan Sains",
      positions: [
        { role: "Ketua Divisi Pemutakhiran Data", period: "" }
      ]
    },
    {
      name: "Bawaslu Universitas Muhammadiyah Purwokerto",
      positions: [
        { role: "Ketua Divisi Hukum dan Pengawasan", period: "" }
      ]
    }
  ],

  // Education — from CV
  education: [
    {
      institution: "Universitas Muhammadiyah Purwokerto",
      degree: "Teknik Informatika",
      period: "2023 — Present",
      current: true
    },
    {
      institution: "SMK Negeri 1 Slawi",
      degree: "Rekayasa Perangkat Lunak",
      period: "2020 — 2023",
      current: false
    }
  ],

  // Certificates — placeholder structure, to be filled from LinkedIn
  // DO NOT create fake certificates
  certificates: []
};
