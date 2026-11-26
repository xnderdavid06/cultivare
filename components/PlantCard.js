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

        {/* ── Tombol Papan Kayu Bawah ── */}
        <div className="px-3 pb-3.5 pt-1">
          <div className="plank w-full py-2 text-xs sm:text-sm text-center border-2 border-[#965f2e]">
            Lihat Detail
          </div>
        </div>
      </article>
    </Link>
  );
}
