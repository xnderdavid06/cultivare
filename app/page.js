import Header from '../components/Header.js';
import PlantCard from '../components/PlantCard.js';
import RoowyInteractive from '../components/RoowyInteractive.js';
import { plants, site } from '../data/plants.js';

export const metadata = {
  title: `${site.title} · ${site.tagline}`,
  description: `Katalog tanaman herbal koleksi ${site.event} bersama Roowy.`,
};

export default function HomePage() {
  return (
    <div className="min-h-screen relative pb-16 overflow-x-hidden">
      {/* ── Lapisan Awan Melayang Mengalir di Langit (-z-10 di balik konten) ── */}
      <img
        src="/assets/awan 1.png"
        alt=""
        aria-hidden="true"
        className="fixed top-6 -left-12 w-48 sm:w-64 opacity-70 pointer-events-none select-none anim-drift-l -z-10"
      />
      <img
        src="/assets/awan 2.png"
        alt=""
        aria-hidden="true"
        className="fixed top-20 -right-16 w-56 sm:w-72 opacity-70 pointer-events-none select-none anim-drift-r -z-10"
      />
      <img
        src="/assets/awan 3.png"
        alt=""
        aria-hidden="true"
        className="fixed top-2 left-1/3 w-40 sm:w-52 opacity-60 pointer-events-none select-none anim-drift-l -z-10"
      />

      {/* ── Dedaunan Hijau Melayang di Tepi Layar (-z-10, terpisah & tidak menumpuk) ── */}
      <img
        src="/assets/dedaunan.png"
        alt=""
        aria-hidden="true"
        className="fixed top-48 -left-8 w-20 sm:w-24 opacity-75 pointer-events-none select-none anim-sway -z-10 hidden sm:block"
      />
      <img
        src="/assets/dedaunan.png"
        alt=""
        aria-hidden="true"
        className="fixed bottom-36 -right-8 w-20 sm:w-24 opacity-75 pointer-events-none select-none anim-sway -z-10 hidden sm:block"
        style={{ animationDelay: '1.5s', transform: 'scaleX(-1)' }}
      />

      <div className="relative max-w-2xl mx-auto px-4 z-10">
        {/* ── Header: Roowy menyapa di samping judul CULTIVARE ── */}
        <Header />

        {/* ── Dialog Interaktif Roowy ── */}
        <RoowyInteractive />

        {/* ── Banner Petunjuk QR Scanner Otentik ── */}
        <div className="mt-2 mb-3.5 sm:mt-2.5 sm:mb-4 text-center">
          <div className="inline-flex items-center gap-2.5 bg-[#fffae0]/95 border-2 border-[#e8d79a] px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-[0_2.5px_0_rgba(122,74,34,0.18)] hover:scale-[1.02] transition-transform">
            <div className="w-6 h-6 rounded-lg bg-[#f6b830] border border-[#b57b45] flex items-center justify-center shrink-0 shadow-sm text-wood-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                <rect x="7" y="7" width="10" height="10" rx="1.5" />
              </svg>
            </div>
            <p className="text-bark text-xs sm:text-sm font-bold text-left sm:text-center">
              Pindai QR Code di kebun atau ketuk kartu tanaman di bawah!
            </p>
          </div>
        </div>

        {/* ── Grid 2 kolom kartu tanaman ── */}
        <section aria-label="Daftar tanaman herbal">
          <div className="grid grid-cols-2 auto-rows-fr gap-4 md:gap-5">
            {plants.map((plant) => (
              <PlantCard key={plant.slug} plant={plant} />
            ))}
          </div>
        </section>

        {/* ── Footer Bersih & Hangat ── */}
        <footer className="mt-14 text-center text-white text-xs font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] pb-8 space-y-1">
          <p>© 2026 {site.event} · {site.title}</p>
          <p>Informasi ini bersifat edukasi dan bukan pengganti saran dokter.</p>
        </footer>
      </div>
    </div>
  );
}
