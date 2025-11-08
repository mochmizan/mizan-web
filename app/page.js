import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-30 md:mt-50 text-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black dark:text-white">
        Hola👋, I&apos;m <span className="text-blue-600">Mizan</span>!
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl p-3">
        An Internet Engineering Student (Class of 2024), who is has interest in
        Cyber Security and Data Science.
      </p>
      <div className="flex flex-col md:flex-row gap-3">
        <a
          href="/about"
          className="
            bg-white
            border-black
            border
            font-bold
            text-black
            px-6
            py-2
            rounded-md
            mt-5
            mx-2
            hover:bg-gray-100
            hover:scale-105
            active:scale-95
            focus:outline-2
            focus:outline-black
            focus:outline-offset-2
            transition-all
            duration-200
          "
        >
          Get To Know Me
        </a>
        <a
          href="/projects"
          className="
            bg-white
            border-black
            border
            font-bold
            text-black
            px-6
            py-2
            rounded-md
            mt-5
            mx-2
            hover:bg-gray-100
            hover:scale-105
            active:scale-95
            focus:outline-2
            focus:outline-black
            focus:outline-offset-2
            transition-all
            duration-200
          "
        >
          View My Projects
        </a>
        <a
          href="/contacts"
          className="
            bg-white
            border-black
            border
            font-bold
            text-black
            px-6
            py-2
            rounded-md
            mt-5
            mx-2
            hover:bg-gray-100
            hover:scale-105
            active:scale-95
            focus:outline-2
            focus:outline-black
            focus:outline-offset-2
            transition-all
            duration-200
          "
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}