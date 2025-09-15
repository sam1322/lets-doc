// components/header.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
    return (
        <header className="bg-emerald-600 text-white">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="text-2xl font-bold text-emerald-200">
                            LetsDoc
                        </div>
                        <div className="w-6 h-6 bg-yellow-400 rounded transform rotate-12"></div>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/solution" className="hover:text-emerald-200 transition-colors">
                            Solution
                        </Link>
                        <Link href="/why-udeti" className="hover:text-emerald-200 transition-colors">
                            Why Udeti
                        </Link>
                        <Link href="/pricing" className="hover:text-emerald-200 transition-colors">
                            Pricing
                        </Link>
                        <Link href="/contact" className="hover:text-emerald-200 transition-colors">
                            Contact Us
                        </Link>
                        <Link href="/about" className="hover:text-emerald-200 transition-colors">
                            About Us
                        </Link>
                        <Link href="/testimonials" className="hover:text-emerald-200 transition-colors">
                            Testimonials
                        </Link>
                        <Button variant="secondary" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-none">
                            Login
                        </Button>
                        <Button variant="secondary" size="sm" className="bg-emerald-400 hover:bg-emerald-500 text-emerald-900 border-none">
                            Request Demo
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}