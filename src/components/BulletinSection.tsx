import React from "react";
import { FileText, ArrowRight } from "lucide-react";
import { FaCloudUploadAlt } from "react-icons/fa";

// PDFs
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
    <section id="boletim" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">

        {/* Pastoral da Semana */}
        <div className="max-w-4xl mx-auto mb-16 bg-green-50 rounded-3xl shadow-md p-10">
          <h2 className="text-3xl font-bold text-green-900 mb-2 text-center">Pastoral: Propostas Indecentes</h2>
          <p className="text-green-800 italic font-medium mb-6 text-center">Rev. Hernandes Dias Lopes</p>
          <div className="text-green-900 text-justify leading-relaxed space-y-4">
            <p className="text-green-900 text-sm md:text-base text-justify leading-relaxed">
              Quando o povo de Israel estava para sair do Egito, Faraó fez quatro propostas a Moisés para reter o povo no cativeiro. Essas propostas eram indecentes. <br /><br />
              Em primeiro lugar, não vá, fique (Ex 8.25). A escravidão é um símbolo do pecado, Faraó é um símbolo de Satanás e o Egito é um símbolo do mundo. Faraó propôs a Moisés a continuar no Egito e a levantar ali mesmo altares a Deus. <br /><br />
              Em segundo lugar, vá, mas não vá longe (Ex 8.28). Faraó agora propõe o povo ir, mas não ir tão longe. Faraó que até então castigava o povo com duros açoites e com trabalhos forçados, agora se transforma em chefe de relações públicas. Quer relacionamento. Abre as portas de seu império para o povo voltar sempre que sentir saudade. <br /><br />
              Em terceiro lugar, Faraó propõe a Moisés levar o povo, mas deixar no Egito as crianças e os jovens (Ex 10.10,11). Com isso, está insinuando que o lugar para os jovens desfrutarem a vida é no Egito. Que levantar altares a Deus é uma atividade para aqueles que já dobraram o cabo da boa esperança e já se aproximam do cabo das tormentas. <br /><br /> Em quarto lugar, vá, mas deixe a grana (Ex 10.24,26). Sugeriu que Moisés fosse embora, mas deixasse para trás o rebanho. Os israelitas serviriam a Deus, mas seus rebanhos ficariam no Egito. A reposta de Moisés é corajosa e emblemática. Disse a Faraó que nem uma unha ficaria no Egito (Ex 10.26). Muitos querem adorar a Deus, deixando seus bens no Egito. Querem servir a Deus sem consagrar a ele seus bens. <br /><br />
              Cuidado com as propostas de Faraó, elas são indecentes e muito perigosas.
            </p>
          </div>
        </div>

        {/* Quiz */}
        <div className="max-w-3xl mx-auto mb-20 text-center bg-white shadow-lg rounded-3xl p-10 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Teste sua compreensão</h2>
          <p className="text-green-700 mb-6">
            Após ler a pastoral, participe do quiz e veja o quanto aprendeu da mensagem desta semana.
          </p>
          <a
            href="#quiz"
            className="inline-flex items-center justify-center bg-green-700 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl shadow transition-colors duration-200"
          >
            <ArrowRight size={20} className="mr-2" />
            Ir para Quiz
          </a>
        </div>

        {/* Boletins Anteriores */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Boletins Anteriores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {anteriores.map((b, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <div>
                  <FileText className="text-green-700 mb-3" size={28} />
                  <h4 className="text-green-900 font-semibold text-lg mb-2">{b.nome}</h4>
                  <p className="text-gray-600 text-sm">Clique para abrir o PDF do boletim anterior.</p>
                </div>
                <a
                  href={b.arquivo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-green-700 hover:bg-green-600 text-white font-medium text-center py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Abrir
                </a>
              </div>
            ))}
          </div>

          {/* Todos os Boletins Digitais */}
          <div className="mt-12 max-w-4xl mx-auto bg-green-50 rounded-3xl shadow-md p-10 text-center">
            <h3 className="text-2xl font-bold text-green-900 mb-3">Todos os Boletins Digitais</h3>
            <p className="text-green-800 mb-6">
              Quer revisitar as mensagens das pastorais anteriores? <br />
              Todos os boletins digitais estão organizados no Drive para você acessar a qualquer momento <br />
              e conferir todo o conteúdo dos boletins anteriores.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1vgZMeqAMgOh8gdf_1yVfn--7Y-XlmN1J?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-700 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl shadow transition-colors duration-200"
            >
              <FaCloudUploadAlt size={20} className="mr-2" />
              Acessar Drive – Boletins Digitais
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BulletinSection;
