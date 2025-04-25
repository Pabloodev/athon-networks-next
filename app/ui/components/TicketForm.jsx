'use client';

import { useState } from "react";

export default function TicketForm() {

    const [priority, setPriority] = useState()

    return (
        <div>
            <form className="flex flex-col gap-3">

                <h1 className="text-white font-bold">Abrir ticket</h1>

                <div className="flex flex-col gap-1">
                    <label htmlFor="subject">Assunto</label>
                    <input className="border-1 border-gray-500 rounded-sm" type="text" name="subject" id="subject" />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="meessage">Menssagem</label>
                    <textarea className="border-1 border-gray-500 rounded-sm p-2" type="text" name="meessage" id="meessage" />
                </div>

                <div className="flex flex-col gap-1">
                    <label>Prioridade</label>
                    <div className="flex items-center gap-2">
                        <button className="p-1 px-3 rounded-sm border border-gray-500">1</button>
                        <button className="p-1 px-3 rounded-sm border border-gray-500">2</button>
                        <button className="p-1 px-3 rounded-sm border border-gray-500">3</button>
                        <button className="p-1 px-3 rounded-sm border border-gray-500">4</button>
                        <button className="p-1 px-3 rounded-sm border border-gray-500">5</button>
                    </div>

                </div>

                <button className="cursor-pointer border-1 border-gray-500 rounded-sm duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/5f">Abrir ticket</button>
            </form>
        </div>
    )
}