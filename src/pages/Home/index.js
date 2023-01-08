import { Navbar, Footer } from "../../components";
import { Hero } from "../../modules";
import { createContext, useState, useEffect } from "react";

import "./home.css";

export const ThemeContext = createContext(null);

function Home() {
    const [theme, setTheme] = useState(("theme" in localStorage) ? localStorage.theme : "dark");
    //const [theme, setTheme] = useState("dark");

    useEffect(() => {
        if (!("theme" in localStorage)) {
            localStorage.theme = theme;
            document.documentElement.classList.add("dark");
        }
        else {
            if (localStorage.theme === "dark") {
                document.documentElement.classList.add("dark");
            }
            else {
                document.documentElement.classList.remove("dark");
            }
        }

    }, [theme])

    const toggleTheme = () => {
        if (theme === "dark") {
            localStorage.theme = "light";
            setTheme("light");
        }
        else {
            localStorage.theme = "dark";
            setTheme("dark");
        }
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="Home" id={theme}>
                <Navbar toggle={toggleTheme} mode={theme} />
                <Hero />
                <Hero />
                <Hero />
                <Footer mode={theme} />
            </div>
        </ThemeContext.Provider>
    )
}

export default Home;