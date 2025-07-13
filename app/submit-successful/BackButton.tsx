"use client";
import { Button } from "@/components/ui/button";

export default function BackButton() {
  return (
    <Button
      onClick={() => window.location.replace("/")}
      className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-base sm:text-lg transition disabled:opacity-60 shadow-sm mt-6"
      >
      На главную
    </Button>
  );
} 