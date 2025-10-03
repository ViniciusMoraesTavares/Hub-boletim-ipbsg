import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // Fáceis
  {
    id: 1,
    question: "O que significa a expressão \"Sola Scriptura\"?",
    options: [
      "Que a tradição oral é a principal fonte de fé e prática.",
      "Que a autoridade final do cristão está nos concílios e líderes religiosos.",
      "Que somente as Escrituras Sagradas são a regra de fé e prática para os cristãos.",
      "Que a Bíblia é exaustiva em todos os assuntos da vida.",
      "Que opiniões de teólogos têm a mesma autoridade que a Bíblia.",
    ],
    correctAnswer: 2,
    explanation: "Sola Scriptura é um dos cinco princípios da Reforma Protestante que afirma que somente as Escrituras são a autoridade final para a fé e prática cristã.",
    difficulty: 'easy',
  },
  {
    id: 2,
    question: "Qual é a principal razão para as Escrituras serem a única regra de fé e prática?",
    options: [
      "Porque foram transmitidas oralmente de geração em geração.",
      "Porque são inspiradas por Deus.",
      "Porque foram aprovadas pelos concílios da Igreja.",
      "Porque a tradição confirma sua validade.",
      "Porque refletem a opinião dos líderes religiosos.",
    ],
    correctAnswer: 1,
    explanation: "As Escrituras são a única regra de fé e prática porque são divinamente inspiradas por Deus (2 Timóteo 3:16), tornando-as a autoridade suprema para os cristãos.",
    difficulty: 'easy',
  },
  {
    id: 3,
    question: "Como devem ser entendidas as tradições, concílios e opiniões teológicas em relação às Escrituras?",
    options: [
      "Como autoridades finais na fé e prática cristã.",
      "Como fontes iguais em autoridade às Escrituras.",
      "Como úteis na compreensão e aplicação, desde que não contradigam as Escrituras.",
      "Como revelações inspiradas por Deus.",
      "Como desnecessárias para a vida cristã.",
    ],
    correctAnswer: 2,
    explanation: "As tradições, concílios e opiniões teológicas são ferramentas úteis para compreender as Escrituras, mas devem sempre estar subordinadas à autoridade bíblica e nunca contradizê-la.",
    difficulty: 'easy',
  },

  // Médias
  {
    id: 4,
    question: "NÃO é negado ao se afirmar o princípio da Sola Scriptura, EXCETO?",
    options: [
      "Que a Palavra de Deus foi transmitida oralmente antes de ser escrita.",
      "Que Deus se revela na criação (revelação geral).",
      "A necessidade de pastores, mestres e evangelistas.",
      "Que nem todos os textos da bíblia são claros e fáceis.",
      "A tradição como autoridade final e suficiente.",
    ],
    correctAnswer: 4,
    explanation: "A tradição como autoridade final e suficiente é o único item que é realmente negado pelo princípio da Sola Scriptura, que afirma que somente as Escrituras têm autoridade final, não a tradição.",
    difficulty: 'medium',
  },
  {
    id: 5,
    question: "Quais são as três afirmações centrais destacadas sobre a Sola Scriptura?",
    options: [
      "A Escritura é o meio pelo qual Deus fala; é a autoridade final; nenhuma outra fonte pode ser colocada ao lado dela.",
      "A tradição é tão importante quanto a Escritura; a Bíblia é sempre clara; opiniões de teólogos são inspiradas.",
      "A Bíblia contém revelações parciais; a tradição completa sua mensagem; concílios determinam a fé.",
      "A Escritura é útil, mas não suficiente; concílios têm igual autoridade; a revelação oral continua superior.",
      "Deus fala somente pela tradição; a Bíblia é exaustiva; mestres e evangelistas substituem a Escritura",
    ],
    correctAnswer: 0,
    explanation: "Estas três afirmações resumem o princípio da Sola Scriptura: Deus fala através das Escrituras, elas são a autoridade final para a fé e prática cristã, e nenhuma outra fonte tem autoridade equivalente.",
    difficulty: 'medium',
  },
];
