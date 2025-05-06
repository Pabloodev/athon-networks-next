import { Linkedin, Instagram, Timer, Facebook } from 'lucide-react';
import ContactForm from './ContactForm';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-8">

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

          <div className="w-full md:w-1/2">
            <div className="flex flex-col mb-8 text-center md:text-left">
              <Timer className="w-8 h-8 mb-4 mx-auto md:mx-0" />
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">
                Gestão, segurança e conforto.
              </h2>
              <p className="text-gray-400 max-w-md mx-auto md:mx-0">
                Entre em contato conosco e tire todas suas dúvidas.
              </p>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left mb-12">
              <div>
                <h3 className="font-medium mb-4">Sobre</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Home</a></li>
                  <li><a href="#services" className="hover:text-white">Serviços</a></li>
                  <li><a href="#contact" className="hover:text-white">Contato</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-4">Legal & Segurança</h3>
                <ul className="space-y-2 text-gray-400">
                  <Link href={"/privacy-policy"} className="hover:text-white">Política de privacidade</Link>
                </ul>
              </div>
            </div>
          </div>

          <div id="contact" className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Contate-nos</h3>
            <ContactForm />
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className='flex flex-col gap-2'>
            <p className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
              © {currentYear} Athon Networks. Todos direitos reservados.
            </p>
            <p className='text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left'>contato@athon-networks.com.br</p>
          </div>

          <div className="flex space-x-4">

            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
