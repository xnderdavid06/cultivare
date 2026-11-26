import Link from 'next/link';
import { site } from '../data/plants.js';

export default function Header({ minimal = false }) {
  return (
    <header className="relative z-10 pt-8 pb-4 px-4 text-center">
      {/* ── 3 Awan Asli dari Aset Pengguna ── */}
      <img
        src="/assets/awan 1.png"
        alt=""
        aria-hidden="true"
        className="fixed top-6 -left-12 w-48 opacity-80 -z-10 pointer-events-none select-none"
      />
      <img
        src="/assets/awan 2.png"
        alt=""
        aria-hidden="true"
        className="fixed top-14 -right-12 w-56 opacity-80 -z-10 pointer-events-none select-none"
      />
      <img
        src="/assets/awan 3.png"
        alt=""
        aria-hidden="true"
        className="fixed top-2 left-1/3 w-40 opacity-70 -z-10 pointer-events-none select-none"
      />

      {/* ── Maskot Roowy di Header (Border Krem Tebal) ── */}
      <div className="flex justify-center mb-3">
        <Link
          href="/"
          aria-label="Ke halaman utama katalog"
          className="active:translate-y-1 transition-transform"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-cream shadow-[0_4px_0_#7a4a22] bg-[#fbf5dc] overflow-hidden flex items-center justify-center">
            <img
              src="/assets/roowy-clean.png"
              alt="Roowy si maskot tunas"
              className="w-18 h-18 md:w-22 md:h-22 object-contain"
            />
          </div>
        </Link>
      </div>

      {/* ── Teks Kapital Berspasi Acara ── */}
      <p className="text-xs uppercase tracking-[0.2em] text-white font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] mb-1">
        {site.event}
      </p>

      {/* ── Judul Cultivare (Font Playfair Display Tebal, Gradasi Kuning ke Hijau) ── */}
      <div className="relative inline-block">
        <Link
          href="/"
          className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-dark rounded-lg active:translate-y-1 transition-transform"
        >
          <h1 className="title-grad text-6xl md:text-7xl leading-none select-none tracking-tight">
            {site.title}
          </h1>
        </Link>
      </div>

      {/* ── Label Papan Kayu Asli "Katalog Tanaman Herbal" ── */}
      {!minimal && (
        <div className="mt-3 flex justify-center">
          <span className="plank px-6 py-2 text-sm md:text-base inline-block">
            {site.tagline}
          </span>
        </div>
      )}
    </header>
  );
}
