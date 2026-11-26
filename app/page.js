import Header from '../components/Header.js';
import PlantCard from '../components/PlantCard.js';
import { plants, site } from '../data/plants.js';

export const metadata = {
  title: `${site.title} · ${site.tagline}`,
  description: `Pelajari tanaman herbal koleksi ${site.event}: kunyit, jahe merah, serai, dan temulawak.`,
};

export default function HomePage() {
  return (
    <div className="bg-nature min-h-screen bg-fixed">
      {/* Latar gradasi fixed */}
      <div className="fixed inset-0 bg-nature -z-20" />

      <div className="relative max-w-2xl mx-auto px-4 pb-12">
        <Header />

        {/* Kalimat pengantar */}
        <p className="text-center text-white text-base md:text-lg leading-relaxed mt-4 mb-8 drop-shadow px-2">
          Selamat datang! Pindai QR Code pada papan nama tanaman atau pilih
          tanaman di bawah untuk mempelajari manfaat dan cara perawatannya. 🌱
        </p>

        {/* Grid kartu */}
        <section aria-label="Daftar tanaman herbal">
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {plants.map((plant) => (
              <PlantCard key={plant.slug} plant={plant} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-center text-white/70 text-xs">
          <p>© 2026 {site.event} · {site.title}</p>
          <p className="mt-1">Informasi ini bersifat edukasi dan bukan pengganti saran dokter.</p>
        </footer>
      </div>
    </div>
  );
}
