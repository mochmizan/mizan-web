
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-30 md:mt-50 text-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-pink-900 dark:text-pink-300">Hi, I’m Salma!🦈</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl p-3">
        A passionate developer who loves creating clean, efficient, and creative digital solutions.
      </p>
      <div className="flex flex-col md:flex-row gap-3">
        <a href="/about" 
        className="bg-teal-800 font-bold text-white 
        px-6 py-3 rounded-lg mt-5 mx-2
        hover:bg-pink-300 hover:text-gray-800 focus:outline-2 focus:outline-teal-800 md:focus:outline-pink-300 focus:outline-offset-2 shadow-xl transition">
          Get To Know Me
        </a>
        <a href="/projects" 
        className="bg-teal-800 font-bold text-white 
        px-6 py-3 rounded-lg mt-5 mx-2
        hover:bg-pink-300 hover:text-gray-900 focus:outline-2 focus:outline-teal-800 md:focus:outline-pink-300 focus:outline-offset-2 shadow-xl transition">
          View My Projects
        </a>
        <a href="/contacts" 
        className="bg-teal-800 font-bold text-white 
        px-6 py-3 rounded-lg mt-5 mx-2
        hover:bg-pink-300 hover:text-gray-800 focus:outline-2 focus:outline-teal-800 md:focus:outline-pink-300 focus:outline-offset-2 shadow-xl transition">
          Contact Me
        </a>
      </div>
    </main>
  );
}
