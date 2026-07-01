import { useState } from 'react';
import logoImg from '../assets/images/logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
            <div className="w-[92%] max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-row-reverse py-3 md:py-4">
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-2">
                        <img src={logoImg} alt="MezuuDev Logo" className="h-12 md:h-14 w-auto object-contain" />
                        <span className="text-xl font-bold text-text-primary hidden sm:block">MezuuDev</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-text-secondary hover:text-neon-cyan transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu & Language */}
                    <div className="flex md:hidden items-center space-x-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text-secondary hover:text-neon-cyan"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-dark-border">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-text-secondary hover:text-neon-cyan transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
