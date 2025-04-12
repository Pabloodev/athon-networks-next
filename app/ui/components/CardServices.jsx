import { MessageCircle } from 'lucide-react';

export default function CardServices({src, title, description, link, linkMessage}) {
  return(
    <div>
      <div className="bg-zinc-900 rounded-xl p-8 hover:bg-zinc-800 transition-colors cursor-grab">
            <div className="h-48 mb-8">
              <img 
                src={src}
                alt={title}
                className="w-full h-full object-cover rounded-lg opacity-80"
                loading='lazy'
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-400 mb-6">
              {description}
            </p>
            <a 
              href={link}
              className="inline-flex items-center text-white hover:text-purple-500 transition-colors"
            >
              {linkMessage}
              <MessageCircle className="ml-2 h-4 w-4" />
            </a>
          </div>
    </div>
  )
}