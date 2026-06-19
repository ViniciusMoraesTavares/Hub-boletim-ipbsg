import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Segundo a pastoral, qual personagem procurou Jesus por causa de sua filha?',
    options: [
      'Bartimeu',
      'Nicodemos',
      'Jairo',
      'Zaqueu',
      'José de Arimateia',
    ],
    correctAnswer: 2,
    explanation: 'Jairo procurou Jesus para que Ele curasse sua filha.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Qual era a posição de Jairo, segundo a pastoral?',
    options: [
      'Sacerdote do templo',
      'Principal da sinagoga',
      'Centurião romano',
      'Pescador da Galileia',
      'Escriba',
    ],
    correctAnswer: 1,
    explanation: 'Jairo era um dos principais da sinagoga.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Qual foi a orientação de Jesus a Jairo quando recebeu a notícia da morte de sua filha?',
    options: [
      'Volta para casa',
      'Não chores',
      'Levanta-te',
      'Não temas, crê somente',
      'Segue-me',
    ],
    correctAnswer: 3,
    explanation: 'Jesus fortaleceu Jairo dizendo: "Não temas, crê somente".',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'O gesto de Jairo ao se prostrar diante de Jesus demonstrava que:',
    options: [
      'Reconhecia em Cristo a autoridade divina',
      'Estava apenas seguindo um costume judaico',
      'Queria impressionar a multidão',
      'Desejava tornar-se discípulo imediatamente',
      'Buscava apenas um conselho',
    ],
    correctAnswer: 0,
    explanation: 'Ao se prostrar e adorar Jesus, Jairo reconheceu Sua divindade.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Segundo a pastoral, a fé de Jairo foi demonstrada porque ele:',
    options: [
      'Esperou um milagre sem agir',
      'Levou Jesus até sua casa e confiou em Sua palavra',
      'Convocou outros líderes da sinagoga',
      'Tentou resolver o problema sozinho',
      'Desistiu quando recebeu a má notícia',
    ],
    correctAnswer: 1,
    explanation: 'Sua fé foi prática: ele buscou Jesus, caminhou com Ele e confiou em Sua promessa.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Qual texto bíblico é citado para ensinar que devemos pedir a Deus sem duvidar?',
    options: [
      'Romanos 8:28',
      'Hebreus 11:1',
      'Tiago 1:6',
      'João 3:16',
      'Salmo 23:1',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral cita Tiago 1:6 como ensino sobre orar com fé.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Segundo a pastoral, a fé verdadeira deve servir como:',
    options: [
      'Uma forma de evitar dificuldades',
      'Garantia de prosperidade material',
      'Sinal de superioridade espiritual',
      'Combustível para nossas orações',
      'Substituta da obediência',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral afirma que a fé deve acompanhar nossa vida e impulsionar nossas orações.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'A perseverança de Jairo após receber a notícia da morte de sua filha ensina que:',
    options: [
      'A fé permanece firme mesmo quando as circunstâncias parecem impossíveis',
      'A fé elimina todo sofrimento',
      'A oração impede a morte física',
      'Os milagres dependem exclusivamente da intensidade da fé',
      'As dificuldades são sempre consequência do pecado',
    ],
    correctAnswer: 0,
    explanation: 'Jairo permaneceu confiando em Cristo mesmo diante de uma situação aparentemente sem solução.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Segundo a pastoral, o poder de Deus:',
    options: [
      'Depende da intensidade da nossa fé',
      'Manifesta-se soberanamente e não é limitado pelas nossas convicções',
      'Só atua quando não existe dúvida alguma',
      'Está restrito às pessoas mais religiosas',
      'É condicionado pelas nossas obras',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral deixa claro que Deus age soberanamente, embora nos chame a confiar plenamente nEle.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual é a principal aplicação da pastoral para a vida cristã?',
    options: [
      'Evitar momentos de crise',
      'Buscar respostas para todas as dúvidas antes de confiar',
      'Confiar em Cristo apenas quando os resultados forem visíveis',
      'A verdadeira fé adora a Cristo e permanece firme nEle mesmo em meio às crises',
      'Esperar que Deus sempre aja imediatamente',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral conclui incentivando os cristãos a seguir o exemplo de Jairo, confiando e adorando a Cristo mesmo nas dificuldades.',
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