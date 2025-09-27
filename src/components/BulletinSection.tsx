import React from "react";
import { FileText, ArrowRight } from "lucide-react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { pastoral } from "../data/pastoral";
import { currentBulletin, previousBulletins } from "../data/bulletins";

const BulletinSection: React.FC = () => {
  return (
    <section id="boletim" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">

        {/* Pastoral da Semana */}
        <div className="max-w-4xl mx-auto mb-16 bg-green-50 rounded-3xl shadow-md p-10">
          <h2 className="text-3xl font-bold text-green-900 mb-2 text-center">{pastoral.title}</h2>
          <p className="text-green-800 italic font-medium mb-6 text-center">{pastoral.author}</p>
          <div className="text-green-900 text-justify leading-relaxed space-y-4">
            {pastoral.paragraphs.map((p, idx) => (
              <p key={idx} className="text-green-900 text-sm md:text-base text-justify leading-relaxed">
                {p}
              </p>
            ))}
            <div className="mt-6 flex justify-center">
              <a
                href={currentBulletin.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-700 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl shadow transition-colors duration-200"
              >
                <ArrowRight size={20} className="mr-2" />
                Abrir Boletim Atual ({currentBulletin.version})
              </a>
            </div>
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
            {previousBulletins.map((b) => (
              <div key={b.version} className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <div>
                  <FileText className="text-green-700 mb-3" size={28} />
                  <h4 className="text-green-900 font-semibold text-lg mb-2">{b.version} - {b.title}</h4>
                  <p className="text-gray-600 text-sm">Clique para abrir o PDF do boletim.</p>
                </div>
                <a
                  href={b.pdf}
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
