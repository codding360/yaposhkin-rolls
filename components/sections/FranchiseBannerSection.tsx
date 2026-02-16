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
  let src = "https://mrcjahlawoimpgqrxkiw.supabase.co/storage/v1/object/sign/images/Fhd.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MmRmMTUwZS04ZWZmLTQxMTQtYjc4Yi1lZjg1MTdlMDUzMTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvRmhkLndlYnAiLCJpYXQiOjE3NzEyNTUxMzgsImV4cCI6MTgwMjc5MTEzOH0.jKaBfd_xV3B25GkufO8Hasg2pPz4NXAurHjEL19ZD9c";
  let digitsSrc = "/our-digits.png"

  if (device === 'mobile') {
    src = "https://mrcjahlawoimpgqrxkiw.supabase.co/storage/v1/object/sign/images/iphone.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MmRmMTUwZS04ZWZmLTQxMTQtYjc4Yi1lZjg1MTdlMDUzMTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXBob25lLndlYnAiLCJpYXQiOjE3NzEyNTUxNTYsImV4cCI6MTgwMjc5MTE1Nn0.AjGU92U-IVG2GgJhiHOIWq0At4OA8U7uuM9uh4iHgpk";
    digitsSrc = "our-digits-mobile.png"
  }
  else if (device === 'tablet') src = "https://mrcjahlawoimpgqrxkiw.supabase.co/storage/v1/object/sign/images/ipad.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MmRmMTUwZS04ZWZmLTQxMTQtYjc4Yi1lZjg1MTdlMDUzMTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaXBhZC53ZWJwIiwiaWF0IjoxNzcxMjU1MTY4LCJleHAiOjE4MDI3OTExNjh9.8MLLBTVHF_jrVJgiNbF2U8j8xXPha8ELeV9JCW5i0RU"


  return (
    <section className="w-full">
      <Image
        src={digitsSrc}
        alt="Our digits"
        width={0}
        height={0}
        sizes="100vw"
        className="mx-auto px-6 pt-10 w-full h-auto max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-7xl"
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