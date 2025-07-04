import React from 'react'
import { cn } from '../../utils/cn'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  blur?: 'sm' | 'md' | 'lg' | 'xl'
  opacity?: number
}

export function GlassCard({ 
  children, 
  className, 
  blur = 'md', 
  opacity = 0.1 
}: GlassCardProps) {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  }

  return (
    <div 
      className={cn(
        "relative rounded-xl border border-white/20 p-4",
        blurClasses[blur],
        className
      )}
      style={{
        background: `rgba(255, 255, 255, ${opacity})`
      }}
    >
      {children}
    </div>
  )
}