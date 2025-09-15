import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  doctorName: string;
  specialty: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "With Udeti, patients are now able to book appointment directly from my website, making life easier. Also, now that I have a website link in my google business account, it improves user engagement and reviews over time.",
    doctorName: "Dr. Manasa Madhuri",
    specialty: "Senior Physician",
    location: "Hyderabad, Telangana",
    rating: 5
  },
  {
    id: 2,
    quote: "The system automatically sends reminders to patients ahead of appointments and also for follow-ups improving clinic utilization by 10%-20%. Additionally I am able to broadcast to my patients about any camps in my clinic",
    doctorName: "Dr. Rajesh Kumar",
    specialty: "General Practitioner",
    location: "Bangalore, Karnataka",
    rating: 5
  },
  {
    id: 3,
    quote: "Finally, a solution that understands the Indian healthcare ecosystem. Simple, cost effective and easy to use. Onboarding old/ new staff on their own mobile phones has never been this easy.",
    doctorName: "Dr. Priya Mehta",
    specialty: "Family Medicine",
    location: "Delhi, India",
    rating: 5
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({
  testimonial,
  index
}) => {
  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      <StarRating rating={testimonial.rating} />
      
      <blockquote className="text-gray-700 text-sm leading-relaxed mb-4 flex-1 italic">
        "{testimonial.quote}"
      </blockquote>
      
      <div className="mt-0 border-t-1 pt-4">
        <h4 className="font-semibold text-gray-900 text-sm mb-1">
          {testimonial.doctorName}
        </h4>
        <p className="text-gray-500 text-xs">
          {testimonial.specialty}
        </p>
        <p className="text-gray-500 text-xs">
          {testimonial.location}
        </p>
      </div>
    </div>
  );
};

const DoctorTestimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Testimonials from our Doctors
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
       
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="opacity animate-fade-in-up "
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: 'forwards'
            }}
          >
            <TestimonialCard testimonial={testimonial} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorTestimonials;