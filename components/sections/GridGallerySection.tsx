"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
const images = [
  '/grid/sushi1.png',
  '/grid/sushi2.png',
  '/grid/sushi3.png',
  '/grid/sushi4.png',
  '/grid/sushi5.png',
  '/grid/sushi6.png',
  '/grid/sushi7.png',
];

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.3 }
  }
};

export function SushiGallery() {
  return (
    <section className="py-20 text-white text-center"
      style={{ background: "rgba(0, 152, 187, 0.85)" }}
    >
      <div className="relative max-w-7xl mx-auto">

        {/* Navigation Icons as Vectors */}
        <div className="flex justify-center items-center flex-col gap-6 mb-10 md:mb-12">
          <div className="relative flex items-center justify-center">
            <Image
              src="/ellipse-4.png"
              alt="Sushi roll on chopsticks"
              width={600}
              height={600}
              className="object-contain absolute z-0"
              priority
            />
            <Image
              src="/vectors.png"
              alt="Sushi vector icons"
              width={530}
              height={136}
              className="object-contain w-full h-full opacity-70 relative z-10"
              priority
            />
          </div>
          <Image
            src="/logo.svg"
            alt="Yaposhkin Rolls Logo"
            width={695}
            height={82}
            className="w-full md:max-w-[695px] lg:max-w-[520px] xl:max-w-[596px] h-auto object-contain"
            priority
          />
        </div>

        {/* Grid Layout: 2 columns on mobile, 3 columns on md+ screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {/* Column 1 */}
          <motion.div 
            className="flex flex-col gap-4"
            style={{ 
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 40%, black 100%, transparent 100%)", 
              maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)" 
            }}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={imageVariants} whileHover="hover">
              <Image src={images[0]} alt="Sushi 1" width={353} height={536} className="rounded-lg w-full h-auto" />
            </motion.div>
            <motion.div variants={imageVariants} whileHover="hover">
              <Image src={images[2]} alt="Sushi 4" width={335} height={217} className="rounded-lg w-full h-auto" />
            </motion.div>
            <motion.div className='block md:hidden' variants={imageVariants} whileHover="hover">
              <Image src={images[4]} alt="Sushi 6" width={335} height={217} className="rounded-lg w-full h-auto" />
            </motion.div>

            <motion.div className='block md:hidden' variants={imageVariants} whileHover="hover">
              <Image src={images[3]} alt="Sushi 7" width={398} height={305} className="rounded-lg w-full h-auto" />
            </motion.div>
          </motion.div>

          {/* Center Column */}
          <motion.div 
            className="flex flex-col gap-4"
            style={{ 
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 40%, black 100%, transparent 100%)", 
              maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)" 
            }}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            <motion.div variants={imageVariants} whileHover="hover">
              <Image src={images[1]} alt="Sushi 2" width={398} height={305} className="rounded-lg w-full h-auto" />
            </motion.div>
            <motion.div variants={imageVariants} whileHover="hover">
              <Image src={images[5]} alt="Chef" width={400} height={600} className="rounded-xl w-full h-auto" />
            </motion.div>
            
            <motion.div className='block md:hidden' variants={imageVariants} whileHover="hover">
              <Image src={images[6]} alt="Sushi 2" width={398} height={305} className="rounded-lg w-full h-auto" />
            </motion.div>
          </motion.div>

          {/* Column 3 */}
          <motion.div 
            className="hidden md:flex flex-col gap-4"
            style={{ 
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 40%, black 100%, transparent 100%)", 
              maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)" 
            }}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <motion.div variants={imageVariants} whileHover="hover">
              <Image src={images[6]} alt="Sushi 2" width={398} height={305} className="rounded-lg w-full h-auto" />
            </motion.div>
            <motion.div variants={imageVariants} whileHover="hover">
              <Image src={images[3]} alt="Sushi 7" width={398} height={305} className="rounded-lg w-full h-auto" />
            </motion.div>
          </motion.div>
        </div>

        <Button
          onClick={() => window.location.assign('/forms/create-franchise-request')}
          type="button"
          className="xl:w-[400px] mt-10 w-full h-[70px] rounded-xl px-6 py-3 text-[24px] xs:text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-[#EC661A] to-[#E73E16] text-white shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EC661A]"
        >
          <span className="text-white drop-shadow-sm">Получить презентацию</span>
        </Button>
      </div>
    </section>
  );
}