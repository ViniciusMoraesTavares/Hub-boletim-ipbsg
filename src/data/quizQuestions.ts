import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual passagem bíblica fundamenta a pastoral “ENSINAR É CAMINHAR JUNTO”?',
    options: [
      'Salmos 23.1',
      'Provérbios 22.6',
      'João 3.16',
      'Efésios 6.10',
      'Mateus 5.14',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral tem como base Provérbios 22.6, que apresenta a responsabilidade de ensinar a criança no caminho em que deve andar.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'A quem Deus confiou a responsabilidade de instruir os filhos?',
    options: [
      'Exclusivamente aos professores',
      'Somente aos líderes da igreja',
      'Aos amigos e familiares mais próximos',
      'Principalmente aos pais, que devem instruir sua própria casa',
      'Apenas à igreja e à escola',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral ensina que a formação espiritual e moral das crianças não deve ser deixada apenas para a igreja ou para a escola. Deus confiou aos pais a missão de instruir seus filhos.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Segundo a pastoral, quando os pais devem começar a ensinar seus filhos?',
    options: [
      'Desde cedo, orientando, corrigindo e conduzindo as crianças',
      'Somente quando os filhos entrarem na adolescência',
      'Quando os filhos começarem a frequentar a escola',
      'Apenas quando as crianças demonstrarem interesse pela fé',
      'Depois que os filhos conseguirem tomar suas próprias decisões',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral afirma que os pais não devem esperar os filhos crescerem para começar a ensiná-los. Desde cedo, as crianças precisam ser orientadas, corrigidas e conduzidas.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Qual é a diferença entre apenas “ensinar o caminho” e “ensinar no caminho”, destacada pela pastoral?',
    options: [
      'Ensinar o caminho significa estabelecer regras, enquanto ensinar no caminho significa deixar os filhos escolherem tudo',
      'Ensinar o caminho é responsabilidade da igreja, enquanto ensinar no caminho é responsabilidade da escola',
      'Ensinar no caminho significa apenas explicar as consequências das escolhas erradas',
      'Ensinar o caminho exige conhecimento bíblico, mas ensinar no caminho dispensa o exemplo dos pais',
      'Ensinar no caminho significa caminhar ao lado dos filhos, acompanhando a instrução com o exemplo',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral destaca que os pais não devem apenas apontar uma direção de longe. Eles precisam caminhar ao lado dos filhos e demonstrar, por meio de suas próprias atitudes, aquilo que ensinam.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Qual atitude demonstra incoerência entre o ensino dos pais e seu exemplo?',
    options: [
      'Estabelecer limites e explicar suas razões',
      'Ensinar honestidade aos filhos, mas agir de modo desonesto',
      'Corrigir os filhos com amor e paciência',
      'Orar com os filhos e incentivá-los a buscar a Deus',
      'Tratar os filhos com respeito e exigir respeito deles',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral alerta que não adianta ensinar honestidade e agir desonestamente. Os filhos aprendem observando as atitudes dos pais, e o exemplo precisa estar de acordo com aquilo que é ensinado.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Por que estabelecer limites também é uma expressão de amor pelos filhos?',
    options: [
      'Porque permite que os pais controlem todas as escolhas dos filhos durante a vida',
      'Porque evita que os filhos precisem aprender a tomar decisões',
      'Porque ajuda a orientar, corrigir e mostrar os caminhos dos quais precisam se afastar',
      'Porque substitui a necessidade de conversar e ensinar',
      'Porque garante que os filhos nunca cometerão erros',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral ensina que o amor também se revela quando os pais estabelecem limites, orientando os filhos sobre onde devem andar e de quais caminhos precisam se afastar.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Segundo a pastoral, quais características são necessárias para ensinar uma criança?',
    options: [
      'Paciência, presença e perseverança',
      'Autoridade, distância e exigência constante',
      'Recursos financeiros, disciplina rígida e reconhecimento',
      'Conhecimento escolar, independência e competitividade',
      'Resultados imediatos, obediência absoluta e ausência de conflitos',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral afirma que ensinar uma criança exige paciência, presença e perseverança. Os resultados nem sempre aparecem imediatamente, mas os pais devem continuar ensinando com fidelidade.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Qual é a principal implicação de os filhos aprenderem muito pelo que observam?',
    options: [
      'Que os pais precisam apenas ensinar regras claras, sem se preocupar com suas próprias atitudes',
      'Que o ensino verbal é desnecessário quando os filhos são pequenos',
      'Que somente os comportamentos dos pais fora de casa influenciam a formação dos filhos',
      'Que cada atitude dos pais comunica uma mensagem e deve ser coerente com os valores ensinados',
      'Que os filhos aprendem corretamente apenas por meio de exemplos, sem precisar de instrução',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral ressalta que as crianças aprendem muito mais do que apenas escutam. Por isso, cada atitude dos pais comunica uma mensagem, e o exemplo deve acompanhar a instrução.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'O que a pastoral ensina sobre o tempo necessário para perceber os resultados da educação dos filhos?',
    options: [
      'Que os resultados devem aparecer imediatamente quando os pais ensinam corretamente',
      'Que a ausência de resultados rápidos demonstra que a instrução não funcionou',
      'Que os pais devem interromper a correção quando os filhos não mudarem rapidamente',
      'Que a formação dos filhos depende exclusivamente das decisões tomadas na vida adulta',
      'Que os resultados podem demorar, mas os pais devem perseverar no ensino fiel e no exemplo',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral reconhece que nem sempre os resultados aparecem imediatamente. Ainda assim, os pais são chamados a perseverar, confiando que a semente plantada com fidelidade produzirá frutos no tempo certo.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual afirmação melhor resume a mensagem central da pastoral “ENSINAR É CAMINHAR JUNTO”?',
    options: [
      'A formação espiritual dos filhos deve ser transferida à igreja, que possui mais conhecimento bíblico',
      'Os pais devem ensinar desde cedo, estabelecer limites e acompanhar a instrução com um exemplo coerente, conduzindo os filhos a Cristo',
      'O mais importante na educação cristã é exigir obediência, independentemente da maneira como os pais vivem',
      'Os filhos devem aprender valores somente quando tiverem maturidade para compreender suas responsabilidades',
      'O sucesso na educação cristã é medido pela rapidez com que os filhos demonstram mudanças de comportamento',
    ],
    correctAnswer: 1,
    explanation: 'A mensagem central é que os pais devem assumir a responsabilidade de ensinar os filhos desde cedo, caminhando ao lado deles e demonstrando, por suas atitudes, os valores que desejam transmitir. O objetivo é conduzi-los, pelo ensino e pelo exemplo, aos pés de Cristo.',
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
