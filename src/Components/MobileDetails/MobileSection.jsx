import React, { useState } from 'react';
import ImageCarousel from './CaroselImages';

const MobileSection = () => {
    const [selectedColor, setSelectedColor] = useState('pink');

    const colors = {
        pink: 'bg-pink-200',
        green: 'bg-green-700',
        gray: 'bg-gray-500',
    };

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className='flex justify-between p-10'>
            <div className='flex justify-center items-center mx-44'>
                <div className='flex flex-col'>
                    <ImageCarousel selectedColor={selectedColor} />
                </div>
            </div>
            <div className="md:w-1/3">
                <div className="h-full">
                    <div className="p-6 shadow-md border h-full">
                        <div className="mt-2">
                            <p className='font-bold'>Colour: {selectedColor}</p>
                            <div className='flex gap-3 mt-3'>
                                {['gray', 'green', 'pink'].map((color) => (
                                    <div
                                        key={color}
                                        onClick={() => handleColorClick(color)}
                                        className={`rounded-full w-10 h-10 cursor-pointer ${colors[color]} focus:outline-none focus:ring-2 focus:ring-black`}
                                        tabIndex={0}
                                    ></div>
                                ))}
                            </div>
                        </div>
                        <hr className="mt-3" />

                        <div className="mt-6">
                            <p className="font-bold">Storage: 256 GB</p>
                            <div className="flex gap-3 mt-3">
                                <button className="border border-black w-20 p-2 cursor-pointer">256 GB</button>
                                <button className="border border-black w-20 p-2 cursor-pointer">512 GB</button>
                            </div>
                        </div>

                        <hr className="mt-3" />
                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <p className="mb-1">
                                    <span className="line-through flex flex-col">$125.00/mo</span>
                                    <div className='flex'>
                                        <span>$</span>
                                        <p className='font-semibold text-5xl'>65</p>
                                        <div className='flex flex-col'>
                                            <span className='mt-1'>
                                                .00
                                            </span>
                                            <span className='mt-[-0.3rem]'>
                                                /mo
                                            </span>
                                        </div>
                                    </div>
                                    <p className='text-sm'>(After credit bill)</p>
                                </p>
                                <div className='border-r-2 border-gray-300 h-12 mt-8'>

                                </div>
                                <div className='flex mt-6'>
                                    <span>$</span>
                                    <p className='font-semibold text-5xl'>0</p>
                                    <div className='flex flex-col'>
                                        <span className='mt-1'>
                                            .00
                                        </span>
                                        <span className='mt-[-0.3rem]'>
                                            down
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm mb-2">on financing with Save & Return and a Rogers Infinite plan</p>
                            <p className='text-sm'>Full price: $2,999.99</p>
                            <p className="text-sm">Taxes extra | 24 mos | 0% APR</p>
                        </div>
                        <hr className="mt-3" />

                        <div className="mt-4">
                            <p className="font-bold text-lg mb-2">Your purchase includes:</p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li className='mt-3'>Pay no Setup Service Fee ($70/line value) when you activate any device online</li>
                                <li className='mt-3'>Includes $43.96/mo. financing program promotion credit for 24 months (appears on bill under 'Monthly charges')</li>
                                <li className='mt-3'>Includes a one-time $385 Save & Return credit towards the total device cost (phone must be returned within 2 years)</li>
                            </ul>
                        </div>

                        <hr className="mt-3" />

                        <div className='bg-gray-100 mt-4'>
                            Extended Return Policy - Worry-free returns within 30 days at no cost for online orders
                        </div>
                        <hr className="mt-3 w-full" />
                        <div className="flex items-center justify-center mt-4">
                            <button className="bg-red-600 hover:bg-red-700 text-white w-full font-bold py-2 px-4">
                                Continue <i className="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileSection;
