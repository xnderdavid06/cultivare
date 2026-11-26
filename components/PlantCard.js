import Link from 'next/link';
import PlantImage from './PlantImage.js';

export default function PlantCard({ plant }) {
  return (
    <Link href={`/${plant.slug}`} className="plant-card group" aria-label={`Lihat detail ${plant.namaLokal}`}>
      <article className="card-cream overflow-hidden h-full">
        {/* Foto */}
        <div className="aspect-square overflow-hidden rounded-t-3xl">
          <PlantImage
            src={plant.foto}
            alt={`Foto ${plant.namaLokal}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Info */}
        <div className="p-3 pb-4 text-center">
          <h2 className="font-display font-bold text-lg leading-tight text-bark">
            {plant.namaLokal}
          </h2>
          <p className="text-sm italic text-leaf-dark mt-0.5 leading-snug">
            {plant.namaIlmiah}
          </p>
        </div>
      </article>
    </Link>
  );
}
