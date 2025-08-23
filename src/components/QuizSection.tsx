import React, { useState, useReducer } from 'react';
import { HelpCircle, CheckCircle, Award, MessageCircle } from 'lucide-react';
import { QuizSectionProps, QuizState } from '../types';

// Reducer para gerenciar o estado do quiz
const quizReducer = (state: QuizState, action: any): QuizState => {
  switch (action.type) {
    case 'ANSWER_QUESTION':
      const newAnswers = [...state.answers];
      newAnswers[state.currentQuestion] = action.answer;
      
      return {
        ...state,
        answers: newAnswers,
      };
    
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    
    case 'COMPLETE_QUIZ':
      const score = state.answers.reduce((acc, answer, index) => {
        return acc + (answer === action.questions[index].correctAnswer ? 1 : 0);
      }, 0);
      
      return {
        ...state,
        score,
        isCompleted: true,
      };
    
    case 'RESET_QUIZ':
      return {
        currentQuestion: 0,
        answers: [],
        score: 0,
        isCompleted: false,
      };
    
    default:
      return state;
  }
};

const QuizSection: React.FC<QuizSectionProps> = ({ questions }) => {
  const [quizState, dispatch] = useReducer(quizReducer, {
    currentQuestion: 0,
    answers: [],
    score: 0,
    isCompleted: false,
  });

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    dispatch({ type: 'ANSWER_QUESTION', answer: answerIndex });
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestion < questions.length - 1) {
      dispatch({ type: 'NEXT_QUESTION' });
      setSelectedAnswer(null);
    } else {
      dispatch({ type: 'COMPLETE_QUIZ', questions });
    }
  };

  const handleResetQuiz = () => {
    dispatch({ type: 'RESET_QUIZ' });
    setSelectedAnswer(null);
  };

  const handleSendScore = () => {
    const message = `Olá! Completei o quiz bíblico da IPB e minha pontuação foi: ${quizState.score}/${questions.length}`;
    const whatsappUrl = `https://wa.me/553935455024?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const currentQuestion = questions[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion + 1) / questions.length) * 100;

  if (quizState.isCompleted) {
    return (
      <section id="quiz" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Award className="text-green-800 mx-auto mb-4" size={64} />
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                Quiz Concluído!
              </h2>
              <div className="text-6xl font-bold text-green-800 mb-2">
                {quizState.score}/{questions.length}
              </div>
              <p className="text-gray-600 mb-8">
                {quizState.score === questions.length 
                  ? "Parabéns! Você acertou todas as questões!" 
                  : quizState.score >= questions.length * 0.7 
                    ? "Muito bem! Você tem um bom conhecimento bíblico!"
                    : "Continue estudando a Palavra de Deus!"}
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={handleSendScore}
                  className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                >
                  <MessageCircle size={20} />
                  <span>Enviar Pontuação via WhatsApp</span>
                </button>
                
                <button
                  onClick={handleResetQuiz}
                  className="w-full bg-gray-500 hover:bg-gray-400 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
                >
                  Refazer Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HelpCircle className="text-green-800" size={32} />
            <h2 className="text-4xl font-bold text-green-800">
              Quiz Bíblico
            </h2>
          </div>
          <p className="text-gray-600 text-lg">
            Teste seus conhecimentos sobre a Bíblia Sagrada
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Barra de Progresso */}
            <div className="bg-gray-200 h-2">
              <div
                className="bg-green-800 h-2 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="p-8">
              {/* Contador da Pergunta */}
              <div className="text-center mb-6">
                <span className="text-sm text-gray-500 font-medium">
                  Pergunta {quizState.currentQuestion + 1} de {questions.length}
                </span>
              </div>

              {/* Pergunta */}
              <h3 className="text-xl font-bold text-green-800 mb-8 text-center">
                {currentQuestion.question}
              </h3>

              {/* Opções de Resposta */}
              <div className="space-y-4 mb-8">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswer === index
                        ? 'border-green-800 bg-green-50 text-green-800'
                        : 'border-gray-200 hover:border-green-800 hover:bg-green-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedAnswer === index
                          ? 'border-green-800 bg-green-800'
                          : 'border-gray-300'
                      }`}>
                        {selectedAnswer === index && (
                          <CheckCircle size={16} className="text-white" />
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Botão Próxima */}
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  selectedAnswer !== null
                    ? 'bg-green-800 hover:bg-green-700 text-white transform hover:scale-[1.02]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {quizState.currentQuestion === questions.length - 1 
                  ? 'Finalizar Quiz' 
                  : 'Próxima Pergunta'
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;