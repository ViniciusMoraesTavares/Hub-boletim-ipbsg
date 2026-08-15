import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Segundo a pastoral, quem é a autoridade máxima da Igreja?',
    options: [
      'Os presbíteros',
      'Os diáconos',
      'Os apóstolos',
      'Jesus Cristo',
      'A assembleia da igreja',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral afirma que a autoridade máxima da Igreja não está nos homens, mas em Jesus Cristo, o Cabeça da Igreja.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Qual texto bíblico é apresentado como fundamento da primazia de Cristo sobre a Igreja?',
    options: [
      'Colossenses 1:18',
      'João 3:16',
      'Salmo 23:1',
      'Mateus 5:3',
      'Romanos 8:28',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral cita Colossenses 1:18 para destacar que Cristo é a cabeça do corpo, que é a Igreja.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Qual capítulo do livro de Atos é citado como exemplo do modelo conciliar?',
    options: [
      'Atos 2',
      'Atos 10',
      'Atos 12',
      'Atos 15',
      'Atos 28',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral apresenta Atos 15 como o modelo bíblico do sistema conciliar.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Segundo a pastoral, a autoridade no sistema presbiteriano é exercida:',
    options: [
      'De forma colegiada por oficiais eleitos',
      'Exclusivamente pelo pastor',
      'Por votação popular direta',
      'Por um líder com autoridade absoluta',
      'Somente pelos diáconos',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral ensina que, no sistema presbiteriano, a autoridade é exercida de forma colegiada.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Segundo a pastoral, quais oficiais são capacitados e chamados por Cristo para o serviço?',
    options: [
      'Missionários e evangelistas',
      'Presbíteros e diáconos',
      'Pastores e professores',
      'Apóstolos e profetas',
      'Bispos e sacerdotes',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral destaca que Cristo exerce Sua primazia por meio de presbíteros e diáconos.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Segundo a pastoral, quem é responsável por vocacionar os oficiais da Igreja?',
    options: [
      'A assembleia',
      'O conselho',
      'O Espírito Santo',
      'O pastor',
      'A maioria dos membros',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral afirma que o Espírito Santo é quem chama e vocaciona os oficiais.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Qual é a responsabilidade da igreja local durante a eleição de oficiais?',
    options: [
      'Escolher os candidatos mais populares',
      'Eleger os membros mais antigos',
      'Realizar apenas um procedimento administrativo',
      'Reconhecer os dons daqueles que Deus levantou para o serviço',
      'Selecionar os líderes com base em critérios financeiros',
    ],
    correctAnswer: 3,
    explanation: 'A igreja tem a responsabilidade de reconhecer os dons concedidos por Deus aos oficiais.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Segundo a pastoral, a Assembleia Extraordinária para eleição de oficiais deve ser compreendida como:',
    options: [
      'Um ato de adoração e obediência',
      'Uma simples formalidade administrativa',
      'Um processo exclusivamente democrático',
      'Uma reunião voltada apenas para questões burocráticas',
      'Uma tradição sem significado espiritual',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral enfatiza que a eleição de oficiais é um ato de adoração e obediência diante de Deus.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Segundo a pastoral, os critérios para a escolha dos oficiais foram estabelecidos por Paulo em suas cartas a:',
    options: [
      'Pedro e João',
      'Timóteo e Tito',
      'Barnabé e Silas',
      'Filemom e Lucas',
      'Marcos e Apolo',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral cita as orientações de Paulo a Timóteo e Tito como referência para a escolha dos oficiais.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual é a principal mensagem da pastoral?',
    options: [
      'A liderança da Igreja deve seguir os modelos políticos da sociedade',
      'A eleição de oficiais depende exclusivamente da vontade humana',
      'A assembleia existe apenas para organizar a administração da igreja',
      'A autoridade da Igreja pertence aos oficiais eleitos',
      'Cristo é o Cabeça da Igreja, e a escolha dos oficiais deve acontecer com oração, temor e submissão à Sua vontade',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral conclui que a eleição de oficiais é uma expressão prática da soberania de Deus e da primazia de Cristo sobre a Sua Igreja.',
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
    __distribution
  );
} else if (__max - __min > 1) {
  console.warn(
    'Quiz correctAnswer distribution unbalanced',
    __distribution
  );
}
