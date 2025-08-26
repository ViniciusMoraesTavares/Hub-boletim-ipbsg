import React, { useState } from 'react';
import Header from '../components/Header';
import BulletinSection from '../components/BulletinSection';
import InfoSection from '../components/InfoSection';
import SocietySlider from '../components/SocietySlider';
import QuizSection from '../components/QuizSection';
import Footer from '../components/Footer';
import { quizQuestions } from '../data/quizQuestions';
import { ArrowRight } from "lucide-react";
import atual from "/pdf/667 - Propostas Indecentes - Boletim virtual.pdf";

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Principal */}
      <section id="home" className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-600 pt-24 md:pt-32">
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              Boletim Semanal <br />
              <span className="text-green-200">IPB Santa Gertrudes</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed animate-fadeIn">
              Bem-vindo(a) ao boletim digital da IPB de Santa Gertrudes! Aqui você encontra a pastoral da semana, informações sobre a igreja, fotos, novidades e a programação completa.
              Participe do quiz bíblico e interaja com a Palavra de Deus!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
              <button
                onClick={() => document.getElementById('boletim')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Pastoral Semanal
              </button>
              <button
                onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-800 transition-all duration-200 transform hover:scale-105"
              >
                Quiz Bíblico
              </button>
            </div>
          </div>
        </div>

        {/* Hero do Boletim */}
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl shadow-xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white md:max-w-lg">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Boletim da Semana</h2>
              <p className="text-lg md:text-xl mb-6">Propostas Indecentes - 24/08/2025</p>
              <p className="mb-6 text-white/90">
                Acesse o boletim completo com a pastoral, avisos e programações da semana. Leia, medite e compartilhe com nossa comunidade.
              </p>
              <a
                href={atual}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-green-900 font-bold px-8 py-4 rounded-2xl text-lg shadow-lg transition-all duration-300"
              >
                <ArrowRight size={24} className="mr-3" />
                Abrir Boletim
              </a>
            </div>

            <div className="hidden md:block relative w-64 h-96 flex-shrink-0 group cursor-pointer">
              <a href={atual} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">

                {/* Imagem do boletim */}
                <img
                  src="/images/capa_pastoral.webp"
                  alt="Capa do boletim"
                  className="object-cover w-full h-full rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
                  }}
                />

                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.54)",
                    clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
                  }}
                >
                  <span className="text-white-1000 font-bold text-lg text-center px-4">
                    Clique para <br></br>
                    abrir Boletim
                  </span>
                    <ArrowRight size={24} className="mr-3" />
                </div>
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-white rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-10 left-10 w-16 h-16 bg-white rounded-full opacity-20 animate-pulse"></div>
              </a>
            </div>
          </div>
        </div>
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C480,100 960,0 1440,100 L1440,150 L0,150 Z"
            fill="#f0fdf4"
          />
        </svg>
      </section>

      <BulletinSection />
      <InfoSection />
      <SocietySlider />
      <QuizSection questions={quizQuestions} />
      <Footer />
    </div>
  );
};

export default Home;