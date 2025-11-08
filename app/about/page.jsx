import Image from "next/image";

export default function About() {
    return (
        <main className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 mt-10 md:mt-20 gap-10 md:gap-16">
            <div className="flex-shrink-0">
                <Image
                    src="/bocah-ganteng-sakdunyo.jpg"
                    alt="Mizan"
                    width={300}
                    height={400}
                    className="object-cover rounded-lg shadow-xl hover:shadow-2xl transition duration-300 border-2 border-white" // Added white border
                    priority
                />
            </div>
            <div className="flex flex-col text-center md:text-left max-w-lg">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
                    About <span className="text-blue-600">Me</span>!
                </h1>
                <p className="md:text-lg mb-4 text-gray-700 dark:text-gray-300">
                    Hi! I’m <span className="font-semibold text-black dark:text-white">Mizan</span>, an
                    Internet Engineering student (Class of 2024), who has an interest in Cyber Security
                    especially Data Science

                    (I have been DEEP into learning that!).
                </p>
                <p className="md:text-lg mb-4 text-gray-700 dark:text-gray-300">
                    First Diploma in Information Technology specializing in programming and has built a web based Islamic Calculator to help calculate
                    inheritance wealth in accordance with Syari'ah. Commited to learn more about IT to enhance skills and stay up to date with
                    current technology.
                </p>
            </div>
        </main>
    );
}