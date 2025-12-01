'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo-main.png"
              alt="Jeff Muthuri Logo"
              width={150}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="hover:text-primary-light transition">
              Services
            </Link>
            <Link href="#insurance" className="hover:text-primary-light transition">
              Who get's Insurance
            </Link>
            <button className="bg-white text-primary-green px-6 py-2 rounded-full hover:bg-primary-light hover:text-white transition cursor-pointer">
              Contact us 📞
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <Link href="#services" className="block py-2 hover:text-primary-light">
              Services
            </Link>
            <Link href="#insurance" className="block py-2 hover:text-primary-light">
              Who get's Insurance
            </Link>
            <button className="w-full mt-4 bg-white text-primary-green px-6 py-2 rounded-full cursor-pointer">
              Contact us 📞
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
