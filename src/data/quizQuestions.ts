import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual igreja é apresentada na pastoral como uma comunidade que tinha amor, fé, serviço e perseverança?',
    options: [
      'A igreja de Tiatira',
      'A igreja de Sardes',
      'A igreja de Pérgamo',
      'A igreja de Laodiceia',
      'A igreja de Filadélfia',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral apresenta a Igreja de Tiatira como uma comunidade que possuía amor, fé, serviço e perseverança, sendo reconhecida por Jesus por suas obras.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Qual era o grave problema que Jesus apontava na Igreja de Tiatira?',
    options: [
      'A igreja havia abandonado completamente a fé',
      'A igreja tolerava Jezabel e sua influência para a imoralidade e a idolatria',
      'A igreja havia deixado de realizar qualquer serviço',
      'A igreja não possuía nenhum tipo de amor',
      'A igreja havia parado de perseverar diante das dificuldades',
    ],
    correctAnswer: 1,
    explanation: 'O problema de Tiatira era tolerar Jezabel, que influenciava os servos de Deus a se envolverem com a imoralidade e a idolatria.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'O que Jesus reconhecia nas últimas obras da Igreja de Tiatira?',
    options: [
      'Que eram menores do que as primeiras',
      'Que haviam desaparecido completamente',
      'Que eram maiores do que as primeiras',
      'Que eram apenas obras realizadas por alguns líderes',
      'Que não tinham qualquer importância',
    ],
    correctAnswer: 2,
    explanation: 'Jesus reconhecia que as últimas obras de Tiatira eram maiores do que as primeiras, demonstrando crescimento em suas obras, amor, fé, serviço e perseverança.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Por que a pastoral afirma que aceitar o pecado dentro da comunidade é perigoso?',
    options: [
      'Porque o pecado pode ser tratado como algo normal, enfraquecendo a consciência e afastando a pessoa de Deus',
      'Porque qualquer pessoa que peque deve imediatamente abandonar a igreja',
      'Porque a igreja precisa ser conhecida apenas por pessoas perfeitas',
      'Porque o pecado sempre produz consequências materiais imediatas',
      'Porque a tolerância elimina automaticamente toda possibilidade de arrependimento',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral alerta que, quando o pecado não é enfrentado e passa a ser tratado como algo normal, ele enfraquece a consciência e pode afastar lentamente a pessoa do Senhor.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Segundo a pastoral, quando a tolerância pode se tornar cumplicidade?',
    options: [
      'Quando a igreja procura acolher pessoas que estão enfrentando dificuldades',
      'Quando alguém reconhece que também é pecador',
      'Quando a igreja chama o pecador ao arrependimento',
      'Quando aquilo que Deus condena deixa de ser chamado de pecado e passa a ser tratado como algo normal',
      'Quando os cristãos demonstram amor uns pelos outros',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral ensina que a tolerância se torna cumplicidade quando deixa de chamar o erro pelo nome e permite que aquilo que Deus condena seja tratado como algo normal.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'O que Jesus ordena à sua igreja diante da necessidade de abandonar o pecado?',
    options: [
      '“Permanecei em silêncio”',
      '“Arrependei-vos e esperai”',
      '“Conservai o que tendes, até que eu venha”',
      '“Abandonai toda a comunidade”',
      '“Não vos preocupeis com o pecado”',
    ],
    correctAnswer: 2,
    explanation: 'Jesus orienta aqueles que não haviam seguido o ensino de Jezabel: “Conservai o que tendes, até que eu venha”. A pastoral aplica essa ordem como um chamado à perseverança e fidelidade.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Qual promessa é apresentada na pastoral para aqueles que vencerem?',
    options: [
      'Uma vida sem dificuldades',
      'Autoridade e a estrela da manhã',
      'Riquezas materiais e reconhecimento humano',
      'Ausência completa de tentações',
      'Poder para nunca mais pecar',
    ],
    correctAnswer: 1,
    explanation: 'Aos que vencerem, Jesus promete autoridade e a estrela da manhã. A promessa aponta para a recompensa daqueles que permanecem fiéis a Cristo.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Qual é a relação apresentada pela pastoral entre pequenas concessões ao pecado e o esfriamento do amor por Deus?',
    options: [
      'Pequenas concessões são sempre insignificantes e não afetam a vida espiritual',
      'Pequenas concessões fortalecem a consciência porque permitem maior liberdade',
      'Pequenas concessões só são perigosas quando outras pessoas percebem o que aconteceu',
      'Pequenas concessões podem ser facilmente corrigidas sem necessidade de arrependimento',
      'Quando não são enfrentadas, pequenas concessões podem enfraquecer a consciência e afastar lentamente a pessoa de Deus, contribuindo para o esfriamento do amor',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral alerta que o pecado pode começar com uma concessão aparentemente pequena. Quando não é enfrentado, ele enfraquece a consciência, envolve o coração e pode levar ao afastamento de Deus e ao esfriamento do amor por ele.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Qual atitude melhor resume a orientação dada aos cristãos que não seguiram o ensino de Jezabel?',
    options: [
      'Conservar o que receberam, permanecer fiéis e perseverar até a volta de Cristo',
      'Mudar tudo ao redor antes de permanecer fiel',
      'Evitar qualquer pessoa que tenha cometido pecado',
      'Abandonar a comunidade para não ser influenciado',
      'Esperar que o pecado desapareça sozinho antes de tomar uma posição',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral destaca que talvez não possamos mudar tudo ao nosso redor, mas podemos permanecer fiéis. Jesus orienta: “Conservai o que tendes, até que eu venha”.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual afirmação melhor expressa a mensagem central da pastoral “NÃO DEIXE O AMOR ESFRIAR”?',
    options: [
      'A fidelidade cristã consiste principalmente em realizar muitas obras, independentemente da santidade',
      'A igreja deve evitar qualquer advertência contra o pecado para demonstrar amor',
      'O cristão deve preservar a verdade, não negociar sua fé, rejeitar o pecado e permanecer firme até a volta de Cristo',
      'O mais importante é adaptar a fé às mudanças da sociedade para evitar conflitos',
      'A perseverança cristã depende de nunca enfrentar dificuldades ou tentações',
    ],
    correctAnswer: 2,
    explanation: 'A mensagem central é um chamado à fidelidade. Não basta ter amor, fé, serviço e perseverança; é necessário preservar a santidade, não negociar a verdade, rejeitar o pecado e permanecer firme até a volta do Senhor.',
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
