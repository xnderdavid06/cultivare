import Link from 'next/link';
import { site } from '../data/plants.js';

export default function Header({ minimal = false }) {
  return (
    <header className="relative z-10 pt-5 pb-3 px-3 text-center">
      {/* ── Header Elegan & Proporsional: CULTIVARE & KBM Selaras di Tengah ── */}
      <div className="relative inline-flex flex-col items-center justify-center max-w-xl mx-auto my-1 select-none">
        
        {/* Label KAMPUNG BINAAN MAHASISWA X (Font Style Sesuai Image 2: Bold, Chunky, Butter-Cream & Drop Shadow Tegas) */}
        <div className="mb-2 text-center">
          <p className="text-xs sm:text-sm md:text-base font-black uppercase tracking-[0.2em] text-[#fffde6] drop-shadow-[0_2px_0_#14422e] drop-shadow-[0_4px_8px_rgba(20,66,46,0.6)] select-none font-sans">
            {site.event}
          </p>
        </div>

        {/* Papan Aksen Kayu Pinus Alami CULTIVARE – Elegan, Simetris & Proporsional */}
        <Link
          href="/"
          className="inline-block focus-visible:outline-none group active:translate-y-1 transition-transform"
          aria-label="Ke halaman beranda Cultivare"
        >
          <div className="relative plank px-8 sm:px-12 md:px-14 py-2.5 sm:py-3.5 rounded-2xl sm:rounded-3xl border-2 sm:border-[2.5px] border-[#825832] shadow-[0_4px_0_#5c381c,0_10px_24px_rgba(92,56,28,0.25)] group-hover:scale-[1.02] transition-transform flex items-center justify-center">
            {/* Tunas hijau mungil di sudut kiri atas papan kayu */}
            <div className="absolute -top-3 -left-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#eef8ee] border-2 border-[#548a36] flex items-center justify-center text-xs sm:text-sm shadow-md select-none">
              🌱
            </div>

            {/* Judul CULTIVARE – Persis Image 2 Poster Resmi: Slender Serif, Sunny Yellow ke Fresh Lime Sprout */}
            <h1 className="title-grad text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider uppercase select-none font-display leading-tight">
              {site.title.toUpperCase()}
            </h1>
          </div>
        </Link>
      </div>
    </header>
  );
}
