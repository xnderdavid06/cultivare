import { notFound } from 'next/navigation';
import { plants, site } from '../../data/plants.js';
import Header from '../../components/Header.js';
import PlantImage from '../../components/PlantImage.js';
import ThemedBulletList from '../../components/ThemedBulletList.js';
import Link from 'next/link';

export const dynamicParams = false;

export async function generateStaticParams() {
  return plants.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const plant = plants.find((p) => p.slug === params.slug);
  if (!plant) return { title: 'Tidak Ditemukan · Cultivare' };
  return {
    title: `${plant.namaLokal} · ${site.title}`,
    description: plant.deskripsi,
  };
}

/* ── Papan Kayu judul section rapi & terpadu ── */
function SectionTitle({ children }) {
  return (
    <div className="relative z-10 -mb-3.5 ml-4 sm:ml-6 inline-flex items-center">
      <span className="plank inline-flex items-center px-5 py-2 text-sm md:text-base border-2 border-[#965f2e]">
        {children}
      </span>
    </div>
  );
}

/* ── Kartu section krem berkarakter ceria ── */
/* ── Kartu section krem berkarakter ceria ── */
function SectionCard({ title, children }) {
  return (
    <div className="mt-8">
      <SectionTitle>{title}</SectionTitle>
      <div className="card-cream p-5 md:p-6 pt-7 relative overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default function PlantPage({ params }) {
  const plant = plants.find((p) => p.slug === params.slug);
  if (!plant) notFound();

  return (
    <div className="min-h-screen relative pb-20 overflow-x-hidden">
      {/* ── Background: Awan & Dedaunan Bergerak Halus di Lapisan Belakang (-z-10) ── */}
      <img
        src="/assets/awan 1.png"
        alt=""
        aria-hidden="true"
        className="fixed top-6 -left-12 w-48 opacity-70 pointer-events-none select-none anim-drift-l -z-10"
      />
      <img
        src="/assets/awan 2.png"
        alt=""
        aria-hidden="true"
        className="fixed top-20 -right-16 w-56 opacity-70 pointer-events-none select-none anim-drift-r -z-10"
      />
      <img
        src="/assets/awan 3.png"
        alt=""
        aria-hidden="true"
        className="fixed top-2 left-1/3 w-40 opacity-60 pointer-events-none select-none anim-drift-l -z-10"
      />
      <img
        src="/assets/dedaunan.png"
        alt=""
        aria-hidden="true"
        className="fixed top-44 -left-8 w-20 sm:w-24 opacity-75 pointer-events-none select-none anim-sway -z-10 hidden sm:block"
      />
      <img
        src="/assets/dedaunan.png"
        alt=""
        aria-hidden="true"
        className="fixed bottom-32 -right-8 w-20 sm:w-24 opacity-75 pointer-events-none select-none anim-sway -z-10 hidden sm:block"
        style={{ animationDelay: '1.5s', transform: 'scaleX(-1)' }}
      />

      <div className="relative max-w-2xl mx-auto px-4 z-10">
        {/* ── Header minimal ── */}
        <Header minimal />

        {/* ═════════════════════════════════════════════════════════════
            KARTU UTAMA: FOTO ASLI TANAMAN 4:3 + IDENTITAS & KATA ROOWY
        ═══════════════════════════════════════════════════════════════ */}
        <div className="mt-4 card-cream relative">

          {/* 1. Foto Tanaman 4:3 */}
          <div className="relative aspect-[4/3] w-full bg-[#fdf9e8] overflow-hidden rounded-t-[1.3rem] border-b-3 border-[#e8d79a]">
            <PlantImage
              src={plant.foto}
              alt={`Foto spesimen ${plant.namaLokal}`}
              className="w-full h-full object-cover"
            />
            {/* Badge Papan Kayu di Sudut Kiri Foto */}
            <div className="absolute top-3 left-3 plank px-3.5 py-1 text-xs sm:text-sm border border-[#965f2e] shadow-sm select-none">
              Spesimen Koleksi Kebun
            </div>
          </div>

          {/* Kredit foto kecil */}
          {plant.kreditFoto && (
            <p className="text-[11px] text-bark/60 italic px-4 py-1.5 bg-[#fdf5d4] border-b border-[#ebd8a6]">
              {plant.kreditFoto}
            </p>
          )}

          {/* 2. Identitas Tanaman & Roowy BESAR di Samping Balon Kata Roowy */}
          <div className="p-5 md:p-6">
            <h1 className="font-display font-black text-3xl sm:text-4xl text-bark leading-tight">
              {plant.namaLokal}
            </h1>
            <p className="italic font-bold text-lg sm:text-xl text-leaf-dark mt-1">
              {plant.namaIlmiah}
            </p>
            <p className="text-sm sm:text-base text-bark/80 mt-1 font-semibold">
              Famili: <span className="italic font-bold">{plant.famili}</span>
            </p>

            {/* 3. Box KATA ROOWY – Kepala Roowy Proporsional Sesuai Image 2, Aman Responsif di Semua Layar */}
            {plant.catatanRoowy && (
              <div className="relative mt-6 pt-1 flex items-center gap-3 sm:gap-4">
                {/* Kepala Roowy Ceria & Tetap Bergoyang – Ukuran Aman Terkunci Sesuai Image 2 */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shrink-0 flex items-center justify-center">
                  <img
                    src="/assets/roowy-head.png"
                    alt="Kepala Roowy"
                    className="w-full h-full object-contain anim-bob drop-shadow-md select-none pointer-events-none"
                  />
                </div>

                {/* Balon Dialog Kata Roowy yang Luas & Nyaman Dibaca */}
                <div className="flex-1 min-w-0">
                  <div className="relative bg-[#fffdf0] border-2 sm:border-3 border-[#d8b878] rounded-2xl sm:rounded-3xl px-3.5 py-3 sm:px-5 sm:py-4 shadow-[inset_0_1px_4px_rgba(200,160,80,0.18)]">
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
                      "{plant.catatanRoowy}"
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ════════════════════════════════════
            SECTION INFORMATIF: MENARIK & LUCU
        ════════════════════════════════════ */}

        {/* 1. Tentang Tanaman */}
        <SectionCard title="Tentang Tanaman">
          <div className="bg-[#fffdf0] p-4 sm:p-5 rounded-2xl border-2 border-[#ebd8a6]/70 shadow-sm leading-relaxed">
            <p className="text-bark text-base sm:text-lg font-medium leading-relaxed">
              {plant.deskripsi}
            </p>
          </div>
        </SectionCard>

        {/* 2. Ciri Khas - Poin dengan Ikon Pembesar/Tunas Hijau */}
        <SectionCard title="Ciri Khas">
          <ThemedBulletList items={plant.ciriKhas} category="ciri" />
        </SectionCard>

        {/* 3. Manfaat Utama - Poin dengan Ikon Bintang Emas */}
        <SectionCard title="Manfaat Utama">
          <ThemedBulletList items={plant.manfaat} category="manfaat" />
        </SectionCard>

        {/* 4. Khasiat Tradisional - Poin dengan Ikon Cangkir Jamu Tradisional */}
        <SectionCard title="Khasiat Tradisional">
          <ThemedBulletList items={plant.khasiat} category="khasiat" />
        </SectionCard>

        {/* 5. Bisa Dibuat Jadi - Poin dengan Ikon Mangkok Olahan Herbal */}
        <SectionCard title="Bisa Dibuat Jadi">
          <ThemedBulletList items={plant.bisaDibuat} category="olahan" />
        </SectionCard>

        {/* ── 6. Panduan Perawatan: Interaktif & Teratur ── */}
        <SectionCard title="Panduan Perawatan">
          <div className="space-y-3">

            {/* Cahaya — kuning hangat */}
            <div className="flex items-stretch rounded-2xl border-2 overflow-hidden transition-all duration-200 hover:scale-[1.013] hover:shadow-[0_5px_0_rgba(246,184,48,0.3)] shadow-[0_3px_0_rgba(246,184,48,0.18)]"
              style={{ background: 'linear-gradient(to right,#fffbe8,#fffdf5)', borderColor: '#f0d885' }}>
              <div className="w-1.5 shrink-0" style={{ background: 'linear-gradient(to bottom,#f6b830,#c48512)' }} />
              <div className="flex items-center px-3 py-3 shrink-0">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl select-none border-2 shadow-[0_3px_0_#8a5500]"
                  style={{ background: 'linear-gradient(135deg,#ffd84a,#e09000)', borderColor: '#b87200', transform: 'rotate(-4deg)' }}>
                  <span style={{ transform: 'rotate(4deg)' }}>☀️</span>
                </div>
              </div>
              <div className="py-3 pr-4">
                <p className="font-display font-bold text-bark text-sm sm:text-base">Kebutuhan Cahaya</p>
                <p className="text-bark/80 text-sm sm:text-base leading-snug mt-0.5 font-semibold">{plant.perawatan.cahaya}</p>
              </div>
            </div>

            {/* Penyiraman — biru muda */}
            <div className="flex items-stretch rounded-2xl border-2 overflow-hidden transition-all duration-200 hover:scale-[1.013] hover:shadow-[0_5px_0_rgba(70,160,220,0.3)] shadow-[0_3px_0_rgba(70,160,220,0.18)]"
              style={{ background: 'linear-gradient(to right,#eaf6ff,#f5fbff)', borderColor: '#a8d8f0' }}>
              <div className="w-1.5 shrink-0" style={{ background: 'linear-gradient(to bottom,#4fb8ee,#2080b8)' }} />
              <div className="flex items-center px-3 py-3 shrink-0">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl select-none border-2 shadow-[0_3px_0_#1560a0]"
                  style={{ background: 'linear-gradient(135deg,#70caff,#2896d8)', borderColor: '#1a74b8', transform: 'rotate(-4deg)' }}>
                  <span style={{ transform: 'rotate(4deg)' }}>💧</span>
                </div>
              </div>
              <div className="py-3 pr-4">
                <p className="font-display font-bold text-bark text-sm sm:text-base">Jadwal Penyiraman</p>
                <p className="text-bark/80 text-sm sm:text-base leading-snug mt-0.5 font-semibold">{plant.perawatan.penyiraman}</p>
              </div>
            </div>

            {/* Media Tanam — hijau earthy */}
            <div className="flex items-stretch rounded-2xl border-2 overflow-hidden transition-all duration-200 hover:scale-[1.013] hover:shadow-[0_5px_0_rgba(63,158,104,0.3)] shadow-[0_3px_0_rgba(63,158,104,0.18)]"
              style={{ background: 'linear-gradient(to right,#e8f7ee,#f5fffb)', borderColor: '#a8dfbe' }}>
              <div className="w-1.5 shrink-0" style={{ background: 'linear-gradient(to bottom,#3f9e68,#1c693a)' }} />
              <div className="flex items-center px-3 py-3 shrink-0">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl select-none border-2 shadow-[0_3px_0_#0a4428]"
                  style={{ background: 'linear-gradient(135deg,#48d490,#167a48)', borderColor: '#105e38', transform: 'rotate(-4deg)' }}>
                  <span style={{ transform: 'rotate(4deg)' }}>🪴</span>
                </div>
              </div>
              <div className="py-3 pr-4">
                <p className="font-display font-bold text-bark text-sm sm:text-base">Media Tanam Terbaik</p>
                <p className="text-bark/80 text-sm sm:text-base leading-snug mt-0.5 font-semibold">{plant.perawatan.media}</p>
              </div>
            </div>

            {/* Tips Rahasia Roowy — hijau cerah dengan border tebal + shadow */}
            <div className="mt-2 relative rounded-2xl overflow-hidden border-3 border-[#5fae2f] shadow-[0_5px_0_#3a7a1a]"
              style={{ background: 'linear-gradient(135deg,#d4f5b8 0%,#e8fcd4 50%,#c8f0a0 100%)' }}>
              {/* Aksen garis-garis dekoratif di sudut kanan */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10 select-none pointer-events-none"
                style={{ background: 'repeating-linear-gradient(45deg,#2e8c14,#2e8c14 2px,transparent 2px,transparent 8px)' }} />
              <div className="relative flex gap-3 sm:gap-4 items-start p-4 sm:p-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl select-none border-2 border-[#3a7a1a] shadow-[0_3px_0_#1e5c0f] shrink-0"
                  style={{ background: 'linear-gradient(135deg,#8de84a,#3a9e1a)', transform: 'rotate(-5deg)' }}>
                  <span style={{ transform: 'rotate(5deg)' }}>💡</span>
                </div>
                <div>
                  <p className="font-display font-black text-[#1b4d0a] text-xs sm:text-sm uppercase tracking-widest">
                    ✨ Tips Rahasia Roowy
                  </p>
                  <p className="text-[#1e5c10] text-sm sm:text-base leading-snug font-bold mt-1.5">
                    {plant.perawatan.tips}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </SectionCard>

        {/* ── 7. Kotak Catatan Kehati-hatian — lebih impactful ── */}
        <div className="mt-8 relative rounded-2xl overflow-hidden border-3 border-[#f6b830] shadow-[0_5px_0_rgba(166,116,34,0.3)]"
          style={{ background: 'linear-gradient(135deg,#fffbe8 0%,#fff8d6 50%,#fff3c0 100%)' }}>
          {/* Strip atas kuning */}
          <div className="h-2 w-full" style={{ background: 'linear-gradient(to right,#f6b830,#e09000,#f6b830)' }} />
          <div className="p-5 md:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl border-2 border-[#b87200] shadow-[0_3px_0_#8a5500] shrink-0"
                style={{ background: 'linear-gradient(135deg,#ffd84a,#e09000)' }}>
                🛡️
              </div>
              <p className="font-display font-black text-[#7a4a22] text-base sm:text-lg">
                Catatan Kehati-hatian
              </p>
            </div>
            <p className="text-bark text-sm sm:text-base leading-relaxed font-semibold">
              {plant.catatan}
            </p>
            <div className="mt-4 flex items-center gap-2 border-t-2 border-[#ebd8a6] pt-3">
              <span className="text-sm select-none">📋</span>
              <p className="text-bark/65 text-xs sm:text-sm italic font-semibold">
                Informasi ini bersifat edukasi dan bukan pengganti saran dokter.
              </p>
            </div>
          </div>
        </div>

        {/* ── Tombol Kembali ke Beranda ── */}
        <div className="mt-10 flex justify-center">
          <Link href="/" className="btn-primary">
            ← Lihat Semua Tanaman
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-white/85 text-xs font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] pb-8">
          <p>© 2026 {site.event} · {site.title}</p>
        </footer>
      </div>
    </div>
  );
}
