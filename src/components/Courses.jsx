


import React from "react";
import { ArrowUpRightIcon } from "lucide-react";
import Card from "./Cards";

const portfolioProjects = [
  {

    title: "Diploma in Office Management",
    results: [
      { title: "English & Kannada Typing" },
      { title: "Certificate of Fundamentals (CF)" },
      { title: "Windows" },
      { title: "MS-Office" },
      { title: "Internet & Emailing" },
    ],
    link: "https://github.com/kirankattii/Appointment-Booking",
    image: '/dom.png',
  },
  {

    title: "Diploma in Advanced Accounting ",
    results: [
      { title: "English & Kannada Typing" },
      { title: "Certificate of Fundamentals (CF)" },
      { title: "Windows & MS-Office" },
      { title: "Internet & Emailing" },
      { title: "Tally Prime with GST" },
    ],
    link: "https://github.com/kirankattii/Appointment-Booking",
    image: '/daa.png',
  },
  {
    title: "Diploma in Corporate Accounting ",
    results: [
      { title: "English & Kannada Typing" },
      { title: "Certificate of Fundamentals (CF)" },
      { title: "Windows & MS-Office, Internet & Emailing" },
      { title: "Tally Prime with GST & Advanced Excel" },
      { title: "Income Tax Filing and GST Filing" },
    ],
    link: "https://github.com/kirankattii/Appointment-Booking",
    image: '/dca.png',
  },
  {
    title: "Spoken English",
    results: [
      { title: "Communication Skills & Grammar Mastery" },
      { title: "Sentence Formation & Vocabulary Building:" },
      {
        title: "Public Speaking and Presentation Skills",
      },
      {
        title: "Pronunciation Practice",
      },
      {
        title: "Better job opportunities and career advancement.",
      },
    ],
    link: "https://github.com/kirankattii/Appointment-Booking",
    image: '/spokene.png',
  },


];

const Courses = () => {
  return (
    <div id="courses" className="pb-16 lg:mt-0 mt-12 lg:py-24 md:px-10 px-4">
      <div className="lg:max-w-5xl m-auto">
        <p className="text-primarypink text-xl font-bold font-mulish text-center">Our Courses
        </p>
        <h2 className="text-4xl text-primarydarkblue font-bold font-quicksand text-center">Courses We Offer</h2>
        <div className="flex flex-col mt-10 md:mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  {/* <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div> */}

                  <h3 className="text-white font-serif text-xl md:text-2xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex text-white/50 gap-2 text-sm md:text-base"
                      >
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a> */}
                </div>
                <div className="relative">
                  <img
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
