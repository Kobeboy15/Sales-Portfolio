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
    const aboutElem = document.getElementById("about");
    const experienceElem = document.getElementById("experience");
    const projectsElem = document.getElementById("projects");

    const observer = new IntersectionObserver((entries) => {
      console.log("OBSERVED", entries[0].target.id);
      setCurrentSection(entries[0].target.id);
    });

    if (!!aboutElem) observer.observe(aboutElem);
    if (!!experienceElem) observer.observe(experienceElem);
    if (!!projectsElem) observer.observe(projectsElem);

    return () => {
      if (!!aboutElem) observer.unobserve(aboutElem);
      if (!!experienceElem) observer.unobserve(experienceElem);
      if (!!projectsElem) observer.unobserve(projectsElem);
    };
  }, []);

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
          <p className="max-w-sm mt-4 text-base text-slate-800 dark:text-tropical_indigo">
            {quote}
          </p>
        </div>
        {/* <ul className="hidden gap-5 py-20 text-xl lg:grid text-slate-800 dark:text-tropical_indigo">
          {menuItems.map((item, index) => {
            return (
              <li
                className={`border-b transition-colors ${
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
        </ul> */}
      </div>
      <div className="flex gap-3 mt-4 text-[28px] text-slate-800 dark:text-tropical_indigo">
        <i className="uil uil-linkedin"></i>
        <i className="uil uil-medium-m"></i>
        <i className="uil uil-envelope"></i>
      </div>
    </header>
  );
}
