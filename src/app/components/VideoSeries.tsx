// components/VideoSeries.tsx
'use client'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { ExternalLink } from 'lucide-react'

const VideoSeries = () => {
    const { theme } = useTheme()
    const [currentIndex, setCurrentIndex] = useState(0)

    const videos = [
        {
            id: '4C85fOO1J1k',
            title: '48 Unit Apartment Deal',
            description: 'How Jinil bought a 48 unit apartment deal with $0 (and no experience)'
        },
        {
            id: 'SIYdjfd7q_U',
            title: 'From Pizzas to Properties',
            description: 'From Pizzas to Properties: How He Closed His 1st Deal, 48-Units'
        },
        {
            id: 'glHgSW0igAY',
            title: 'Multi-family Real Estate',
            description: '📢 Exciting Passive Opportunity in Multifamily Real Estate! 🏢✨ GP Focused Segment with Jinil Patel'
        }
    ]

    const currentVideo = videos[currentIndex]

    const styles = {
        light: {
            background: 'bg-white',
            textPrimary: 'text-gray-900',
            textSecondary: 'text-gray-600',
            border: 'border-gray-200',
            cardBackground: 'bg-white'
        },
        dark: {
            background: 'bg-gray-900',
            textPrimary: 'text-white',
            textSecondary: 'text-gray-300',
            border: 'border-gray-700',
            cardBackground: 'bg-gray-800'
        }
    }

    const currentStyle = styles[theme]

    return (
        <section className={`py-24 transition-colors duration-300 ${currentStyle.background}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-light mb-6 ${currentStyle.textPrimary}`}>
                        Video Insights
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${currentStyle.textSecondary}`}>
                        Professional real estate investment education and strategy videos.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Video Player */}
                    <div className={`rounded-2xl overflow-hidden border ${currentStyle.border} shadow-lg`}>
                        <div className="relative aspect-video bg-black">
                            <iframe
                                src={`https://www.youtube.com/embed/${currentVideo.id}?rel=0&modestbranding=1&controls=1&showinfo=0`}
                                title={currentVideo.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className={`text-sm ${currentStyle.textSecondary}`}>
                                    Video {currentIndex + 1} of {videos.length}
                                </span>
                                <a
                                    href={`https://youtu.be/${currentVideo.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-sm flex items-center gap-2 ${currentStyle.textSecondary} hover:${currentStyle.textPrimary}`}
                                >
                                    Open in YouTube
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>

                            <h3 className={`text-xl font-medium mb-3 ${currentStyle.textPrimary}`}>
                                {currentVideo.title}
                            </h3>
                            <p className={`${currentStyle.textSecondary}`}>
                                {currentVideo.description}
                            </p>
                        </div>
                    </div>

                    {/* Video Selector */}
                    <div>
                        <h3 className={`text-lg font-medium mb-6 ${currentStyle.textPrimary}`}>
                            Select Video
                        </h3>
                        <div className="space-y-4">
                            {videos.map((video, idx) => (
                                <button
                                    key={video.id}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-full text-left p-6 rounded-xl border transition-all ${idx === currentIndex
                                        ? `${currentStyle.border} ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'}`
                                        : `${currentStyle.border} ${theme === 'light' ? 'hover:bg-gray-50' : 'hover:bg-gray-800'}`
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${idx === currentIndex
                                            ? (theme === 'light' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900')
                                            : (theme === 'light' ? 'bg-gray-100 text-gray-600' : 'bg-gray-700 text-gray-300')
                                            }`}>
                                            <span className="font-medium">{idx + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className={`font-medium ${currentStyle.textPrimary}`}>
                                                {video.title}
                                            </h4>
                                            <p className={`text-sm mt-2 ${currentStyle.textSecondary}`}>
                                                {video.description}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSeries