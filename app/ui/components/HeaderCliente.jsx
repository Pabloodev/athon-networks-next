"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function HeaderClient() {

  const [user, setUser] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 4000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const navData = [
    {
      title: "Voltar a pagina principal",
      href: "/",
    },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/me');
      const data = await response.json();

      setUser(data.user); // Atualiza o estado com o valor
    };

    fetchUser();
  }, []);


  return (
    <motion.div
      initial={{ scale: 2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2 }}
    >
      <header className="flex justify-between items-center px-6 sm:px-20 lg:px-40 mt-5">
        <div className="flex items-center gap-2">
          <span className={`letter ${isAnimating ? "animate" : ""}`}>N</span>
          <span className={`letter ${isAnimating ? "animate" : ""}`}>E</span>
          <span className={`letter ${isAnimating ? "animate" : ""}`}>T</span>
          <span className={`letter ${isAnimating ? "animate" : ""}`}>W</span>

          <img
            width={40}
            src="/iconathon.png"
            alt="Logo"
            className={`logo ${isAnimating ? "animate" : ""}`}
          />
          <span className={`letter ${isAnimating ? "animate" : ""}`}>R</span>
          <span className={`letter ${isAnimating ? "animate" : ""}`}>K</span>
          <span className={`letter ${isAnimating ? "animate" : ""}`}>S</span>
        </div>

        <button
          className="sm:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav
          className={`${menuOpen ? "block" : "hidden"
            } sm:flex absolute sm:static top-16 left-0 w-full sm:w-auto bg-zinc-900 sm:bg-transparent p-4 sm:p-0 shadow-lg sm:shadow-none rounded sm:rounded-none z-40`}
        >
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center text-gray-300">
            {navData.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="cursor-pointer flex items-center gap-3">
          <span className="text-white">{user ? user : "Carregando..."}</span>
        </button>
        <LogoutButton />
      </header>
    </motion.div>
  );
}
