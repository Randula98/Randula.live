/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Hero.css"

export default function Hero() {
    return (
        <div id="hero">
            <div className="p-8 min-h-screen text-center border-b border-b-black/10 dark:border-b-white/10 pt-24 sm:p-16 sm:pt-24 flex flex-col gap-8 justify-between">
                <div>
                    <h2 className="text-3xl font-semibold uppercase sm:text-6xl ">
                        Hello there! I'm Randula Mawaththa
                    </h2>
                </div>
                <br />
                <div className="flex flex-col gap-4 sm:gap-2">
                    <div class="text-5xl md:text-9xl font-semibold font-mono
                                bg-gradient-to-r bg-clip-text  text-transparent 
                                from-indigo-500 via-blue-500 to-purple-500
                                animate-text
                                ">
                        <div className="textset">
                            <span className="left">Self-Innovated</span><br />
                            <span className="">&</span><br />
                            <span className="right">Motivated</span><br />
                            <span className="left">Full-Stack</span><br />
                            <span className="right">Developer</span><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
