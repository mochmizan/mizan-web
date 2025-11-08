"use client";
import { useState, useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = "";

export default function Projects() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/project");
        setData(response.data.docs);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex flex-col items-center mt-20 text-center justify-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-900 dark:text-pink-300"> Projects & Achievements! </h1>
      <p className="max-w-xl text-gray-600 dark:text-gray-200 mb-8 font-bold">
        Some things I've built:
      </p>
    <div className="flex justify-center">
      {data === null ? (
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      ) : (
      <div className="grid grid-cols-1 gap-6 w-full max-w-5xl justify-center">
        {data.map((project) => (
          <div
            key={project.id}
            className="bg-teal-900 rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              {project.name}
            </h2>
            <p className="text-white mb-4">
              {project.desc}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
      )}
    </div>  
    </main>
  );
}
