# Aturan Pengembangan Website CV. Keel Mulia Jasa

Panduan dan batasan kerja baku untuk pengembangan website resmi CV. Keel Mulia Jasa.

## 1. Efisiensi & Kecepatan Eksekusi
- Jalankan tindakan perbaikan secara cepat, langsung ke inti masalah, tanpa proses berputar-putar.
- Laporkan status dengan ringkas, jelas, dan sertakan tautan verifikasi langsung.

## 2. Integritas Aset & Gambar
- **Dilarang Menebak Path Gambar**: Sebelum menggunakan tag `<img>` atau `Image`, selalu cek keberadaan file fisik di folder `public/images/`.
- **Gunakan Aset Asli**: Prioritaskan foto asli armada, operasional, dan surat legalitas yang sudah tersedia di folder `public/images/`.
- **Verifikasi Render**: Pastikan gambar memiliki status `HTTP 200` dan `naturalWidth > 0` saat diverifikasi di browser/build.

## 3. Animasi Kartu & Interaksi Scroll
- **Scroll-Triggered Only**: Elemen interaktif/kartu harus memicu animasi kemunculan murni saat pengguna melakukan scroll mendekati elemen terkait (*IntersectionObserver*).
- **Anti-Content Disappearance**: Jangan pernah membuat konten utama tersembunyi secara permanen. Berikan fallback aman agar teks dan informasi tetap terbaca meskipun JavaScript dinonaktifkan atau lambat dimuat.
- **Hindari Timer Auto-Reveal**: Jangan gunakan `setTimeout` global yang memunculkan semua elemen secara otomatis sebelum pengguna melakukan scroll.

## 4. Siklus Rilis & Verifikasi Live
- Setiap perubahan kode harus melewati:
  1. Validasi build: `npm run build` harus lolos tanpa error.
  2. Git Sync: Commit deskriptif dan langsung push ke branch `main`.
  3. Live Check: Verifikasi URL produksi Vercel (`https://keelmuliajasa-4m9h.vercel.app/`).
  4. Pengingat Cache: Selalu ingatkan pengguna untuk melakukan *Hard Refresh* (`Ctrl + F5` atau Incognito) jika ada aset CSS/gambar yang di-update.
