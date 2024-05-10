/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import * as icons from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact({ mode }) {
  return (
    <div id="contact">
      <div className="p-8 sm:p-16 pt-24 sm:pt-24 items-stretch flex flex-col sm:flex-row gap-8 sm:gap-4 dark:text-white">
        <div className="w-7/12">
          <div class="text-5xl md:text-6xl font-semibold font-mono
                                bg-gradient-to-r bg-clip-text  text-transparent 
                                from-indigo-500 via-blue-500 to-purple-500
                                animate-text 
                                ">
            <div className="textset">
              <span className="left">Want To</span><br />
              <span className="">Contact</span><br />
              <span className="">Me?</span><br />
            </div>
          </div>
        </div>
        <div className="flex flex-col self-start sm:self-center  sm:pb-0 gap-7">
          <div className="flex flex-col self-start sm:self-center  sm:pb-0 gap-7">
            <div className="flex flex-col gap-3">
              <h4 className={`text-2xl font-semibold ${mode === 'dark'
                  ? 'text-white'
                  : 'text-black'
                }`}>Say Hello!</h4>
              <div className="flex flex-col gap-1">
                <a className={`text-xl font-semibold transition-all duration-300 ${mode === 'dark'
                  ? 'text-white hover:text-blue-900 '
                  : 'text-black hover:text-blue-500 '
                }`} href="mailto:Randula98@gmail.com">
                  Randula98@gmail.com
                </a>
                <a className={`text-xl font-semibold transition-all duration-300 ${mode === 'dark'
                  ? 'text-white hover:text-blue-900 '
                  : 'text-black hover:text-blue-500 '
                }`} href="tel:+94713861718">
                  +94 71 386 1 718
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className={`text-xl ${mode === 'dark'
                  ? 'text-white'
                  : 'text-black'
                }`}>See me on</h4>
              <div className="flex flex-row gap-8">
                <a href="https://www.facebook.com/randula98/" target="_blank"><FontAwesomeIcon icon={icons.faFacebook} size="xl" className={`transition-all duration-300 hover:text-blue-900 ${mode === 'dark'
                  ? 'text-white hover:text-blue-900 '
                  : 'text-black hover:text-blue-500 '
                }`}  /></a>
                <a href="https://www.instagram.com/randula.m_/" target="_blank"><FontAwesomeIcon icon={icons.faInstagram} size="xl" className={`transition-all duration-300 hover:text-blue-900 ${mode === 'dark'
                  ? 'text-white hover:text-blue-900 '
                  : 'text-black hover:text-blue-500 '
                }`}  /></a>
                <a href="https://www.linkedin.com/in/randula98/" target="_blank"><FontAwesomeIcon icon={icons.faLinkedin} size="xl" className={`transition-all duration-300 hover:text-blue-900 ${mode === 'dark'
                  ? 'text-white hover:text-blue-900 '
                  : 'text-black hover:text-blue-500 '
                }`}  /></a>
                <a href="https://github.com/randula98" target="_blank"><FontAwesomeIcon icon={icons.faGithub} size="xl" className={`transition-all duration-300 hover:text-blue-900 ${mode === 'dark'
                  ? 'text-white hover:text-blue-900 '
                  : 'text-black hover:text-blue-500 '
                }`}  /></a>
                <a href="https://mobile.twitter.com/RMawaththa" target="_blank"><FontAwesomeIcon icon={icons.faTwitter} size="xl" className={`transition-all duration-300 hover:text-blue-900 ${mode === 'dark'
                  ? 'text-white hover:text-blue-900 '
                  : 'text-black hover:text-blue-500 '
                }`}  /></a>
                <a href="https://www.hackerrank.com/profile/it21004018" target="_blank"><FontAwesomeIcon icon={icons.faHackerrank} size="xl" className={`transition-all duration-300 hover:text-blue-900 ${mode === 'dark'
                  ? 'text-white hover:text-blue-900 '
                  : 'text-black hover:text-blue-500 '
                }`}  /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
