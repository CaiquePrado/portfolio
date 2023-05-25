"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";

const NAV_ITENS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
];

export const Header = () => {
  return (
    <motion.header
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 w-full z-10 h-24 flex items-end justify-center"
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image width={58} height={49} alt="logo" src="/images/logo.svg" />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITENS.map(({ label, href }) => (
            <NavItem href={href} key={label} label={label} />
          ))}
        </nav>
      </div>
    </motion.header>
  );
};
