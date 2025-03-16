import type { EssaysData } from '@/types/essay';

export const essays: EssaysData['essays'] = [
  {
    "title": "Memahami React Hooks: useState dan useEffect",
    "excerpt": "Pelajari dasar-dasar React Hooks dan bagaimana cara menggunakannya untuk membuat komponen fungsional lebih powerful.",
    "date": "12 Mar 2023",
    "readTime": "5 menit baca",
    "slug": "memahami-react-hooks",
    "categories": ["React", "JavaScript", "Web Development"],
    "content": "# Memahami React Hooks\n\nReact Hooks adalah fitur yang diperkenalkan pada React 16.8 yang memungkinkan Anda menggunakan state dan fitur React lainnya tanpa menulis sebuah kelas...\n\n## useState Hook\n\nHook useState adalah yang paling dasar dan sering digunakan. Hook ini memungkinkan kita untuk menambahkan state pada functional component...\n\n## useEffect Hook\n\nuseEffect memungkinkan Anda melakukan efek samping dalam function component. Ini adalah pengganti untuk lifecycle methods seperti componentDidMount, componentDidUpdate, dan componentWillUnmount..."
  },
  {
    "title": "Server-Side Rendering vs Static Site Generation di Next.js",
    "excerpt": "Membandingkan kelebihan dan kekurangan dari dua strategi rendering populer di Next.js.",
    "date": "25 Feb 2023",
    "readTime": "7 menit baca",
    "slug": "ssr-vs-ssg-nextjs",
    "categories": ["Next.js", "Performance", "Frontend"],
    "content": "# SSR vs SSG di Next.js\n\nNext.js menyediakan beberapa metode rendering yang berbeda, dua yang paling populer adalah Server-Side Rendering (SSR) dan Static Site Generation (SSG)...\n\n## Server-Side Rendering\n\nSSR menghasilkan HTML untuk setiap permintaan di server. Ini sangat berguna untuk konten yang sering berubah...\n\n## Static Site Generation\n\nSSG menghasilkan HTML pada waktu build. Ini ideal untuk halaman yang kontennya tidak sering berubah..."
  },
  {
    "title": "Mendesain Sistem Warna untuk UI Modern",
    "excerpt": "Panduan langkah demi langkah untuk membuat sistem warna yang konsisten dan accessible untuk proyek UI.",
    "date": "18 Jan 2023",
    "readTime": "4 menit baca",
    "slug": "sistem-warna-ui-modern",
    "categories": ["UI Design", "Accessibility", "CSS"],
    "content": [
      {
        "type": "paragraph",
        "text": "Sistem warna yang baik adalah fondasi dari desain UI modern. Sistem warna yang dipikirkan dengan baik membuat antarmuka Anda lebih konsisten, accessible, dan estetis."
      },
      {
        "type": "heading",
        "text": "Memilih Warna Primer dan Sekunder"
      },
      {
        "type": "paragraph",
        "text": "Warna primer adalah warna utama merek Anda, biasanya digunakan untuk elemen-elemen penting seperti tombol call-to-action. Warna sekunder melengkapi warna primer dan memberikan variasi visual."
      },
      {
        "type": "heading",
        "text": "Membuat Palet Warna Lengkap"
      },
      {
        "type": "paragraph",
        "text": "Untuk setiap warna primer dan sekunder, buat shade dan tint (variasi lebih gelap dan lebih terang) untuk memberikan fleksibilitas dalam desain Anda."
      },
      {
        "type": "code",
        "language": "css",
        "text": ":root {\n  /* Warna primer - Biru */\n  --blue-50: #e3f2fd;\n  --blue-100: #bbdefb;\n  --blue-200: #90caf9;\n  --blue-300: #64b5f6;\n  --blue-400: #42a5f5;\n  --blue-500: #2196f3; /* Warna Utama */\n  --blue-600: #1e88e5;\n  --blue-700: #1976d2;\n  --blue-800: #1565c0;\n  --blue-900: #0d47a1;\n\n  /* Warna sekunder - Jingga */\n  --orange-50: #fff3e0;\n  --orange-100: #ffe0b2;\n  --orange-200: #ffcc80;\n  --orange-300: #ffb74d;\n  --orange-400: #ffa726;\n  --orange-500: #ff9800; /* Warna Utama */\n  --orange-600: #fb8c00;\n  --orange-700: #f57c00;\n  --orange-800: #ef6c00;\n  --orange-900: #e65100;\n}"
      },
      {
        "type": "heading",
        "text": "Warna Netral"
      },
      {
        "type": "paragraph",
        "text": "Warna netral (abu-abu, hitam, putih) sering menjadi mayoritas warna dalam UI. Mereka memberikan fondasi dan membantu warna lain menonjol."
      },
      {
        "type": "heading",
        "text": "Accessibility"
      },
      {
        "type": "paragraph",
        "text": "Pastikan kontras warna text-to-background Anda memenuhi standar WCAG. Untuk teks normal, rasio kontras minimal adalah 4.5:1, dan untuk teks besar, minimal 3:1."
      },
      {
        "type": "heading",
        "text": "Implementasi dengan CSS Variables"
      },
      {
        "type": "paragraph",
        "text": "CSS Variables membuat implementasi sistem warna menjadi mudah dan konsisten di seluruh aplikasi Anda."
      },
      {
        "type": "heading",
        "text": "Kesimpulan"
      },
      {
        "type": "paragraph",
        "text": "Sistem warna yang dirancang dengan baik tidak hanya membuat UI Anda lebih menarik secara visual tetapi juga meningkatkan usability dan accessibility. Luangkan waktu untuk mengembangkan sistem yang solid, dan Anda akan melihat manfaatnya di seluruh proyek."
      }
    ]
  }
]; 