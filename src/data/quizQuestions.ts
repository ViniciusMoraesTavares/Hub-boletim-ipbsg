import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual passagem bíblica fundamenta a pastoral “Casamento: uma aliança diante de Deus”?',
    options: [
      'Efésios 5.22-33',
      'Gênesis 2.18-25',
      'Marcos 10.1-12',
      '1 Coríntios 13.1-13',
      'Mateus 19.1-12',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral é fundamentada em Marcos 10.1-12, passagem em que Jesus ensina sobre o propósito original de Deus para o casamento, a união entre marido e mulher e a seriedade da aliança matrimonial.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'O que Jesus relembra ao citar o relato da criação em Gênesis?',
    options: [
      'Que Deus criou homem e mulher e estabeleceu entre eles uma união profunda, tornando-os uma só carne',
      'Que o casamento foi criado apenas para atender às necessidades sociais da humanidade',
      'Que a união matrimonial depende exclusivamente dos sentimentos do casal',
      'Que o casamento é uma instituição humana que pode ser modificada conforme cada época',
      'Que a finalidade principal do casamento é garantir a continuidade das gerações',
    ],
    correctAnswer: 0,
    explanation: 'Jesus conduz os fariseus ao propósito original da criação, lembrando que Deus fez homem e mulher e estabeleceu entre eles uma união profunda: os dois serão uma só carne. O casamento faz parte do propósito de Deus para a humanidade.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Segundo Jesus, o que significa a declaração: “O que Deus ajuntou não o separe o homem”?',
    options: [
      'Que o casamento é válido somente enquanto não existem dificuldades no relacionamento',
      'Que o compromisso matrimonial depende da aprovação das outras pessoas',
      'Que a separação deve ser a primeira alternativa diante dos conflitos conjugais',
      'Que o casamento é uma aliança estabelecida diante de Deus e deve ser tratada com seriedade e fidelidade',
      'Que o relacionamento conjugal não exige esforço ou compromisso depois da cerimônia',
    ],
    correctAnswer: 3,
    explanation: 'Jesus ensina que o casamento não é apenas um contrato social, mas uma união estabelecida segundo o propósito de Deus. Por isso, deve ser tratado como uma aliança que envolve compromisso, fidelidade e entrega.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Por que Moisés permitiu o divórcio, segundo a explicação de Jesus?',
    options: [
      'Porque o casamento nunca foi considerado uma união permanente diante de Deus',
      'Porque a separação era o propósito original estabelecido na criação',
      'Porque os sentimentos humanos deveriam ter prioridade sobre qualquer compromisso',
      'Porque Deus considerava o divórcio a melhor solução para todos os conflitos conjugais',
      'Por causa da dureza do coração humano, e não porque essa permissão representasse o ideal original de Deus',
    ],
    correctAnswer: 4,
    explanation: 'Jesus explica que Moisés permitiu o divórcio por causa da dureza do coração humano. Essa permissão não representava o propósito original de Deus para o casamento, mas revelava a realidade do pecado e da resistência humana à vontade divina.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Segundo a pastoral, o que acontece quando a dureza de coração domina o relacionamento matrimonial?',
    options: [
      'O casal desenvolve maior independência e deixa de precisar um do outro',
      'O relacionamento perde a capacidade de ouvir, perdoar, servir e lutar pela restauração',
      'Os conflitos desaparecem porque cada pessoa passa a cuidar apenas de si mesma',
      'A aliança matrimonial se fortalece independentemente das atitudes do casal',
      'O diálogo se torna mais eficiente, pois os sentimentos deixam de interferir nas decisões',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral ensina que a dureza de coração compromete atitudes fundamentais para a vida conjugal, como ouvir, perdoar, servir e buscar a restauração. Muitas rupturas começam quando o egoísmo substitui o amor e a indiferença ocupa o lugar do diálogo.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Quais atitudes a pastoral destaca como fundamentais para cultivar um casamento segundo a vontade de Deus?',
    options: [
      'Independência, silêncio, autoridade e ausência de conflitos',
      'Aparência, estabilidade financeira, reconhecimento e satisfação pessoal',
      'Amor, diálogo, perdão e fidelidade',
      'Concordância em todas as opiniões e ausência de diferenças',
      'Controle, cobrança, submissão sem diálogo e preservação das aparências',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral destaca que maridos e esposas são chamados a cultivar amor, diálogo, perdão e fidelidade. Essas atitudes demonstram o compromisso com a aliança matrimonial e refletem o cuidado de Deus com seu povo.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Qual deve ser a atitude da igreja diante de casamentos em crise, segundo a pastoral?',
    options: [
      'Evitar qualquer envolvimento, pois os problemas conjugais devem ser resolvidos exclusivamente pelo casal',
      'Exigir que todos os casais permaneçam juntos, independentemente das circunstâncias',
      'Concentrar-se apenas na preservação da aparência pública das famílias',
      'Oferecer ensino, acolhimento e cuidado, incentivando a busca por ajuda pastoral e responsabilidade',
      'Condenar publicamente aqueles que enfrentam dificuldades no relacionamento',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral afirma que a igreja deve ser um lugar de ensino, acolhimento e cuidado para as famílias. Em momentos de crise, é importante buscar ajuda pastoral e tratar cada situação com verdade, responsabilidade e cuidado.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Qual é a relação entre a permissão concedida por Moisés e o propósito original de Deus para o casamento?',
    options: [
      'A permissão de Moisés representava uma mudança definitiva no propósito de Deus para o casamento',
      'Jesus ensina que a permissão concedida por Moisés foi uma resposta à dureza do coração humano, enquanto o propósito original de Deus permanece como referência para a aliança matrimonial',
      'A permissão de Moisés demonstra que o casamento nunca teve importância espiritual',
      'Jesus utiliza a criação apenas como uma ilustração, sem relacioná-la à questão do divórcio',
      'A permissão de Moisés mostra que a fidelidade matrimonial depende exclusivamente das circunstâncias sociais',
    ],
    correctAnswer: 1,
    explanation: 'Jesus distingue a concessão feita por Moisés do ideal estabelecido por Deus na criação. A permissão foi concedida por causa da dureza do coração humano, mas o propósito original continua sendo uma união profunda, marcada pelo compromisso e pela fidelidade.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Como a pastoral orienta a aplicação do ensino de Jesus sobre a permanência da aliança matrimonial diante de situações de violência, abandono ou injustiça?',
    options: [
      'Ensina que a preservação do casamento deve acontecer mesmo quando existe violência ou risco à integridade de alguém',
      'Afirma que situações de injustiça não precisam ser tratadas quando existe compromisso matrimonial',
      'Defende que a restauração depende exclusivamente da pessoa que sofreu a agressão',
      'Ensina que qualquer dificuldade conjugal torna automaticamente impossível buscar restauração',
      'Esclarece que o ensino sobre a aliança não deve ser usado para condenar pessoas feridas nem ignorar situações de violência, abandono ou injustiça',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral deixa claro que o ensino de Jesus não deve ser utilizado para condenar pessoas feridas ou ignorar situações de violência, abandono e injustiça. A aliança deve ser honrada, mas isso exige verdade, responsabilidade, cuidado e busca por ajuda pastoral.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual afirmação melhor resume a mensagem central da pastoral “Casamento: uma aliança diante de Deus”?',
    options: [
      'O casamento é uma aliança estabelecida segundo o propósito de Deus, que deve ser cultivada com amor, fidelidade, diálogo e perdão, buscando restauração com verdade e responsabilidade',
      'O casamento é um contrato social cuja permanência depende exclusivamente da satisfação pessoal dos cônjuges',
      'A fidelidade matrimonial significa permanecer em qualquer situação, mesmo quando existe violência ou injustiça',
      'O propósito de Deus para o casamento pode ser substituído pelas preferências individuais de cada casal',
      'A restauração matrimonial depende apenas da ausência de conflitos e de diferenças entre marido e mulher',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral apresenta o casamento como uma aliança diante de Deus, fundamentada no propósito original da criação. Essa união exige compromisso, amor, fidelidade, diálogo e perdão. Também destaca a importância de tratar crises com cuidado, arrependimento, responsabilidade e busca por restauração quando possível.',
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
