import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Segundo a pastoral, sobre o que Jesus demonstra autoridade nos primeiros capítulos de Marcos?',
    options: [
      'Apenas sobre doenças',
      'Sobre palavras, espíritos, doenças, pecados e o sábado',
      'Somente sobre os discípulos',
      'Apenas sobre a natureza',
      'Somente sobre o templo',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral destaca a autoridade completa de Jesus em várias áreas.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Qual foi a intenção de Jesus em relação à Lei de Moisés?',
    options: [
      'Anulá-la completamente',
      'Substituí-la por novos mandamentos',
      'Ignorá-la',
      'Dar-lhe pleno cumprimento',
      'Adaptá-la às tradições humanas',
    ],
    correctAnswer: 3,
    explanation: 'Jesus veio cumprir plenamente a Lei, não anulá-la.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'O que os fariseus enfatizavam em relação ao sábado?',
    options: [
      'A misericórdia acima de tudo',
      'O descanso espiritual',
      'O relacionamento com Deus',
      'O ensino da Lei',
      'Uma lista de proibições',
    ],
    correctAnswer: 4,
    explanation: 'Eles focavam mais nas proibições do que na misericórdia.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Qual era o problema central da interpretação dos fariseus sobre o sábado?',
    options: [
      'Desconsideravam a Lei totalmente',
      'Priorizavam tradições acima da misericórdia e necessidade humana',
      'Ensinavam pouco sobre o sábado',
      'Negavam a existência de Deus',
      'Ignoravam o descanso físico',
    ],
    correctAnswer: 1,
    explanation: 'Eles colocavam regras acima da necessidade humana e da misericórdia.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Segundo a pastoral, o quarto mandamento possui quais dois aspectos?',
    options: [
      'Histórico e profético',
      'Espiritual e físico',
      'Moral e cerimonial',
      'Individual e coletivo',
      'Antigo e novo',
    ],
    correctAnswer: 2,
    explanation: 'O texto destaca os aspectos moral (eterno) e cerimonial (adaptável).',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Qual comparação Jesus utiliza para explicar o sábado?',
    options: [
      'O maná no deserto',
      'O templo de Salomão',
      'O sacrifício de Abraão',
      'Os pães da proposição',
      'A arca da aliança',
    ],
    correctAnswer: 3,
    explanation: 'Jesus usa o exemplo dos pães da proposição.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Qual é um dos propósitos do sábado segundo a pastoral?',
    options: [
      'Aumentar a produtividade humana',
      'Cumprir rituais obrigatórios',
      'Demonstrar superioridade espiritual',
      'Evitar qualquer atividade',
      'Proporcionar descanso e comunhão com Deus',
    ],
    correctAnswer: 4,
    explanation: 'O sábado foi dado para descanso e relacionamento com Deus.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Ao afirmar que Jesus é Senhor do sábado, isso implica que:',
    options: [
      'Ele possui autoridade sobre a própria interpretação e propósito do sábado',
      'Ele aboliu completamente o sábado',
      'Ele segue as tradições farisaicas',
      'O sábado perdeu qualquer significado',
      'O sábado é apenas simbólico',
    ],
    correctAnswer: 0,
    explanation: 'Jesus redefine o sábado com autoridade divina.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'A distinção entre aspecto moral e cerimonial do sábado implica que:',
    options: [
      'Ambos são temporários',
      'Ambos são imutáveis',
      'O cerimonial é eterno e o moral adaptável',
      'O moral é eterno e o cerimonial pode ser adaptado',
      'Nenhum deles tem aplicação atual',
    ],
    correctAnswer: 3,
    explanation: 'O moral permanece, enquanto o cerimonial pode variar.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Quando Jesus ensina que são lícitas obras de necessidade e misericórdia no sábado, Ele está:',
    options: [
      'Criando uma nova lei independente',
      'Negando a importância do descanso',
      'Reforçando uma interpretação legalista',
      'Limitando o sábado ao templo',
      'Revelando o verdadeiro propósito do mandamento',
    ],
    correctAnswer: 4,
    explanation: 'Ele mostra que o sábado deve servir ao bem e à misericórdia.',
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