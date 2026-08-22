import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Segundo a pastoral, quem possui autoridade suprema sobre a Igreja?',
    options: [
      'Os presbíteros',
      'A igreja local',
      'O Espírito Santo por meio dos oficiais',
      'Cristo',
      'O conselho da igreja',
    ],
    correctAnswer: 3,
    explanation:
      'A pastoral afirma que Cristo é a cabeça da Igreja e exerce autoridade suprema sobre o Seu povo por meio da Sua Palavra e do Seu Espírito.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Qual passagem bíblica é apresentada como exemplo do modelo conciliar?',
    options: [
      'Atos 15',
      'Romanos 8',
      'Salmo 23',
      'Mateus 28',
      'Apocalipse 2',
    ],
    correctAnswer: 0,
    explanation:
      'A pastoral apresenta Atos 15, quando apóstolos e presbíteros se reuniram para tratar de questões importantes relacionadas ao Reino de Deus.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Segundo a pastoral, como a liderança é exercida no sistema presbiteriano?',
    options: [
      'De forma individual por um único líder',
      'De forma colegiada por oficiais eleitos',
      'Exclusivamente por votação popular',
      'Por uma autoridade externa à igreja local',
      'Somente pelos membros mais antigos',
    ],
    correctAnswer: 1,
    explanation:
      'A pastoral afirma que o sistema presbiteriano possui liderança exercida de forma colegiada por oficiais eleitos e capacitados pelo próprio Cristo.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Segundo a pastoral, quem chama e vocaciona os oficiais da Igreja?',
    options: [
      'A igreja local',
      'O conselho da igreja',
      'Os próprios candidatos',
      'O Espírito Santo',
      'A assembleia dos membros',
    ],
    correctAnswer: 3,
    explanation:
      'A pastoral ensina que o Espírito Santo é quem chama e vocaciona os oficiais, enquanto a igreja local reconhece esses dons.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Qual é a responsabilidade da igreja local no processo de eleição de oficiais?',
    options: [
      'Criar os critérios de qualificação dos oficiais',
      'Escolher alguém independentemente de sua vocação',
      'Reconhecer os dons daqueles que Deus levantou para o serviço',
      'Substituir a ação do Espírito Santo',
      'Determinar quem será chamado por Deus',
    ],
    correctAnswer: 2,
    explanation:
      'A igreja local possui a responsabilidade de reconhecer os dons e identificar aqueles que Deus levantou para exercer o cuidado espiritual e administrativo.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Segundo a pastoral, a eleição de oficiais deve ser compreendida como:',
    options: [
      'Um processo puramente administrativo',
      'Uma disputa entre candidatos',
      'Um ato de adoração, obediência e discernimento espiritual',
      'Uma escolha baseada apenas em popularidade',
      'Uma formalidade sem importância espiritual',
    ],
    correctAnswer: 2,
    explanation:
      'A pastoral afirma que a eleição não deve ser vista apenas como um processo administrativo, mas como um ato de adoração, obediência e discernimento espiritual.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Quais características a pastoral deseja que estejam presentes nos homens escolhidos para servir à Igreja?',
    options: [
      'Popularidade e influência social',
      'Experiência profissional e posição financeira',
      'Sã doutrina e compromisso com o serviço cristão',
      'Grande capacidade administrativa e reconhecimento público',
      'Antiguidade como membro e prestígio pessoal',
    ],
    correctAnswer: 2,
    explanation:
      'A pastoral pede que o Senhor conduza a igreja na escolha de homens comprometidos com a sã doutrina e com o serviço cristão.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Qual é a relação entre a vocação dos oficiais e a responsabilidade da igreja local?',
    options: [
      'A igreja cria a vocação por meio da eleição',
      'A vocação depende exclusivamente da aprovação da igreja',
      'O Espírito Santo vocaciona, e a igreja reconhece os dons daqueles que Deus levantou',
      'A vocação é determinada pelos próprios candidatos',
      'A igreja não possui qualquer responsabilidade no processo',
    ],
    correctAnswer: 2,
    explanation:
      'A pastoral distingue claramente as funções: o Espírito Santo chama e vocaciona, enquanto a igreja local reconhece os dons e identifica aqueles que Deus levantou para o serviço.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Por que a Assembleia Extraordinária para eleição de oficiais possui relevância espiritual, segundo a pastoral?',
    options: [
      'Porque determina quem terá maior autoridade sobre Cristo',
      'Porque permite à igreja substituir a autoridade das Escrituras',
      'Porque é um ato de adoração, obediência e discernimento espiritual na escolha daqueles que servirão à igreja',
      'Porque transforma os eleitos em autoridades independentes',
      'Porque elimina a necessidade de liderança colegiada',
    ],
    correctAnswer: 2,
    explanation:
      'A pastoral apresenta a eleição como um ato espiritual no qual a igreja reconhece aqueles que Deus levantou para o serviço, buscando agir em submissão à vontade do Senhor.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual é a principal mensagem da pastoral sobre o governo da Igreja?',
    options: [
      'A autoridade da Igreja pertence aos homens que ocupam os cargos',
      'A eleição permite que a maioria dos membros governe acima das Escrituras',
      'A liderança da Igreja deve ser exercida sem considerar a vocação espiritual',
      'Cristo é a cabeça da Igreja, e a escolha de oficiais deve ocorrer em submissão à Sua autoridade e para a Sua glória',
      'O governo da Igreja depende principalmente da capacidade administrativa dos seus líderes',
    ],
    correctAnswer: 3,
    explanation:
      'A pastoral conclui destacando que Cristo é a cabeça da Igreja e que a escolha de oficiais deve buscar homens comprometidos com a sã doutrina e o serviço cristão, para que Cristo seja glorificado.',
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