"use client";

import {
  BanknoteArrowUp,
  Headset,
  Ellipsis,
  ChartBar,
  SquarePen,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./../ui/components/sheet";
import { Progress } from "./../ui/components/Progress";

const cardsClient = [
  {
    name: "Central de faturas",
    link: "/client/invoices",
    icon: BanknoteArrowUp,
  },
  {
    name: "Docs",
    link: "/client/docs",
    icon: ChartBar,
  },
  {
    name: "Tickets em aberto",
    link: "/client/ticket",
    icon: Headset,
  },
  {
    name: "Abrir ticket",
    link: "/client/ticketopen",
    icon: SquarePen,
  },
];

export default function Page() {
  const [user, setUser] = useState("");
  const [greeting, setGreeting] = useState("");
  const [data, setData] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projects", {
          method: "POST",
        });
        const json = await response.json();
        setData(json.projects);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    const fetchUser = async () => {
      const response = await fetch("/api/me");
      const data = await response.json();
      setUser(data.user);
    };

    const now = new Date();
    const hour = now.getHours();

    if (hour > 5 && hour < 12) {
      setGreeting("Bom dia");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Boa tarde");
    } else {
      setGreeting("Boa noite");
    }

    fetchUser();
    fetchData();
    console.log(data);
  }, []);

  return (
    <div className="flex flex-col gap-10 md:p-10 pt-10">
      <div className="flex flex-col gap-2">
        {greeting.length > 0 ? (
          <h1 className="text-xl md:text-2xl text-white">
            {greeting}, <span>{user || "..."}</span>
          </h1>
        ) : (
          <div>Carregando</div>
        )}

        <p className="text-sm md:text-base text-white">
          Aqui você encontra um menu onde pode acompanhar seus serviços, enviar
          um ticket e exibir suas faturas.
        </p>
      </div>

      <ul className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
        {cardsClient.map((card, index) => (
          <li key={index}>
            <Link
              className="flex flex-col h-[150px] w-[150px] md:w-[220px] gap-4 border border-gray-500 p-5 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/5 text-white"
              href={card.link}
            >
              <card.icon size={30} />
              <p>{card.name}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <h1 className="mb-4 text-white text-lg md:text-xl">
          Projetos em andamento
        </h1>

        <div className="p-4">
          <ul className="flex gap-4 overflow-x-auto overflow-y-hidden">
            {data ? (
              data.map((project, index) => (
                <li key={index}>
                  <Sheet>
                    <SheetTrigger asChild>
                      <div
                        className="min-w-[250px] flex-shrink-0 flex flex-col gap-3 border border-gray-500 p-5 rounded-lg transition duration-300 transform hover:shadow-xl hover:bg-white/5 text-white cursor-pointer h-[200px] text-sm sm:text-lg "
                        onClick={() => setSelectedProject(project)}
                      >
                        <Ellipsis className="self-start hover:text-white" />
                        <p>{project.title}</p>
                        <p
                          className={clsx({
                            "text-green-400": project.status === "Aberto",
                            "text-yellow-500":
                              project.status === "Em andamento",
                          })}
                        >
                          {project.status}
                        </p>
                        <p>Manager: {project.project_manager}</p>
                      </div>
                    </SheetTrigger>

                    <SheetContent className="overflow-y-auto" side="right">
                      <SheetHeader>
                        <SheetTitle className="text-white">
                          {selectedProject?.title || "Projeto"}
                        </SheetTitle>
                        <SheetDescription>
                          <span className="flex items-center gap-2">

                            <span className={clsx("font-bold", {
                              "text-green-400":
                                selectedProject?.status === "Aberto",
                              "text-yellow-500":
                                selectedProject?.status === "Em andamento",
                            })}>Status: {selectedProject?.status}</span>

                            <span className="text-white">Gerente: {selectedProject?.project_manager}</span>
                          </span>

                        </SheetDescription>
                      </SheetHeader>

                      <div className="mt-6">
                        <h2 className="text-white font-bold mb-2 text-md">
                          Tarefas:
                        </h2>
                        <ul className="flex flex-col gap-2">
                          {selectedProject?.tasks?.length > 0 ? (
                            selectedProject.tasks.map((task, i) => (
                              <li
                                key={i}
                                className="text-sm text-white border-b border-white/10 pb-2 flex flex-col gap-2"
                              >
                                <p>{task.label}</p>
                                <Progress value={task.progress} />
                                <p>
                                  Task atual:{" "}
                                  <span className="text-green-200">
                                    {task.description}
                                  </span>
                                </p>
                              </li>
                            ))
                          ) : (
                            <p className="text-white/50 text-sm">
                              Nenhuma tarefa cadastrada.
                            </p>
                          )}
                        </ul>
                      </div>
                    </SheetContent>
                  </Sheet>
                </li>
              ))
            ) : (
              <div>
                <p className="text-white">Carregando projetos...</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
