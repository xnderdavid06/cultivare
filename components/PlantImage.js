'use client';

import { useState } from 'react';

export default function PlantImage({ src, alt, className }) {
  const [error, setError] = useState(!src);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-lime-100 to-green-300 ${className || ''}`}
        role="img"
        aria-label={alt || 'Foto tanaman belum tersedia'}
      >
        <img
          src="/assets/roowy-clean.png"
          alt="Maskot Roowy"
          className="w-24 h-24 object-contain drop-shadow"
        />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}
