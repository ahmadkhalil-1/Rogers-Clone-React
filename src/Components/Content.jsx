import React from 'react';

const Content = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Save time and get more <br className="hidden md:inline" /> done with Google Pixel 8</h1>
                        <p className="mb-8 text-xl leading-relaxed">Elevate your style with Google Pixel 8, powered by Google <br className="hidden md:inline" /> AI. Get it at 0% interest for up to 48 months with an Equal <br className="hidden md:inline" /> Payment Plan and Rogers credit card financing. No mobile <br className="hidden md:inline" /> term contract needed.</p>
                        <p className="text-xl">Plus, enjoy seamless, secure payments when you add your <br className="hidden md:inline" /> Rogers credit card to your Google Wallet.</p>
                        <div className="flex justify-center mt-5">
                            <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Learn more <i className="mt-2 fas fa-arrow-right ml-2"></i></button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://i.insider.com/65ca49a7610ab33aa5df0fc4?width=1136&format=jpeg" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Content;
