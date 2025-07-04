import React from 'react'
import { cn } from '../../utils/cn'

interface BentoGridProps {
  children: React.ReactNode
  className?: string
  columns?: number
  gap?: number
}

interface BentoGridItemProps {
  children: React.ReactNode
  className?: string
  colSpan?: number
  rowSpan?: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function BentoGrid({ 
  children, 
  className, 
  columns = 12, 
  gap = 4 
}: BentoGridProps) {
  return (
    <div 
      className={cn(
        "grid w-full h-full auto-rows-fr",
        `grid-cols-${columns}`,
        `gap-${gap}`,
        className
      )}
    >
      {children}
    </div>
  )
}

export function BentoGridItem({ 
  children, 
  className, 
  colSpan = 1, 
  rowSpan = 1,
  size = 'md'
}: BentoGridItemProps) {
  const sizeClasses = {
    sm: 'col-span-2 row-span-2',
    md: 'col-span-3 row-span-3', 
    lg: 'col-span-4 row-span-4',
    xl: 'col-span-6 row-span-6'
  }

  return (
    <div 
      className={cn(
        "relative overflow-hidden",
        sizeClasses[size],
        `col-span-${colSpan}`,
        `row-span-${rowSpan}`,
        className
      )}
    >
      {children}
    </div>
  )
}