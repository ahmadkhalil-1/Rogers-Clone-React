import React from 'react';
import { TbStars } from "react-icons/tb";
import { MdOutline5G } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { SiTorbrowser } from "react-icons/si";


const Reasons = () => {
    return (
        <>
            <h1 class="font-bold text-4xl text-center">More reasons to choose Rogers</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                        <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <div className="flex justify-center">
                                    <MdOutline5G style={{ color: 'red', fontSize: '4rem' }} />
                                </div>
                                <h1 className="mt-3 font-bold text-2xl text-black">Our 5G Network</h1>
                                <p className="leading-relaxed mt-2">Get on the Rogers 5G Network. Learn more about Canada's Largest and Most Reliable 5G Network along with the benefits of 5G.</p>
                                <a href="#" className="block mt-4 text-blue-500 ">
                                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <div className="flex justify-center">
                                    <FaHandHoldingDollar style={{ color: 'red', fontSize: '4rem' }} />
                                </div>
                                <h1 className="mt-3 font-bold text-2xl text-black">5G plans that fit your <br /> needs</h1>
                                <p className="leading-relaxed mt-2">Get 5G access on Rogers 5G mobile plans and choose from a range of specialized plans for parents of kids and teens, 55+, students and newcomers.</p>
                                <a href="#" className="block mt-4 text-blue-500 ">
                                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <div className="flex justify-center">
                                    <SiTorbrowser style={{ color: 'red', fontSize: '4rem' }} />
                                </div>
                                <h1 className="mt-3 font-bold text-2xl text-black">Our Most Reliable <br /> Fibre-Powered Internet</h1>
                                <p className="leading-relaxed mt-2">Experience our most reliable fibre-powered internet, backed by our Ignite WiFi Satisfaction Guarantee.</p>
                                <a href="#" className="block mt-4 text-blue-500">
                                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/4 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <div className="flex justify-center">
                                    <TbStars color='red' size={70} />
                                </div>
                                <h1 className="mt-3 font-bold text-2xl text-black">30-Day Satisfaction <br /> Guarantee</h1>
                                <p className="leading-relaxed mt-2">Choose Rogers with confidence thanks to our 30-Day Satisfaction Guarantee. Enjoy your new service or get a refund on your setup and monthly fees, if you cancel within the first 30 days.</p>
                                <a href="#" className="mt-4 text-blue-500">
                                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Reasons;
