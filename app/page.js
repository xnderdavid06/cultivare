import Header from '../components/Header.js';
import PlantCard from '../components/PlantCard.js';
import { plants, site } from '../data/plants.js';

export const metadata = {
  title: `${site.title} · ${site.tagline}`,
  description: `Katalog tanaman herbal koleksi ${site.event} bersama Roowy: kunyit, jahe merah, serai, dan temulawak.`,
};

export default function HomePage() {
  return (
    <div className="min-h-screen relative pb-16">
      <div className="relative max-w-2xl mx-auto px-4">
        {/* Header dengan Maskot Roowy */}
        <Header />

        {/* ── Kalimat Pengantar Putih Bersih Sesuai Spesifikasi ── */}
        <p className="text-center text-white text-base md:text-lg font-semibold leading-relaxed mt-2 mb-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] px-2">
          Pindai QR Code pada papan nama tanaman di kebun memakai HP untuk
          langsung membuka informasi lengkap dan panduan perawatannya bersama Roowy.
        </p>

        {/* ── Grid 2 Kolom Kartu Tanaman ── */}
        <section aria-label="Daftar tanaman herbal">
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {plants.map((plant) => (
              <PlantCard key={plant.slug} plant={plant} />
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="mt-12 text-center text-white/85 text-xs font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] pb-6">
          <p>© 2026 {site.event} · {site.title}</p>
          <p className="mt-1">Informasi ini bersifat edukasi dan bukan pengganti saran dokter.</p>
        </footer>
      </div>
    </div>
  );
}
