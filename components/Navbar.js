'use client'; // optional if using hooks in Next.js App Router

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Hamburger menu icons

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-purple-600 text-white px-5 py-4 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">ZipyLinks</Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          <Link href="/"><li className="hover:underline">Home</li></Link>
          <Link href="/about"><li className="hover:underline">About</li></Link>
          <Link href="/shorten"><li className="hover:underline">Shorten</li></Link>
          <Link href="/contact"><li className="hover:underline">Contact Us</li></Link>
          <li className="flex gap-3">
            <Link href="/shorten">
              <button className="bg-purple-300 text-purple-900 rounded-lg shadow px-4 py-2 font-bold hover:bg-purple-400 transition">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-purple-300 text-purple-900 rounded-lg shadow px-4 py-2 font-bold hover:bg-purple-400 transition">
                GitHub
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 bg-purple-700 mt-4 px-4 py-3 rounded-md animate-fade-in-down">
          <Link href="/"><li onClick={() => setOpen(false)}>Home</li></Link>
          <Link href="/about"><li onClick={() => setOpen(false)}>About</li></Link>
          <Link href="/shorten"><li onClick={() => setOpen(false)}>Shorten</li></Link>
          <Link href="/contact"><li onClick={() => setOpen(false)}>Contact Us</li></Link>
          <li className="flex flex-col gap-3">
            <Link href="/shorten">
              <button className="bg-purple-300 text-purple-900 rounded-lg shadow px-4 py-2 font-bold hover:bg-purple-400 transition">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-purple-300 text-purple-900 rounded-lg shadow px-4 py-2 font-bold hover:bg-purple-400 transition">
                GitHub
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
