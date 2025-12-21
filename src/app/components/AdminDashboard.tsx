// components/AdminFloatingButton.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, X, Mail, Phone, Clock, Download, Trash2 } from 'lucide-react'
import { useTheme } from '../context/ThemeContext' // Adjust path as needed

interface Consultation {
    id: number
    name: string
    email: string
    phone: string
    investmentType: string
    message: string
    timestamp: string
    status: 'pending' | 'contacted' | 'scheduled' | 'completed'
}

const AdminFloatingButton = () => {
    const { theme } = useTheme()
    const [isDashboardOpen, setIsDashboardOpen] = useState(false)
    const [consultations, setConsultations] = useState<Consultation[]>([])
    const [selectedStatus, setSelectedStatus] = useState<string>('all')

    // Load consultations from localStorage on mount
    useEffect(() => {
        const savedConsultations = JSON.parse(localStorage.getItem('consultations') || '[]')
        setConsultations(savedConsultations)
    }, [])

    // Refresh consultations when dashboard opens
    useEffect(() => {
        if (isDashboardOpen) {
            const savedConsultations = JSON.parse(localStorage.getItem('consultations') || '[]')
            setConsultations(savedConsultations)
        }
    }, [isDashboardOpen])

    const deleteConsultation = (id: number) => {
        const updated = consultations.filter(c => c.id !== id)
        setConsultations(updated)
        localStorage.setItem('consultations', JSON.stringify(updated))
    }

    const updateStatus = (id: number, status: Consultation['status']) => {
        const updated = consultations.map(c =>
            c.id === id ? { ...c, status } : c
        )
        setConsultations(updated)
        localStorage.setItem('consultations', JSON.stringify(updated))
    }

    const exportData = () => {
        const dataStr = JSON.stringify(consultations, null, 2)
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr)
        const exportFileDefaultName = `consultations-${new Date().toISOString().split('T')[0]}.json`

        const linkElement = document.createElement('a')
        linkElement.setAttribute('href', dataUri)
        linkElement.setAttribute('download', exportFileDefaultName)
        linkElement.click()
    }

    const clearAllData = () => {
        if (confirm('Are you sure you want to delete ALL consultation data? This cannot be undone.')) {
            localStorage.removeItem('consultations')
            setConsultations([])
        }
    }

    const filteredConsultations = selectedStatus === 'all'
        ? consultations
        : consultations.filter(c => c.status === selectedStatus)

    const stats = {
        total: consultations.length,
        pending: consultations.filter(c => c.status === 'pending').length,
        contacted: consultations.filter(c => c.status === 'contacted').length,
        scheduled: consultations.filter(c => c.status === 'scheduled').length,
        completed: consultations.filter(c => c.status === 'completed').length,
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return theme === 'dark' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-800'
            case 'contacted': return theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-800'
            case 'scheduled': return theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-800'
            case 'completed': return theme === 'dark' ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-800'
            default: return theme === 'dark' ? 'bg-gray-500/20 text-gray-400' : 'bg-gray-100 text-gray-800'
        }
    }

    // Theme-based styles
    const themeStyles = {
        backdrop: theme === 'dark' ? 'bg-black/70' : 'bg-black/50',
        panel: theme === 'dark'
            ? 'bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800'
            : 'bg-gradient-to-br from-white to-gray-50 border-gray-200',
        header: theme === 'dark' ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200',
        text: {
            primary: theme === 'dark' ? 'text-white' : 'text-gray-900',
            secondary: theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
            muted: theme === 'dark' ? 'text-gray-500' : 'text-gray-500',
        },
        button: {
            default: theme === 'dark'
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900',
            danger: theme === 'dark'
                ? 'bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300'
                : 'bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-700',
        },
        card: theme === 'dark'
            ? 'bg-gray-800/30 border-gray-800/50 hover:border-gray-700'
            : 'bg-white/80 border-gray-200/80 hover:border-gray-300',
        statCard: theme === 'dark'
            ? 'bg-gray-800/50'
            : 'bg-gray-100/80',
        input: theme === 'dark'
            ? 'bg-gray-800/50 border-gray-700 text-white focus:ring-blue-500'
            : 'bg-white/50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500',
        footer: theme === 'dark'
            ? 'bg-gray-900/50 border-gray-800'
            : 'bg-gray-50/80 border-gray-200',
    }

    return (
        <>
            {/* Floating Admin Button - Always visible at bottom-right */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                onClick={() => setIsDashboardOpen(true)}
                className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group"
                title="Admin Dashboard"
            >
                <div className="relative">
                    <Users className="w-6 h-6" />
                    {consultations.length > 0 && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-4 -right-6 w-6 h-6 z-41 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold"
                        >
                            {consultations.length > 99 ? '99+' : consultations.length}
                        </motion.div>
                    )}
                </div>
                <div className={`absolute -bottom-12 right-0 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-800'} text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none`}>
                    Admin Dashboard ({consultations.length} requests)
                </div>
            </motion.button>

            {/* Dashboard Modal */}
            <AnimatePresence>
                {isDashboardOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsDashboardOpen(false)}
                            className={`fixed inset-0 ${themeStyles.backdrop} backdrop-blur-sm z-50`}
                        />

                        {/* Dashboard Panel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 100 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.9, x: 100 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className={`fixed top-4 right-4 bottom-4 w-[95vw] max-w-4xl rounded-2xl shadow-2xl border overflow-hidden z-50 flex flex-col ${themeStyles.panel}`}
                        >
                            {/* Header */}
                            <div className={`p-6 border-b ${themeStyles.header}`}>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20' : 'bg-gradient-to-br from-blue-100 to-cyan-100'}`}>
                                            <Users className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                                        </div>
                                        <div>
                                            <h2 className={`text-2xl font-light ${themeStyles.text.primary}`}>
                                                Consultation Dashboard
                                            </h2>
                                            <p className={themeStyles.text.secondary}>
                                                Real-time lead tracking & management
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={exportData}
                                            className={`p-2.5 rounded-lg transition-colors ${themeStyles.button.default}`}
                                            title="Export data"
                                        >
                                            <Download className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={clearAllData}
                                            className={`p-2.5 rounded-lg transition-colors ${themeStyles.button.danger}`}
                                            title="Clear all data"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => setIsDashboardOpen(false)}
                                            className={`p-2.5 rounded-lg transition-colors ${themeStyles.button.default}`}
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                                    <div className={`p-4 rounded-xl text-center ${themeStyles.statCard}`}>
                                        <div className={`text-3xl font-light ${themeStyles.text.primary} mb-1`}>{stats.total}</div>
                                        <div className={themeStyles.text.secondary}>Total Requests</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-yellow-500/10 text-center">
                                        <div className="text-3xl font-light text-yellow-600 dark:text-yellow-400 mb-1">{stats.pending}</div>
                                        <div className="text-yellow-600/80 dark:text-yellow-400/80">Pending</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-blue-500/10 text-center">
                                        <div className="text-3xl font-light text-blue-600 dark:text-blue-400 mb-1">{stats.contacted}</div>
                                        <div className="text-blue-600/80 dark:text-blue-400/80">Contacted</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-green-500/10 text-center">
                                        <div className="text-3xl font-light text-green-600 dark:text-green-400 mb-1">{stats.scheduled}</div>
                                        <div className="text-green-600/80 dark:text-green-400/80">Scheduled</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-purple-500/10 text-center">
                                        <div className="text-3xl font-light text-purple-600 dark:text-purple-400 mb-1">{stats.completed}</div>
                                        <div className="text-purple-600/80 dark:text-purple-400/80">Completed</div>
                                    </div>
                                </div>

                                {/* Filters & Controls */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <select
                                        value={selectedStatus}
                                        onChange={(e) => setSelectedStatus(e.target.value)}
                                        className={`flex-1 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ${themeStyles.input}`}
                                    >
                                        <option value="all">All Statuses</option>
                                        <option value="pending">Pending</option>
                                        <option value="contacted">Contacted</option>
                                        <option value="scheduled">Scheduled</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setConsultations(JSON.parse(localStorage.getItem('consultations') || '[]'))}
                                            className={`px-4 py-3 rounded-xl transition-colors ${themeStyles.button.default}`}
                                        >
                                            Refresh
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Consultations List */}
                            <div className="flex-1 overflow-y-auto">
                                {filteredConsultations.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-full p-8">
                                        <Users className="w-16 h-16 text-gray-300 dark:text-gray-700 mb-6" />
                                        <h3 className={`text-xl font-light mb-2 ${themeStyles.text.muted}`}>
                                            No consultation requests yet
                                        </h3>
                                        <p className={`text-center max-w-md ${themeStyles.text.muted}`}>
                                            When users submit consultation requests through the website,
                                            they will appear here for management.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="p-6 space-y-4">
                                        {filteredConsultations.map((consultation) => (
                                            <motion.div
                                                key={consultation.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className={`p-5 rounded-xl border transition-all ${themeStyles.card}`}
                                            >
                                                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                                                    <div className="flex-1">
                                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                                            <span className={`text-lg font-medium ${themeStyles.text.primary}`}>
                                                                {consultation.name}
                                                            </span>
                                                            <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${getStatusColor(consultation.status)}`}>
                                                                {consultation.status.charAt(0).toUpperCase() + consultation.status.slice(1)}
                                                            </span>
                                                            <span className={`text-sm ${themeStyles.text.secondary} capitalize`}>
                                                                {consultation.investmentType.replace('-', ' ')}
                                                            </span>
                                                        </div>

                                                        <div className="flex flex-wrap gap-4 text-sm">
                                                            <div className="flex items-center gap-2">
                                                                <Mail className={`w-4 h-4 ${themeStyles.text.muted}`} />
                                                                <span className={themeStyles.text.primary}>{consultation.email}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Phone className={`w-4 h-4 ${themeStyles.text.muted}`} />
                                                                <span className={themeStyles.text.primary}>{consultation.phone}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Clock className={`w-4 h-4 ${themeStyles.text.muted}`} />
                                                                <span className={themeStyles.text.secondary}>
                                                                    {new Date(consultation.timestamp).toLocaleDateString()} •{' '}
                                                                    {new Date(consultation.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => deleteConsultation(consultation.id)}
                                                            className="p-2.5 rounded-lg hover:bg-red-500/20 text-gray-500 hover:text-red-400 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                                                            title="Delete"
                                                        >
                                                            <Trash2 className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {consultation.message && (
                                                    <div className="mb-4">
                                                        <p className={`text-sm leading-relaxed ${themeStyles.text.secondary}`}>
                                                            {consultation.message}
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Status Actions */}
                                                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-800/50">
                                                    <button
                                                        onClick={() => updateStatus(consultation.id, 'pending')}
                                                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${consultation.status === 'pending'
                                                            ? 'bg-yellow-500 text-white'
                                                            : theme === 'dark'
                                                                ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                            }`}
                                                    >
                                                        Pending
                                                    </button>
                                                    <button
                                                        onClick={() => updateStatus(consultation.id, 'contacted')}
                                                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${consultation.status === 'contacted'
                                                            ? 'bg-blue-500 text-white'
                                                            : theme === 'dark'
                                                                ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                            }`}
                                                    >
                                                        Contacted
                                                    </button>
                                                    <button
                                                        onClick={() => updateStatus(consultation.id, 'scheduled')}
                                                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${consultation.status === 'scheduled'
                                                            ? 'bg-green-500 text-white'
                                                            : theme === 'dark'
                                                                ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                            }`}
                                                    >
                                                        Scheduled
                                                    </button>
                                                    <button
                                                        onClick={() => updateStatus(consultation.id, 'completed')}
                                                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${consultation.status === 'completed'
                                                            ? 'bg-purple-500 text-white'
                                                            : theme === 'dark'
                                                                ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                            }`}
                                                    >
                                                        Completed
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className={`p-4 border-t ${themeStyles.footer}`}>
                                <div className={`flex items-center justify-between text-sm ${themeStyles.text.muted}`}>
                                    <div className="flex items-center gap-4">
                                        <span>Auto-saved to browser storage</span>
                                        <span className="hidden sm:inline">•</span>
                                        <span className="hidden sm:inline">Data persists across page refreshes</span>
                                    </div>
                                    <div className="text-right">
                                        <span className={`font-medium ${themeStyles.text.primary}`}>{consultations.length}</span>
                                        <span className="ml-1">total requests</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default AdminFloatingButton