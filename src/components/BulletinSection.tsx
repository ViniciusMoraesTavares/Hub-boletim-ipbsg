import React from "react";
import { FileText, ArrowRight } from "lucide-react";

// PDFs
import atual from "/pdf/667 - Propostas Indecentes - Boletim virtual.pdf";
import anterior1 from "/pdf/664 - Frustração ou fé - Boletim virtual.pdf";
import anterior2 from "/pdf/665 - Os propósitos de Deus nas pragas do Egito - Boletim virtual.pdf";
import anterior3 from "/pdf/666 - ENCONTRO DE CASAIS COM CRISTO - Boletim virtual.pdf";

const BulletinSection: React.FC = () => {
  const anteriores = [
    { nome: "666 - ENCONTRO DE CASAIS COM CRISTO", arquivo: anterior3 },
    { nome: "665 - Os propósitos de Deus nas pragas do Egito", arquivo: anterior2 },
    { nome: "664 - Frustração ou fé", arquivo: anterior1 },
  ];

  return (
    <section id="boletim" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <FileText className="text-green-800" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">
              Boletim Digital
            </h2>
          </div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Leia o boletim semanal com a pastoral, programações e avisos da igreja. Aqui você também encontra os últimos exemplares disponíveis.
          </p>
        </div>

        {/* Botão Ver Boletim Atual */}
        <div className="flex justify-center mb-10">
          <a
            href={atual}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-1 bg-green-700 hover:bg-green-600 px-6 py-4 rounded-lg text-white font-medium shadow transition-colors duration-200"
          >
            <span className="text-lg font-semibold">Propostas Indecentes</span>
            <span className="text-sm text-green-200">Ver Boletim: 24/08/2025</span>
          </a>
        </div>

        {/* Banner Pastoral */}
        <div className="max-w-5xl mx-auto mb-8 bg-green-800 rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Propostas Indecentes
              </h3>
              <p className="text-green-100 italic font-medium mb-3">
                Autor: Rev. Hernandes Dias Lopes
              </p>
              <p className="text-green-100 text-sm md:text-base max-w-3xl">
                Quando o povo de Israel estava para sair do Egito, Faraó fez quatro propostas a Moisés para reter o povo no cativeiro. Essas propostas eram indecentes. <br /><br />
                Em primeiro lugar, não vá, fique (Ex 8.25). A escravidão é um símbolo do pecado, Faraó é um símbolo de Satanás e o Egito é um símbolo do mundo. Faraó propôs a Moisés a continuar no Egito e a levantar ali mesmo altares a Deus. <br /><br />
                Em segundo lugar, vá, mas não vá longe (Ex 8.28). Faraó agora propõe o povo ir, mas não ir tão longe. Faraó que até então castigava o povo com duros açoites e com trabalhos forçados, agora se transforma em chefe de relações públicas. Quer relacionamento. Abre as portas de seu império para o povo voltar sempre que sentir saudade. <br /><br />
                Em terceiro lugar, Faraó propõe a Moisés levar o povo, mas deixar no Egito as crianças e os jovens (Ex 10.10,11). Com isso, está insinuando que o lugar para os jovens desfrutarem a vida é no Egito. Que levantar altares a Deus é uma atividade para aqueles que já dobraram o cabo da boa esperança e já se aproximam do cabo das tormentas. <br /><br /> Em quarto lugar, vá, mas deixe a grana (Ex 10.24,26). Sugeriu que Moisés fosse embora, mas deixasse para trás o rebanho. Os israelitas serviriam a Deus, mas seus rebanhos ficariam no Egito. A reposta de Moisés é corajosa e emblemática. Disse a Faraó que nem uma unha ficaria no Egito (Ex 10.26). Muitos querem adorar a Deus, deixando seus bens no Egito. Querem servir a Deus sem consagrar a ele seus bens. <br /><br />
                Cuidado com as propostas de Faraó, elas são indecentes e muito perigosas.
              </p>
            </div>
          </div>
        </div>

        {/* Botão Quiz */}
        <div className="flex justify-center mt-4">
          <a
            href="#quiz"
            className="flex items-center space-x-2 bg-white text-green-700 hover:bg-green-100 px-6 py-3 rounded-lg font-medium shadow transition-colors duration-200"
          >
            <ArrowRight size={20} />
            <span>Ir para Quiz</span>
          </a>
        </div>

        {/* Boletins Anteriores */}
        <div className="max-w-5xl mx-auto mt-10">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
            Boletins Anteriores
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {anteriores.map((b, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow p-5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-200"
              >
                <div>
                  <FileText className="text-green-700 mb-3" size={28} />
                  <h4 className="text-green-800 font-semibold text-lg">{b.nome}</h4>
                </div>
                <a
                  href={b.arquivo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded-lg font-medium text-center transition-colors duration-200"
                >
                  Abrir
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulletinSection;
