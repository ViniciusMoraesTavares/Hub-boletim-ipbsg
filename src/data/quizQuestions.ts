import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Segundo a pastoral, o óleo utilizado na unção possui principalmente qual significado?',
    options: [
      'É um remédio milagroso',
      'É um símbolo da ação de Deus',
      'É um objeto de proteção espiritual',
      'Tem poder próprio para curar',
      'Representa prosperidade material',
    ],
    correctAnswer: 1,
    explanation: 'Na tradição reformada, o óleo é um símbolo que aponta para a ação de Deus, não um agente de poder.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Quem é apresentado como o verdadeiro agente da restauração?',
    options: [
      'O óleo consagrado',
      'Os pastores',
      'O Espírito Santo',
      'A medicina',
      'A fé humana',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral afirma que o Espírito Santo é o verdadeiro agente da restauração.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Segundo a pastoral, em quem deve repousar nossa confiança?',
    options: [
      'Nos rituais religiosos',
      'Na intensidade da nossa fé',
      'Nos símbolos da igreja',
      'Na unção com óleo',
      'Em Cristo, o Grande Médico',
    ],
    correctAnswer: 4,
    explanation: 'Nossa confiança deve estar em Cristo, e não em rituais ou objetos.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Segundo João Calvino, o poder da cura reside:',
    options: [
      'Na oração da fé e na vontade soberana de Deus',
      'Na quantidade de óleo utilizada',
      'Na autoridade exclusiva dos pastores',
      'Na tradição da igreja',
      'Na fé do enfermo apenas',
    ],
    correctAnswer: 0,
    explanation: 'Calvino ensina que o poder está na oração da fé e na vontade soberana do Senhor.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'De acordo com a pastoral, a unção com óleo deve ser realizada:',
    options: [
      'Em qualquer pessoa que desejar',
      'Exclusivamente em enfermos',
      'Em casas e objetos para proteção',
      'Antes de toda Santa Ceia',
      'Em todos os cultos dominicais',
    ],
    correctAnswer: 1,
    explanation: 'A IPB ensina que a unção é uma prática excepcional destinada apenas aos enfermos.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Quem deve ministrar a unção com óleo?',
    options: [
      'Qualquer membro da igreja',
      'Os diáconos',
      'Pastores e presbíteros',
      'Somente o pastor titular',
      'Os familiares do enfermo',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral afirma que a unção deve ser ministrada por pastores e presbíteros.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Além da unção, quais elementos devem acompanhar esse momento?',
    options: [
      'Jejum e vigílias obrigatórias',
      'Louvor e ofertas',
      'Silêncio e meditação',
      'Pregação da Palavra e oração',
      'Leitura exclusiva dos Salmos',
    ],
    correctAnswer: 3,
    explanation: 'A unção deve ser acompanhada da pregação da Palavra e da oração.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'A posição da Igreja Presbiteriana do Brasil sobre a unção com óleo pode ser resumida como:',
    options: [
      'Um rito indispensável para toda cura',
      'Uma prática simbólica, excepcional e sem caráter místico',
      'Uma tradição opcional sem qualquer fundamento bíblico',
      'Uma cerimônia reservada aos ministros ordenados em todas as ocasiões',
      'Um sacramento equivalente ao batismo',
    ],
    correctAnswer: 1,
    explanation: 'A IPB entende a unção como uma prática excepcional, discreta e simbólica, rejeitando o misticismo.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Segundo a pastoral, Deus pode conceder cura:',
    options: [
      'Somente por meios sobrenaturais',
      'Apenas quando houver unção com óleo',
      'Somente mediante oração coletiva',
      'Por meios extraordinários ou através da medicina',
      'Exclusivamente quando a fé do enfermo for suficiente',
    ],
    correctAnswer: 3,
    explanation: 'A medicina também é vista como instrumento da providência divina.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual ensino central a pastoral procura transmitir?',
    options: [
      'Objetos consagrados fortalecem a fé',
      'Todo cristão deve praticar a unção regularmente',
      'A unção possui poder espiritual próprio',
      'A cura depende principalmente da intensidade da fé',
      'A confiança do cristão deve estar na soberania de Deus e em Cristo, não em símbolos',
    ],
    correctAnswer: 4,
    explanation: 'O foco da pastoral é que a confiança esteja em Cristo e na soberania de Deus, nunca em objetos ou rituais.',
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
