import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Segundo a pastoral, quem é o Pastor da nossa alma?',
    options: [
      'Moisés',
      'Davi',
      'Jesus Cristo',
      'O profeta Samuel',
      'Abraão',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral apresenta Cristo como o Bom Pastor que cuida de Seu povo.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'O que significa a expressão "O Senhor é o meu pastor"?',
    options: [
      'Que Deus cuida apenas do povo de Israel',
      'Que Deus é apenas o Pastor do universo',
      'Que cada pessoa deve cuidar de si mesma',
      'Que Deus mantém um relacionamento pessoal com Seu povo',
      'Que somente os pastores da igreja representam Deus',
    ],
    correctAnswer: 3,
    explanation: 'O pronome "meu" destaca um relacionamento pessoal e íntimo com Deus.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Segundo a pastoral, a expressão "nada me faltará" significa:',
    options: [
      'Promessa de riqueza material',
      'Garantia de uma vida sem dificuldades',
      'Promessa de suficiência na caminhada com Deus',
      'Ausência de sofrimento físico',
      'Prosperidade financeira para todos os cristãos',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral ensina que a promessa é de suficiência, e não de luxo ou riqueza.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'O que representam os "pastos verdejantes" e as "águas de descanso"?',
    options: [
      'A restauração e o cuidado oferecidos por Deus',
      'A prosperidade econômica de Israel',
      'A beleza da criação apenas',
      'O descanso após a aposentadoria',
      'A ausência completa de problemas',
    ],
    correctAnswer: 0,
    explanation: 'Essas imagens simbolizam o cuidado, a provisão e a restauração que Deus concede ao Seu povo.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Segundo João 10:11, citado na pastoral, o Bom Pastor:',
    options: [
      'Ensina apenas por parábolas',
      'Dá a vida pelas ovelhas',
      'Conduz somente os discípulos',
      'Julga primeiro e cuida depois',
      'Protege apenas quem nunca erra',
    ],
    correctAnswer: 1,
    explanation: 'Jesus declara: "Eu sou o bom Pastor. O bom Pastor dá a vida pelas ovelhas".',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Segundo a pastoral, mesmo diante do vale da sombra da morte devemos:',
    options: [
      'Confiar apenas em nossa experiência',
      'Evitar qualquer dificuldade',
      'Caminhar seguros sob a direção do Senhor',
      'Esperar que os problemas desapareçam sozinhos',
      'Buscar segurança apenas nos recursos humanos',
    ],
    correctAnswer: 2,
    explanation: 'Quem é guiado pelo Senhor pode caminhar com segurança mesmo nas maiores dificuldades.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Qual convite a pastoral faz ao leitor?',
    options: [
      'Confiar somente em sua própria força',
      'Planejar melhor o futuro',
      'Evitar qualquer sofrimento',
      'Permitir que Deus guie, alimente e cure sua vida',
      'Buscar apenas estabilidade financeira',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral incentiva a entregar a vida à direção do Senhor, confiando em Seu cuidado.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Ao afirmar que Deus deu Seu Filho unigênito, a pastoral enfatiza que:',
    options: [
      'O cuidado de Deus foi demonstrado pelo maior sacrifício possível',
      'A salvação depende das boas obras',
      'O sofrimento deixa de existir para o cristão',
      'Todo cristão receberá prosperidade material',
      'O amor de Deus depende da fidelidade humana',
    ],
    correctAnswer: 0,
    explanation: 'Se Deus entregou Seu próprio Filho, podemos confiar plenamente em Seu cuidado e direção.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'A metáfora do pastor ensina principalmente que:',
    options: [
      'A vida cristã elimina todas as dificuldades',
      'Deus mantém um relacionamento próximo, cuidadoso e constante com Seu povo',
      'Os cristãos nunca enfrentarão o vale da sombra da morte',
      'O Salmo 23 trata apenas do povo de Israel',
      'O cuidado de Deus depende do mérito humano',
    ],
    correctAnswer: 1,
    explanation: 'O pastor representa a proximidade, a proteção e o cuidado constante de Deus para com Suas ovelhas.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual é a principal mensagem da pastoral?',
    options: [
      'A vida cristã será sempre livre de sofrimento',
      'O Salmo 23 promete prosperidade financeira',
      'O cristão deve confiar no cuidado, na direção e na proteção do Senhor em todas as circunstâncias',
      'O importante é nunca passar por dificuldades',
      'A segurança do cristão está em seus próprios recursos',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral conclui que Cristo, o Bom Pastor, conduz, protege e restaura Seu povo em qualquer circunstância.',
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
