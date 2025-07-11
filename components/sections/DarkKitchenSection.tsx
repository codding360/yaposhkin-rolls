import Image from "next/image";
// import { FaShippingFast } from "react-icons/fa";
// import { GiKitchenKnives } from "react-icons/gi";

export function DarkKitchenSection() {
    return (
        <section
          className="relative w-full min-h-screen py-20 overflow-hidden"
          style={{ background: "linear-gradient(0deg, rgba(0, 152, 187, 0.85) 0%, rgba(0, 152, 187, 0.85) 50%, #52e0ff 100%)" }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/8 rounded-full blur-2xl animate-pulse delay-500" />
          </div>
    
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
              {/* Content - Takes 5 columns */}
              <div className="lg:col-span-5 space-y-10">
                {/* Header */}
                <div className="space-y-6">
                  <div className="inline-block">
                    <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                      <span className="text-white/90 text-sm font-medium tracking-wider uppercase">Новый формат</span>
                    </div>
                  </div>
    
                  <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
                    DARK
                    <br />
                    <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">KITCHEN</span>
                  </h1>
    
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-1 bg-white rounded-full" />
                    <div className="w-6 h-1 bg-white/60 rounded-full" />
                    <div className="w-3 h-1 bg-white/40 rounded-full" />
                  </div>
                </div>
    
                {/* Description */}
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                    Профессиональная кухня без зала для гостей, работающая только на доставку
                  </p>
    
                  <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-white font-medium">Площадь: 30-50 м²</span>
                  </div>
                </div>
    
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative space-y-3">
                      <div>
                        <div className="text-white/80 text-sm font-medium uppercase tracking-wider">Сроки открытия</div>
                        <div className="text-2xl md:text-3xl font-bold text-white mt-1">15-20 дней</div>
                      </div>
                    </div>
                  </div>
    
                  <div className="group relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative space-y-3">
                      <div>
                        <div className="text-white/80 text-sm font-medium uppercase tracking-wider">Инвестиции</div>
                        <div className="text-2xl md:text-3xl font-bold text-white mt-1">От 1.4 млн ₽</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Image Section - Takes 7 columns */}
              <div className="lg:col-span-7 relative">
                <div className="relative">
                  {/* Main Image Container */}
                  <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-white/30 via-white/10 to-white/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
    
                    {/* Image Frame */}
                    <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/30 p-3">
                      <div className="relative rounded-2xl overflow-hidden">
                        <img
                          src="/kitchen-1.png"
                          alt="Modern Dark Kitchen"
                          className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
    
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    
                        {/* Floating UI Elements */}
                        <div className="absolute top-6 left-6 flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-white/80" />
                          <div className="w-3 h-3 rounded-full bg-white/60" />
                          <div className="w-3 h-3 rounded-full bg-white/40" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </section>
      )
  }  

// New section for FORMAT ISLAND
export function IslandKitchenSection() {
  return (
    <section
      className="relative w-full min-h-screen py-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, rgba(0, 152, 187, 0.85) 0%, rgba(0, 152, 187, 0.85) 50%, #52e0ff 100%)" }}
      >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/8 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Image Section - Takes 7 columns (left) */}
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-white/30 via-white/10 to-white/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/30 p-3">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="/kitchen-2.png"
                    alt="Modern Island Kitchen"
                    className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  {/* Floating UI Elements */}
                  <div className="absolute top-6 left-6 flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-white/80" />
                    <div className="w-3 h-3 rounded-full bg-white/60" />
                    <div className="w-3 h-3 rounded-full bg-white/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Takes 5 columns (right) */}
          <div className="lg:col-span-5 space-y-10 order-1 lg:order-2">
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-block">
                <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                  <span className="text-white/90 text-sm font-medium tracking-wider uppercase">Новый формат</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
                ISLAND
                <br />
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">KITCHEN</span>
              </h1>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-white rounded-full" />
                <div className="w-6 h-1 bg-white/60 rounded-full" />
                <div className="w-3 h-1 bg-white/40 rounded-full" />
              </div>
            </div>
            {/* Description */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                ISLAND – это профессиональная кухня с посадочными местами, работающая в открытых пространствах ТРЦ и фудмоллов.
              </p>
              <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-white font-medium">Площадь: 50-100 м²</span>
              </div>
            </div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-3">
                  <div>
                    <div className="text-white/80 text-sm font-medium uppercase tracking-wider">Сроки открытия</div>
                    <div className="text-2xl md:text-3xl font-bold text-white mt-1">от 45 дней</div>
                  </div>
                </div>
              </div>
              <div className="group relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-3">
                  <div>
                    <div className="text-white/80 text-sm font-medium uppercase tracking-wider">Инвестиции</div>
                    <div className="text-2xl md:text-3xl font-bold text-white mt-1">От 4.5 млн ₽</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 