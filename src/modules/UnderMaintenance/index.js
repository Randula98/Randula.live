import React from "react";

export default function UnderMaintenance({ mode }) {
    return (
        <section id="maintenance">
            <div className="px-8 py-24 sm:px-16 text-center border-b border-black/10 dark:border-white/10">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-yellow-100 dark:bg-yellow-900/20 mb-8">
                    <span className="text-5xl">🚧</span>
                </div>

                <h2 className="text-4xl sm:text-6xl font-bold uppercase">
                    Under Maintenance
                </h2>

                <p
                    className={`mt-8 max-w-3xl mx-auto text-lg leading-8 ${mode === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                >
                    This section is currently being updated.
                    <br />
                    I'm working on new content, projects, and improvements that will be
                    available soon.
                </p>

                <div className="mt-10 flex flex-col items-center gap-4">
                    <div
                        className={`rounded-full px-6 py-3 font-medium ${mode === "dark"
                                ? "bg-gray-800 text-cyan-400"
                                : "bg-gray-100 text-cyan-600"
                            }`}
                    >
                        🚧 Coming Soon
                    </div>

                    <p
                        className={`text-sm italic ${mode === "dark" ? "text-gray-500" : "text-gray-500"
                            }`}
                    >
                        <span className="font-semibold">Disclaimer:</span> There's a small
                        chance this section never returns. If that happens, let's just call
                        it a product decision. 🙂
                    </p>
                </div>
            </div>
        </section>
    );
}