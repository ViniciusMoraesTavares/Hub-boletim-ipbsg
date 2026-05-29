import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Segundo a pastoral, em qual contexto provavelmente foi escrito o Salmo mencionado?',
    options: [
      'Durante o exílio babilônico',
      'Na unificação do reino sob Davi',
      'Na construção do templo',
      'Durante a fuga de Elias',
      'Na divisão do reino de Israel',
    ],
    correctAnswer: 1,
    explanation: 'O salmo provavelmente foi escrito na unificação do reino sob Davi.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Quais são os dois lugares citados na pastoral?',
    options: [
      'Monte Sinai e Jerusalém',
      'Belém e Nazaré',
      'Hermom e Sião',
      'Jericó e Hebrom',
      'Cafarnaum e Betânia',
    ],
    correctAnswer: 2,
    explanation: 'O texto menciona o Monte Hermom e Sião.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'O que o Monte Hermom proporcionava ao norte de Israel?',
    options: [
      'Proteção militar',
      'Solo fértil para templos',
      'Autoridade política',
      'Águas e pastagens verdejantes',
      'Riquezas minerais',
    ],
    correctAnswer: 3,
    explanation: 'O Hermom abastecia a região com águas e pastagens.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Segundo a pastoral, o sul de Israel oferecia ao norte:',
    options: [
      'Alimento físico',
      'Presença de Deus e sustento espiritual',
      'Proteção contra inimigos',
      'Comércio e riqueza',
      'Expansão territorial',
    ],
    correctAnswer: 1,
    explanation: 'Jerusalém representava o centro espiritual e a presença de Deus.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'O contraste entre Hermom e Sião ensina principalmente que:',
    options: [
      'A autossuficiência humana é suficiente',
      'A união e a interdependência são princípios divinos',
      'Cada povo deve viver isoladamente',
      'O poder político é mais importante que a fé',
      'A geografia define a espiritualidade',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral destaca a interdependência como princípio criado por Deus.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Por que Deus distribuiu dons entre diferentes pessoas e grupos?',
    options: [
      'Para gerar competição saudável',
      'Para que ninguém dependesse de ninguém',
      'Para concentrar autoridade em poucos',
      'Para obrigar Seu povo a caminhar unido',
      'Para limitar o crescimento da igreja',
    ],
    correctAnswer: 3,
    explanation: 'A diversidade de dons incentiva dependência mútua e comunhão.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Segundo a pastoral, em qual ambiente o milagre se torna propício?',
    options: [
      'No isolamento espiritual',
      'Na independência individual',
      'Na partilha e reconciliação',
      'Na superioridade intelectual',
      'Na busca por reconhecimento',
    ],
    correctAnswer: 2,
    explanation: 'A comunhão e reconciliação criam um ambiente propício para a bênção de Deus.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'A afirmação de que “a autossuficiência é uma ilusão” implica que:',
    options: [
      'O ser humano foi criado para viver em dependência mútua diante de Deus',
      'Toda forma de liderança é errada',
      'A individualidade deve ser eliminada',
      'A igreja não precisa de organização',
      'Os dons espirituais possuem o mesmo papel',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral ensina que Deus nos criou para viver em comunhão e dependência mútua.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Quando a pastoral afirma que “o Senhor ordena a Sua bênção” onde há comunhão, isso demonstra que:',
    options: [
      'A unidade do povo de Deus está ligada à manifestação de Sua graça',
      'A bênção depende apenas de proximidade física',
      'Conflitos sempre deixam de existir automaticamente',
      'A comunhão elimina diferenças humanas',
      'A igreja deve ignorar a verdade para manter paz',
    ],
    correctAnswer: 0,
    explanation: 'A comunhão bíblica favorece a manifestação da bênção de Deus.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Ao incentivar a igreja a “comer juntos, lutar juntos e servir juntos”, a pastoral reforça que:',
    options: [
      'A comunhão cristã deve limitar-se ao culto público',
      'A vida cristã é essencialmente coletiva e relacional',
      'A unidade depende apenas de afinidade pessoal',
      'O serviço cristão deve ser individualizado',
      'A convivência é secundária na vida da igreja',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral enfatiza uma vivência comunitária real e prática.',
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
