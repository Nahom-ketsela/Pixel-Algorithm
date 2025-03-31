import About from "../components/About"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <button className="border border-gray-300 rounded-md px-4 py-2 mb-8 hover:bg-gray-100 inline-flex items-center">
                    <Link to="/" className="flex items-center text-gray-700">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Link>
                </button>

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">About Pixel Algorithm</h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Learn more about our mission, vision, and how we're shaping the future of tech in Ethiopia
                    </p>
                </div>
            </div>

            <About extended={true} />

            <section className="py-16 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-xl p-8 border border-blue-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
                        <p className="text-gray-600 mb-4">
                            Pixel Algorithm was founded with a vision to address the growing gap between academic education and
                            industry requirements in Ethiopia's tech sector. Recognizing the need for practical, hands-on experience
                            and mentorship, we created a community where students and professionals could collaborate, learn, and grow
                            together.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Since our inception, we've grown into a vibrant community of passionate tech enthusiasts, working together
                            to solve real-world problems and develop innovative solutions. Our members come from diverse backgrounds
                            but share a common goal: to advance their skills and contribute to Ethiopia's technological development.
                        </p>
                        <p className="text-gray-600">
                            Through workshops, hackathons, mentorship programs, and collaborative projects, we're building a network
                            of skilled professionals ready to tackle the challenges of tomorrow and drive innovation in Ethiopia's
                            tech ecosystem.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutPage

