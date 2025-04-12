import { ChevronDown, ExternalLink } from 'lucide-react';

export default function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-6 flex justify-between items-center text-left cursor-pointer"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <div className="text-gray-400 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
}
