import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

function Hero() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block">Nurturing Ethiopian</span>
                                <span className="block text-blue-600">Future Tech Talent</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                A dynamic computer science community dedicated to empowering Ethiopian students and developers through
                                project-based learning, mentorship, and collaboration.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                                        <Link to="/register" className="flex items-center text-white">
                                            Join Us <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </button>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-blue-600 bg-white border border-blue-600 hover:bg-blue-50 md:py-4 md:text-lg md:px-10">
                                        <Link to="/about" className="text-blue-600">
                                            Learn More
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="h-56 w-full bg-gradient-to-r from-blue-400 to-blue-600 sm:h-72 md:h-96 lg:w-full lg:h-full">
                    <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-white mb-4">See the Big Picture</h2>
                            <h2 className="text-3xl font-bold text-white mb-4">Find Your Tone</h2>
                            <h2 className="text-3xl font-bold text-white">Make The Spider Web</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

