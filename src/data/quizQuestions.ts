import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Em Cafarnaum, como Jesus é descrito ao ensinar, segundo a pastoral?',
    options: ['Como um escriba comum', 'Como o próprio Autor da Palavra', 'Como um aluno aplicado', 'Como um líder político', 'Como um profeta hesitante'],
    correctAnswer: 1,
    explanation: 'A pastoral afirma que Jesus não apenas citava a Lei; Ele falava como o próprio Autor da Palavra.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Que reação geral houve diante do ensino e autoridade de Jesus?',
    options: ['Indiferença', 'Silêncio desconfortável', 'Hostilidade pública', 'Espanto e temor reconhecendo algo divino', 'Desconfiança teológica'],
    correctAnswer: 3,
    explanation: 'O texto diz que o espanto foi geral, um temor que reconhecia ali algo divino e novo.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Segundo a pastoral, o que Jesus demonstra ao expulsar o demônio?',
    options: ['Empatia humana elevada', 'Técnicas de retórica', 'Apoio institucional', 'Dependência dos escribas', 'Domínio absoluto e autoridade sobre as trevas'],
    correctAnswer: 4,
    explanation: 'A expulsão com uma ordem mostra Seu domínio absoluto sobre as obras do diabo.',
    difficulty: 'easy',
  },
  // ---- Médias ----
  {
    id: 4,
    question: 'Em que o ensino de Jesus difere do dos escribas, de acordo com a pastoral?',
    options: [
      'Ensina como quem tem autoridade própria',
      'Fala com a mesma autoridade dos escribas',
      'Cita apenas tradições rabínicas',
      'Baseia-se em consenso popular',
      'Evita confrontos espirituais',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral enfatiza que Jesus fala como o Autor, com autoridade própria e singular.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'O que a afirmação bíblica “para isso se manifestou o Filho de Deus” indica na pastoral?',
    options: [
      'Neutralidade diante do mal',
      'Limites no alcance do poder de Cristo',
      'Missão de destruir as obras do diabo',
      'Foco apenas moralizante',
      'Ênfase exclusiva no ensino sem prática',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral cita 1Jo 3:8: Cristo veio para destruir as obras do diabo.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Qual é a aplicação pastoral diante de lutas e “casos difíceis”?',
    options: [
      'Admitir que há inimigos invencíveis',
      'Desistir da oração',
      'Ignorar a realidade espiritual',
      'Descansar na soberania de Jesus e confiar em Sua vitória',
      'Apelar apenas à tradição humana',
    ],
    correctAnswer: 3,
    explanation: 'A mesma autoridade que silenciou o mal nos convida a descansar em Sua soberania hoje.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Qual deve ser nossa resposta ao poder e autoridade de Jesus?',
    options: [
      'Apenas espanto',
      'Debate interminável',
      'Negligência prática',
      'Apenas admiração estética',
      'Entrega total ao Senhor',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral conclama à entrega total Àquele que tem toda a autoridade.',
    difficulty: 'medium',
  },
  // ---- Difíceis ----
  {
    id: 8,
    question: 'Teologicamente, o que ressalta a diferença entre “ensino” e “autoridade” de Jesus?',
    options: [
      'Autoridade derivada de tradições humanas',
      'Autoridade exclusivamente institucional',
      'Autoridade intrínseca como Verbo encarnado',
      'Autoridade meramente pedagógica',
      'Autoridade baseada em milagres sem conteúdo',
    ],
    correctAnswer: 2,
    explanation: 'Jesus fala como o Autor da Palavra, revelando autoridade intrínseca do Verbo encarnado.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Qual o sinal prático do Reino na narrativa: ensino ou expulsão?',
    options: [
      'Expulsão do demônio com uma ordem',
      'Apenas ensino admirável',
      'Debate sem ação',
      'Tradição sem confronto',
      'Silêncio institucional',
    ],
    correctAnswer: 0,
    explanation: 'A autoridade de Jesus se manifesta no ensino e na ação: Ele expulsa o demônio com uma só ordem.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual síntese pastoral para nossa vida diante da autoridade de Cristo?',
    options: [
      'Temor sem fé',
      'Entrega e confiança na vitória de Cristo',
      'Dependência dos escribas',
      'Ceticismo espiritual',
      'Acomodação cultural',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral conclui: não apenas espanto, mas entrega total e confiança na soberania de Jesus.',
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
