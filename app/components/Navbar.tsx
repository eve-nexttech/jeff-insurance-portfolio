'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm">
      <div className="container-custom px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Logo for small screens */}
            <Image
              src="/images/logo.png"
              alt="Jeff Muthuri Icon"
              width={40}
              height={40}
              className="block md:hidden h-10 w-auto object-contain"
            />
            {/* Logo for large screens */}
            <Image
              src="/images/logo-main.png"
              alt="Jeff Muthuri Logo"
              width={150}
              height={40}
              className="hidden md:block h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="hover:text-primary-light transition">
              Services
            </Link>
            <Link href="#insurance" className="hover:text-primary-light transition">
              Who gets Insurance
            </Link>
            <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="bg-white text-primary-green px-6 py-2 rounded-full hover:bg-primary-light hover:text-white transition cursor-pointer">
              Contact me 📞
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="md:hidden bg-white text-primary-green px-6 py-2 rounded-full hover:bg-primary-light hover:text-white transition cursor-pointer">
            Contact me 📞
          </button>
        </div>
      </div>
    </nav>
  );
}
