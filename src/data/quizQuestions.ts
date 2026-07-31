import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Segundo a pastoral, o que garante segurança ao coração que busca a verdade?',
    options: [
      'A sabedoria humana',
      'A proximidade de Deus',
      'A força da oração',
      'A prosperidade material',
      'A tradição religiosa',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral afirma que a proximidade de Deus é a garantia de segurança para quem O busca em verdade.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'De acordo com a pastoral, como o Senhor deve ser invocado?',
    options: [
      'Com muitas palavras',
      'Em verdade',
      'Somente em público',
      'Por meio de rituais',
      'Apenas em momentos de dificuldade',
    ],
    correctAnswer: 2,
    explanation: 'O texto destaca que Deus está perto daqueles que O invocam em verdade.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Segundo a pastoral, o Senhor guarda:',
    options: [
      'Todos os povos indistintamente',
      'Somente os sacerdotes',
      'Apenas quem frequenta o templo',
      'Todos os que O amam',
      'Somente os reis de Israel',
    ],
    correctAnswer: 3,
    explanation: 'Com base no Salmo 145:20, a pastoral afirma que o Senhor guarda todos os que O amam.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Segundo a pastoral, invocar o Senhor "em verdade" exige:',
    options: [
      'Sinceridade de coração, transparência de motivações e alinhamento com a Escritura',
      'Conhecimento profundo da língua hebraica',
      'Participação em todos os cultos',
      'Longas orações diárias',
      'Realização de votos religiosos',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral explica que invocar Deus em verdade envolve sinceridade, transparência e fidelidade à Sua Palavra.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Segundo a pastoral, a salvação divina abrange:',
    options: [
      'Somente a vida eterna',
      'O livramento das crises temporais e a preservação para a eternidade',
      'Apenas as necessidades materiais',
      'Somente o perdão dos pecados',
      'Exclusivamente as dificuldades espirituais',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral ensina que a salvação de Deus alcança tanto esta vida quanto a eternidade.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Qual é o objetivo principal da oração, segundo a pastoral?',
    options: [
      'Receber benefícios pessoais',
      'Resolver todos os problemas',
      'Exaltar o nome de Deus',
      'Demonstrar espiritualidade',
      'Obter reconhecimento diante das pessoas',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral afirma que a oração não existe apenas para pedir, mas principalmente para glorificar o Senhor.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Segundo a pastoral, cada clamor, confissão e cântico de gratidão devem ser:',
    options: [
      'Uma demonstração pública de fé',
      'Uma forma de fortalecer a autoestima',
      'Uma tradição da igreja',
      'Para a glória do Altíssimo',
      'Um testemunho diante dos homens',
    ],
    correctAnswer: 3,
    explanation: 'Toda expressão de adoração deve ter como finalidade glorificar o Senhor.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Ao afirmar que Deus está perto dos que O invocam "em verdade", a pastoral ensina que:',
    options: [
      'A comunhão com Deus exige sinceridade e submissão à Sua Palavra',
      'Toda oração é aceita independentemente da atitude do coração',
      'Somente líderes espirituais podem se aproximar de Deus',
      'A proximidade de Deus depende da intensidade das emoções',
      'A oração substitui a obediência às Escrituras',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral destaca que a verdadeira aproximação de Deus acontece com sinceridade e fidelidade à Sua vontade.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Segundo a pastoral, qual deve ser a atitude de quem busca a salvação ou deseja um pedido justo?',
    options: [
      'Clamar em verdade e com temor ao Senhor',
      'Confiar apenas na própria perseverança',
      'Esperar sinais extraordinários',
      'Buscar respostas apenas em circunstâncias favoráveis',
      'Depender exclusivamente de rituais religiosos',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral incentiva o cristão a buscar o Senhor com sinceridade e reverência.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual é a principal mensagem da pastoral?',
    options: [
      'A oração garante todos os desejos humanos',
      'O Senhor está próximo dos que O buscam em verdade, ouve, salva e deve ser glorificado eternamente',
      'A adoração pública é mais importante que a oração pessoal',
      'A salvação está limitada à vida presente',
      'A proximidade de Deus depende das tradições religiosas',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral conclui enfatizando que Deus está perto dos que O invocam em verdade, salva Seu povo e é digno de louvor eterno.',
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
