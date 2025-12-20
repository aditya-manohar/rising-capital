// components/CEOSection.tsx - Professional CEO Introduction with Profile Image
'use client'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'
import { Award, Building2, Target, Users, TrendingUp, MapPin } from 'lucide-react'

const CEOSection = () => {
    const { theme } = useTheme()

    // Theme-based styles
    const styles = {
        light: {
            background: 'bg-white',
            backgroundSecondary: 'bg-gray-50',
            textPrimary: 'text-gray-900',
            textSecondary: 'text-gray-600',
            textTertiary: 'text-gray-500',
            border: 'border-gray-200',
            accent: 'text-gray-900',
            accentBorder: 'border-gray-900',
            cardBackground: 'bg-white',
            statBackground: 'bg-gray-50'
        },
        dark: {
            background: 'bg-gray-900',
            backgroundSecondary: 'bg-gray-800',
            textPrimary: 'text-white',
            textSecondary: 'text-gray-300',
            textTertiary: 'text-gray-400',
            border: 'border-gray-700',
            accent: 'text-white',
            accentBorder: 'border-white',
            cardBackground: 'bg-gray-800',
            statBackground: 'bg-gray-700/50'
        }
    }

    const currentStyle = styles[theme]

    // Real CEO data - Jinil Patel
    const ceoData = {
        name: 'Jinil Patel',
        title: 'Founder & CEO',
        tagline: 'Real Estate Investor | Property Strategist | Networking Enthusiast | Capital Raiser | Franchise Owner',
        bio: 'I am a dedicated and experienced real estate investor with a proven track record in identifying, acquiring, and managing profitable residential and commercial properties. Specializing in value-add opportunities and in-depth market analysis, I am committed to maximizing returns and creating lasting value for my investors and partners.',
        location: 'Based in Michigan, with global portfolio operations',
        experience: '12+ years in real estate investment',
        properties: '150+ properties managed',
        investors: '75+ satisfied investors',
        markets: '8 major markets',
        annualReturn: 'Average 18-25% annual returns'
    }

    const achievements = [
        { icon: Award, label: 'Industry Recognition', value: '5+ Awards' },
        { icon: Building2, label: 'Portfolio Value', value: '$250M+' },
        { icon: Target, label: 'Deal Success Rate', value: '94%' },
        { icon: Users, label: 'Team Members', value: '25+' },
        { icon: TrendingUp, label: 'YoY Growth', value: '35%' },
        { icon: MapPin, label: 'Markets Covered', value: '8' }
    ]

    const coreValues = [
        {
            title: 'Integrity First',
            description: 'Transparent operations and honest communication with all stakeholders'
        },
        {
            title: 'Value Creation',
            description: 'Focus on long-term value appreciation and sustainable returns'
        },
        {
            title: 'Strategic Innovation',
            description: 'Leveraging technology and data for market advantage'
        },
        {
            title: 'Partnership Focus',
            description: 'Building lasting relationships with investors and partners'
        }
    ]

    return (
        <section
            id="ceo"
            className={`relative py-24 transition-colors duration-300 ${currentStyle.background}`}
        >
            {/* Subtle background pattern */}
            <div className={`absolute inset-0 opacity-[0.03] ${theme === 'light'
                ? 'bg-[linear-gradient(30deg,#00000012_25%,transparent_25%),linear-gradient(-30deg,#00000012_25%,transparent_25%)]'
                : 'bg-[linear-gradient(30deg,#ffffff12_25%,transparent_25%),linear-gradient(-30deg,#ffffff12_25%,transparent_25%)]'
                } bg-[size:20px_20px]`} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className={`w-16 h-px ${theme === 'light' ? 'bg-gray-900' : 'bg-white'}`} />
                        <span className={`text-sm font-medium tracking-wider uppercase ${currentStyle.textTertiary}`}>
                            Leadership
                        </span>
                        <div className={`w-16 h-px ${theme === 'light' ? 'bg-gray-900' : 'bg-white'}`} />
                    </div>

                    <h2 className={`text-4xl md:text-5xl font-light mb-6 tracking-tight ${currentStyle.textPrimary}`}>
                        Meet Our Founder
                    </h2>

                    <p className={`text-lg max-w-2xl mx-auto ${currentStyle.textSecondary}`}>
                        The vision and expertise driving Rising Capital&apos;s success in luxury real estate investment
                    </p>

                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                                <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-gray-300 dark:border-gray-600 shadow-lg">
                                    <img
                                        src="/assets/jinil_patel.jfif"
                                        alt="Jinil Patel - Founder & CEO"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none'
                                            e.currentTarget.parentElement!.innerHTML = `
                                                <div class="w-full h-full flex items-center justify-center ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'}">
                                                    <span class="text-lg font-semibold ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}">JP</span>
                                                </div>
                                            `
                                        }}
                                    />
                                </div>

                                <div className="flex-1">
                                    <span className={`text-sm font-medium tracking-wider uppercase ${currentStyle.textTertiary}`}>
                                        Founder & CEO
                                    </span>
                                    <h3 className={`text-3xl md:text-4xl font-light mt-2 ${currentStyle.textPrimary}`}>
                                        {ceoData.name}
                                    </h3>
                                </div>
                            </div>

                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${currentStyle.border} ${currentStyle.statBackground} mt-3 mb-3`}>
                                <span className={`text-xs font-medium ${currentStyle.textSecondary}`}>
                                    {ceoData.tagline}
                                </span>
                            </div>

                            <p className={`text-lg leading-relaxed ${currentStyle.textSecondary} mb-8`}>
                                {ceoData.bio}
                            </p>

                            <div className={`flex items-center gap-2 ${currentStyle.textTertiary}`}>
                                <MapPin className="w-5 h-5" />
                                <span className="text-sm">{ceoData.location}</span>
                            </div>
                        </div>

                        {/* Core Values */}
                        <div>
                            <h4 className={`text-lg font-medium mb-6 ${currentStyle.textPrimary}`}>
                                Core Values & Philosophy
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {coreValues.map((value, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className={`p-4 rounded-xl border ${currentStyle.border} ${currentStyle.statBackground} transition-colors duration-300`}
                                    >
                                        <h5 className={`font-medium mb-2 ${currentStyle.textPrimary}`}>
                                            {value.title}
                                        </h5>
                                        <p className={`text-sm ${currentStyle.textSecondary}`}>
                                            {value.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Stats & Achievements */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Experience Card */}
                        <div className={`rounded-2xl border ${currentStyle.border} ${currentStyle.cardBackground} p-8 transition-colors duration-300`}>
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div>
                                    <div className={`text-3xl font-light mb-2 ${currentStyle.textPrimary}`}>
                                        {ceoData.experience.split('+')[0]}+
                                    </div>
                                    <div className={`text-sm ${currentStyle.textSecondary}`}>
                                        Years Experience
                                    </div>
                                </div>
                                <div>
                                    <div className={`text-3xl font-light mb-2 ${currentStyle.textPrimary}`}>
                                        {ceoData.properties.split('+')[0]}+
                                    </div>
                                    <div className={`text-sm ${currentStyle.textSecondary}`}>
                                        Properties Managed
                                    </div>
                                </div>
                                <div>
                                    <div className={`text-3xl font-light mb-2 ${currentStyle.textPrimary}`}>
                                        {ceoData.investors.split('+')[0]}+
                                    </div>
                                    <div className={`text-sm ${currentStyle.textSecondary}`}>
                                        Satisfied Investors
                                    </div>
                                </div>
                                <div>
                                    <div className={`text-3xl font-light mb-2 ${currentStyle.textPrimary}`}>
                                        {ceoData.annualReturn.split('-')[0]}-{ceoData.annualReturn.split('-')[1].split('%')[0]}%
                                    </div>
                                    <div className={`text-sm ${currentStyle.textSecondary}`}>
                                        Average Annual Returns
                                    </div>
                                </div>
                            </div>

                            <div className={`h-px ${currentStyle.border} my-8`} />

                            <p className={`text-sm ${currentStyle.textSecondary} italic`}>
                                &quot;My approach combines deep market analysis with strategic relationship-building to identify and execute on premium investment opportunities that deliver consistent, above-market returns.&quot;
                            </p>
                        </div>

                        {/* Achievements Grid */}
                        <div>
                            <h4 className={`text-lg font-medium mb-6 ${currentStyle.textPrimary}`}>
                                Key Achievements
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {achievements.map((achievement, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                        className={`p-4 rounded-xl border ${currentStyle.border} ${currentStyle.statBackground} transition-colors duration-300`}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`p-2 rounded-lg ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'
                                                }`}>
                                                <achievement.icon className={`w-4 h-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                                                    }`} />
                                            </div>
                                        </div>
                                        <div className={`text-xl font-light mb-1 ${currentStyle.textPrimary}`}>
                                            {achievement.value}
                                        </div>
                                        <div className={`text-xs ${currentStyle.textTertiary}`}>
                                            {achievement.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Contact/CTA Card */}
                        <div className={`rounded-2xl border ${currentStyle.border} p-8 transition-colors duration-300 ${theme === 'light'
                            ? 'bg-gradient-to-br from-gray-50 to-white'
                            : 'bg-gradient-to-br from-gray-800 to-gray-900'
                            }`}>
                            <h4 className={`text-lg font-medium mb-4 ${currentStyle.textPrimary}`}>
                                Direct Investor Relations
                            </h4>
                            <p className={`text-sm mb-6 ${currentStyle.textSecondary}`}>
                                Jinil maintains direct relationships with all key investors and is available for strategic partnership discussions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex-1 ${theme === 'light'
                                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                                    : 'bg-white text-gray-900 hover:bg-gray-100'
                                    }`}>
                                    Schedule Consultation
                                </button>
                                <button className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex-1 border ${theme === 'light'
                                    ? 'border-gray-900 text-gray-900 hover:bg-gray-50'
                                    : 'border-white text-white hover:bg-white/10'
                                    }`}>
                                    View Track Record
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Philosophy Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className={`mt-20 pt-12 border-t ${currentStyle.border}`}
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <blockquote className={`text-xl md:text-2xl leading-relaxed mb-8 ${currentStyle.textSecondary} italic`}>
                            &quot;Real estate investment isn&apos;t just about property—it&apos;s about people, partnerships, and creating lasting value. At Rising Capital, we&apos;re building more than a portfolio; we&apos;re cultivating relationships and opportunities that stand the test of time.&quot;
                        </blockquote>
                        <div className={`text-sm ${currentStyle.textTertiary}`}>
                            — {ceoData.name}, Founder & CEO
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CEOSection