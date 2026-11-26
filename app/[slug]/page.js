import { notFound } from 'next/navigation';
import { plants } from '../../data/plants.js';
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
    title: `${plant.namaLokal} · Cultivare`,
    description: plant.deskripsi,
  };
}

// ── Sub-komponen ────────────────────────────────────────────────────────────

function SectionTitle({ children }) {
  return (
    <div className="relative z-10 -mb-3 ml-4">
      <span className="plank inline-block px-5 py-2 text-sm md:text-base">
        {children}
      </span>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2 mt-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 items-start text-bark">
          <span className="text-leaf-dark mt-0.5 shrink-0">●</span>
          <span className="text-base leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="mt-6">
      <SectionTitle>{title}</SectionTitle>
      <div className="card-cream p-4 md:p-5">
        {children}
      </div>
    </div>
  );
}

// ── Halaman Utama ────────────────────────────────────────────────────────────

export default function PlantPage({ params }) {
  const plant = plants.find((p) => p.slug === params.slug);
  if (!plant) notFound();

  return (
    <div className="min-h-screen bg-fixed">
      <div className="fixed inset-0 bg-nature -z-20" />

      <div className="relative max-w-2xl mx-auto px-4 pb-16">
        <Header minimal />

        {/* Kartu utama: foto + identitas */}
        <div className="mt-5 card-cream overflow-hidden">
          {/* Foto 4:3 */}
          <div className="relative" style={{ aspectRatio: '4/3' }}>
            <PlantImage
              src={plant.foto}
              alt={`Foto ${plant.namaLokal}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Kredit foto */}
          {plant.kreditFoto && (
            <p className="text-xs text-bark/60 px-4 pt-2 italic">
              {plant.kreditFoto}
            </p>
          )}

          {/* Identitas */}
          <div className="p-4 md:p-5">
            <h1 className="font-display font-black text-3xl md:text-4xl text-bark leading-tight">
              {plant.namaLokal}
            </h1>
            <p className="italic text-leaf-dark text-lg mt-0.5">{plant.namaIlmiah}</p>
            <p className="text-sm text-bark/70 mt-1">
              Famili: <span className="font-semibold italic">{plant.famili}</span>
            </p>
          </div>
        </div>

        {/* Tentang */}
        <SectionCard title="🌿 Tentang Tanaman">
          <p className="text-bark text-base leading-relaxed">{plant.deskripsi}</p>
        </SectionCard>

        {/* Ciri Khas */}
        <SectionCard title="🔍 Ciri Khas">
          <BulletList items={plant.ciriKhas} />
        </SectionCard>

        {/* Manfaat */}
        <SectionCard title="✨ Manfaat Utama">
          <BulletList items={plant.manfaat} />
        </SectionCard>

        {/* Khasiat Tradisional */}
        <SectionCard title="🏺 Khasiat Tradisional">
          <BulletList items={plant.khasiat} />
        </SectionCard>

        {/* Bisa Dibuat Jadi */}
        <SectionCard title="🫙 Bisa Dibuat Jadi">
          <BulletList items={plant.bisaDibuat} />
        </SectionCard>

        {/* Panduan Perawatan */}
        <SectionCard title="🌱 Panduan Perawatan">
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <span className="text-2xl shrink-0" aria-hidden="true">☀️</span>
              <div>
                <p className="font-semibold text-bark text-sm">Cahaya</p>
                <p className="text-bark text-base leading-snug">{plant.perawatan.cahaya}</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-2xl shrink-0" aria-hidden="true">💧</span>
              <div>
                <p className="font-semibold text-bark text-sm">Penyiraman</p>
                <p className="text-bark text-base leading-snug">{plant.perawatan.penyiraman}</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-2xl shrink-0" aria-hidden="true">🪴</span>
              <div>
                <p className="font-semibold text-bark text-sm">Media Tanam</p>
                <p className="text-bark text-base leading-snug">{plant.perawatan.media}</p>
              </div>
            </div>

            {/* Tips hijau */}
            <div className="mt-3 bg-green-50 border-2 border-leaf/40 rounded-2xl p-4 flex gap-3 items-start">
              <span className="text-2xl shrink-0" aria-hidden="true">💡</span>
              <p className="text-leaf-dark text-base leading-snug font-medium">
                {plant.perawatan.tips}
              </p>
            </div>
          </div>
        </SectionCard>

        {/* Catatan kehati-hatian */}
        <div className="mt-6 bg-amber-50 border-2 border-sun/50 rounded-2xl p-4 md:p-5">
          <p className="font-display font-bold text-wood-dark text-base mb-2">
            ⚠️ Catatan Kehati-hatian
          </p>
          <p className="text-bark text-base leading-relaxed">{plant.catatan}</p>
          <p className="mt-3 text-bark/70 text-sm italic border-t border-sun/30 pt-3">
            Informasi ini bersifat edukasi dan bukan pengganti saran dokter.
          </p>
        </div>

        {/* Tombol kembali */}
        <div className="mt-8 flex justify-center">
          <Link href="/" className="btn-primary text-lg">
            ← Lihat Semua Tanaman
          </Link>
        </div>
      </div>
    </div>
  );
}
