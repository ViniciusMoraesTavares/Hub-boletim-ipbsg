import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Segundo a pastoral, a oração revela principalmente:',
    options: [
      'Nossa capacidade de falar bem',
      'A compreensão que temos de Deus e de nós mesmos',
      'A quantidade de conhecimento bíblico',
      'Nossa posição na igreja',
      'Nossa força de vontade',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral ensina que a oração revela quem Deus é para nós e quem somos diante dEle.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Qual atitude da mulher estrangeira é destacada por Marcos?',
    options: [
      'Sua riqueza',
      'Sua influência',
      'Seu profundo discernimento espiritual',
      'Seu conhecimento da Lei',
      'Sua posição social',
    ],
    correctAnswer: 2,
    explanation: 'Marcos enfatiza o discernimento espiritual demonstrado pela mulher.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Ao prostrar-se diante de Jesus, a mulher demonstrou que a oração é, antes de tudo:',
    options: [
      'Um pedido de ajuda',
      'Um momento de reflexão',
      'Uma demonstração de conhecimento',
      'Um ato de adoração',
      'Uma obrigação religiosa',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral afirma que a oração começa com a adoração e o reconhecimento da grandeza de Deus.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'O que a prostração da mulher diante de Jesus revela?',
    options: [
      'O reconhecimento da grandeza de Deus e da limitação humana',
      'O desejo de chamar atenção da multidão',
      'A esperança de receber elogios',
      'O cumprimento de uma tradição judaica',
      'O medo dos discípulos',
    ],
    correctAnswer: 0,
    explanation: 'Ao se prostrar, ela reconheceu quem Cristo era e sua total dependência dEle.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Segundo a pastoral, a humildade da mulher também ficou evidente quando ela:',
    options: [
      'Aceitou a comparação das migalhas que caem da mesa',
      'Pediu ajuda aos discípulos',
      'Entrou escondida na casa',
      'Permaneceu em silêncio',
      'Voltou para sua cidade',
    ],
    correctAnswer: 1,
    explanation: 'Sua resposta sobre as migalhas demonstrou profunda humildade e confiança em Cristo.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Em contraste com a cultura atual, a pastoral afirma que a verdadeira grandeza está:',
    options: [
      'Na independência financeira',
      'Na autossuficiência',
      'Na humildade diante de Deus',
      'No reconhecimento das pessoas',
      'Na conquista do poder',
    ],
    correctAnswer: 2,
    explanation: 'A verdadeira grandeza não está na autossuficiência, mas em depender humildemente de Deus.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Segundo a pastoral, aquele que se ajoelha diante de Deus:',
    options: [
      'Nunca enfrentará dificuldades',
      'Receberá riqueza material',
      'Será admirado por todos',
      'Coloca-se em pé diante do mundo',
      'Jamais sofrerá perseguição',
    ],
    correctAnswer: 3,
    explanation: 'A humildade diante de Deus fortalece o cristão para enfrentar o mundo.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Ao chamar a oração de "termômetro da fé", a pastoral ensina que:',
    options: [
      'A oração revela a realidade da nossa vida espiritual',
      'A quantidade de orações determina a salvação',
      'Somente longas orações agradam a Deus',
      'Toda oração recebe a resposta desejada',
      'A fé depende exclusivamente da emoção',
    ],
    correctAnswer: 0,
    explanation: 'A maneira como oramos demonstra nossa compreensão de Deus e nossa confiança nEle.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'A postura da mulher siro-fenícia ensina que a oração verdadeira deve ser marcada principalmente por:',
    options: [
      'Humildade, adoração e confiança na graça de Cristo',
      'Insistência sem reverência',
      'Conhecimento intelectual apenas',
      'Autoconfiança e determinação',
      'Méritos pessoais diante de Deus',
    ],
    correctAnswer: 1,
    explanation: 'Sua atitude uniu reverência, humildade e plena confiança na graça do Senhor.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual é a principal aplicação da pastoral?',
    options: [
      'A oração é apenas um meio de apresentar pedidos',
      'O cristão deve confiar em sua própria capacidade',
      'A humildade diante de Deus conduz a uma vida de confiança em Sua graça',
      'O importante é nunca demonstrar fraqueza',
      'A grandeza espiritual depende da posição que ocupamos',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral conclui que a verdadeira grandeza está em nos curvarmos diante de Deus e confiarmos plenamente em Sua graça.',
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
