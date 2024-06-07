import React from 'react';

const Buynow = () => {
    const mobiles = [
        {
            id: 1,
            name: 'iPhone 13 Pro Max',
            price: '$1,099',
            image: 'https://s.yimg.com/ny/api/res/1.2/5krz8nnJ7LNPUwaoH96.5A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM4NA--/https://s.yimg.com/os/creatr-uploaded-images/2024-03/a132ac50-dfc8-11ee-9dfa-e69dbdcff127',
        },
        {
            id: 2,
            name: 'Samsung Galaxy S21 Ultra',
            price: '$999',
            image: 'https://s.yimg.com/ny/api/res/1.2/5krz8nnJ7LNPUwaoH96.5A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM4NA--/https://s.yimg.com/os/creatr-uploaded-images/2024-03/a132ac50-dfc8-11ee-9dfa-e69dbdcff127',
        },
        {
            id: 3,
            name: 'Google Pixel 6 Pro',
            price: '$899',
            image: 'https://s.yimg.com/ny/api/res/1.2/5krz8nnJ7LNPUwaoH96.5A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM4NA--/https://s.yimg.com/os/creatr-uploaded-images/2024-03/a132ac50-dfc8-11ee-9dfa-e69dbdcff127',
        },
    ];

    return (
        <>
            <h1 class="text-center p-2 text-2xl mt-5 font-bold">
                Buy New Phones
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">

                {mobiles.map((mobile) => (
                    <div key={mobile.id} className="bg-white rounded-lg shadow-md p-4">
                        <img src={mobile.image} alt={mobile.name} className="w-full mb-4" />
                        <div className="text-lg font-semibold mb-2">{mobile.name}</div>
                        <div className="text-gray-500">{mobile.price}</div>
                        <button className="bg-blue-800 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-900">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Buynow;
