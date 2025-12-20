//Navbar.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = ['About', 'Investments', 'Insights', 'Testimonials', 'FAQ'];

    return (
        <motion.header
            className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-white backdrop-blur-lg shadow-lg transition-colors duration-300"
            style={{
                backgroundColor: 'var(--background)',
                // color: 'var(--foreground)'
            }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
                <Link href="/" className="flex items-center space-x-3">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-10 h-10 rounded-full overflow-hidden shadow-md bg-gradient-to-br from-cyan-400 to-blue-600"
                    >
                        <img
                            src="/assets/logo.jpg"
                            alt="Rising Capital Logo"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <span className="text-xl sm:text-2xl font-bold text-[color:var(--foreground)]">Rising Capital</span>
                </Link>

                <nav className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative text-[color:var(--foreground)] hover:text-cyan-400 dark:hover:text-cyan-400 font-medium text-base"
                        >
                            {item}
                            <motion.span
                                className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600"
                                initial={{ width: 0 }}
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center space-x-4">
                    <Link href="/login" className="text-[color:var(--foreground)] hover:text-cyan-400 dark:hover:text-cyan-400 font-medium text-base">
                        Investor Portal
                    </Link>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(6, 182, 212, 0.5)' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-medium text-base flex items-center"
                    >
                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.button>
                    <ThemeToggle />
                </div>

                <button className="lg:hidden text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="lg:hidden bg-white dark:bg-gray-900 backdrop-blur-lg px-4 py-6 transition-colors duration-300"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="block text-[color:var(--foreground)] hover:text-cyan-400 dark:hover:text-cyan-400 text-base font-medium py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <Link href="/login" className="block text-[color:var(--foreground)] hover:text-cyan-400 dark:hover:text-cyan-400 text-base font-medium py-2">
                            Investor Portal
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-medium text-base flex items-center"
                        >
                            Get Started <ArrowRight className="ml-2 h-5 w-5" />
                        </motion.button>
                        <div className="mt-4">
                            <ThemeToggle />
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Navbar;