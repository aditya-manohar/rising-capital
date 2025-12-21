// components/ConsultationModal.tsx - Updated with theme support
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Mail, User, Phone, CheckCircle } from 'lucide-react'
import { useTheme } from '../context/ThemeContext' // Add this import

interface ConsultationModalProps {
    isOpen: boolean
    onClose: () => void
}

interface FormData {
    name: string
    email: string
    phone: string
    investmentType: string
    message: string
}

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
    const { theme } = useTheme() // Add this hook
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        investmentType: 'multifamily',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    // Theme-based styles
    const modalStyles = {
        light: {
            background: 'bg-gradient-to-br from-white to-gray-50',
            border: 'border-gray-200',
            textPrimary: 'text-gray-900',
            textSecondary: 'text-gray-600',
            textTertiary: 'text-gray-500',
            inputBackground: 'bg-gray-100',
            inputBorder: 'border-gray-300',
            inputText: 'text-gray-900',
            placeholder: 'placeholder-gray-500',
            successBackground: 'bg-green-500/20',
            successText: 'text-green-600',
            accent: 'text-blue-600',
            accentBorder: 'border-blue-600',
            buttonBackground: 'bg-gradient-to-r from-blue-600 to-cyan-500',
            buttonHover: 'hover:from-blue-700 hover:to-cyan-600',
            closeButton: 'bg-gray-200 hover:bg-gray-300 text-gray-700'
        },
        dark: {
            background: 'bg-gradient-to-br from-gray-900 to-gray-950',
            border: 'border-gray-800',
            textPrimary: 'text-white',
            textSecondary: 'text-gray-300',
            textTertiary: 'text-gray-400',
            inputBackground: 'bg-gray-800/50',
            inputBorder: 'border-gray-700',
            inputText: 'text-white',
            placeholder: 'placeholder-gray-500',
            successBackground: 'bg-green-500/20',
            successText: 'text-green-400',
            accent: 'text-blue-400',
            accentBorder: 'border-blue-400',
            buttonBackground: 'bg-gradient-to-r from-blue-600 to-cyan-500',
            buttonHover: 'hover:from-blue-700 hover:to-cyan-600',
            closeButton: 'bg-gray-800/50 hover:bg-gray-800 text-gray-400 hover:text-white'
        }
    }

    const currentStyle = modalStyles[theme]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        setTimeout(() => {
            // Save to localStorage
            const existingConsultations = JSON.parse(localStorage.getItem('consultations') || '[]')
            const newConsultation = {
                ...formData,
                id: Date.now(),
                timestamp: new Date().toISOString(),
                status: 'pending'
            }
            localStorage.setItem('consultations', JSON.stringify([...existingConsultations, newConsultation]))

            setIsSubmitting(false)
            setIsSuccess(true)

            // Reset form after success
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    investmentType: 'multifamily',
                    message: ''
                })
                setIsSuccess(false)
                onClose()
            }, 2000)
        }, 1500)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className={`relative w-full max-w-2xl rounded-2xl shadow-2xl border overflow-hidden pointer-events-auto ${currentStyle.background} ${currentStyle.border}`}
                        >
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className={`absolute top-4 right-4 p-2 rounded-full transition-colors z-10 ${currentStyle.closeButton}`}
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Success state */}
                            {isSuccess ? (
                                <div className="p-8 sm:p-12 text-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${currentStyle.successBackground}`}
                                    >
                                        <CheckCircle className={`w-10 h-10 ${currentStyle.successText}`} />
                                    </motion.div>
                                    <h3 className={`text-2xl font-light mb-4 ${currentStyle.textPrimary}`}>
                                        Consultation Requested Successfully!
                                    </h3>
                                    <p className={currentStyle.textSecondary}>
                                        Our investment team will contact you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    {/* Header */}
                                    <div className="p-8 pb-0">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`p-3 rounded-xl ${theme === 'light' ? 'bg-blue-100' : 'bg-blue-500/20'}`}>
                                                <Calendar className={`w-6 h-6 ${currentStyle.accent}`} />
                                            </div>
                                            <div>
                                                <h2 className={`text-2xl font-light ${currentStyle.textPrimary}`}>
                                                    Schedule Consultation
                                                </h2>
                                                <p className={`text-sm ${currentStyle.textSecondary}`}>
                                                    Connect with our investment advisors
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={handleSubmit} className="p-8 pt-6 space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Name */}
                                            <div className="space-y-2">
                                                <label className={`flex items-center gap-2 text-sm ${currentStyle.textTertiary}`}>
                                                    <User className="w-4 h-4" />
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${currentStyle.inputBackground} ${currentStyle.inputBorder} ${currentStyle.inputText} ${currentStyle.placeholder}`}
                                                    placeholder="John Smith"
                                                />
                                            </div>

                                            {/* Email */}
                                            <div className="space-y-2">
                                                <label className={`flex items-center gap-2 text-sm ${currentStyle.textTertiary}`}>
                                                    <Mail className="w-4 h-4" />
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${currentStyle.inputBackground} ${currentStyle.inputBorder} ${currentStyle.inputText} ${currentStyle.placeholder}`}
                                                    placeholder="john@example.com"
                                                />
                                            </div>

                                            {/* Phone */}
                                            <div className="space-y-2">
                                                <label className={`flex items-center gap-2 text-sm ${currentStyle.textTertiary}`}>
                                                    <Phone className="w-4 h-4" />
                                                    Phone Number *
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${currentStyle.inputBackground} ${currentStyle.inputBorder} ${currentStyle.inputText} ${currentStyle.placeholder}`}
                                                    placeholder="+1 (555) 123-4567"
                                                />
                                            </div>

                                            {/* Investment Type */}
                                            <div className="space-y-2">
                                                <label className={`text-sm ${currentStyle.textTertiary}`}>
                                                    Preferred Investment Type
                                                </label>
                                                <select
                                                    name="investmentType"
                                                    value={formData.investmentType}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none ${currentStyle.inputBackground} ${currentStyle.inputBorder} ${currentStyle.inputText}`}
                                                >
                                                    <option value="multifamily">Multifamily Properties</option>
                                                    <option value="commercial">Commercial Real Estate</option>
                                                    <option value="residential">Residential Development</option>
                                                    <option value="mixed-use">Mixed-Use Properties</option>
                                                    <option value="all">All Investment Types</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-2">
                                            <label className={`text-sm ${currentStyle.textTertiary}`}>
                                                Additional Notes or Questions
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={3}
                                                className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${currentStyle.inputBackground} ${currentStyle.inputBorder} ${currentStyle.inputText} ${currentStyle.placeholder}`}
                                                placeholder="Tell us about your investment goals, timeline, or any specific questions..."
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 ${currentStyle.buttonBackground} ${currentStyle.buttonHover} text-white`}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Processing Request...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Calendar className="w-5 h-5" />
                                                        Schedule Consultation
                                                    </>
                                                )}
                                            </button>
                                            <p className={`text-xs text-center mt-3 ${currentStyle.textTertiary}`}>
                                                By submitting, you agree to our Privacy Policy
                                            </p>
                                        </div>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}

export default ConsultationModal