'use client'

import { useState } from "react";
import FAQItem from "../ui/components/FAQItem"
import faqData from "../data/faqData"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <p className="text-purple-500 font-medium mb-4">FAQ</p>
          <h2 className="text-5xl font-bold mb-6">Perguntas Frequentes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Encontre as respostas para as principais dúvidas sobre nós.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-1">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              {...item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </section>
  )
}