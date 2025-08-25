import React, { useState, useReducer, useEffect } from 'react';
import { CheckCircle, Award } from 'lucide-react';
import { FaRegLightbulb } from 'react-icons/fa';
import { QuizSectionProps, QuizState } from '../types';

type QuizAction =
  | { type: 'ANSWER_QUESTION'; answer: number }
  | { type: 'NEXT_QUESTION' }
  | { type: 'COMPLETE_QUIZ'; questions: QuizSectionProps['questions'] }
  | { type: 'RESET_QUIZ' };

const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case 'ANSWER_QUESTION': {
      const newAnswers = [...state.answers];
      newAnswers[state.currentQuestion] = action.answer;
      return { ...state, answers: newAnswers };
    }
    case 'NEXT_QUESTION':
      return { ...state, currentQuestion: state.currentQuestion + 1 };
    case 'COMPLETE_QUIZ': {
      const score = state.answers.reduce((acc, answer, index) => {
        return acc + (answer === action.questions[index].correctAnswer ? 1 : 0);
      }, 0);
      return { ...state, score, isCompleted: true };
    }
    case 'RESET_QUIZ':
      return { currentQuestion: 0, answers: [], score: 0, isCompleted: false };
    default:
      return state;
  }
};

const QuizSection: React.FC<QuizSectionProps> = ({ questions }) => {
  const QUIZ_VERSION = '25-08-2025';
  const quizKey = `quiz_${QUIZ_VERSION}`;

  const savedState = localStorage.getItem(quizKey);
  const initialState: QuizState = savedState
    ? JSON.parse(savedState)
    : { currentQuestion: 0, answers: [], score: 0, isCompleted: false };

  const [quizState, dispatch] = useReducer(quizReducer, initialState);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [mode, setMode] = useState<'estudo' | 'teste' | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    localStorage.setItem(quizKey, JSON.stringify(quizState));
  }, [quizState, quizKey]);

  const currentQuestion = questions[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion + 1) / questions.length) * 100;

  // ---- Funções ----
  const handleSelectOption = (answerIndex: number) => {
    if (quizState.isCompleted || showFeedback) return;
    setSelectedAnswer(answerIndex);
  };

  const handleConfirmAnswer = () => {
    if (selectedAnswer === null) return;
    dispatch({ type: 'ANSWER_QUESTION', answer: selectedAnswer });
    if (mode === 'estudo') setShowFeedback(true);
    else handleNextQuestion(); // no modo teste já avança
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestion < questions.length - 1) {
      dispatch({ type: 'NEXT_QUESTION' });
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      dispatch({ type: 'COMPLETE_QUIZ', questions });
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_QUIZ' });
    setMode(null);
    setSelectedAnswer(null);
    setShowFeedback(false);
    localStorage.removeItem(quizKey);
  };

  // ---- Escolha do modo ----
  if (!mode) {
    return (
      <section id="quiz" className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <FaRegLightbulb className="text-green-800 mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-green-800 mb-6">Escolha o modo do Quiz</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => setMode('estudo')}
              className="px-6 py-4 bg-green-800 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              📝 Modo Estudo <br />
              <span className="text-sm text-green-100">feedback imediato</span>
            </button>
            <button
              onClick={() => setMode('teste')}
              className="px-6 py-4 bg-blue-800 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              🎯 Modo Teste <br />
              <span className="text-sm text-blue-100">resultado só no final</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ---- Resultado final ----
  if (quizState.isCompleted) {
    return (
      <section id="quiz" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Award className="text-green-800 mx-auto mb-4" size={64} />
              <h2 className="text-3xl font-bold text-green-800 mb-4">Quiz Concluído!</h2>
              <div className="text-6xl font-bold text-green-800 mb-2">
                {quizState.score}/{questions.length}
              </div>
              <p className="text-gray-600 mb-8">
                {quizState.score === questions.length
                  ? 'Parabéns! Você acertou todas as questões!'
                  : quizState.score >= questions.length * 0.7
                    ? 'Muito bem! Você tem um bom conhecimento bíblico!'
                    : 'Continue estudando a Palavra de Deus!'}
              </p>
              {mode === 'teste' && (
                <div className="text-left">
                  {questions.map((q, i) => {
                    const userAnswer = quizState.answers[i];
                    const isCorrect = userAnswer === q.correctAnswer;
                    return (
                      <div key={i} className="mb-4">
                        <p className="font-semibold">
                          {i + 1}. {q.question}
                        </p>
                        {!isCorrect && (
                          <p className="ml-4 text-red-600">
                            Sua resposta: {userAnswer !== undefined ? q.options[userAnswer] : '—'}
                          </p>
                        )}
                        <p className={`ml-4 ${isCorrect ? 'text-green-700' : 'text-green-700'}`}>
                          Alternativa correta: {q.options[q.correctAnswer]}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-700 transition"
              >
                Refazer Quiz
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ---- Quiz ativo ----
  return (
    <section id="quiz" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FaRegLightbulb className="text-green-800" size={32} />
            <h2 className="text-4xl font-bold text-green-800">Quiz Bíblico</h2>
          </div>
          <p className="text-gray-600 text-lg">
            {mode === 'estudo'
              ? 'Aprenda com feedback imediato'
              : 'Responda sem feedback, veja o resultado no final'}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-200 h-2">
              <div
                className="bg-green-800 h-2 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="p-8">
              <div className="text-center mb-6">
                <span className="text-sm text-gray-500 font-medium">
                  Pergunta {quizState.currentQuestion + 1} de {questions.length}
                </span>
              </div>

              <h3 className="text-xl font-bold text-green-800 mb-8 text-center">
                {currentQuestion.question}
              </h3>

              <div className="space-y-4 mb-8">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === currentQuestion.correctAnswer;

                  let buttonStyle =
                    'w-full p-4 text-left rounded-lg border-2 transition-all duration-200';

                  if (mode === 'estudo' && showFeedback) {
                    if (isCorrect)
                      buttonStyle += ' border-green-800 bg-green-100 text-green-800';
                    else if (isSelected && !isCorrect)
                      buttonStyle += ' border-red-600 bg-red-100 text-red-800';
                    else buttonStyle += ' border-gray-200';
                  } else {
                    buttonStyle += isSelected
                      ? ' border-green-800 bg-green-50 text-green-800'
                      : ' border-gray-200 hover:border-green-800 hover:bg-green-50';
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleSelectOption(index)}
                      disabled={mode === 'estudo' && showFeedback}
                      className={buttonStyle}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-green-800 bg-green-800' : 'border-gray-300'
                            }`}
                        >
                          {isSelected && !showFeedback && (
                            <CheckCircle size={14} className="text-white" />
                          )}
                        </div>
                        <span className="font-medium">{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Botões */}
              {mode === 'estudo' && !showFeedback && (
                <button
                  onClick={handleConfirmAnswer}
                  disabled={selectedAnswer === null}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${selectedAnswer !== null
                    ? 'bg-green-800 hover:bg-green-700 text-white transform hover:scale-[1.02]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                  Responder
                </button>
              )}

              {mode === 'estudo' && showFeedback && selectedAnswer !== null && (
                <div className="mt-6 text-center">
                  {/* Correto ou Errado */}
                  {selectedAnswer === currentQuestion.correctAnswer ? (
                    <p className="text-green-700 font-bold text-lg mb-2">Correto!</p>
                  ) : (
                    <p className="text-red-600 font-bold text-lg mb-2">Errado!</p>
                  )}

                  {/* Explicação com ícone */}
                  <div className="flex items-start justify-center gap-2 text-left max-w-xl mx-auto">
                    <FaRegLightbulb className="text-yellow-500 mt-1" size={20} />
                    <p className="text-gray-800">
                      {currentQuestion.explanation}
                    </p>
                  </div>

                  {/* Botão próximo */}
                  <button
                    onClick={handleNextQuestion}
                    className="w-full py-3 px-6 rounded-lg font-medium bg-green-800 hover:bg-green-700 text-white transform hover:scale-[1.02] transition-all duration-200 mt-4"
                  >
                    {quizState.currentQuestion === questions.length - 1
                      ? 'Finalizar Quiz'
                      : 'Próxima Pergunta'}
                  </button>
                </div>
              )}

              {mode === 'teste' && (
                <button
                  onClick={handleConfirmAnswer} 
                  disabled={selectedAnswer === null}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${selectedAnswer !== null
                    ? 'bg-green-800 hover:bg-green-700 text-white transform hover:scale-[1.02]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                  {quizState.currentQuestion === questions.length - 1
                    ? 'Finalizar Quiz'
                    : 'Próxima Pergunta'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
