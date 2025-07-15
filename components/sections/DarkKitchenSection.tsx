"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { Link, Maximize2 } from "lucide-react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Button } from "@/components/ui/button";

// Kitchen images for the carousel
const kitchenImages = [
  {
    src: "/dark-1.webp",
    alt: "Modern Dark Kitchen - Interior View"
  },
  {
    src: "/dark-2.webp", 
    alt: "Modern Dark Kitchen - Equipment Setup"
  },
  {
    src: "/dark-3.webp",
    alt: "Modern Dark Kitchen - Workstation"
  }
];



export function DarkKitchenSection() {
    const [api, setApi] = useState<any>(null);
    const [current, setCurrent] = useState(0);
    const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);

    useEffect(() => {
        if (!api) {
            return;
        }

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    // Prevent background scroll and handle Escape key
    useEffect(() => {
      if (!isFullScreenOpen) return;
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsFullScreenOpen(false);
      };
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [isFullScreenOpen]);

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
                <div className="space-y-3">
                  <div className="inline-block">
                    <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                      <span className="text-white/90 text-sm font-medium tracking-wider uppercase">Формат</span>
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
                <div className="space-y-3">
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                    Профессиональная кухня без зала для гостей, работающая только на доставку
                  </p>
                </div>
    
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-sm flex flex-col items-start">
                    <div className="text-white/70 text-xs font-medium uppercase tracking-wider">Открытия</div>
                    <div className="text-lg font-bold text-white mt-1">15-20 дней</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-sm flex flex-col items-start">
                    <div className="text-white/70 text-xs font-medium uppercase tracking-wider">Инвестиции</div>
                    <div className="text-lg font-bold text-white mt-1">От 1.4 млн ₽</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-sm flex flex-col items-start">
                    <div className="text-white/70 text-xs font-medium uppercase tracking-wider">Площадь</div>
                    <div className="text-lg font-bold text-white mt-1">30-50 м²</div>
                  </div>
                </div>

                <Button
                  onClick={() => window.location.assign('/forms/create-franchise-request')}
                  type="button"
                  className="w-full h-[70px] rounded-xl px-6 py-4 text-[24px] xs:text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-[#EC661A] to-[#E73E16] text-white shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EC661A]"
                >
                  <span className="text-white drop-shadow-sm">Получить презентацию</span>
                </Button>
              </div>
    
              {/* Image Section - Takes 7 columns */}
              <div className="lg:col-span-7 relative">
                <div className="relative">
                  {/* Main Image Container */}
                  <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-white/30 via-white/10 to-white/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
    
                    {/* Carousel Frame */}
                    <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/30 p-3">
                      <Carousel
                        setApi={setApi}
                        className="w-full"
                        opts={{
                          align: "start",
                          loop: true,
                        }}
                      >
                        <CarouselContent>
                          {kitchenImages.map((image, index) => (
                            <CarouselItem key={index}>
                              <div className="relative rounded-2xl overflow-hidden">
                                <img
                                  src={image.src}
                                  alt={image.alt}
                                  className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
    
                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        
                        {/* Navigation Arrows */}
                        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
                        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
                      </Carousel>
    
                      {/* Floating UI Elements - Image Indicators */}
                      <div className="absolute top-6 left-6 flex space-x-2">
                        {kitchenImages.map((_, index) => (
                          <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              current === index 
                                ? 'bg-white scale-125' 
                                : 'bg-white/60 hover:bg-white/80'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Full Screen Button - Bottom Right */}
                      <button
                        onClick={() => setIsFullScreenOpen(true)}
                        className="absolute bottom-6 right-6 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        title="View full screen"
                      >
                        <Maximize2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>

          {/* Full Screen Image Gallery */}
          {isFullScreenOpen && (
            <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={() => setIsFullScreenOpen(false)}
                className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
                aria-label="Close gallery"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
              <div className="w-full max-w-4xl">
                <ImageGallery
                  items={kitchenImages.map(img => ({
                    original: img.src,
                    thumbnail: img.src,
                    originalAlt: img.alt,
                    thumbnailAlt: img.alt
                  }))}
                  startIndex={current}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showNav={true}
                  showThumbnails={false}
                  showIndex={false}
                  slideInterval={0}
                  slideOnThumbnailOver={false}
                  additionalClass="image-gallery-fullscreen"
                />
              </div>
            </div>
          )}
        </section>
      )
  }  

// Island kitchen images for the carousel
const islandKitchenImages = [
  {
    src: "/Island-2.webp",
    alt: "Modern Island Kitchen - Interior View"
  },
  {
    src: "/Island-1.webp", 
    alt: "Modern Island Kitchen - Equipment Setup"
  },
  {
    src: "/Island-3.webp",
    alt: "Modern Island Kitchen - Workstation"
  }
];

// New section for FORMAT ISLAND
export function IslandKitchenSection() {
  const [islandApi, setIslandApi] = useState<any>(null);
  const [islandCurrent, setIslandCurrent] = useState(0);
  const [isIslandFullScreenOpen, setIsIslandFullScreenOpen] = useState(false);

  useEffect(() => {
    if (!islandApi) {
      return;
    }

    islandApi.on("select", () => {
      setIslandCurrent(islandApi.selectedScrollSnap());
    });
  }, [islandApi]);

  // Prevent background scroll and handle Escape key
  useEffect(() => {
    if (!isIslandFullScreenOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsIslandFullScreenOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isIslandFullScreenOpen]);


  return (
    <section
      className="relative w-full min-h-screen py-20 overflow-hidden"
      style={{ background: "rgba(0, 152, 187, 0.85)" }}
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
              {/* Carousel Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/30 p-3">
                <Carousel
                  setApi={setIslandApi}
                  className="w-full"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {islandKitchenImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative rounded-2xl overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          {/* Image Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  {/* Navigation Arrows */}
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
                </Carousel>

                {/* Floating UI Elements - Image Indicators */}
                <div className="absolute top-6 left-6 flex space-x-2">
                  {islandKitchenImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        islandCurrent === index 
                          ? 'bg-white scale-125' 
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>

                {/* Full Screen Button - Bottom Right */}
                <button
                  onClick={() => setIsIslandFullScreenOpen(true)}
                  className="absolute bottom-6 right-6 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  title="View full screen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Content - Takes 5 columns (right) */}
          <div className="lg:col-span-5 space-y-7 order-1 lg:order-2">
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-block">
                <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                  <span className="text-white/90 text-sm font-medium tracking-wider uppercase">Формат</span>
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
              Это новый формат кулинарного пространства с открытой кухней, объединяющий профессиональную готовку и уютную зону для гостей в ТРЦ и фудмоллах. Прозрачность процесса привлекает внимание и делает опыт посетителей особенным.
              </p>
            </div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
              <div className="p-3 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-sm flex flex-col items-start">
                <div className="text-white/70 text-xs font-medium uppercase tracking-wider">Открытия</div>
                <div className="text-lg font-bold text-white mt-1">от 45 дней</div>
              </div>
              <div className="p-3 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-sm flex flex-col items-start">
                <div className="text-white/70 text-xs font-medium uppercase tracking-wider">Инвестиции</div>
                <div className="text-lg font-bold text-white mt-1">От 4.5 млн ₽</div>
              </div>
              <div className="p-3 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-sm flex flex-col items-start">
                <div className="text-white/70 text-xs font-medium uppercase tracking-wider">Площадь</div>
                <div className="text-lg font-bold text-white mt-1">50-100 м²</div>
              </div>
            </div>

            <Button
              onClick={() => window.location.assign('/forms/create-franchise-request')}
              type="button"
              className="w-full h-[70px] rounded-xl px-6 py-3 text-[24px] xs:text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-[#EC661A] to-[#E73E16] text-white shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EC661A]"
            >
              <span className="text-white drop-shadow-sm">Получить презентацию</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Full Screen Image Gallery for Island Kitchen */}
      {isIslandFullScreenOpen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setIsIslandFullScreenOpen(false)}
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
            aria-label="Close gallery"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div className="w-full max-w-4xl">
            <ImageGallery
              items={islandKitchenImages.map(img => ({
                original: img.src,
                thumbnail: img.src,
                originalAlt: img.alt,
                thumbnailAlt: img.alt
              }))}
              startIndex={islandCurrent}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={true}
              showThumbnails={false}
              showIndex={false}
              slideInterval={0}
              slideOnThumbnailOver={false}
              additionalClass="image-gallery-fullscreen"
            />
          </div>
        </div>
      )}
    </section>
  );
} 
