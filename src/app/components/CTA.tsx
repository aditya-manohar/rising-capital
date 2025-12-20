//CTA.tsx
'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const CTA = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1])

    return (
        <section ref={ref} className="relative py-20 bg-gradient-to-b from-blue-600 to-purple-600 text-white overflow-hidden">
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 z-0"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl text-center">
                <motion.div style={{ scale, opacity }}>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join the Future of Investing</h2>
                    <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                        Start building your wealth with Rising Capital’s innovative platform.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full bg-white text-blue-600 font-medium text-base sm:text-lg shadow-lg"
                    >
                        Get Started
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default CTA