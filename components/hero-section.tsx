// // // // components/hero-section.tsx
// // // import { Check } from 'lucide-react'
// // // import { Button } from '@/components/ui/button'
// // // import { Card } from '@/components/ui/card'

// // // export function HeroSection() {
// // //   return (
// // //     <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
// // //       <div className="container mx-auto px-4">
// // //         {/* Title and Subtitle */}
// // //         <div className="text-center mb-16">
// // //           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
// // //             The Udeti Solution
// // //           </h1>
// // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // //             Comprehensive digital transformation for your healthcare practice
// // //           </p>
// // //         </div>

// // //         {/* Main Content */}
// // //         <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
// // //           {/* Left Side - Doctor Booking Interface */}
// // //           <div className="relative">
// // //             <Card className="bg-blue-600 text-white p-8 rounded-2xl overflow-hidden">
// // //               <div className="relative z-10">
// // //                 <h2 className="text-3xl font-bold mb-2">
// // //                   Book Your Doctor
// // //                 </h2>
// // //                 <h3 className="text-3xl font-bold mb-4">
// // //                   Appointment
// // //                 </h3>
// // //                 <h3 className="text-3xl font-bold mb-6">
// // //                   Online.
// // //                 </h3>
// // //                 <p className="text-blue-100 mb-6 max-w-md">
// // //                   A Platform To Meeting, Branding, Business And Team Work 
// // //                   By Video Call Now It's Just Easy And Professional Solution
// // //                 </p>
// // //                 <div className="flex gap-4">
// // //                   <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
// // //                     Book an Appointment
// // //                   </Button>
// // //                   <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
// // //                     Get Start Now
// // //                   </Button>
// // //                 </div>
// // //               </div>

// // //               {/* Doctor Image - You'll need to replace with actual image */}
// // //               <div className="absolute right-0 top-0 bottom-0 w-1/2">
// // //                 <div className="w-full h-full bg-gradient-to-l from-transparent to-blue-600/20 flex items-center justify-end pr-8">
// // //                   {/* Placeholder for doctor image */}
// // //                   <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
// // //                     <span className="text-white/60">Doctor Image</span>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Bottom Navigation */}
// // //               <div className="absolute bottom-4 left-8 right-8 flex items-center justify-between">
// // //                 <div className="flex items-center gap-2 text-sm text-blue-100">
// // //                   <span>Select Service Type</span>
// // //                 </div>
// // //                 <Button size="sm" className="bg-blue-500 hover:bg-blue-400">
// // //                   Search
// // //                 </Button>
// // //               </div>
// // //             </Card>
// // //           </div>

// // //           {/* Right Side - Features */}
// // //           <div>
// // //             <div className="flex items-center gap-3 mb-8">
// // //               <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
// // //                 <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
// // //               </div>
// // //               <h2 className="text-3xl font-bold text-gray-900">
// // //                 Improving Clinic Reach
// // //               </h2>
// // //             </div>

// // //             <div className="space-y-6">
// // //               <div className="flex items-center gap-4">
// // //                 <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
// // //                   <Check className="w-4 h-4 text-emerald-600" />
// // //                 </div>
// // //                 <span className="text-lg text-gray-700">Free clinic website</span>
// // //               </div>

// // //               <div className="flex items-center gap-4">
// // //                 <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
// // //                   <Check className="w-4 h-4 text-emerald-600" />
// // //                 </div>
// // //                 <span className="text-lg text-gray-700">Integrated appointment system</span>
// // //               </div>

// // //               <div className="flex items-center gap-4">
// // //                 <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
// // //                   <Check className="w-4 h-4 text-emerald-600" />
// // //                 </div>
// // //                 <span className="text-lg text-gray-700">Integrate Google Business with website</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Carousel Navigation */}
// // //         <div className="flex items-center justify-center gap-4 mt-12">
// // //           <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
// // //             ‹
// // //           </Button>
// // //           <div className="flex gap-2">
// // //             <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
// // //             <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
// // //             <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
// // //           </div>
// // //           <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
// // //             ›
// // //           </Button>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }
// // // components/udeti-solution-section.tsx
// // 'use client'

// // import { useState, useEffect } from 'react'
// // import { Button } from '@/components/ui/button'
// // import { Card } from '@/components/ui/card'
// // import { Check, ChevronLeft, ChevronRight, Globe } from 'lucide-react'
// // import Image from 'next/image'

// // interface SolutionSlide {
// //   id: number
// //   title: string
// //   subtitle: string
// //   description: string
// //   features: string[]
// //   image?: string
// //   color: string
// // }

// // const solutionSlides: SolutionSlide[] = [
// //   {
// //     id: 1,
// //     title: 'Improving Clinic Reach',
// //     subtitle: 'Book Your Doctor Appointment Online.',
// //     description: 'A Platform To Meeting, Branding, Business And Team Work By Video Call Now It\'s Just Easy And Professional Solution',
// //     features: [
// //       'Free clinic website',
// //       'Integrated appointment system',
// //       'Integrate Google Business with website'
// //     ],
// //     color: 'bg-blue-600'
// //   },
// //   {
// //     id: 2,
// //     title: 'Patient Management',
// //     subtitle: 'Streamline Your Practice Operations.',
// //     description: 'Complete patient management system with digital records, automated reminders, and seamless workflow',
// //     features: [
// //       'Digital patient records',
// //       'Automated appointment reminders',
// //       'Treatment history tracking'
// //     ],
// //     color: 'bg-emerald-600'
// //   },
// //   {
// //     id: 3,
// //     title: 'Digital Health Records',
// //     subtitle: 'Secure & Accessible Patient Data.',
// //     description: 'ABDM compliant digital health records with secure cloud storage and easy access',
// //     features: [
// //       'ABDM compliance included',
// //       'Secure cloud storage',
// //       'Easy data retrieval'
// //     ],
// //     color: 'bg-purple-600'
// //   }
// // ]

// // export function HeroSection() {
// //   const [currentSlide, setCurrentSlide] = useState(0)
// //   const [isVisible, setIsVisible] = useState(false)
// //   const [animateFeatures, setAnimateFeatures] = useState(false)

// //   // Auto-advance slides every 5 seconds
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % solutionSlides.length)
// //     }, 5000)

// //     return () => clearInterval(interval)
// //   }, [])

// //   // Trigger animations when component mounts
// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setIsVisible(true)
// //     }, 100)

// //     return () => clearTimeout(timer)
// //   }, [])

// //   // Animate features when slide changes
// //   useEffect(() => {
// //     setAnimateFeatures(false)
// //     const timer = setTimeout(() => {
// //       setAnimateFeatures(true)
// //     }, 300)

// //     return () => clearTimeout(timer)
// //   }, [currentSlide])

// //   const nextSlide = () => {
// //     setCurrentSlide((prev) => (prev + 1) % solutionSlides.length)
// //   }

// //   const prevSlide = () => {
// //     setCurrentSlide((prev) => (prev - 1 + solutionSlides.length) % solutionSlides.length)
// //   }

// //   const goToSlide = (index: number) => {
// //     setCurrentSlide(index)
// //   }

// //   const currentSolution = solutionSlides[currentSlide]

// //   return (
// //     <section className="bg-gradient-to-b from-emerald-50 to-white py-16 overflow-hidden">
// //       <div className="container mx-auto px-4">
// //         {/* Animated Header */}
// //         <div className={`text-center mb-16 transition-all duration-1000 transform ${
// //           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
// //         }`}>
// //           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
// //             The Udeti Solution
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //             Comprehensive digital transformation for your healthcare practice
// //           </p>
// //         </div>

// //         {/* Main Content with Animations */}
// //         <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
// //           {/* Left Side - Animated Interface Card */}
// //           <div className={`relative transition-all duration-1000 transform ${
// //             isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
// //           }`}>
// //             <Card className={`${currentSolution.color} text-white p-8 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 transform hover:scale-105 hover:shadow-3xl`}>
// //               <div className="relative z-10 space-y-6">
// //                 {/* Animated Title */}
// //                 <div className="space-y-2">
// //                   <h3 className="text-3xl font-bold leading-tight animate-in slide-in-from-left-5 duration-700">
// //                     Book Your Doctor
// //                   </h3>
// //                   <h3 className="text-3xl font-bold leading-tight animate-in slide-in-from-left-5 duration-700 delay-100">
// //                     Appointment
// //                   </h3>
// //                   <h3 className="text-3xl font-bold leading-tight animate-in slide-in-from-left-5 duration-700 delay-200">
// //                     Online.
// //                   </h3>
// //                 </div>

// //                 {/* Animated Description */}
// //                 <p className={`text-blue-100 max-w-md leading-relaxed transition-all duration-500 ${
// //                   animateFeatures ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
// //                 }`}>
// //                   {currentSolution.description}
// //                 </p>

// //                 {/* Animated Buttons */}
// //                 <div className={`flex gap-4 transition-all duration-700 delay-300 ${
// //                   animateFeatures ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
// //                 }`}>
// //                   <Button 
// //                     variant="secondary" 
// //                     className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-200"
// //                   >
// //                     Book Appointment
// //                   </Button>
// //                   <Button 
// //                     variant="outline" 
// //                     className="border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-200"
// //                   >
// //                     Get Started
// //                   </Button>
// //                 </div>
// //               </div>

