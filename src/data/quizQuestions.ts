import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Para onde Jesus se retira após sair da sinagoga?',
    options: [
      'Para o templo',
      'Para a montanha',
      'Para a casa de Pedro',
      'Para o deserto',
      'Para a beira-mar',
    ],
    correctAnswer: 4,
    explanation: 'O texto diz que Jesus se retira para a beira-mar.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'O que atraía as multidões até Jesus?',
    options: [
      'Curiosidade intelectual',
      'Interesse político',
      'Fama social',
      'O que ouviam sobre suas obras',
      'Convite dos discípulos',
    ],
    correctAnswer: 3,
    explanation: 'As pessoas iam até Ele por causa do que ouviam sobre suas obras.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Quem rejeitava Jesus enquanto as multidões o buscavam?',
    options: [
      'Os discípulos',
      'As autoridades religiosas',
      'Os romanos',
      'Os pobres',
      'Os gentios',
    ],
    correctAnswer: 1,
    explanation: 'As autoridades religiosas rejeitavam Jesus.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'O fato de Jesus ir até onde o povo estava ensina que:',
    options: [
      'Precisamos nos aperfeiçoar antes de ir até Ele',
      'Ele busca apenas pessoas preparadas',
      'Devemos esconder nossas fraquezas',
      'Devemos ir a Ele como estamos',
      'Somente os justos podem se aproximar',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral ensina que devemos ir a Cristo como estamos.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Por que Jesus pede um barquinho?',
    options: [
      'Para fugir da multidão',
      'Para viajar para outra região',
      'Para ter um púlpito e ensinar',
      'Para descansar',
      'Para realizar milagres no mar',
    ],
    correctAnswer: 2,
    explanation: 'Ele queria um local adequado para ensinar.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Qual era a prioridade de Jesus segundo a pastoral?',
    options: [
      'Curar todos os doentes',
      'Ganhar reconhecimento popular',
      'Libertar politicamente o povo',
      'Realizar milagres constantemente',
      'Pregar o Reino de Deus',
    ],
    correctAnswer: 4,
    explanation: 'A prioridade de Jesus era a pregação do Reino.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Por que Jesus silencia os demônios?',
    options: [
      'Porque temia oposição',
      'Porque queria evitar confusão',
      'Porque não aceitava propaganda espiritual falsa',
      'Porque não queria ser conhecido',
      'Porque os demônios mentiam sempre',
    ],
    correctAnswer: 2,
    explanation: 'Ele deseja ser conhecido pela fé genuína e pelas Escrituras.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'O fato das multidões buscarem Jesus por suas obras revela que:',
    options: [
      'O testemunho do poder de Deus atrai os necessitados',
      'A fé nasce apenas por curiosidade',
      'Os milagres são mais importantes que a mensagem',
      'O povo buscava apenas benefícios imediatos',
      'A multidão compreendia plenamente o Reino',
    ],
    correctAnswer: 0,
    explanation: 'As obras de Cristo funcionam como testemunho que atrai os necessitados.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'A crítica implícita à religiosidade formal indica que:',
    options: [
      'A estrutura religiosa é inútil',
      'Deus rejeita qualquer forma de culto',
      'O verdadeiro encontro com Cristo vai além de ambientes formais',
      'A igreja não tem valor',
      'A fé deve ser individual apenas',
    ],
    correctAnswer: 2,
    explanation: 'Jesus sai do ambiente formal e vai até o povo, mostrando que vai além disso.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Quando a pastoral chama a examinar o que nos atrai a Jesus, o foco principal é:',
    options: [
      'Avaliar interesses superficiais',
      'Buscar apenas soluções imediatas',
      'Comparar experiências religiosas',
      'Refletir sobre motivações espirituais profundas',
      'Seguir tradições antigas',
    ],
    correctAnswer: 3,
    explanation: 'O chamado é para examinar as verdadeiras motivações do coração.',
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