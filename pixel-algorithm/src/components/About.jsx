function About({ extended = false }) {
    return (
        <section id="about" className={`py-6 ${extended ? "bg-white" : "bg-gradient-to-br from-blue-50 to-blue-100"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {!extended && (
                    <div className="text-center mb-2">
                        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                                About Us
                            </span>
                        </h2>
                        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
                            Pixel Algorithm is a dynamic computer science community dedicated to empowering Ethiopian students and
                            developers through collaboration, education, and innovation.
                        </p>
                    </div>
                )}

                <div className="">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Vision Card */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                            <div className="relative bg-white rounded-lg shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">VISION</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To become the largest and most influential computer science community in Ethiopia, cultivating visionary
                                    and leadership-driven mindset members, and addressing the scarcity of skilled manpower in local
                                    industries.
                                </p>
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                            <div className="relative bg-white rounded-lg shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">MISSION</h3>
                                </div>
                                <ul className="text-gray-600 space-y-3">
                                    <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5 flex-shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </span>
                                        <span className="leading-relaxed">Provide a Collaborative Platform for Ethiopian CS students</span>
                                    </li>
                                    <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5 flex-shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </span>
                                        <span className="leading-relaxed">Empower Students with Mentorship and Learning Resources</span>
                                    </li>
                                    <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5 flex-shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </span>
                                        <span className="leading-relaxed">Equip Members with Real-World Technical and Soft Skills</span>
                                    </li>
                                    <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5 flex-shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </span>
                                        <span className="leading-relaxed">Foster a Community Bridging Academia and Industry</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {extended && (
                    <div className="mt-16">
                        <div className="relative bg-white rounded-xl shadow-xl p-8 border border-gray-100 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-20"></div>
                            <h3 className="relative text-3xl font-bold text-gray-800 mb-8">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                                    Our Values
                                </span>
                            </h3>
                            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3 mt-6">
                                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Excellence</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        We strive for excellence in everything we do, pushing boundaries and setting high standards in technology education.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Collaboration</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        We believe in the power of teamwork, open communication, and collective problem-solving to achieve greater impact.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        We encourage creative thinking, embrace new technologies, and foster innovative solutions to local challenges.
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