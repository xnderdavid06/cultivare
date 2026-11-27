import Link from 'next/link';
import PlantImage from './PlantImage.js';

export default function PlantCard({ plant }) {
  return (
    <Link
      href={`/${plant.slug}`}
      className="plant-card-link block group text-left h-full focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-leaf-dark rounded-3xl"
      aria-label={`Buka informasi lengkap tanaman ${plant.namaLokal}`}
    >
      <article className="card-cream h-full flex flex-col justify-between relative transition-all active:translate-y-1">
        <div>
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
            <h2 className="font-display font-bold text-base sm:text-xl text-bark leading-tight">
              {plant.namaLokal}
            </h2>
            <p className="text-xs sm:text-sm italic font-semibold text-leaf-dark mt-0.5 leading-snug">
              {plant.namaIlmiah}
            </p>
            <p className="text-[11px] sm:text-xs text-bark/70 mt-1 font-medium">
              Famili: <span className="italic font-bold">{plant.famili}</span>
            </p>
          </div>
        </div>

        {/* ── Tombol Papan Kayu Bawah Sesuai Gambar 2 ── */}
        <div className="px-3 pb-3.5 pt-1">
          <div className="relative flex items-center justify-center py-2.5 px-3">
            <img
              src="/assets/wood-plank.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-fill drop-shadow-sm select-none pointer-events-none"
            />
            <span className="relative z-10 font-display font-black text-xs sm:text-sm text-[#4a220a] drop-shadow-[0_1px_1px_rgba(255,235,200,0.85)] tracking-wide pb-0.5">
              Lihat Detail
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
