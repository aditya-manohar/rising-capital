//Testimonials.tsx
'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa'
import { FiStar, FiAward } from 'react-icons/fi'

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [direction, setDirection] = useState(0) // 1 for forward, -1 for backward

    const testimonials = [
        {
            name: 'Seline Kyle',
            role: 'Investor',
            content: 'Rising Capital’s platform is unmatched, delivering exceptional returns that consistently outperform market benchmarks. Their innovative approach to portfolio management has been transformative for my investments.',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
            rating: 5,
            company: 'Wayne Enterprises'
        },
        {
            name: 'Bruce Wayne',
            role: 'Client',
            content: 'The AI-driven insights provided by Rising Capital have completely transformed my investment strategy. Their predictive analytics identified opportunities I would have otherwise missed, resulting in a 32% portfolio growth last quarter.',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
            rating: 4,
            company: 'Wayne Tech'
        },
        {
            name: 'Alfred Pennyworth',
            role: 'Partner',
            content: 'Their global expertise is a game-changer for wealth creation. Working with Rising Capital has allowed us to expand into emerging markets with confidence, mitigating risks while maximizing returns.',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
            rating: 5,
            company: 'Wayne Manor'
        },
        {
            name: 'Lucius Fox',
            role: 'CIO',
            content: 'The bespoke investment solutions from Rising Capital have revolutionized our corporate treasury strategy. Their team combines technical sophistication with practical market wisdom.',
            avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop',
            rating: 5,
            company: 'Fox Enterprises'
        },
        {
            name: 'Rachel Dawes',
            role: 'Portfolio Manager',
            content: 'As someone who values ethical investing, I was impressed by Rising Capital\'s sustainable growth funds. They prove you don\'t have to sacrifice returns for principles.',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
            rating: 4,
            company: 'Gotham Holdings'
        }
    ]

    // Auto-scroll logic with pause on hover
    useEffect(() => {
        if (isHovered) return

        const interval = setInterval(() => {
            setDirection(1)
            setActiveIndex(prev => (prev + 1) % testimonials.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isHovered, testimonials.length])

    const scrollToTestimonial = (index: number) => {
        setDirection(index > activeIndex ? 1 : -1)
        setActiveIndex(index)
    }

    const scroll = (dir: 'left' | 'right') => {
        if (dir === 'left') {
            setDirection(-1)
            setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)
        } else {
            setDirection(1)
            setActiveIndex(prev => (prev + 1) % testimonials.length)
        }
    }

    const renderStars = (rating: number) => {
        return Array(5).fill(0).map((_, i) => (
            <FiStar
                key={i}
                className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} w-4 h-4`}
            />
        ))
    }

    // Animation variants
    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    }

    return (
        <section
            id="testimonials"
            className="py-24 overflow-hidden relative"
            style={{ backgroundColor: 'var(--background)' }}
        >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-purple-500 filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-blue-100/10 border border-blue-200/20">
                        <FiAward className="text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-400">TRUSTED BY INDUSTRY LEADERS</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                        Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Success</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--foreground)' }}>
                        Discover why top investors and institutions choose Rising Capital for their wealth management needs.
                    </p>
                </motion.div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Main testimonial card */}
                    <div className="relative h-96">
                        <AnimatePresence custom={direction} initial={false}>
                            <motion.div
                                key={activeIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="bg-card-bg border border-border rounded-2xl p-8 shadow-2xl backdrop-blur-sm absolute top-0 left-0 w-full h-full"
                            >
                                {/* Quote icon */}
                                <FaQuoteLeft className="absolute top-6 right-6 text-blue-400/10 text-6xl" />

                                <div className="flex flex-col md:flex-row gap-8 relative z-10 h-full">
                                    <div className="flex-shrink-0">
                                        <div className="relative">
                                            <img
                                                src={testimonials[activeIndex].avatar}
                                                alt={testimonials[activeIndex].name}
                                                className="w-24 h-24 rounded-xl object-cover border-2 border-blue-400/30 shadow-md"
                                            />
                                            <div className="absolute -bottom-3 -right-3 bg-blue-500 rounded-full p-2 shadow-lg">
                                                <FiAward className="text-white w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-center mb-4">
                                            {renderStars(testimonials[activeIndex].rating)}
                                            <span className="ml-2 text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                                                {testimonials[activeIndex].rating}.0
                                            </span>
                                        </div>
                                        <p className="text-lg mb-6" style={{ color: 'var(--foreground)' }}>
                                            {testimonials[activeIndex].content}
                                        </p>
                                        <div>
                                            <h4 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>
                                                {testimonials[activeIndex].name}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="text-sm" style={{ color: 'var(--foreground)' }}>
                                                    {testimonials[activeIndex].role}
                                                </span>
                                                <span className="text-sm text-blue-400">•</span>
                                                <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                                                    {testimonials[activeIndex].company}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation controls */}
                    <div className="flex justify-between items-center mt-8">
                        <div className="flex items-center space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-blue-500 w-6' : 'bg-gray-300'}`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        <div className="flex space-x-3">
                            <button
                                onClick={() => scroll('left')}
                                className="p-3 backdrop-blur-lg bg-white/10 border border-border rounded-full shadow-md hover:bg-white/20 transition-all hover:scale-105"
                                aria-label="Previous testimonial"
                            >
                                <FaArrowLeft className="text-foreground" style={{ color: 'var(--foreground)' }} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="p-3 backdrop-blur-lg bg-white/10 border border-border rounded-full shadow-md hover:bg-white/20 transition-all hover:scale-105"
                                aria-label="Next testimonial"
                            >
                                <FaArrowRight className="text-foreground" style={{ color: 'var(--foreground)' }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials