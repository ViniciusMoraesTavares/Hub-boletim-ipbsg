import React from 'react';
import { Users, Heart, Church, Instagram } from 'lucide-react';

const InfoSection: React.FC = () => {
  const infoCards = [
    {
      icon: Church,
      title: 'Nossa História',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: Users,
      title: 'Nossa Comunidade',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      icon: Heart,
      title: 'Nossa Missão',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ];

  const placeholderImages = [
    'https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/7869083/pexels-photo-7869083.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/8674654/pexels-photo-8674654.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  return (
    <section id="info" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Seção de Informações */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Conheça Nossa Igreja
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Cards Informativos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {infoCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Grid de Imagens e Instagram */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Grid de Imagens */}
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6 text-center lg:text-left">
              Momentos Especiais
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {placeholderImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={image}
                    alt={`Momento especial ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Widget Instagram */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Instagram className="text-pink-500" size={28} />
              <h3 className="text-2xl font-bold text-green-800">
                Siga-nos no Instagram
              </h3>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-1 rounded-lg inline-block">
              <div className="bg-white p-8 rounded-lg">
                <p className="text-gray-600 mb-4">
                  Widget do Instagram será incorporado aqui
                </p>
                <a
                  href="https://www.instagram.com/ipb.sg/?hl=pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  <Instagram size={20} />
                  <span>@ipb.sg</span>
                </a>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Acompanhe nossos cultos, eventos e momentos de comunhão
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;