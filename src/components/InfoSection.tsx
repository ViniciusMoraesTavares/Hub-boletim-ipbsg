import React from 'react';
import { Users, Heart, Church } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const InfoSection: React.FC = () => {
  const infoCards = [
    {
      icon: Church,
      title: 'Nossa História',
      description: 'Nossa igreja foi organizada em 1989 e, desde então, tem caminhado firmada na Palavra de Deus. Ao longo dos anos, temos buscado proclamar o Evangelho de Cristo e servir nossa cidade com fidelidade.'
    },
    {
      icon: Users,
      title: 'Nossa Comunidade',
      description: 'Somos uma igreja bíblica, reformada e acolhedora. Vivemos para a glória de Deus e cremos que o verdadeiro sentido da vida está no Deus Criador, que fez todas as coisas com propósito. Caminhamos lado a lado, sofrendo e nos alegrando juntos, fortalecidos por Cristo Jesus.'
    },
    {
      icon: Heart,
      title: 'Nossa Missão',
      description: 'Nossa missão é glorificar a Deus em tudo o que fazemos, anunciar com clareza o Evangelho de Jesus Cristo e discipular pessoas para uma vida de fé, serviço e amor. Queremos ser uma igreja que proclama a verdade, acolhe em amor e serve com compaixão.'
    }
  ];

  const placeholderImages = [
    '/images/IMG-20241218-WA0123.jpg',
    '/images/TEMPLO-CULTO-LOUVOR.jpg',
    '/images/TEMPLO-CULTO-CEIA.jpg',
    '/images/Un1co.jpg'
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
            Uma igreja reformada, bíblica e acolhedora, servindo a Cristo e à cidade desde 1989.
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

          {/* Instagram Feed Widget */}
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            {/* Instagram Profile Embed */}
            <div className="mb-4">
              <iframe
                src="https://www.instagram.com/ipb.sg/embed"
                className="w-full h-auto min-h-[600px] border-0 rounded-lg"
                title="Instagram Profile - @ipb.sg"
              ></iframe>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-3">
                Siga @ipb.sg no Instagram
              </p>
            </div>
          </div>

        </div>
          <div className="text-center mt-4">
            <a
              href="https://www.instagram.com/ipb.sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium transition-colors"
            >
              <FaInstagram className="h-5 w-5 mr-2" />
              Seguir no Instagram
            </a>
          </div>
      </div >
    </section >
  );
};

export default InfoSection;