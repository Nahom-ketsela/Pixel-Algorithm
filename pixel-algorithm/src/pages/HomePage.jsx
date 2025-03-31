import Hero from "../components/Hero"
import About from "../components/About"
import Sectors from "../components/Sectors"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

function HomePage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Hero />
            <About />
            <Sectors />

            <section className="py-20 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">Ready to Join Our Community?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Become part of Ethiopia's leading tech community and shape the future of technology in the country.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium inline-flex items-center">
                        <Link to="/register" className="flex items-center text-white">
                            Register Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </button>
                </div>
            </section>
        </main>
    )
}

export default HomePage

