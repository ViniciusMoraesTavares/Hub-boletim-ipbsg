import React from 'react';
import { FaPhone, FaInstagram } from 'react-icons/fa';
import { FiMessageCircle, FiMapPin, FiClock } from 'react-icons/fi';

const Footer: React.FC = () => {
  const contactInfo = [
    {
      icon: FiMessageCircle,
      label: 'WhatsApp',
      value: '(19) 3545-5024',
      link: 'https://wa.me/551935455024'
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      value: '@ipb.sg',
      link: 'https://www.instagram.com/ipb.sg/?hl=pt-br'
    }
  ];


  const scheduleInfo = [
    { day: 'Domingo', times: ['09h00 - Escola Dominical', '18h00 - Culto Vespertino'] },
    { day: 'Segunda', times: ['19h30 - Reunião nos Lares'] },
    { day: 'Quarta', times: ['19h30 - Estudo Bíblico'] },
  ];


  return (
    <footer id="contato" className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {/* Logo e Informações da Igreja */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/images/ipbsg_ico.png"
                  alt="Logo IPB"
                  className="w-12 h-15 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Igreja Presbiteriana</h3>
                <p className="text-green-200 text-sm">de Santa Gertrudes</p>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
              Uma igreja reformada, evangélica e missionária, fundamentada na Palavra de Deus e comprometida com a Sua glória.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <FaPhone size={20} className="mr-2" />
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
              <FiMapPin size={20} className="mr-2" />
              Localização
            </h4>
            <div className="text-green-200 text-sm space-y-2">
              <p>R. Ver. Gregório Aparecido Swenson, 245</p>
              <p>Jardim Luciana</p>
              <p>CEP: 13513-162</p>
              <p>Santa Gertrudes - SP</p>
            </div>
          </div>

          {/* Horários de Culto */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <FiClock size={20} className="mr-2" />
              Programação
            </h4>
            <div className="space-y-2">
              {scheduleInfo.map((schedule, index) => (
                <div key={index} className="text-green-200 text-sm">
                  <span className="font-medium text-white">{schedule.day}:</span>
                  <br />
                  {schedule.times.map((time, i) => (
                    <div key={i}>{time}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="mt-12 pt-8 border-t border-green-700">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-green-200 text-sm">
              © {new Date().getFullYear()} Igreja Presbiteriana de Santa Gertrudes
            </p>
            <p className="text-green-300 text-xs mt-1">
              Desenvolvido com ♥ para a glória de Deus
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;