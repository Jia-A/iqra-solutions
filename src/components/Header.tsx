'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from './CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems, isLoaded } = useCart();
  const totalItems = isLoaded ? getTotalItems() : 0;

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/Logo.png"
              alt="Iqra Solutions Logo"
              width={120}
              height={120}
              className="object-contain"
              priority
            />
            <span className="text-2xl font-bold text-slate-800">Iqra Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
            <Link href="/checkout" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium flex items-center space-x-2 relative">
              <span>🛒</span>
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 mt-4 pt-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="block py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="block py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/services" className="block py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Services
              </Link>
              <Link href="/contact" className="block py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
              <Link href="/checkout" className="block py-2 bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-lg transition-colors font-medium relative">
                🛒 Cart {totalItems > 0 && `(${totalItems})`}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}