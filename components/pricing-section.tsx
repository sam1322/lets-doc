// components/pricing-section.tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, X } from 'lucide-react'

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingPlan {
  name: string
  subtitle: string
  price: string
  period: string
  billingInfo: string
  originalPrice?: string
  savings?: string
  features: PricingFeature[]
  buttonText: string
  buttonColor: 'orange' | 'green'
  borderColor: string
  isPopular?: boolean
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Udeti Monthly",
    subtitle: "Perfect for getting started",
    price: "₹300",
    period: "/month",
    billingInfo: "Billed monthly",
    features: [
      { text: "No clinic website", included: false },
      { text: "Full-featured clinic software", included: true },
      { text: "500 SMS included monthly", included: true },
      { text: "Business Hours Support", included: true },
      { text: "ABDM Compliance included", included: true },
    ],
    buttonText: "Start Monthly Plan",
    buttonColor: 'orange',
    borderColor: 'border-t-orange-500',
  },
  {
    name: "Udeti Annual",
    subtitle: "All set for the year",
    price: "₹2,400",
    period: "/year",
    billingInfo: "",
    originalPrice: "₹3,600/year",
    savings: "Save ₹1,200",
    features: [
      { text: "Free Premium clinic website", included: true },
      { text: "Full-featured clinic software", included: true },
      { text: "500 SMS included monthly", included: true },
      { text: "Business Hours Support", included: true },
      { text: "ABDM Compliance included", included: true },
    ],
    buttonText: "Start Annual Plan",
    buttonColor: 'green',
    borderColor: 'border-t-emerald-500',
    isPopular: true,
  },
]

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <Card className={`relative bg-white rounded-2xl shadow-lg border-t-4 ${plan.borderColor} p-8 w-full mx-auto`}>
      {/* Popular Badge */}
      {plan.isPopular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 hover:bg-emerald-500 text-white px-4 py-1">
          ⭐ Most Popular
        </Badge>
      )}
      
      {/* Plan Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-600 text-sm">{plan.subtitle}</p>
      </div>

      {/* Pricing */}
      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center mb-2">
          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
          <span className="text-gray-600 ml-1">{plan.period}</span>
        </div>
        
        {plan.billingInfo && (
          <p className="text-gray-500 text-sm">{plan.billingInfo}</p>
        )}
        
        {plan.originalPrice && plan.savings && (
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-gray-400 line-through text-sm">{plan.originalPrice}</span>
            <span className="text-emerald-600 text-sm font-medium">{plan.savings}</span>
          </div>
        )}
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
              feature.included 
                ? 'bg-emerald-100' 
                : 'bg-red-100'
            }`}>
              {feature.included ? (
                <Check className="w-3 h-3 text-emerald-600" />
              ) : (
                <X className="w-3 h-3 text-red-500" />
              )}
            </div>
            <span className={`text-sm ${
              feature.included ? 'text-gray-700' : 'text-gray-500'
            }`}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Button 
        className={`w-full py-3 rounded-lg font-medium ${
          plan.buttonColor === 'orange' 
            ? 'bg-orange-500 hover:bg-orange-600 text-white' 
            : 'bg-emerald-500 hover:bg-emerald-600 text-white'
        }`}
      >
        {plan.buttonText}
      </Button>
    </Card>
  )
}

export function PricingSection() {
  return (
    <section className="bg-emerald-600 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Flexible pricing options to suit your clinic's needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex gap-4 mx-auto mb-8 max-w-4xl">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-emerald-100 text-sm max-w-3xl mx-auto">
            * Website Domain name charges apply separately and to be paid to third party
          </p>
        </div>
      </div>
    </section>
  )
}