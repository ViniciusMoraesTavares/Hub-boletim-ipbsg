import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual é o primeiro livro da Bíblia?",
    options: ["Êxodo", "Gênesis", "Levítico", "Números"],
    correctAnswer: 1,
    explanation: "Gênesis é o primeiro livro da Bíblia, narrando a criação e os primeiros eventos da humanidade."
  },
  {
    id: 2,
    question: "Quantos discípulos Jesus escolheu?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    explanation: "Jesus escolheu 12 discípulos para segui-lo e aprender com Ele durante seu ministério."
  },
  {
    id: 3,
    question: "Qual o versículo mais conhecido da Bíblia?",
    options: ["Salmo 23:1", "João 3:16", "1 Coríntios 13:4", "Romanos 8:28"],
    correctAnswer: 1,
    explanation: "João 3:16 é muito conhecido por resumir o amor de Deus e a salvação em Cristo."
  },
  {
    id: 4,
    question: "Quem foi o primeiro rei de Israel?",
    options: ["Davi", "Salomão", "Saul", "Samuel"],
    correctAnswer: 2,
    explanation: "Saul foi ungido como o primeiro rei de Israel pelo profeta Samuel."
  },
  {
    id: 5,
    question: "Em que cidade Jesus nasceu?",
    options: ["Nazaré", "Jerusalém", "Belém", "Cafarnaum"],
    correctAnswer: 2,
    explanation: "Jesus nasceu em Belém, conforme profetizado no Antigo Testamento."
  }
];