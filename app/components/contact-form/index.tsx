"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiArrowNarrowRight } from "react-icons/hi";
import * as zod from "zod";
import { Button } from "../button";
import { SectionTitle } from "../section-title";

type contactFormData = zod.infer<typeof contactFormSchema>;

const contactFormSchema = zod.object({
  name: zod.string().min(3).max(100),
  email: zod.string().email(),
  message: zod.string().min(1).max(500),
});

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<contactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleSubmitContact = async (data: contactFormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch {
      toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="Contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className=" items-center text-center"
        />
        <form
          onSubmit={handleSubmit(handleSubmitContact)}
          className="mt-12 w-full flex flex-col gap-4"
        >
          <input
            placeholder="Nome: "
            {...register("name")}
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <input
            placeholder="Email: "
            {...register("email")}
            type="email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <textarea
            placeholder="Mensagem: "
            {...register("message")}
            maxLength={500}
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <Button
            disabled={isSubmitting}
            className="w-max mx-auto mt-6 shadow-button"
          >
            Enviar mensagem <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  );
};
