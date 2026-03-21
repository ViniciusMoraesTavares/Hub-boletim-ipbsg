import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual imagem o salmista usa para ilustrar uma alma em descanso?',
    options: [
      'Uma ovelha no pasto',
      'Um guerreiro em batalha',
      'Uma criança nos braços da mãe',
      'Um profeta no deserto',
      'Um rei em seu trono',
    ],
    correctAnswer: 2,
    explanation: 'O salmista compara a alma em descanso a uma criança desmamada nos braços da mãe.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Quando a criança consegue se aquietar nos braços da mãe?',
    options: [
      'Quando está com fome',
      'Depois de ser alimentada',
      'Quando está brincando',
      'Quando está sozinha',
      'Quando está chorando mais',
    ],
    correctAnswer: 1,
    explanation: 'A criança só se acalma depois de ser amamentada e satisfeita.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'O que o salmista precisou fazer com sua própria alma?',
    options: [
      'Ignorá-la completamente',
      'Deixá-la agir livremente',
      'Compará-la com outros',
      'Fazer calar e sossegar',
      'Alimentá-la com riquezas',
    ],
    correctAnswer: 3,
    explanation: 'Ele deliberadamente fez calar e sossegar sua alma.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Mesmo após ser alimentado por Deus, por que o salmista ainda estava inquieto?',
    options: [
      'Porque não se apropriava do descanso e da entrega plena',
      'Porque Deus não o havia abençoado',
      'Porque estava longe da presença de Deus',
      'Porque não conhecia a verdade',
      'Porque estava cercado de inimigos',
    ],
    correctAnswer: 0,
    explanation: 'A inquietação vinha da falta de apropriação do descanso em Deus.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'O que pode causar inquietação na vida do cristão, segundo a pastoral?',
    options: [
      'Apenas problemas físicos',
      'Falta de conhecimento intelectual',
      'Barulho das circunstâncias e sentimentos turbulentos',
      'Ausência de responsabilidades',
      'Excesso de descanso',
    ],
    correctAnswer: 2,
    explanation: 'O texto fala do barulho das circunstâncias e dos sentimentos que perturbam a alma.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Como a pastoral descreve alguém espiritualmente cansado?',
    options: [
      'Como um rei sem trono',
      'Como uma ovelha sem pastor',
      'Como um soldado preparado',
      'Como um sábio experiente',
      'Como um servo fiel',
    ],
    correctAnswer: 1,
    explanation: 'A comparação usada é de uma ovelha sem pastor, exausta e desorientada.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Qual atitude prática é recomendada para lidar com a ansiedade?',
    options: [
      'Resolver tudo sozinho',
      'Ignorar os problemas',
      'Confiar apenas nos sentimentos',
      'Esperar o tempo passar',
      'Depositar toda ansiedade aos pés de Deus',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral orienta a entregar toda ansiedade a Deus.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'O que significa “fazer calar a alma” em termos espirituais?',
    options: [
      'Submeter a alma à confiança em Deus',
      'Eliminar emoções completamente',
      'Evitar qualquer pensamento',
      'Buscar isolamento total',
      'Negar a realidade',
    ],
    correctAnswer: 0,
    explanation: 'Trata-se de um ato consciente de confiar e descansar em Deus.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Qual o principal ensino teológico da ilustração da criança?',
    options: [
      'Dependência emocional humana',
      'A importância da infância',
      'A necessidade de disciplina',
      'A confiança e descanso em Deus após sermos supridos',
      'A fragilidade da vida',
    ],
    correctAnswer: 3,
    explanation: 'A imagem aponta para confiança plena e descanso em Deus após sermos cuidados por Ele.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual é o chamado final da pastoral para quem está angustiado?',
    options: [
      'Persistir na ansiedade',
      'Buscar soluções humanas',
      'Aceitar a inquietação como normal',
      'Fugir dos problemas',
      'Voltar-se a Deus e descansar em Seus braços',
    ],
    correctAnswer: 4,
    explanation: 'O texto conclui chamando à confiança e descanso nos cuidados de Deus.',
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