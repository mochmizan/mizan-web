"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center gap-6 p-4 px-8 bg-black text-white font-bold border-b border-white">
      <Link
        href="/"
        className="text-xl text-blue-500 hover:text-blue-300 transition duration-200"
      >
        Mizan
      </Link>

      <div className="flex gap-6">
        <Link
          href="/about"
          className="hover:underline hover:text-gray-300 transition duration-200"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="hover:underline hover:text-gray-300 transition duration-200"
        >
          Projects
        </Link>
        <Link
          href="/contacts"
          className="hover:underline hover:text-gray-300 transition duration-200"
        >
          Contacts
        </Link>
      </div>
    </nav>
  );
}
