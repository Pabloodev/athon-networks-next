"use client";

import { useState } from "react";

export default function TicketForm() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handlePriorityClick = (e) => {
    e.preventDefault();
    setPriority(Number(e.target.innerText));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResponseMessage("");

    const data = {
      subject,
      message,
      priority,
      username: "lucas.net",
      password: "1Abx3825@@@@", // ⚠️ cuidado com credenciais no client
    };

    try {
      const res = await fetch("http://10.28.18.58:7047/api/create-tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok) {
        setResponseMessage(`✅ Ticket criado! ID: ${json.ticket_id}`);
        setSubject("");
        setMessage("");
        setPriority(null);
      } else {
        setResponseMessage(`❌ Erro: ${json.error}`);
      }
    } catch (err) {
      setResponseMessage(`❌ Erro inesperado: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="text-white p-6 rounded-lg shadow-lg flex flex-col gap-4 w-full max-w-md"
      >
        <h1 className="text-xl font-bold text-center">Abrir ticket</h1>

        <div className="flex flex-col gap-1">
          <label htmlFor="subject">Assunto</label>
          <input
            className="border border-gray-500 rounded-sm p-2 text-white"
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message">Mensagem</label>
          <textarea
            className="border border-gray-500 rounded-sm p-2 text-white"
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Prioridade</label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={handlePriorityClick}
                className={`p-1 px-3 rounded-sm border ${
                  priority === num
                    ? "bg-purple-600 border-purple-500"
                    : "border-gray-500 hover:border-purple-500"
                }`}
                type="button"
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <button
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition duration-300"
          type="submit"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Abrir ticket"}
        </button>

        {responseMessage && (
          <p className="text-sm text-center mt-2">{responseMessage}</p>
        )}
      </form>
    </div>
  );
}
