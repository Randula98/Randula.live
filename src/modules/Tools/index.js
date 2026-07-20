import React from "react";

export default function Tools({ mode }) {
  return (
    <section id="tools">
      <div className="px-8 py-24 sm:px-16 text-center border-b border-black/10 dark:border-white/10">
        <h2 className="text-3xl sm:text-6xl font-semibold uppercase">
          Beyond the Tech Stack
        </h2>

        <p className="mt-8 max-w-4xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-400">
          Great software isn't defined by the programming language, framework,
          or cloud platform behind it—it's defined by how effectively it solves
          a problem.
          <br />
          <br />
          Throughout my career, I've worked across different technologies,
          architectures, and development environments. Rather than specializing
          in a single stack, I focus on understanding the problem, selecting the
          right tools, and learning whatever is necessary to deliver a reliable,
          scalable solution.
          <br />
          <br />
          <span className="font-semibold text-cyan-500 dark:text-cyan-400">
            Technology changes. Engineering principles endure.
          </span>
        </p>
      </div>
    </section>
  );
}