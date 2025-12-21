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
            className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg transition-colors duration-300"
            style={{
                backgroundColor: 'var(--background)',
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
                <button
                    className="lg:hidden p-2 -mr-2 text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text dark:text-white hover:from-cyan-500 hover:to-blue-700 dark:hover:text-cyan-400 transition-all duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg transition-colors duration-300 overflow-hidden"
                    style={{
                        backgroundColor: 'var(--background)',
                        backdropFilter: 'blur(12px)',
                    }}
                >
                    <div className="container mx-auto px-4 py-6">
                        {/* Navigation Links */}
                        <div className="space-y-1 mb-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block text-[color:var(--foreground)] hover:text-cyan-400 dark:hover:text-cyan-400 text-base font-medium py-3 px-4 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* Separator */}
                        <div className="border-t border-gray-200 dark:border-gray-700 my-4 pt-4">
                            <Link
                                href="/login"
                                className="block text-[color:var(--foreground)] hover:text-cyan-400 dark:hover:text-cyan-400 text-base font-medium py-3 px-4 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200 mb-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Investor Portal
                            </Link>

                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-medium text-base flex items-center justify-center shadow-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                                </motion.button>

                                <div className="flex justify-center sm:justify-start">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Navbar;