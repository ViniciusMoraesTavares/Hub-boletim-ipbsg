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
              Bem-vindos à Igreja <br />
              <span className="text-green-200">Presbiteriana do Brasil</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed animate-fadeIn">
              Venha fazer parte da nossa comunidade de fé, onde encontramos esperança, 
              comunhão e crescimento espiritual fundamentados na Palavra de Deus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
              <button 
                onClick={() => document.getElementById('boletim')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Ver Boletim Atual
              </button>
              <button 
                onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-800 transition-all duration-200 transform hover:scale-105"
              >
                Fazer Quiz Bíblico
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