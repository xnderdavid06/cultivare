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

        {/* Papan Aksen Kayu Alami CULTIVARE Sesuai Gambar 2 */}
        <Link
          href="/"
          className="inline-block focus-visible:outline-none group active:translate-y-1 transition-transform max-w-full"
          aria-label="Ke halaman beranda Cultivare"
        >
          <div className="relative flex items-center justify-center px-6 sm:px-12 md:px-16 py-3.5 sm:py-5 md:py-6 group-hover:scale-[1.02] transition-transform">
            {/* Background Papan Kayu Asli Lengkung Sesuai Gambar 2 */}
            <img
              src="/assets/wood-plank.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-fill drop-shadow-[0_6px_16px_rgba(70,35,15,0.4)] select-none pointer-events-none"
            />

            {/* Tunas hijau mungil di sudut kiri atas papan kayu */}
            <div className="absolute -top-2 -left-1 sm:-top-2.5 sm:-left-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#eef8ee] border-2 border-[#548a36] flex items-center justify-center text-xs shadow-md select-none z-10">
              🌱
            </div>

            {/* Judul CULTIVARE – Persis Image 1 & 2: Slender Serif, Sunny Yellow ke Fresh Lime Sprout */}
            <h1 className="relative z-10 title-grad text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider uppercase select-none font-display leading-tight whitespace-nowrap px-3 sm:px-5 pb-0.5 sm:pb-1">
              {site.title.toUpperCase()}
            </h1>
          </div>
        </Link>
      </div>
    </header>
  );
}
