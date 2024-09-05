export default function HeroSection() {
    return (
        <>
            <div className="bg-gray-100 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Our Services
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Keeping your pool in top-notch condition all year round.
                        </p>
                    </div>

                    <div className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">Pool Cleaning</h3>
                            <p className="mt-4 text-lg text-gray-600">
                                Maintaining a clean, clear pool is essential for both the longevity
                                of your investment and the health and safety of your family. Our
                                pool cleaning services include:
                            </p>
                            <ul className="mt-6 space-y-4 text-lg text-gray-600">
                                <li className="flex items-start">
                                    <svg
                                        className="flex-shrink-0 h-6 w-6 text-green-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="ml-3">Weekly or bi-weekly pool cleaning</span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="flex-shrink-0 h-6 w-6 text-green-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="ml-3">Thorough surface skimming</span>
                                </li>
                                {/* Add more list items for pool cleaning services */}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">Pool Maintenance</h3>
                            <p className="mt-4 text-lg text-gray-600">
                                Proper pool maintenance is the key to ensuring your pool operates
                                efficiently and remains in pristine condition for years to come.
                                With our pool maintenance services, you can enjoy a hassle-free
                                pool experience:
                            </p>
                            <ul className="mt-6 space-y-4 text-lg text-gray-600">
                                <li className="flex items-start">
                                    <svg
                                        className="flex-shrink-0 h-6 w-6 text-green-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="ml-3">Routine filter and pump maintenance</span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="flex-shrink-0 h-6 w-6 text-green-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="ml-3">Comprehensive chemical balancing</span>
                                </li>
                                {/* Add more list items for pool maintenance services */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}