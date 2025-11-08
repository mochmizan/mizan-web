"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-4 bg-teal-800 text-white font-bold">
      <Link href="/" className= "hover:underline hover:text-pink-300 transition duration-200">Home</Link>
      <Link href="/about" className= "hover:underline hover:text-pink-300 transition duration-200">About</Link>
      <Link href="/projects" className= "hover:underline hover:text-pink-300 transition duration-200">Projects</Link>
      <Link href="/contacts" className= "hover:underline hover:text-pink-300 transition duration-200">Contacts</Link>
    </nav>
  );
}