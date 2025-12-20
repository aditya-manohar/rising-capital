// components/Stats.tsx - Clean Professional Performance Metrics
'use client'
import { useRef, useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Building2, Users, Target, Award, Globe, Shield, BarChart, ChevronRight } from 'lucide-react'

const Stats = () => {
    const { theme } = useTheme()
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { margin: '-10%', once: true })

    const [counterValues, setCounterValues] = useState({
        years: 0,
        properties: 0,
        investors: 0,
        markets: 0,
        satisfaction: 0
    })

    // Performance metrics from CEO data
    const performanceData = {
        years: 10,
        properties: 150,
        investors: 75,
        markets: 8,
        satisfaction: 98,
        annualReturns: { min: 18, max: 25 },
        portfolioValue: 250,
        dealSuccessRate: 94
    }

    // Core competencies from CEO description
    const coreCompetencies = [
        {
            icon: Shield,
            title: 'Strategic Planning',
            description: 'Architecting and implementing efficient operational frameworks that drive sustained growth and maximize investor returns.',
            metrics: ['10+ years', '98% success rate']
        },
        {
            icon: Target,
            title: 'High-Pressure Execution',
            description: 'Excelling in demanding environments with meticulous attention to detail and unwavering commitment to excellence.',
            metrics: ['150+ projects', 'Multi-market expertise']
        },
        {
            icon: Users,
            title: 'Investor Relations',
            description: 'Building lasting partnerships through transparent communication and consistent delivery of premium results.',
            metrics: ['75+ investors', '98% satisfaction']
        },
        {
            icon: BarChart,
            title: 'Performance Optimization',
            description: 'Leveraging data analytics and market intelligence to consistently achieve above-market returns.',
            metrics: ['18-25% returns', '94% success rate']
        }
    ]

    // Professional certifications
    const certifications = [
        { name: 'ServSafe Certified', level: 'Professional', icon: Award },
        { name: 'Bilingual Proficiency', level: 'Business Fluent', icon: Globe },
        { name: 'Microsoft Office Expert', level: 'Advanced', icon: TrendingUp },
        { name: 'POS Systems Specialist', level: 'Certified', icon: Building2 }
    ]

    // Clean theme-based styles
    const styles = {
        light: {
            background: 'bg-white',
            textPrimary: 'text-gray-900',
            textSecondary: 'text-gray-600',
            textTertiary: 'text-gray-500',
            border: 'border-gray-200',
            cardBackground: 'bg-white',
            statBackground: 'bg-gray-50',
            hoverBackground: 'hover:bg-gray-50'
        },
        dark: {
            background: 'bg-gray-900',
            textPrimary: 'text-white',
            textSecondary: 'text-gray-300',
            textTertiary: 'text-gray-400',
            border: 'border-gray-700',
            cardBackground: 'bg-gray-800',
            statBackground: 'bg-gray-800',
            hoverBackground: 'hover:bg-gray-750'
        }
    }

    const currentStyle = styles[theme]

    // Counter animation
    useEffect(() => {
        if (isInView) {
            const duration = 2000
            const steps = 60
            const interval = duration / steps

            let step = 0
            const timer = setInterval(() => {
                step++
                const progress = step / steps

                setCounterValues({
                    years: Math.floor(performanceData.years * progress),
                    properties: Math.floor(performanceData.properties * progress),
                    investors: Math.floor(performanceData.investors * progress),
                    markets: Math.floor(performanceData.markets * progress),
                    satisfaction: Math.floor(performanceData.satisfaction * progress)
                })

                if (step >= steps) clearInterval(timer)
            }, interval)

            return () => clearInterval(timer)
        }
    }, [isInView, performanceData])

    return (
        <section
            ref={sectionRef}
            className={`relative transition-colors duration-300 ${currentStyle.background}`}
        >
            {/* Simple background pattern */}
            <div className={`absolute inset-0 opacity-[0.03] ${theme === 'light'
                ? 'bg-[linear-gradient(90deg,#f3f4f6_1px,transparent_1px),linear-gradient(180deg,#f3f4f6_1px,transparent_1px)]'
                : 'bg-[linear-gradient(90deg,#374151_1px,transparent_1px),linear-gradient(180deg,#374151_1px,transparent_1px)]'
                } bg-[size:40px_40px]`} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                <div className="py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-12">
                            <div className="max-w-2xl">
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className={`w-16 h-px ${theme === 'light' ? 'bg-gray-900' : 'bg-white'}`} />
                                    <span className={`text-sm font-medium tracking-widest uppercase ${currentStyle.textTertiary}`}>
                                        Performance Metrics
                                    </span>
                                </div>

                                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 ${currentStyle.textPrimary}`}>
                                    Quantifying
                                    <span className="block mt-3 font-normal">Excellence</span>
                                </h2>

                                <p className={`text-lg leading-relaxed ${currentStyle.textSecondary} max-w-xl`}>
                                    A decade of consistent performance and strategic growth in luxury real estate investment.
                                </p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className={`text-right border-r ${currentStyle.border} pr-6`}>
                                    <div className={`text-sm ${currentStyle.textTertiary} mb-1`}>
                                        Average Returns
                                    </div>
                                    <div className={`text-3xl font-light ${currentStyle.textPrimary}`}>
                                        {performanceData.annualReturns.min}-{performanceData.annualReturns.max}%
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className={`text-sm ${currentStyle.textTertiary} mb-1`}>
                                        Portfolio Value
                                    </div>
                                    <div className={`text-3xl font-light ${currentStyle.textPrimary}`}>
                                        ${performanceData.portfolioValue}M+
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-24">
                        {[
                            { value: counterValues.years, label: 'Years Experience', suffix: '+' },
                            { value: counterValues.properties, label: 'Properties Managed', suffix: '+' },
                            { value: counterValues.investors, label: 'Investor Partners', suffix: '+' },
                            { value: counterValues.markets, label: 'Global Markets', suffix: '+' },
                            { value: counterValues.satisfaction, label: 'Satisfaction Rate', suffix: '%' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`p-6 rounded-xl border ${currentStyle.border} ${currentStyle.cardBackground} transition-all duration-300 hover:shadow-lg`}
                            >
                                <div className={`text-3xl lg:text-4xl font-light mb-3 ${currentStyle.textPrimary}`}>
                                    {stat.value}
                                    <span className="text-2xl">{stat.suffix}</span>
                                </div>
                                <div className={`text-sm leading-tight ${currentStyle.textSecondary}`}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Core Competencies */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <h3 className={`text-3xl font-light mb-6 ${currentStyle.textPrimary}`}>
                                Core Competencies
                            </h3>
                            <p className={`text-lg max-w-2xl mx-auto ${currentStyle.textSecondary}`}>
                                Strategic expertise refined through a decade of high-stakes real estate management
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {coreCompetencies.map((competency, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                    className={`group p-8 rounded-xl border ${currentStyle.border} ${currentStyle.cardBackground} transition-all duration-300 hover:shadow-lg`}
                                >
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className={`p-4 rounded-xl ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'
                                            } transition-colors duration-300`}>
                                            <competency.icon className={`w-8 h-8 ${currentStyle.textPrimary}`} />
                                        </div>
                                        <div>
                                            <h4 className={`text-xl font-medium mb-3 ${currentStyle.textPrimary}`}>
                                                {competency.title}
                                            </h4>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {competency.metrics.map((metric, i) => (
                                                    <span
                                                        key={i}
                                                        className={`px-3 py-1.5 rounded-full text-xs font-medium ${theme === 'light'
                                                            ? 'bg-gray-100 text-gray-700'
                                                            : 'bg-gray-700 text-gray-300'
                                                            }`}
                                                    >
                                                        {metric}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <p className={`leading-relaxed ${currentStyle.textSecondary} mb-8`}>
                                        {competency.description}
                                    </p>

                                    <div className={`h-px ${currentStyle.border} mb-6`} />

                                    <div className="flex items-center justify-between">
                                        <span className={`text-sm ${currentStyle.textTertiary}`}>
                                            Institutional Grade
                                        </span>
                                        <div className={`w-8 h-8 rounded-full border ${currentStyle.border} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Professional Credentials */}
                    <div className={`p-8 rounded-xl border ${currentStyle.border} ${currentStyle.cardBackground} mb-16`}>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10">
                            <div>
                                <h3 className={`text-2xl font-light mb-4 ${currentStyle.textPrimary}`}>
                                    Professional Credentials
                                </h3>
                                <p className={`max-w-xl ${currentStyle.textSecondary}`}>
                                    Certified expertise and technical proficiency supporting strategic investment decisions
                                </p>
                            </div>
                            <div className={`text-right border-l ${currentStyle.border} pl-8`}>
                                <div className={`text-sm ${currentStyle.textTertiary} mb-2`}>
                                    Technical Proficiency
                                </div>
                                <div className={`text-2xl font-light ${currentStyle.textPrimary}`}>
                                    Enterprise Level
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                    className={`p-6 rounded-xl border ${currentStyle.border} ${currentStyle.statBackground} transition-all duration-300 hover:shadow-lg`}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`p-3 rounded-lg ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'
                                            }`}>
                                            <cert.icon className={`w-6 h-6 ${currentStyle.textPrimary}`} />
                                        </div>
                                        <div>
                                            <div className={`text-sm font-medium ${currentStyle.textTertiary} mb-1`}>
                                                {cert.level}
                                            </div>
                                            <h4 className={`font-medium ${currentStyle.textPrimary}`}>
                                                {cert.name}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className={`h-px ${currentStyle.border} my-4`} />
                                    <div className={`text-xs ${currentStyle.textTertiary}`}>
                                        Verified Professional Certification
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Performance Philosophy */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className={`text-2xl leading-relaxed mb-12 ${currentStyle.textSecondary} italic`}>
                            True excellence in real estate investment comes from the intersection of
                            strategic foresight, operational precision, and unwavering commitment to
                            investor success—principles that have guided every decision for over a decade.
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`px-8 py-4 rounded-lg text-sm font-medium transition-all duration-300 ${theme === 'light'
                                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                                    : 'bg-white text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                Review Performance Portfolio
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`px-8 py-4 rounded-lg text-sm font-medium transition-all duration-300 border ${theme === 'light'
                                    ? 'border-gray-900 text-gray-900 hover:bg-gray-50'
                                    : 'border-white text-white hover:bg-white/10'
                                    }`}
                            >
                                Schedule Technical Review
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Stats