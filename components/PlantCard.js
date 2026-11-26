import Link from 'next/link';
import PlantImage from './PlantImage.js';

export default function PlantCard({ plant }) {
  return (
    <Link
      href={`/${plant.slug}`}
      className="block group text-left h-full active:translate-y-1 transition-transform focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-leaf-dark rounded-3xl"
      aria-label={`Buka informasi lengkap tanaman ${plant.namaLokal}`}
    >
      <article className="card-cream overflow-hidden h-full flex flex-col justify-between">
        <div>
          {/* ── Foto Persegi dengan Badge Roowy di Setiap Tumbuhan ── */}
          <div className="relative aspect-square overflow-hidden rounded-t-[1.3rem] bg-[#fdf9e8]">
            <PlantImage
              src={plant.foto}
              alt={`Foto spesimen ${plant.namaLokal}`}
              className="w-full h-full object-cover"
            />
            {/* Maskot Roowy di Setiap Tanaman */}
            <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-[#fffae0] px-2 py-1 rounded-full border-2 border-[#7a4a22] shadow-[0_2px_0_#7a4a22]">
              <img
                src="/assets/roowy-mini.png"
                alt="Roowy"
                className="w-5 h-5 object-contain"
              />
              <span className="text-[11px] font-extrabold text-wood-dark tracking-wide">
                Roowy
              </span>
            </div>
          </div>

          {/* ── Nama & Identitas Sesuai Spesifikasi ── */}
          <div className="p-3.5 pb-2 text-center">
            <h2 className="font-display font-bold text-lg sm:text-xl text-bark leading-tight">
              {plant.namaLokal}
            </h2>
            <p className="text-sm italic font-semibold text-leaf-dark mt-0.5 leading-snug">
              {plant.namaIlmiah}
            </p>
            <p className="text-xs text-bark/75 mt-1 font-medium">
              Famili: <span className="italic font-bold">{plant.famili}</span>
            </p>
          </div>
        </div>

        {/* ── Papan Label Bawah Kartu ── */}
        <div className="px-3 pb-3 pt-1">
          <div className="w-full py-1.5 bg-[#f6b830] text-wood-dark font-display font-bold text-xs rounded-xl text-center shadow-[0_2px_0_#b57b45]">
            Lihat Detail Tanaman
          </div>
        </div>
      </article>
    </Link>
  );
}
