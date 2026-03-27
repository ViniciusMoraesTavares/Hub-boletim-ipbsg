import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Segundo a narrativa de Marcos 1 mencionada na pastoral, qual foi a primeira ação pública de Jesus naquele sábado?',
    options: [
      'Curar a sogra de Pedro',
      'Orar de madrugada em lugar deserto',
      'Pregar na sinagoga',
      'Atender multidões à noite',
      'Viajar para outras cidades',
    ],
    correctAnswer: 2,
    explanation: 'Jesus inicia o sábado ensinando na sinagoga.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Qual evidência imediata da autoridade de Jesus é destacada ainda na sinagoga?',
    options: [
      'Multiplicação de alimentos',
      'Expulsão de um demônio',
      'Cura de cegos',
      'Ressurreição de mortos',
      'Transformação da água em vinho',
    ],
    correctAnswer: 1,
    explanation: 'Ele demonstra autoridade ao subjugar e expulsar um demônio.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Após curar a sogra de Pedro, qual foi a consequência imediata desse milagre?',
    options: [
      'Ela passou a servi-lo',
      'Ela saiu para anunciar Jesus',
      'Ela voltou a dormir',
      'Ela foi levada ao templo',
      'Ela reuniu a multidão',
    ],
    correctAnswer: 0,
    explanation: 'A cura resulta em serviço imediato.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Por que, segundo o contexto judaico mencionado, o atendimento às multidões ocorre à noite?',
    options: [
      'Porque Jesus evitava multidões durante o dia',
      'Porque era cultural atender doentes à noite',
      'Porque o sábado havia terminado ao pôr do sol',
      'Porque os discípulos estavam ocupados durante o dia',
      'Porque os doentes só podiam sair à noite',
    ],
    correctAnswer: 2,
    explanation: 'Para os judeus, o sábado termina ao pôr do sol, liberando atividades.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Qual padrão ministerial de Jesus pode ser observado na sequência: ensino, libertação, cura e oração?',
    options: [
      'Uma estratégia de autopromoção',
      'Um ciclo de dependência total da multidão',
      'Uma demonstração de poder político',
      'Um modelo de ministério centrado na vontade do Pai',
      'Uma rotina adaptada às expectativas sociais',
    ],
    correctAnswer: 3,
    explanation: 'Tudo aponta para alinhamento com o Pai, não para si mesmo.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'O fato de Jesus se retirar de madrugada para orar indica principalmente que:',
    options: [
      'Ele evitava contato com os discípulos',
      'Ele precisava recuperar energia física apenas',
      'Sua missão dependia de comunhão com o Pai',
      'Ele seguia uma tradição religiosa obrigatória',
      'Ele não queria ser encontrado',
    ],
    correctAnswer: 2,
    explanation: 'A oração revela dependência e alinhamento com Deus.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Por que Jesus não se deixa levar pela fama, segundo a pastoral?',
    options: [
      'Porque rejeitava completamente as pessoas',
      'Porque não confiava em milagres',
      'Porque temia perseguição imediata',
      'Porque preferia o anonimato',
      'Porque estava focado em sua missão',
    ],
    correctAnswer: 4,
    explanation: 'O foco de Jesus é cumprir sua missão, não buscar reconhecimento.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Teologicamente, a combinação de autoridade sobre demônios e compaixão pelos enfermos revela que:',
    options: [
      'O Reino de Deus confronta tanto o mal espiritual quanto o sofrimento humano',
      'Os milagres eram apenas sinais simbólicos',
      'Jesus priorizava mais o físico que o espiritual',
      'A libertação espiritual independe da realidade física',
      'O sofrimento humano é irrelevante no Reino',
    ],
    correctAnswer: 0,
    explanation: 'O Reino atua de forma integral: espiritual e física.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'A decisão de Jesus de ir a outros lugares após ser procurado pelas multidões indica que:',
    options: [
      'Ele rejeitava completamente aquele povo',
      'Sua missão era geograficamente restrita',
      'O Reino deveria ser anunciado além de um único centro de sucesso',
      'Ele não tinha controle sobre sua agenda',
      'Ele estava fugindo de oposição',
    ],
    correctAnswer: 2,
    explanation: 'A missão é expansiva, não concentrada em popularidade local.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Ao afirmar que Jesus voltará como Rei sublime, a pastoral aponta para qual dimensão da obra de Cristo?',
    options: [
      'Apenas sua atuação histórica passada',
      'Somente sua função como mestre moral',
      'A negação de seu sofrimento terreno',
      'A consumação escatológica do Reino de Deus',
      'A continuidade indefinida da história sem intervenção divina',
    ],
    correctAnswer: 3,
    explanation: 'Aponta para a consumação final do Reino na volta de Cristo.',
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