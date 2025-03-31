"use client"

import { useState } from "react"

function RegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        university: "",
        yearOfStudy: "",
        fieldOfStudy: "",
        interestedSectors: [],
        experience: "",
        motivation: "",
        agreeToTerms: false,
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState({ type: "", text: "" })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSectorChange = (sector) => {
        setFormData((prev) => {
            const sectors = prev.interestedSectors.includes(sector)
                ? prev.interestedSectors.filter((s) => s !== sector)
                : [...prev.interestedSectors, sector]
            return { ...prev, interestedSectors: sectors }
        })
    }

    const handleSelectChange = (e) => {
        setFormData((prev) => ({ ...prev, yearOfStudy: e.target.value }))
    }

    const handleCheckboxChange = (e) => {
        setFormData((prev) => ({ ...prev, agreeToTerms: e.target.checked }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500))

            setMessage({
                type: "success",
                text: "Thank you for registering with Pixel Algorithm. We'll contact you soon.",
            })

            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                university: "",
                yearOfStudy: "",
                fieldOfStudy: "",
                interestedSectors: [],
                experience: "",
                motivation: "",
                agreeToTerms: false,
            })
        } catch (error) {
            setMessage({
                type: "error",
                text: "There was an error submitting your registration. Please try again.",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="register" className="py-16 bg-blue-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="bg-blue-600 text-white p-6 rounded-t-lg">
                        <h2 className="text-2xl font-bold">Registration Form</h2>
                        <p className="text-blue-100">Fill out the form below to join Pixel Algorithm</p>
                    </div>
                    <div className="p-6">
                        {message.text && (
                            <div
                                className={`mb-6 p-4 rounded-md ${message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                            >
                                {message.text}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your email address"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Your phone number"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="university" className="block text-sm font-medium text-gray-700">
                                        University/Institution
                                    </label>
                                    <input
                                        id="university"
                                        name="university"
                                        value={formData.university}
                                        onChange={handleChange}
                                        placeholder="Your university or institution"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="yearOfStudy" className="block text-sm font-medium text-gray-700">
                                        Year of Study
                                    </label>
                                    <select
                                        id="yearOfStudy"
                                        name="yearOfStudy"
                                        value={formData.yearOfStudy}
                                        onChange={handleSelectChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="">Select year</option>
                                        <option value="1st Year">1st Year</option>
                                        <option value="2nd Year">2nd Year</option>
                                        <option value="3rd Year">3rd Year</option>
                                        <option value="4th Year">4th Year</option>
                                        <option value="5th Year">5th Year</option>
                                        <option value="Graduate">Graduate</option>
                                        <option value="Professional">Professional</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700">
                                        Field of Study
                                    </label>
                                    <input
                                        id="fieldOfStudy"
                                        name="fieldOfStudy"
                                        value={formData.fieldOfStudy}
                                        onChange={handleChange}
                                        placeholder="Your field of study"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Interested Sectors</label>
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                                    {["AI", "Networking", "Web Development", "App Development", "DB Development"].map((sector) => (
                                        <div key={sector} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id={sector}
                                                checked={formData.interestedSectors.includes(sector)}
                                                onChange={() => handleSectorChange(sector)}
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <label htmlFor={sector} className="text-sm text-gray-700">
                                                {sector}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                                    Previous Experience
                                </label>
                                <textarea
                                    id="experience"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    placeholder="Briefly describe your previous experience in technology"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">
                                    Motivation to Join
                                </label>
                                <textarea
                                    id="motivation"
                                    name="motivation"
                                    value={formData.motivation}
                                    onChange={handleChange}
                                    placeholder="Why do you want to join Pixel Algorithm?"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleCheckboxChange}
                                    required
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                                    I agree to receive communications from Pixel Algorithm
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Register Now"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegistrationForm

