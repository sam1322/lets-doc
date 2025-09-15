// components/contact-us-section.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
// import { useToast } from '@/hooks/use-toast'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

interface FormData {
    fullName: string
    contactNumber: string
    email: string
    city: string
}

interface FormErrors {
    fullName?: string
    contactNumber?: string
    email?: string
    city?: string
}

export function ContactUsSection() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        contactNumber: '',
        email: '',
        city: ''
    })
    const [errors, setErrors] = useState<FormErrors>({})
    //   const { toast } = useToast()
    const { width, height } = useWindowSize()

    // Stop confetti after 5 seconds
    useEffect(() => {
        if (showConfetti) {
            const timer = setTimeout(() => {
                setShowConfetti(false)
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [showConfetti])

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required'
        }

        if (!formData.contactNumber.trim()) {
            newErrors.contactNumber = 'Contact number is required'
        } else if (!/^\+?[\d\s-()]+$/.test(formData.contactNumber)) {
            newErrors.contactNumber = 'Please enter a valid contact number'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        if (!formData.city.trim()) {
            newErrors.city = 'City is required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const resetForm = () => {
        setIsSubmitted(false)
        setShowConfetti(false)
        setFormData({
            fullName: '',
            contactNumber: '',
            email: '',
            city: ''
        })
        setErrors({})
    }


    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsLoading(true)

        try {
            // Simulate API call
            //   await new Promise(resolve => setTimeout(resolve, 2000))

            // Here you would typically send the data to your API
            console.log('Form submitted:', formData)

            setIsSubmitted(true)
            setShowConfetti(true) // Trigger confetti
            setTimeout(resetForm, 3000)
            //   toast({
            //     title: "Success!",
            //     description: "Your request has been submitted successfully.",
            //   })
        } catch (error) {
            //   toast({
            //     title: "Error",
            //     description: "Something went wrong. Please try again.",
            //     variant: "destructive",
            //   })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 relative">
            {/* Confetti Animation */}
            {showConfetti && (
                <Confetti
                    width={width}
                    height={height}
                    recycle={false}
                    numberOfPieces={300}
                    gravity={0.3}
                    colors={['#10b981', '#059669', '#047857', '#065f46', '#fbbf24', '#f59e0b']}
                />
            )}

            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <Card className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative z-10">
                        {!isSubmitted ? (
                            // Form State
                            <>
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Ready to Transform Your Clinic?
                                    </h2>
                                    <p className="text-gray-600 text-lg">
                                        Get a personalized demo and see how Udeti can revolutionize your practice
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Full Name */}
                                        <div className="space-y-2">
                                            <Label htmlFor="fullName" className="text-gray-700 font-medium">
                                                Full Name
                                            </Label>
                                            <Input
                                                id="fullName"
                                                type="text"
                                                placeholder="Dr. Your Name"
                                                value={formData.fullName}
                                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                                                className={`h-12 ${errors.fullName ? 'border-red-500' : ''}`}
                                            />
                                            {errors.fullName && (
                                                <p className="text-red-500 text-sm">{errors.fullName}</p>
                                            )}
                                        </div>

                                        {/* Contact Number */}
                                        <div className="space-y-2">
                                            <Label htmlFor="contactNumber" className="text-gray-700 font-medium">
                                                Contact Number
                                            </Label>
                                            <Input
                                                id="contactNumber"
                                                type="tel"
                                                placeholder="+91"
                                                value={formData.contactNumber}
                                                onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                                                className={`h-12 ${errors.contactNumber ? 'border-red-500' : ''}`}
                                            />
                                            {errors.contactNumber && (
                                                <p className="text-red-500 text-sm">{errors.contactNumber}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Email Address */}
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-gray-700 font-medium">
                                                Email Address
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="doctor@clinic.com"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                className={`h-12 ${errors.email ? 'border-red-500' : ''}`}
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm">{errors.email}</p>
                                            )}
                                        </div>

                                        {/* City */}
                                        <div className="space-y-2">
                                            <Label htmlFor="city" className="text-gray-700 font-medium">
                                                City
                                            </Label>
                                            <Input
                                                id="city"
                                                type="text"
                                                placeholder="Mumbai"
                                                value={formData.city}
                                                onChange={(e) => handleInputChange('city', e.target.value)}
                                                className={`h-12 ${errors.city ? 'border-red-500' : ''}`}
                                            />
                                            {errors.city && (
                                                <p className="text-red-500 text-sm">{errors.city}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full h-14 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold text-lg rounded-lg transition-all duration-200"
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Submitting...
                                            </div>
                                        ) : (
                                            'Request Callback'
                                        )}
                                    </Button>
                                </form>
                            </>
                        ) : (
                            // Success State with Animation
                            <div className="text-center py-8">
                                <div className="mb-8">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Ready to Transform Your Clinic?
                                    </h2>
                                    <p className="text-gray-600 text-lg mb-8">
                                        Get a personalized demo and see how Udeti can revolutionize your practice
                                    </p>
                                </div>

                                {/* Success Message with Animation */}
                                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8 border border-emerald-200 animate-in slide-in-from-bottom-4 duration-700">
                                    <div className="flex items-center justify-center gap-3 mb-6">
                                        <div className="relative">
                                            <span className="text-4xl animate-bounce">🎉</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-emerald-700 animate-in slide-in-from-right-4 duration-1000">
                                            Thank you for your interest!
                                        </h3>
                                    </div>

                                    <div className="space-y-4 animate-in fade-in duration-1000 delay-300">
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Expect a callback from our team within <span className="font-semibold text-emerald-600">24-48 hours</span>.
                                        </p>
                                        <p className="text-gray-700 text-lg">
                                            We're excited to help transform your clinic!
                                            <span className="inline-block ml-1 animate-pulse">✨</span>
                                        </p>
                                    </div>

                                    {/* Additional celebratory elements */}
                                    <div className="flex justify-center gap-2 mt-6">
                                        <span className="text-2xl animate-bounce delay-100">🚀</span>
                                        <span className="text-2xl animate-bounce delay-200">💫</span>
                                        <span className="text-2xl animate-bounce delay-300">🌟</span>
                                    </div>
                                </div>

                                <Button
                                    onClick={resetForm}
                                    variant="outline"
                                    className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 transition-all duration-200"
                                >
                                    Submit Another Request
                                </Button>
                            </div>
                        )}
                    </Card>
                </div>
            </div>
        </section>
    )
}