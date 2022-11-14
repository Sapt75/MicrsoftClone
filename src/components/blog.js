import React from 'react'

const Blog = () => {
    return (
        <section className="text-gray-600 body-font my-20 mx-10">
            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/4">
                        <div className="h-full overflow-hidden">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-Go-2-01-M01?wid=380&hei=213&fit=crop" alt="blog" />
                            <div className="py-6">
                                <h2 className="font-medium text-black inline bg-yellow-500 px-2 py-1">New</h2>
                                <h1 className="title-font text-2xl font-semibold text-gray-900 mt-2 mb-3">Surface Laptop Go 2</h1>
                                <p className="leading-relaxed w-full text-base mb-3">A sleek laptop with a 12.4-inch touchscreen, great typing experience and improved HD camera.</p>
                                <div className="flex items-center flex-wrap ">
                                    <a href='https://www.microsoft.com/en-in/surface/devices/surface-laptop-go-2?icid=mscom_marcom_CPH1a_SurfaceLaptopGo2&icid=FY22SpringSurface#overview' className="text-sky-700 hover:underline font-semibold inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4">
                        <div className="h-full overflow-hidden">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Gldn-mscom-01-Black-Platinum-CP01?wid=380&hei=213&fit=crop" alt="blog" />
                            <div className="py-6">
                                <h1 className="title-font text-2xl font-semibold text-gray-900 mt-7 mb-3">Surface Laptop 4</h1>
                                <p className="leading-relaxed mb-3">Do it all with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance.</p>
                                <div className="flex items-center flex-wrap">
                                    <a href='https://www.microsoft.com/en-in/surface/devices/surface-laptop-4?icid=mscom_marcom_CPH2a_SurfaceLaptop4' className="text-sky-700 hover:underline font-semibold inline-flex items-center md:mb-2 lg:mb-0">Shop now
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4">
                        <div className="h-full overflow-hidden">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-AEM-PC-Game-Pass-Expansion?wid=380&hei=213&fit=crop" alt="blog" />
                            <div className="py-6">
                                <h1 className="title-font text-2xl font-semibold text-gray-900 mt-7 mb-3">PC Game Pass</h1>
                                <p className="leading-relaxed mb-3">Unlock 100+ great games and EA Play, plus get your first month for ₹50. Offer available to new subscribers only.</p>
                                <div className="flex items-center flex-wrap ">
                                    <a href='https://www.xbox.com/en-in/games/store/pc-game-pass/cfq7ttc0kgq8?icid=mscom_marcom_CPH3a_PCGamePass' className="text-sky-700 inline-flex font-semibold hover:underline items-center md:mb-2 lg:mb-0">Join now
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4">
                        <div className="h-full overflow-hidden">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Windows11-GlobalLaunch?wid=380&hei=213&fit=crop" alt="blog" />
                            <div className="py-6">
                                <h1 className="title-font text-2xl font-semibold text-gray-900 mt-7 mb-3">Designed for life today – and tomorrow</h1>
                                <p className="leading-relaxed mb-3">The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.</p>
                                <div className="flex items-center flex-wrap ">
                                    <a href='https://www.microsoft.com/en-in/windows/windows-11?icid=mscom_marcom_CPH4a_Win11PChlth#pchealthcheck' className="text-sky-700 hover:underline font-semibold inline-flex items-center md:mb-2 lg:mb-0">See if your PC is ready
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog