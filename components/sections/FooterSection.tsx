import Image from "next/image";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE;
const CONTACT_SITE = process.env.NEXT_PUBLIC_CONTACT_SITE;

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
          <a href={`https://${CONTACT_SITE}`} className="text-white/90 hover:underline text-base transition">{CONTACT_SITE}</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/90 hover:underline text-base transition">{CONTACT_EMAIL}</a>
          <a href={`tel:${CONTACT_PHONE}`} className="text-white/90 hover:underline text-base transition">{CONTACT_PHONE}</a>
        </div>
      </div>
      <hr className="my-6 border-white/20" />
      <div className="max-w-7xl mx-auto text-center text-white/60 text-xs">
        © {new Date().getFullYear()} Yaposhkin Rolls. Все права защищены.
      </div>
    </footer>
  );
} 