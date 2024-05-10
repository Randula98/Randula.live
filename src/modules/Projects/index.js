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

export default function Projects() {

  return (
    <div id="projects">
      <div className="p-8 min-h-screen text-center border-b border-b-black/10 dark:border-b-white/10 pt-24 sm:p-16 sm:pt-24 flex flex-col gap-8 justify-between">
        <div>
          <h2 className="text-3xl font-semibold uppercase sm:text-6xl ">
            Projects By Me
          </h2>
        </div>
        <div className='w-'>
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
              ProjectsList.map((project, index) => {
                return (
                  <SwiperSlide key={index}>

                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                        <img class="rounded-t-lg" src="https://unsplash.it/600/400?image=501" alt="" />
                      </a>
                      <div class="p-5">
                        <div class="grid grid-cols-1 gap-4">
                          <div className='h-16'>
                            <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                          </div>
                          <div>
                            {
                              project.lang.map((lang, index) => {
                                return (
                                  <span key={index} className="text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-300">{lang}</span>
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
              }
              )
            }

          </Swiper>
        </div>
      </div>
    </div>
  )
}
