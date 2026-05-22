import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Na parábola da candeia, a verdade divina deve ser:',
    options: [
      'Escondida dos incrédulos',
      'Reservada apenas aos líderes',
      'Protegida em segredo',
      'Usada apenas em ambientes religiosos',
      'Proclamada para iluminar',
    ],
    correctAnswer: 4,
    explanation: 'A candeia representa a verdade divina que deve iluminar e ser proclamada.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Segundo a pastoral, o que o semeador pode fazer em relação à semente?',
    options: [
      'Lançá-la',
      'Garantir seu crescimento',
      'Controlar seus frutos',
      'Determinar o tempo da colheita',
      'Modificar sua essência',
    ],
    correctAnswer: 0,
    explanation: 'O dever do semeador é lançar a semente; o crescimento pertence a Deus.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Qual parábola é usada para ensinar sobre pequenos começos do Reino de Deus?',
    options: [
      'A do joio',
      'A do grão de mostarda',
      'A do servo infiel',
      'A da rede',
      'A dos talentos',
    ],
    correctAnswer: 1,
    explanation: 'O grão de mostarda simboliza algo pequeno que cresce grandemente.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'O princípio de que “a medida usada será também usada por Deus” indica que:',
    options: [
      'O entendimento espiritual é proporcional à receptividade e disposição em compartilhar',
      'A salvação depende das obras humanas',
      'O conhecimento bíblico elimina a necessidade de fé',
      'A graça divina é limitada pelo intelecto',
      'O crescimento espiritual ocorre automaticamente',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral ensina responsabilidade ao ouvir e compartilhar a Palavra.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'A parábola da semente que cresce por si mesma enfatiza principalmente:',
    options: [
      'A habilidade humana de produzir fé',
      'A soberania de Deus no crescimento do Reino',
      'A superioridade intelectual do semeador',
      'A imprevisibilidade absoluta da salvação',
      'A irrelevância da pregação',
    ],
    correctAnswer: 1,
    explanation: 'O crescimento espiritual pertence ao Senhor e não ao homem.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'A descrição “primeiro a erva, depois a espiga e por fim o grão cheio” aponta para:',
    options: [
      'A necessidade de experiências emocionais intensas',
      'O caráter instantâneo da santificação',
      'O desenvolvimento gradual da maturidade espiritual',
      'A limitação do poder da Palavra',
      'O fracasso inevitável do discipulado',
    ],
    correctAnswer: 2,
    explanation: 'O Reino cresce de forma progressiva e gradual.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Por que Jesus utiliza a imagem de uma pequena semente na parábola do grão de mostarda?',
    options: [
      'Para demonstrar a fragilidade definitiva da Igreja',
      'Para ensinar que o Reino permaneceria restrito',
      'Para indicar que apenas poucos seriam alcançados',
      'Para mostrar que aquilo que parece insignificante pode crescer poderosamente',
      'Para simbolizar o isolamento do povo de Deus',
    ],
    correctAnswer: 3,
    explanation: 'O pequeno começo do Reino não impede sua expansão gloriosa.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Ao afirmar que a Palavra germina “pela ação do Espírito Santo”, a pastoral ensina que:',
    options: [
      'A transformação espiritual depende fundamentalmente da atuação divina',
      'O entendimento humano é suficiente para produzir fé',
      'O crescimento espiritual ocorre independentemente da Palavra',
      'O Reino avança apenas por estratégias humanas',
      'A pregação possui apenas valor simbólico',
    ],
    correctAnswer: 0,
    explanation: 'A obra espiritual verdadeira é realizada pelo Espírito Santo.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'A expansão histórica do Reino de Deus, iniciada com “um Messias humilde e poucos seguidores”, demonstra:',
    options: [
      'Que o Reino depende de influência política',
      'Que a fraqueza aparente não impede o triunfo dos propósitos divinos',
      'Que a Igreja deve buscar reconhecimento mundano',
      'Que o crescimento do Evangelho foi acidental',
      'Que os milagres eram o centro da mensagem cristã',
    ],
    correctAnswer: 1,
    explanation: 'O crescimento do Reino confirma a soberania e o propósito de Deus.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Quando a pastoral afirma que “a Palavra de Deus nunca volta vazia”, isso implica que:',
    options: [
      'Toda pessoa responderá positivamente ao Evangelho',
      'A pregação elimina a responsabilidade humana',
      'A eficácia da Palavra depende da eloquência do pregador',
      'O Reino se estabelece por coerção religiosa',
      'A Palavra cumpre soberanamente os propósitos determinados por Deus',
    ],
    correctAnswer: 4,
    explanation: 'A Palavra de Deus realiza aquilo para o qual foi enviada.',
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
