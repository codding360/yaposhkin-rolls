import BackButton from "./BackButton";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function SubmitSuccessfulPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#52e0ff] via-[#0098bb] to-[#4ee6ff] px-4">
      <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 sm:p-12 flex flex-col items-center max-w-lg w-full">
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/80 rounded-full p-2">
          <IoMdCheckmarkCircleOutline className="text-[#25D366]" size={64} />
        </span>
        <h1 className="mt-8 text-4xl sm:text-5xl font-extrabold text-center mb-4 text-white">Спасибо, что выбрали нас!</h1>
        <p className="text-lg sm:text-xl text-center mb-8 text-white/90 font-medium">Мы свяжемся с вами в ближайшее время.<br/>Если хотите — напишите нам прямо сейчас в WhatsApp!</p>
        <a
          href="https://wa.me/79999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mb-3 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-normal py-2 px-4 rounded-lg text-base transition-colors"
        >
          <FaWhatsapp size={20} /> Написать в WhatsApp
        </a>
        <BackButton />
      </div>
    </div>
  );
} 