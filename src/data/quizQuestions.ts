import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Quantos homens são mencionados como responsáveis por levar o paralítico até Jesus?',
    options: [
      'Dois',
      'Três',
      'Cinco',
      'Quatro',
      'Seis',
    ],
    correctAnswer: 3,
    explanation: 'Os evangelhos relatam quatro homens carregando o paralítico.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'O que motivava os amigos do paralítico a levá-lo até Jesus?',
    options: [
      'Curiosidade sobre milagres',
      'Fé de que Jesus poderia curá-lo',
      'Pressão da multidão',
      'Interesse em fama',
      'Obrigação religiosa',
    ],
    correctAnswer: 1,
    explanation: 'Eles tinham fé real no poder de Jesus para curar.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Qual foi a solução encontrada pelos amigos diante das barreiras para chegar até Jesus?',
    options: [
      'Esperaram a multidão diminuir',
      'Chamaram Jesus para fora',
      'Desistiram momentaneamente',
      'Forçaram passagem pela multidão',
      'Abriram o telhado e desceram o paralítico',
    ],
    correctAnswer: 4,
    explanation: 'Eles foram criativos e removeram parte do telhado.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Quando o texto diz que Jesus viu a fé “deles”, isso indica que:',
    options: [
      'A fé era apenas coletiva e não individual',
      'A fé dos amigos teve papel ativo na ação de levar o paralítico',
      'Somente o paralítico tinha fé verdadeira',
      'A multidão influenciou a fé deles',
      'A fé era irrelevante para o milagre',
    ],
    correctAnswer: 1,
    explanation: 'A fé dos amigos se manifesta em ação concreta.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Qual foi a primeira declaração de Jesus ao paralítico?',
    options: [
      'Levanta-te e anda',
      'Tua fé te salvou',
      'Os teus pecados estão perdoados',
      'Segue-me',
      'Vai e não peques mais',
    ],
    correctAnswer: 2,
    explanation: 'Jesus trata primeiro do pecado, não da condição física.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Por que a declaração de perdão gerou questionamento entre os presentes?',
    options: [
      'Porque o paralítico não pediu cura',
      'Porque duvidavam do milagre físico',
      'Porque não entenderam a língua de Jesus',
      'Porque perdoar pecados era prerrogativa divina',
      'Porque o ambiente era inadequado',
    ],
    correctAnswer: 3,
    explanation: 'Perdoar pecados é algo que pertence a Deus.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Qual aplicação prática é feita sobre amizade na pastoral?',
    options: [
      'Devemos evitar depender de outros',
      'Amizades devem ser apenas emocionais',
      'Cada um deve cuidar apenas de si',
      'Amigos devem ser apenas conselheiros',
      'Devemos ter e ser amigos de fé',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral enfatiza amizade baseada na fé e ação conjunta.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Ao priorizar o perdão antes da cura, Jesus revela que:',
    options: [
      'O problema espiritual é mais profundo que o físico',
      'A cura física não tem importância',
      'O sofrimento é sempre consequência direta do pecado pessoal',
      'O milagre físico era secundário apenas por estratégia',
      'O paralítico não precisava de cura real',
    ],
    correctAnswer: 0,
    explanation: 'Jesus aponta para a raiz espiritual antes da condição física.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'O ato dos amigos de remover o telhado pode ser entendido como:',
    options: [
      'Uma atitude impulsiva sem planejamento',
      'Uma quebra desnecessária de normas sociais',
      'Uma demonstração de desespero sem fé',
      'Uma expressão prática de fé perseverante e criativa',
      'Uma tentativa de chamar atenção pública',
    ],
    correctAnswer: 3,
    explanation: 'Eles demonstram fé ativa, insistente e criativa.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Quando a pastoral afirma que “o mais difícil não era curar o corpo, mas perdoar os pecados”, isso aponta para:',
    options: [
      'A limitação do poder de Jesus',
      'A complexidade médica da época',
      'A centralidade da redenção na obra de Cristo',
      'A superioridade dos milagres físicos',
      'A necessidade de obras humanas para salvação',
    ],
    correctAnswer: 2,
    explanation: 'O foco maior da obra de Cristo é a redenção dos pecados.',
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