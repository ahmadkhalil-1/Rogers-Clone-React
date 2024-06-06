import React, { useState } from 'react';

const Nav2 = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [showSearchInput, setShowSearchInput] = useState(false);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const getIconClass = (index) => {
        return openDropdown === index ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down";
    };

    const handleSearchClick = () => {
        setShowSearchInput(!showSearchInput);
    };

    return (
        <>
            <div className="bg-red-600 w-full p-4 text-white flex justify-around items-center">
                <span className="text-2xl font-bold cursor-pointer">ROGERS</span>
                <ul className="flex m-3 max-lg:hidden">
                    {[
                        { name: "Mobile", links: [{ name: "History", href: "#about-history" }, { name: "Team", href: "#about-team" }] },
                        { name: "NEW 5G Home Internet", links: [{ name: "Services", href: "#business-services" }, { name: "Partners", href: "#business-partners" }] },
                        { name: "Ignite Internet", links: [{ name: "Accounts", href: "#bank-accounts" }, { name: "Loans", href: "#bank-loans" }] },
                        { name: "TV & Streaming", links: [{ name: "Accounts", href: "#bank-accounts" }, { name: "Loans", href: "#bank-loans" }] },
                        { name: "Home Security", links: [{ name: "Accounts", href: "#bank-accounts" }, { name: "Loans", href: "#bank-loans" }] },
                        { name: "Deals", links: [{ name: "Accounts", href: "#bank-accounts" }, { name: "Loans", href: "#bank-loans" }] },
                    ].map((menu, index) => (
                        <li className="mx-3 relative" key={index}>
                            <div className="flex items-center">
                                <a
                                    href="#"
                                    className="hover:border-b hover:border-white"
                                    onClick={(e) => { e.preventDefault(); toggleDropdown(index); }}
                                >
                                    {menu.name}
                                </a>
                                <i className={`ml-2 ${getIconClass(index)}`}></i>
                            </div>
                            {openDropdown === index && (
                                <ul className="absolute left-0 bg-white text-black">
                                    {menu.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a className="block px-8 py-2 hover:bg-gray-200" href={link.href}>
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="relative">
                    {showSearchInput ? (
                        <input
                            type="text"
                            className="text-black rounded-md p-1"
                            placeholder="Search..."
                            onBlur={() => setShowSearchInput(false)}
                        />
                    ) : (
                        <i className="fa-solid fa-search cursor-pointer" onClick={handleSearchClick}></i>
                    )}
                </div>
            </div>
        </>
    );
}

export default Nav2;
