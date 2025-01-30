"use client";
import { useState } from "react";
import ResourceCard from "./ResourceCard";

interface CategorySectionProps {
  title: string;
  description?: string;
  resources: Array<{
    title: string;
    description?: string;
    phone?: string;
    website?: string;
    other?: { url: string; label: string }[];
  }>;
}

export default function CategorySection({
  title,
  description,
  resources,
}: CategorySectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="category-section bg-white rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-md border-r-4 sm:border-r-8 border-[#8B5CF6] overflow-hidden mx-0 sm:mx-2.5 transition-all duration-500">
      <h2
        onClick={() => setIsOpen(!isOpen)}
        className={`text-base select-none md:text-xl lg:text-2xl m-0 p-5 sm:p-7 bg-white cursor-pointer flex justify-between items-center transition-colors group ${
          !isOpen ? "hover:bg-card-hover" : ""
        }`}
      >
        {title}
        <span
          className={`accordion-icon select-none text-base lg:text-2xl font-light transition-transform duration-500 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </h2>
      <div
        className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out
            ${
              isOpen
                ? "max-h-[1000px] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 translate-y-4"
            }
        }`}
      >
        <p className="px-5 sm:px-7 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full mb-5 p-4 sm:p-7">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
