// // components/Features.tsx - Professional Investment Advantages
// 'use client'
// import { useRef } from 'react'
// import { useTheme } from '../context/ThemeContext'
// import { motion, useScroll, useTransform, useInView } from 'framer-motion'
// import {
//     TrendingUp,
//     Shield,
//     Globe,
//     Target,
//     BarChart,
//     Users,
//     Clock,
//     Building2,
//     Zap,
//     Award,
//     PieChart,
//     Lock
// } from 'lucide-react'

// const Features = () => {
//     const { theme } = useTheme()
//     const containerRef = useRef(null)
//     const isInView = useInView(containerRef, { margin: '-10%', once: true })

//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ['start end', 'end start'],
//     })

//     // Theme-based styles
//     const styles = {
//         light: {
//             background: 'bg-gradient-to-b from-white via-gray-50/30 to-white',
//             textPrimary: 'text-gray-900',
//             textSecondary: 'text-gray-600',
//             textTertiary: 'text-gray-500',
//             border: 'border-gray-200',
//             cardBackground: 'bg-white',
//             gradientCard: 'from-white to-white/80',
//             overlay: 'from-white/60 via-transparent to-white/60'
//         },
//         dark: {
//             background: 'bg-gradient-to-b from-gray-900 via-gray-800/30 to-gray-900',
//             textPrimary: 'text-white',
//             textSecondary: 'text-gray-300',
//             textTertiary: 'text-gray-400',
//             border: 'border-gray-700',
//             cardBackground: 'bg-gray-800',
//             gradientCard: 'from-gray-800 to-gray-800/80',
//             overlay: 'from-gray-900/60 via-transparent to-gray-900/60'
//         }
//     }

//     const currentStyle = styles[theme]

//     // Professional investment advantages
//     const investmentAdvantages = [
//         {
//             icon: TrendingUp,
//             title: 'Superior Returns',
//             description: 'Consistently achieving 18-25% annual returns through strategic market positioning and value-add opportunities.',
//             metrics: ['18-25% returns', 'Value-add focus', 'Market timing'],
//             highlight: 'Performance-driven'
//         },
//         {
//             icon: Target,
//             title: 'Strategic Focus',
//             description: 'Concentrated investment in high-growth luxury markets with proven appreciation potential and strong fundamentals.',
//             metrics: ['Market analysis', 'Growth targeting', 'Exit strategy'],
//             highlight: 'Data-driven'
//         },
//         {
//             icon: Shield,
//             title: 'Risk Management',
//             description: 'Multi-layered protection through diversification, due diligence, and institutional-grade security protocols.',
//             metrics: ['Portfolio diversification', 'Due diligence', 'Asset protection'],
//             highlight: 'Secure'
//         },
//         {
//             icon: Building2,
//             title: 'Premium Assets',
//             description: 'Exclusive access to curated luxury properties with strong rental yields and capital appreciation potential.',
//             metrics: ['Luxury portfolio', 'Global access', 'Quality standards'],
//             highlight: 'Exclusive'
//         },
//         {
//             icon: Users,
//             title: 'Expert Network',
//             description: 'Direct access to a global network of developers, brokers, and legal experts for optimal deal execution.',
//             metrics: ['Global network', 'Industry connections', 'Local expertise'],
//             highlight: 'Connected'
//         },
//         {
//             icon: BarChart,
//             title: 'Transparent Analytics',
//             description: 'Comprehensive reporting with real-time portfolio tracking, performance metrics, and market insights.',
//             metrics: ['Real-time tracking', 'Performance reports', 'Market intelligence'],
//             highlight: 'Transparent'
//         }
//     ]

//     // Institutional capabilities
//     const capabilities = [
//         {
//             icon: Globe,
//             title: 'Global Reach',
//             description: 'Operational expertise across 50+ international markets with local partnerships.',
//             value: '8 markets'
//         },
//         {
//             icon: Clock,
//             title: 'Experience',
//             description: 'A decade of proven success in luxury real estate management and investment.',
//             value: '10+ years'
//         },
//         {
//             icon: Award,
//             title: 'Track Record',
//             description: 'Successful execution of 150+ property investments with consistent returns.',
//             value: '94% success'
//         },
//         {
//             icon: Lock,
//             title: 'Security',
//             description: 'Institutional-grade security measures and segregated client accounts.',
//             value: 'Bank-level'
//         }
//     ]

