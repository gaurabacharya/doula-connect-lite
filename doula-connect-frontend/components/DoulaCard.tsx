// components/DoulaCard.tsx
'use client';

import Link from 'next/link';

type Doula = {
  id: number;
  name: string;
  location: string;
  specialties: string;
  bio: string;
  rating: number;
};

export default function DoulaCard({ doula }: { doula: Doula }) {
  return (
    <div className="rounded-2xl shadow-md p-5 bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{doula.name}</h2>
      <p className="text-sm text-gray-600">{doula.location}</p>
      <p className="text-sm mt-2"><strong>Specialties:</strong> {doula.specialties}</p>
      <p className="text-sm mt-1">{doula.bio}</p>
      <p className="text-sm mt-2 text-yellow-600">⭐ {doula.rating.toFixed(1)} / 5</p>
      <Link href={`/doulas/${doula.id}`}>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          View Profile
        </button>
      </Link>
    </div>
  );
}
