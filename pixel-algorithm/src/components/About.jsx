function About({ extended = false }) {
    return (
        <section id="about" className={`py-16 ${extended ? "bg-white" : "bg-blue-50"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {!extended && (
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                            Pixel Algorithm is a dynamic computer science community dedicated to empowering Ethiopian students and
                            developers.
                        </p>
                    </div>
                )}

                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <h3 id="vision" className="text-2xl font-bold text-blue-600 mb-4">
                                VISION
                            </h3>
                            <p className="text-gray-600">
                                To become the largest and most influential computer science community in Ethiopia, cultivating visionary
                                and leadership-driven mindset members, and addressing the scarcity of skilled manpower in local
                                industries.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-bold text-blue-600 mb-4">MISSION</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">•</span>
                                    <span>Provide a Collaborative Platform</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">•</span>
                                    <span>Empower Students with Mentorship and Resources</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">•</span>
                                    <span>Equip Members with Real-World Soft Skills</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">•</span>
                                    <span>Foster a Community Bridging Academia and Industry</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {extended && (
                    <div className="mt-16">
                        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Values</h3>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h4>
                                    <p className="text-gray-600">
                                        We strive for excellence in everything we do, pushing the boundaries of what's possible.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h4>
                                    <p className="text-gray-600">
                                        We believe in the power of teamwork and collaborative problem-solving.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h4>
                                    <p className="text-gray-600">
                                        We encourage creative thinking and innovative approaches to challenges.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default About

