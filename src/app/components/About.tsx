//Abo
'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const About = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const textY = useTransform(scrollYProgress, [0, 0.5], [50, 0])
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
    const imageY = useTransform(scrollYProgress, [0, 0.5], [-50, 0])
    const imageRotate = useTransform(scrollYProgress, [0, 0.5], [10, 0])

    return (
        <section id="about" ref={ref} className="relative py-20 overflow-hidden" style={{
            backgroundColor: 'var(--background)'
        }}>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 z-0"
                style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.5, 0.2]) }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    <motion.div
                        className="lg:w-1/2"
                        style={{ y: imageY, rotateY: imageRotate }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
                            alt="Our Mission"
                            className="w-full h-[300px] sm:h-[400px] rounded-xl shadow-lg object-cover"
                        />
                    </motion.div>
                    <motion.div
                        className="lg:w-1/2 space-y-4"
                        style={{ y: textY, opacity: textOpacity }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--foreground)' }}>
                            Pioneering <span className="text-cyan-400">Real Estate</span> Innovation
                        </h2>
                        <p className="text-base sm:text-lg" style={{ color: 'var(--foreground)' }}>
                            Since 2010, Rising Capital has redefined wealth creation with AI-driven real estate strategies.
                        </p>
                        <p className="text-base sm:text-lg" style={{ color: 'var(--foreground)' }}>
                            Our global team delivers unparalleled returns through cutting-edge technology and market expertise.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About