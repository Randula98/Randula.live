/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import dp from './dp.png'

const about = "Software Engineer with nearly 3 years of experience designing and building scalable web applications, backend services, and cloud-based solutions. Experienced across the full software development lifecycle, with a strong foundation in problem-solving, system design, and delivering high-quality, maintainable code. Passionate about learning new technologies, adapting to evolving challenges, and selecting the right tools for each project rather than being confined to a specific technology stack. Committed to continuous improvement, collaboration, and building software that creates meaningful value."
const link = "https://drive.google.com/file/d/1nYPwepStHnmx2a6MatIhEzjOg6ILbpPA/view?usp=sharing"
export default function About() {

    return (
        <div id="about">
            <div className="p-8 sm:p-16 items-stretch flex flex-col sm:flex-row dark:text-white">
                <div className="w-full">
                    <div className="w">
                        <div className="flex flex-wrap justify-center mt-10">
                            <img src={dp} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none h-7/12 w-7/12" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col self-start sm:self-center pb-24 sm:pb-0 gap-1 w-4/5">
                    <div className="w-full">
                        <h4 className="text-2xl font-semibold">About Me!</h4>
                        <div className="mt-10">
                            <p class="tracking-widest text-gray-500 md:text-lg dark:text-gray-400 font-semibold">
                                {about}
                            </p>
                        </div>
                        <div className="mt-10">
                            <a href={link} target="_blank" type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" rel="noreferrer">
                                Download My CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
