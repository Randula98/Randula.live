/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {

    const scrollTop = () => {
        scroll.scrollToTop();
    }

    return (
        <div>
            <div class="px-4 sm:px-8 w-full min-h-32 border-t border-black/10 dark:border-white/10 flex items-center justify-center">
                <div class="flex flex-col sm:flex-row py-4 sm:py-8 justify-between w-full items-center gap-3">
                    <span class="text-sm sm:text-lg text-center sm:text-left">Designed & Developed By Randula Mawaththa 2023 ©</span>
                    <a href="#" onclick={scrollTop()} class="rounded-xl cursor-pointer border border-black dark:border-white px-3 py-1 uppercase text-xs sm:text-sm hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black">Back to Top</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;