import React from "react";

interface TechnologiesTableProps {
  technologies: { src: string; alt: string; name: string }[];
}

export default function TechnologiesTable({
  technologies,
}: TechnologiesTableProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="bg-transparent p-4 flex flex-col justify-center items-center hover:scale-110"
        >
          <img src={tech.src} alt={tech.alt} className="mb-2 w-16 h-16" />
          {tech.name}
        </div>
      ))}
    </div>
  );
}
