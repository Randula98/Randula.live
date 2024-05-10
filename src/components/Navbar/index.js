import React, { useState } from "react";
import { Link } from "react-scroll";
import { faMoon, faSun, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = (props) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="relative flex justify-center dark:text-white z-10">
            <div className="fixed top-0 w-full flex justify-between gap-8 px-8 sm:px-16 items-center backdrop-blur-[5px] saturate-150 h-16 font-semibold text-md bg-white/50 border-b border-black/10 dark:border-white/10 dark:bg-black/50">
                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="block text-blue-900 hover:text-blue-600 transition-all duration-300">
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </button>
                </div>
                {menuOpen && <div className="fixed top-16 left-0 w-full bg-white dark:bg-black flex flex-col items-center justify-center gap-10">
                    <Link className="hover:text-blue-900 cursor-pointer transition-all duration-300" activeClass="text-blue-900" spy={true} to="hero" smooth={true} duration={1000} onClick={toggleMenu}>HOME</Link>
                    <Link className="hover:text-blue-900 cursor-pointer transition-all duration-300" activeClass="text-blue-900" spy={true} to="about" smooth={true} duration={1200} onClick={toggleMenu}>ABOUT ME</Link>
                    <Link className="hover:text-blue-900 cursor-pointer transition-all duration-300" activeClass="text-blue-900" spy={true} to="tools" smooth={true} duration={1600} onClick={toggleMenu}>TOOLS & TECHNOLOGIES</Link>
                    <Link className="hover:text-blue-900 cursor-pointer transition-all duration-300" activeClass="text-blue-900" spy={true} to="projects" smooth={true} duration={1400} onClick={toggleMenu}>PROJECTS</Link>
                    <Link className="hover:text-blue-900 cursor-pointer transition-all duration-300" activeClass="text-blue-900" spy={true} to="contact" smooth={true} duration={1800} onClick={toggleMenu}>CONTACT ME</Link>
                    <br/>
                </div>}
                <div className="flex gap-10 hidden md:flex">
                    <Link className="hover:text-blue-900 cursor-pointer transition-all duration-300" activeClass="text-blue-900" spy={true} to="hero" smooth={true} duration={1000} >HOME</Link>
                    <Link className="hover:text-blue-900 cursor-pointer transition-all duration-300" activeClass="text-blue-900" spy={true} to="about" smooth={true} duration={1200} >ABOUT ME</Link>
                    <Link className="hover:text-blue-900 cursor-pointer transition-all duration-300" activeClass="text-blue-900" spy={true} to="tools" smooth={true} duration={1600} >TOOLS & TECHNOLOGIES</Link>
                    <Link className="hover:text-blue-900 cursor-pointer transition-all duration-300" activeClass="text-blue-900" spy={true} to="projects" smooth={true} duration={1400} >PROJECTS</Link>
                    <Link className="hover:text-blue-900 cursor-pointer transition-all duration-300" activeClass="text-blue-900" spy={true} to="contact" smooth={true} duration={1800} >CONTACT ME</Link>
                </div>
                <div>
                    <button onClick={props.toggle} className="fade font-semibold flex items-center gap-1 hover:text-blue-600 transition-all duration-300">
                        <FontAwesomeIcon className="hover:animate-spin" icon={props.mode === "dark" ? faMoon : faSun} />
                        <span className="hidden sm:block">{props.mode === "dark" ? "Dark" : "Light"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;