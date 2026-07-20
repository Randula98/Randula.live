import React from "react";
import * as icons from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact({ mode }) {
  const socials = [
    {
      icon: icons.faLinkedin,
      link: "https://www.linkedin.com/in/randula98/",
      label: "LinkedIn",
    },
    {
      icon: icons.faGithub,
      link: "https://github.com/randula98",
      label: "GitHub",
    },
    {
      icon: icons.faTwitter,
      link: "https://mobile.twitter.com/RMawaththa",
      label: "Twitter",
    },
    {
      icon: icons.faHackerrank,
      link: "https://www.hackerrank.com/profile/it21004018",
      label: "HackerRank",
    },
    {
      icon: icons.faMicrosoft,
      link: "https://learn.microsoft.com/en-gb/users/randulamawaththa-0927/",
      label: "Microsoft Learn",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 border-t border-black/10 dark:border-white/10"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl font-bold uppercase">
            Let's Connect
          </h2>

          <p
            className={`mt-6 max-w-3xl mx-auto leading-8 ${mode === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
          >
            Whether you'd like to discuss a project, collaborate on an idea,
            explore new opportunities, or simply have a technical conversation,
            I'd be happy to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Contact Card */}
          <div
            className={`rounded-2xl border p-8 ${mode === "dark"
              ? "bg-gray-900 border-white/10"
              : "bg-white border-black/10"
              }`}
          >
            <h3 className="text-2xl font-bold mb-6">
              Contact Information
            </h3>

            <div className="space-y-5">
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:Randula98@gmail.com"
                  className="text-lg font-semibold hover:text-cyan-500 transition-colors"
                >
                  Randula98@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Phone
                </p>

                <a
                  href="tel:+94713861718"
                  className="text-lg font-semibold hover:text-cyan-500 transition-colors"
                >
                  +94 71 386 1718
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Location
                </p>

                <p className="text-lg font-semibold">
                  Sri Lanka 🇱🇰
                </p>
              </div>
            </div>
          </div>

          {/* Social Card */}
          <div
            className={`rounded-2xl border p-8 ${mode === "dark"
              ? "bg-gray-900 border-white/10"
              : "bg-white border-black/10"
              }`}
          >
            <h3 className="text-2xl font-bold mb-6">
              Find Me Online
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 ${mode === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-100 hover:bg-gray-200"
                    }`}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    size="lg"
                    className="text-cyan-500"
                  />

                  <span className="font-medium">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}