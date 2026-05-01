import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Quantos discípulos Jesus escolheu como mais próximos?',
    options: [
      'Sete',
      'Dez',
      'Doze',
      'Quinze',
      'Vinte',
    ],
    correctAnswer: 2,
    explanation: 'Jesus escolheu doze discípulos mais próximos.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Segundo Marcos, quem Jesus chamou?',
    options: [
      'Os mais sábios',
      'Os mais ricos',
      'Os mais influentes',
      'Os que Ele mesmo quis',
      'Os mais religiosos',
    ],
    correctAnswer: 3,
    explanation: 'O texto destaca que Ele chamou os que Ele mesmo quis.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'O que os discípulos fizeram ao serem chamados?',
    options: [
      'Pensaram por alguns dias',
      'Negociaram condições',
      'Ignoraram o chamado',
      'Seguiram parcialmente',
      'Deixaram tudo e O seguiram',
    ],
    correctAnswer: 4,
    explanation: 'Eles responderam prontamente, deixando tudo.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'O chamado de Cristo ser soberano significa que:',
    options: [
      'Depende do esforço humano',
      'É baseado em boas obras',
      'Jesus escolhe segundo Sua vontade',
      'Todos escolhem a si mesmos',
      'Depende da igreja',
    ],
    correctAnswer: 2,
    explanation: 'A soberania indica que a escolha parte da vontade de Cristo.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Por que o chamado é considerado gracioso?',
    options: [
      'Porque todos merecem',
      'Porque depende da inteligência',
      'Porque é conquistado com esforço',
      'Porque é baseado em tradição',
      'Porque não depende do mérito humano',
    ],
    correctAnswer: 4,
    explanation: 'O chamado não se baseia no mérito, mas na graça.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'O apelido "filhos do trovão" revela:',
    options: [
      'Autoridade espiritual',
      'Grande sabedoria',
      'Temperamento forte',
      'Capacidade de liderança',
      'Origem familiar',
    ],
    correctAnswer: 2,
    explanation: 'O apelido indica um temperamento impulsivo.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'A presença de Judas na lista dos discípulos mostra que:',
    options: [
      'Jesus errou na escolha',
      'Todos eram perfeitos',
      'O chamado depende do caráter inicial',
      'Nem todos perseveram',
      'A graça não depende da perfeição humana',
    ],
    correctAnswer: 4,
    explanation: 'Mostra que o chamado não se baseia em perfeição.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'O caráter transformador do chamado significa que:',
    options: [
      'Deus escolhe apenas os já preparados',
      'A mudança acontece antes do chamado',
      'O discipulado não exige crescimento',
      'Cristo capacita ao longo do processo',
      'A transformação é automática',
    ],
    correctAnswer: 3,
    explanation: 'Os discípulos foram transformados ao longo do tempo.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'A ação do Espírito Santo no processo indica que:',
    options: [
      'O esforço humano é suficiente',
      'O discipulado termina com Jesus',
      'A capacitação vem de Deus',
      'A igreja substitui o Espírito',
      'O chamado é temporário',
    ],
    correctAnswer: 2,
    explanation: 'A capacitação para a obra vem do Espírito Santo.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Responder ao chamado com prontidão implica:',
    options: [
      'Esperar condições ideais',
      'Buscar reconhecimento',
      'Agir com humildade e disposição',
      'Depender de outros',
      'Evitar sacrifícios',
    ],
    correctAnswer: 2,
    explanation: 'A resposta correta é com humildade e prontidão.',
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