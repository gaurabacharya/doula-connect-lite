import Link from 'next/link';

export default function Navbar() {
    return (
      <nav className="w-full px-6 py-6 bg-white flex justify-between items-center">
        {/* Left: Title */}
        <div className="text-2xl font-heading font-bold text-green-900">
          DoulaConnect
        </div>
  
        {/* Right: Nav Items */}
        <div className="flex space-x-10 text-green-800 text-lg font-sans">
          <span className="cursor-default hover:text-gray-900 transition">About Us</span>
          <span className="cursor-default hover:text-gray-900 transition">Services</span>
          <span className="cursor-default hover:text-gray-900 transition">Pricing</span>
          <span className="cursor-default hover:text-gray-900 transition">Blog</span>
          <Link href="/book" className="hover:underline font-semibold">
          Book a Doula
        </Link>
        </div>
      </nav>
    );
  }