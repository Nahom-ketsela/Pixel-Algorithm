import About from "../components/About";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <button className="group border border-gray-200 rounded-lg px-4 py-2 mb-8 hover:bg-gray-50 transition-colors duration-200 shadow-sm hover:shadow-md inline-flex items-center">
                    <Link to="/" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
                        Back to Home
                    </Link>
                </button>

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                            About
                        </span>
                        <span className="text-black-200"> Pixel Algorithm</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Learn more about our mission, vision, and how we're shaping the future of tech in Ethiopia
                    </p>
                </div>
            </div>

            <About extended={true} />

            <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                        <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Story</h2>
                                    <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                        Since 2022
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="space-y-6">
                                    <p className="text-gray-600 leading-relaxed">
                                        Pixel Algorithm was founded with a vision to address the growing gap between academic education and
                                        industry requirements in Ethiopia's tech sector.
                                    </p>
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <h3 className="font-semibold text-blue-700 mb-2">Our Beginning</h3>
                                        <p className="text-sm text-gray-600">
                                            Started by a group of passionate CS students at Addis Ababa University
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-gray-600 leading-relaxed">
                                        Recognizing the need for practical experience, we created a community where students and professionals
                                        could collaborate, learn and grow together.
                                    </p>
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <h3 className="font-semibold text-blue-700 mb-2">Growth</h3>
                                        <p className="text-sm text-gray-600">
                                            Now with 500+ active members across multiple universities
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-gray-600 leading-relaxed">
                                        Through workshops, hackathons, and mentorship programs, we're building a network of skilled professionals
                                        ready to drive innovation in Ethiopia's tech ecosystem.
                                    </p>
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <h3 className="font-semibold text-blue-700 mb-2">Impact</h3>
                                        <p className="text-sm text-gray-600">
                                            100+ projects completed, 30+ industry partners
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-100">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-blue-100 p-3 rounded-full">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800">Ready to join us?</h3>
                                    </div>
                                    <Link
                                        to="/register"
                                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium rounded-lg hover:shadow-md transition-all duration-300 hover:from-blue-700 hover:to-blue-500"
                                    >
                                        Become a Member
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AboutPage;