//     // Scroll animations
//     const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -80])
//     const cardY = useTransform(scrollYProgress, [0, 0.3], [60, 0])
//     const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

//     return (
//         <section
//             ref={containerRef}
//             className={`relative overflow-hidden transition-colors duration-500 ${currentStyle.background}`}
//             id="advantages"
//         >
//             {/* Geometric background */}
//             <motion.div
//                 className="absolute inset-0 z-0"
//                 style={{ y: backgroundY }}
//             >
//                 <div className={`absolute inset-0 bg-gradient-to-b ${currentStyle.overlay}`} />

//                 {/* Line grid pattern */}
//                 <div className={`absolute inset-0 opacity-[0.03] ${theme === 'light'
//                     ? 'bg-[linear-gradient(90deg,#000000_1px,transparent_1px),linear-gradient(0deg,#000000_1px,transparent_1px)]'
//                     : 'bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(0deg,#ffffff_1px,transparent_1px)]'
//                     } bg-[size:40px_40px]`} />

//                 {/* Accent lines */}
//                 <div className="absolute inset-0">
//                     {[...Array(2)].map((_, i) => (
//                         <motion.div
//                             key={i}
//                             className={`absolute h-[1px] ${theme === 'light' ? 'bg-gray-900/5' : 'bg-white/5'
//                                 }`}
//                             style={{
//                                 top: `${30 + i * 20}%`,
//                                 left: '0',
//                                 right: '0',
//                             }}
//                             animate={{
//                                 scaleX: [0, 1, 0],
//                             }}
//                             transition={{
//                                 duration: 8,
//                                 repeat: Infinity,
//                                 ease: "easeInOut",
//                                 delay: i * 2
//                             }}
//                         />
//                     ))}
//                 </div>
//             </motion.div>

//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
//                 <div className="py-24">
//                     {/* Section Header */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 40 }}
//                         animate={isInView ? { opacity: 1, y: 0 } : {}}
//                         transition={{ duration: 0.8 }}
//                         className="mb-20 text-center"
//                     >
//                         <div className="inline-flex items-center gap-3 mb-6">
//                             <div className={`w-12 h-px ${theme === 'light' ? 'bg-gray-900' : 'bg-white'}`} />
//                             <span className={`text-sm font-medium tracking-widest uppercase ${currentStyle.textTertiary}`}>
//                                 Investment Advantages
//                             </span>
//                             <div className={`w-12 h-px ${theme === 'light' ? 'bg-gray-900' : 'bg-white'}`} />
//                         </div>

//                         <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 ${currentStyle.textPrimary}`}>
//                             Institutional-Grade
//                             <span className="block mt-3 font-normal">Advantages</span>
//                         </h2>

//                         <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${currentStyle.textSecondary}`}>
//                             Combining sophisticated investment strategies with operational excellence
//                             to deliver consistent, above-market returns in luxury real estate.
//                         </p>
//                     </motion.div>

//                     {/* Investment Advantages Grid */}
//                     <motion.div
//                         style={{ y: cardY, opacity: cardOpacity }}
//                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
//                     >
//                         {investmentAdvantages.map((advantage, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 40 }}
//                                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                                 className={`group p-8 rounded-2xl border ${currentStyle.border} bg-gradient-to-br ${currentStyle.gradientCard} backdrop-blur-sm transition-all duration-500 hover:shadow-xl`}
//                             >
//                                 {/* Icon and Badge */}
//                                 <div className="flex items-start justify-between mb-6">
//                                     <div className={`p-4 rounded-xl ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'
//                                         } transition-colors duration-300 group-hover:scale-110`}>
//                                         <advantage.icon className={`w-8 h-8 ${currentStyle.textPrimary}`} />
//                                     </div>
//                                     <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${theme === 'light'
//                                         ? 'bg-gray-100 text-gray-700'
//                                         : 'bg-gray-700 text-gray-300'
//                                         }`}>
//                                         {advantage.highlight}
//                                     </span>
//                                 </div>