// //               {/* Floating Doctor Image with Animation */}
// //               <div className="absolute right-0 top-0 bottom-0 w-1/2">
// //                 <div className="w-full h-full bg-gradient-to-l from-transparent to-blue-600/20 flex items-center justify-end pr-8">
// //                   <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center animate-float">
// //                     {/* Replace with actual doctor image */}
// //                     <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center">
// //                       <span className="text-white/60 text-sm text-center">Doctor Image</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Animated Bottom Navigation */}
// //               <div className="absolute bottom-4 left-8 right-8">
// //                 <div className={`flex items-center justify-between transition-all duration-700 delay-500 ${
// //                   animateFeatures ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
// //                 }`}>
// //                   <div className="flex items-center gap-2 text-sm text-blue-100">
// //                     <Globe className="w-4 h-4" />
// //                     <span>Select Service Type</span>
// //                   </div>
// //                   <Button size="sm" className="bg-blue-500 hover:bg-blue-400 hover:scale-105 transition-all duration-200">
// //                     Search
// //                   </Button>
// //                 </div>
// //               </div>

// //               {/* Floating Animation Elements */}
// //               <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
// //               <div className="absolute top-12 right-12 w-2 h-2 bg-yellow-300/50 rounded-full animate-pulse delay-1000"></div>
// //             </Card>
// //           </div>

// //           {/* Right Side - Animated Features */}
// //           <div className={`space-y-8 transition-all duration-1000 transform ${
// //             isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
// //           }`}>
// //             {/* Animated Section Header */}
// //             <div className="flex items-center gap-3 mb-8">
// //               <div className={`w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center transition-all duration-500 ${
// //                 animateFeatures ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
// //               }`}>
// //                 <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
// //               </div>
// //               <h3 className={`text-3xl font-bold text-gray-900 transition-all duration-700 ${
// //                 animateFeatures ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
// //               }`}>
// //                 {currentSolution.title}
// //               </h3>
// //             </div>

// //             {/* Animated Features List */}
// //             <div className="space-y-6">
// //               {currentSolution.features.map((feature, index) => (
// //                 <div 
// //                   key={`${currentSlide}-${index}`}
// //                   className={`flex items-center gap-4 transition-all duration-500 transform ${
// //                     animateFeatures 
// //                       ? 'opacity-100 translate-x-0' 
// //                       : 'opacity-0 translate-x-8'
// //                   }`}
// //                   style={{ 
// //                     transitionDelay: animateFeatures ? `${index * 150}ms` : '0ms' 
// //                   }}
// //                 >
// //                   <div className={`w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 ${
// //                     animateFeatures ? 'animate-bounce' : ''
// //                   }`}
// //                     style={{ 
// //                       animationDelay: `${index * 200}ms`,
// //                       animationDuration: '1s',
// //                       animationIterationCount: '1'
// //                     }}
// //                   >
// //                     <Check className="w-4 h-4 text-emerald-600" />
// //                   </div>
// //                   <span className="text-lg text-gray-700 font-medium hover:text-emerald-600 transition-colors duration-200">
// //                     {feature}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Animated Carousel Navigation */}
// //         <div className={`flex items-center justify-center gap-4 mt-12 transition-all duration-1000 delay-700 ${
// //           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
// //         }`}>
// //           <Button 
// //             variant="ghost" 
// //             size="sm" 
// //             onClick={prevSlide}
// //             className="w-10 h-10 p-0 rounded-full hover:bg-emerald-100 hover:scale-110 transition-all duration-200"
// //           >
// //             <ChevronLeft className="w-5 h-5 text-gray-600" />
// //           </Button>

// //           <div className="flex gap-2">
// //             {solutionSlides.map((_, index) => (
// //               <button
// //                 key={index}
// //                 onClick={() => goToSlide(index)}
// //                 className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
// //                   index === currentSlide 
// //                     ? 'bg-emerald-600 scale-110' 
// //                     : 'bg-gray-300 hover:bg-gray-400'
// //                 }`}
// //               />
// //             ))}
// //           </div>

// //           <Button 
// //             variant="ghost" 
// //             size="sm" 
// //             onClick={nextSlide}
// //             className="w-10 h-10 p-0 rounded-full hover:bg-emerald-100 hover:scale-110 transition-all duration-200"
// //           >
// //             <ChevronRight className="w-5 h-5 text-gray-600" />
// //           </Button>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }


// // components/udeti-solution-carousel.tsx
// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { Button } from '@/components/ui/button'
// import { Card } from '@/components/ui/card'
// import { Check, ChevronLeft, ChevronRight, Globe } from 'lucide-react'

