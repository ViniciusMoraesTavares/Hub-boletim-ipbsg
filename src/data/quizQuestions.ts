import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Segundo a pastoral, as tempestades da vida podem surgir:',
    options: [
      'Apenas por causa de erros pessoais',
      'Somente em pessoas sem fé',
      'Apenas em momentos de desobediência',
      'Em qualquer pessoa e de diversas formas',
      'Somente em períodos de crise financeira',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral ensina que as tribulações atingem todas as pessoas e podem vir de diversas maneiras.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Como a tribulação costuma chegar, segundo o texto?',
    options: [
      'Com aviso prévio e preparação',
      'Por meio de sinais claros',
      'De forma repentina e sem alerta',
      'Somente após longos períodos de erro',
      'Exclusivamente por perseguição',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral destaca que a tribulação pode surgir sem aviso prévio.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Mesmo obedecendo a Jesus, os discípulos enfrentaram:',
    options: [
      'Prosperidade imediata',
      'Uma grande tempestade',
      'A ausência total de problemas',
      'Uma recompensa financeira',
      'O reconhecimento da multidão',
    ],
    correctAnswer: 1,
    explanation: 'A tempestade aconteceu mesmo enquanto obedeciam à ordem de Jesus.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Segundo a pastoral, qual é a questão mais importante diante das tribulações?',
    options: [
      'Evitar qualquer sofrimento',
      'Encontrar explicações para tudo',
      'Estar com Jesus em todos os momentos',
      'Controlar todas as circunstâncias',
      'Buscar soluções humanas primeiro',
    ],
    correctAnswer: 2,
    explanation: 'O foco não é estar imune ao sofrimento, mas permanecer com Cristo.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'O cântico citado pela pastoral ensina que:',
    options: [
      'A fé elimina todas as dificuldades',
      'Com Cristo no barco o temporal passa',
      'Os discípulos nunca sentiram medo',
      'O sofrimento é apenas uma ilusão',
      'A vida cristã é sempre tranquila',
    ],
    correctAnswer: 1,
    explanation: 'A mensagem do cântico é que Cristo conduz Seu povo através das tempestades.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'O fato de o vento e o mar obedecerem a Jesus revela:',
    options: [
      'Sua autoridade sobre toda a criação',
      'Sua habilidade de prever o clima',
      'A força dos discípulos',
      'O poder da natureza',
      'A importância da navegação',
    ],
    correctAnswer: 0,
    explanation: 'A obediência do vento e do mar demonstra a soberania de Cristo.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Qual atitude a pastoral recomenda diante das ansiedades da vida?',
    options: [
      'Ignorá-las completamente',
      'Confiar apenas na própria força',
      'Esperar o problema desaparecer sozinho',
      'Compartilhá-las apenas com amigos',
      'Lançá-las sobre Cristo e descansar em Sua soberania',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral incentiva a entregar as ansiedades a Cristo.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'O episódio da tempestade demonstra que:',
    options: [
      'A obediência a Cristo não garante ausência de sofrimento',
      'A fé impede qualquer dificuldade',
      'Os discípulos estavam fora da vontade de Deus',
      'O sofrimento sempre é castigo divino',
      'Somente incrédulos enfrentam crises',
    ],
    correctAnswer: 0,
    explanation: 'Os discípulos enfrentaram a tempestade justamente enquanto obedeciam a Jesus.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Quando a pastoral afirma que a tribulação pode alcançar uma dimensão fora do nosso controle, ela ensina que:',
    options: [
      'Devemos desistir diante das dificuldades',
      'Todo sofrimento é inevitavelmente sem propósito',
      'Existem circunstâncias que excedem nossa capacidade humana de resolver',
      'A fé elimina a necessidade de ação',
      'Não devemos buscar ajuda em momentos difíceis',
    ],
    correctAnswer: 2,
    explanation: 'Há situações que fogem completamente ao controle humano.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'A afirmação de que “todas as coisas cooperam para o bem daqueles que amam a Deus” reforça a ideia de que:',
    options: [
      'Todo sofrimento é agradável',
      'Cristãos nunca sofrem perdas',
      'A vida será sempre fácil',
      'Deus governa soberanamente até mesmo as tribulações para cumprir Seus propósitos',
      'A fé garante prosperidade material',
    ],
    correctAnswer: 3,
    explanation: 'A soberania de Deus alcança inclusive os momentos difíceis da vida.',
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
