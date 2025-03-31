"use client"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const isActive = (path) => {
        return location.pathname === path
    }

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to="/" className="flex items-center">
                                <span className="text-blue-600 font-bold text-xl">PIXEL</span>
                                <span className="text-gray-900 font-bold text-xl ml-1">ALGORITHM</span>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    to="/"
                                    className={`px-3 py-2 rounded-md text-sm font-medium ${isActive("/") ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
                                        }`}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    className={`px-3 py-2 rounded-md text-sm font-medium ${isActive("/about") ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
                                        }`}
                                >
                                    About
                                </Link>
                                <Link
                                    to="/sectors"
                                    className={`px-3 py-2 rounded-md text-sm font-medium ${isActive("/sectors") ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
                                        }`}
                                >
                                    Sectors
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                            <Link to="/register" className="text-white">
                                Register Now
                            </Link>
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                        <Link
                            to="/"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/") ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/about") ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/sectors"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/sectors") ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sectors
                        </Link>
                        <div className="mt-4">
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                                <Link to="/register" className="text-white" onClick={() => setIsMenuOpen(false)}>
                                    Register Now
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar

