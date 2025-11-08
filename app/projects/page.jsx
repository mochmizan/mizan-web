"use client";

const myProjects = [
    {
        id: 1,
        name: "Kalkulator Warisan (Inheritance Calculator)",
        desc: "A web-based calculator built with PHP and CSS to calculate family inheritance based on Fiqih rules.",
        url: "https://kalkulator-warisan.vercel.app/",
    },
    {
        id: 2,
        name: "Rudimentary Digital Book System (SIBRUTAL)",
        desc: "A simple, digital book management system built with Python for Object-Oriented Programming final project.",
        url: "https://github.com/mochmizan/Sistem-Rudimentary-Buku-Digital",
    },
];

export default function Projects() {
    return (
        <main className="flex flex-col items-center mt-20 text-center justify-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
                Projects & <span className="text-blue-600">Achievements</span>!
            </h1>
            <p className="max-w-xl text-gray-700 dark:text-gray-300 mb-10 font-medium">
                Some things I've built and am proud of.
            </p>
            <div className="flex justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl justify-center">
                    {myProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white border-black border rounded-md p-6 text-left
                           hover:bg-gray-100 hover:scale-[1.03] transition-all duration-200
                           dark:bg-black dark:border-white dark:hover:bg-gray-900"
                        >
                            <h2 className="text-xl font-bold text-black mb-2 dark:text-white">
                                {project.name}
                            </h2>
                            <p className="text-gray-700 mb-4 dark:text-gray-300">
                                {project.desc}
                            </p>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-bold text-blue-600 hover:underline"
                            >
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}