// interface SolutionSlide {
//   id: number
//   title: string
//   subtitle: string
//   description: string
//   features: string[]
//   color: string
//   buttonText1: string
//   buttonText2: string
// }

// const solutionSlides: SolutionSlide[] = [
//   {
//     id: 1,
//     title: 'Improving Clinic Reach',
//     subtitle: 'Book Your Doctor Appointment Online.',
//     description: 'A Platform To Meeting, Branding, Business And Team Work By Video Call Now It\'s Just Easy And Professional Solution',
//     features: [
//       'Free clinic website',
//       'Integrated appointment system',
//       'Integrate Google Business with website'
//     ],
//     color: 'bg-blue-600',
//     buttonText1: 'Book Appointment',
//     buttonText2: 'Get Started'
//   },
//   {
//     id: 2,
//     title: 'Patient Management',
//     subtitle: 'Streamline Your Practice Operations.',
//     description: 'Complete patient management system with digital records, automated reminders, and seamless workflow integration',
//     features: [
//       'Digital patient records',
//       'Automated appointment reminders',
//       'Treatment history tracking'
//     ],
//     color: 'bg-emerald-600',
//     buttonText1: 'View Features',
//     buttonText2: 'Learn More'
//   },
//   {
//     id: 3,
//     title: 'Digital Health Records',
//     subtitle: 'Secure & Accessible Patient Data.',
//     description: 'ABDM compliant digital health records with secure cloud storage and easy access from anywhere',
//     features: [
//       'ABDM compliance included',
//       'Secure cloud storage',
//       'Easy data retrieval'
//     ],
//     color: 'bg-purple-600',
//     buttonText1: 'Explore Records',
//     buttonText2: 'Get Demo'
//   }
// ]

// export function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isSliding, setIsSliding] = useState(false)
//   const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')
//   const [isVisible, setIsVisible] = useState(false)
//   const sectionRef = useRef<HTMLElement>(null)

//   // Intersection Observer for initial animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true)
//           }
//         })
//       },
//       { threshold: 0.3 }
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   // Auto-advance slides
//   useEffect(() => {
//     if (!isVisible) return

//     const interval = setInterval(() => {
//       handleNext()
//     }, 6000)

//     return () => clearInterval(interval)
//   }, [isVisible, currentSlide])

//   const handleNext = () => {
//     if (isSliding) return
//     setIsSliding(true)
//     setSlideDirection('right')

//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev + 1) % solutionSlides.length)
//       setTimeout(() => setIsSliding(false), 50)
//     }, 250)
//   }

//   const handlePrev = () => {
//     if (isSliding) return
//     setIsSliding(true)
//     setSlideDirection('left')

//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev - 1 + solutionSlides.length) % solutionSlides.length)
//       setTimeout(() => setIsSliding(false), 50)
//     }, 250)
//   }

//   const goToSlide = (index: number) => {
//     if (isSliding || index === currentSlide) return
//     setIsSliding(true)
//     setSlideDirection(index > currentSlide ? 'right' : 'left')

//     setTimeout(() => {
//       setCurrentSlide(index)
//       setTimeout(() => setIsSliding(false), 50)
//     }, 250)
//   }

