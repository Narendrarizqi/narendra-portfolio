const PORTFOLIO_DATA = {
  personal: {
    name: "Bagus Narendra Rizqi Ananto",
    shortName: "Narendra",
    role: "Fullstack Web Developer & Data Analyst Enthusiast",
    subtitle: "Informatics Student",
    bio: "Mahasiswa Teknik Informatika dengan fokus pada Fullstack Web Development dan Data Analytics.",
    description: "Membangun aplikasi web modern dan solusi analitik berbasis data melalui arsitektur web terstruktur, manajemen database SQL, dan analisis data.",
    location: "Banyumas, Purwokerto",
    company: "Universitas Muhammadiyah Purwokerto",
    avatar: "https://avatars.githubusercontent.com/u/87901449?v=4",
    social: {
      github: "https://github.com/Narendrarizqi",
      linkedin: "https://www.linkedin.com/in/bagus-narendra-rizqi-ananto-7a8a19280/",
      email: "bagusnarendra500@gmail.com"
    }
  },

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
      title: "Data Analytics & Management",
      description: "Pengolahan data tabular, query SQL tingkat lanjut, pembersihan dan validasi data, serta penyusunan laporan menggunakan Google Sheets, Excel, dan MySQL.",
      icon: "database"
    },
    {
      title: "Application Development",
      description: "Mengembangkan aplikasi yang berfokus pada penyelesaian masalah nyata, termasuk sistem administrasi dan manajemen inventaris.",
      icon: "layout"
    }
  ],

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

  macropadSkills: [

    {
      id: "html",
      name: "HTML5",
      key: "H",
      category: "Frontend Development",
      description: "Markup semantik untuk struktur halaman web yang rapi, mudah diakses, dan SEO-friendly.",
      projects: ["Website IMM", "Sistem Administrasi Pembayaran SMK"],
      evidence: "Penyusunan struktur formulir administrasi, tabel rekapitulasi, dan halaman informasi organisasi dengan markup semantik.",
      bg: "#E34F26",
      darkBg: "#B7350F",
      glow: "rgba(227, 79, 38, 0.6)",
      iconSvg: '<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M4 2l1.8 17.5 6.2 2.5 6.2-2.5L20 2H4zm13.8 5.5H8.3l.3 3h8.5l-.6 6.3-4.5 1.7-4.5-1.7-.3-3.8h2.3l.2 2 2.3.7 2.3-.7.3-3.5H7.2L6.4 5h11.7l-.3 2.5z"/></svg>'
    },
    {
      id: "css",
      name: "CSS3",
      key: "C",
      category: "Frontend Development",
      description: "Penataan tampilan antarmuka: custom layout, desain responsif, dan transisi/animasi halus.",
      projects: ["Sistem Administrasi Pembayaran SMK"],
      evidence: "Pembuatan layout responsif, styling komponen admin, dan micro-interaction pada antarmuka dashboard.",
      bg: "#1572B6",
      darkBg: "#0C4A75",
      glow: "rgba(21, 114, 182, 0.6)",
      iconSvg: '<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M4 2l1.8 17.5 6.2 2.5 6.2-2.5L20 2H4zm13.8 5.5H8.3l.3 3h8.5l-.6 6.3-4.5 1.7-4.5-1.7-.3-3.8h2.3l.2 2 2.3.7 2.3-.7.3-3.5H7.2L6.4 5h11.7l-.3 2.5z"/></svg>'
    },
    {
      id: "js",
      name: "JavaScript",
      key: "J",
      category: "Frontend Development",
      description: "Bahasa scripting untuk interaktivitas dinamis pada antarmuka web dan penanganan event pengguna.",
      projects: ["Sistem Administrasi Pembayaran SMK"],
      evidence: "Manipulasi DOM, validasi input form secara real-time, dan interaksi UI dinamis pada dashboard admin.",
      bg: "#F0B900",
      darkBg: "#946200",
      glow: "rgba(240, 185, 0, 0.55)",
      iconSvg: '<svg viewBox="0 0 24 24"><text x="12" y="16.5" font-family="sans-serif" font-weight="900" font-size="12" text-anchor="middle" fill="#111827">JS</text></svg>'
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      key: "B",
      category: "Frontend Development",
      description: "Framework CSS berbasis komponen siap pakai untuk membangun antarmuka responsif secara cepat.",
      projects: ["Sistem Administrasi Pembayaran SMK"],
      evidence: "Penggunaan grid system, komponen modal, navbar, dan form styling responsif pada dashboard administrasi.",
      bg: "#7952B3",
      darkBg: "#4B2E83",
      glow: "rgba(121, 82, 179, 0.6)",
      iconSvg: '<svg viewBox="0 0 24 24"><text x="12" y="17.5" font-family="Georgia, serif" font-weight="700" font-size="16" text-anchor="middle" fill="#ffffff">B</text></svg>'
    },
    {
      id: "blade",
      name: "Blade Engine",
      key: "T",
      category: "Frontend Development",
      description: "Templating engine bawaan Laravel untuk memisahkan logika tampilan dengan struktur kode modular.",
      projects: ["Sistem Administrasi Pembayaran SMK"],
      evidence: "Penerapan layout inheritance (@extends, @section), komponen reusable, dan conditional directive dinamis.",
      bg: "#be123c",
      darkBg: "#7f1d1d",
      glow: "rgba(190, 18, 60, 0.6)",
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>'
    },
    {
      id: "php",
      name: "PHP",
      key: "P",
      category: "Backend Development",
      description: "Bahasa pemrograman server-side untuk logika aplikasi, session handling, dan operasi CRUD.",
      projects: ["Pulpen App", "Sistem Administrasi Pembayaran SMK", "Website ATK"],
      evidence: "Penerapan clean code OOP, pengelolaan sesi, dan koneksi database pada beberapa aplikasi web.",
      bg: "#777BB3",
      darkBg: "#4B4F7A",
      glow: "rgba(119, 123, 179, 0.6)",
      iconSvg: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="11" ry="7" fill="none" stroke="#ffffff" stroke-width="1.6"/><text x="12" y="15" font-family="sans-serif" font-weight="800" font-size="7.5" text-anchor="middle" fill="#ffffff">php</text></svg>'
    },
    {
      id: "laravel",
      name: "Laravel",
      key: "L",
      category: "Backend Development",
      description: "Framework MVC PHP untuk arsitektur aplikasi web modern, terstruktur, aman, dan modular.",
      projects: ["Sistem Administrasi Pembayaran SMK"],
      evidence: "Implementasi MVC, Eloquent ORM, middleware otentikasi, dan routing terstruktur pada 15+ modul pembayaran sekolah.",
      bg: "#ef4444",
      darkBg: "#b91c1c",
      glow: "rgba(239, 68, 68, 0.6)",
      iconSvg: '<svg viewBox="0 0 24 24"><text x="12" y="17.5" font-family="Georgia, serif" font-weight="700" font-size="16" text-anchor="middle" fill="#ffffff">L</text></svg>'
    },
    {
      id: "restapi",
      name: "REST API",
      key: "A",
      category: "Backend Development",
      description: "Spesifikasi antarmuka komunikasi data HTTP untuk operasi CRUD berbasis method dan response JSON.",
      projects: ["Pulpen App"],
      evidence: "Perancangan endpoint JSON untuk integrasi aplikasi mobile/Android pada sistem manajemen stok alat tulis.",
      bg: "#334155",
      darkBg: "#0f172a",
      glow: "rgba(148, 163, 184, 0.5)",
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h13M17 7l-3-3M17 7l-3 3"/><path d="M20 17H7M7 17l3-3M7 17l3 3"/></svg>'
    },
    {
      id: "mysql",
      name: "MySQL",
      key: "M",
      category: "Database Management",
      description: "Relational Database Management System untuk pengorganisasian data terstruktur berperforma tinggi.",
      projects: ["Sistem Administrasi Pembayaran SMK", "Pulpen App"],
      evidence: "Perancangan skema relasional 15+ tabel dengan foreign keys, indexing, dan transaksi keuangan yang konsisten.",
      bg: "#0284c7",
      darkBg: "#075985",
      glow: "rgba(2, 132, 199, 0.6)",
      iconSvg: '<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M12 3c-4.4 0-8 1.3-8 3s3.6 3 8 3 8-1.3 8-3-3.6-3-8-3zm0 4.5c-3.6 0-6.5-1-6.5-1.5S8.4 4.5 12 4.5s6.5 1 6.5 1.5-2.9 1.5-6.5 1.5zM4 8v3.5c0 1.7 3.6 3 8 3s8-1.3 8-3V8c-1.8 1.3-4.7 2-8 2s-6.2-.7-8-2zm0 5.5V17c0 1.7 3.6 3 8 3s8-1.3 8-3v-3.5c-1.8 1.3-4.7 2-8 2s-6.2-.7-8-2z"/></svg>'
    },
    {
      id: "sql",
      name: "SQL",
      key: "Q",
      category: "Database Management",
      description: "Bahasa query untuk operasi data: seleksi, join, agregasi, dan menjaga integritas data.",
      projects: ["Sistem Administrasi Pembayaran SMK"],
      evidence: "Penulisan query untuk laporan keuangan, join antar tabel, dan agregasi data pembayaran sekolah.",
      bg: "#4338CA",
      darkBg: "#312E81",
      glow: "rgba(67, 56, 202, 0.6)",
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="13" height="16" rx="1.5"/><path d="M6 8h7M6 12h7M6 16h4"/><circle cx="18" cy="17" r="3.2"/><path d="M20.5 19.5L23 22"/></svg>'
    },
    {
      id: "phpmyadmin",
      name: "phpMyAdmin",
      key: "Y",
      category: "Database Management",
      description: "Perangkat lunak berbasis web untuk administrasi dan inspeksi skema database MySQL/MariaDB.",
      projects: ["Sistem Administrasi Pembayaran SMK"],
      evidence: "Manajemen relasi foreign key, export/import dump SQL, pemantauan indeks, dan eksekusi query interaktif.",
      bg: "#1f2937",
      darkBg: "#111827",
      glow: "rgba(255, 255, 255, 0.35)",
      iconSvg: '<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M4 6h16l-10 12h10" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'
    },
    {
      id: "vscode",
      name: "VS Code",
      key: "V",
      category: "Tools & Code Editor",
      description: "IDE utama dengan kustomisasi ekstensi, live debugger, Git visualizer, dan terminal terpadu.",
      projects: ["Development Workflow"],
      evidence: "Pengelolaan workflow multi-proyek, snippet efisiensi, integrasi linter, dan remote development.",
      bg: "#0078D4",
      darkBg: "#005A9E",
      glow: "rgba(0, 120, 212, 0.6)",
      iconSvg: '<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M17.5 2.5L7.5 11l-4-3.5L2 8.5v7l1.5 1 4-3.5 10 8.5 4.5-2V4.5l-4.5-2zm0 4.5v10l-6.5-5 6.5-5z"/></svg>'
    },
    {
      id: "sheets",
      name: "Google Sheets",
      key: "S",
      category: "Data Management",
      description: "Kolaborasi data berbasis cloud dengan validasi input dan pencatatan record secara real-time.",
      projects: ["Data Management"],
      evidence: "Pencatatan data secara kolaboratif, validasi input, dan sinkronisasi record antar tim secara online.",
      bg: "#34A853",
      darkBg: "#1E7E34",
      glow: "rgba(52, 168, 83, 0.6)",
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/><path d="M17 17l1.5 1.5L21 15.5" stroke-width="2.2"/></svg>'
    },
    {
      id: "dataentry",
      name: "Data Entry & Validation",
      key: "N",
      category: "Data Management",
      description: "Verifikasi, pengecekan konsistensi, dan penghapusan duplikasi pada data administrasi.",
      projects: ["Administrasi Sekolah & Organisasi"],
      evidence: "Validasi dan pembersihan data selama magang di OEMAH DIGITAL serta pengelolaan administrasi organisasi.",
      bg: "#475569",
      darkBg: "#1e293b",
      glow: "rgba(148, 163, 184, 0.5)",
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 3h6a1 1 0 011 1v1H8V4a1 1 0 011-1z"/><path d="M8.5 13l2 2 4-4"/></svg>'
    },
    {
      id: "git",
      name: "Git VCS",
      key: "I",
      category: "Tools & Version Control",
      description: "Distributed Version Control System untuk mencatat riwayat perubahan dan integrasi kode cabang.",
      projects: ["GitHub Repositories"],
      evidence: "Branching workflow, commit history tracking, conflict resolution, dan sinkronisasi repositori.",
      bg: "#ef4444",
      darkBg: "#991b1b",
      glow: "rgba(239, 68, 68, 0.6)",
      iconSvg: '<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.7 4.7l2.7 2.7c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.6 2.6c.6-.2 1.3-.1 1.8.4.8.8.8 2 0 2.8s-2 .8-2.8 0c-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.3c.2.2.3.5.3.8 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.4.2-.8.5-1.1V9.4c-.3-.3-.5-.7-.5-1.1 0-.4.2-.8.4-1.1L7.7 4.6 2.4 9.9c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.1z"/></svg>'
    },
    {
      id: "github",
      name: "GitHub",
      key: "G",
      category: "Tools & Version Control",
      description: "Platform kolaborasi kode, hosting repositori, issue tracking, dan code review open-source.",
      projects: ["github.com/Narendrarizqi"],
      evidence: "Hosting repositori portfolio, pengelolaan README dokumentasi, serta integrasi repositori aktif.",
      bg: "#18181b",
      darkBg: "#09090b",
      glow: "rgba(255, 255, 255, 0.35)",
      iconSvg: '<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>'
    }
  ],

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
        { name: "Data-Driven Decision", projectEvidence: "MySkill Certification", description: "Analisis data kuantitatif untuk formulasi keputusan bisnis strategis" },
        { name: "Data Storytelling & Insight", projectEvidence: "MySkill Certification", description: "Komunikasi insight data naratif dan visualisasi presentasi analitis" },
        { name: "Google Sheets", projectEvidence: "Data Management & KPU", description: "Cloud collaboration, validation rules, record keeping" },
        { name: "Data Entry & Validation", projectEvidence: "OEMAH DIGITAL & Organisasi", description: "Verification, consistency check, duplicate removal" }
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

  certificates: [
    {
      id: "belajar-dasar-pemrograman-web",
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      issueDate: "Sep 2026",
      expiryDate: "Sep 2029",
      credentialId: "KEXLM0GNYZG2",
      credentialUrl: "https://www.dicoding.com/certificates/KEXLM0GNYZG2",
      description: "Kompetensi dasar pemrograman web meliputi HTML semantik, CSS layouting (Flexbox), desain responsif dengan media query, serta implementasi proyek website. Durasi belajar 41 jam.",
      skills: ["HTML", "CSS", "Flexbox", "Responsive Design", "Web Development"]
    },
    {
      id: "data-driven-decision",
      title: "Data Driven-Decission",
      issuer: "MySkill",
      issueDate: "Sep 2026",
      credentialId: "MS-20260912-9CJbVW3bRCIDevlcNrfz",
      credentialUrl: "https://storage.googleapis.com/myskill-v2-certificates/course-k2enbVZLOOdfyZmm4jtK/JsSoVh8a2fPgxgS9tF3RvLEnk3y1-9CJbVW3bRCIDevlcNrfz.pdf",
      description: "Penerapan analisis data kuantitatif dan kualitatif untuk perumusan keputusan strategis bisnis secara objektif dan terukur.",
      skills: ["Data-Driven Decision", "Business Intelligence", "Decision Science"]
    },
    {
      id: "data-story",
      title: "Data Story",
      issuer: "MySkill",
      issueDate: "Sep 2026",
      credentialId: "MS-20260908-JP2ZKgQLlk8ckr6dGnfc",
      credentialUrl: "https://storage.googleapis.com/myskill-v2-certificates/course-q7KWU9WMhrjXNfJa4XNI/JsSoVh8a2fPgxgS9tF3RvLEnk3y1-JP2ZKgQLlk8ckr6dGnfc.pdf",
      description: "Menyusun narasi komprehensif berbasis data (data storytelling) untuk mengomunikasikan temuan analitis kepada stakeholders bisnis.",
      skills: ["Data Storytelling", "Communication", "Data Presentation"]
    },
    {
      id: "data-story-vs-dashboard",
      title: "Data Story Vs Dashboard",
      issuer: "MySkill",
      issueDate: "Sep 2026",
      credentialId: "MS-20260911-wQ0XZKGKkqiR1ypPdtcm",
      credentialUrl: "https://storage.googleapis.com/myskill-v2-certificates/course-XtzMelJZOvXo7WmjUVfj/JsSoVh8a2fPgxgS9tF3RvLEnk3y1-wQ0XZKGKkqiR1ypPdtcm.pdf",
      description: "Komparasi serta integrasi efisiensi visualisasi dashboard interaktif dengan alur narasi presentasi analitis.",
      skills: ["Dashboard Design", "Data Visualization", "Business Analytics"]
    },
    {
      id: "data-to-insight",
      title: "Data to Insight",
      issuer: "MySkill",
      issueDate: "Sep 2026",
      credentialId: "MS-20260909-ds2PdHvbFg1PaAAIhAIW",
      credentialUrl: "https://storage.googleapis.com/myskill-v2-certificates/course-IfblYHiiZHHYa4YCjP0a/JsSoVh8a2fPgxgS9tF3RvLEnk3y1-ds2PdHvbFg1PaAAIhAIW.pdf",
      description: "Transformasi data mentah melalui eksplorasi, agregasi, dan pembersihan hingga menghasilkan actionable business insights.",
      skills: ["Data Analysis", "Insight Generation", "Data Exploration"]
    },
    {
      id: "understanding-data",
      title: "Understanding Data",
      issuer: "MySkill",
      issueDate: "Sep 2026",
      credentialId: "MS-20260907-qokT4zqApaLw70VnZ0nW",
      credentialUrl: "https://storage.googleapis.com/myskill-v2-certificates/course-W0osXQQHtwWNBukgOw0s/JsSoVh8a2fPgxgS9tF3RvLEnk3y1-qokT4zqApaLw70VnZ0nW.pdf",
      description: "Pemahaman fundamental tipe data, struktur dataset, relasi data, serta validitas data statistik dasar.",
      skills: ["Data Fundamentals", "Data Types", "Statistical Thinking"]
    },
    {
      id: "understanding-business-process",
      title: "Understanding Business Process",
      issuer: "MySkill",
      issueDate: "Sep 2026",
      credentialId: "MS-20260908-qxVv1HGPD7vf3fGRhkgt",
      credentialUrl: "https://storage.googleapis.com/myskill-v2-certificates/course-ffJM3e1k2iFOteySYrHG/JsSoVh8a2fPgxgS9tF3RvLEnk3y1-qxVv1HGPD7vf3fGRhkgt.pdf",
      description: "Pemodelan dan pemetaan proses bisnis operasional untuk mengidentifikasi metrik kunci (KPI) dan optimalisasi alur kerja.",
      skills: ["Business Process", "KPI Tracking", "Operational Analysis"]
    },
    {
      id: "hp-life-networking",
      title: "Jaringan Profesional untuk Pertumbuhan Karier",
      issuer: "HP (HP LIFE)",
      issueDate: "Sep 2026",
      credentialId: "c923b86a-7cf3-496a-b780-f8b40b53a80c",
      credentialUrl: "https://www.life-global.org/certificate/c923b86a-7cf3-496a-b780-f8b40b53a80c",
      description: "Strategi pengembangan jejaring profesional industri, kolaborasi lintas tim, dan percepatan pertumbuhan karir di industri teknologi.",
      skills: ["Professional Networking", "Career Growth", "Cross-functional Collaboration"]
    }
  ]
};

