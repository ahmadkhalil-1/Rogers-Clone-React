import React from 'react'

const Footer = () => {
    return (
        <>
            <hr class="border-4 border-red-600" />
            <footer class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span class="ml-3 text-3xl text-red-600 font-bold"><i class="fa-brands fa-firefox text-3xl mr-2"></i>ROGERS</span>
                        </a>
                    </div>
                    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                            <nav class="list-none mb-10 text-sm">
                                <li>
                                    <a class="text-gray-600 hover:border-b  cursor-pointer hover:border-gray-800">Investor Relations</a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 hover:border-b mt-52 cursor-pointer hover:border-gray-800">Rogers together with Shaw</a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 hover:border-b cursor-pointer hover:border-gray-800">Connected for Success</a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 hover:border-b cursor-pointer hover:border-gray-800">About Rogers</a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 hover:border-b cursor-pointer hover:border-gray-800">Inclusion & Diversity</a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 hover:border-b cursor-pointer hover:border-gray-800">Privacy, CRTC & Consumer Codes</a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 hover:border-b cursor-pointer hover:border-gray-800">Careers</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 w-full px-10">
                            <nav class="list-none mb-10 text-sm">
                                <li>
                                    <a class="text-gray-600 hover:border-b cursor-pointer hover:border-gray-800">Accessibility</a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 hover:border-b cursor-pointer hover:border-gray-800">Rogers Bank</a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 hover:border-b cursor-pointer hover:border-gray-800">Security</a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 hover:border-b cursor-pointer hover:border-gray-800">Terms & Conditions</a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 hover:border-b cursor-pointer hover:border-gray-800">Site Map</a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 hover:border-b cursor-pointer hover:border-gray-800">Media Contact</a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 hover:border-b cursor-pointer hover:border-gray-800">Community Forums</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 w-full px-3">
                            <nav class="list-none mb-10 text-sm">
                                <li>
                                    <a class="text-gray-600 hover:border-b cursor-pointer hover:border-gray-800">Quick Pay</a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 hover:border-b cursor-pointer hover:border-gray-800">Track Your Order</a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 hover:border-b cursor-pointer hover:border-gray-800"> <i class="fa-solid fa-phone mr-1"></i> Contact Us</a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 hover:border-b cursor-pointer hover:border-gray-800"><i class="fa-solid fa-location-dot mr-1"></i> Find a store</a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 cursor-pointer text-2xl"><i class="fa-brands hover:bg-red-600 hover:rounded fa-facebook mr-3"></i><i class="fa-brands hover:bg-red-600 hover:rounded fa-instagram mr-3"></i><i class="fa-brands hover:bg-red-600 hover:rounded fa-youtube mr-3"></i><i class="fa-brands hover:bg-red-600 hover:rounded fa-linkedin-in"></i></a>
                                </li>
                                <li class="mt-5">
                                    <a class="text-gray-600 text-2xl hover:bg-red-600 hover:rounded cursor-pointer"><i class="fa-brands fa-x-twitter"></i></a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="bg-black">
                    <div class="container mx-auto py-4 px-10 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-white text-sm text-center sm:text-left">© 1995 - 2024 Rogers Communications</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
