'use client';

import Image from "next/image";
import { useEffect, useState } from 'react';
import DoulaCard from '@/components/DoulaCard';

type Doula = {
  id: number;
  name: string;
  location: string;
  specialties: string;
  bio: string;
  rating: number;
};

export default function Home() {
  const [doulas, setDoulas] = useState<Doula[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/doulas/')
      .then(res => res.json())
      .then(setDoulas)
      .catch(console.error);
  }, []);

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <section className="text-center my-10">
        <h1 className="text-4xl font-bold mb-4">DoulaConnect Lite</h1>
        <p className="text-lg text-gray-600">
          Find trusted doulas near you for birth, prenatal, and postpartum care.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {doulas.map(doula => (
          <DoulaCard key={doula.id} doula={doula} />
        ))}
      </section>
    </main>
  );
}