//   return (
//     <section 
//       ref={sectionRef}
//       className="bg-gradient-to-b from-emerald-50 to-white py-16 overflow-hidden"
//     >
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className={`text-center mb-16 transition-all duration-1000 transform ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             The Udeti Solution
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive digital transformation for your healthcare practice
//           </p>
//         </div>

//         {/* Carousel Container */}
//         <div className="max-w-7xl mx-auto relative">
//           <div className="overflo1w-hidden rounded-3xl">
//             {/* Slides Container */}
//             <div 
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ 
//                 transform: `translateX(-${currentSlide * 100}%)`,
//                 width: `${solutionSlides.length * 100}%`

//               }}
//             >
//               {solutionSlides.map((slide, index) => (
//                 <div 
//                   key={slide.id}
//                   className="w-full flex-shrink-0"
//                   style={{ width: `${100 / solutionSlides.length}%` }}
//                 >
//                   {/* Slide Content */}
//                   <div className="grid lg:grid-cols-2 gap-12 items-center px-4">
//                     {/* Left Side - Interactive Card */}
//                     <div className={`transition-all duration-700 transform ${
//                       index === currentSlide && !isSliding
//                         ? 'opacity-100 translate-x-0 scale-100' 
//                         : index === currentSlide 
//                           ? slideDirection === 'right' 
//                             ? 'opacity-0 transl1ate-x-12 scale-95'
//                             : 'opacity-0 -translat1e-x-12 scale-95'
//                           : 'opacity-0 translate-x-0 scale-95'
//                     }`}>
//                       <Card className={`${slide.color} text-white p-8 rounded-2xl overflow-hidden shadow-2xl relative group hover:shadow-3xl transition-all duration-500 transform hover:scale-105`}>
//                         {/* Animated background shimmer */}
//                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

//                         <div className="relative z-10 space-y-6">
//                           {/* Dynamic Title Animation */}
//                           <div className="space-y-2">
//                             {['Book Your Doctor', 'Appointment', 'Online.'].map((text, textIndex) => (
//                               <h3 
//                                 key={`${slide.id}-${textIndex}`}
//                                 className={`text-3xl font-bold leading-tight transition-all duration-500 transform ${
//                                   index === currentSlide && !isSliding
//                                     ? 'opacity-100 translate-x-0' 
//                                     : 'opacity-2 translate-x-8'
//                                 }`}
//                                 style={{ 
//                                   transitionDelay: index === currentSlide ? `${textIndex * 100 + 300}ms` : '0ms' 
//                                 }}
//                               >
//                                 {text}
//                               </h3>
//                             ))}
//                           </div>

//                           {/* Description */}
//                           <p className={`text-opacity-90 max-w-md leading-relaxed transition-all duration-700 transform ${
//                             index === currentSlide && !isSliding
//                               ? 'opacity-100 translate-y-0' 
//                               : 'opacity-0 translate-y-4'
//                           }`}
//                             style={{ transitionDelay: index === currentSlide ? '600ms' : '0ms' }}
//                           >
//                             {slide.description}
//                           </p>

//                           {/* Action Buttons */}
//                           <div className={`flex gap-4 transition-all duration-700 transform ${
//                             index === currentSlide && !isSliding
//                               ? 'opacity-100 translate-y-0' 
//                               : 'opacity-0 translate-y-4'
//                           }`}
//                             style={{ transitionDelay: index === currentSlide ? '800ms' : '0ms' }}
//                           >
//                             <Button 
//                               variant="secondary" 
//                               className="bg-white text-current hover:bg-gray-100 hover:scale-105 transition-all duration-300"
//                             >
//                               {slide.buttonText1}
//                             </Button>
//                             <Button 
//                               variant="outline" 
//                               className="border-white text-white hover:bg-white hover:text-current hover:scale-105 transition-all duration-300"
//                             >
//                               {slide.buttonText2}
//                             </Button>
//                           </div>
//                         </div>

//                         {/* Floating Doctor Avatar */}
//                         <div className="absolute right-8 top-8 bottom-8 w-48 flex items-center justify-center">
//                           <div className={`w-40 h-40 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-700 transform ${
//                             index === currentSlide ? 'animate-float opacity-100 scale-100' : 'opacity-0 scale-75'
//                           }`}>
//                             <span className="text-4xl">👨‍⚕️</span>
//                           </div>
//                         </div>

//                         {/* Bottom Interface */}
//                         <div className={`absolute bottom-4 left-8 right-8 transition-all duration-700 transform ${
//                           index === currentSlide && !isSliding
//                             ? 'opacity-100 translate-y-0' 
//                             : 'opacity-0 translate-y-4'
//                         }`}
//                           style={{ transitionDelay: index === currentSlide ? '1000ms' : '0ms' }}
//                         >
//                           <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-2 text-sm opacity-90">
//                               <Globe className="w-4 h-4" />
//                               <span>Select Service Type</span>
//                             </div>
//                             <Button size="sm" className="bg-white/20 hover:bg-white/30 border-white/20">
//                               Search
//                             </Button>
//                           </div>
//                         </div>

//                         {/* Animated particles */}
//                         <div className={`absolute top-6 right-6 w-2 h-2 bg-white/40 rounded-full transition-all duration-500 ${
//                           index === currentSlide ? 'animate-ping' : 'opacity-0'
//                         }`}></div>
//                         <div className={`absolute top-16 right-16 w-1 h-1 bg-yellow-300/60 rounded-full transition-all duration-700 ${
//                           index === currentSlide ? 'animate-pulse' : 'opacity-0'
//                         }`} style={{ animationDelay: '1s' }}></div>
//                       </Card>
//                     </div>

//                     {/* Right Side - Features */}
//                     <div className={`space-y-8 transition-all duration-700 transform ${
//                       index === currentSlide && !isSliding
//                         ? 'opacity-100 translate-x-0' 
//                         : index === currentSlide
//                           ? slideDirection === 'right'
//                             ? 'opacity- -translate-x-12'
//                             : 'opacity- translate-x-12'
//                           : 'opacity- translate-x-0'
//                     }`}>
//                       {/* Feature Header */}
//                       <div className="flex items-center gap-3">
//                         <div className={`w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center transition-all duration-500 ${
//                           index === currentSlide && !isSliding ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
//                         }`}
//                           style={{ transitionDelay: index === currentSlide ? '400ms' : '0ms' }}
//                         >
//                           <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
//                         </div>
//                         <h3 className={`text-3xl font-bold text-gray-900 transition-all duration-700 ${
//                           index === currentSlide && !isSliding ? 'opacity-100 translate-x-0' : 'opacity- translate-x-4'
//                         }`}
//                           style={{ transitionDelay: index === currentSlide ? '500ms' : '0ms' }}
//                         >
//                           {slide.title}
//                         </h3>
//                       </div>

//                       {/* Features List */}
//                       <div className="space-y-6">
//                         {slide.features.map((feature, featureIndex) => (
//                           <div 
//                             key={`${slide.id}-feature-${featureIndex}`}
//                             className={`flex items-center gap-4 p-3 rounded-lg hover:bg-emerald-50 transition-all duration-500 transform cursor-pointer group ${
//                               index === currentSlide && !isSliding
//                                 ? 'opacity-100 translate-x-0' 
//                                 : 'opacity- translate-x-8'
//                             }`}
//                             style={{ 
//                               transitionDelay: index === currentSlide ? `${featureIndex * 150 + 600}ms` : '0ms' 
//                             }}
//                           >
//                             <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 group-hover:scale-110 transition-all duration-300">
//                               <Check className="w-4 h-4 text-emerald-600" />
//                             </div>
//                             <span className="text-lg text-gray-700 font-medium group-hover:text-emerald-600 transition-colors duration-300">
//                               {feature}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Controls */}
//           <div className="flex items-center justify-center gap-6 mt-12">
//             {/* Previous Button */}
//             <Button 
//               variant="ghost" 
//               size="sm" 
//               onClick={handlePrev}
//               disabled={isSliding}
//               className="w-12 h-12 p-0 rounded-full hover:bg-emerald-100 hover:scale-110 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-emerald-600 transition-colors" />
//             </Button>

//             {/* Dots Indicator */}
//             <div className="flex gap-3">
//               {solutionSlides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   disabled={isSliding}
//                   className={`relative transition-all duration-300 hover:scale-125 disabled:cursor-not-allowed ${
//                     index === currentSlide 
//                       ? 'w-8 h-3 bg-emerald-600 rounded-full' 
//                       : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
//                   }`}
//                 >
//                   {index === currentSlide && (
//                     <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></div>
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* Next Button */}
//             <Button 
//               variant="ghost" 
//               size="sm" 
//               onClick={handleNext}
//               disabled={isSliding}
//               className="w-12 h-12 p-0 rounded-full hover:bg-emerald-100 hover:scale-110 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-emerald-600 transition-colors" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// components/udeti-solution-carousel.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, ChevronLeft, ChevronRight, Globe } from 'lucide-react'
import SolutionClinic from "@/public/solution-clinic-reach-final.jpg"
import SolutionDigital from "@/public/solution-digitization-training-phones.jpg"
import SolutionPatient from "@/public/solution-patient-throughput-blue.png"
import Image from 'next/image'
interface SolutionSlide {
  id: number
  title: string
  subtitle: string
  description: string
  features: string[]
  color: string
  buttonText1: string
  buttonText2: string
  image: string;
}

const solutionSlides: SolutionSlide[] = [
  {
    id: 1,
    title: 'Improving Clinic Reach',
    subtitle: 'Book Your Doctor Appointment Online.',
    description: 'A Platform To Meeting, Branding, Business And Team Work By Video Call Now It\'s Just Easy And Professional Solution',
    features: [
      'Free clinic website',
      'Integrated appointment system',
      'Integrate Google Business with website'
    ],
    color: 'bg-blue-600',
    buttonText1: 'Book Appointment',
    buttonText2: 'Get Started',
    image: SolutionClinic.src,
  },
  {
    id: 2,
    title: 'Maximizing Patient Throughput',
    subtitle: 'Streamline Your Practice Operations.',
    description: 'Complete patient management system with digital records, automated reminders, and seamless workflow integration',
    features: [
      'Appointment Management',
      'Reminders and Follow-Up',
      'Billing and Service Management',
      'Campaigns for camps/ offers',
      'Additional ₹ e.g. Teleconsults'
    ],
    color: 'bg-emerald-600',
    buttonText1: 'View Features',
    buttonText2: 'Learn More',
    image: SolutionDigital.src,
  },
  {
    id: 3,
    title: 'Simplifying Digitization',
    subtitle: 'Secure & Accessible Patient Data.',
    description: 'ABDM compliant digital health records with secure cloud storage and easy access from anywhere',
    features: [
      'Easy self-guided installation',
      'Pre-recorded training videos',
      'Readily accessible remote support'
    ],
    color: 'bg-purple-600',
    buttonText1: 'Explore Records',
    buttonText2: 'Get Demo',
    image: SolutionPatient.src,
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Intersection Observer for initial animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-advance slides
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      handleNext()
    }, 6000)

    return () => clearInterval(interval)
  }, [isVisible, currentSlide])

  const handleNext = () => {
    if (isSliding) return
    setIsSliding(true)
    setSlideDirection('right')

    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % solutionSlides.length)
      setTimeout(() => setIsSliding(false), 50)
    }, 250)
  }

  const handlePrev = () => {
    if (isSliding) return
    setIsSliding(true)
    setSlideDirection('left')

    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + solutionSlides.length) % solutionSlides.length)
      setTimeout(() => setIsSliding(false), 50)
    }, 250)
  }

  const goToSlide = (index: number) => {
    if (isSliding || index === currentSlide) return
    setIsSliding(true)
    setSlideDirection(index > currentSlide ? 'right' : 'left')

    setTimeout(() => {
      setCurrentSlide(index)
      setTimeout(() => setIsSliding(false), 50)
    }, 250)
  }

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-emerald-50 to-white py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Udeti Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital transformation for your healthcare practice
          </p>
        </div>

        {/* Carousel Container - Fixed */}
        <div className="max-w-7xl mx-auto relative">
          {/* Overflow container */}
          <div className="overflow-hidden rounded-3xl">
            {/* Slides wrapper - Fixed width calculation */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: '100%' // Keep at 100% of container
              }}
            >
              {solutionSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className="min-w-full flex-shrink-0" // Each slide takes full width
                >
                  {/* Slide Content */}
                  <div className="grid lg:grid-cols-2 gap-12 items-center px-4">
                    {/* Left Side - Interactive Card */}
                    <div className={`hidden transition-all duration-700 transform ${index === currentSlide && !isSliding
                      ? 'opacity-100 translate-x-0 scale-100'
                      : index === currentSlide
                        ? slideDirection === 'right'
                          ? 'opacity-0 translate-x-12 scale-95'
                          : 'opacity-0 -translate-x-12 scale-95'
                        : 'opacity-0 translate-x-0 scale-95'
                      }`}>
                      <Card className={`${slide.color} text-white p-8 rounded-2xl overflow-hidden shadow-2xl relative group hover:shadow-3xl transition-all duration-500 transform hover:scale-105`}>
                        {/* Animated background shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                        <div className="relative z-10 space-y-6">
                          {/* Dynamic Title Animation - Updated for each slide */}
                          <div className="space-y-2">
                            {slide.subtitle.split(' ').slice(0, 3).map((word, textIndex) => (
                              <h3
                                key={`${slide.id}-${textIndex}`}
                                className={`text-3xl font-bold leading-tight transition-all duration-500 transform ${index === currentSlide && !isSliding
                                  ? 'opacity-100 translate-x-0'
                                  : 'opacity-0 translate-x-8'
                                  }`}
                                style={{
                                  transitionDelay: index === currentSlide ? `${textIndex * 100 + 300}ms` : '0ms'
                                }}
                              >
                                {word} {textIndex === 0 ? 'Your Doctor' : textIndex === 1 ? 'Appointment' : 'Online.'}
                              </h3>
                            ))}
                          </div>

                          {/* Description */}
                          <p className={`text-opacity-90 max-w-md leading-relaxed transition-all duration-700 transform ${index === currentSlide && !isSliding
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: index === currentSlide ? '600ms' : '0ms' }}
                          >
                            {slide.description}
                          </p>

                          {/* Action Buttons */}
                          <div className={`flex gap-4 transition-all duration-700 transform ${index === currentSlide && !isSliding
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: index === currentSlide ? '800ms' : '0ms' }}
                          >
                            <Button
                              variant="secondary"
                              className="bg-white text-current hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                            >
                              {slide.buttonText1}
                            </Button>
                            <Button
                              variant="outline"
                              className="border-white text-white hover:bg-white hover:text-current hover:scale-105 transition-all duration-300"
                            >
                              {slide.buttonText2}
                            </Button>
                          </div>
                        </div>

                        {/* Floating Doctor Avatar */}
                        <div className="absolute right-8 top-8 bottom-8 w-48 flex items-center justify-center">
                          <div className={`w-40 h-40 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-700 transform ${index === currentSlide ? 'animate-float opacity-100 scale-100' : 'opacity-0 scale-75'
                            }`}>
                            <span className="text-4xl">👨‍⚕️</span>
                          </div>
                        </div>

                        {/* Bottom Interface */}
                        <div className={`absolute bottom-4 left-8 right-8 transition-all duration-700 transform ${index === currentSlide && !isSliding
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                          }`}
                          style={{ transitionDelay: index === currentSlide ? '1000ms' : '0ms' }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm opacity-90">
                              <Globe className="w-4 h-4" />
                              <span>Select Service Type</span>
                            </div>
                            <Button size="sm" className="bg-white/20 hover:bg-white/30 border-white/20">
                              Search
                            </Button>
                          </div>
                        </div>

                        {/* Animated particles */}
                        <div className={`absolute top-6 right-6 w-2 h-2 bg-white/40 rounded-full transition-all duration-500 ${index === currentSlide ? 'animate-ping' : 'opacity-0'
                          }`}></div>
                        <div className={`absolute top-16 right-16 w-1 h-1 bg-yellow-300/60 rounded-full transition-all duration-700 ${index === currentSlide ? 'animate-pulse' : 'opacity-0'
                          }`} style={{ animationDelay: '1s' }}></div>
                      </Card>
                    </div>
                    <div className={`transition-all duration-700 transform ${index === currentSlide && !isSliding
                      ? 'opacity-100 translate-x-0 scale-100'
                      : index === currentSlide
                        ? slideDirection === 'right'
                          ? 'opacity-0 translate-x-12 scale-95'
                          : 'opacity-0 -translate-x-12 scale-95'
                        : 'opacity-0 translate-x-0 scale-95'
                      }`} >
                      <Image src={slide.image} alt="image" width={400} height={400}  className='max-w-lg w-full rounded-xl'/>
                    </div>

                    {/* Right Side - Features */}
                    <div className={`space-y-8 transition-all duration-700 transform ${index === currentSlide && !isSliding
                      ? 'opacity-100 translate-x-0'
                      : index === currentSlide
                        ? slideDirection === 'right'
                          ? 'opacity-0 -translate-x-12'
                          : 'opacity-0 translate-x-12'
                        : 'opacity-0 translate-x-0'
                      }`}>
                      {/* Feature Header */}
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center transition-all duration-500 ${index === currentSlide && !isSliding ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                          }`}
                          style={{ transitionDelay: index === currentSlide ? '400ms' : '0ms' }}
                        >
                          <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
                        </div>
                        <h3 className={`text-3xl font-bold text-gray-900 transition-all duration-700 ${index === currentSlide && !isSliding ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                          }`}
                          style={{ transitionDelay: index === currentSlide ? '500ms' : '0ms' }}
                        >
                          {slide.title}
                        </h3>
                      </div>

                      {/* Features List */}
                      <div className="space-y-6">
                        {slide.features.map((feature, featureIndex) => (
                          <div
                            key={`${slide.id}-feature-${featureIndex}`}
                            className={`flex items-center gap-4 p-3 rounded-lg hover:bg-emerald-50 transition-all duration-500 transform cursor-pointer group ${index === currentSlide && !isSliding
                              ? 'opacity-100 translate-x-0'
                              : 'opacity-0 translate-x-8'
                              }`}
                            style={{
                              transitionDelay: index === currentSlide ? `${featureIndex * 150 + 600}ms` : '0ms'
                            }}
                          >
                            <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 group-hover:scale-110 transition-all duration-300">
                              <Check className="w-4 h-4 text-emerald-600" />
                            </div>
                            <span className="text-lg text-gray-700 font-medium group-hover:text-emerald-600 transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            {/* Previous Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrev}
              disabled={isSliding}
              className="w-12 h-12 p-0 rounded-full hover:bg-emerald-100 hover:scale-110 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-emerald-600 transition-colors" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {solutionSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isSliding}
                  className={`relative transition-all duration-300 hover:scale-125 disabled:cursor-not-allowed ${index === currentSlide
                    ? 'w-8 h-3 bg-emerald-600 rounded-full'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
                    }`}
                >
                  {index === currentSlide && (
                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleNext}
              disabled={isSliding}
              className="w-12 h-12 p-0 rounded-full hover:bg-emerald-100 hover:scale-110 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-emerald-600 transition-colors" />
            </Button>
          </div>

          {/* Debug info - Remove this in production */}
          {/* <div className="text-center mt-4 text-sm text-gray-500">
            Current slide: {currentSlide + 1} / {solutionSlides.length}
          </div> */}
        </div>
      </div>
    </section>
  )
}