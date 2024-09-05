import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
export default function HeroSection() {
  return (
      <section className="bg-blue-100 py-12 bg-hero-pattern h-screen">
          <div className="container mx-auto">
              <div className="mt-12 text-center bg-black bg-opacity-50 p-10 rounded-3xl">
                  <h2 className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-3xl text-3xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                      Dive Into Hassle-Free Pool Ownership Today!
                  </h2>
                  <p className="text-xl text-white mb-6">
                      Experience the crystal-clear difference with Remedy Pool Service. Your oasis awaits!
                  </p>
                  <button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                      Schedule Your Free Consultation
                  </button>
                  <p className="mt-4 text-white text-sm">
                      Or call us now: <a href="tel:321-522-9578" className="font-bold hover:underline">321-522-9578</a>
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
                  <div>
                      <h2 className="text-3xl font-bold text-white bg-cyan-600 center  m-4 text-center rounded-3xl">Keep Your Swimming Pool Clean and Sparkling All
                          Year Round!</h2>
                      <ul className="text-lg space-y-4">
                          <li className="flex items-start bg-white  rounded-lg p-4 shadow-md">
                              <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none"
                                   stroke="currentColor"
                                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              <div>
                                  <strong className="text-blue-800">Pool Service frustrating you?</strong>
                                  <p className="mt-1 text-gray-700">We understand the hassle of unreliable pool
                                      services.
                                      Our team ensures consistent, punctual, and thorough maintenance, so you can enjoy
                                      your
                                      pool without the stress.</p>
                              </div>
                          </li>
                          <li className="flex items-start bg-white rounded-lg p-4 shadow-md">
                              <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none"
                                   stroke="currentColor"
                                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              <div>
                                  <strong className="text-blue-800">Troubled by poor water condition?</strong>
                                  <p className="mt-1 text-gray-700">Say goodbye to cloudy, unbalanced, or unhygienic
                                      pool
                                      water. Our expert technicians use state-of-the-art equipment and premium chemicals
                                      to
                                      keep your pool crystal clear and safe for swimming all year round.</p>
                              </div>
                          </li>
                          <li className="flex items-start bg-white  rounded-lg p-4 shadow-md">
                              <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none"
                                   stroke="currentColor"
                                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              <div>
                                  <strong className="text-blue-800">Tired of doing it yourself?</strong>
                                  <p className="mt-1 text-gray-700">Maintaining a pool can be time-consuming and
                                      complex.
                                      Let our experienced professionals handle the work while you relax and enjoy your
                                      sparkling clean pool. We take care of everything from regular cleaning to chemical
                                      balancing and equipment checks.</p>
                              </div>
                          </li>
                      </ul>
                  </div>

              </div>
          </div>
      </section>
  );
}