'use client';
import { useState } from 'react';

const PESAN = [
  'Halo! Aku Roowy, penjaga kebun herbal ini. Ketuk aku terus buat tips rahasia!',
  'Tahukah kamu? Kunyit dan temulawak adalah sepupu jauh dari keluarga jahe-jahean!',
  'Tanaman herbal di kebun ini dirawat tanpa pestisida kimia berbahaya. Alam banget!',
  'Pindai QR di papan nama tanaman untuk buka info lengkap langsung dari sini!',
  'Rutin minum jamu dari tanaman kebun ini bisa bantu jaga daya tahan tubuh!',
  'Rimpang kunyit yang oranye terang itu karena kandungan kurkumin yang tinggi!',
];

export default function RoowyInteractive({ plantNote = null }) {
  const [idx, setIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const handleKetuk = () => {
    setIdx((prev) => (prev + 1) % PESAN.length);
    setAnimKey((k) => k + 1);
  };

  const teks = plantNote || PESAN[idx];

  return (
    <div className="card-cream relative my-6 p-4 sm:p-6">
      <div className="flex items-center gap-3.5 sm:gap-5">

        {/* ── Kepala Roowy Interaktif & Tetap Bergoyang Ceria – Ukuran Terkunci Mutlak Sesuai Image 2 ── */}
        <button
          type="button"
          onClick={handleKetuk}
          aria-label="Ketuk Roowy untuk tips lain"
          className="shrink-0 p-0 m-0 bg-transparent border-0 flex flex-col items-center justify-center focus:outline-none group active:translate-y-1 transition-transform cursor-pointer"
          style={{
            width: '76px',
            height: '76px',
            minWidth: '76px',
            minHeight: '76px',
            maxWidth: '76px',
            maxHeight: '76px',
          }}
        >
          <div
            className="w-full h-full flex items-center justify-center overflow-visible"
            style={{ width: '100%', height: '100%' }}
          >
            <img
              src="/assets/roowy-head.png"
              alt="Kepala Roowy si maskot tunas"
              width={76}
              height={76}
              className="w-full h-full object-contain anim-bob drop-shadow-md group-hover:scale-105 group-active:scale-95 transition-transform select-none pointer-events-none"
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </button>

        {/* ── Box Chat Roowy yang Lebih Besar & Nyaman Dibaca ── */}
        <div className="flex-1 min-w-0">
          {/* key berubah → animasi pop muncul lagi setiap ketuk */}
          <div
            key={animKey}
            className="anim-pop relative bg-[#fffdf0] border-2 sm:border-3 border-[#d8b878] rounded-2xl sm:rounded-3xl px-5 py-4 sm:px-6 sm:py-5 shadow-[inset_0_1px_4px_rgba(200,160,80,0.18)]"
          >
            {/* Ekor balon ke kiri (menunjuk ke arah kepala Roowy) */}
            <div className="absolute -left-[12px] top-6 sm:top-7 w-0 h-0
              border-t-[9px] border-t-transparent
              border-r-[12px] border-r-[#d8b878]
              border-b-[9px] border-b-transparent" />
            <div className="absolute -left-[8px] top-[26px] sm:top-[30px] w-0 h-0
              border-t-[7px] border-t-transparent
              border-r-[9px] border-r-[#fffdf0]
              border-b-[7px] border-b-transparent" />

            <p className="text-bark text-base sm:text-lg md:text-xl leading-relaxed font-bold">
              "{teks}"
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
