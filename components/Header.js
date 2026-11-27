import Link from 'next/link';
import { site } from '../data/plants.js';

export default function Header({ minimal = false }) {
  return (
    <header className="relative z-10 pt-2.5 sm:pt-3.5 pb-0 px-3 text-center select-none">
      {/* ── Subtitle event ── */}
      <div className="mb-1 text-center">
        <p className="text-[11px] sm:text-xs md:text-sm font-black uppercase tracking-[0.2em] text-[#fffde6] drop-shadow-[0_2px_0_#14422e] drop-shadow-[0_4px_8px_rgba(20,66,46,0.6)] select-none font-sans">
          {site.event}
        </p>
      </div>

      {/* ── Papan Aksen Kayu Judul CULTIVARE (Kompak, Teks Besar & Proporsional Sempurna) ── */}
      <div className="relative inline-flex items-center justify-center max-w-full">
        <Link
          href="/"
          className="inline-block focus-visible:outline-none group active:translate-y-1 transition-transform max-w-full"
          aria-label="Ke halaman beranda Cultivare"
        >
          <div className="w-[240px] xs:w-[265px] sm:w-[320px] md:w-[370px] max-w-full group-hover:scale-[1.02] transition-transform">
            <svg
              viewBox="0 0 866 220"
              className="w-full h-auto overflow-visible drop-shadow-[0_4px_12px_rgba(70,35,15,0.35)]"
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
                  <feDropShadow dx="0" dy="2.5" stdDeviation="1.5" floodColor="#3d1b06" floodOpacity="0.85" />
                  <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.35" />
                </filter>

                {/* Garis lengkung simetris persis di tengah papan (jarak atas dan bawah seimbang sempurna) */}
                <path id="cultivareArc" d="M 80 155 Q 433 107 786 155" fill="none" />
              </defs>

              {/* Background Papan Kayu Asli Lengkung Sesuai Gambar 2 (Ramping & Proporsional) */}
              <image href="/assets/wood-plank.png" x="0" y="0" width="866" height="220" />

              {/* Judul CULTIVARE yang Proporsional Rapi, Tanpa Ruang Kosong Berlebih */}
              <text
                fontFamily="'Playfair Display', Georgia, serif"
                fontWeight="800"
                fontSize="108"
                letterSpacing="5"
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
    </header>
  );
}
