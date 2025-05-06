'use client'

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Header() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 4000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const navData = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Serviços",
      href: "#services",
    },
    {
      title: "Sobre",
      href: "#about",
    },
    // {
    //   title: "Blog",
    //   href: "https://pabloodev.github.io/blog-athon-networks/",
    // },
    {
      title: "Contato",
      href: "#contact",
    },
    // {
    //   title: "Portfolio",
    //   href: "#contact",
    // },
  ];

  return (
    <motion.div
      initial={{ scale: 2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2 }}
    >
      <header className="flex justify-between items-center px-6 sm:px-20 lg:px-40 mt-5">

        <div className="flex items-center gap-2 hidden sm:flex">
          <span className={`hidden sm:block letter`}>N</span>
          <span className={`hidden sm:block letter`}>E</span>
          <span className={`hidden sm:block letter`}>T</span>
          <span className={`hidden sm:block letter`}>W</span>

          <img
            width={40}
            src="./iconathon.png"
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
          src="./iconathon.png"
          alt="Logo"

        />

        <ul className="hidden sm:flex gap-6">
          {navData.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>

        <Link href="/client" className="">
          <button
            className="bg-black hover:bg-white hover:text-black text-white px-4 py-2 rounded rounded-lg duration-700 cursor-pointer border-1 border-gray-400 shadow-white shadow-xs
"
          >
            Area do cliente
          </button>
        </Link>
      </header>
    </motion.div>
  );
}
