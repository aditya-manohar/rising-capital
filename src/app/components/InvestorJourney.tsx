// components/InvestorJourney.tsx
'use client'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'
import { Phone, Users, Target, TrendingUp, Calendar } from 'lucide-react'
import { useState } from 'react'
import ConsultationModal from '@/app/components/Consultationmodal'

const InvestorJourney = () => {
    const { theme } = useTheme()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const journeyData = {
        section: "Investor Journey",
        company: "Rising Capital Group",
        steps: [
            {
                step: 1,
                title: "Initial Consultation",
                description: "Schedule a 15-minute discovery call to discuss your goals and see if we're a good fit.",
                icon: Phone,
                cta: "Book Your Call"
            },
            {
                step: 2,
                title: "Join Investor Community",
                description: "Gain access to our exclusive network, educational resources, and investor portal.",
                icon: Users,
            },
            {
                step: 3,
                title: "Deal Access",
                description: "Review curated multifamily opportunities with full due diligence and projections.",
                icon: Target,
            },
            {
                step: 4,
                title: "Invest & Grow",
                description: "Complete your investment and monitor performance through our transparent reporting.",
                icon: TrendingUp,
            }
        ]
    }

    // Theme-based styles
    const styles = {
        light: {
            background: 'bg-white',
            textPrimary: 'text-gray-900',
            textSecondary: 'text-gray-600',
            border: 'border-gray-200',
            accent: 'text-blue-600',
            cardBackground: 'bg-white',
            stepGradient: 'from-blue-600 to-blue-700',
            badge: 'bg-blue-50 text-blue-700',
            ctaPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
            ctaSecondary: 'border-gray-200 text-gray-700 hover:bg-gray-50',
            iconBg: 'bg-blue-50',
            iconColor: 'text-blue-600',
            stepNumberBg: 'bg-blue-600',
            stepNumberColor: 'text-white',
            cardHover: 'hover:shadow-lg'
        },
        dark: {
            background: 'bg-gray-900',
            textPrimary: 'text-white',
            textSecondary: 'text-gray-300',
            border: 'border-gray-700',
            accent: 'text-blue-400',
            cardBackground: 'bg-gray-800',
            stepGradient: 'from-blue-500 to-blue-600',
            badge: 'bg-blue-900/30 text-blue-300',
            ctaPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
            ctaSecondary: 'border-gray-600 text-gray-300 hover:bg-gray-700',
            iconBg: 'bg-blue-900/30',
            iconColor: 'text-blue-400',
            stepNumberBg: 'bg-blue-700',
            stepNumberColor: 'text-white',
            cardHover: 'hover:shadow-lg hover:shadow-gray-900/20'
        }
    }

    const currentStyle = styles[theme]

    return (
        <>
            <section
                id="investor-journey"
                className={`relative py-16 md:py-24 transition-colors duration-300 ${currentStyle.background}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <div className="inline-flex items-center justify-center gap-3 mb-4">
                            <div className={`w-12 h-px ${theme === 'light' ? 'bg-blue-500' : 'bg-blue-500'}`} />
                            <span className={`text-sm font-semibold tracking-wider uppercase ${currentStyle.accent}`}>
                                {journeyData.section}
                            </span>
                            <div className={`w-12 h-px ${theme === 'light' ? 'bg-blue-500' : 'bg-blue-500'}`} />
                        </div>

                        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light mb-4 ${currentStyle.textPrimary}`}>
                            Your Simple Path to <span className={currentStyle.accent}>Passive Income</span>
                        </h2>

                        <p className={`text-base md:text-lg max-w-3xl mx-auto leading-relaxed ${currentStyle.textSecondary}`}>
                            Join hundreds of investors who trust {journeyData.company} to grow their wealth through multifamily real estate
                        </p>
                    </motion.div>

                    {/* Journey Steps Grid */}
                    <div className="relative">
                        {/* Connecting Line - Desktop */}
                        <div className="hidden lg:block absolute left-8 right-8 top-1/2 h-0.5 -translate-y-1/2 z-0">
                            <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'}`} />
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`absolute inset-0 ${theme === 'light' ? 'bg-blue-500/30' : 'bg-blue-500/30'} origin-left`}
                            />
                        </div>

                        {/* Equal Size Boxes Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {journeyData.steps.map((step, index) => {
                                const Icon = step.icon
                                const hasButton = step.step === 1

                                return (
                                    <motion.div
                                        key={step.step}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="relative z-10"
                                    >
                                        <div className={`h-full p-6 md:p-8 rounded-xl border ${currentStyle.border} ${currentStyle.cardBackground} flex flex-col transition-all duration-300 ${currentStyle.cardHover} hover:-translate-y-1`}>
                                            {/* Step Number */}
                                            <div className={`absolute -top-3 -left-3 w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold ${currentStyle.stepNumberBg} ${currentStyle.stepNumberColor} border-4 ${currentStyle.background}`}>
                                                {step.step}
                                            </div>

                                            {/* Icon Container */}
                                            <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${currentStyle.iconBg}`}>
                                                <Icon className={`w-8 h-8 md:w-10 md:h-10 ${currentStyle.iconColor}`} />
                                            </div>

                                            {/* Content - Equal Height */}
                                            <div className={`flex-1 flex flex-col ${!hasButton ? 'justify-center' : ''}`}>
                                                <h3 className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 text-center ${currentStyle.textPrimary}`}>
                                                    {step.title}
                                                </h3>
                                                <p className={`text-sm md:text-base leading-relaxed mb-6 text-center ${hasButton ? 'md:mb-8' : 'md:mb-0'} ${currentStyle.textSecondary}`}>
                                                    {step.description}
                                                </p>

                                                {/* CTA Button - Only for first card */}
                                                {hasButton && (
                                                    <div className="mt-auto">
                                                        <button
                                                            onClick={() => setIsModalOpen(true)}
                                                            className={`w-full py-3 md:py-3.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${currentStyle.ctaPrimary}`}
                                                        >
                                                            <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                                                            <span>{step.cta}</span>
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Add Consultation Modal */}
            <ConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default InvestorJourney