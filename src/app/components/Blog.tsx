//Blog.tsx
'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Blog = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const articles = [
        {
            title: 'Future of Real Estate',
            excerpt: 'How AI is reshaping investments.',
            image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
            slug: 'future-real-estate',
        },
        {
            title: 'Global Market Trends',
            excerpt: 'Insights into high-yield properties.',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
            slug: 'market-trends',
        },
        {
            title: 'Maximizing ROI',
            excerpt: 'Strategies for luxury real estate.',
            image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2070&auto=format&fit=crop',
            slug: 'maximizing-roi',
        },
    ]

    const cardRotate = useTransform(scrollYProgress, [0, 0.5], [15, 0])
    const cardOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1])

    return (
        <section id="insights" ref={ref} className="relative py-20 overflow-hidden" style={{
            backgroundColor: 'var(--background)'
        }}>
            <motion.div
                className="absolute inset-0 z-0"
                style={{ backgroundColor: 'var(--background)' }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--foreground)' }}>
                        Latest <span className="text-blue-400">Insights</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <motion.article
                            key={article.slug}
                            style={{ rotateY: cardRotate, opacity: cardOpacity }}
                            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)' }}
                            className="bg-card-bg rounded-lg overflow-hidden shadow-md backdrop-blur-sm"
                        >
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg sm:text-xl font-semibold" style={{ color: 'var(--foreground)' }}>{article.title}</h3>
                                <p className="text-sm sm:text-base" style={{ color: 'var(--foreground)' }}>{article.excerpt}</p>
                                <a
                                    href={`/insights/${article.slug}`}
                                    className="text-blue-400 hover:text-blue-300 flex items-center"
                                >
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog