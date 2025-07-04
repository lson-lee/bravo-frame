import React, { useState, useEffect } from 'react'
import { GlassCard } from '../../components/ui/glass-card'
import { Clock } from 'lucide-react'

interface ClockModuleProps {
  format?: '12h' | '24h'
  showSeconds?: boolean
  className?: string
}

export function ClockModule({ 
  format = '24h', 
  showSeconds = true, 
  className 
}: ClockModuleProps) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      ...(showSeconds && { second: '2-digit' }),
      hour12: format === '12h'
    }
    return date.toLocaleTimeString('zh-CN', options)
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    })
  }

  return (
    <GlassCard className={className}>
      <div className="flex flex-col items-center justify-center h-full space-y-2">
        <Clock className="w-6 h-6 text-white/80 mb-2" />
        <div className="text-3xl font-bold text-white font-mono">
          {formatTime(time)}
        </div>
        <div className="text-sm text-white/70 text-center">
          {formatDate(time)}
        </div>
      </div>
    </GlassCard>
  )
}