"use client"

import { useState } from "react"
import { DollarSign, FileText, Wrench, GraduationCap, Rocket, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function StepsSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const steps = [
    {
      number: 1,
      title: "Заявка и интервью",
      subtitle: "Application and interview",
      icon: DollarSign,
      description:
        "Подача заявки и прохождение интервью с нашими специалистами для оценки возможностей сотрудничества.",
    },
    {
      number: 2,
      title: "Заключение договора и оплата",
      subtitle: "Contract conclusion and lump sum payment",
      icon: FileText,
      description: "Подписание договора о сотрудничестве и внесение паушального взноса для начала работы.",
    },
    {
      number: 3,
      title: "Подготовка помещения",
      subtitle: "(ремонт, мебель, брендирование)",
      icon: Wrench,
      description: "Ремонт и оборудование помещения, установка мебели и элементов брендирования согласно стандартам.",
    },
    {
      number: 4,
      title: "Обучение команды",
      subtitle: "Team training",
      icon: GraduationCap,
      description: "Комплексное обучение персонала всем аспектам работы и стандартам обслуживания клиентов.",
    },
    {
      number: 5,
      title: "Маркетинговый запуск и открытие",
      subtitle: "Marketing launch and opening",
      icon: Rocket,
      description: "Проведение маркетинговой кампании и торжественное открытие нового бизнеса.",
    },
  ]

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">

        {/* Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-wider" style={{ color: "rgba(0, 152, 187, 0.9)" }}>
            ЭТАПЫ ЗАПУСКА
          </h2>
        </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Steps Timeline */}
        <div className="relative mt-10 mb-16">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-8 left-8 right-8 h-0.5 bg-blue-200"></div>
              <div
                className="absolute top-8 left-8 h-0.5 transition-all duration-1000"
                style={{
                  width: activeStep ? `${(activeStep / steps.length) * 100}%` : "0%",
                  backgroundColor: "rgba(0, 152, 187, 0.85)",
                }}
              ></div>

              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="flex flex-col items-center relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  onMouseEnter={() => setActiveStep(step.number)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <motion.div
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg cursor-pointer transition-all duration-300",
                      activeStep === step.number ? "scale-110" : "hover:scale-105",
                    )}
                    style={{
                      backgroundColor: activeStep === step.number ? "rgba(0, 152, 187, 1)" : "rgba(0, 152, 187, 0.85)",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-center max-w-48">
                    <div className="font-semibold mb-1">
                      <span className="text-lg" style={{ color: "rgba(0, 152, 187, 0.9)" }}>
                        {step.number}.{" "}
                      </span>
                      <span className="text-gray-800">{step.title}</span>
                    </div>
                    {step.subtitle && (
                      <div className="text-sm" style={{ color: "rgba(0, 152, 187, 0.7)" }}>
                        {step.subtitle}
                      </div>
                    )}
                  </div>

                  {/* Hover Description */}
                  {activeStep === step.number && (
                    <motion.div
                      className="absolute top-full mt-4 bg-white p-4 rounded-lg shadow-lg z-30 w-64 border"
                      style={{ borderColor: "rgba(0, 152, 187, 0.2)" }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-sm text-gray-700">{step.description}</div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                onClick={() => setActiveStep(activeStep === step.number ? null : step.number)}
              >
                <div className="flex flex-col items-center mr-4">
                  <motion.div
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer relative"
                    style={{
                      backgroundColor: activeStep === step.number ? "rgba(0, 152, 187, 1)" : "rgba(0, 152, 187, 0.85)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: "rgba(0, 152, 187, 1)" }}
                    >
                      {step.number}
                    </div>
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div
                      className="w-0.5 mt-4"
                      style={{
                        height: "80px",
                        background: `linear-gradient(to bottom, rgba(0, 152, 187, 0.85), rgba(0, 152, 187, 0.4))`,
                      }}
                    ></div>
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <div className="font-semibold text-gray-800 text-base mb-1">{step.title}</div>
                  {step.subtitle && (
                    <div className="text-sm" style={{ color: "rgba(0, 152, 187, 0.7)" }}>
                      {step.subtitle}
                    </div>
                  )}

                  {/* Expandable Description */}
                  {activeStep === step.number && (
                    <motion.div
                      className="mt-2 text-sm text-gray-700 bg-white p-3 rounded-md shadow-sm border"
                      style={{ borderColor: "rgba(0, 152, 187, 0.2)" }}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.description}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
