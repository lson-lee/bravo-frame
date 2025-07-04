import { BentoGrid, BentoGridItem } from './components/layout/bento-grid'
import { ClockModule } from './modules/clock/clock-module'
import { WeatherModule } from './modules/weather/weather-module'
import { GlassCard } from './components/ui/glass-card'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 h-screen">
        <BentoGrid className="h-full" columns={12}>
          {/* 时钟模块 */}
          <BentoGridItem size="md" className="col-span-3 row-span-3">
            <ClockModule className="h-full" />
          </BentoGridItem>
          
          {/* 天气模块 */}
          <BentoGridItem size="md" className="col-span-3 row-span-3">
            <WeatherModule className="h-full" />
          </BentoGridItem>
          
          {/* 占位模块 */}
          <BentoGridItem size="lg" className="col-span-4 row-span-3">
            <GlassCard className="h-full">
              <div className="flex flex-col items-center justify-center h-full text-white">
                <h3 className="text-xl font-bold mb-2">系统状态</h3>
                <p className="text-white/70 text-center">
                  CPU、内存、网络状态监控
                </p>
                <div className="mt-4 text-sm text-white/50">
                  敬请期待...
                </div>
              </div>
            </GlassCard>
          </BentoGridItem>
          
          {/* 大型展示区域 */}
          <BentoGridItem size="xl" className="col-span-6 row-span-6">
            <GlassCard className="h-full">
              <div className="flex flex-col items-center justify-center h-full text-white">
                <h2 className="text-3xl font-bold mb-4">Dynamic Wallpaper</h2>
                <p className="text-white/80 text-lg text-center mb-6">
                  基于 React + Vite + Bun 的动态壁纸应用
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-white/70 max-w-md">
                  <div className="text-center">
                    <div className="text-green-400 font-semibold">✅ 已完成</div>
                    <ul className="text-left mt-2 space-y-1">
                      <li>• 项目初始化</li>
                      <li>• 基础组件</li>
                      <li>• Bento Grid 布局</li>
                      <li>• 时钟模块</li>
                      <li>• 天气模块</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-400 font-semibold">🚧 开发中</div>
                    <ul className="text-left mt-2 space-y-1">
                      <li>• 拖拽功能</li>
                      <li>• 缩放功能</li>
                      <li>• 系统监控</li>
                      <li>• 配置系统</li>
                      <li>• 背景切换</li>
                    </ul>
                  </div>
                </div>
              </div>
            </GlassCard>
          </BentoGridItem>
          
          {/* 小型信息卡片 */}
          <BentoGridItem size="sm" className="col-span-3 row-span-3">
            <GlassCard className="h-full">
              <div className="flex flex-col items-center justify-center h-full text-white">
                <h4 className="font-semibold mb-2">快捷操作</h4>
                <p className="text-white/70 text-xs text-center">
                  常用功能和快捷方式
                </p>
              </div>
            </GlassCard>
          </BentoGridItem>
        </BentoGrid>
      </div>
    </div>
  )
}

export default App