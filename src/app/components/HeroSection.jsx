"use client";
import React, { useEffect, useState } from "react";

export default function HeroSection({ name, title, quote }) {
  const [currentSection, setCurrentSection] = useState("about");
  const menuItems = ["About", "Experience", "Projects"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = menuItems.map((section) => {
        const el = document.getElementById(section.toLocaleLowerCase());
        return {
          section,
          offsetTop: el.offsetTop,
          offsetHeight: el.offsetHeight,
        };
      });

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const current = sectionOffsets.find(
        ({ offsetTop, offsetHeight }) =>
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
      );

      if (current) {
        setCurrentSection(current.section.toLocaleLowerCase());
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  return (
    <header
      id="hero-section"
      className="flex flex-col mb-24 lg:h-screen lg:fixed lg:top-0 lg:py-28"
    >
      <div className="lg:flex-1">
        <div>
          <h1 className="text-6xl font-bold text-primary dark:text-primary_dark">
            {name}
          </h1>
          <p className="mt-1 text-xl font-semibold text-slate-800 dark:text-tropical_indigo ">
            {title}
          </p>
          <p className="max-w-sm mt-4 text-base font-light text-slate-800 dark:text-tropical_indigo/70">
            {quote}
          </p>
        </div>
        <ul className="hidden gap-5 py-20 text-xl lg:grid text-slate-700 dark:text-tropical_indigo">
          {menuItems.map((item, index) => {
            return (
              <li
                className={`border-b-[4px] leading-7 border-dotted transition-colors cursor-pointer hover:border-primary hover:dark:border-primary_dark ${
                  currentSection == item.toLocaleLowerCase()
                    ? "border-primary dark:border-primary_dark"
                    : "border-transparent"
                } w-fit`}
                key={index}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-3 mt-4 text-[28px] text-slate-800 dark:text-tropical_indigo">
        <i className="uil uil-linkedin"></i>
        <i className="uil uil-medium-m"></i>
        <i className="uil uil-envelope"></i>
      </div>
    </header>
  );
}
