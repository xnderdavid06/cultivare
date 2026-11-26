import Link from 'next/link';

export const metadata = {
  title: 'Tanaman Tidak Ditemukan · Cultivare',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">

      {/* Awan latar */}
      <img src="/assets/awan 1.png" alt="" aria-hidden="true"
        className="fixed top-6 left-2 w-36 opacity-40 pointer-events-none select-none anim-drift-l -z-10" />
      <img src="/assets/awan 2.png" alt="" aria-hidden="true"
        className="fixed top-14 right-2 w-44 opacity-40 pointer-events-none select-none anim-drift-r -z-10" />

      {/* Roowy mengambang dengan batu di bawahnya */}
      <div className="relative mb-5">
        <img
          src="/assets/roowy.png"
          alt="Roowy kebingungan"
          className="w-28 md:w-36 object-contain anim-float drop-shadow-lg"
        />
        <img
          src="/assets/batu besar.png"
          alt="" aria-hidden="true"
          className="w-40 md:w-48 opacity-70 pointer-events-none select-none mt-1"
        />
        {/* Dedaunan di kanan batu */}
        <img
          src="/assets/dedaunan.png"
          alt="" aria-hidden="true"
          className="absolute bottom-2 right-0 w-10 h-auto pointer-events-none select-none opacity-75 anim-sway"
        />
      </div>

      <h1 className="title-grad text-5xl md:text-6xl mb-3">Oops!</h1>

      <div className="card-cream px-6 py-5 max-w-xs mb-6">
        <p className="font-display font-bold text-bark text-lg mb-1.5">
          Tanaman tidak ditemukan
        </p>
        <p className="text-bark/80 text-sm leading-relaxed font-medium">
          Roowy sudah mencari ke seluruh sudut kebun, tapi tanaman ini belum ada atau QR Code-nya keliru!
        </p>
      </div>

      <Link href="/" className="btn-primary">
        Kembali ke Kebun
      </Link>
    </div>
  );
}