//                                 {/* Content */}
//                                 <h3 className={`text-xl font-medium mb-4 ${currentStyle.textPrimary}`}>
//                                     {advantage.title}
//                                 </h3>

//                                 <p className={`mb-6 leading-relaxed ${currentStyle.textSecondary}`}>
//                                     {advantage.description}
//                                 </p>

//                                 {/* Metrics */}
//                                 <div className="space-y-2 mb-8">
//                                     {advantage.metrics.map((metric, i) => (
//                                         <div key={i} className="flex items-center gap-3">
//                                             <div className={`w-1.5 h-1.5 rounded-full ${theme === 'light' ? 'bg-gray-900' : 'bg-white'
//                                                 }`} />
//                                             <span className={`text-sm ${currentStyle.textSecondary}`}>
//                                                 {metric}
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 {/* Bottom line */}
//                                 <div className={`h-px ${currentStyle.border} mb-6`} />

//                                 <div className="flex items-center justify-between">
//                                     <span className={`text-sm ${currentStyle.textTertiary}`}>
//                                         Institutional Standard
//                                     </span>
//                                     <div className={`w-8 h-8 rounded-full border ${currentStyle.border} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
//                                         <Zap className="w-4 h-4" />
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </motion.div>

//                     {/* Institutional Capabilities */}
//                     <div className="mb-24">
//                         <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-12">
//                             <div>
//                                 <h3 className={`text-3xl font-light mb-6 ${currentStyle.textPrimary}`}>
//                                     Institutional Capabilities
//                                 </h3>
//                                 <p className={`max-w-2xl ${currentStyle.textSecondary}`}>
//                                     Operational infrastructure designed for sophisticated investors seeking
//                                     premium real estate exposure with professional management.
//                                 </p>
//                             </div>

