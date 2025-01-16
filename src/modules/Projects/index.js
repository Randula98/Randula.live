/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import * as icons from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Pagination, Scrollbar, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import ProjectsList from '../../data/projects.json'

export default function Projects({ mode }) {

  return (
    <div id="projects">
      <div className="p-8 text-center border-b border-b-black/10 dark:border-b-white/10 pt-24 sm:p-16 sm:pt-24 flex flex-col gap-8 justify-between">
        <div>
          <h2 className="text-3xl font-semibold uppercase sm:text-6xl p-8">
            Projects By Me
          </h2>
        </div>
        <div className='w-full pb-2'>
          <Swiper
            // install Swiper modules
            modules={[Pagination, Scrollbar]}
            spaceBetween={40}
            pagination={{ clickable: true }}
            effect="fade"
            breakpoints={{
              // when window width is >= 640px
              480: {
                width: 480,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
          >
            {
              [...ProjectsList].reverse().map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div class={`max-w-md border border-2 rounded-lg shadow${mode === 'dark'
                      ? 'bg-gray-100 hover:bg-gray-800 border-gray-700'
                      : 'bg-white hover:bg-gray-100 border-gray-300'
                      }`}>
                      <div class="p-5">
                        <div class="grid grid-cols-1 gap-4">
                          <div className='h-16'>
                            <h5 class={`mb-2 text-1xl font-bold tracking-tight ${mode === 'dark'
                              ? 'text-white hover:text-blue-900 '
                              : 'text-black hover:text-blue-500 '
                              }`}>{project.name}</h5>
                          </div>
                          <div>
                            {
                              project.lang.map((lang, index) => {
                                return (
                                  <span key={index} className={`text-xs font-medium tracking-wide uppercase ${mode === 'dark'
                                    ? 'text-white hover:text-blue-900 '
                                    : 'text-black hover:text-blue-500 '
                                    }`}>{lang}</span>
                                )
                              })
                            }
                          </div>
                          <div>
                            <a href={project.links} target="_blank"><FontAwesomeIcon icon={icons.faGithub} size="xl" className="transition-all duration-300 hover:text-blue-900" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
