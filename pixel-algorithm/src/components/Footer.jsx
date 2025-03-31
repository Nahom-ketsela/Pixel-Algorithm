import { Link } from "react-router-dom"
import { Phone, Mail, Github, Linkedin, Twitter } from "lucide-react"

function Footer() {
    return (
        <footer className="bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">PIXEL ALGORITHM</h3>
                        <p className="text-blue-100">
                            Nurturing Ethiopian Future Tech Talent through project-based learning, mentorship, and collaboration.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-blue-300 hover:text-white transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-blue-300 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-blue-300 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-blue-100 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-blue-100 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/sectors" className="text-blue-100 hover:text-white transition-colors">
                                    Sectors
                                </Link>
                            </li>
                            <li>
                                <Link to="/register" className="text-blue-100 hover:text-white transition-colors">
                                    Join Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center text-blue-100">
                                <Phone className="h-5 w-5 mr-2 text-blue-300" />
                                <a href="tel:+251989681490" className="hover:text-white transition-colors">
                                    +251-989-681-490
                                </a>
                            </li>
                            <li className="flex items-center text-blue-100">
                                <Mail className="h-5 w-5 mr-2 text-blue-300" />
                                <a href="mailto:dagimaynadispro@gmail.com" className="hover:text-white transition-colors">
                                    dagimaynadispro@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-blue-800 text-center">
                    <p className="text-blue-200">&copy; {new Date().getFullYear()} Pixel Algorithm. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

