import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual igreja é apresentada na pastoral como tendo nome de que vivia, mas estando morta?',
    options: [
      'A igreja de Sardes',
      'A igreja de Filadélfia',
      'A igreja de Tiatira',
      'A igreja de Pérgamo',
      'A igreja de Esmirna',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral apresenta a igreja de Sardes, à qual Jesus declarou: “Tens nome de que vives, mas estás morto”.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Como Sardes era vista aos olhos das pessoas?',
    options: [
      'Como uma igreja pequena e sem influência',
      'Como uma igreja viva e aparentemente cheia de vitalidade',
      'Como uma igreja completamente perseguida',
      'Como uma igreja sem qualquer reputação',
      'Como uma igreja conhecida apenas por sua pobreza',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral afirma que Sardes possuía reputação e aparência de vitalidade. Aos olhos das pessoas, parecia viva, mas Cristo enxergava uma realidade diferente.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'O que Jesus ordenou à igreja de Sardes diante de sua condição espiritual?',
    options: [
      'Que abandonasse a cidade',
      'Que procurasse construir uma nova reputação',
      'Que fosse vigilante e fortalecesse o que restava',
      'Que aumentasse o número de seus membros',
      'Que deixasse de realizar suas obras',
    ],
    correctAnswer: 2,
    explanation: 'Jesus ordenou: “Sê vigilante e fortalece o que resta”. A pastoral destaca que ainda havia algo que poderia ser restaurado.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Qual perigo espiritual a pastoral destaca ao falar sobre a aparência religiosa?',
    options: [
      'A pessoa pode deixar de frequentar os cultos por completo',
      'A igreja pode perder sua influência na sociedade',
      'A pessoa pode deixar de estudar a Bíblia por falta de tempo',
      'A pessoa pode manter uma boa imagem religiosa enquanto permanece distante de Deus',
      'A igreja pode se tornar pequena demais para realizar sua missão',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral alerta que é possível manter uma boa imagem religiosa e, ao mesmo tempo, estar distante de Deus. Aparência externa não substitui uma vida espiritual verdadeira.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Segundo a pastoral, o que Deus realmente procura em vez de uma aparência religiosa?',
    options: [
      'Verdade, comunhão e um coração comprometido com sua Palavra',
      'Grande número de membros e reconhecimento público',
      'Prestígio, influência e boa reputação',
      'Muitas atividades e uma agenda cheia',
      'Uma igreja conhecida por sua aparência de vitalidade',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral ensina que o Senhor não se impressiona com aquilo que mostramos aos outros. Ele procura verdade, comunhão e um coração comprometido com sua Palavra.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'O que a pastoral ensina sobre a possibilidade de restauração para quem está espiritualmente acomodado?',
    options: [
      'Que depois de uma queda espiritual não existe possibilidade de retorno',
      'Que enquanto há vida existe oportunidade de arrependimento e recomeço',
      'Que somente líderes podem restaurar alguém espiritualmente',
      'Que a restauração depende primeiro de recuperar uma boa reputação',
      'Que é necessário abandonar a igreja para começar novamente',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral apresenta uma mensagem de esperança: enquanto há vida, existe oportunidade de arrependimento e recomeço. Jesus ainda chamava Sardes a despertar.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'O que a existência de pessoas fiéis dentro da igreja de Sardes demonstra?',
    options: [
      'Que todos os membros da igreja estavam espiritualmente fortes',
      'Que a maioria sempre deve ser seguida para evitar conflitos',
      'Que não precisamos seguir a maioria para permanecer de pé diante de Deus',
      'Que os fiéis não enfrentavam nenhuma dificuldade',
      'Que a situação espiritual da igreja era perfeita',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral destaca que havia em Sardes algumas pessoas que não haviam contaminado suas vestes. Isso mostra que não precisamos seguir a maioria para permanecer fiéis a Deus.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Qual contraste central a pastoral apresenta entre a aparência de Sardes e sua verdadeira condição?',
    options: [
      'Sardes era uma igreja pequena, mas possuía muitos recursos',
      'Sardes era perseguida pelos homens, mas elogiada por Cristo',
      'Sardes não realizava nenhuma obra, mas tinha muitos membros',
      'Sardes parecia forte espiritualmente diante das pessoas, mas Cristo conhecia sua necessidade de despertar',
      'Sardes era uma igreja pobre que desejava se tornar rica',
    ],
    correctAnswer: 3,
    explanation: 'O contraste central está entre a aparência e a realidade: Sardes possuía reputação de estar viva, mas Cristo, que conhece o coração, sabia que ela precisava despertar.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Qual sequência de atitudes é apresentada pela pastoral como necessária para um verdadeiro recomeço espiritual?',
    options: [
      'Despertar, lembrar o que recebemos, guardar a Palavra e voltar a praticar aquilo que agrada a Deus',
      'Aumentar as atividades, conquistar reconhecimento e recuperar a reputação',
      'Abandonar a comunidade, começar novamente e evitar qualquer dificuldade',
      'Seguir a maioria, preservar a aparência e evitar questionamentos',
      'Buscar influência, aumentar os recursos e demonstrar uma imagem de vitalidade',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral chama a despertar, lembrar o que recebemos, guardar a Palavra e voltar a praticar aquilo que agrada a Deus. O recomeço passa pelo arrependimento e pela obediência.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual afirmação melhor resume a mensagem central da pastoral “QUANDO A APARÊNCIA ESCONDE A REALIDADE”?',
    options: [
      'A aparência religiosa é suficiente quando a pessoa mantém boas obras diante das pessoas',
      'Uma igreja deve priorizar sua reputação para continuar sendo respeitada pela sociedade',
      'A vida espiritual depende principalmente da quantidade de atividades realizadas pela igreja',
      'Seguir a maioria é a maneira mais segura de permanecer firme na fé',
      'Cristo conhece nossa verdadeira condição; por isso, somos chamados a despertar, abandonar a acomodação, guardar a Palavra e perseverar em uma fé verdadeira',
    ],
    correctAnswer: 4,
    explanation: 'A mensagem central da pastoral é que Cristo conhece a realidade do nosso coração. Por isso, não devemos viver apenas de aparência, mas despertar, abandonar a acomodação, guardar a Palavra e buscar uma fé verdadeira e perseverante.',
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
  console.error(
    'Quiz correctAnswer distribution missing one or more indices',
    __distribution,
  );
} else if (__max - __min > 1) {
  console.warn(
    'Quiz correctAnswer distribution unbalanced',
    __distribution,
  );
}