// components/Hero.tsx - Fixed with href links
'use client'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import ConsultationModal from '@/app/components/Consultationmodal'

const Hero = () => {
    const [isMuted] = useState(false)
    const [mounted, setMounted] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
        if (videoRef.current) {
            videoRef.current.play().catch(e => console.log('Video autoplay failed:', e))
        }
    }, [])

    const stats = [
        { value: '18-25%', label: 'Average Annual Returns' },
        { value: '$250M+', label: 'Assets Under Management' },
        { value: '50+', label: 'Global Markets' }
    ]

    // Return simple static version during SSR
    if (!mounted) {
        return (
            <section className="relative min-h-screen w-full overflow-hidden bg-black">
                {/* Static background for SSR */}
                <div className="absolute inset-0 z-0 bg-black">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="flex flex-col items-center justify-center min-h-screen py-12 lg:py-20 px-4 sm:px-0">
                        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 w-full max-w-4xl lg:max-w-6xl mx-auto">
                            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                                <div className="w-8 sm:w-12 h-px bg-white/50" />
                                <span className="text-xs sm:text-sm font-medium tracking-widest text-white/80 uppercase px-2">
                                    Premium Investment Platform
                                </span>
                                <div className="w-8 sm:w-12 h-px bg-white/50" />
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white mb-4 sm:mb-6 leading-tight">
                                <span className="block">Institutional-Grade</span>
                                <span className="block mt-2 sm:mt-3 md:mt-4 font-normal">Real Estate</span>
                                <span className="block mt-2 sm:mt-3 md:mt-4 font-light">Investment</span>
                            </h1>

                            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light px-2">
                                Access curated luxury real estate opportunities with AI-driven insights
                                and professional portfolio management for sophisticated investors.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 min-w-[200px] sm:min-w-0"
                                >
                                    <span>Schedule Consultation</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>

                                {/* SIMPLE href FIX FOR SSR */}
                                <a href="#investment-portfolio">
                                    <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-white text-white text-sm font-medium hover:bg-white/10 transition-all duration-300 min-w-[200px] sm:min-w-0">
                                        View Investment Portfolio
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 sm:mt-12 lg:mt-16 w-full max-w-2xl lg:max-w-4xl">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center p-4 sm:p-0">
                                        <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-1 sm:mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-300 tracking-wide leading-tight">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    // Client-side only render with animations
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/assets/hero-video.mp4" type="video/mp4" />
                    {/* Fallback image */}
                    <img
                        src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070"
                        alt="Luxury Real Estate Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </video>

                {/* Overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col items-center justify-center min-h-screen py-12 lg:py-20 px-4 sm:px-0">
                    {/* Text Content */}
                    <motion.div
                        className="text-center space-y-4 sm:space-y-6 lg:space-y-8 w-full max-w-4xl lg:max-w-6xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8"
                        >
                            <div className="w-8 sm:w-12 h-px bg-white/50" />
                            <span className="text-xs sm:text-sm font-medium tracking-widest text-white/80 uppercase px-2">
                                Premium Investment Platform
                            </span>
                            <div className="w-8 sm:w-12 h-px bg-white/50" />
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white mb-4 sm:mb-6 leading-tight">
                                <span className="block">Institutional-Grade</span>
                                <span className="block mt-2 sm:mt-3 md:mt-4 font-normal">Real Estate</span>
                                <span className="block mt-2 sm:mt-3 md:mt-4 font-light">Investment</span>
                            </h1>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light px-2"
                        >
                            Access curated luxury real estate opportunities with AI-driven insights
                            and professional portfolio management for sophisticated investors.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8"
                        >
                            {/* Consultation Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setIsModalOpen(true)}
                                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 min-w-[200px] sm:min-w-0"
                            >
                                <span>Schedule Consultation</span>
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>

                            {/* SIMPLE href FIX - Wrap button with anchor tag */}
                            <a href="#investment-portfolio">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-white text-white text-sm font-medium hover:bg-white/10 transition-all duration-300 min-w-[200px] sm:min-w-0 group"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        View Investment Portfolio
                                        <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                                    </span>
                                </motion.button>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-8 sm:mt-12 lg:mt-16 w-full max-w-2xl lg:max-w-4xl"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                                    className="text-center p-4 sm:p-0"
                                >
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-1 sm:mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-300 tracking-wide leading-tight">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <div className="flex flex-col items-center">
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white/70" />
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating Elements - Only on larger screens */}
            <div className="hidden lg:block">
                <motion.div
                    className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl pointer-events-none"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl pointer-events-none"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                        transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                    }}
                />
            </div>

            {/* Consultation Modal */}
            <ConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    )
}

export default Hero