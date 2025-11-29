import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // Conteúdo pastoral
  {
    id: 1,
    question: 'Nada pode fugir do controle de Deus segundo o texto pastoral.',
    options: ['Verdadeiro', 'Falso', 'Depende do contexto', 'Não é afirmado'],
    correctAnswer: 0,
    explanation: 'Parágrafo 1: “Nada, absolutamente nada pode fugir do controle de Deus.”',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'O que Jó reconhece sobre seus bens, filhos e sua vida?',
    options: [
      'Que eram dádivas de Deus',
      'Que eram fruto exclusivo de seu esforço',
      'Que estavam fora do alcance de Deus',
      'Que eram privilégios imerecidos do acaso',
    ],
    correctAnswer: 0,
    explanation: 'Parágrafo 1: Jó entendia que tudo o que possuía era dádiva de Deus.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Como o texto define providência de Deus?',
    options: [
      'Intervenções ocasionais sem propósito',
      'Afastamento divino das ações humanas',
      'Destino impessoal alheio a Deus',
      'Governo santo, sábio e poderoso sobre tudo e todos',
    ],
    correctAnswer: 3,
    explanation: 'Parágrafo 1: “na sua providência Deus ... governa tudo e todos”.',
    difficulty: 'medium',
  },
  {
    id: 4,
    question: 'Segundo o texto, qual é o melhor remédio para a ansiedade?',
    options: [
      'Ignorar tribulações',
      'Saber que Deus está no controle de tudo',
      'Acumular recursos materiais',
      'Confiar apenas em líderes humanos',
    ],
    correctAnswer: 1,
    explanation: 'Parágrafo 3: “o melhor remédio para a ansiedade é saber que Deus está no controle”.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'A tribulação do crente é ignorada por Deus, conforme o texto.',
    options: ['Verdadeiro', 'Falso', 'Às vezes', 'Não mencionado'],
    correctAnswer: 1,
    explanation: 'Parágrafo 3: “minha tribulação ... não é ignorada por Deus”.',
    difficulty: 'easy',
  },

  // Referências bíblicas
  {
    id: 6,
    question: 'Qual passagem corresponde à declaração: “O Senhor o deu, e o Senhor o tomou”?',
    options: ['Jó 1.21', 'Jó 2.9', 'Jó 3.1', 'Jó 38.4'],
    correctAnswer: 0,
    explanation: 'Parágrafo 1: citação de Jó 1.21 (contexto da soberania de Deus).',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Em 1Cr 29.11-12, o que Davi reconhece sobre o reino?',
    options: [
      'Que pertence ao povo',
      'Que é domínio compartilhado com as nações vizinhas',
      'Que o Senhor é o chefe sobre todos',
      'Que o poder está nas mãos dos reis',
    ],
    correctAnswer: 2,
    explanation: 'Parágrafo 2: “Teu Senhor é o reino ... chefe sobre todos”.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'De acordo com 1Cr 29.12, selecione a afirmação correta.',
    options: [
      'Riquezas e glórias vêm do esforço humano',
      'Deus domina sobre tudo; em sua mão há força e poder',
      'A grandeza pertence aos exércitos de Israel',
      'A vitória depende dos conselhos dos príncipes',
    ],
    correctAnswer: 1,
    explanation: 'Parágrafo 2: “Riquezas e glórias vêm de ti ... dominas sobre tudo ... força e poder”.',
    difficulty: 'medium',
  },
  {
    id: 9,
    question: 'As aflições do crente, segundo o texto, são fruto do acaso.',
    options: ['Verdadeiro', 'Falso', 'Apenas em casos extremos', 'Somente quando faltam recursos'],
    correctAnswer: 1,
    explanation: 'Parágrafo 3: “nossas aflições não são frutos do acaso, mas de um objetivo traçado por Deus”.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'Qual aplicação prática o texto sugere diante das tribulações?',
    options: [
      'Buscar apenas soluções humanas imediatas',
      'Negar a existência da dor',
      'Confiar no propósito e controle de Deus nas tribulações',
      'Abandonar a fé por pragmatismo',
    ],
    correctAnswer: 2,
    explanation: 'Parágrafo 3: Deus tem propósito nas tribulações; confiar no seu controle traz descanso.',
    difficulty: 'hard',
  },
];
