// components/challenge-card.tsx
import { Card } from '@/components/ui/card'

interface ChallengeCardProps {
  text: string
  bgColor: string
  className?: string
}

export function ChallengeCard({ text, bgColor, className = "" }: ChallengeCardProps) {
  return (
    <Card
      className={`${bgColor} text-white p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl min-h-[200px] flex items-center justify-center ${className}`}
    >
      <p className="text-center text-lg font-medium leading-relaxed">
        {text}
      </p>
    </Card>
  )
}