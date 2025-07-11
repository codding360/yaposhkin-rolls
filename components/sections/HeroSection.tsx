"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AppleAppStoreButton } from "@/components/ui/apple-app-store-button"
import { PlayMarketButton } from "@/components/ui/play-market-button copy"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { FranchisePresentationForm } from "./FranchisePresentationForm";


export function HeroSection() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative">

      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-[-1]">
        <Image
          src="/ellipse.png"
          alt="Sushi roll on chopsticks"
          width={706}
          height={735}
          className="object-contain w-[300px] md:w-[400px] lg:w-[500px] xl:w-[706px] h-auto pointer-events-none select-none z-[-1] absolute top-0 left-0 z-[-1]"
          priority
        />
        <Image
          src="/rolls.png"
          alt="Sushi roll on chopsticks"
          width={706}
          height={735}
          className="object-contain w-[300px] md:w-[400px] lg:w-[500px] xl:w-[706px] h-auto pointer-events-none select-none z-10 relative"
          priority
        />
      </div>

      <div className="mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-10 z-30">
        {/* Header */}
        <header className=" mx-auto flex flex-col lg:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 w-full sm:w-auto">
            <Image
              src="/logo.png"
              alt="Yaposhkin Rolls Logo"
              width={695}
              height={82}
              className="w-full md:max-w-[695px] lg:max-w-[520px] xl:max-w-[596px] h-auto object-contain"
              priority
            />
          </div>
          <div className="flex flex-row gap-2 sm:gap-4 w-full sm:w-auto mt-4 sm:mt-0 items-center justify-center sm:justify-end">
            <AppleAppStoreButton />
            <PlayMarketButton />
          </div>
        </header>

        {/* Navigation Icons as Vectors */}
        <div className=" mx-auto flex justify-center md:justify-start gap-4 mb-8 md:mb-12 hidden md:block">
          <Image
            src="/vectors.png"
            alt="Sushi vector icons"
            width={400}
            height={100}
            className="w-40 sm:w-64 md:w-[400px] h-auto opacity-70"
            priority
          />
        </div>

        {/* Left Content */}
        <div
          className="text-center md:text-left mx-auto"
        >
            <div>
            <h2 className="text-[52px] xs:text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4 md:mb-6">
              ОТКРОЙТЕ
                <br />
                ДОСТАВКУ РОЛЛОВ
              </h2>
              <p className="text-[30px] xs:text-lg md:text-xl text-white/90 mb-1">
                всего за <span className="font-bold">6 недель</span> и начните получать
                от <br className="block xs:hidden" /> <span className="font-bold">2 800 000 рублей</span> чистой прибыли в год!
              </p>
            </div>

            <div className="block lg:hidden relative w-full overflow-hidden">
              <div className="flex justify-center">
                <div className="relative w-[600px]">
                  <Image
                    src="/ellipse.png"
                    alt="Sushi roll on chopsticks"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full pointer-events-none select-none absolute top-0 left-0 z-[-1]"
                    priority
                  />
                  <Image
                    src="/rolls.png"
                    alt="Sushi roll on chopsticks"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full pointer-events-none select-none relative z-10"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center max-w-5xl lg:max-w-3xl gap-3 sm:gap-4 w-full  mx-auto md:mx-0">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="max-w-[396px] h-[70px] px-4 py-2 rounded-full bg-white/20 hover:bg-white/50 backdrop-blur-sm border border-white/30 px-6 py-4 text-[24px] xs:text-lg font-semibold">
                    <span className="text-white">Получить презентацию</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Оставьте заявку</DialogTitle>
                  </DialogHeader>
                  <FranchisePresentationForm />
                </DialogContent>
              </Dialog>
              <div className="text-white text-[24px] lg:text-xl xs:text-lg text-center sm:text-left">
                <p className="font-semibold leading-tight">Оставьте заявку и получите презентацию Франшизы!</p>
              </div>
            </div>


            {/* Stats Section - Adaptive grid and animated counters */}
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