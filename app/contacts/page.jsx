export default function Contacts() {
    return (
        <main className="flex flex-col items-center mt-20 text-center justify-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
                Contact <span className="text-blue-600">Me</span>!
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-10 max-w-xl">
                Let's connect! I'm always open to discussing new projects, creative
                ideas, or opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <a
                    href="mailto:mochmizanghodafail@gmail.com"
                    className="bg-black border-white border rounded-md p-6
                     hover:bg-gray-900 hover:scale-105 transition-all duration-200
                     dark:bg-black dark:border-white dark:hover:bg-gray-900"
                >
                    <span className="text-4xl">📧</span>
                    <h2 className="text-xl font-bold text-white mt-2">Email</h2>
                    <p className="text-gray-300 hover:underline">
                        mochmizanghodafail@gmail.com
                    </p>
                </a>

                <a
                    href="https://www.linkedin.com/in/mochmizanghodafail/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black border-white border rounded-md p-6
                     hover:bg-gray-900 hover:scale-105 transition-all duration-200
                     dark:bg-black dark:border-white dark:hover:bg-gray-900"
                >
                    <span className="text-4xl">💼</span>
                    <h2 className="text-xl font-bold text-white mt-2">LinkedIn</h2>
                    <p className="text-gray-300 hover:underline">
                        linkedin.com/in/mochmizanghodafail
                    </p>
                </a>

                <a
                    href="https://github.com/mochmizan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black border-white border rounded-md p-6
                     hover:bg-gray-900 hover:scale-105 transition-all duration-200
                     dark:bg-black dark:border-white dark:hover:bg-gray-900"
                >
                    <span className="text-4xl">💻</span>
                    <h2 className="text-xl font-bold text-white mt-2">GitHub</h2>
                    <p className="text-gray-300 hover:underline">github.com/mochmizan</p>
                </a>

                <a
                    href="https://www.instagram.com/zazamizan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black border-white border rounded-md p-6
                     hover:bg-gray-900 hover:scale-105 transition-all duration-200
                     dark:bg-black dark:border-white dark:hover:bg-gray-900"
                >
                    <span className="text-4xl">📷</span>
                    <h2 className="text-xl font-bold text-white mt-2">Instagram</h2>
                    <p className="text-gray-300 hover:underline">@zazamizan</p>
                </a>
            </div>
        </main>
    );
}