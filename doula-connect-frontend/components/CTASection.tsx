import Image from "next/image";
import ctaImage from "@/public/doula-image.png"; // replace with your actual image
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="w-full bg-green-900 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Text */}
        <div className="flex-1 justify-center items-center">
          <h2 className="text-4xl text-center font-heading font-bold text-gray-300 mb-4">
            Multiply Impact with Trusted Doula Care
          </h2>
          <p className="text-gray-300 text-center text-lg mb-6">
            Just because you're preparing at home doesn't mean you have to do it alone. Our doulas bring care, calm, and confidence—anytime, anywhere.
          </p>
          <div className="flex justify-center">
            <Link href="/book">
                <button className="bg-green-700 text-white font-semibold px-8 py-5 rounded-lg hover:bg-green-800 transition">
                    Book a Doula
                </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1">
          <Image
            src={ctaImage}
            alt="Doula support demo"
            className="rounded-xl "
            priority
          />
        </div>
      </div>
    </section>
  );
}
