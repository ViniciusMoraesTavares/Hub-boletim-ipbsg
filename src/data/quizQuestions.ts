import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // Fáceis
  {
    id: 1,
    question: "O Salmo de Êxodo 15 nos dá esperança:",
    options: [
      "Da nossa terra prometida",
      "De sermos ricos",
      "De uma vida longa",
      "Saúde sempre",
      "Ausência de problemas",
    ],
    correctAnswer: 0,
    explanation: "Este salmo aponta para a promessa de Deus de levar Seu povo à terra prometida.",
    difficulty: 'easy',
  },
  {
    id: 2,
    question: "Qual evento histórico é retratado no cântico de Êxodo 15?",
    options: [
      "A morte do exército do Egito",
      "A morte dos primogênitos",
      "A Páscoa",
      "O maná que veio do céu",
      "A pesca maravilhosa",
    ],
    correctAnswer: 0,
    explanation: "O cântico celebra a vitória de Deus sobre o exército egípcio no Mar Vermelho.",
    difficulty: 'easy',
  },
  {
    id: 3,
    question: "No capítulo 15 de Êxodo encontramos:",
    options: [
      "Uma parábola",
      "Uma genealogia",
      "Uma oração",
      "Um salmo",
      "Um sonho realizado",
    ],
    correctAnswer: 3,
    explanation: "Este capítulo contém um salmo de louvor pela libertação do povo de Israel.",
    difficulty: 'easy',
  },

  // Médias
  {
    id: 4,
    question: "Um cântico que se preocupa em falar de Deus, de quem Ele é e o que Ele faz é:",
    options: [
      "Antropocêntrico",
      "Teocêntrico",
      "Humanista",
      "Antífona",
      "Salmo",
    ],
    correctAnswer: 1,
    explanation: "Um cântico teocêntrico tem Deus como foco principal, destacando Seu caráter e ações.",
    difficulty: 'medium',
  },
  {
    id: 5,
    question: "O Salmo de Êxodo 15 apresenta, exceto:",
    options: [
      "O poder de Deus",
      "A fidelidade de Deus",
      "O juízo de Deus",
      "O descanso de Deus",
      "O evento histórico da travessia do Mar Vermelho",
    ],
    correctAnswer: 3,
    explanation: "O texto não menciona o descanso de Deus, mas sim Seu poder e juízo.",
    difficulty: 'medium',
  },
  {
    id: 6,
    question: "O cântico de Êxodo 15 antecipa qual tema teológico que será desenvolvido posteriormente na Bíblia?",
    options: [
      "O reinado eterno de Deus",
      "A doutrina da Trindade",
      "O sacerdócio levítico",
      "A construção do templo",
      "A vinda do Messias",
    ],
    correctAnswer: 0,
    explanation: "O verso \"O Senhor reinará para sempre\" (v.18) estabelece este tema crucial.",
    difficulty: 'medium',
  },

  // Difíceis
  {
    id: 7,
    question: "No cântico de Êxodo 15, qual é o motivo principal pelo qual Israel adora a Deus?",
    options: [
      "Pelo Seu poder demonstrado na derrota dos inimigos",
      "Pela sua riqueza material",
      "Pela quantidade de pessoas que o seguem",
      "Pela métrica poética do cântico",
      "Pelo número de vitórias militares de outros povos"
    ],
    correctAnswer: 0,
    explanation: "O cântico exalta a Deus principalmente pelo Seu poder e a vitória gloriosa sobre os inimigos, conforme descrito nos versículos 11 e 14-16.",
    difficulty: 'medium',
  },
];
