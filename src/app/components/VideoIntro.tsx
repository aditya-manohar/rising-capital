// VideoIntro.tsx
'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const VideoIntro = () => {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    const videoScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])
    const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1])
    const contentY = useTransform(scrollYProgress, [0, 0.5], [60, 0])
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

    return (
        <section
            ref={sectionRef}
            id="introduction"
            className="relative py-24 lg:py-32 overflow-hidden"
            style={{ backgroundColor: 'var(--background)' }}
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-500/20 to-indigo-600/20 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        style={{ y: contentY, opacity: contentOpacity }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 space-y-6"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ color: 'var(--foreground)' }}>
                            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Rising Capital</span>
                        </h2>
                        <p className="text-lg sm:text-xl leading-relaxed" style={{ color: 'var(--foreground)' }}>
                            Discover how we combine cutting-edge AI technology with decades of real estate expertise to deliver exceptional returns for sophisticated investors worldwide.
                        </p>
                        <p className="text-base sm:text-lg" style={{ color: 'var(--foreground)' }}>
                            Our innovative platform empowers you to access premium global properties, real-time analytics, and personalized strategies — all designed to elevate your wealth.
                        </p>
                    </motion.div>

                    {/* YouTube Video Embed - FIXED */}
                    <motion.div
                        style={{ scale: videoScale, opacity: videoOpacity }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border backdrop-blur-sm">
                            {/* Correct 16:9 aspect ratio container */}
                            <div className="relative pb-[56.25%] h-0"> {/* 56.25% = 9/16 * 100% */}
                                <iframe
                                    src="https://www.youtube.com/embed/4C85fOO1J1k" // Correct embed format
                                    title="Rising Capital Introduction Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default VideoIntro