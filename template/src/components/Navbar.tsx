"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils"; // Asegúrate de tener esta función en tu proyecto

const Navbar = () => {
  // Estado para controlar la visibilidad del menú móvil
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={cn("navbar shadow-md", "bg-[#004a98]")}>
      <div className="flex justify-between items-center px-4 py-2 max-w-screen-xl mx-auto w-full">
        {/* Logo */}
        <div className="logo text-white text-2xl font-semibold">
          <Link href="/"> <Image src="/logo.png" alt="Logo" width={128} height={128} /> </Link>
        </div>

        {/* Íconos y Botón (visible solo en pantallas medianas o mayores) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://www.facebook.com/muni.islademaipo/"
            target="_blank"
            className={cn("text-white hover:text-blue-500")}
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href="https://x.com/muniislademaipo"
            target="_blank"
            className={cn("text-white hover:text-neutral-950")}
          >
            <BsTwitterX size={24} />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            className={cn("text-white hover:text-pink-500")}
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            className={cn("text-white hover:text-blue-700")}
          >
            <FaLinkedin size={24} />
          </Link>
          <Link href="/sign-in">
            <Button size="sm" className="ml-4">
              Iniciar sesión
            </Button>
          </Link>
        </div>

        {/* Botón hamburguesa (visible solo en pantallas pequeñas) */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menú desplegable responsivo */}
      {menuOpen && (
        <div className="md:hidden bg-[#004a98] text-white p-4">
          {/* Íconos de redes sociales (horizontal) */}
          <div className="flex justify-center gap-4 mb-4">
            <Link
              href="https://www.facebook.com/muni.islademaipo/"
              target="_blank"
              className={cn("hover:text-blue-500")}
              onClick={() => setMenuOpen(false)}
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="https://x.com/muniislademaipo"
              target="_blank"
              className={cn("hover:text-neutral-950")}
              onClick={() => setMenuOpen(false)}
            >
              <BsTwitterX size={24} />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              className={cn("hover:text-pink-500")}
              onClick={() => setMenuOpen(false)}
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className={cn("hover:text-blue-700")}
              onClick={() => setMenuOpen(false)}
            >
              <FaLinkedin size={24} />
            </Link>
          </div>

          {/* Botón de iniciar sesión */}
          <div className="flex justify-center">
            <Link href="/sign-in" onClick={() => setMenuOpen(false)}>
              <Button size="sm">Iniciar sesión</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
