import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const NavBar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Background Image */}
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='Header Background' className='w-full' />
            </div>

            {/* Navbar */}
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center
                justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}
`}>
                <a href="#top">
                    <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Logo' className='w-28 cursor-pointer mr-14' />
                </a>

                {/* Desktop Menu */}
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-md 
                    ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    {["Home", "About me", "Services", "My Work", "Contact me"].map((item, index) => (
                        <li key={index}>
                            <a className='font-Ovo' href={`#${item.toLowerCase().replace(/\s/g, '')}`}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className='flex items-center gap-4'>
                    <button onClick={() => setIsDarkMode(prev => !prev)} aria-label="Toggle Theme">
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='Theme Toggle Icon' className='w-6' />
                    </button>

                    <a className='hidden lg:flex font-Ovo items-center
                     gap-3 py-2 px-8 border border-gray-500 rounded-md ml-4 dark:border-white/50 ' href="#contact">
                        Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='Arrow Icon' className='w-3' />
                    </a>

                    <button className='block md:hidden ml-3' onClick={() => setIsMenuOpen(true)} aria-label="Open Menu">
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='Menu Icon' className='w-6' />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 right-0 h-screen w-64 transition-transform duration-500 dark:bg-darkHover dark:text-white ${isMenuOpen ? "translate-x-0 bg-darkTheme text-white" : "translate-x-64 bg-rose-50 text-black"}`}>

                    <button className='absolute right-6 top-6' onClick={() => setIsMenuOpen(false)} aria-label="Close Menu">
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='Close Icon' className='w-5 cursor-pointer' />
                    </button>

                    <ul className='flex flex-col gap-4 py-20 px-10'>
                        {["Home", "About me", "Services", "My Work", "Contact me"].map((item, index) => (
                            <li key={index}>
                                <a className='font-Ovo' onClick={() => setIsMenuOpen(false)} href={`#${item.toLowerCase().replace(/\s/g, '')}`}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav >
        </>
    );
};

export default NavBar;
