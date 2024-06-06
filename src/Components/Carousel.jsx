import React, { useState, useEffect } from 'react';

const slides = [
    {
        title: "Days to save is on now",
        description: "Get 5G mobile plans starting at $50",
        image: "https://img.freepik.com/premium-photo/two-beautiful-girls-work-office-consulting-company_118454-15689.jpg",
    },
    {
        title: "Shop Online. Get $100. Easy!",
        description: "Get Ignite Internet and get $100 on your Rogers Red credit card statements. Online only.   ",
        image: "https://www.accessorizeyourgadget.co.uk/wp-content/uploads/2021/12/accessorize-mobile-banner3.3.jpg",
    },
    {
        title: "Why settle when you can switch to Canada's largest and most reliable 5G network?  ",
        description: "With 5G mobile plans for as low as $50/mo.  ",
        image: "https://img.freepik.com/premium-photo/two-beautiful-girls-work-office-consulting-company_118454-15689.jpg",

    },
    {
        title: "3% cash back value",
        description: "When you redeem with Rogers",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQUe_ZGp0ToPJx2QBi1ayq_2wxMDERtfxHg&s",
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="carousel relative w-full overflow-hidden">
                <div className="flex items-center justify-between absolute w-full top-1/2 transform -translate-y-1/2">
                    <button onClick={prevSlide} className="p-2 mx-1 text-black px-4 rounded-full hover:bg-red-600 hover:text-white">
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <button onClick={nextSlide} className="text-black mr-3 p-2 px-4 rounded-full hover:bg-red-600 hover:text-white">
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === currentIndex ? "block" : "hidden"}`}
                    >
                        <section className="text-gray-600 body-font">
                            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                                        {slide.title}
                                    </h1>
                                    <p className="mb-8 text-xl leading-relaxed">{slide.description}</p>
                                    <div className="flex justify-center mt-5">
                                        <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                                            View Offers <i className="mt-2 fas fa-arrow-right ml-2"></i>
                                        </button>
                                    </div>
                                    <p class="mt-4">After Automatic Payment Discounts when you bring your own device and when paired with a home service.</p>

                                </div>
                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                    <img className="object-cover object-center rounded" alt="hero" src={slide.image} />
                                </div>
                            </div>
                        </section>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`mx-1 w-3 h-3 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-400"}`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </>
    );
};

export default Carousel;
