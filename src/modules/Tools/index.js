/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import ToolsData from '../../data/tools.json'

export default function Tools() {
  return (
    <div id="tools">
      <div className="p-8 min-h-screen text-center border-b border-b-black/10 dark:border-b-white/10 pt-24 sm:p-16 sm:pt-24 flex flex-col gap-8 justify-between">
        <div>
          <h2 className="text-3xl font-semibold uppercase sm:text-6xl">
            Tools & technologies
          </h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {ToolsData.map((tool, index) => (
            <a key={index} href="#" className="w-full md:w-1/3 lg:w-1/4 p-6">
              <div className="w-60 border border-gray-500 rounded-lg shadow hover:bg-gray-500">
                <img src={tool.logo} alt="img" className="w-20 h-25 mx-auto p-2" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
