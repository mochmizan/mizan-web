import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-center mt-15 text-center justify-center">
      <Image
        src="/headshot_teal.png"  alt="Salma Kamal" width={200} height={200} className="object-cover rounded-full hover:shadow-2xl transition duration-300 mb-4"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-900 dark:text-pink-300">About Me!</h1>
      <p className="max-w-xs md:max-w-3xl md:text-lg mb-4 text-gray-600 dark:text-gray-300">
      Hi! I’m <span className="font-semibold">Salma Karimah Kamal</span>, an Information Engineering student at UGM, with a passion for design, technology, and creating practical solutions through both logic and creativity.
      </p>
      <p className="max-w-xs md:max-w-3xl md:text-lg mb-4 text-gray-600 dark:text-gray-300"> 
      I love learning how things work, from the logic behind code to the structure of real-world systems! I'm always eager to explore new ways to bridge creativity and engineering in my projects.
      </p>
    </main>
  );
}