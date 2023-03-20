/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { animateScroll as scroll } from "react-scroll";

const Footer = (props) => {

    const scrollTop = () => {
        scroll.scrollToTop();
    }

    return (
        <div>
            <div className="px-8 sm:px-16 w-full min:h-32 border-t border-black/10 dark:border-white/10 flex items-center justify-center">
                <div className="flex flex-col sm:flex-row py-8 justify-between w-full items-center gap-3">
                    <span className="text-lg">Designed & Developed By Randula Mawaththa 2023 ©</span>
                    <a onClick={scrollTop} className="rounded-xl cursor-pointer border border-black dark:border-white px-3 py-1 uppercase hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black">Back to Top</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;