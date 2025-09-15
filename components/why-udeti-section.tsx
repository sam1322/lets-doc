// // // components/why-udeti-section.tsx
// // export function WhyUdetiSection() {
// //     return (
// //         <section className="bg-white py-16">
// //             <div className="container mx-auto px-4 text-center">
// //                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// //                     Why Udeti
// //                 </h2>
// //                 <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
// //                     Growing a practice in today's digital world comes with unique challenges
// //                 </p>

// //                 {/* Doctor Image */}
// //                 <div className="relative inline-block">
// //                     <div className="w-64 h-64 mx-auto">
// //                         {/* Placeholder for doctor image - replace with actual image */}
// //                         <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center">
// //                             <span className="text-teal-600">Stressed Doctor Image</span>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     )
// // }
// // components/why-udeti-section.tsx
// import { Card } from '@/components/ui/card'
// import Image from 'next/image'

// const challenges = [
//   {
//     id: 1,
//     text: "My clinic lacks visibility on the internet; my Google Business profile is incomplete.",
//     bgColor: "bg-blue-500",
//   },
//   {
//     id: 2,
//     text: "I can't miss any calls as I may lose patients",
//     bgColor: "bg-emerald-500",
//   },
//   {
//     id: 3,
//     text: "Many patients miss appointments without reminders",
//     bgColor: "bg-orange-500",
//   },
//   {
//     id: 4,
//     text: "Patient follow-up compliance is poor",
//     bgColor: "bg-purple-500",
//   },
//   {
//     id: 5,
//     text: "Unable to get a simple solution to engage with all my patients (e.g. camps, offers etc.)",
//     bgColor: "bg-red-500",
//   },
//   {
//     id: 6,
//     text: "Hard to set up a new clinic with digital capabilities as it adds significantly to costs",
//     bgColor: "bg-teal-500",
//   },
// ]

// export function WhyUdetiSection() {
//   return (
//     <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Why Udeti
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
//             Growing a practice in today's digital world comes with unique challenges
//           </p>
          
//           {/* Doctor Image */}
//           <div className="relative inline-block mb-12">
//             <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
//               {/* Replace with actual image */}
//               <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
//                 <span className="text-gray-500 text-sm">Doctor Image</span>
//               </div>
//               {/* Uncomment when you have the actual image */}
//               {/* <Image
//                 src="/path-to-stressed-doctor-image.jpg"
//                 alt="Stressed doctor"
//                 width={192}
//                 height={192}
//                 className="w-full h-full object-cover"
//               /> */}
//             </div>
//           </div>
//         </div>

//         {/* Challenge Cards Grid */}
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {challenges.map((challenge) => (
//               <Card
//                 key={challenge.id}
//                 className={`${challenge.bgColor} text-white p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl min-h-[200px] flex items-center justify-center`}
//               >
//                 <p className="text-center text-lg font-medium leading-relaxed">
//                   {challenge.text}
//                 </p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
// components/why-udeti-section.tsx
import { ChallengeCard } from './challenge-card'
import Image from 'next/image'
import WorriedDoctor from "@/public/worried-doctor-challenges.jpg"

const challenges = [
  {
    id: 1,
    text: "My clinic lacks visibility on the internet; my Google Business profile is incomplete.",
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    text: "I can't miss any calls as I may lose patients",
    bgColor: "bg-emerald-500",
  },
  {
    id: 3,
    text: "Many patients miss appointments without reminders",
    bgColor: "bg-orange-500",
  },
  {
    id: 4,
    text: "Patient follow-up compliance is poor",
    bgColor: "bg-purple-500",
  },
  {
    id: 5,
    text: "Unable to get a simple solution to engage with all my patients (e.g. camps, offers etc.)",
    bgColor: "bg-red-500",
  },
  {
    id: 6,
    text: "Hard to set up a new clinic with digital capabilities as it adds significantly to costs",
    bgColor: "bg-teal-500",
  },
]

export function WhyUdetiSection() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Udeti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Growing a practice in today's digital world comes with unique challenges
          </p>
          
          {/* Doctor Image */}
          <div className="relative inline-block mb-12">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg bg-white p-2">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                {/* Replace with actual image */}
                {/* <span className="text-gray-500 text-sm">Stressed Doctor</span> */}
                {/* Uncomment when you have the actual image */}
                <Image
                  src={WorriedDoctor.src}
                  alt="Stressed doctor holding head"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
              <ChallengeCard
                key={challenge.id}
                text={challenge.text}
                bgColor={challenge.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}