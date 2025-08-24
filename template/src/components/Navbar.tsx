"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaUserCircle } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/auth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado booleano

  useEffect(() => {
    const checkSession = async () => {
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();

      // Cambia el estado basado en si hay sesión
      setIsLoggedIn(!!session?.user); // Convertir a booleano
    };

    checkSession();
  }, []);

  return (
    <nav className={cn("navbar shadow-md", "bg-[#004a98]")}>
      <div className="flex justify-between items-center px-4 py-2 max-w-screen-xl mx-auto w-full">
        {/* Logo */}
        <div className="logo text-white text-2xl font-semibold">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={128} height={128} />
          </Link>
        </div>

        {/* Íconos y Botón */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="https://www.facebook.com/muni.islademaipo/" target="_blank">
            <FaFacebook size={24} className="text-white hover:text-blue-500" />
          </Link>
          <Link href="https://x.com/muniislademaipo" target="_blank">
            <BsTwitterX size={24} className="text-white hover:text-neutral-950" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <FaInstagram size={24} className="text-white hover:text-pink-500" />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank">
            <FaLinkedin size={24} className="text-white hover:text-blue-700" />
          </Link>

          {/* Botón o Ícono */}
          {isLoggedIn ? (
            <Link href="/dashboard/cliente">
              <FaUserCircle size={28} className="text-white hover:text-gray-300" />
            </Link>
          ) : (
            <Link href="/sign-in">
              <Button size="sm" className="ml-4">
                Iniciar sesión
              </Button>
            </Link>
          )}
        </div>

        {/* Botón hamburguesa */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
