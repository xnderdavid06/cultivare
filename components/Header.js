import Link from 'next/link';
import { site } from '../data/plants.js';

export default function Header({ minimal = false }) {
  return (
    <header className="relative z-10 pt-5 pb-2 px-3 text-center select-none">
      {/* ── Subtitle event ── */}
      <div className="mb-2 text-center">
        <p className="text-xs sm:text-sm md:text-base font-black uppercase tracking-[0.2em] text-[#fffde6] drop-shadow-[0_2px_0_#14422e] drop-shadow-[0_4px_8px_rgba(20,66,46,0.6)] select-none font-sans">
          {site.event}
        </p>
      </div>

      {/* ── Papan Aksen Kayu Judul CULTIVARE (Sesuai Gambar 2: Lengkung & Proporsional Sempurna) ── */}
      <div className="relative inline-flex items-center justify-center max-w-full">
        <Link
          href="/"
          className="inline-block focus-visible:outline-none group active:translate-y-1 transition-transform max-w-full"
          aria-label="Ke halaman beranda Cultivare"
        >
          <div className="w-[300px] xs:w-[320px] sm:w-[420px] md:w-[490px] max-w-full group-hover:scale-[1.02] transition-transform">
            <svg
              viewBox="0 0 866 294"
              className="w-full h-auto overflow-visible drop-shadow-[0_6px_16px_rgba(70,35,15,0.4)]"
            >
              <defs>
                {/* Gradien Sunny Yellow ke Fresh Lime Sprout */}
                <linearGradient id="cultivareTitleGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fff9a6" />
                  <stop offset="25%" stopColor="#fde468" />
                  <stop offset="50%" stopColor="#e2d755" />
                  <stop offset="78%" stopColor="#b2df66" />
                  <stop offset="100%" stopColor="#88c845" />
                </linearGradient>

                {/* Filter Efek Kedalaman Huruf di Papan Kayu */}
                <filter id="woodTextDepth" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="2.5" stdDeviation="1.5" floodColor="#3d1b06" floodOpacity="0.75" />
                  <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.3" />
                </filter>

                {/* Garis lengkung simetris persis mengikuti lengkungan papan kayu */}
                <path id="cultivareArc" d="M 80 188 Q 433 124 786 188" fill="none" />
              </defs>

              {/* Background Papan Kayu Asli Lengkung Sesuai Gambar 2 */}
              <image href="/assets/wood-plank.png" x="0" y="0" width="866" height="294" />

              {/* Judul CULTIVARE yang Melengkung Anggun & Proporsional Rapi */}
              <text
                fontFamily="'Playfair Display', Georgia, serif"
                fontWeight="700"
                fontSize="82"
                letterSpacing="7"
                fill="url(#cultivareTitleGrad)"
                filter="url(#woodTextDepth)"
              >
                <textPath href="#cultivareArc" xlinkHref="#cultivareArc" startOffset="50%" textAnchor="middle">
                  {site.title.toUpperCase()}
                </textPath>
              </text>
            </svg>
          </div>
        </Link>
      </div>

      {/* ── Tagline (hanya tampil di halaman beranda / non-minimal) ── */}
      {!minimal && (
        <p className="mt-2 text-white/95 text-xs sm:text-sm font-extrabold tracking-wider drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.6)]">
          {site.tagline}
        </p>
      )}
    </header>
  );
}
