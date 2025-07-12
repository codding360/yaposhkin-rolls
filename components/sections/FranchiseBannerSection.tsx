"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// Device type hook
function useDeviceType() {
  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  useEffect(() => {
    function check() {
      if (window.innerWidth < 700) setDevice('mobile');
      else if (window.innerWidth < 1200) setDevice('tablet');
      else setDevice('desktop');
    }
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return device;
}

export function FranchiseBannerSection() {
  const device = useDeviceType();
  let src = "/Fhd.png";
  let digitsSrc = "/our-digits.png"

  if (device === 'mobile') {
    src = "/iphone.png";
    digitsSrc = "our-digits-mobile.png"
  }
  else if (device === 'tablet') src = "/ipad.png"


  return (
    <section className="w-full">
      <Image
        src={digitsSrc}
        alt="Our digits"
        width={0}
        height={0}
        sizes="100vw"
        className="mx-auto px-6 pt-10 w-full h-auto max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-5xl"
      />
      <Image
        src={src}
        alt="Franchise Banner"
        width={1920}
        height={600}
        className="w-full h-auto object-cover"
        priority
      />
    </section>
  );
}

export default FranchiseBannerSection; 