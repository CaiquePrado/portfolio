"use client";

import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";

const MOCK_CONTACS = [
  {
    url: "https://github.com",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://linkedin.com",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "https://linkedin.com",
    icon: <TbBrandWhatsapp />,
  },
];

export const HeroSection = () => {
  const handleContact = () => {
    const contactSession = document.querySelector("#contact");
    if (contactSession) {
      contactSession.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Caique Prado</h2>
          <p className="text-gray-400 text-sm my-6 sm:text-base">
            Olá, meu nome é Caique Prado e sou um desenvolvedor front-end
            apaixonado por tecnologia. Com mais de 5 anos de experiência. Meu
            objetivo é criar interfaces de usuário bonitas e funcionais, além de
            liderar equipes técnicas em projetos desafiadores. Estou sempre
            aberto a novas oportunidades e desafios.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 7 }).map((_, i) => (
              <TechBadge name="Next.js" />
            ))}
          </div>
          <div className="mt:6 lg:mt-10 flex sm:items-center sm:gap-5 sm:flex-row  flex-col">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
              {MOCK_CONTACS.map((contact, i) => (
                <a
                  href={contact.url}
                  key={`contact-${i}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="foto de perfil"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  );
};
