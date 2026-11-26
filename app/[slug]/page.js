import { notFound } from 'next/navigation';
import { plants, site } from '../../data/plants.js';
import Header from '../../components/Header.js';
import PlantImage from '../../components/PlantImage.js';
import Link from 'next/link';

export const dynamicParams = false;

export async function generateStaticParams() {
  return plants.map((plant) => ({
    slug: plant.slug,
  }));
}

export function generateMetadata({ params }) {
  const plant = plants.find((p) => p.slug === params.slug);
  if (!plant) return { title: 'Tidak Ditemukan · Cultivare' };
  return {
    title: `${plant.namaLokal} · ${site.title}`,
    description: plant.deskripsi,
  };
}

// ── Judul Papan Kayu yang Menempel di Atas Kartu Krem ──
function SectionTitle({ children }) {
  return (
    <div className="relative z-10 -mb-3 ml-4 sm:ml-6 inline-block">
      <span className="plank inline-block px-5 py-2 text-sm md:text-base">
        {children}
      </span>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2.5 mt-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 items-start text-bark">
          <span className="text-leaf-dark font-bold text-sm mt-0.5 shrink-0">●</span>
          <span className="text-base leading-snug font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="mt-6">
      <SectionTitle>{title}</SectionTitle>
      <div className="card-cream p-4 md:p-5 pt-5">
        {children}
      </div>
    </div>
  );
}

export default function PlantPage({ params }) {
  const plant = plants.find((p) => p.slug === params.slug);
  if (!plant) notFound();

  return (
    <div className="min-h-screen relative pb-16">
      <div className="relative max-w-2xl mx-auto px-4">
        <Header minimal />

        {/* ── KARTU UTAMA: FOTO 4:3 & IDENTITAS TANAMAN ── */}
        <div className="mt-4 card-cream overflow-hidden">
          {/* Foto 4:3 */}
          <div className="relative aspect-[4/3] w-full bg-[#fdf9e8] overflow-hidden border-b-3 border-[#e8d79a]">
            <PlantImage
              src={plant.foto}
              alt={`Foto spesimen ${plant.namaLokal}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Kredit Foto Kecil */}
          {plant.kreditFoto && (
            <p className="text-xs text-bark/70 px-4 pt-2 pb-1 italic border-b border-[#ebd8a6] bg-[#fbf5dc]">
              {plant.kreditFoto}
            </p>
          )}

          {/* Identitas Tanaman Bersama Roowy */}
          <div className="p-4 md:p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h1 className="font-display font-black text-3xl md:text-4xl text-bark leading-tight">
                  {plant.namaLokal}
                </h1>
                <p className="italic font-bold text-lg text-leaf-dark mt-0.5">
                  {plant.namaIlmiah}
                </p>
                <p className="text-sm text-bark/80 mt-1 font-semibold">
                  Famili: <span className="italic">{plant.famili}</span>
                </p>
              </div>

              {/* Maskot Roowy di Setiap Tumbuhan */}
              <div className="shrink-0 flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-3 border-cream shadow-[0_3px_0_#7a4a22] bg-[#fbf5dc] p-1 flex items-center justify-center">
                  <img
                    src="/assets/roowy.png"
                    alt="Roowy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-1 px-2 py-0.5 bg-[#f6b830] text-wood-dark font-display font-bold text-[10px] rounded-full shadow-[0_1px_0_#b57b45]">
                  Roowy
                </span>
              </div>
            </div>

            {/* Catatan Roowy untuk Tumbuhan Ini */}
            {plant.catatanRoowy && (
              <div className="mt-3.5 p-3 bg-[#fdf8e2] border-2 border-[#d8b878] rounded-xl flex items-start gap-2.5">
                <span className="text-leaf-dark font-bold text-sm mt-0.5 shrink-0">●</span>
                <p className="text-xs sm:text-sm text-bark leading-snug font-semibold">
                  <strong className="text-wood-dark">Kata Roowy:</strong> "{plant.catatanRoowy}"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ── 1. TENTANG TANAMAN ── */}
        <SectionCard title="Tentang Tanaman">
          <p className="text-bark text-base leading-relaxed font-medium">
            {plant.deskripsi}
          </p>
        </SectionCard>

        {/* ── 2. CIRI KHAS ── */}
        <SectionCard title="Ciri Khas">
          <BulletList items={plant.ciriKhas} />
        </SectionCard>

        {/* ── 3. MANFAAT UTAMA ── */}
        <SectionCard title="Manfaat Utama">
          <BulletList items={plant.manfaat} />
        </SectionCard>

        {/* ── 4. KHASIAT TRADISIONAL ── */}
        <SectionCard title="Khasiat Tradisional">
          <BulletList items={plant.khasiat} />
        </SectionCard>

        {/* ── 5. BISA DIBUAT JADI ── */}
        <SectionCard title="Bisa Dibuat Jadi">
          <BulletList items={plant.bisaDibuat} />
        </SectionCard>

        {/* ── 6. PANDUAN PERAWATAN (HANYA DI SINI ADA EMOJI ☀️ 💧 🪴 💡) ── */}
        <SectionCard title="Panduan Perawatan">
          <div className="space-y-3.5">
            <div className="flex gap-3 items-start">
              <span className="text-2xl shrink-0" aria-hidden="true">☀️</span>
              <div>
                <p className="font-display font-bold text-bark text-sm">Cahaya</p>
                <p className="text-bark text-base leading-snug">{plant.perawatan.cahaya}</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-2xl shrink-0" aria-hidden="true">💧</span>
              <div>
                <p className="font-display font-bold text-bark text-sm">Penyiraman</p>
                <p className="text-bark text-base leading-snug">{plant.perawatan.penyiraman}</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-2xl shrink-0" aria-hidden="true">🪴</span>
              <div>
                <p className="font-display font-bold text-bark text-sm">Media Tanam</p>
                <p className="text-bark text-base leading-snug">{plant.perawatan.media}</p>
              </div>
            </div>

            {/* Kotak Tips Hijau Muda */}
            <div className="mt-3 bg-green-50 border-2 border-leaf/50 rounded-2xl p-4 flex gap-3 items-start">
              <span className="text-2xl shrink-0" aria-hidden="true">💡</span>
              <p className="text-leaf-dark text-base leading-snug font-semibold">
                {plant.perawatan.tips}
              </p>
            </div>
          </div>
        </SectionCard>

        {/* ── 7. KOTAK CATATAN KEHATI-HATIAN ── */}
        <div className="mt-6 bg-[#fff7d9] border-3 border-[#f6b830] rounded-2xl p-4 md:p-5 shadow-[0_4px_0_rgba(122,74,34,0.15)]">
          <p className="font-display font-bold text-wood-dark text-base mb-1.5">
            Catatan Kehati-hatian
          </p>
          <p className="text-bark text-base leading-relaxed font-medium">
            {plant.catatan}
          </p>
          <p className="mt-3 text-bark/75 text-sm italic border-t border-[#ebd8a6] pt-3 font-semibold">
            Informasi ini bersifat edukasi dan bukan pengganti saran dokter.
          </p>
        </div>

        {/* ── TOMBOL BESAR PALING BAWAH ── */}
        <div className="mt-8 flex justify-center">
          <Link href="/" className="btn-primary text-base md:text-lg">
            ← Lihat Semua Tanaman
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-white/85 text-xs font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] pb-6">
          <p>© 2026 {site.event} · {site.title}</p>
        </footer>
      </div>
    </div>
  );
}
