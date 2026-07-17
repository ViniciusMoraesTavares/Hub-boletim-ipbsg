import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Segundo a pastoral, o que significa originalmente a palavra "Corbã"?',
    options: [
      'Sacrifício pelos pecados',
      'Aquilo que traz alguém para perto de Deus',
      'Oferta para os sacerdotes',
      'Riqueza consagrada ao rei',
      'Purificação do templo',
    ],
    correctAnswer: 1,
    explanation: 'Corbã deriva da raiz hebraica qrb, que significa "aproximar-se", indicando algo consagrado a Deus.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Originalmente, quando um bem era declarado Corbã, ele:',
    options: [
      'Podia ser usado livremente pela família',
      'Era vendido para ajudar os pobres',
      'Pertencia exclusivamente ao tesouro do Templo',
      'Passava a ser administrado pelo governo',
      'Era distribuído aos sacerdotes',
    ],
    correctAnswer: 2,
    explanation: 'Um bem declarado Corbã era consagrado exclusivamente a Deus e destinado ao Templo.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Segundo a pastoral, como alguns filhos usavam o Corbã no tempo de Jesus?',
    options: [
      'Para ajudar financeiramente os pais',
      'Para aumentar suas ofertas',
      'Para cumprir uma peregrinação',
      'Para justificar que não ajudariam seus pais necessitados',
      'Para pagar impostos religiosos',
    ],
    correctAnswer: 3,
    explanation: 'Eles alegavam que seus bens eram Corbã para evitar sustentar os pais.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Qual era o propósito original do Corbã?',
    options: [
      'Aproximar-se de Deus por meio da consagração dos bens',
      'Garantir proteção financeira',
      'Evitar o pagamento de tributos',
      'Promover prestígio religioso',
      'Acumular riquezas para o Templo',
    ],
    correctAnswer: 0,
    explanation: 'O Corbã era uma expressão de gratidão e consagração dos bens ao Senhor.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Segundo a pastoral, em que o Corbã acabou se transformando?',
    options: [
      'Em um novo sacramento',
      'Em um meio de proteção patrimonial baseado no legalismo e na avareza',
      'Em uma tradição abandonada pelos judeus',
      'Em um símbolo da prosperidade divina',
      'Em uma oferta obrigatória para todos',
    ],
    correctAnswer: 1,
    explanation: 'A tradição foi distorcida para proteger interesses pessoais, anulando o propósito original.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Qual mandamento era anulado pelo uso distorcido do Corbã?',
    options: [
      'Não matarás',
      'Não furtarás',
      'Honra teu pai e tua mãe',
      'Não dirás falso testemunho',
      'Não cobiçarás',
    ],
    correctAnswer: 2,
    explanation: 'Jesus condenou essa prática porque ela anulava o quinto mandamento.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Segundo a pastoral, os cristãos devem examinar suas tradições para verificar se elas:',
    options: [
      'São antigas o suficiente',
      'São aceitas pela sociedade',
      'Agradam à maioria das pessoas',
      'Realmente aproximam de Deus ou apenas mascaram egoísmo e avareza',
      'Produzem reconhecimento religioso',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral incentiva um exame sincero das práticas religiosas à luz da Palavra de Deus.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'A crítica de Jesus ao Corbã demonstra que:',
    options: [
      'Nenhuma tradição religiosa pode substituir a obediência à Lei de Deus',
      'Toda tradição judaica era errada',
      'As ofertas ao Templo deveriam ser abolidas',
      'O quinto mandamento era menos importante que os votos',
      'O Corbã nunca teve valor espiritual',
    ],
    correctAnswer: 0,
    explanation: 'Jesus condenou o uso da tradição para invalidar um mandamento de Deus.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Segundo a pastoral, qual foi o principal problema da distorção do Corbã?',
    options: [
      'A falta de recursos para o Templo',
      'A substituição da verdadeira piedade pelo legalismo e pela avareza',
      'O excesso de ofertas religiosas',
      'A ausência de sacerdotes para administrar os bens',
      'O abandono das festas judaicas',
    ],
    correctAnswer: 1,
    explanation: 'O Corbã deixou de expressar gratidão a Deus e passou a servir ao egoísmo humano.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual é a principal aplicação da pastoral para os cristãos de hoje?',
    options: [
      'Evitar qualquer voto religioso',
      'Consagrar todos os bens ao templo',
      'Priorizar apenas as tradições antigas',
      'Jamais fazer ofertas voluntárias',
      'Examinar se nossas práticas religiosas realmente nos aproximam de Deus ou apenas justificam nossos interesses',
    ],
    correctAnswer: 4,
    explanation: 'A verdadeira piedade produz obediência a Deus e não serve de máscara para o egoísmo.',
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
