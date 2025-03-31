import Sectors from "../components/Sectors"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function SectorsPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center border border-gray-300 rounded-md px-4 py-2 mb-4 
                    text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>

                {/* Page Title */}
                <div className="text-center ">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                            Our
                        </span>
                        <span className="text-black-200"> Technology Sectors </span>
                    </h1>
                    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Explore our diverse technology sectors and find your area of interest.
                    </p>
                </div>
            </div>

            {/* Sectors Section */}
            <div className="bg-white shadow-md rounded-lg max-w-7xl mx-auto px-6 sm:px-8">
                <Sectors extended={true} />
            </div>
        </main>
    )
}

export default SectorsPage
