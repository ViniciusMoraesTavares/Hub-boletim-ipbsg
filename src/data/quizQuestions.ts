import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Segundo a pastoral, como Deus age ao longo da história?',
    options: [
      'De forma aleatória',
      'De forma proposital e perfeita',
      'Apenas por meio de milagres',
      'Conforme as circunstâncias humanas',
      'Somente quando os homens compreendem Seus planos',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral afirma que, de Gênesis a Apocalipse, Deus age de forma proposital e perfeita, segundo Sua soberania.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Quem foi curado por Jesus no episódio apresentado na pastoral?',
    options: [
      'O cego de Betsaida',
      'O paralítico de Cafarnaum',
      'Bartimeu',
      'O servo do centurião',
      'O homem da mão ressequida',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral trata da cura do cego de Betsaida, relatada em Marcos 8.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'O que aconteceu após a primeira intervenção de Jesus no cego de Betsaida?',
    options: [
      'Ele voltou imediatamente a enxergar perfeitamente',
      'Ele perdeu completamente a visão',
      'Ele ainda não enxergava perfeitamente',
      'Ele recusou a segunda intervenção',
      'Ele começou a enxergar apenas à noite',
    ],
    correctAnswer: 2,
    explanation: 'Após a primeira intervenção, o cego ainda não enxergava perfeitamente, sendo necessária uma segunda ação de Cristo.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Segundo a pastoral, por que a cura do cego aconteceu em duas etapas?',
    options: [
      'Porque Jesus não tinha poder para curá-lo de uma vez',
      'Porque o cego não possuía fé suficiente',
      'Porque os discípulos interromperam a cura',
      'Porque havia um propósito pedagógico no processo',
      'Porque a doença era naturalmente incurável',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral destaca que o processo da cura possuía uma razão pedagógica relacionada ao ensino sobre a identidade de Cristo.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Qual acontecimento é relacionado diretamente à cura progressiva do cego?',
    options: [
      'A multiplicação dos pães',
      'A confissão de Pedro sobre a identidade de Jesus',
      'A entrada triunfal em Jerusalém',
      'A transfiguração',
      'A ressurreição de Lázaro',
    ],
    correctAnswer: 1,
    explanation: 'Logo após o relato da cura, Marcos apresenta o diálogo em que Pedro confessa claramente: "Tu és o Cristo".',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'O que Pedro respondeu quando Jesus perguntou diretamente quem Ele era?',
    options: [
      'Tu és Elias',
      'Tu és João Batista',
      'Tu és o Cristo',
      'Tu és um grande profeta',
      'Tu és o Filho de Davi',
    ],
    correctAnswer: 2,
    explanation: 'Pedro respondeu com clareza: "Tu és o Cristo".',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Qual relação a pastoral estabelece entre a visão do cego e a compreensão dos discípulos?',
    options: [
      'Ambas aconteceram por meio de processos de revelação progressiva',
      'Nenhuma relação é apresentada entre os dois episódios',
      'Os discípulos compreenderam Jesus antes mesmo de conhecê-Lo',
      'A visão do cego representava apenas uma doença física',
      'Pedro só reconheceu Jesus depois da ressurreição',
    ],
    correctAnswer: 0,
    explanation: 'Assim como a visão do cego foi restaurada em etapas, a compreensão dos discípulos sobre Jesus também ocorreu progressivamente.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Qual é o propósito pedagógico central destacado pela pastoral no milagre do cego?',
    options: [
      'Mostrar que todo milagre precisa acontecer lentamente',
      'Ensinar que a fé humana determina a velocidade da cura',
      'Demonstrar que Jesus dependia dos discípulos para realizar milagres',
      'Explicar que algumas doenças não podem ser curadas imediatamente',
      'Ilustrar progressivamente a compreensão sobre quem Jesus é',
    ],
    correctAnswer: 4,
    explanation: 'A cura em etapas prepara o contraste com a confissão de Pedro, mostrando a progressão da compreensão sobre a identidade de Cristo.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Segundo a pastoral, o que a confissão "Tu és o Cristo" representa?',
    options: [
      'Uma opinião pessoal de Pedro sem importância para os discípulos',
      'A conclusão de que Jesus era apenas um grande mestre',
      'Uma resposta parcial sobre a identidade de Jesus',
      'A clareza sobre a identidade de Cristo, fundamento sobre o qual a Igreja se sustenta',
      'Uma declaração feita somente para agradar Jesus',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral apresenta a confissão de Pedro como uma declaração clara sobre a identidade de Cristo e como a rocha sobre a qual a Igreja se sustenta.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual é a principal aplicação da pastoral?',
    options: [
      'Precisamos compreender todos os acontecimentos antes de confiar em Deus',
      'Os acontecimentos da vida não possuem necessariamente um propósito',
      'Podemos confiar na soberania de Deus, pois Ele age com propósito e nos conduz à compreensão de Cristo',
      'Apenas os milagres podem revelar a vontade de Deus',
      'A fé cristã depende da capacidade humana de compreender todos os mistérios',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral conclui destacando que Deus age com propósito e que podemos confiar nEle, certos de que nada ocorre fora de Sua soberania.',
    difficulty: 'hard',
  },
];

const __distribution = [0, 0, 0, 0, 0];

for (const q of quizQuestions) {
  const idx = q.correctAnswer;
  if (idx >= 0 && idx <= 4) __distribution[idx]++;
}

const __min = Math.min(...__distribution);
const __max = Math.max(...__distribution);

if (__distribution.some((c) => c === 0)) {
  console.error('Quiz correctAnswer distribution missing one or more indices', __distribution);
} else if (__max - __min > 1) {
  console.warn('Quiz correctAnswer distribution unbalanced', __distribution);
}