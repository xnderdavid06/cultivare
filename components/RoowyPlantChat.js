'use client';
import { useState } from 'react';

export default function RoowyPlantChat({ facts = [] }) {
  const [idx, setIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  if (!facts || facts.length === 0) return null;

  const handleTap = () => {
    setIdx((prev) => (prev + 1) % facts.length);
    setAnimKey((k) => k + 1);
  };

  return (
    <div className="relative mt-6 pt-1 flex items-center gap-3 sm:gap-4 select-none">
      {/* ── Kepala Roowy Ceria & Interaktif (Bisa Ditekan) – Ukuran Terkunci Mutlak Sesuai Image 2 ── */}
      <button
        type="button"
        onClick={handleTap}
        aria-label="Ketuk Roowy untuk fakta menarik lainnya"
        className="shrink-0 p-0 m-0 bg-transparent border-0 flex flex-col items-center justify-center rounded-full group active:scale-90 transition-transform cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf-dark focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffae0]"
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
            alt="Kepala Roowy"
            width={76}
            height={76}
            className="w-full h-full object-contain anim-bob drop-shadow-md group-hover:scale-105 transition-transform pointer-events-none select-none"
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

      {/* ── Balon Dialog Kata Roowy – Animasi Pop Setiap Ketuk (Sesuai Image 5) ── */}
      <button
        type="button"
        onClick={handleTap}
        className="flex-1 min-w-0 p-0 m-0 bg-transparent border-0 cursor-pointer text-left rounded-2xl sm:rounded-3xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf-dark focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffae0]"
        title="Ketuk untuk fakta seru berikutnya"
        aria-live="polite"
      >
        <div
          key={animKey}
          className="anim-pop relative bg-[#fffdf0] hover:bg-[#fffbee] border-2 sm:border-[3px] border-[#d8b878] rounded-2xl sm:rounded-3xl px-3.5 py-3 sm:px-5 sm:py-4 shadow-[inset_0_1px_4px_rgba(200,160,80,0.18)] transition-colors"
        >
          {/* Ekor balon dialog menunjuk ke arah kepala Roowy di kiri */}
          <div className="absolute -left-[12px] top-5 sm:top-6 w-0 h-0
            border-t-[8px] border-t-transparent
            border-r-[12px] border-r-[#d8b878]
            border-b-[8px] border-b-transparent" />
          <div className="absolute -left-[8px] top-[24px] sm:top-[28px] w-0 h-0
            border-t-[6px] border-t-transparent
            border-r-[8px] border-r-[#fffdf0]
            border-b-[6px] border-b-transparent" />

          <p className="text-bark text-xs sm:text-sm md:text-base leading-relaxed font-bold">
            "{facts[idx]}"
          </p>

          {/* Navigasi / Indikator 3 Fun Fact yang Elegan & Bersih */}
          {facts.length > 1 && (
            <div className="flex items-center justify-between mt-2.5 pt-1.5 border-t border-[#ebd8a6]/60 text-bark/60">
              <span className="text-[10px] sm:text-[11px] font-bold">
                💡 Ketuk untuk fakta seru ({idx + 1}/{facts.length})
              </span>
              <div className="flex items-center gap-1.5">
                {facts.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === idx
                        ? 'w-4 bg-[#5fae2f]'
                        : 'w-1.5 bg-[#d8b878]/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </button>
    </div>
  );
}
