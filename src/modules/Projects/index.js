import React from "react";
import * as icons from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import ProjectsList from "../../data/projects.json";

export default function Projects({ mode }) {
  return (
    <section id="projects">
      <div className="px-8 py-24 border-b border-black/10 dark:border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold uppercase">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            A selection of projects I've built across web development,
            cloud-native applications, backend services, and AI-driven
            solutions.
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          wrapperClass="items-stretch"
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {[...ProjectsList].reverse().map((project, index) => (
            <SwiperSlide key={index} className="flex h-auto">
              <div
                className={`flex flex-col min-h-[240px] w-full rounded-2xl border ${mode === "dark"
                  ? "border-white/10 bg-gray-900"
                  : "border-black/10 bg-white"
                  }`}
              >
                {/* Image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                )}

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold">{project.name}</h3>

                  {project.description && (
                    <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.lang.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 flex gap-4">
                    {project.links && (
                      <a
                        href={project.links}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-medium hover:text-cyan-500 transition-colors"
                      >
                        <FontAwesomeIcon icon={icons.faGithub} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}