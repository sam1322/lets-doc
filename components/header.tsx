// components/header.tsx
'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import LetsGoLogo from "@/public/letsdoc-logo.png"
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className="bg-emerald-600 text-white sticky top-0 z-30">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Image src={LetsGoLogo.src} alt="logo" width={300} height={300} className='max-w-[120px]'/>

                    {/* Desktop Navigation */}
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

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden p-2 rounded-lg hover:bg-emerald-700 transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-emerald-600 z-40">
                    <div className="container mx-auto px-4 py-4">
                        {/* Mobile Header with Logo and Close Button */}
                        <div className="flex items-center justify-between mb-8">
                            <Image src={LetsGoLogo.src} alt="logo" width={300} height={300} className='max-w-[120px]'/>
                            <button 
                                className="p-2 rounded-lg hover:bg-emerald-700 transition-colors"
                                onClick={closeMenu}
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Mobile Navigation */}
                        <nav className="flex flex-col space-y-6">
                            <Link 
                                href="/solution" 
                                className="text-lg font-medium hover:text-emerald-200 transition-colors py-2"
                                onClick={closeMenu}
                            >
                                Solution
                            </Link>
                            <Link 
                                href="/why-udeti" 
                                className="text-lg font-medium hover:text-emerald-200 transition-colors py-2"
                                onClick={closeMenu}
                            >
                                Why Udeti
                            </Link>
                            <Link 
                                href="/pricing" 
                                className="text-lg font-medium hover:text-emerald-200 transition-colors py-2"
                                onClick={closeMenu}
                            >
                                Pricing
                            </Link>
                            <Link 
                                href="/contact" 
                                className="text-lg font-medium hover:text-emerald-200 transition-colors py-2"
                                onClick={closeMenu}
                            >
                                Contact Us
                            </Link>
                            <Link 
                                href="/about" 
                                className="text-lg font-medium hover:text-emerald-200 transition-colors py-2"
                                onClick={closeMenu}
                            >
                                About Us
                            </Link>
                            <Link 
                                href="/testimonials" 
                                className="text-lg font-medium hover:text-emerald-200 transition-colors py-2"
                                onClick={closeMenu}
                            >
                                Testimonials
                            </Link>
                            
                            {/* Mobile Buttons */}
                            <div className="pt-6 space-y-4">
                                <Button 
                                    variant="secondary" 
                                    size="lg" 
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none text-lg py-3"
                                    onClick={closeMenu}
                                >
                                    Login
                                </Button>
                                <Button 
                                    variant="secondary" 
                                    size="lg" 
                                    className="w-full bg-white hover:bg-gray-100 text-emerald-600 border-none text-lg py-3 font-medium"
                                    onClick={closeMenu}
                                >
                                    Request Demo
                                </Button>
                                <p className="text-sm text-emerald-200 text-center mt-4">
                                    Billed monthly
                                </p>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}