//                             <div className="flex items-center gap-6">
//                                 <div className={`text-right border-r ${currentStyle.border} pr-6`}>
//                                     <div className={`text-sm ${currentStyle.textTertiary} mb-1`}>
//                                         Portfolio Diversity
//                                     </div>
//                                     <div className={`text-2xl font-light ${currentStyle.textPrimary}`}>
//                                         150+ Assets
//                                     </div>
//                                 </div>
//                                 <div className="text-right">
//                                     <div className={`text-sm ${currentStyle.textTertiary} mb-1`}>
//                                         Investor Base
//                                     </div>
//                                     <div className={`text-2xl font-light ${currentStyle.textPrimary}`}>
//                                         75+ Partners
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                             {capabilities.map((capability, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, y: 30 }}
//                                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                                     transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
//                                     className={`p-6 rounded-xl border ${currentStyle.border} ${currentStyle.cardBackground} transition-all duration-300 hover:scale-[1.02]`}
//                                 >
//                                     <div className="flex items-center gap-4 mb-4">
//                                         <div className={`p-3 rounded-lg ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'
//                                             }`}>
//                                             <capability.icon className={`w-6 h-6 ${currentStyle.textPrimary}`} />
//                                         </div>
//                                         <div>
//                                             <div className={`text-sm font-medium ${currentStyle.textTertiary} mb-1`}>
//                                                 {capability.value}
//                                             </div>
//                                             <h4 className={`font-medium ${currentStyle.textPrimary}`}>
//                                                 {capability.title}
//                                             </h4>
//                                         </div>
//                                     </div>

//                                     <p className={`text-sm leading-relaxed ${currentStyle.textSecondary}`}>
//                                         {capability.description}
//                                     </p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Investment Process */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 40 }}
//                         animate={isInView ? { opacity: 1, y: 0 } : {}}
//                         transition={{ duration: 0.8, delay: 0.8 }}
//                         className={`p-8 rounded-2xl border ${currentStyle.border} bg-gradient-to-br ${currentStyle.gradientCard} backdrop-blur-sm`}
//                     >
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                             <div>
//                                 <h3 className={`text-2xl font-light mb-6 ${currentStyle.textPrimary}`}>
//                                     Professional Investment Process
//                                 </h3>

//                                 <div className="space-y-6">
//                                     {[
//                                         'Market Research & Opportunity Identification',
//                                         'Due Diligence & Risk Assessment',
//                                         'Strategic Acquisition & Portfolio Integration',
//                                         'Active Asset Management & Value Enhancement',
//                                         'Performance Optimization & Exit Planning'
//                                     ].map((step, index) => (
//                                         <div key={index} className="flex items-start gap-4">
//                                             <div className={`w-6 h-6 rounded-full border ${currentStyle.border} flex items-center justify-center flex-shrink-0 mt-1`}>
//                                                 <span className={`text-xs font-medium ${currentStyle.textPrimary}`}>
//                                                     {index + 1}
//                                                 </span>
//                                             </div>
//                                             <div>
//                                                 <h4 className={`font-medium mb-2 ${currentStyle.textPrimary}`}>
//                                                     {step}
//                                                 </h4>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className={`p-6 rounded-xl border ${currentStyle.border} ${currentStyle.cardBackground}`}>
//                                 <h4 className={`text-lg font-medium mb-6 ${currentStyle.textPrimary}`}>
//                                     Why Choose Professional Management
//                                 </h4>

//                                 <ul className="space-y-4">
//                                     <li className="flex items-start gap-3">
//                                         <PieChart className={`w-5 h-5 mt-0.5 ${currentStyle.textPrimary}`} />
//                                         <div>
//                                             <span className={`font-medium ${currentStyle.textPrimary}`}>Portfolio Diversification:</span>
//                                             <p className={`text-sm ${currentStyle.textSecondary}`}>
//                                                 Spread risk across markets and property types
//                                             </p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <Shield className={`w-5 h-5 mt-0.5 ${currentStyle.textPrimary}`} />
//                                         <div>
//                                             <span className={`font-medium ${currentStyle.textPrimary}`}>Risk Mitigation:</span>
//                                             <p className={`text-sm ${currentStyle.textSecondary}`}>
//                                                 Professional due diligence and ongoing monitoring
//                                             </p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <TrendingUp className={`w-5 h-5 mt-0.5 ${currentStyle.textPrimary}`} />
//                                         <div>
//                                             <span className={`font-medium ${currentStyle.textPrimary}`}>Performance Optimization:</span>
//                                             <p className={`text-sm ${currentStyle.textSecondary}`}>
//                                                 Active management to maximize returns
//                                             </p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <Clock className={`w-5 h-5 mt-0.5 ${currentStyle.textPrimary}`} />
//                                         <div>
//                                             <span className={`font-medium ${currentStyle.textPrimary}`}>Time Efficiency:</span>
//                                             <p className={`text-sm ${currentStyle.textSecondary}`}>
//                                                 Focus on strategy while we handle operations
//                                             </p>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </motion.div>

//                     {/* CTA */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={isInView ? { opacity: 1, y: 0 } : {}}
//                         transition={{ duration: 0.6, delay: 1 }}
//                         className="mt-20 text-center"
//                     >
//                         <div className={`text-2xl leading-relaxed mb-12 max-w-3xl mx-auto ${currentStyle.textSecondary}`}>
//                             "Professional real estate investment isn't just about capital—it's about strategy,
//                             execution, and partnership. We provide the framework for success."
//                         </div>

//                         <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                             <motion.button
//                                 whileHover={{ scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 className={`px-8 py-4 rounded-lg text-sm font-medium transition-all duration-300 ${theme === 'light'
//                                     ? 'bg-gray-900 text-white hover:bg-gray-800'
//                                     : 'bg-white text-gray-900 hover:bg-gray-100'
//                                     }`}
//                             >
//                                 Schedule Strategy Session
//                             </motion.button>

//                             <motion.button
//                                 whileHover={{ scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 className={`px-8 py-4 rounded-lg text-sm font-medium transition-all duration-300 border ${theme === 'light'
//                                     ? 'border-gray-900 text-gray-900 hover:bg-gray-50'
//                                     : 'border-white text-white hover:bg-white/10'
//                                     }`}
//                             >
//                                 Download Investment Framework
//                             </motion.button>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Features