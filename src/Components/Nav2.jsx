import React, { useState } from 'react';
import MobNav from './MobNav';
import { Link } from 'react-router-dom';

const Nav2 = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [showToggle, setShowToggle] = useState(false);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
        setOpenSubmenu(null);
    };

    const toggleSubmenu = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    const getIconClass = (index, isSubmenu = false) => {
        if (isSubmenu) {
            return openSubmenu === index ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down";
        }
        return openDropdown === index ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down";
    };

    const handleSearchClick = () => {
        setShowSearchInput(!showSearchInput);
    };

    const handleToggleClick = () => {
        setShowToggle(!showToggle);
    };

    return (
        <>
            <div className="bg-red-600 w-full p-4 text-white flex justify-around items-center">
                <Link to="/" className="text-2xl font-bold lg:mx-28 cursor-pointer">
                    <i className="fa-brands fa-firefox text-3xl mr-2"></i>ROGERS
                </Link>
                <ul className="flex m-3 max-lg:hidden mt-4" style={{ marginLeft: "-8rem" }}>
                    {[
                        { name: "Mobile", links: [{ name: "Plans", href: "#about-history", sublinks: [{ name: "5G mobile plans", Link: "/mobile/plans/fivegmob" }, { name: "Specialized plans and offers", href: "#plan2" }, { name: "Talk and Text Plans", href: "#plan3" }, { name: "Bring your own device", href: "#plan4" }, { name: "Rogers Preferred Program", href: "#plan4" }, { name: "Prepaid", href: "#plan4" }] }, { name: "Phones", href: "#about-team", sublinks: [{ name: "Smartphones", Link: "mobile/phones/smartphones" }, { name: "Financing", href: "#plan2" }, { name: "Device trade-in", href: "#plan3" }, { name: "Save & Return", href: "#plan4" }, { name: "Certified Pre-Owned", href: "#plan4" }, { name: "Apple with Rogers", href: "#plan4" }, { name: "Google with Rogers", href: "#plan4" }, { name: "Samsung with Rogers", href: "#plan4" }] }, { name: "Connected devices", href: "#about-team", sublinks: [{ name: "Tablets", href: "#plan1" }, { name: "Smartwatches", href: "#plan2" }, { name: "5G Home Internet", href: "#plan3" }, { name: "Wireless home phone ", href: "#plan4" }] }, { name: "Add-on & services", href: "#about-team", sublinks: [{ name: "Travel", href: "#plan1" }, { name: "Add-ons", href: "#plan2" }, { name: "Device protection", href: "#plan3" },] }, { name: "Network", href: "#about-team", sublinks: [{ name: "5G", href: "#plan1" }, { name: "Network coverage", href: "#plan2" }, { name: "Network status", href: "#plan3" }] }, { name: "Shop all mobile", href: "#about-team" }, { name: "Deals", href: "#about-team" }, { name: "Support", href: "#about-team" }] },
                        { name: "NEW 5G Home Internet", links: [{ name: "Buy Now", Link: "new5g/buynow" }, { name: "Support", href: "#business-partners" }] },
                        { name: "Ignite Internet", links: [{ name: "Shop Internet", href: "#bank-accounts" }, { name: "Plans", href: "#bank-loans", sublinks: [{ name: "Ignite Internet", href: "#plan1" }, { name: "Intenet & TV", href: "#plan2" }] }, { name: "Features & add-ons", href: "#about-team", sublinks: [{ name: "Ignite Streaming", href: "#plan1" }, { name: "Wifi Satisfaction Guarantee", href: "#plan2" }, { name: "Ignite Home Connect", href: "#plan3" }, { name: "Advanced Security", href: "#plan4" }] }, { name: "Why Ignite Internet", href: "#about-team" }, { name: "Deals", href: "#about-team" }, { name: "Support", href: "#about-team" }] },
                        { name: "TV & Streaming", links: [{ name: "Shop Bundles", href: "#bank-accounts" }, { name: "Bundles", href: "#bank-loans", sublinks: [{ name: "Ignite TV", href: "#plan1" }, { name: "Ignite Streaming", href: "#plan2" }] }, { name: "Features & add-ons", href: "#about-team", sublinks: [{ name: "Theme Packs", href: "#plan1" }, { name: "Channels", href: "#plan2" }, { name: "Home Phones", href: "#plan3" }] }, { name: "Why Ignite TV", href: "#about-team" }, { name: "Deals", href: "#about-team" }, { name: "Support", href: "#about-team" }] },
                        { name: "Home Security", links: [{ name: "Self Protect", href: "#bank-accounts" }, { name: "Deals", href: "#bank-loans" }, { name: "Support", href: "#about-team" }] },
                        { name: "Deals", links: [{ name: "Mobile", href: "#bank-accounts" }, { name: "Internet", href: "#bank-loans" }, { name: "TV Bundles", href: "#about-team" }, { name: "Home Security", href: "#about-team" }, { name: "Shop All", href: "#about-team" }] },
                    ].map((menu, index) => (
                        <li className={`relative lg:mb-2 mx-3 font-semibold ${openDropdown === index ? 'bg-white text-black' : ''}`} key={index} onClick={() => toggleDropdown(index)}>
                            <div className="flex items-center cursor-pointer">
                                <a
                                    href="#"
                                    className="hover:border-b hover:border-white"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    {menu.name}
                                </a>
                                <i className={`ml-2 ${getIconClass(index)}`}></i>
                            </div>
                            {openDropdown === index && (
                                <ul className="absolute text-start w-52 bg-white text-black z-10">
                                    {menu.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className="relative" onClick={(e) => { e.stopPropagation(); toggleSubmenu(linkIndex); }}>
                                            <div className="flex items-center justify-between cursor-pointer">
                                                <Link className="block hover:border-b border-black hover:bg-gray-200 w-full p-1 mt-4" to={link.Link}>
                                                    {link.name}
                                                </Link>
                                                {link.sublinks && (
                                                    <i className={`ml-2 ${getIconClass(linkIndex, true)}`}></i>
                                                )}
                                            </div>
                                            {openSubmenu === linkIndex && link.sublinks && (
                                                <ul className="absolute left-full top-0 text-start w-80 p-1 bg-gray-100 text-black z-20">
                                                    {link.sublinks.map((sublink, sublinkIndex) => (
                                                        <li key={sublinkIndex}>
                                                            <Link className="block hover:border-b border-black hover:bg-gray-300 p-1 mt-4" to={sublink.Link}>
                                                                {sublink.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
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
                        <i className="fa-solid fa-search text-xl max-lg:ml-10 cursor-pointer" onClick={handleSearchClick}></i>
                    )}
                </div>
                <div className="lg:hidden">
                    <i className="fa-solid fa-bars text-xl cursor-pointer" onClick={handleToggleClick}></i>
                </div>
            </div>
            {showToggle && <MobNav />}
        </>
    );
}

export default Nav2;
