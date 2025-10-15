'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
    onScrollToSection?: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onScrollToSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 10) {
                // Always show navbar at top
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down & past threshold - hide navbar
                setIsVisible(false);
                setIsOpen(false); // Close mobile menu when hiding
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up - show navbar
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    const handleScrollToSection = (sectionId: string) => {
        setIsOpen(false); // Close mobile menu

        if (pathname === '/') {
            // On home page - scroll to section
            onScrollToSection?.(sectionId);
        } else {
            // On other pages - navigate to home then scroll
            window.location.href = `/#${sectionId}`;
        }
    };

    const handleMobileToggle = () => {
        setIsOpen(!isOpen);
    };

    const closeMobileMenu = () => {
        setIsOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-blue-800-100 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
                            <div className="w-8 h-8 bg-blue-800-600 rounded-full flex items-center justify-center">
                                <div className="w-4 h-4 bg-white rounded-full border-2 border-blue-800-200 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-1 h-1 bg-blue-800-600 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="font-semibold text-blue-800-800 leading-tight" style={{ fontSize: '34px' }}>
  Get Into Golf with Ethan
</h1>
<p className="text-xs text-blue-800-600 leading-tight">
  Beginner Golf Coach | Miami, FL
</p>

                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-5">
                            <button
                                onClick={() => handleScrollToSection('about')}
                                className="text-blue-800-700 hover:text-blue-800-900 px-3 py-2 text-base font-medium transition-colors"
                            >
                                About
                            </button>
                            <button
                                onClick={() => handleScrollToSection('services')}
                                className="text-blue-800-700 hover:text-blue-800-900 px-3 py-2 text-base font-medium transition-colors"
                            >
                                Services
                            </button>
                            <Link
                                href="/experience"
                                className={`px-3 py-2 text-base font-medium transition-colors rounded-md ${pathname === '/experience'
                                        ? 'text-blue-800-900 bg-blue-800-50'
                                        : 'text-blue-800-700 hover:text-blue-800-900'
                                    }`}
                            >
                                Experience
                            </Link>
                            <button
                                onClick={() => handleScrollToSection('contact')}
                                className="bg-blue-800-600 text-white px-5 py-2 rounded-md text-base font-semibold hover:bg-blue-800-700 transition-colors"
                            >
                                Book Lesson
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={handleMobileToggle}
                            className="inline-flex items-center justify-center p-2 rounded-md text-blue-800-700 hover:text-blue-800-900 hover:bg-blue-800-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-800-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <XMarkIcon className="block h-6 w-6" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
                            ? 'max-h-64 opacity-100 pb-4'
                            : 'max-h-0 opacity-0 overflow-hidden'
                        }`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg mt-2 border border-blue-800-100">
                        <button
                            onClick={() => handleScrollToSection('about')}
                            className="text-blue-800-700 hover:text-blue-800-900 hover:bg-blue-800-50 block px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => handleScrollToSection('services')}
                            className="text-blue-800-700 hover:text-blue-800-900 hover:bg-blue-800-50 block px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors"
                        >
                            Services
                        </button>
                        <Link
                            href="/experience"
                            onClick={closeMobileMenu}
                            className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${pathname === '/experience'
                                    ? 'text-blue-800-900 bg-blue-800-50'
                                    : 'text-blue-800-700 hover:text-blue-800-900 hover:bg-blue-800-50'
                                }`}
                        >
                            Experience
                        </Link>
                        <button
                            onClick={() => handleScrollToSection('contact')}
                            className="bg-blue-800-600 text-white hover:bg-blue-800-700 block px-3 py-2 text-base font-semibold w-full text-left rounded-md transition-colors"
                        >
                            Book Lesson
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar; 