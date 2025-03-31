import Sectors from "../components/Sectors"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function SectorsPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <button className="border border-gray-300 rounded-md px-4 py-2 mb-8 hover:bg-gray-100 inline-flex items-center">
                    <Link to="/" className="flex items-center text-gray-700">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Link>
                </button>

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Technology Sectors</h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our diverse technology sectors and find your area of interest
                    </p>
                </div>
            </div>

            <Sectors extended={true} />
        </main>
    )
}

export default SectorsPage

