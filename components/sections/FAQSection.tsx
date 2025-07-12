"use client"

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
  is_open: boolean;
}

const faqs: FAQItem[] = [
  {
    question: "Нужно ли иметь опыт в ресторанном бизнесе?",
    answer: "Это не обязательно, но было бы преимуществом. Мы предоставляем обучение и поддержку – независимо от вашего опыта, наша команда поможет вам освоить все аспекты бизнеса, включая управление, обслуживание клиентов и маркетинг",
    is_open: true
  },
  {
    question: "Какова стоимость открытия франшизы?",
    answer: "Стоимость открытия франшизы – 13 450 рублей. Формат открытия – Take Away с доставкой готовой продукции. О размере необходимых инвестиций проконсультируйтесь с нашим отделом продаж.",
    is_open: false
  },
  {
    question: "Какие продукты предлагает ваша франшиза?",
    answer: "Мы предлагаем широкий ассортимент суши, роллов, закусок и десертов. Все блюда готовятся из свежих ингредиентов по оригинальным рецептам, что обеспечивает высокое качество и превосходный вкус.",
    is_open: false
  },
  {
    question: "Как будет осуществляться доставка?",
    answer: "Доставка может осуществляться собственными курьерами или через службу доставки. Мы предоставим вам рекомендации и помощь в организации этого процесса.",
    is_open: false
  },
  {
    question: "Предоставляете ли вы рекламные материалы?",
    answer: "Мы предоставим макеты маркетинговых материалов, которые помогут вам привлечь клиентов.",
    is_open: false
  },
  {
    question: "Как осуществляется поддержка франчайзи?",
    answer: "Наша команда поддержки будет помогать вам на всех этапах: от открытия заведения до выхода на окупаемость. Вы получите доступ к обучающим материалам, стандартам работы и общему чату франчайзи.",
    is_open: false
  },
  {
    question: "Каковы преимущества сотрудничества с вашей франшизой?",
    answer: "Сотрудничая с нами, вы получите доступ к известному бренду, проверенной бизнес-модели, высококачественным ингредиентам и постоянной поддержке. Это существенно увеличивает ваши шансы на успешное ведение бизнеса.",
    is_open: false
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>(
    faqs.map((faq, index) => faq.is_open ? index : -1).filter(i => i !== -1)
  );

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section 
      className="py-20 px-4 text-white"
      style={{ 
        background: "rgba(0, 152, 187, 0.85)" 
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-center">
          ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
        </h2>
        <hr className="border-t-2 border-white/30 mb-12" />
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg md:text-xl font-bold text-white/95 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={cn(
                    "h-6 w-6 shrink-0 transition-transform duration-200 text-white/80",
                    openItems.includes(index) && "rotate-180"
                  )} 
                />
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openItems.includes(index) 
                    ? "max-h-96 opacity-100" 
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-6">
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FAQSection }; 