import React from "react";
import { Box, Rocket } from "lucide-react";
import Image from "next/image";

const cardStyle = "group relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center";

const FranchiseSupportSection = () => {
  return (
    <section className="py-20 px-4 text-white text-center"
    style={{ background: "linear-gradient(0deg, rgba(0, 152, 187, 0.85) 0%, #52e0ff 50%, #52e0ff 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8">ПОДДЕРЖКА ФРАНЧАЙЗИ</h2>
        <hr className="border-t-2 border-white/30 mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div className={cardStyle}>
            <Image src="/delivery.png" alt="Delivery Icon" width={200} height={200} className="mb-6 object-contain" />
            <h3 className="text-2xl font-extrabold mb-2 text-white/90">САЙТ / ПРИЛОЖЕНИЕ</h3>
            <p className="text-base text-start font-medium text-white/90">
              Вы получите индивидуальный сайт
              и мобильное приложение, полностью
              интегрированные в систему заказов,
              что позволит вам эффективно управлять
              продажами и клиентской базой.
            </p>
          </div>
          <div className={cardStyle}>
          <Image src="/crm.png" alt="CRM Icon" width={200} height={200} className="mb-6 object-contain" />
          <h3 className="text-2xl font-extrabold mb-2 text-white/90">CRM-СИСТЕМА</h3>
            <p className="text-base font-medium text-start text-white/90">
              Современная система управления
              заказами и клиентами обеспечит
              прозрачный учет, аналитику
              и автоматизацию бизнес-процессов.
            </p>
          </div>
          <div className={cardStyle}>
          <Image src="/marketing.png" alt="Marketing Icon" width={200} height={200} className="mb-6 object-contain" />
          <h3 className="text-2xl font-extrabold mb-2 text-white/90">ЭФФЕКТИВНЫЙ<br />МАРКЕТИНГ</h3>
            <p className="text-base font-medium text-start text-white/90">
              Франчайзи получают доступ
              к централизованной маркетинговой
              поддержке: через агрегаторы и другие
              инструменты для привлечения клиентов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FranchiseSupportSection };