"use server";
import { BarChart2, DollarSign, ThumbsUp, Users, ReceiptRussianRuble } from "lucide-react";
import React from "react";

const cardStyle = "group relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center";

export async function FranchiseAdvantagesSection() {
  const cards = [
    {
      icon: <BarChart2 className="w-10 h-10 text-white" />,
      title: "Действующий успешный бизнес",
    },
    {
      icon: <ReceiptRussianRuble className="w-10 h-10 text-white" />,
      title: "Простой формат без ресторанов и SPA",
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Поддержка опытной команды",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-white" />,
      title: "Быстрая окупаемость и понятная модель",
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-white" />,
      title: "Высокий уровень лояльности гостей",
    },
  ];

  return (
    <section className="py-20 px-4 text-white text-center" style={{ background: "rgba(0, 152, 187, 0.85)" }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8">ПРЕИМУЩЕСТВА ФРАНШИЗЫ</h2>
        <hr className="border-t-2 border-white/30 mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={cardStyle}>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="rounded-md flex items-center justify-center">
                  {card.icon}
                </div>
                <div className="mt-1 text-center text-lg font-medium leading-snug">
                  {card.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 