/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
    const scrollTop = () => {
        scroll.scrollToTop({
            duration: 600,
            smooth: true,
        });
    };

    return (
        <footer className="border-t border-black/10 dark:border-white/10">
            <div className="max-w-6xl mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        © {new Date().getFullYear()} Randula Mawaththa. All rights reserved.
                    </p>

                    <p className="text-xs mt-1 text-gray-500">
                        Built with React & Tailwind CSS.
                    </p>
                </div>

                <button
                    onClick={scrollTop}
                    className="rounded-full border border-black/20 dark:border-white/20 px-5 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white hover:border-cyan-500"
                >
                    ↑ Back to Top
                </button>
            </div>
        </footer>
    );
}