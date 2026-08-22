import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Segundo a pastoral, quem é a cabeça da Igreja?',
    options: [
      'Os presbíteros',
      'O pastor local',
      'O Espírito Santo',
      'Cristo',
      'A assembleia da igreja',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral afirma que Cristo é a cabeça da Igreja e exerce autoridade suprema sobre Seu povo por meio de Sua Palavra e de Seu Espírito.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Qual passagem bíblica é apresentada como exemplo do modelo conciliar?',
    options: [
      'Atos 15',
      'Romanos 8',
      '1 Coríntios 13',
      'Mateus 28',
      'Apocalipse 21',
    ],
    correctAnswer: 0,
    explanation: 'Em Atos 15, apóstolos e presbíteros se reuniram para tratar de questões importantes relacionadas ao Reino de Deus.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Segundo a pastoral, quem chama e vocaciona os oficiais da Igreja?',
    options: [
      'A assembleia da igreja',
      'O pastor',
      'O Espírito Santo',
      'Os presbíteros',
      'A denominação',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral ensina que é o Espírito Santo quem chama e vocaciona os oficiais, enquanto a igreja local reconhece esses dons.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Qual é a responsabilidade da igreja local no processo de escolha dos oficiais?',
    options: [
      'Criar os critérios de qualificação',
      'Reconhecer os dons daqueles que Deus levantou para o serviço',
      'Substituir a ação do Espírito Santo',
      'Escolher líderes independentemente das Escrituras',
      'Definir quem será vocacionado pelo Espírito Santo',
    ],
    correctAnswer: 1,
    explanation: 'A igreja local possui a responsabilidade de reconhecer aqueles que Deus levantou e capacitou para o serviço.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Segundo a pastoral, o sistema presbiteriano é caracterizado principalmente por:',
    options: [
      'Uma liderança exercida exclusivamente pelo pastor',
      'Uma democracia sem autoridade espiritual',
      'Uma hierarquia centralizada em um único líder',
      'Uma liderança exercida de forma colegiada por oficiais eleitos',
      'Uma administração sem participação da igreja local',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral relaciona o modelo de Atos 15 ao sistema presbiteriano, no qual a liderança é exercida colegiadamente por oficiais eleitos.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Além de um processo administrativo, como a Assembleia Extraordinária para eleição deve ser compreendida?',
    options: [
      'Como um ato de adoração, obediência e discernimento espiritual',
      'Como uma formalidade sem importância espiritual',
      'Como uma competição entre candidatos',
      'Como uma decisão exclusivamente política',
      'Como uma escolha baseada apenas em popularidade',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral destaca que a eleição de oficiais é um ato de adoração, obediência e discernimento espiritual.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Segundo a pastoral, a autoridade eclesiástica deve estar submetida:',
    options: [
      'À maioria dos membros',
      'À tradição da denominação',
      'À experiência dos líderes',
      'À cultura da sociedade',
      'À primazia de Cristo',
    ],
    correctAnswer: 4,
    explanation: 'Cristo possui autoridade suprema sobre a Igreja, e toda autoridade eclesiástica deve estar submetida à Sua primazia.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Qual é a relação entre a vocação dos oficiais e a participação da igreja local?',
    options: [
      'A igreja cria a vocação por meio da votação',
      'A votação torna desnecessária a ação do Espírito Santo',
      'O Espírito Santo vocaciona, e a igreja reconhece esses dons por meio da eleição',
      'A igreja escolhe livremente, independentemente de vocação',
      'Somente os oficiais atuais podem determinar quem será vocacionado',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral distingue as funções: o Espírito Santo chama e vocaciona, enquanto a igreja local reconhece esses dons e os homens levantados por Deus.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Por que a eleição de oficiais é apresentada como um ato de discernimento espiritual?',
    options: [
      'Porque a igreja deve escolher os candidatos mais populares',
      'Porque a escolha deve reconhecer aqueles que Deus levantou para o serviço conforme os princípios das Escrituras',
      'Porque os membros devem escolher quem possui maior influência social',
      'Porque a eleição permite alterar os princípios bíblicos conforme a necessidade',
      'Porque os critérios bíblicos são apenas sugestões',
    ],
    correctAnswer: 1,
    explanation: 'A eleição busca reconhecer, à luz das Escrituras, aqueles que Deus levantou e capacitou para cuidar espiritual e administrativamente da Igreja.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual é a principal mensagem da pastoral sobre a Assembleia Extraordinária para eleição?',
    options: [
      'A eleição é principalmente uma decisão administrativa da igreja',
      'A escolha dos oficiais depende exclusivamente da preferência dos membros',
      'O sistema presbiteriano elimina a autoridade de Cristo sobre a Igreja',
      'A eleição é um ato de adoração e obediência no qual a igreja busca reconhecer aqueles chamados por Deus para o serviço, submetendo-se à primazia de Cristo',
      'A escolha dos oficiais deve priorizar homens de maior influência na comunidade',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral apresenta a eleição como um momento espiritualmente relevante, no qual a igreja reconhece os que Deus levantou para o serviço e busca glorificar a Cristo, o Cabeça da Igreja.',
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