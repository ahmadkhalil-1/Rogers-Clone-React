import React, { useState } from 'react';
import MobNav2 from './MobNav2';
import { Link } from 'react-router-dom';

const navLinks = [
    {
        name: "Mobile",
        links: [
            {
                name: "Plans", href: "#about-history",
                sublinks: [
                    { name: "5G mobile plans", Link: "/mobile/plans/fivegmob" },
                    { name: "Specialized plans and offers", href: "#plan2" },
                    { name: "Talk and Text Plans", href: "#plan3" },
                    { name: "Bring your own device", href: "#plan4" },
                    { name: "Rogers Preferred Program", href: "#plan4" },
                    { name: "Prepaid", href: "#plan4" }
                ]
            },
            {
                name: "Phones", href: "#about-team",
                sublinks: [
                    { name: "Smartphones", Link: "/mobile/phones/smartphones" },
                    { name: "Financing", href: "#plan2" },
                    { name: "Device trade-in", href: "#plan3" },
                    { name: "Save & Return", href: "#plan4" },
                    { name: "Certified Pre-Owned", href: "#plan4" },
                    { name: "Apple with Rogers", href: "#plan4" },
                    { name: "Google with Rogers", href: "#plan4" },
                    { name: "Samsung with Rogers", href: "#plan4" }
                ]
            },
            {
                name: "Connected devices", href: "#about-team",
                sublinks: [
                    { name: "Tablets", href: "#plan1" },
                    { name: "Smartwatches", href: "#plan2" },
                    { name: "5G Home Internet", href: "#plan3" },
                    { name: "Wireless home phone", href: "#plan4" }
                ]
            },
            {
                name: "Add-on & services", href: "#about-team",
                sublinks: [
                    { name: "Travel", href: "#plan1" },
                    { name: "Add-ons", href: "#plan2" },
                    { name: "Device protection", href: "#plan3" }
                ]
            },
            {
                name: "Network", href: "#about-team",
                sublinks: [
                    { name: "5G", href: "#plan1" },
                    { name: "Network coverage", href: "#plan2" },
                    { name: "Network status", href: "#plan3" }
                ]
            },
            { name: "Shop all mobile", href: "#about-team" },
            { name: "Deals", href: "#about-team" },
            { name: "Support", href: "#about-team" }
        ]
    },
    {
        name: "NEW 5G Home Internet",
        links: [
            { name: "Buy Now", Link: "/new5g/buynow" },
            { name: "Support", href: "#business-partners" }
        ]
    },
    {
        name: "Ignite Internet",
        links: [
            { name: "Shop Internet", href: "#bank-accounts" },
            {
                name: "Plans", href: "#bank-loans",
                sublinks: [
                    { name: "Ignite Internet", href: "#plan1" },
                    { name: "Internet & TV", href: "#plan2" }
                ]
            },
            {
                name: "Features & add-ons", href: "#about-team",
                sublinks: [
                    { name: "Ignite Streaming", href: "#plan1" },
                    { name: "Wifi Satisfaction Guarantee", href: "#plan2" },
                    { name: "Ignite Home Connect", href: "#plan3" },
                    { name: "Advanced Security", href: "#plan4" }
                ]
            },
            { name: "Why Ignite Internet", href: "#about-team" },
            { name: "Deals", href: "#about-team" },
            { name: "Support", href: "#about-team" }
        ]
    },
    {
        name: "TV & Streaming",
        links: [
            { name: "Shop Bundles", href: "#bank-accounts" },
            {
                name: "Bundles", href: "#bank-loans",
                sublinks: [
                    { name: "Ignite TV", href: "#plan1" },
                    { name: "Ignite Streaming", href: "#plan2" }
                ]
            },
            {
                name: "Features & add-ons", href: "#about-team",
                sublinks: [
                    { name: "Theme Packs", href: "#plan1" },
                    { name: "Channels", href: "#plan2" },
                    { name: "Home Phones", href: "#plan3" }
                ]
            },
            { name: "Why Ignite TV", href: "#about-team" },
            { name: "Deals", href: "#about-team" },
            { name: "Support", href: "#about-team" }
        ]
    },
    {
        name: "Home Security",
        links: [
            { name: "Self Protect", href: "#bank-accounts" },
            { name: "Deals", href: "#bank-loans" },
            { name: "Support", href: "#about-team" }
        ]
    },
    {
        name: "Deals",
        links: [
            { name: "Mobile", href: "#bank-accounts" },
            { name: "Internet", href: "#bank-loans" },
            { name: "TV Bundles", href: "#about-team" },
            { name: "Home Security", href: "#about-team" },
            { name: "Shop All", href: "#about-team" }
        ]
    },
];

const MobNav = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
        setOpenSubDropdown(null); // Close subDropdown when main dropdown is toggled
    };

    const toggleSubDropdown = (linkIndex) => {
        setOpenSubDropdown(openSubDropdown === linkIndex ? null : linkIndex);
    };

    const getIconClass = (index) => {
        return openDropdown === index ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down";
    };

    const getSubIconClass = (linkIndex) => {
        return openSubDropdown === linkIndex ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down";
    };

    return (
        <>
            <div className="p-4 lg:hidden">
                <span>
                    <i className="fa-regular fa-user mx-1"></i> MyRogers
                </span>
                <hr className="w-10 mt-1 mb-4" />
                <ul>
                    {navLinks.map((navLink, index) => (
                        <li key={index} className="my-2 relative">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => toggleDropdown(index)}
                            >
                                <span>{navLink.name}</span>
                                <i className={getIconClass(index)}></i>
                            </div>
                            {openDropdown === index && (
                                <ul className="absolute left-0 text-start w-full p-1 bg-white text-black z-10 slide-down">
                                    {navLink.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className="relative">
                                            <div
                                                className="flex items-center justify-between cursor-pointer"
                                                onClick={() => toggleSubDropdown(linkIndex)}
                                            >
                                                <Link className="block hover:bg-gray-200 w-full mt-3" to={link.Link}>
                                                    {link.name}
                                                </Link>
                                                {link.sublinks && (
                                                    <span>
                                                        <i className={getSubIconClass(linkIndex)}></i>
                                                    </span>
                                                )}
                                            </div>
                                            {openSubDropdown === linkIndex && link.sublinks && (
                                                <ul className="ml-1 p-1 bg-white text-black slide-down">
                                                    {link.sublinks.map((sublink, sublinkIndex) => (
                                                        <li key={sublinkIndex}>
                                                            <Link className="block hover:bg-gray-200 w-full mt-4" to={sublink.Link}>
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
            </div>
            <div class="lg:hidden">
                <MobNav2 />
            </div>
        </>
    );
};

export default MobNav;
