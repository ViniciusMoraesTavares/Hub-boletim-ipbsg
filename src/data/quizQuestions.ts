import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Por quantos bitcoins Laszlo Hanyecz comprou duas pizzas em 2010?',
    options: [
      '100 bitcoins',
      '1.000 bitcoins',
      '5.000 bitcoins',
      '10.000 bitcoins',
      '50.000 bitcoins',
    ],
    correctAnswer: 3,
    explanation: 'Laszlo Hanyecz utilizou 10.000 bitcoins para comprar duas pizzas.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'O que aconteceu com os espíritos imundos após saírem do homem possesso?',
    options: [
      'Desapareceram imediatamente',
      'Entraram nos discípulos',
      'Entraram nos porcos',
      'Foram presos pelos habitantes',
      'Voltaram para Jerusalém',
    ],
    correctAnswer: 2,
    explanation: 'Os espíritos imundos entraram nos porcos, que correram para o mar.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Como os moradores reagiram ao ver o milagre realizado por Jesus?',
    options: [
      'Pediram para seguir Jesus',
      'Celebraram o milagre',
      'Ofereceram presentes a Jesus',
      'Convidaram Jesus para permanecer',
      'Pediram que Jesus fosse embora',
    ],
    correctAnswer: 4,
    explanation: 'Eles suplicaram que Jesus deixasse aquela região.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'O que impressionou os moradores quando encontraram o antigo endemoninhado?',
    options: [
      'Ele havia se tornado rico',
      'Ele estava são e restaurado',
      'Ele havia deixado a cidade',
      'Ele estava pregando no templo',
      'Ele estava cercado pelos discípulos',
    ],
    correctAnswer: 1,
    explanation: 'O homem que antes estava possesso agora estava em perfeito estado.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Segundo a pastoral, por que os moradores rejeitaram Jesus?',
    options: [
      'Porque não acreditaram no milagre',
      'Porque tinham medo dos discípulos',
      'Porque Jesus confrontou os líderes religiosos',
      'Porque valorizaram mais os prejuízos materiais do que Sua presença',
      'Porque não compreenderam Sua língua',
    ],
    correctAnswer: 3,
    explanation: 'Eles priorizaram a perda dos porcos em vez do valor da presença de Cristo.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Qual comparação principal a pastoral faz entre os bitcoins e os porcos?',
    options: [
      'Ambos representam investimentos financeiros',
      'Ambos mostram o valor da tecnologia',
      'Ambos ilustram a troca de algo muito valioso por algo passageiro',
      'Ambos demonstram a importância da economia',
      'Ambos representam prosperidade material',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral usa os dois exemplos para ilustrar escolhas de curto prazo em vez de algo muito mais valioso.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Qual lição central a pastoral apresenta sobre as escolhas humanas?',
    options: [
      'O dinheiro é sempre um problema',
      'Devemos evitar qualquer prejuízo financeiro',
      'O sucesso depende de boas oportunidades',
      'A riqueza material é incompatível com a fé',
      'Muitas pessoas trocam bênçãos eternas por prazeres temporários',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral alerta para o perigo de valorizar o temporário acima do eterno.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Ao pedir que Jesus se retirasse, os gerasenos demonstraram que:',
    options: [
      'Preferiram seus interesses materiais à presença transformadora de Cristo',
      'Estavam preocupados apenas com a segurança da cidade',
      'Desejavam mais tempo para refletir',
      'Não haviam testemunhado nenhum milagre',
      'Estavam obedecendo à Lei de Moisés',
    ],
    correctAnswer: 0,
    explanation: 'Eles rejeitaram Cristo por valorizarem mais seus bens materiais.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'A comparação com os 10.000 bitcoins destaca principalmente que:',
    options: [
      'Toda decisão financeira é irreversível',
      'O valor real de algo nem sempre é reconhecido no momento da escolha',
      'Criptomoedas são investimentos seguros',
      'Devemos evitar gastos supérfluos',
      'A riqueza garante felicidade',
    ],
    correctAnswer: 1,
    explanation: 'Laszlo não percebia o valor futuro dos bitcoins, assim como muitos não percebem o valor de Cristo.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual é a aplicação espiritual mais profunda da pastoral?',
    options: [
      'Devemos investir melhor nosso dinheiro',
      'A prosperidade financeira é sinal da bênção divina',
      'Os milagres são mais importantes que a salvação',
      'A presença de Cristo vale infinitamente mais do que qualquer bem temporal',
      'Todo prejuízo material é consequência do pecado',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral enfatiza que nenhum bem terreno se compara ao valor eterno de Cristo.',
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
