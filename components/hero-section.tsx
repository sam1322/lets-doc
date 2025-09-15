// components/hero-section.tsx
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Udeti Solution
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital transformation for your healthcare practice
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Doctor Booking Interface */}
          <div className="relative">
            <Card className="bg-blue-600 text-white p-8 rounded-2xl overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2">
                  Book Your Doctor
                </h2>
                <h3 className="text-3xl font-bold mb-4">
                  Appointment
                </h3>
                <h3 className="text-3xl font-bold mb-6">
                  Online.
                </h3>
                <p className="text-blue-100 mb-6 max-w-md">
                  A Platform To Meeting, Branding, Business And Team Work 
                  By Video Call Now It's Just Easy And Professional Solution
                </p>
                <div className="flex gap-4">
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Book an Appointment
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Get Start Now
                  </Button>
                </div>
              </div>
              
              {/* Doctor Image - You'll need to replace with actual image */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2">
                <div className="w-full h-full bg-gradient-to-l from-transparent to-blue-600/20 flex items-center justify-end pr-8">
                  {/* Placeholder for doctor image */}
                  <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-white/60">Doctor Image</span>
                  </div>
                </div>
              </div>
              
              {/* Bottom Navigation */}
              <div className="absolute bottom-4 left-8 right-8 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-blue-100">
                  <span>Select Service Type</span>
                </div>
                <Button size="sm" className="bg-blue-500 hover:bg-blue-400">
                  Search
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Side - Features */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Improving Clinic Reach
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-lg text-gray-700">Free clinic website</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-lg text-gray-700">Integrated appointment system</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-lg text-gray-700">Integrate Google Business with website</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
            ‹
          </Button>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
          <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
            ›
          </Button>
        </div>
      </div>
    </section>
  )
}