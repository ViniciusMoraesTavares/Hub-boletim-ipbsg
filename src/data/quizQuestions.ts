import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Quais exemplos de fé são destacados em Marcos 5 pela pastoral?',
    options: [
      'Pedro e André',
      'Jairo e a mulher que sofria com hemorragia',
      'Herodes e Herodias',
      'João Batista e Tiago',
      'Os nazarenos e os discípulos',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral apresenta Jairo e a mulher que sofria com hemorragia como exemplos de fé em Marcos 5.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Qual grupo demonstrou incredulidade por causa da familiaridade com Jesus?',
    options: [
      'Os fariseus',
      'Os discípulos',
      'Os nazarenos',
      'Os romanos',
      'Os samaritanos',
    ],
    correctAnswer: 2,
    explanation: 'Os nazarenos conviviam com Jesus e, por causa da familiaridade, não reconheceram plenamente quem Ele era.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Quem odiava João Batista por causa de sua mensagem?',
    options: [
      'Herodias',
      'Maria Madalena',
      'A mulher hemorrágica',
      'Marta',
      'Salomé',
    ],
    correctAnswer: 0,
    explanation: 'Herodias odiava João Batista porque ele confrontava seu pecado.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Segundo a pastoral, a incredulidade dos nazarenos aconteceu principalmente porque:',
    options: [
      'Nunca haviam ouvido falar de Jesus',
      'Tinham medo dos milagres',
      'Eram perseguidos pelos romanos',
      'A convivência comum com Jesus tornou tudo normal demais',
      'Não conheciam as Escrituras',
    ],
    correctAnswer: 3,
    explanation: 'A familiaridade fez com que os nazarenos se acostumassem com Jesus e deixassem de reconhecer Sua grandeza.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Por que Herodias rejeitava a mensagem de João Batista?',
    options: [
      'Porque João não era sacerdote',
      'Porque ela preferia eliminar quem a confrontava a abandonar seu pecado',
      'Porque ela não conhecia a Lei de Deus',
      'Porque João trabalhava para Roma',
      'Porque Herodes proibiu que ela o ouvisse',
    ],
    correctAnswer: 1,
    explanation: 'Herodias rejeitava João porque sua mensagem confrontava seu pecado, e ela não queria mudar.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Qual atitude de Herodes revela sua incredulidade por acomodação?',
    options: [
      'Ele não sabia quem era João Batista',
      'Ele expulsou João de sua cidade',
      'Ele prendeu João para agradar Herodias, mesmo reconhecendo que ele era justo',
      'Ele deixou de ouvir João completamente',
      'Ele decidiu seguir Jesus imediatamente',
    ],
    correctAnswer: 2,
    explanation: 'Herodes reconhecia que João era justo, mas o manteve preso para não desagradar Herodias.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Segundo a pastoral, qual comportamento pode demonstrar acomodação espiritual?',
    options: [
      'Buscar a Deus em oração',
      'Reconhecer que precisa mudar, mas não tomar uma decisão',
      'Estudar a Bíblia diariamente',
      'Servir à igreja com alegria',
      'Pedir perdão pelos pecados',
    ],
    correctAnswer: 1,
    explanation: 'A acomodação acontece quando alguém reconhece a verdade, mas não age de acordo com ela.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'A incredulidade pela familiaridade ensina que:',
    options: [
      'A convivência com a igreja sempre produz fé verdadeira',
      'Conhecer os ritos religiosos é suficiente para conhecer a Deus',
      'A rotina religiosa pode substituir uma comunhão real com Deus',
      'A fé depende apenas de experiências emocionais',
      'A igreja deve abandonar suas práticas tradicionais',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral alerta que a rotina religiosa pode fazer com que alguém se acostume com as coisas de Deus sem viver uma comunhão verdadeira com Ele.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'A incredulidade por negação, exemplificada por Herodias, revela que:',
    options: [
      'Muitas pessoas rejeitam a verdade porque ela confronta pecados que não querem abandonar',
      'Toda pessoa que comete pecado deixa de acreditar em Deus',
      'A incredulidade é sempre resultado de falta de informação',
      'A verdade de Deus deve ser evitada para não causar conflitos',
      'O pecado não interfere nas decisões espirituais',
    ],
    correctAnswer: 0,
    explanation: 'Herodias rejeitou João porque sua mensagem confrontava diretamente seu pecado.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual é o alerta principal da pastoral sobre as diferentes faces da incredulidade?',
    options: [
      'A incredulidade só acontece em pessoas que nunca frequentam a igreja',
      'A incredulidade pode se manifestar pela familiaridade, negação ou acomodação',
      'A incredulidade desaparece automaticamente com o tempo',
      'A incredulidade está ligada apenas à falta de conhecimento bíblico',
      'A incredulidade não afeta quem reconhece seus erros',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral mostra que a incredulidade pode aparecer de diferentes formas e exige vigilância do coração.',
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
