import Image from "next/image";
export function FooterSection() {
  return (
    <footer
      className="pt-12 pb-6 px-4 text-white"
      style={{ background: "#52e0ff" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
        {/* Logo and description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
          <span className="font-extrabold text-xl tracking-tight">Yaposhkin Rolls</span>
          <p className="text-white/80 text-sm mt-2 max-w-xs">
            Франшиза доставки суши и роллов. Откройте прибыльный бизнес с нами!
          </p>
        </div>

        {/* Contact info */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
          <span className="font-bold text-lg mb-2">Контакты</span>
          <a href="www.yaposhkinrolls.com" className="text-white/90 hover:underline text-base transition">www.yaposhkinrolls.com</a>
          <a href="mailto:info@yaposhkin-rolls.ru" className="text-white/90 hover:underline text-base transition">info@yaposhkin.com</a>
          <a href="tel:+996997716666" className="text-white/90 hover:underline text-base transition">+996 (997) 71 66 66</a>
        </div>
      </div>
      <hr className="my-6 border-white/20" />
      <div className="max-w-7xl mx-auto text-center text-white/60 text-xs">
        © {new Date().getFullYear()} Yaposhkin Rolls. Все права защищены.
      </div>
    </footer>
  );
} 