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
    <div className="w-full max-w-sm h-full flex flex-col justify-between rounded-2xl shadow-md p-5 bg-green-50 hover:shadow-lg transition">
      <div>
        <h2 className="text-xl font-semibold text-green-900">{doula.name}</h2>
        <p className="text-sm text-gray-900">{doula.location}</p>
        <p className="text-sm mt-2 text-gray-900"><strong>Specialties:</strong> {doula.specialties}</p>
        <p className="text-sm mt-1 text-gray-900">{doula.bio}</p>
        <p className="text-sm mt-2 text-yellow-600">⭐ {doula.rating.toFixed(1)} / 5</p>
      </div>
      <Link href={`/doulas/${doula.id}`}>
        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-900 w-full">
          View Profile
        </button>
      </Link>
    </div>
  );
}

