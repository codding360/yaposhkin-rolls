import React from "react";
import Image from "next/image";
import { Instagram, Facebook, Phone, Mail, Globe, MessageCircle } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

export function ContactBarSection() {
  return (
    <footer className="w-full bg-[#4ee6ff] pt-12 pb-8 px-4 border-t border-white/20 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Logo */}
        <div className="flex-shrink-0 flex flex-col items-center md:items-start mb-6 md:mb-0 gap-2">
          <Image
            src="/logo.png"
            alt="Yaposhkin Rolls Logo"
            width={220}
            height={40}
            className="w-[180px] md:w-[220px] h-auto object-contain mb-2"
            priority
          />
          <span className="text-white/80 text-xs font-medium">© {new Date().getFullYear()} Yaposhkin Rolls</span>
        </div>
        {/* Contacts & Socials */}
        <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-center md:text-right">
            <a href="https://www.yaposhkinrolls.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white text-lg md:text-xl font-extrabold hover:text-white/80 transition underline underline-offset-4">
              <Globe size={20} className="text-white/80" /> www.yaposhkinrolls.com
            </a>
            <a href="mailto:info@yaposhkin.com" className="flex items-center gap-2 text-white text-lg md:text-xl font-extrabold hover:text-white/80 transition underline underline-offset-4">
              <Mail size={20} className="text-white/80" /> info@yaposhkin.com
            </a>
            <a href="tel:+996997716666" className="flex items-center gap-2 text-white text-lg md:text-xl font-extrabold hover:text-white/80 transition underline underline-offset-4">
              <Phone size={20} className="text-white/80" /> +996 (997) 71 66 66
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 mt-2 justify-center md:justify-end">
            <a href="https://instagram.com/yaposhkinrolls" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <Instagram size={28} className="text-white" />
            </a>
            <a href="https://facebook.com/yaposhkinrolls" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <Facebook size={28} className="text-white" />
            </a>
            <a href="https://wa.me/996997716666" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <FaWhatsapp size={28} className="text-white" />
            </a>
            <a href="https://t.me/yaposhkinrolls" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <FaTelegramPlane size={28} className="text-white" />
            </a>
          </div>
          {/* Additional Links */}
          <div className="flex flex-wrap gap-4 mt-4 text-white/80 text-sm justify-center md:justify-end">
            <a href="/privacy" className="hover:text-white underline underline-offset-2 transition">Политика конфиденциальности</a>
            <a href="/terms" className="hover:text-white underline underline-offset-2 transition">Пользовательское соглашение</a>
            <a href="/about" className="hover:text-white underline underline-offset-2 transition">О компании</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 