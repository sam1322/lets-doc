import React from 'react';
import { TrendingUp, FileText, Database, Star } from 'lucide-react';
import HeroClinicMobileTablet from "@/public/hero-clinic-mobile-tablet.jpg"
import Image from 'next/image';

interface StatCardProps {
    icon: React.ReactNode;
    value: string;
    label: string;
    iconColor: string;
    index: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, iconColor, index }) => {
    return (
        <div
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
            style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
            }}>
            <div className="flex flex-col items-center text-center space-y-3">
                <div className={`p-3 rounded-lg ${iconColor}`}>
                    {icon}
                </div>
                <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
                    <p className="text-sm text-gray-600 font-medium">{label}</p>
                </div>
            </div>
        </div>
    );
};

const UdetiClinicSection: React.FC = () => {
    const stats = [
        {
            icon: <TrendingUp className="w-6 h-6 text-orange-600" />,
            value: "20%-40%",
            label: "Revenue Growth for Clinics",
            iconColor: "bg-orange-50"
        },
        {
            icon: <FileText className="w-6 h-6 text-teal-600" />,
            value: "500+",
            label: "Udeti Installations",
            iconColor: "bg-teal-50"
        },
        {
            icon: <Database className="w-6 h-6 text-blue-600" />,
            value: "1M+",
            label: "Patient Records Digitized",
            iconColor: "bg-blue-50"
        },
        {
            icon: <Star className="w-6 h-6 text-yellow-600" />,
            value: "4.7",
            label: "User Ratings",
            iconColor: "bg-yellow-50"
        }
    ];

    return (
        <div className="bg-gradient-to-br from-teal-700 to-teal-800 min-h-screen flex flex-col items-center ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 container">
                {/* Header Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="text-white space-y-6">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Transform Your Clinic with Udeti
                        </h1>
                        <p className="text-lg text-teal-100 leading-relaxed">
                            Udeti is a comprehensive clinic management solution designed to digitize
                            standalone and small-scale clinics with ease. It seamlessly integrates with the
                            Udeti developed clinic website, ensuring improved patient visibility and
                            engagement. With low or no infrastructure requirements, Udeti delivers the
                            lowest-cost digital solution while providing the optionality of integrating with
                            the ABDM ecosystem.
                        </p>
                        <p className="text-base text-teal-100">
                            The solution has also been selected by the National Health Authority (NHA)
                            and the Governments of Tamil Nadu and Rajasthan, reaffirming its reliability,
                            scalability, and alignment with India's digital health mission.
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <Image
                                src={HeroClinicMobileTablet.src}
                                alt="Hero clinic mobile tablet"
                                width={476}
                                height={476}
                                className="w-full h-full object-cover rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1 "
                            />

                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="space-y-8 container">
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center">
                    Transforming Healthcare by the Numbers
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-0 pb-4">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            index={index}
                            icon={stat.icon}
                            value={stat.value}
                            label={stat.label}
                            iconColor={stat.iconColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UdetiClinicSection;