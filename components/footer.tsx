// components/footer.tsx
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import LetsGoLogo from "@/public/letsdoc-logo.png"
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-emerald-700 text-emerald-100">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="space-y-6">
            {/* Logo */}
            {/* <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-emerald-200">
                LetsDoc
              </div>
              <div className="w-6 h-6 bg-yellow-400 rounded transform rotate-12"></div>
            </div> */}
            <Image src={LetsGoLogo.src} alt="logo" width={300} height={300} className='max-w-[120px]' />


            {/* Company Description */}
            <p className="text-emerald-200 leading-relaxed max-w-sm">
              Digitizing Healthcare in India since 2015. Empowering healthcare providers with cutting-edge digital solutions.
            </p>

            {/* Social Media */}
            <div className="space-y-3">
              <p className="text-emerald-200">
                Please support us in this journey by following us on social media
              </p>
              <div className="flex space-x-4">
                {/* LinkedIn Icon */}
                <Link
                  href="https://linkedin.com"
                  className="text-emerald-200 hover:text-white transition-colors duration-200"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>

                {/* Instagram Icon */}
                <Link
                  href="https://instagram.com"
                  className="text-emerald-200 hover:text-white transition-colors duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Navigation</h3>
            <nav className="space-y-3">
              <Link
                href="/about"
                className="block text-emerald-200 hover:text-white transition-colors duration-200"
              >
                About Udeti
              </Link>
              <Link
                href="/features"
                className="block text-emerald-200 hover:text-white transition-colors duration-200"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="block text-emerald-200 hover:text-white transition-colors duration-200"
              >
                Pricing
              </Link>
              <Link
                href="/request-demo"
                className="block text-emerald-200 hover:text-white transition-colors duration-200"
              >
                Request Demo
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                <div className="text-emerald-200 leading-relaxed">
                  <p className="font-medium text-white">LetsDoc Healthcare Technologies Pvt. Ltd</p>
                  <p>WeWork IWF Campus, Survey No. 192,</p>
                  <p>Whitefield Main Road, B-Narayanpura,</p>
                  <p>Mahadevapura, Bengaluru, India</p>
                  <p>Pin: 560016</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                <Link
                  href="tel:+919888448105"
                  className="text-emerald-200 hover:text-white transition-colors duration-200"
                >
                  +91 88844 81055
                </Link>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                <Link
                  href="mailto:bd@letsdoc.in"
                  className="text-emerald-200 hover:text-white transition-colors duration-200"
                >
                  bd@letsdoc.in
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-emerald-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-emerald-200 text-sm">
              © 2024 LetsDoc Healthcare Technologies Pvt. Ltd. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex space-x-6 items-center">
              <Link
                href="/privacy-policy"
                className="text-emerald-200 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-emerald-400 text-sm">and</span>
              <Link
                href="/terms-of-service"
                className="text-emerald-200 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}