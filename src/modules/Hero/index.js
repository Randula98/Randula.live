/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Hero.css";

export default function Hero() {
    return (
        <div id="hero">
            <div className="px-8 py-24 sm:px-16 sm:py-28 text-center border-b border-black/10 dark:border-white/10 flex flex-col gap-8">

                <div>
                    <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-cyan-500 font-semibold">
                        Software Engineer
                    </p>

                    <h2 className="mt-4 text-4xl sm:text-6xl font-bold">
                        Hello, I'm{" "}
                        <span className="hero-name">
                            Randula Mawaththa
                        </span>
                    </h2>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="hero-title">
                        <span className="hero-line left">Building</span>
                        <span className="hero-line">Modern Software</span>
                        <span className="hero-line right">& Cloud Solutions</span>
                    </div>

                    <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400">
                        Passionate about building scalable applications, solving complex
                        problems, and continuously learning new technologies.
                    </p>
                </div>

            </div>
        </div>
    );
}