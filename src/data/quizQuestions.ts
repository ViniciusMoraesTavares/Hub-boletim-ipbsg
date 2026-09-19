import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual igreja é apresentada na pastoral como uma comunidade pequena, mas reconhecida por sua fidelidade?',
    options: [
      'A igreja de Filadélfia',
      'A igreja de Tiatira',
      'A igreja de Esmirna',
      'A igreja de Pérgamo',
      'A igreja de Sardes',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral apresenta a igreja de Filadélfia como uma comunidade pequena, mas reconhecida por sua fidelidade a Cristo.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Como Jesus é apresentado no início da mensagem à igreja de Filadélfia?',
    options: [
      'Como o Rei dos reis e Senhor dos senhores',
      'Como o Santo, o Verdadeiro e aquele que possui a chave de Davi',
      'Como o Cordeiro que foi morto desde a fundação do mundo',
      'Como o Bom Pastor que dá a vida pelas ovelhas',
      'Como aquele que possui a espada afiada de dois gumes',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral destaca que Jesus se apresenta como o Santo, o Verdadeiro e aquele que possui a chave de Davi.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'O que Jesus podia fazer com a autoridade representada pela chave de Davi?',
    options: [
      'Perdoar todos os pecados automaticamente',
      'Eliminar todas as dificuldades da igreja',
      'Abrir portas que ninguém pode fechar e fechar portas que ninguém pode abrir',
      'Dar riquezas materiais a todos os cristãos',
      'Impedir que qualquer cristão fosse perseguido',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral ensina que Jesus possui autoridade para abrir portas que ninguém pode fechar e fechar portas que ninguém pode abrir.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Segundo a pastoral, em que estava a esperança da igreja de Filadélfia?',
    options: [
      'Na quantidade de pessoas que fazia parte da comunidade',
      'Na influência que a igreja possuía na sociedade',
      'Nos recursos financeiros disponíveis para a igreja',
      'No poder daquele que sustentava a igreja',
      'Na capacidade dos próprios membros de realizar grandes obras',
    ],
    correctAnswer: 3,
    explanation: 'A esperança de Filadélfia não estava em seus próprios recursos, mas no poder de Deus, que sustentava aquela pequena comunidade.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'O que Deus colocou diante da igreja de Filadélfia, apesar de ela ter pouca força?',
    options: [
      'Uma grande porta',
      'Um grande exército',
      'Um grande templo',
      'Uma grande riqueza',
      'Uma grande cidade',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral afirma que Filadélfia era pequena, mas Deus colocou diante dela uma grande porta. O Senhor usaria aquela comunidade para proclamar o evangelho e realizar grandes coisas.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Quais exemplos são utilizados na pastoral para mostrar que Deus pode usar aquilo que parece pouco?',
    options: [
      'A arca de Noé e a funda de Davi',
      'O cajado de Arão e as pedras do templo',
      'A vara de Moisés e os cinco pães e dois peixes',
      'A túnica de José e a harpa de Davi',
      'O azeite da viúva e as moedas da oferta',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral cita a vara de Moisés e os cinco pães e dois peixes como exemplos de como Deus pode usar recursos aparentemente pequenos para realizar grandes coisas.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'O que significa a promessa de Jesus de guardar a igreja de Filadélfia na provação?',
    options: [
      'Que os cristãos nunca enfrentariam qualquer tipo de dificuldade',
      'Que a igreja teria recursos suficientes para evitar todas as lutas',
      'Que nenhuma tentação poderia existir para aqueles que creem',
      'Que Deus retiraria imediatamente todos os problemas daquela comunidade',
      'Que a igreja teria a certeza da presença de Deus mesmo em meio às lutas',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral esclarece que ser guardado na provação não significa ausência de lutas, mas a certeza da presença de Deus no meio delas.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Segundo a pastoral, por que a falta de fé pode impedir a participação nas obras que Deus deseja realizar?',
    options: [
      'Porque podemos deixar de confiar no poder de Deus e limitar nossa disposição para agir com aquilo que temos',
      'Porque Deus somente realiza obras por meio de pessoas que possuem muitos recursos',
      'Porque a falta de fé faz com que a igreja perca automaticamente sua existência',
      'Porque somente igrejas grandes podem proclamar o evangelho',
      'Porque Deus exige que primeiro tenhamos grandes recursos para depois realizar sua obra',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral afirma que Deus não depende da nossa grandeza e pode usar o pouco que temos. A falta de fé, porém, pode nos impedir de participar das obras que Deus deseja realizar.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Qual é a relação entre guardar a Palavra, permanecer próximo de Deus e enfrentar as tribulações?',
    options: [
      'Guardar a Palavra elimina completamente as tribulações',
      'Permanecer próximo de Deus faz com que nenhuma tentação exista',
      'Guardar a Palavra permite que o cristão nunca enfrente oposição',
      'Guardar a Palavra e permanecer próximo de Deus ajudam o cristão a vencer a tentação e atravessar as tribulações com fé',
      'A Palavra só é necessária quando a igreja possui pouca força',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral ensina que guardar a Palavra no coração e permanecer próximos de Deus não significa ausência de lutas, mas nos ajuda a vencer a tentação e atravessar as tribulações com fé.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual afirmação melhor resume a mensagem central da pastoral “UMA IGREJA PEQUENA NAS MÃOS DE UM DEUS GRANDE”?',
    options: [
      'Uma igreja precisa ser grande e possuir muitos recursos para realizar uma obra significativa',
      'Deus usa apenas pessoas fortes e comunidades com grande influência',
      'A igreja deve confiar em seus próprios recursos antes de buscar a ajuda de Deus',
      'As dificuldades demonstram que uma comunidade pequena não pode realizar grandes coisas',
      'Deus não depende da nossa grandeza; por isso, devemos permanecer fiéis à Palavra, perseverar nas provações e confiar nele para realizar sua obra',
    ],
    correctAnswer: 4,
    explanation: 'A mensagem central da pastoral é que Deus não depende da nossa grandeza. Como Filadélfia, devemos permanecer fiéis à Palavra, perseverantes na provação e firmes no amor, confiando no Deus que pode realizar grandes coisas por meio de uma comunidade pequena.',
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