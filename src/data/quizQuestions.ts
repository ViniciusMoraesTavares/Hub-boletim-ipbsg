import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual igreja é apresentada na pastoral como vivendo em uma cidade marcada pela idolatria e fortes influências do pecado?',
    options: [
      'A igreja de Esmirna',
      'A igreja de Pérgamo',
      'A igreja de Éfeso',
      'A igreja de Sardes',
      'A igreja de Filadélfia',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral apresenta a igreja de Pérgamo, localizada em uma cidade marcada pela idolatria e por fortes influências do pecado.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'O que representa a espada afiada de dois gumes apresentada por Jesus?',
    options: [
      'A força dos exércitos de Deus',
      'O julgamento dos reis da terra',
      'A autoridade dos anjos',
      'A Palavra de Deus, que discerne e separa o que pertence ao Senhor do que pertence ao mundo',
      'A perseguição sofrida pelos cristãos',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral apresenta a espada afiada de dois gumes como símbolo da Palavra de Deus, que penetra profundamente, discerne o coração e faz separação entre aquilo que pertence ao Senhor e aquilo que pertence ao mundo.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Qual é a principal advertência da pastoral para quem tenta servir a dois senhores?',
    options: [
      'Que acaba não desfrutando plenamente de nenhum deles',
      'Que sempre será perseguido pelos dois lados',
      'Que perderá imediatamente todos os seus bens',
      'Que deixará de frequentar a igreja',
      'Que não poderá mais conhecer a verdade',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral afirma que quem tenta servir a dois senhores acaba não desfrutando plenamente de nenhum deles. A vida cristã exige uma decisão de fidelidade ao Senhor.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Segundo a pastoral, como o diabo pode começar a afastar uma pessoa do Senhor?',
    options: [
      'Por meio de grandes acontecimentos que acontecem repentinamente',
      'Impedindo diretamente a pessoa de frequentar a igreja',
      'Por meio de pequenas concessões que parecem insignificantes',
      'Retirando imediatamente todas as bênçãos materiais',
      'Fazendo com que a pessoa abandone toda leitura da Bíblia',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral alerta que o diabo é astuto e pode começar com pequenas concessões, acompanhadas de pensamentos como “não tem nada a ver”, “todo mundo faz” ou “não existe outra opção”.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'O que a pastoral ensina sobre conhecer a verdade e declarar fé em Deus?',
    options: [
      'Que isso é suficiente para demonstrar uma vida cristã fiel',
      'Que isso não basta; é preciso viver em obediência',
      'Que isso elimina automaticamente todas as tentações',
      'Que isso torna desnecessário o arrependimento',
      'Que isso garante que a pessoa nunca cometerá pecados',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral ensina que conhecer a verdade e declarar fé em Deus não basta. A verdadeira fé deve produzir uma vida de obediência ao Senhor.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Qual ordem de Jesus é destacada na pastoral diante do pecado e das concessões?',
    options: [
      '“Não temas”',
      '“Permanece em silêncio”',
      '“Foge para outro lugar”',
      '“Arrepende-te!”',
      '“Escolhe o caminho mais fácil”',
    ],
    correctAnswer: 3,
    explanation: 'Diante da necessidade de abandonar o pecado e voltar à fidelidade, Jesus ordena: “Arrepende-te!”. A pastoral apresenta o arrependimento como uma resposta necessária ao chamado de Cristo.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'O que Jesus promete àquele que perseverar fielmente?',
    options: [
      'O maná escondido e a pedrinha branca',
      'Riquezas e ausência de dificuldades',
      'Autoridade sobre todos os povos',
      'Uma vida sem tentações',
      'Libertação de todas as consequências do pecado',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral afirma que aquele que perseverar receberá o maná escondido e a pedrinha branca, apresentados como sinais da comunhão com Cristo.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Por que a pastoral afirma que aquilo que parece pequeno pode ser perigoso para a vida espiritual?',
    options: [
      'Porque todo pequeno erro produz imediatamente uma grande consequência',
      'Porque pequenas dificuldades sempre levam à perseguição',
      'Porque qualquer erro torna impossível voltar para Deus',
      'Porque pequenas concessões são mais difíceis de identificar do que grandes pecados',
      'Porque aquilo que parece pequeno pode envolver o coração e afastar lentamente a pessoa do Senhor',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral alerta que pequenas concessões podem parecer insignificantes, mas envolver o coração e afastar lentamente a pessoa do Senhor. Por isso, o cristão deve estar atento e não tratar o pecado como algo inofensivo.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Qual atitude a pastoral apresenta como necessária para quem deseja permanecer fiel a Cristo?',
    options: [
      'Evitar qualquer contato com pessoas que pensam diferente',
      'Confiar apenas na própria força para resistir ao pecado',
      'Escolher hoje a quem servirá, abandonar aquilo que o separa de Deus e permanecer fiel',
      'Esperar que as circunstâncias mudem antes de tomar uma decisão',
      'Concentrar-se apenas em conhecer mais informações sobre a fé',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral chama o cristão a tomar uma posição: escolher a quem servirá, abrir mão de tudo o que o separa de Deus e permanecer fiel, mesmo quando isso for difícil.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual síntese melhor expressa a mensagem central da pastoral “Saia de Cima do Muro”?',
    options: [
      'A vida cristã consiste principalmente em evitar conflitos e preservar a própria tranquilidade',
      'O cristão deve permanecer próximo da igreja, mesmo que continue praticando aquilo que desagrada a Deus',
      'A fidelidade a Cristo depende principalmente da capacidade humana de resistir às tentações',
      'Não é possível permanecer dividido entre Cristo e o pecado; é necessário arrepender-se, abandonar as concessões e permanecer fiel ao Senhor',
      'A melhor maneira de lidar com o pecado é esperar até que ele deixe de parecer atraente',
    ],
    correctAnswer: 3,
    explanation: 'A mensagem central da pastoral é um chamado à decisão e à fidelidade. Não é possível permanecer em cima do muro entre Cristo e o pecado. Jesus chama ao arrependimento, à obediência e à perseverança.',
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
  console.error(
    'Quiz correctAnswer distribution missing one or more indices',
    __distribution,
  );
} else if (__max - __min > 1) {
  console.warn(
    'Quiz correctAnswer distribution unbalanced',
    __distribution,
  );
}
