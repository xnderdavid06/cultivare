import './globals.css';

export const metadata = {
  title: 'Cultivare · Katalog Tanaman Herbal',
  description: 'Katalog tanaman herbal Kampung Binaan Mahasiswa X – Cultivare. Pelajari tanaman obat tradisional Indonesia.',
  icons: {
    icon: '/assets/maskot-badge.png',
    apple: '/assets/maskot-badge.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Nunito:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
