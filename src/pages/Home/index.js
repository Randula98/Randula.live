import { createContext, useState } from "react";

import { Navbar, Footer } from "../../components";
import {
    Hero,
    About,
    Contact,
    Tools,
    Projects
} from "../../modules";

import "./home.css";

export const ThemeContext = createContext(null);

function Home() {
    const [theme, setTheme] = useState("dark");
    document.documentElement.classList.add("dark");
    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light");
        }
        else {
            setTheme("dark");
        }
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="Home" id={theme}>
                <Navbar toggle={toggleTheme} mode={theme} />
                <Hero />
                <About />
                <Tools mode={theme} />
                <Projects mode={theme} />
                <Contact mode={theme} />
                <Footer mode={theme} />
            </div>
        </ThemeContext.Provider>
    )
}

export default Home;