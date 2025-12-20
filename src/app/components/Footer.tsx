//Footer.tsx
import Link from 'next/link'
// import Image from 'next/image'
import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
    const links = [
        {
            title: "Investments",
            items: [
                { name: "Private Equity", href: "#" },
                { name: "Real Estate", href: "#" },
                { name: "Credit Strategies", href: "#" },
                { name: "Hedge Funds", href: "#" }
            ]
        },
        {
            title: "Company",
            items: [
                { name: "About Us", href: "#about" },
                { name: "Leadership", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Newsroom", href: "#" }
            ]
        },
        {
            title: "Resources",
            items: [
                { name: "Insights", href: "#" },
                { name: "Research", href: "#" },
                { name: "Calculators", href: "#" },
                { name: "Glossary", href: "#" }
            ]
        },
        {
            title: "Legal",
            items: [
                { name: "Disclosures", href: "#" },
                { name: "Form ADV", href: "#" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Use", href: "#" }
            ]
        }
    ]

    const socialMedia = [
        {
            icon: <Linkedin className="w-5 h-5" />,
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/jinil-patel-5b13451a8/"
        },
        {
            icon: <Twitter className="w-5 h-5" />,
            name: "Twitter",
            href: ""
        },
        {
            icon: <Instagram className="w-5 h-5" />,
            name: "Instagram",
            href: ""
        },
        {
            icon: <Youtube className="w-5 h-5" />,
            name: "YouTube",
            href: ""
        }
    ]

    return (
        <footer className="pt-20 pb-12 border-t" style={{
            backgroundColor: 'var(--background)',
            borderColor: 'var(--border)'
        }}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                                <img
                                    src="/assets/logo.jpg"
                                    alt="Rising Capital Logo"
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                            <span className="font-bold text-xl" style={{ color: 'var(--foreground)' }}>RISING CAPITAL</span>
                        </div>
                        <p className="mb-6 max-w-md" style={{ color: 'var(--foreground)' }}>
                            A premier investment firm providing institutional-quality strategies
                            to sophisticated investors and family offices worldwide.
                        </p>

                        <div className="mb-8">
                            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                                Connect With Us
                            </h4>
                            <div className="flex space-x-4">
                                {socialMedia.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full hover:bg-accent/10 transition-colors flex items-center justify-center"
                                        style={{ color: 'var(--foreground)', backgroundColor: 'var(--card-bg)' }} aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4" style={{ color: 'var(--foreground)' }}>
                                Contact
                            </h4>
                            <address className="not-italic space-y-2" style={{ color: 'var(--foreground)' }}>
                                <p className="text-gray-300" style={{ color: 'var(--foreground)' }}>1007 Mountain Drive</p>
                                <p className="text-gray-300" style={{ color: 'var(--foreground)' }}>Bristol Township, Gotham City</p>
                                <p className="text-gray-300" style={{ color: 'var(--foreground)' }}>+91 9876543210</p>
                                <a
                                    href="mailto:investorrelations@risingcapital.com"
                                    className="hover:text-accent transition-colors" style={{ color: 'var(--foreground)' }}
                                >
                                    rcinvestors@risingcapital.com
                                </a>
                            </address>
                        </div>
                    </div>

                    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {links.map((section) => (
                            <div key={section.title}>
                                <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-4" style={{ color: 'var(--foreground)' }}>
                                    {section.title}
                                </h3>
                                <ul className="space-y-3">
                                    {section.items.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-gray-400 hover:text-white transition-colors" style={{ color: 'var(--foreground)' }}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-t border-gray-800 my-10"></div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500 mb-4 md:mb-0">
                        © {new Date().getFullYear()} Rising Capital Management LLC. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                            Disclosures
                        </Link>
                        <Link href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                            Business Continuity
                        </Link>
                        <Link href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                            Regulatory Information
                        </Link>
                    </div>
                </div>

                <div className="mt-8 text-xs text-gray-600">
                    <p className="mb-2">
                        Rising Capital Management LLC is a registered investment adviser.
                        Registration does not imply a certain level of skill or training.
                    </p>
                    <p>
                        Past performance is no guarantee of future results. Investing involves risk,
                        including possible loss of principal.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer