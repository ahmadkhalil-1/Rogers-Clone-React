import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="text-gray-100 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                                <img className="h-48 md:h-64 w-full object-cover object-center" src="https://minirate.ch/wp-content/uploads/icecat-images/5886b906d7d30e2e585b4beb9cfd955d.jpg" alt="blog" />
                                <div className="p-6 bg-gray-100 h-full">
                                    <span className="text-1xl title-font font-bold bg-red-600 px-2 py-1 text-white mb-1"><i className="mx-2 fa-regular fa-clipboard"></i>Days to save</span>
                                    <h1 className="title-font text-3xl text-gray-900 mb-3 font-bold mt-2">iPhone 15 for as low as $0/month</h1>
                                    <p className="mb-3 text-gray-600">For 24 months after an eligible trade in, bill credit and with phone financing plus Save & Return (bring back device within 2 years). Taxes extra.</p>
                                    <h6 className="font-bold text-xl text-black">Full price $1,161</h6>
                                    <div className="flex items-center justify-center mt-4">
                                        <button onClick={() => navigate('mobileDetails')} className="bg-red-600 hover:bg-red-700 text-white w-full font-bold py-2 px-4">
                                            Learn More <i className="fas fa-arrow-right ml-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                                <img className="h-48 md:h-64 w-full object-cover object-center" src="https://minirate.ch/wp-content/uploads/icecat-images/5886b906d7d30e2e585b4beb9cfd955d.jpg" alt="blog" />
                                <div className="p-6 bg-gray-100 h-full">
                                    <span className="text-1xl title-font font-bold bg-red-600 px-2 py-1 text-white mb-1"><i className="mx-2 fa-regular fa-clipboard"></i>Days to save</span>
                                    <h1 className="title-font text-3xl text-gray-900 mb-3 font-bold mt-2">Surf, watch and save big!</h1>
                                    <p className="mb-3 text-gray-600">Get the ultimate entertainment experience with an Ignite TV + Internet Bundle.</p>
                                    <p className="mb-3 text-gray-600">Starting at $105/mo on a 24-month term.</p>
                                    <p className="font-bold text-xl">Full price $1,161</p>

                                    <div className="flex items-center justify-center mt-4">
                                        <button className="bg-red-600 hover:bg-red-700 mt-3 text-white w-full font-bold py-2 px-4">
                                            Learn More <i className="fas fa-arrow-right ml-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                                <img className="h-48 md:h-64 w-full object-cover object-center" src="https://minirate.ch/wp-content/uploads/icecat-images/5886b906d7d30e2e585b4beb9cfd955d.jpg" alt="blog" />
                                <div className="p-6 bg-gray-100 h-full">
                                    <span className="text-1xl title-font font-bold bg-red-600 px-2 py-1 text-white mb-1"><i className="mx-2 fa-regular fa-clipboard"></i>Days to save</span>
                                    <h1 className="title-font text-3xl text-gray-900 mb-3 font-bold mt-2">Google Pixel 8 for as low as $0/month</h1>
                                    <p className="mb-3 text-gray-600">For 24 months after an eligible device trade in, bill credit and with phone financing plus Save & Return (bring back device within 2 years). Taxes extra.</p>
                                    <h6 className="font-bold text-xl text-black">Full price $1,161</h6>
                                    <div className="flex items-center justify-center mt-4">
                                        <button className="bg-red-600 hover:bg-red-700 text-white w-full font-bold py-2 px-4">
                                            Learn More <i className="fas fa-arrow-right ml-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex items-center justify-center mt-1">
                <button className="border border-red-600 hover:border-red-700 text-red-600 hover:text-red-700 py-2 px-4">
                    View all offers <i className="fas fa-arrow-right ml-2"></i>
                </button>
            </div>
        </>
    );
}

export default Cards;
