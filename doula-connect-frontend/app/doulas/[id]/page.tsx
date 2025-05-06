// app/doulas/[id]/page.tsx
import { notFound } from 'next/navigation';

type Doula = {
  id: number;
  name: string;
  location: string;
  specialties: string;
  bio: string;
  rating: number;
};

export default async function DoulaProfilePage({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:8000/doulas/${params.id}`);
  const doula: Doula | { error: string } = await res.json();

  if ('error' in doula) return notFound();

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{doula.name}</h1>
      <p className="text-gray-600 mb-2">{doula.location}</p>

      <div className="bg-white rounded-xl p-6 shadow-md mt-4">
        <p className="mb-2"><strong>Specialties:</strong> {doula.specialties}</p>
        <p className="mb-4">{doula.bio}</p>
        <p className="text-yellow-600 text-sm">⭐ {doula.rating.toFixed(1)} / 5</p>
        <button className="mt-6 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Request Booking
        </button>
      </div>
    </main>
  );
}

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   return {
//     title: `Doula Profile – ${params.id}`,
//   };
// }

