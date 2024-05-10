/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const about = "I am an aspiring Undergraduate Student in the IT industry, Self-Motivated and Encouraged.  My strong attributes are problem-solving, working with dignity and honesty, being highly organized, and being capable of effectively working independently and under pressure. Through a lot of effort, research, talent, and tenacity, I hope to thrive in my area."
const link = "https://drive.google.com/file/d/1NSfPby2AvWSjSRj2VOANmXfqDtvpiQuU/view?usp=drive_link"
const image = "https://firebasestorage.googleapis.com/v0/b/randulalive-a5419.appspot.com/o/myimage%2FRandulaM.png?alt=media&token=87b0a78a-ec85-4d2c-9ce2-993bec975249";

export default function About() {
    
    return (
        <div id="about">
            <div className="p-8 sm:p-16 items-stretch flex flex-col sm:flex-row dark:text-white">
                <div className="w-full">
                    <div className="w">
                        <div className="flex flex-wrap justify-center mt-10">
                            <img src={image} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none h-7/12 w-7/12" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col self-start sm:self-center pb-24 sm:pb-0 gap-1 w-4/5">
                    <div className="w-full">
                        <h4 className="text-2xl font-semibold">About Me!</h4>
                        <div className="mt-10">
                            <p class="tracking-widest text-gray-500 md:text-lg dark:text-gray-400 font-semibold">
                                {about}
                            </p>
                        </div>
                        <div className="mt-10">
                            <a href={link} target="_blank" type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" rel="noreferrer">
                                Download My CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
