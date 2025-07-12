import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AppleAppStoreButton } from "@/components/ui/apple-app-store-button"
import { PlayMarketButton } from "@/components/ui/play-market-button copy"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"


export function HeroSection() {
  return (
    <section className="relative min-h-screen">

      {/* Background Vector Images */}
      <div className="absolute inset-0 z-0 overflow-hidden lg:hidden">
        <Image
          src="/vector-1.png"
          alt="Decorative vector"
          width={200}
          height={200}
          className="absolute top-20 left-10 w-32 h-32 opacity-30 animate-pulse"
          priority
        />
        <Image
          src="/vector-2.png"
          alt="Decorative vector"
          width={150}
          height={150}
          className="absolute top-40 right-20 w-24 h-24 opacity-25 animate-pulse delay-1000"
          priority
        />
        <Image
          src="/vector-3.png"
          alt="Decorative vector"
          width={180}
          height={180}
          className="absolute bottom-32 left-1/4 w-28 h-28 opacity-20 animate-pulse delay-500"
          priority
        />
      </div>

      {/* Container */}
      <div className="mx-auto px-2 sm:px-6 md:px-10 py-6 sm:py-10 z-30">

        {/* Header */}
        <header className=" mx-auto flex flex-col lg:flex-row justify-between items-center mb-5 gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 w-full sm:w-auto">
            <Image
              src="/logo.png"
              alt="Yaposhkin Rolls Logo"
              width={596}
              height={70}
              className="w-full md:max-w-[320px] lg:max-w-[420px] xl:max-w-[596px] h-auto object-contain"
              priority
            />
          </div>
          <div className="flex flex-row gap-2 sm:gap-4 w-full sm:w-auto sm:mt-0 items-center justify-center sm:justify-end z-50">
            <AppleAppStoreButton />
            <PlayMarketButton />
          </div>
        </header>


        {/* Hero */}
        <div className="flex block lg:flex justify-between items-center">       
          
          {/* Left Content */}
          <div className="text-center lg:text-left lg:max-w-2xl flex flex-col lg:gap-4 gap-0">

            <Image
              src="/vectors.png"
              alt="Sushi vector icons"
              width={400}
              height={100}
              className="w-40 sm:w-64 md:w-[400px] h-auto hidden lg:block"
              priority
            />
            
            <h2 className="text-5xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4 md:mb-6">
              ОТКРОЙТЕ <br className="block lg:hidden"/>
              ДОСТАВКУ <br className="block lg:hidden"/>РОЛЛОВ
            </h2>
            <p className="text-[30px] xs:text-xl md:text-2xl text-white/90 mb-1 leading-[30px] md:leading-none">
              всего за <span className="font-bold">6 недель</span> и начните получать
              <br className="block lg:hidden"/> от <span className="font-bold">2 800 000 рублей</span><br className="block lg:hidden"/> чистой прибыли в год!
            </p>

            <Image
              src="/rolls-md.png"
              alt="Sushi roll on chopsticks"
              width={600}
              height={600}
              className="object-contain w-full h-full pointer-events-none select-none relative z-10 w-full overflow-hidden block lg:hidden"
              priority
            />

            <Button className="w-full h-[70px] px-4 py-2 rounded-full bg-white/20 hover:bg-white/50 backdrop-blur-sm border border-white/30 px-6 py-4 text-[24px] xs:text-lg font-semibold">
              <span className="text-white">Получить презентацию</span>
            </Button>
          </div>

          {/* Right Content */}
          <Image
            src="/rolls-md.png"
            alt="Sushi roll on chopsticks"
            width={706}
            height={735}
            className="object-contain w-[300px] md:w-[400px] lg:w-[500px] h-auto pointer-events-none select-none z-10 relative hidden lg:block"
            priority
          />
        </div>

        <div className="lg:grid hidden mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-8 md:mt-14 text-center sm:text-left">
          <div className="text-white">
            <h3 className="text-lg xs:text-xl md:text-2xl font-bold mb-1 md:mb-2">
              {"< "}
              <AnimatedCounter end={6} duration={1.2} className="inline" />
              {" лет"}
            </h3>
            <p className="text-base md:text-lg opacity-90">
              Доставляем суши,
              <br className="hidden xs:block" />
              роллы и радость
            </p>
          </div>
          <div className="text-white">
            <h3 className="text-lg xs:text-xl md:text-2xl font-bold mb-1 md:mb-2">
              {"< от "}
              <AnimatedCounter end={3600000} duration={1.5} className="inline" />
              {" ₽"}
            </h3>
            <p className="text-base md:text-lg opacity-90">
              годовой оборот всех
              <br className="hidden xs:block" />
              филиалов Yaposhkin Rolls
            </p>
          </div>
          <div className="text-white">
            <h3 className="text-lg xs:text-xl md:text-2xl font-bold mb-1 md:mb-2">
              {"< от "}
              <AnimatedCounter end={1200} duration={1} className="inline" />
              {" заказов/мес"}
            </h3>
            <p className="text-base md:text-lg opacity-90">в среднем в каждом филиале</p>
          </div>
        </div>
      </div>

        
        <div className="lg:hidden block z-30 w-full">
          <Image
            src="/stats.png"
            alt="Stats"
            width={440}
            height={120}
            className="w-full h-auto"
            priority
          />
        </div>
    </section>
  );
} 