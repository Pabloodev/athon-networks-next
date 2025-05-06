"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Dropdown from "./Dropdown";

export default function HeaderClient() {

  const [user, setUser] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropActive, setDropActive] = useState(false)

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

    <header className="flex justify-between items-center px-6 sm:px-20 lg:px-40 mt-5">
      <div className="flex items-center gap-2 hidden sm:flex">
          <span className={`hidden sm:block letter`}>N</span>
          <span className={`hidden sm:block letter`}>E</span>
          <span className={`hidden sm:block letter`}>T</span>
          <span className={`hidden sm:block letter`}>W</span>

          <img
            width={40}
            src="/iconathon.png"
            alt="Logo"
            className={`logo`}
          />
          <span className={`hidden sm:block letter`}>R</span>
          <span className={`hidden sm:block letter`}>K</span>
          <span className={`hidden sm:block letter`}>S</span>

        </div>

        <img
          className="block sm:hidden"
          width={60}
          src="/iconathon.png"
          alt="Logo"

        />

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
      <div className="relative">
        <button className="cursor-pointer rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/5 p-2 border-1 border-gray-500" onClick={() => setDropActive(prev => !prev)}>
          <span className="text-white">{user ? user : "Carregando..."}</span>
        </button>
        {dropActive && (
          <Dropdown />
        )}
      </div>


    </header>

  );
}
