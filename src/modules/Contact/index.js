/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import * as icons from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
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
              <span className="right"></span><br />
              <span className="left">I am</span><br />
              <span className="left">Only</span><br />
              <span className="right">One Click</span><br />
              <span className="right">Away :)</span><br />
            </div>
          </div>
        </div>
        <div className="flex flex-col self-start sm:self-center pb-24 sm:pb-0 gap-7">
          <div className="flex flex-col self-start sm:self-center pb-24 sm:pb-0 gap-7">
            <div className="flex flex-col gap-3">
              <h4 className="text-2xl font-semibold">Say Hello!</h4>

              <div className="flex flex-col gap-1">
                <a className="text-xl font-semibold transition-all duration-300 hover:text-blue-900" href="mailto:Randula98@gmail.com">
                  Randula98@gmail.com
                </a>
                <a className="text-xl font-semibold transition-all duration-300 hover:text-blue-900" href="tel:+94713861718">
                  +94 71 386 1 718
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl">See me on</h4>
              <div className="flex flex-row gap-8">
                <a href="https://www.facebook.com/randula98/" target="_blank"><FontAwesomeIcon icon={icons.faFacebook} size="xl" className="transition-all duration-300 hover:text-blue-900" /></a>
                <a href="https://www.instagram.com/randula_98/" target="_blank"><FontAwesomeIcon icon={icons.faInstagram} size="xl" className="transition-all duration-300 hover:text-blue-900" /></a>
                <a href="https://www.linkedin.com/in/randula98/" target="_blank"><FontAwesomeIcon icon={icons.faLinkedin} size="xl" className="transition-all duration-300 hover:text-blue-900" /></a>
                <a href="https://github.com/randula98" target="_blank"><FontAwesomeIcon icon={icons.faGithub} size="xl" className="transition-all duration-300 hover:text-blue-900" /></a>
                <a href="https://mobile.twitter.com/RMawaththa" target="_blank"><FontAwesomeIcon icon={icons.faTwitter} size="xl" className="transition-all duration-300 hover:text-blue-900" /></a>
                <a href="https://open.spotify.com/user/xi99movwykar6xkkogsq39q2x" target="_blank"><FontAwesomeIcon icon={icons.faSpotify} size="xl" className="transition-all duration-300 hover:text-blue-900" /></a>
                <a href="" target="_blank"><FontAwesomeIcon icon={icons.faHackerrank} size="xl" className="transition-all duration-300 hover:text-blue-900" /></a>
                <a href="" target="_blank"><FontAwesomeIcon icon={icons.faYoutube} size="xl" className="transition-all duration-300 hover:text-blue-900" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
