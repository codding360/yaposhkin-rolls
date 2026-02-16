import Image from "next/image";

export function FranchiseSection() {
    return (
      <section className="overflow-hidden">
        {/* Background Image */}
        <div className="relative w-full h-[70vh] lg:min-h-screen">
          <Image
            src="https://mrcjahlawoimpgqrxkiw.supabase.co/storage/v1/object/sign/images/franchise.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MmRmMTUwZS04ZWZmLTQxMTQtYjc4Yi1lZjg1MTdlMDUzMTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvZnJhbmNoaXNlLndlYnAiLCJpYXQiOjE3NzEyNTQ5MzMsImV4cCI6MTgwMjc5MDkzM30.xZKwhArZQ9pINpSfTlyPr7r6kWEEu73VPwpV99zU4_Q"
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
                Франшиза Yaposhkin Rolls
              </h2>

              <div className="max-w-5xl">
                {/* <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white/95 leading-relaxed">
                  Откройте прибыльный бизнес с франшизой доставки суши{" "}
                  <span className="font-bold">Yaposhkin Rolls</span>.
                </p> */}

                <div className="space-y-3">
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                  Ваш путь к прибыльному бизнесу в сфере доставки суши! 
                  Получите готовую и проверенную бизнес-модель с высокой рентабельностью, 
                  минимальными вложениями и быстрой окупаемостью. Мы предоставляем узнаваемый бренд, 
                  оптимизированное меню, автоматизированную систему управления, эффективный маркетинг 
                  и все необходимые инструменты для вашего успеха.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    )
  }
  