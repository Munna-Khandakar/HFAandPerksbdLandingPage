'use client';

import React, { useEffect, useState } from 'react';

//Components
import Logo from './Logo';
import Nav from './Nav';
import Mobilenavigation from './Mobilenavigation';

import ThemeToggler from './ThemeToggler';
import { usePathname } from 'next/navigation';

const Header = () => {

    const [header, setHeader] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        };

        window.addEventListener('scroll', handleScroll);

        //remove Events
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`${
                header
                    ? 'py-4 bg-white/80 backdrop-blur-lg shadow-md dark:bg-neutral-900/90'
                    : 'py-6 bg-white/60 backdrop-blur-sm dark:bg-transparent'
            } sticky top-0 z-30 transition-all duration-300 ${pathname === '/' && 'bg-white/80 backdrop-blur-lg'}`}
        >
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    {/* Logo Section */}
                    <Logo />
                    <div className='flex items-center gap-x-6'>
                        {/* Nav Section */}
                        <Nav
                            containerStyles='hidden xl:flex gap-x-8 items-center'
                            linkStyles='relative hover:text-primary-600 transition-all duration-300'
                            underlineStyles='absolute left-0 top-full h-[2px] bg-primary-600 w-full'
                        />

                        {/* Theme Toggler */}
                        <ThemeToggler />

                        {/* Mobile Navigation */}
                        <div className='xl:hidden'>
                            <Mobilenavigation />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header