import Link from 'next/link';
import { site } from '../data/plants.js';

export default function Header({ minimal = false }) {
  return (
    <header className="relative z-10 pt-8 pb-4 px-4 text-center">
      {/* Awan dekoratif */}
      <div
        aria-hidden="true"
        className="fixed top-6 left-[-60px] w-56 h-20 bg-white/60 rounded-full blur-2xl -z-10 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="fixed top-16 right-[-40px] w-72 h-24 bg-white/50 rounded-full blur-3xl -z-10 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="fixed top-2 left-[30%] w-48 h-16 bg-white/40 rounded-full blur-2xl -z-10 pointer-events-none"
      />

      {/* Maskot */}
      <div className="flex justify-center mb-3">
        <Link href="/" aria-label="Ke halaman utama">
          <img
            src="/assets/maskot-badge.png"
            alt="Maskot Cultivare – anak tunas bertopi jerami"
            width={88}
            height={88}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-cream shadow-lg shadow-wood/40 hover:scale-105 transition-transform duration-200"
          />
        </Link>
      </div>

      {/* Label event */}
      <p className="text-xs uppercase tracking-[0.2em] text-white font-semibold drop-shadow mb-1">
        {site.event}
      </p>

      {/* Judul */}
      <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf rounded-lg">
        <h1 className="font-display font-black text-6xl md:text-7xl leading-none title-grad select-none">
          {site.title}
        </h1>
      </Link>

      {/* Label papan kayu */}
      {!minimal && (
        <div className="mt-3 inline-block">
          <span className="plank px-6 py-2 text-sm md:text-base">
            🌿 {site.tagline}
          </span>
        </div>
      )}
    </header>
  );
}
