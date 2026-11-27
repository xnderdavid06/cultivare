import Link from 'next/link';
import PlantImage from './PlantImage.js';

export default function PlantCard({ plant }) {
  return (
    <Link
      href={`/${plant.slug}`}
      className="plant-card-link block group text-left h-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf-dark rounded-3xl"
      aria-label={`Buka informasi lengkap tanaman ${plant.namaLokal}`}
    >
      <article className="card-cream h-full flex flex-col relative overflow-hidden transition-all active:translate-y-1">
        <div className="flex flex-col flex-1">
          {/* ── Foto Tanaman Persegi 1:1 ── */}
          <div className="relative aspect-square overflow-hidden rounded-t-[1.3rem] bg-[#fdf9e8]">
            <PlantImage
              src={plant.foto}
              alt={`Foto spesimen ${plant.namaLokal}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* ── Nama & Identitas Tanaman ── */}
          <div className="px-3 pt-3.5 pb-2 text-center">
            <h2 className="font-display font-bold text-base sm:text-xl text-bark leading-tight break-words">
              {plant.namaLokal}
            </h2>
            <p className="text-xs sm:text-sm italic font-semibold text-leaf-dark mt-0.5 leading-snug break-words">
              {plant.namaIlmiah}
            </p>
            <p className="text-[11px] sm:text-xs text-bark/70 mt-1 font-medium break-words">
              Famili: <span className="italic font-bold">{plant.famili}</span>
            </p>
          </div>
        </div>

        {/* ── Tombol Signboard Kayu (selalu sejajar di bawah kartu) ── */}
        <div className="px-3 pb-3.5 pt-1 mt-auto">
          <div className="wood-sign flex items-center justify-center min-h-[44px] px-2 sm:px-4 py-2">
            <span className="relative z-10 font-display font-black text-xs sm:text-sm text-[#4a220a] drop-shadow-[0_1px_1px_rgba(255,235,200,0.85)] tracking-wide whitespace-nowrap pb-0.5">
              Lihat Detail
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
