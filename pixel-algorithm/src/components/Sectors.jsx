import { Code, Wifi, Globe, Smartphone, Database } from "lucide-react"
import { Link } from "react-router-dom"

function Sectors({ extended = false }) {
    const sectors = [
        {
            name: "AI",
            icon: <Code className="h-12 w-12 text-blue-600" />,
            description: "Explore artificial intelligence, machine learning, and data science projects.",
            extendedDesc:
                "Our AI sector focuses on developing cutting-edge solutions using machine learning, deep learning, and data science. Members work on projects ranging from natural language processing to computer vision and predictive analytics.",
        },
        {
            name: "NETWORKING",
            icon: <Wifi className="h-12 w-12 text-blue-600" />,
            description: "Learn about network infrastructure, protocols, and cybersecurity.",
            extendedDesc:
                "The Networking sector covers everything from basic network infrastructure to advanced cybersecurity concepts. Members gain hands-on experience with network design, implementation, and security practices.",
        },
        {
            name: "WEB DEVELOPMENT",
            icon: <Globe className="h-12 w-12 text-blue-600" />,
            description: "Build responsive and dynamic web applications using modern frameworks.",
            extendedDesc:
                "Our Web Development sector focuses on both frontend and backend technologies. Members learn to create responsive, accessible, and performant web applications using modern frameworks and best practices.",
        },
        {
            name: "APP DEVELOPMENT",
            icon: <Smartphone className="h-12 w-12 text-blue-600" />,
            description: "Create mobile applications for Android and iOS platforms.",
            extendedDesc:
                "The App Development sector covers native and cross-platform mobile development. Members work on real-world mobile applications, learning about UI/UX design, performance optimization, and app distribution.",
        },
        {
            name: "DB DEVELOPMENT",
            icon: <Database className="h-12 w-12 text-blue-600" />,
            description: "Design and implement efficient database systems and solutions.",
            extendedDesc:
                "Our Database Development sector focuses on both relational and NoSQL database systems. Members learn about data modeling, query optimization, and building scalable data solutions for various applications.",
        },
    ]

    return (
        <section id="sectors" className="py-6 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {!extended && (
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Sectors</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                            Explore our diverse technology sectors and find your area of interest.
                        </p>
                    </div>
                )}

                <div className="mt-12">
                    {/* First row: 3 sectors */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {sectors.slice(0, 3).map((sector, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-6 border border-gray-200 
                                transition-all duration-300 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1"
                            >
                                <div className="flex justify-center mb-4">{sector.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">{sector.name}</h3>
                                <p className="text-gray-600 text-center">{sector.description}</p>

                                {extended && (
                                    <div className="mt-4 pt-4 border-t border-gray-400">
                                        <p className="text-gray-600 text-sm">{sector.extendedDesc}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Second row: 2 sectors, centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center mt-6">
                        {sectors.slice(3, 5).map((sector, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-6 border border-gray-200 
                                transition-all duration-300 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1"
                            >
                                <div className="flex justify-center mb-4">{sector.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">{sector.name}</h3>
                                <p className="text-gray-600 text-center">{sector.description}</p>

                                {extended && (
                                    <div className="mt-4 pt-4 border-t border-gray-400">
                                        <p className="text-gray-600 text-sm">{sector.extendedDesc}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {!extended && (
                        <div className="mt-12 text-center">
                            <Link to="/sectors">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-all">
                                    Learn More About Our Sectors
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Sectors
