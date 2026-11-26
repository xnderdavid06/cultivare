import Link from 'next/link';

export const metadata = {
  title: 'Tidak Ditemukan · Cultivare',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-nature bg-fixed flex flex-col items-center justify-center px-4 text-center">
      <div className="fixed inset-0 bg-nature -z-20" />

      <img
        src="/assets/maskot-badge.png"
        alt="Maskot Cultivare"
        className="w-32 h-32 rounded-full border-4 border-cream shadow-lg mb-6"
      />

      <h1 className="font-display font-black text-5xl title-grad mb-3">
        Oops!
      </h1>
      <p className="text-white text-xl font-semibold drop-shadow mb-2">
        Tanaman tidak ditemukan
      </p>
      <p className="text-white/80 text-base mb-8 max-w-xs">
        Halaman yang kamu cari tidak ada atau alamat QR Code-nya mungkin berbeda.
      </p>

      <Link href="/" className="btn-primary text-base">
        🌿 Kembali ke Katalog
      </Link>
    </div>
  );
}
