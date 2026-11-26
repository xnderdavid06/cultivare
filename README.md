# Cultivare – Katalog Tanaman Herbal
**Kampung Binaan Mahasiswa X**

Website katalog tanaman herbal berbasis QR Code. Pengunjung memindai QR Code pada papan nama tanaman dan langsung membuka halaman detail tanamannya di HP.

---

## 🚀 Cara Menjalankan Lokal

```bash
# Install dependensi (sekali saja)
npm install

# Jalankan server pengembangan
npm run dev
# → Buka http://localhost:3000
```

---

## 📸 Cara Menambah / Mengganti Foto Tanaman

1. Taruh file JPG di `public/plants/`, nama file = slug tanaman.
   Contoh: `public/plants/kunyit.jpg`
2. Buka `data/plants.js`, cari field `foto` pada tanaman yang bersangkutan.
3. Isi dengan path: `"/plants/kunyit.jpg"`
4. Kosongkan (`""`) jika foto belum ada – otomatis tampil maskot sebagai placeholder.

**Status Foto Tanaman**:
Semua foto sudah berhasil diunduh, diverifikasi secara visual, dan dioptimasi (JPG <= 1200px, kualitas 80):
- `public/plants/kunyit.jpg` – Curcuma longa roots (Simon A. Eugster, CC BY-SA 3.0)
- `public/plants/jahe-merah.jpg` – Zingiber officinale rhizome (Mk2010, CC BY-SA 4.0)
- `public/plants/serai.jpg` – Cymbopogon citratus (Mokkie, CC BY-SA 4.0)
- `public/plants/temulawak.jpg` – Curcuma zanthorrhiza (Herusutimbul, CC BY-SA 4.0)

Jika ingin mengunduh ulang di masa depan, gunakan script PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File .\unduh-foto.ps1
```

---

## ✏️ Cara Mengedit Data Tanaman

Semua data ada di **`data/plants.js`** – satu-satunya file yang perlu diedit untuk mengubah konten.

Buka file tersebut dan ikuti komentar di atasnya:
- **Mengedit teks**: langsung ganti nilai string (antara tanda kutip).
- **Menambah tanaman**: salin satu blok `{ slug, namaLokal, ... }`, tempel di akhir array, ganti slugnya.
- **Mengganti foto**: taruh JPG di `public/plants/`, isi field `foto`.

---

## 🌐 Cara Upload ke GitHub

```bash
# Dari folder proyek (d:\BEM\cultivare)
git init
git add .
git commit -m "feat: inisialisasi proyek Cultivare Katalog Herbal"

# Buat repo baru di https://github.com/new (misalnya: cultivare-katalog)
# lalu sambungkan dan push:
git remote add origin https://github.com/NAMA_AKUN/cultivare-katalog.git
git branch -M main
git push -u origin main
```

---

## ☁️ Cara Deploy ke Vercel

1. Buka https://vercel.com dan login (atau daftar gratis).
2. Klik **"Add New → Project"**.
3. Klik **"Import"** di sebelah repo `cultivare-katalog` dari GitHub.
4. Biarkan semua pengaturan default (Framework: **Next.js**, Build Command: `next build`, Output Directory: otomatis dikelola Next.js).
5. Klik **"Deploy"** – tunggu sekitar 1–2 menit.
6. URL project akan aktif, misalnya: `https://cultivare-katalog.vercel.app`

---

## 🔗 Format URL QR Code per Tanaman

```
https://NAMA-PROJECT.vercel.app/kunyit
https://NAMA-PROJECT.vercel.app/jahe-merah
https://NAMA-PROJECT.vercel.app/serai
https://NAMA-PROJECT.vercel.app/temulawak
```

Contoh jika nama project Vercel adalah `cultivare-katalog`:
```
https://cultivare-katalog.vercel.app/kunyit
```

Buat QR Code di https://www.qr-code-generator.com/ atau https://qr.io/ – masukkan URL di atas, unduh PNG, cetak di papan nama tanaman.

---

## 📂 Struktur File

```
cultivare/
├── app/
│   ├── layout.js          # Root layout (font, metadata global)
│   ├── globals.css        # Tailwind + custom class (.plank, .card-cream, dll)
│   ├── page.js            # Halaman utama "/" – grid kartu tanaman
│   ├── [slug]/page.js     # Halaman detail "/kunyit", "/serai", dll
│   └── not-found.js       # Halaman 404
├── components/
│   ├── Header.js          # Header dengan maskot dan judul Cultivare
│   ├── PlantCard.js       # Kartu tanaman di halaman utama
│   └── PlantImage.js      # Gambar dengan fallback maskot (client component)
├── data/
│   └── plants.js          # ← EDIT DI SINI untuk konten tanaman
├── public/
│   ├── assets/
│   │   ├── maskot-badge.png        # Maskot lingkaran (dipotong dari poster)
│   │   ├── referensi-poster.png    # Poster asli (hanya referensi)
│   │   └── referensi-grid.png      # Grid coming soon (hanya referensi)
│   └── plants/
│       ├── kunyit.jpg              # Foto tanaman (isi manual)
│       ├── jahe-merah.jpg
│       ├── serai.jpg
│       └── temulawak.jpg
├── next.config.js         # output: 'export' untuk static site
├── tailwind.config.js     # Palet warna Cultivare
└── package.json
```

---

## 🎨 Asumsi Desain

1. **Font**: `Playfair Display` (judul) dan `Nunito` (isi) di-load dari Google Fonts CDN via `<link>` di HTML. Font hanya tersedia saat ada koneksi internet – fallback ke `Georgia` / `system-ui` jika offline.
2. **Foto jahe merah**: Foto yang dipakai adalah jahe biasa (*Zingiber officinale*) karena tidak ditemukan foto jahe merah berkulit kemerahan yang jelas di Wikimedia Commons dengan lisensi bebas. Foto tetap akurat secara ilmiah untuk spesiesnya; perbedaan varietas tidak mudah terlihat dari foto rimpang biasa. Ini dicatat sebagai keterbatasan.
3. **Static Export**: `next.config.js` menggunakan `output: 'export'` agar kompatibel dengan Vercel static hosting dan GitHub Pages.
4. **QR Code**: Tidak di-generate otomatis di website – dibuat terpisah sesuai petunjuk di atas.
5. **Foto tanaman**: Semua foto harus diunduh manual (lihat instruksi di atas) karena Wikimedia Commons mem-blokir pengunduhan otomatis saat development.

---

*Dibuat dengan ❤️ untuk Kampung Binaan Mahasiswa X · Cultivare 2026*
