// components/FAQ.tsx - Updated with modal functionality
'use client'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Download, FileText, Shield, TrendingUp, Globe, BarChart, Calendar } from 'lucide-react'
import ConsultationModal from '@/app/components/Consultationmodal'

const FAQ = () => {
    const { theme } = useTheme()
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false) // Add this state

    // Theme-based styles
    const styles = {
        light: {
            background: 'bg-white',
            backgroundSecondary: 'bg-gray-50',
            textPrimary: 'text-gray-900',
            textSecondary: 'text-gray-600',
            textTertiary: 'text-gray-500',
            border: 'border-gray-200',
            borderLight: 'border-gray-100',
            accent: 'text-gray-900',
            accentBorder: 'border-gray-900',
            hoverBackground: 'hover:bg-gray-50',
            cardBackground: 'bg-white',
            buttonBackground: 'bg-gray-900',
            buttonText: 'text-white'
        },
        dark: {
            background: 'bg-gray-900',
            backgroundSecondary: 'bg-gray-800',
            textPrimary: 'text-white',
            textSecondary: 'text-gray-300',
            textTertiary: 'text-gray-400',
            border: 'border-gray-700',
            borderLight: 'border-gray-800',
            accent: 'text-white',
            accentBorder: 'border-white',
            hoverBackground: 'hover:bg-gray-800',
            cardBackground: 'bg-gray-800',
            buttonBackground: 'bg-white',
            buttonText: 'text-gray-900'
        }
    }

    const currentStyle = styles[theme]

    const faqs = [
        {
            icon: TrendingUp,
            question: 'What drives your investment strategy?',
            answer: 'Our strategy combines AI-powered predictive analytics with deep market expertise to identify high-potential opportunities. We focus on value-add properties in emerging luxury markets, leveraging data-driven insights to maximize returns while minimizing risk.',
        },
        {
            icon: Shield,
            question: 'How do you secure my investments?',
            answer: 'We implement institutional-grade security measures including multi-factor authentication, encrypted communications, and regular third-party audits. All investments are held in segregated accounts with top-tier custodians, and we maintain comprehensive insurance coverage.',
        },
        {
            icon: BarChart,
            question: 'What reporting tools do you offer?',
            answer: 'Investors receive quarterly performance reports, monthly updates, and 24/7 access to our secure portal with real-time analytics. We provide detailed breakdowns of returns, expenses, and market performance, plus annual tax documentation.',
        },
        {
            icon: Globe,
            question: 'Can I invest globally?',
            answer: 'Yes. We offer access to premium real estate opportunities across North America, Europe, and select Asian markets. Our local partnerships and on-ground expertise ensure we navigate international regulations and market nuances effectively.',
        },
        {
            icon: FileText,
            question: 'What are your fee structures?',
            answer: 'Our fee structure is transparent and performance-aligned. We charge a management fee based on assets under management and a performance fee tied to achieving benchmark returns. Full details are provided in our investment memorandum.',
        },
    ]

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <>
            <section
                id="faq"
                className={`relative py-24 transition-colors duration-300 ${currentStyle.background}`}
            >
                {/* Subtle background pattern */}
                <div className={`absolute inset-0 opacity-[0.03] ${theme === 'light'
                    ? 'bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)]'
                    : 'bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]'
                    } bg-[size:24px_24px]`} />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className={`w-12 h-px ${theme === 'light' ? 'bg-gray-900' : 'bg-white'}`} />
                            <span className={`text-sm font-medium tracking-wider uppercase ${currentStyle.textTertiary}`}>
                                FAQ
                            </span>
                            <div className={`w-12 h-px ${theme === 'light' ? 'bg-gray-900' : 'bg-white'}`} />
                        </div>

                        <h2 className={`text-4xl md:text-5xl font-light mb-6 tracking-tight ${currentStyle.textPrimary}`}>
                            Common Questions
                        </h2>

                        <p className={`text-lg max-w-2xl mx-auto ${currentStyle.textSecondary}`}>
                            Clear answers to help you understand our investment approach and processes
                        </p>
                    </motion.div>

                    {/* FAQ Items */}
                    <div className="space-y-4 mb-16">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`rounded-xl border ${currentStyle.border} overflow-hidden transition-all duration-300 ${activeIndex === index
                                    ? `${currentStyle.backgroundSecondary} ${theme === 'light' ? 'shadow-sm' : 'shadow-md'}`
                                    : ''
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className={`w-full flex items-center justify-between p-6 text-left transition-colors duration-300 ${activeIndex === index ? currentStyle.textPrimary : currentStyle.textSecondary
                                        } ${currentStyle.hoverBackground}`}
                                    aria-expanded={activeIndex === index}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-2 rounded-lg ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'
                                            }`}>
                                            <faq.icon className={`w-5 h-5 ${activeIndex === index
                                                ? (theme === 'light' ? 'text-gray-900' : 'text-white')
                                                : (theme === 'light' ? 'text-gray-600' : 'text-gray-400')
                                                }`} />
                                        </div>
                                        <div className="text-left">
                                            <h3 className={`font-medium text-lg mb-1 ${activeIndex === index ? currentStyle.textPrimary : currentStyle.textSecondary
                                                }`}>
                                                {faq.question}
                                            </h3>
                                        </div>
                                    </div>

                                    <motion.div
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className={`ml-4 flex-shrink-0 ${activeIndex === index
                                            ? (theme === 'light' ? 'text-gray-900' : 'text-white')
                                            : currentStyle.textTertiary
                                            }`}
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: 'auto',
                                                opacity: 1,
                                                transition: {
                                                    height: { duration: 0.3, ease: 'easeOut' },
                                                    opacity: { duration: 0.2, delay: 0.1 }
                                                }
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                                transition: {
                                                    height: { duration: 0.2 },
                                                    opacity: { duration: 0.1 }
                                                }
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className={`px-6 pb-6 pt-2 ${currentStyle.textSecondary} leading-relaxed`}>
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className={`rounded-2xl border ${currentStyle.border} p-8 transition-colors duration-300 ${theme === 'light'
                            ? 'bg-gradient-to-br from-gray-50 to-white'
                            : 'bg-gradient-to-br from-gray-800 to-gray-900'
                            }`}
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-2 rounded-lg ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'
                                        }`}>
                                        <FileText className={`w-5 h-5 ${theme === 'light' ? 'text-gray-900' : 'text-white'
                                            }`} />
                                    </div>
                                    <h3 className={`text-xl font-medium ${currentStyle.textPrimary}`}>
                                        Investment Memorandum
                                    </h3>
                                </div>

                                <p className={`${currentStyle.textSecondary} mb-6 md:mb-0`}>
                                    Download our comprehensive guide detailing investment strategies,
                                    performance metrics, and partnership opportunities.
                                </p>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-3 ${theme === 'light'
                                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                                    : 'bg-white text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                <Download className="w-4 h-4" />
                                Download PDF
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Additional Information */}
                    <div className="mt-12 text-center">
                        <p className={`text-sm ${currentStyle.textTertiary} mb-4`}>
                            Still have questions?
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300 ${theme === 'light'
                                ? 'border border-gray-900 text-gray-900 hover:bg-gray-50'
                                : 'border border-white text-white hover:bg-white/10'
                                }`}>
                                Contact Investor Relations
                            </button>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center gap-2 ${theme === 'light'
                                    ? 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                                    : 'border border-blue-400 text-blue-400 hover:bg-blue-900/20'
                                    }`}
                            >
                                <Calendar className="w-4 h-4" />
                                Schedule Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Add Consultation Modal here */}
            <ConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default FAQ