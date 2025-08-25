import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

interface Society {
    name: string;
    logo: string;
    description: string[];
    misson: string;
    instagram?: string;
}

const societies: Society[] = [
    {
        name: 'União da Crianças Presbiterianas',
        logo: '/images/ucp_logo.png',
        description: [
            `A UCP da IPB.SG dedica-se ao ensino bíblico das crianças, proporcionando momentos de aprendizado, adoração e convivência cristã desde cedo. As atividades são planejadas para estimular a fé, a criatividade e a amizade, com músicas, brincadeiras e desafios que fortalecem o amor a Deus e ao próximo.`,
            `Nosso foco é desenvolver líderes servos para a igreja e a sociedade, formando crianças com caráter cristão e uma compreensão sólida da Palavra de Deus. A UCP busca que cada criança se sinta parte da comunidade da igreja, aprendendo a viver com integridade e compaixão.`
        ],
        misson: 'Edificar a fé das crianças, promover comunhão, ensinar princípios bíblicos de maneira lúdica e formar futuros líderes para o serviço de Cristo.',
        instagram: 'https://www.instagram.com/ucp.ipbsg/?hl=pt-br'
    },
    {
        name: 'União Presbiteriana de Adolescentes',
        logo: '/images/upa_logo.png',
        description: [
            `A UPA da IPB.SG é dedicada a adolescentes que desejam crescer espiritualmente e desenvolver amizade e comunhão dentro da igreja. As atividades incentivam estudo bíblico, oração, participação em projetos e eventos que fortalecem a fé dos jovens.`,
            `A sociedade promove liderança jovem, senso de responsabilidade e engajamento em ações de serviço à igreja e à comunidade. A UPA visa preparar os adolescentes para viverem de forma íntegra e ativa na vida cristã, cultivando princípios bíblicos em todas as áreas de suas vidas.`
        ],
        misson: 'Formar adolescentes comprometidos com Cristo, fortalecendo o conhecimento da Bíblia, a oração, o amor à igreja e a responsabilidade social.',
        instagram: 'https://www.instagram.com/upa_sg/?hl=pt-br'
    },
    {
        name: 'União de Mocidade Presbiteriana',
        logo: '/images/ump_logo.png',
        description: [
            `A UMP da IPB.SG reúne jovens adultos que desejam crescer em fé, caráter e liderança dentro da igreja. A sociedade oferece estudos bíblicos, reuniões, projetos sociais e eventos que incentivam a maturidade espiritual e a comunhão entre os membros.`,
            `O objetivo da UMP é formar jovens líderes comprometidos com o serviço de Deus e com a edificação da igreja. Os participantes são incentivados a aplicar a Palavra de Deus no dia a dia, desenvolver relacionamentos saudáveis e atuar em ministérios e projetos da congregação.`
        ],
        misson: 'Promover maturidade espiritual, liderança responsável e engajamento cristão ativo na vida da igreja e da comunidade.',
        instagram: 'https://www.instagram.com/ump.ipbsg/?hl=pt-br'
    },
    {
        name: 'Sociedade Auxiliadora Feminina',
        logo: '/images/saf_logo.png',
        description: [
            `A SAF da IPB.SG é voltada para mulheres que desejam servir, estudar a Bíblia e fortalecer a comunhão dentro da igreja. A sociedade promove encontros, estudos e projetos que estimulam o crescimento espiritual, a amizade e a participação ativa na vida congregacional.`,
            `Além disso, a SAF desenvolve ações de serviço à comunidade, incentivando as mulheres a exercerem seu papel cristão em diferentes contextos. O objetivo é criar um espaço de apoio, aprendizado e fortalecimento da fé, preparando líderes femininas para servir com amor e dedicação.`
        ],
        misson: 'Fomentar estudo bíblico, comunhão feminina, serviço comunitário e desenvolvimento espiritual, fortalecendo o papel das mulheres na igreja e na sociedade.',
    }
];


const SocietySlider: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % societies.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + societies.length) % societies.length);

    const society = societies[current];

    return (
        <section className="py-16 bg-white" id="sociedades">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-green-800 mb-4 text-center">Nossas Sociedades</h2>
                <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-center">
                    Conheça cada sociedade da nossa igreja e como participam ativamente do crescimento espiritual e comunitário.
                </p>

                {/* Card do slide */}
                <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 shadow-lg flex flex-col lg:flex-row gap-8">
                    {/* Logo à esquerda */}
                    <div className="flex-shrink-0 flex justify-center lg:justify-center lg:self-center w-full lg:w-1/3">
                        <img
                            src={society.logo}
                            alt={society.name}
                            title={society.instagram ? "Abrir no Instagram" : ""}
                            className="w-64 h-64 lg:w-72 lg:h-72 object-cover rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => society.instagram && window.open(society.instagram, "_blank")}
                        />
                    </div>

                    {/* Informações à direita */}
                    <div className="flex flex-col w-full lg:w-2/3 text-center lg:text-left">
                        <h3 className="text-2xl font-bold text-green-800 mb-4">{society.name}</h3>
                        <div className="text-gray-700 mb-6">
                            {society.description.map((para, idx) => (
                                <p key={idx} className="mb-4">{para}</p>
                            ))}
                        </div>
                        <p className="text-gray-700 mb-6"><strong>Missão:</strong> {society.misson}</p>

                        {society.instagram && (
                            <div className="flex justify-center lg:justify-start">
                                <a
                                    href={society.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors"
                                >
                                    <FaInstagram className="mr-2" /> Seguir no Instagram
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navegação e dots */}
                <div className="flex justify-center items-center mt-6 space-x-4">
                    <button
                        onClick={prevSlide}
                        className="bg-green-800 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                    >
                        &#10094;
                    </button>

                    <div className="flex space-x-2">
                        {societies.map((_, idx) => (
                            <span
                                key={idx}
                                className={`w-3 h-3 rounded-full cursor-pointer ${idx === current ? 'bg-green-800' : 'bg-gray-300'}`}
                                onClick={() => setCurrent(idx)}
                            ></span>
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="bg-green-800 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                    >
                        &#10095;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SocietySlider;
