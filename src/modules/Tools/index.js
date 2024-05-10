import React from 'react'

import ToolsData from '../../data/tools.json'

export default function Tools({mode}) {
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
            <div key={index} className="w-full md:w-1/3 lg:w-1/4 p-6">
              <div className={`w-60 border rounded-lg shadow hover:cursor-grabbing ${mode === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700 dark:border-gray-700'
                  : 'bg-white hover:bg-gray-100 dark:border-gray-300'
                }`}>
                <img src={tool.logo} alt="img" className="w-20 h-25 mx-auto p-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
