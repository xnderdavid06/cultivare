import Link from 'next/link';

export const metadata = {
  title: 'Tanaman Tidak Ditemukan · Cultivare',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-cream shadow-[0_6px_0_#7a4a22] bg-[#fbf5dc] mb-5 p-2 flex items-center justify-center">
        <img
          src="/assets/roowy-clean.png"
          alt="Maskot Roowy"
          className="w-full h-full object-contain"
        />
      </div>

      <h1 className="title-grad text-5xl md:text-6xl mb-2">
        Oops!
      </h1>
      <p className="text-white text-xl font-display font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] mb-2">
        Tanaman tidak ditemukan
      </p>
      <p className="text-white text-base font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] mb-6 max-w-xs">
        Halaman tanaman yang kamu cari tidak ada atau alamat QR Code-nya keliru.
      </p>

      <Link href="/" className="btn-primary text-base">
        Kembali ke Katalog
      </Link>
    </div>
  );
}
