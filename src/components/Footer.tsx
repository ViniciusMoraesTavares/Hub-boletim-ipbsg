import React from 'react';
import { Phone, MessageCircle, Instagram, MapPin, Clock, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone',
      value: '(19) 3545-5024',
      link: 'tel:+551935455024'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '(19) 3545-5024',
      link: 'https://wa.me/551935455024'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contato@ipb.org.br',
      link: 'mailto:contato@ipb.org.br'
    }
  ];

  const scheduleInfo = [
    { day: 'Domingo', time: '09h00 - Escola Dominical' },
    { day: 'Domingo', time: '19h00 - Culto Vespertino' },
    { day: 'Quarta', time: '19h30 - Estudo Bíblico' },
    { day: 'Sexta', time: '19h30 - Culto de Oração' },
  ];

  return (
    <footer id="contato" className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Logo e Informações da Igreja */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-800 font-bold text-xl">IPB</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Igreja Presbiteriana</h3>
                <p className="text-green-200 text-sm">do Brasil</p>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
              Uma igreja reformada, evangélica e missionária, fundamentada na Palavra de Deus e comprometida com a Sua glória.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <Phone size={20} className="mr-2" />
              Contato
            </h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index}>
                    <a
                      href={contact.link}
                      className="flex items-center space-x-2 text-green-200 hover:text-white transition-colors duration-200"
                    >
                      <IconComponent size={16} />
                      <span className="text-sm">{contact.value}</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Endereço */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <MapPin size={20} className="mr-2" />
              Localização
            </h4>
            <div className="text-green-200 text-sm space-y-2">
              <p>Rua Exemplo, 123</p>
              <p>Centro - São Gonçalo</p>
              <p>CEP: 00000-000</p>
              <p>São Paulo - SP</p>
            </div>
          </div>

          {/* Horários de Culto */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <Clock size={20} className="mr-2" />
              Programação
            </h4>
            <div className="space-y-2">
              {scheduleInfo.map((schedule, index) => (
                <div key={index} className="text-green-200 text-sm">
                  <span className="font-medium text-white">{schedule.day}:</span>
                  <br />
                  <span>{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="mt-12 pt-8 border-t border-green-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-bold mb-2">Siga-nos nas Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/ipb.sg/?hl=pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  <Instagram size={18} />
                  <span className="text-sm font-medium">@ipb.sg</span>
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-green-200 text-sm">
                © {new Date().getFullYear()} Igreja Presbiteriana do Brasil
              </p>
              <p className="text-green-300 text-xs mt-1">
                Desenvolvido com ♥ para a glória de Deus
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;