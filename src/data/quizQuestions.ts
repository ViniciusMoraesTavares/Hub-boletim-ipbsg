import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual era a condição do homem encontrado por Jesus na sinagoga?',
    options: [
      'Era cego',
      'Era surdo',
      'Tinha a mão ressequida',
      'Era paralítico',
      'Estava possesso',
    ],
    correctAnswer: 2,
    explanation: 'O texto menciona um homem com a mão ressequida.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Qual era a intenção dos fariseus ao observar Jesus?',
    options: [
      'Aprender com Ele',
      'Segui-lo como discípulos',
      'Testar seus ensinamentos',
      'Acusá-lo',
      'Ajudar o homem doente',
    ],
    correctAnswer: 3,
    explanation: 'Eles buscavam motivos para acusar Jesus.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'O que Jesus pergunta diante da situação no sábado?',
    options: [
      'Quem pecou?',
      'Quem trouxe este homem?',
      'Qual é a tradição correta?',
      'É permitido trabalhar no sábado?',
      'É lícito fazer o bem ou o mal?',
    ],
    correctAnswer: 4,
    explanation: 'Jesus confronta com a pergunta sobre fazer o bem ou o mal.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'O silêncio dos fariseus revela principalmente que:',
    options: [
      'Não entenderam a pergunta',
      'Seu sistema religioso ignorava a misericórdia',
      'Tinham medo da multidão',
      'Concordavam com Jesus',
      'Estavam confusos com a lei',
    ],
    correctAnswer: 1,
    explanation: 'O silêncio expõe a falência de um sistema sem misericórdia.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Qual contraste central é apresentado na pastoral?',
    options: [
      'Entre fé e incredulidade',
      'Entre discípulos e multidão',
      'Entre lei e graça',
      'Entre tradição e novidade',
      'Entre a autoridade restauradora de Cristo e a dureza de coração dos fariseus',
    ],
    correctAnswer: 4,
    explanation: 'O texto destaca esse contraste principal.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Como a pastoral descreve a reação de Jesus diante dos fariseus?',
    options: [
      'Indiferença total',
      'Alegria pela oposição',
      'Ira santa e tristeza pela cegueira espiritual',
      'Medo da acusação',
      'Silêncio estratégico',
    ],
    correctAnswer: 2,
    explanation: 'Jesus demonstra ira contra o pecado e tristeza pela dureza de coração.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Segundo a pastoral, qual é um perigo da familiaridade com as coisas de Deus?',
    options: [
      'Aumentar o conhecimento teológico',
      'Desenvolver disciplina espiritual',
      'Crescer em fé automaticamente',
      'Perder a capacidade de se maravilhar com a graça',
      'Ter mais zelo religioso',
    ],
    correctAnswer: 3,
    explanation: 'A familiaridade pode levar ao endurecimento espiritual.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Colocar o homem no centro da cena demonstra que Jesus:',
    options: [
      'Rompe com a lógica legalista ao priorizar a dignidade humana',
      'Ignora completamente a Lei',
      'Busca apenas confrontar os fariseus',
      'Age de forma impulsiva',
      'Está criando uma nova tradição',
    ],
    correctAnswer: 0,
    explanation: 'Jesus coloca a pessoa acima do sistema legalista.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'A “cegueira espiritual” descrita na pastoral pode ser entendida como:',
    options: [
      'Falta de conhecimento intelectual',
      'Ausência de práticas religiosas',
      'Negação da existência de Deus',
      'Rejeição consciente da verdade bíblica',
      'Endurecimento do coração mesmo diante da verdade',
    ],
    correctAnswer: 4,
    explanation: 'Trata-se de um coração endurecido diante da verdade.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Quando a pastoral afirma que Jesus nos chama da “paralisia da religiosidade”, isso implica:',
    options: [
      'Abandonar completamente práticas religiosas',
      'Viver sem qualquer regra ou disciplina',
      'Substituir a fé por experiências emocionais',
      'Migrar para uma fé centrada apenas no indivíduo',
      'Viver uma fé transformada pela ação restauradora de Cristo',
    ],
    correctAnswer: 4,
    explanation: 'O chamado é para uma fé viva e transformadora, não apenas externa.',
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