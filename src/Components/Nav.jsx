import React from 'react';

const Nav = () => {
    return (
        <div className="bg-black w-full text-white max-lg:hidden flex justify-around">
            <ul className="flex m-3">
                <li className="mx-3 cursor-pointer hover:border-b hover:border-white">About Rogers</li>
                <li className="mx-3 cursor-pointer hover:border-b hover:border-white">Business</li>
                <li className="mx-3 cursor-pointer hover:border-b hover:border-white">Rogers Bank</li>
            </ul>
            <ul className="flex items-center">
                <li className="mx-3 m-3 cursor-pointer hover:border-b hover:border-white">Support</li>
                <li className="mx-3 m-3 cursor-pointer hover:border-b hover:border-white">Find a store</li>
                <li className="mx-3 relative group">
                    <a href="#" className="hover:border-b hover:border-white">ON<i class="mx-2 fa-solid fa-angle-down"></i> </a>
                    <ul className="absolute left-0 hidden bg-white text-black group-hover:block">
                        <li><a className="block px-4 py-2 hover:bg-gray-200" href="#business-services">Services</a></li>
                        <li><a className="block px-4 py-2 hover:bg-gray-200" href="#business-partners">Partners</a></li>
                    </ul>
                </li>
                <li className="mx-3 m-3 cursor-pointer hover:border-b hover:border-white">Français</li>
                <button className="bg-white hover:bg-gray-200 text-black p-3 px-4">
                    <span className="hover:border-b hover:border-black">
                        <i className="fa-regular fa-user mx-1"></i> MyRogers
                    </span>
                </button>
            </ul>
        </div>
    );
};

export default Nav;
