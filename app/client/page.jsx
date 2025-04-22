"use client";

import { BanknoteArrowUp, Headset, SquareKanban, Ellipsis, ChartBar } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

const cardsClient = [
  {
    name: "Central de faturas",
    link: "/client/invoices",
    icon: BanknoteArrowUp,
  },
  {
    name: "Serviços contratados",
    link: "/client/services",
    icon: SquareKanban,
  },
  {
    name: "Docs",
    link: "/client/docs",
    icon: ChartBar,
  },
  {
    name: "Tickets",
    link: "/client/ticket",
    icon: Headset,
  },
];


export default function Page() {
  const [user, setUser] = useState("");
  const [greeting, setGreeting] = useState("");
  const [data, setData] = useState("");

  const username = "lucas.net";
  const password = "1Abx3825@@@@";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://10.28.18.58:7047/api/projects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        const json = await response.json();
        setData(json.projects);
        console.log(json.projects);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    // Pegando o nome de usuario
    const fetchUser = async () => {
      const response = await fetch("/api/me");
      const data = await response.json();

      setUser(data.user);
    };

    // Pegando data para dar saudação dependendo da hora do dia
    const now = new Date();
    const hour = now.getHours();

    if (hour > 5 && hour < 12) {
      setGreeting("Bom dia");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Boa tarde");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Boa noite");
    }

    fetchData();
    fetchUser();
  }, []);

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col">
        <h1 className="text-2xl text-white">
          {greeting}, <span className="text-white">{user ? user : "..."}</span>
        </h1>
        <p>
          Aqui você encontra um menu onde pode acompanhar seus serviçoes, enviar
          um ticket e exibir suas faturas.
        </p>
      </div>

      <ul className="flex items-center gap-5">
        {cardsClient.map((card, index) => (
          <li key={index}>
            <Link
              className="flex flex-col gap-5 border border-gray-500 p-5 px-10 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/5"
              href={card.link}
            >
              <card.icon className="text-white" size={35} />
              <p className="text-white">{card.name}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <div className="">
          <h1 className="mb-3 text-white text-xl">Projetos em andamento</h1>
          <div className="flex items-center rounded-lg  h-[200px]">
            <ul className="flex gap-5 items-center justify-center">
              {data.length > 0 &&
                data.map((project, index) => (
                  <li key={index} className="flex flex-col gap-5 border border-gray-500 p-5 px-10 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/5 cursor-pointer">
                    <Ellipsis className="self-start hover:text-shite" color="#fff" />
                    <p className="text-white">{project.title}</p>
                    <p
                      className={clsx({
                        "text-green-400": project.status === "Aberto",
                        "text-yellow-500": project.status === "Em andamento",
                      })}
                    >
                      {project.status}
                    </p>
                    <p>Manager: {project.project_manager}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
