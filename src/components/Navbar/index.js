import { Link } from "react-scroll";
// import ReactSwitch from "react-switch";

import "./navbar.css"

const Navbar = (props) => {

    return (
        <div className="relative flex justify-center dark:text-white z-10">
            <div className="fixed top-0 w-full flex justify-between gap-8 px-8 sm:px-16 items-center backdrop-blur-[5px] saturate-150 h-16 font-semibold text-md bg-white/50 border-b border-black/10 dark:border-white/10 dark:bg-black/50">
                <div className="flex gap-10">
                    <Link className="hover:text-blue-900 cursor-pointer transition-all duration-300" activeClass="text-blue-900" spy={true} to="hero" smooth={true} duration={1000} >Home</Link>
                    <Link className="hover:text-blue-900 cursor-pointer transition-all duration-300" activeClass="text-blue-900" spy={true} to="#" smooth={true} duration={1000} >ABOUT ME</Link>
                    <Link className="hover:text-blue-900 cursor-pointer transition-all duration-300" activeClass="text-blue-900" spy={true} to="#" smooth={true} duration={1000} >PROJECTS</Link>
                    <Link className="hover:text-blue-900 cursor-pointer transition-all duration-300" activeClass="text-blue-900" spy={true} to="#" smooth={true} duration={1000} >TOOLS & TECHNOLOGIES</Link>
                    <Link className="hover:text-blue-900 cursor-pointer transition-all duration-300" activeClass="text-blue-900" spy={true} to="#" smooth={true} duration={1000} >CONTACT ME</Link>
                </div>
                <div className="switch">
                    {/* <ReactSwitch onChange={props.toggleTheme} checked={props.theme === "dark"}/> */}
                    <button onClick={props.toggle} checked={props.theme === "dark"}>theme</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;