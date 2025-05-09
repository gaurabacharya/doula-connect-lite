'use client';

import { useEffect, useState } from 'react';
import Navbar from "@/components/NavBar";
import CTASection from "@/components/CTASection";
import DoulaCard from '@/components/DoulaCard';
import { FaMapMarkerAlt } from 'react-icons/fa';


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
    <div>
      <Navbar />
      <CTASection />

      {/* Enhanced Find A Doula Section */}
      <section className="bg-white w-full min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-green-900">
            Find a Doula Near You
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Our platform uses your location to recommend trusted doulas for birth, prenatal, and postpartum care—matching you with support just minutes away.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-green-800 font-semibold">
            <FaMapMarkerAlt className="text-xl" />
            <span>Real-time geolocation powered matching</span>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-stretch">
          {doulas.map(doula => (
            <DoulaCard key={doula.id} doula={doula} />
          ))}
        </div>
      </section>
    </div>
  );
}



// 'use client';

// import Image from "next/image";
// import { useEffect, useState } from 'react';
// import DoulaCard from '@/components/DoulaCard';
// import Navbar from "@/components/NavBar";
// import CTASection from "@/components/CTASection";
// import { Montserrat, Poppins } from "next/font/google";

// export const montserrat = Montserrat({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: '400',
//   variable: '--font-sans'
// })

// export const poppins = Poppins({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: '900',
//   variable: '--font-heading'
// })
// type Doula = {
//   id: number;
//   name: string;
//   location: string;
//   specialties: string;
//   bio: string;
//   rating: number;
// };

// export default function Home() {
//   const [doulas, setDoulas] = useState<Doula[]>([]);

//   useEffect(() => {
//     fetch('http://localhost:8000/doulas/')
//       .then(res => res.json())
//       .then(setDoulas)
//       .catch(console.error);
//   }, []);

//   return (
//     <div>
//       <Navbar/>
//       <CTASection/>
//       <main className="p-6 max-w-6xl mx-auto">
//         <section className="text-center my-10">
//           <h1 className="text-4xl font-bold mb-4">Find a Doula</h1>
//           <p className="text-lg text-gray-600">
//             Find trusted doulas near you for birth, prenatal, and postpartum care.
//           </p>
//         </section>
//         <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {doulas.map(doula => (
//             <DoulaCard key={doula.id} doula={doula} />
//           ))}
//         </section>
//       </main>
//     </div>
//   );
// }
