import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual passagem bíblica fundamenta a pastoral “Quando a fé reconhece sua fraqueza”?',
    options: [
      'Mateus 14.22-33',
      'Marcos 9.14-29',
      'Lucas 15.11-32',
      'João 11.1-16',
      'Salmos 46.1-11',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral é baseada em Marcos 9.14-29, passagem que apresenta a aflição de um pai, a incapacidade dos discípulos de libertar seu filho e a intervenção poderosa de Jesus.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'O que o pai do menino pediu a Jesus?',
    options: [
      'Que ensinasse seus discípulos a discutir com os escribas',
      'Que levasse seu filho para o monte da transfiguração',
      'Que lhe concedesse riquezas para cuidar da família',
      'Que tivesse compaixão dele e ajudasse seu filho',
      'Que o tornasse um dos discípulos mais importantes',
    ],
    correctAnswer: 3,
    explanation: 'O pai se aproximou de Jesus em aflição e pediu compaixão. Sua atitude demonstra que, mesmo diante da dor e da incerteza, ele buscou ajuda naquele que tinha poder para agir.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Qual foi a declaração do pai que expressa sua fé e, ao mesmo tempo, reconhece sua fraqueza?',
    options: [
      '“Eu creio! Ajuda-me na minha falta de fé!”',
      '“Minha fé é suficiente para todas as coisas!”',
      '“Não preciso de ajuda, pois já compreendi tudo!”',
      '“Seus discípulos certamente resolverão o problema!”',
      '“Eu conheço o poder de Deus e não tenho dúvidas!”',
    ],
    correctAnswer: 0,
    explanation: 'O pai declarou: “Eu creio! Ajuda-me na minha falta de fé!” (Marcos 9.24). Ele não escondeu sua fragilidade, mas a apresentou honestamente diante de Jesus.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'O que aconteceu quando os discípulos tentaram libertar o menino antes da chegada de Jesus?',
    options: [
      'Conseguiram libertá-lo, mas o menino voltou a sofrer depois',
      'O pai recusou a ajuda dos discípulos antes que tentassem',
      'Os escribas impediram que os discípulos se aproximassem do menino',
      'Jesus apareceu imediatamente e não permitiu que eles tentassem',
      'Eles não conseguiram libertar o menino',
    ],
    correctAnswer: 4,
    explanation: 'Os discípulos não conseguiram expulsar o espírito. A situação revelou que a experiência anterior com o poder de Deus não deveria levá-los a confiar na própria capacidade, mas a permanecer dependentes do Senhor.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Segundo a pastoral, qual erro os cristãos podem cometer ao confiar excessivamente na própria capacidade?',
    options: [
      'Estudar as Escrituras para compreender melhor a vontade de Deus',
      'Tentar realizar a obra de Deus apenas com técnica, conhecimento ou força humana',
      'Pedir ajuda a outros cristãos em momentos difíceis',
      'Reconhecer que precisam crescer na fé',
      'Orar antes de tomar decisões importantes',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral alerta que podemos confiar excessivamente em nossas experiências, técnicas e conhecimentos. A obra de Deus exige que reconheçamos nossa limitação e dependamos continuamente dele.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'O que Jesus ensinou aos discípulos quando perguntaram por que não conseguiram expulsar o espírito?',
    options: [
      'Que precisavam abandonar o ministério e voltar para suas casas',
      'Que o pai deveria ter demonstrado uma fé perfeita',
      'Que aquela situação só poderia ser vencida por meio da oração',
      'Que os escribas possuíam mais conhecimento espiritual do que eles',
      'Que deveriam esperar até que o menino se recuperasse naturalmente',
    ],
    correctAnswer: 2,
    explanation: 'Em Marcos 9.29, Jesus ensina sobre a necessidade da oração. A pastoral destaca que orar não é repetir uma fórmula, mas reconhecer nossa dependência do poder de Deus.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Segundo a pastoral, o que significa reconhecer a própria falta de fé?',
    options: [
      'Concluir que Deus não pode agir em situações difíceis',
      'Abandonar a vida cristã até que todas as dúvidas desapareçam',
      'Esconder as dúvidas para não demonstrar fraqueza aos outros',
      'Confessar honestamente as próprias limitações e pedir que Deus fortaleça a fé',
      'Esperar alcançar uma fé perfeita antes de se aproximar de Cristo',
    ],
    correctAnswer: 3,
    explanation: 'O pai não fingiu possuir uma fé sem fraquezas. Ele levou sua necessidade a Jesus. A pastoral ensina que podemos confessar nossas dúvidas e pedir ao Senhor que fortaleça nossa fé.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Qual é o principal contraste apresentado pela pastoral entre a capacidade humana e o poder de Cristo?',
    options: [
      'A experiência religiosa torna desnecessária a dependência de Deus',
      'O conhecimento bíblico é suficiente para superar qualquer dificuldade sem oração',
      'A fé verdadeira elimina imediatamente todas as dúvidas e limitações humanas',
      'A oração funciona como uma técnica que garante o resultado desejado',
      'A insuficiência humana nos chama a depender de Cristo, cujo poder não está limitado pela nossa capacidade',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral contrasta a limitação humana com o poder de Cristo. A confiança cristã não repousa em nossa competência ou em uma fé supostamente perfeita, mas no Senhor a quem recorremos em nossas fraquezas.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Qual interpretação melhor expressa o significado da oração nessa pastoral?',
    options: [
      'A oração é uma forma de convencer Deus a realizar tudo o que desejamos',
      'A oração é uma expressão de dependência de Deus, e não uma fórmula para controlar os resultados',
      'A oração só é necessária quando todas as capacidades humanas já foram esgotadas',
      'A oração serve principalmente para demonstrar aos outros a força da nossa fé',
      'A oração garante que os problemas terminarão imediatamente',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral afirma que orar não é repetir uma fórmula, mas reconhecer que dependemos do poder de Deus. A oração nos aproxima de Cristo sem transformar Deus em alguém obrigado a cumprir nossas expectativas.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual afirmação melhor resume a mensagem central da pastoral “Quando a fé reconhece sua fraqueza”?',
    options: [
      'O cristão precisa desenvolver autoconfiança suficiente para superar qualquer dificuldade',
      'As dúvidas demonstram necessariamente que uma pessoa não possui fé verdadeira',
      'A vida cristã exige reconhecer nossas limitações, buscar a Cristo em oração e confiar em sua graça mesmo em meio às lutas',
      'A experiência espiritual do passado garante que não enfrentaremos novos fracassos',
      'A oração é eficaz somente quando conseguimos eliminar todas as nossas dúvidas',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral nos ensina a reconhecer nossas limitações sem esconder nossas fraquezas de Cristo. Em vez de confiar exclusivamente em nós mesmos, devemos buscar o Senhor em oração, pedindo que fortaleça nossa fé e confiando em sua graça.',
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
