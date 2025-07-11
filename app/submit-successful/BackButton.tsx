"use client";

export default function BackButton() {
  return (
    <button
      onClick={() => window.location.replace("/")}
      className="w-full bg-white border border-[#0098bb] text-[#0098bb] hover:bg-[#e0f7fa] font-normal py-2 px-4 rounded-lg text-base transition-colors"
    >
      На главную
    </button>
  );
} 