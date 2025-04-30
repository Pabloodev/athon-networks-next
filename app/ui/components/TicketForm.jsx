'use client';

import { useState } from "react";

export default function TicketForm() {
    const [priority, setPriority] = useState();

    const handleClick = (e) => {
        e.preventDefault();
        const value = e.target.innerText;
        setPriority(value);
    };

    return (
        <div className="flex items-center justify-center">
            <form className=" text-white p-6 rounded-lg shadow-lg flex flex-col gap-4 w-full max-w-md">
                <h1 className="text-xl font-bold text-center">Abrir ticket</h1>

                <div className="flex flex-col gap-1">
                    <label htmlFor="subject">Assunto</label>
                    <input
                        className="border border-gray-500 rounded-sm p-2 text-white"
                        type="text"
                        name="subject"
                        id="subject"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                        className="border border-gray-500 rounded-sm p-2 text-white"
                        name="message"
                        id="message"
                        rows={4}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label>Prioridade</label>
                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button
                                key={num}
                                onClick={handleClick}
                                className={`p-1 px-3 rounded-sm border border-gray-500 hover:border-purple-500 ${
                                    priority == num ? 'bg-gray-700' : ''
                                }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition duration-300"
                    type="submit"
                >
                    Abrir ticket
                </button>
            </form>
        </div>
    );
}
