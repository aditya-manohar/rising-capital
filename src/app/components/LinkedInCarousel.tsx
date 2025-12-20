// components/LinkedInCarousel.tsx - Updated with infinite scroll
'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useTheme } from '../context/ThemeContext'
import { ChevronRight, ChevronLeft, Linkedin, Users, Target, TrendingUp } from 'lucide-react'

const LinkedInCarousel = () => {
    const { theme } = useTheme()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [mounted, setMounted] = useState(false)
    const [visibleCards, setVisibleCards] = useState(3)
    const containerRef = useRef<HTMLDivElement>(null)
    const isTransitioning = useRef(false)

    // Real LinkedIn posts from your links with key insights related to each post
    const linkedinPosts = [
        {
            id: 1,
            title: 'Lessons from Pizza Shop to Multifamily',
            content: 'Running a pizza place taught me more about multifamily real estate than I ever expected. In both worlds, the "product" might be different — pizza vs. apartments — but the fundamentals are shockingly similar.',
            date: 'October 10, 2025',
            actualUrl: 'https://www.linkedin.com/posts/jinil-patel-5b13451a8_what-i-learned-about-multifamily-from-activity-7382414330819989504-rOcr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXo064BxHwfDS7VtkJ-_15PfIg4a2BnfqA',
            insights: [
                'Customer Experience = Resident Experience',
                'Systems Matter for consistency',
                'Team Culture drives everything',
                'Margins are won in details',
                'Serving people and building systems'
            ]
        },
        {
            id: 2,
            title: '36-Unit Multifamily Deal Closed',
            content: 'We officially closed on a 36-unit multifamily deal today! This one feels special. Not only is it our second multifamily acquisition this year, but it was an amazing off-market opportunity.',
            date: 'November 18, 2025',
            actualUrl: 'https://www.linkedin.com/posts/jinil-patel-5b13451a8_we-officially-closed-on-a-36-unit-multifamily-activity-7396373566314897408-BEwJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXo064BxHwfDS7VtkJ-_15PfIg4a2BnfqA',
            insights: [
                'Second multifamily acquisition this year',
                'Off-market opportunity secured',
                'Same neighborhood, better price',
                'Building generational momentum',
                'Trust from investors and partners'
            ]
        },
        {
            id: 3,
            title: 'Happy Thanksgiving Reflections',
            content: 'As this year winds down, I\'ve been reflecting on just how much we\'ve been blessed. This has been a year of growth, new challenges, and big milestones — both personally and professionally.',
            date: 'November 26, 2025',
            actualUrl: 'https://www.linkedin.com/posts/jinil-patel-5b13451a8_happy-thanksgiving-as-this-year-winds-activity-7399584461195010048-HXvB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXo064BxHwfDS7VtkJ-_15PfIg4a2BnfqA',
            insights: [
                'Family as the foundation of success',
                'Support from wife and newborn son',
                'Grateful for partners and investors',
                'Year of growth and milestones',
                'People who believe in the vision'
            ]
        },
        {
            id: 4,
            title: 'After the Acquisition: Real Work Begins',
            content: 'Everyone celebrates the acquisition… but the real work begins after the closing table. In multifamily, buying the asset is just the starting line. What happens next is what truly determines performance.',
            date: 'December 4, 2025',
            actualUrl: 'https://www.linkedin.com/posts/jinil-patel-5b13451a8_everyone-celebrates-the-acquisition-but-activity-7402392001947889664-IlgG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXo064BxHwfDS7VtkJ-_15PfIg4a2BnfqA',
            insights: [
                'Turning units efficiently',
                'Driving NOI through smart operations',
                'Training and supporting onsite teams',
                'Building strong resident relationships',
                'Executing the business plan day-by-day'
            ]
        },
        {
            id: 5,
            title: 'Today\'s Inspections: 260 Units',
            content: 'It\'s truly been a pleasure partnering with such like-minded, driven people on this incredible asset. Today\'s inspections covered all 260 units with my partner.',
            date: 'December 4, 2025',
            actualUrl: 'https://www.linkedin.com/posts/jinil-patel-5b13451a8_todays-inspections-covered-all-260-units-activity-7402488116860936194-hwWC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXo064BxHwfDS7VtkJ-_15PfIg4a2BnfqA',
            insights: [
                'Partnering with like-minded, driven people',
                '260-unit property inspection completed',
                'Operational focus creates the most value',
                'Markets with stability and consistent demand',
                'Teamwork and shared vision'
            ]
        }
    ]

    // Duplicate posts for infinite scroll effect
    const infinitePosts = [...linkedinPosts, ...linkedinPosts, ...linkedinPosts]
    const realPostsCount = linkedinPosts.length

    const styles = {
        light: {
            background: 'bg-white',
            textPrimary: 'text-gray-900',
            textSecondary: 'text-gray-600',
            textTertiary: 'text-gray-500',
            border: 'border-gray-200',
            cardBackground: 'bg-white',
            linkedinColor: 'text-[#0A66C2]',
            linkedinBg: 'bg-[#0A66C2]/5',
            buttonPrimary: 'bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90'
        },
        dark: {
            background: 'bg-gray-900',
            textPrimary: 'text-white',
            textSecondary: 'text-gray-300',
            textTertiary: 'text-gray-400',
            border: 'border-gray-700',
            cardBackground: 'bg-gray-800',
            linkedinColor: 'text-[#70B5F9]',
            linkedinBg: 'bg-[#0A66C2]/10',
            buttonPrimary: 'bg-[#0A66C2] text-white hover:bg-[#0A66C2]/80'
        }
    }

    const currentStyle = styles[theme]

    useEffect(() => {
        setMounted(true)
        updateVisibleCards()
        window.addEventListener('resize', updateVisibleCards)

        // Start auto-scroll
        const interval = setInterval(() => {
            handleNext()
        }, 5000)

        return () => {
            window.removeEventListener('resize', updateVisibleCards)
            clearInterval(interval)
        }
    }, [])

    const updateVisibleCards = () => {
        if (typeof window === 'undefined') return

        if (window.innerWidth < 640) setVisibleCards(1)
        else if (window.innerWidth < 1024) setVisibleCards(2)
        else setVisibleCards(3)
    }

    const handleNext = useCallback(() => {
        if (isTransitioning.current) return

        isTransitioning.current = true
        setCurrentIndex(prev => {
            const nextIndex = prev + 1
            // If we're at the end of the real posts, jump back to start seamlessly
            if (nextIndex >= realPostsCount) {
                setTimeout(() => {
                    setCurrentIndex(0)
                    isTransitioning.current = false
                }, 500)
                return nextIndex
            }
            setTimeout(() => {
                isTransitioning.current = false
            }, 500)
            return nextIndex
        })
    }, [realPostsCount])

    const handlePrev = useCallback(() => {
        if (isTransitioning.current) return

        isTransitioning.current = true
        setCurrentIndex(prev => {
            const nextIndex = prev - 1
            // If we're at the beginning, jump to the end seamlessly
            if (nextIndex < 0) {
                setTimeout(() => {
                    setCurrentIndex(realPostsCount - 1)
                    isTransitioning.current = false
                }, 500)
                return nextIndex
            }
            setTimeout(() => {
                isTransitioning.current = false
            }, 500)
            return nextIndex
        })
    }, [realPostsCount])

    const handleShare = (url: string) => {
        if (navigator.share) {
            navigator.share({
                title: 'Check out this LinkedIn post by Jinil Patel',
                url: url
            })
        } else {
            navigator.clipboard.writeText(url)
            alert('Link copied to clipboard!')
        }
    }

    if (!mounted) {
        return null
    }

    // Render LinkedIn post
    const renderLinkedInPost = (post: typeof linkedinPosts[0], index: number) => (
        <div key={`${post.id}-${index}`} className="h-full">
            <div className={`rounded-xl border ${currentStyle.border} ${currentStyle.cardBackground} overflow-hidden shadow-lg h-full flex flex-col`}>
                {/* Post Header */}
                <div className={`p-6 ${currentStyle.linkedinBg}`}>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-full border ${currentStyle.border} flex items-center justify-center ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}>
                                <Linkedin className={`w-6 h-6 ${currentStyle.linkedinColor}`} />
                            </div>
                            <div>
                                <h3 className={`font-semibold ${currentStyle.textPrimary}`}>Jinil Patel</h3>
                                <p className={`text-xs ${currentStyle.textTertiary}`}>Founder & CEO • Rising Capital</p>
                                <p className={`text-xs ${currentStyle.textTertiary} mt-1`}>{post.date}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className={`text-xs ${currentStyle.textTertiary}`}>Featured Post</div>
                            <div className="text-sm font-semibold">#{(index % realPostsCount) + 1}</div>
                        </div>
                    </div>

                    <h4 className={`text-xl font-bold mb-3 ${currentStyle.textPrimary}`}>
                        {post.title}
                    </h4>

                    <p className={`text-sm mb-4 ${currentStyle.textSecondary}`}>
                        {post.content}
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6">
                    <div className="mb-6">
                        <h5 className={`font-semibold mb-3 ${currentStyle.textPrimary}`}>Key Insights:</h5>
                        <ul className="space-y-2">
                            {post.insights.map((insight: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <div className={`w-1.5 h-1.5 rounded-full mt-2 ${currentStyle.linkedinColor}`} />
                                    <span className={`text-sm ${currentStyle.textSecondary}`}>{insight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                        onClick={() => window.open(post.actualUrl, '_blank')}
                        className={`w-full py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${currentStyle.buttonPrimary} mb-3`}
                    >
                        <Linkedin className="w-4 h-4" />
                        View Full Post on LinkedIn
                    </button>

                    <div className="flex gap-3">
                        <button
                            onClick={() => handleShare(post.actualUrl)}
                            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${theme === 'light'
                                ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                : 'border-gray-600 text-gray-300 hover:bg-gray-700/30'
                                }`}
                        >
                            Share
                        </button>
                        <button
                            onClick={() => window.open('https://www.linkedin.com/in/jinil-patel-5b13451a8', '_blank')}
                            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${theme === 'light'
                                ? 'border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2]/10'
                                : 'border-[#70B5F9] text-[#70B5F9] hover:bg-[#70B5F9]/10'
                                }`}
                        >
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <section className={`relative py-24 transition-colors duration-300 ${currentStyle.background}`}>
            <div className="absolute inset-0">
                <div className={`absolute inset-0 opacity-[0.02] ${theme === 'light'
                    ? 'bg-[linear-gradient(90deg,#e5e7eb_1px,transparent_1px),linear-gradient(180deg,#e5e7eb_1px,transparent_1px)]'
                    : 'bg-[linear-gradient(90deg,#4b5563_1px,transparent_1px),linear-gradient(180deg,#4b5563_1px,transparent_1px)]'
                    } bg-[size:40px_40px]`} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className={`w-12 h-px ${theme === 'light' ? 'bg-gray-900' : 'bg-white'}`} />
                        <Linkedin className={`w-6 h-6 ${currentStyle.linkedinColor}`} />
                        <span className={`text-sm font-medium tracking-widest uppercase ${currentStyle.textTertiary}`}>
                            LinkedIn Insights
                        </span>
                        <div className={`w-12 h-px ${theme === 'light' ? 'bg-gray-900' : 'bg-white'}`} />
                    </div>

                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 ${currentStyle.textPrimary}`}>
                        Business Fundamentals
                        <span className="block mt-3 font-normal">Across Industries</span>
                    </h2>

                    <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${currentStyle.textSecondary}`}>
                        How operational excellence in a pizza shop translates directly to
                        successful multifamily real estate management.
                    </p>
                </div>

                {/* Key Insights Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { icon: Users, title: 'People First', desc: 'Customer/resident experience is paramount' },
                        { icon: Target, title: 'Systems & Process', desc: 'Consistency through established procedures' },
                        { icon: TrendingUp, title: 'Team Culture', desc: 'Reduces turnover at all levels' },
                        { icon: Linkedin, title: 'LinkedIn Verified', desc: 'Authentic professional insight' }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className={`p-6 rounded-xl border ${currentStyle.border} ${currentStyle.cardBackground} text-center transition-all hover:shadow-md`}
                        >
                            <div className={`inline-flex p-3 rounded-lg mb-4 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'}`}>
                                <item.icon className={`w-6 h-6 ${currentStyle.linkedinColor}`} />
                            </div>
                            <h3 className={`font-medium mb-2 ${currentStyle.textPrimary}`}>{item.title}</h3>
                            <p className={`text-sm ${currentStyle.textSecondary}`}>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Infinite Carousel */}
                <div className="relative" ref={containerRef}>
                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-20 p-3 lg:p-4 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                        aria-label="Previous post"
                    >
                        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-gray-300" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-20 p-3 lg:p-4 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                        aria-label="Next post"
                    >
                        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-gray-300" />
                    </button>

                    {/* Carousel Container */}
                    <div className="overflow-hidden px-2 lg:px-0">
                        <div
                            className="flex transition-transform duration-500 ease-in-out gap-6"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
                            }}
                        >
                            {infinitePosts.map((post, index) => (
                                <div
                                    key={`${post.id}-${index}`}
                                    className="flex-shrink-0 transition-transform duration-300"
                                    style={{ width: `${100 / visibleCards}%` }}
                                >
                                    <div className="h-full px-2">
                                        {renderLinkedInPost(post, index)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Progress Indicators */}
                    <div className="flex justify-center mt-8 gap-2">
                        {Array.from({ length: realPostsCount }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className="focus:outline-none"
                                aria-label={`Go to position ${idx + 1}`}
                            >
                                <div className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex % realPostsCount
                                    ? `w-8 ${theme === 'light' ? 'bg-[#0A66C2]' : 'bg-[#70B5F9]'}`
                                    : `w-3 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'}`
                                    }`} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// Add global type for LinkedIn script loading
declare global {
    interface Window {
        linkedInLoaded?: boolean
    }
}

export default LinkedInCarousel