import React, { useState } from 'react';

const Middle = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        { icon: 'fa-mobile', text: 'Mobile' },
        { icon: 'fa-tv', text: 'TV' },
        { icon: 'fa-laptop', text: 'Internet' },
        { icon: 'fa-house', text: 'Home Security' },
        { icon: 'fa-hand-holding-heart', text: 'Deals' }
    ];

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <div className="container mx-auto flex justify-evenly mt-20 flex-wrap">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center cursor-pointer mb-4 ${index === currentIndex ? 'block' : 'hidden'
                            } md:block`}
                    >
                        <div className="h-32 w-32 md:h-36 md:w-36 border border-gray-300 rounded-full flex items-center justify-center">
                            <i className={`fa-solid ${item.icon} text-5xl md:text-5xl text-red-600`}></i>
                        </div>
                        <h2 className="text-sm font-bold md:font-bold md:hover:border-b md:hover:border-black md:cursor-pointer md:text-center md:text-lg mt-2">
                            {item.text}
                        </h2>
                    </div>
                ))}
            </div>
            <div className="md:hidden flex justify-between mt-4">
                <button onClick={handlePrevClick} className="text-2xl p-2">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button onClick={handleNextClick} className="text-2xl p-2">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </>
    );
};

export default Middle;
