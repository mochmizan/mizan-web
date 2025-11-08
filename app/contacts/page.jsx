export default function contacts() {
  return (
    <main className="flex flex-col items-center mt-20 text-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-900 dark:text-pink-300">Contact Me!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-200 font-bold mb-6 max-w-xl">
          Let's connect! Reach me through any of the following platforms:
        </p>
        <div className="bg-teal-800 rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition duration-300 justify-center">
          <p>📧 <a href="mailto:salmakarimahkamal@gmail.com" className="text-white font-bold hover:underline">salmakarimahkamal@gmail.com</a></p>
          <p>💼 <a href="https://www.linkedin.com/in/salma-karimah-kamal-557200320/" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline">LinkedIn</a></p>
          <p>💻 <a href="https://github.com/skyacinthus" target="_blank" rel="noopener noreferrer" className="text-white  hover:underline font-bold">GitHub</a></p>
          <p>📷 <a href="https://www.instagram.com/sal.kariim/" target="_blank" rel="noopener noreferrer" className="text-white  hover:underline font-bold">Instagram</a></p>
        </div>
    </main>
  );
}
      