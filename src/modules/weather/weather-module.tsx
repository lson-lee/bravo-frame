import React from 'react'
import { GlassCard } from '../../components/ui/glass-card'
import { Cloud, Sun, CloudRain } from 'lucide-react'

interface WeatherModuleProps {
  className?: string
}

export function WeatherModule({ className }: WeatherModuleProps) {
  // TODO: 集成真实的天气API
  const mockWeatherData = {
    temperature: 22,
    condition: 'sunny',
    location: '北京',
    humidity: 65,
    windSpeed: 8
  }

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-400" />
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-400" />
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-400" />
      default:
        return <Sun className="w-8 h-8 text-yellow-400" />
    }
  }

  return (
    <GlassCard className={className}>
      <div className="flex flex-col h-full space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-white/80 text-sm">{mockWeatherData.location}</div>
          {getWeatherIcon(mockWeatherData.condition)}
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-4xl font-bold text-white">
            {mockWeatherData.temperature}°
          </span>
          <div className="text-white/70 text-sm">
            <div>湿度 {mockWeatherData.humidity}%</div>
            <div>风速 {mockWeatherData.windSpeed} km/h</div>
          </div>
        </div>
        
        <div className="text-white/60 text-xs">
          天气晴朗，适合外出
        </div>
      </div>
    </GlassCard>
  )
}