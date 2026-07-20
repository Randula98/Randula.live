import React from "react";

const interests = [
    "🏋️ Working Out",
    "🎮 Gaming",
    "🎬 Movies & TV",
    "🎵 Music",
    "🥗 Whole Foods & Nutrition",
    "💻 Exploring Tech",
    "🔧 Electronics & DIY",
    "⚡ Electrical Repairs & Modifications",
    "📚 Continuous Learning",
    "✈️ Travelling",
];

export default function Beyond({ mode }) {
    return (
        <section
            id="beyond"
            className="py-24 border-b border-black/10 dark:border-white/10"
        >
            <div className="max-w-5xl mx-auto px-8">
                <div className="text-center mb-10">
                    <h2 className="text-4xl sm:text-6xl font-bold uppercase">
                        Beyond Code
                    </h2>

                    <p
                        className={`mt-6 max-w-3xl mx-auto leading-8 ${mode === "dark" ? "text-gray-400" : "text-gray-600"
                            }`}
                    >
                        While software engineering is my profession, I'm equally passionate
                        about understanding how things work. Outside of coding, I spend my
                        time working out, gaming, exploring new technologies, watching
                        movies and TV series, experimenting with nutritious whole foods, and
                        learning new skills. I also enjoy hands-on work with electronics,
                        electrical instruments, repairs, modifications, and DIY projects.
                        Whether it's software or hardware, I enjoy solving problems and
                        building better solutions.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                    {interests.map((interest) => (
                        <span
                            key={interest}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 ${mode === "dark"
                                    ? "bg-gray-800 text-gray-300"
                                    : "bg-gray-100 text-gray-700"
                                }`}
                        >
                            {interest}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}