import React, { useState } from 'react';
import Header from '../components/Header';
import BulletinSection from '../components/BulletinSection';
import InfoSection from '../components/InfoSection';
import QuizSection from '../components/QuizSection';
import Footer from '../components/Footer';
import { quizQuestions } from '../data/quizQuestions';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-8 bg-gradient-to-br from-green-800 via-green-700 to-green-600">
        <div className="container mx-auto px-4 py-16 text-center">
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
                Boletim da Semana
              </button>
              <button
                onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-800 transition-all duration-200 transform hover:scale-105"
              >
                Pastoral & Quiz
              </button>
            </div>

          </div>
        </div>
      </section>

      <BulletinSection />
      <InfoSection />
      <QuizSection questions={quizQuestions} />
      <Footer />
    </div>
  );
};

export default Home;