import React from "react";
import { FileText, ArrowRight } from "lucide-react";
import { FaCloudUploadAlt } from "react-icons/fa";

// PDFs
import anterior1 from "/pdf/667-Propostas-Indecentes-Boletim-virtual.pdf";
import anterior2 from "/pdf/665 - Os propósitos de Deus nas pragas do Egito - Boletim virtual.pdf";
import anterior3 from "/pdf/666 - ENCONTRO DE CASAIS COM CRISTO - Boletim virtual.pdf";

const BulletinSection: React.FC = () => {
  const anteriores = [
    { nome: "665 - Os propósitos de Deus nas pragas do Egito", arquivo: anterior2 },
    { nome: "666 - ENCONTRO DE CASAIS COM CRISTO", arquivo: anterior3 },
    { nome: "667 - Propostas Indecentes", arquivo: anterior1 },
  ];

  return (
    <section id="boletim" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">

        {/* Pastoral da Semana */}
        <div className="max-w-4xl mx-auto mb-16 bg-green-50 rounded-3xl shadow-md p-10">
          <h2 className="text-3xl font-bold text-green-900 mb-2 text-center">Pastoral: Cristo e a páscoa (Êxodo 12.1-28)</h2>
          <p className="text-green-800 italic font-medium mb-6 text-center">Rev. Júlio Alexandre Werner Frossard</p>
          <div className="text-green-900 text-justify leading-relaxed space-y-4">
            <p className="text-green-900 text-sm md:text-base text-justify leading-relaxed">
              O juízo final e a redenção do povo de Deus tem em seu meio a instituição e celebração da Páscoa e da Festa dos Pães Asmos, substituída pela Santa Ceia,  que pode ser destacada em três partes: <br /><br />
              A primeira dos versos 1-14 retrata acerca de um cordeiro, macho, sem defeito, que seria tomado por inteiro, cujos ossos não seriam quebrados (v.46). O sangue derramado deste cordeiro seria usado para marcar as casas daqueles que participavam do corpo do animal a fim de serem salvos do juízo que viria sobre aquela terra. <br /><br />
              A segunda dos versos 15-20 retrata acerca dos pães, comidos por uma semana, onde haveria dois ajuntamentos públicos no primeiro e no último dia e a principal marca desta festividade era a exclusão de todo o fermento e coisas levedadas. <br /><br />
              Finalmente   dos versos 24-28 o aspecto memorial e pedagógico do rito na instrução dos pais aos filhos ensinando-os o significado da Páscoa e da libertação que eles tiveram pelo sangue do cordeiro e o juízo que veio sobre o Egito.  <br /><br />
              Todo o rito da Páscoa se cumpre em Cristo, e por sua instituição,  celebramos a Santa Ceia onde Jesus, o Cordeiro perfeito de Deus (Jo 1.29), foi crucificado como sacrifício vivo, sem que nenhum de seus ossos fossem quebrados; cujo corpo tomamos e por seu sangue derramado somos salvos. Diante do Cordeiro devemos nos apresentar a Deus, santos e irrepreensíveis, como uma nação santa, purificados pelo Cordeiro e dispostos a afastar de nós e do nosso meio todo pecado e a fermentação  que ele produz (Ef.1.4-7; 1Co.5.6-8). Tendo nossos filhos como parte desta aliança, ensinando-os acerca da redenção. <br /><br />
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
