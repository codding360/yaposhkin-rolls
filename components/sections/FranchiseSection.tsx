import Image from "next/image";

export function FranchiseSection() {
    return (
      <section className="overflow-hidden">
        {/* Background Image */}
        <div className="relative w-full h-[70vh] lg:min-h-screen">
          <Image
            src="/franchise.png"
            alt="Franchise sushi background"
            fill
            priority
            className="object-cover z-10"
          />
    
          {/* Main blue gradient overlay for text readability */}
          <div
            className="absolute z-20 h-[10%] w-full bottom-0"
            style={{
              background:
                "linear-gradient(0deg, #52e0ff 0%, transparent 100%)",
            }}
          />

          {/* Main blue gradient overlay for text readability */}
          <div
            className="absolute z-20 h-[10%] w-full"
            style={{
              background:
                "linear-gradient(180deg, #52e0ff 0%, transparent 100%)",
            }}
          />
        </div>
        
  
      <div className="relative z-30 w-full pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
                ФРАНШИЗА
              </h2>

              <div className="max-w-5xl">
                <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white/95 leading-relaxed">
                  Откройте прибыльный бизнес с франшизой доставки суши{" "}
                  <span className="font-bold">Yaposhkin Rolls</span>.
                </p>

                <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
                  Мы предлагаем готовую бизнес-модель с минимальными вложениями, быстрым запуском и высокой
                  рентабельностью. Франчайзи получают раскрученный бренд, продуманное меню, автоматизированную
                  IT-систему, маркетинговую поддержку и полный набор инструментов для успешного старта.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    )
  }
  