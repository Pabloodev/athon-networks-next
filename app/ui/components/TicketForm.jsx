'use client'

import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useRef } from 'react';

export default function ContactForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({}); // Estado para armazenar erros de validação

    const [isSubmit, setIsSubmit] = useState(false)


    const form = useRef();

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!name.trim()) {
            tempErrors.name = "Nome é obrigatório.";
            isValid = false;
        }

        if (!phone.trim()) {
            tempErrors.phone = "Telefone é obrigatório.";
            isValid = false;
        }

        if (!email.trim()) {
            tempErrors.email = "Email é obrigatório.";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            tempErrors.email = "Email inválido.";
            isValid = false;
        }

        if (!message.trim()) {
            tempErrors.message = "Mensagem é obrigatória.";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            emailjs
                .sendForm('service_6hpsgir', 'template_iwa6edx', form.current, {
                    publicKey: 'gayrgao3vXM1sLtnl',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setIsSubmit(true);
                        setTimeout(() => {
                            setIsSubmit(false);
                        }, 3000); // Atraso de 5 segundos
                        setName("");
                        setPhone("");
                        setEmail("");
                        setMessage("");
                        setErrors({}); // Limpar erros

                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    return (
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md mb-12">
            <label htmlFor="name" className="text-sm text-gray-400">
                Nome representante
            </label>
            <input
                name="name"
                id="name"
                type="text"
                placeholder="Digite seu nome"
                className={`bg-gray-900 rounded px-4 py-2 flex-grow text-sm ${errors.name ? 'border-red-500' : ''}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-white text-xs text-end">{errors.name}</p>}

            <label htmlFor="user_phone" className="text-sm text-gray-400">
                Telefone
            </label>
            <input
                name="user_phone"
                id="user_phone"
                type="tel"
                placeholder="(99) 9 9999-9999"
                className={`bg-gray-900 rounded px-4 py-2 flex-grow text-sm ${errors.phone ? 'border-red-500' : ''}`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="text-white text-xs text-end">{errors.phone}</p>}

            <label htmlFor="user_email" className="text-sm text-gray-400">
                Email Corporativo
            </label>
            <input
                name="user_email"
                id="user_email"
                type="email"
                placeholder="email@empresa.com"
                className={`bg-gray-900 rounded px-4 py-2 flex-grow text-sm ${errors.email ? 'border-red-500' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-white text-xs text-end">{errors.email}</p>}

            <label htmlFor="message" className="text-sm text-gray-400">
                Mensagem
            </label>
            <textarea
                name="message"
                id="message"
                placeholder="Digite sua mensagem..."
                className={`bg-gray-900 rounded px-4 py-2 flex-grow text-sm ${errors.message ? 'border-red-500' : ''}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && <p className="text-white text-xs text-end">{errors.message}</p>}

            <button type="submit" className="cursor-pointer bg-gray-900 text-white px-6 py-2 text-sm rounded hover:bg-gray-800 transition-colors mt-3">
                Contact
            </button>

            {isSubmit && (
                <p className='text-purple-300 text-sm text-center mt-5'>Email enviado com sucesso!</p>
            )}

        </form>
    );
}