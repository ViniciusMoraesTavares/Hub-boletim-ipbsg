import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual passagem bíblica fundamenta a pastoral sobre a responsabilidade cristã de evitar o pecado e preservar a fé?',
    options: [
      'Mateus 5.13-16',
      'Marcos 9.42-50',
      'Lucas 15.11-32',
      'João 10.1-18',
      'Romanos 12.1-8',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral é fundamentada em Marcos 9.42-50, passagem em que Jesus ensina sobre a responsabilidade de não fazer tropeçar os pequeninos, a seriedade do pecado, a renúncia e a importância de preservar o sabor do evangelho.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'O que Jesus ensina ao utilizar a imagem de uma pedra de moinho lançada ao mar?',
    options: [
      'Que devemos evitar qualquer tipo de relacionamento com pessoas que ainda não conhecem a Deus',
      'Que somente os líderes religiosos são responsáveis pela vida espiritual dos outros',
      'Que os pecados cometidos em público são mais graves do que os cometidos em particular',
      'Que fazer alguém tropeçar na fé é algo extremamente grave diante de Deus',
      'Que a fé verdadeira depende exclusivamente da influência de outras pessoas',
    ],
    correctAnswer: 3,
    explanation: 'Jesus utiliza a imagem da pedra de moinho para demonstrar a gravidade de levar alguém a tropeçar na fé. Somos responsáveis pela influência que exercemos sobre outras pessoas, especialmente sobre os pequeninos que creem nele.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Quando Jesus fala sobre cortar a mão, o pé ou arrancar o olho que leva ao pecado, qual é o verdadeiro ensinamento?',
    options: [
      'Que devemos levar o pecado tão a sério a ponto de renunciar àquilo que nos conduz a ele',
      'Que o corpo humano é a origem de todo pecado e deve ser castigado',
      'Que somente os pecados praticados fisicamente precisam ser abandonados',
      'Que a mutilação do corpo é necessária para alcançar a salvação',
      'Que podemos continuar praticando determinados pecados desde que não prejudiquemos outras pessoas',
    ],
    correctAnswer: 0,
    explanation: 'Jesus utiliza uma linguagem radical para ensinar a necessidade de tratar o pecado com seriedade. Ele não ordena a mutilação física, mas ensina que devemos abandonar qualquer hábito, relacionamento ou prática que nos afaste de Deus.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Segundo a pastoral, qual deve ser nossa atitude diante de hábitos, relacionamentos ou ambientes que nos afastam de Deus?',
    options: [
      'Aprender a conviver com eles, desde que não sejam percebidos pelas outras pessoas',
      'Manter essas coisas, pois a graça de Deus torna desnecessário abandonar o pecado',
      'Esperar que desapareçam naturalmente, sem precisar tomar decisões',
      'Evitar apenas os ambientes, pois hábitos e relacionamentos não influenciam nossa vida espiritual',
      'Renunciar a essas coisas, reconhecendo que a comunhão com Deus é mais importante',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral destaca que é melhor abrir mão de qualquer coisa que nos afaste de Deus do que conservar aquilo que alimenta o pecado. A renúncia demonstra que levamos a sério nossa comunhão com o Senhor.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Qual é a relação entre a salvação pela graça e o abandono do pecado, segundo a pastoral?',
    options: [
      'A graça permite que o cristão continue no pecado sem precisar se arrepender',
      'A graça verdadeira não nos ensina a amar o pecado, mas nos conduz ao arrependimento e à renúncia',
      'O abandono do pecado é o preço que precisamos pagar para conquistar a salvação',
      'A salvação pela graça elimina a necessidade de buscar uma vida de santidade',
      'Somente aqueles que nunca cometem pecados podem experimentar a graça de Deus',
    ],
    correctAnswer: 1,
    explanation: 'A salvação é pela graça, e não pelas obras humanas. Entretanto, a graça verdadeira transforma a vida do cristão, conduzindo-o ao arrependimento e ao abandono do pecado, em vez de servir como justificativa para continuar nele.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Na imagem utilizada por Jesus, qual é o significado do sal na vida cristã, conforme a pastoral?',
    options: [
      'Representa a capacidade humana de conquistar a salvação por meio de boas obras',
      'Simboliza o isolamento dos cristãos em relação à sociedade',
      'Representa a influência preservadora da fé, que impede a corrupção e mantém o testemunho cristão',
      'Indica que o sofrimento é suficiente para apagar os pecados de uma pessoa',
      'Representa apenas a participação dos cristãos nas atividades da igreja',
    ],
    correctAnswer: 2,
    explanation: 'O sal é apresentado como uma imagem de preservação e sabor. A pastoral aplica essa figura à vida cristã, destacando a importância de preservar a fé, buscar a santidade e impedir que sejamos corrompidos pelo mundo.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'O que Jesus quer ensinar ao afirmar que cada um será salgado com fogo?',
    options: [
      'Que todos os cristãos precisam passar pelo mesmo sofrimento físico para alcançar a salvação',
      'Que as provações tornam desnecessária a leitura e a obediência à Palavra de Deus',
      'Que o sofrimento humano possui poder para substituir o sacrifício de Cristo',
      'Que Deus pode utilizar as provações para purificar a fé, enquanto chama seu povo a permanecer fiel',
      'Que somente aqueles que vivem sem dificuldades conseguem preservar sua fé',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral destaca que as provações podem ser utilizadas por Deus para purificar nossa fé. A imagem do fogo aponta para a seriedade desse processo, enquanto o sal também nos lembra da necessidade de preservar uma vida de fidelidade ao Senhor.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Qual é a relação entre o cuidado com os pequeninos na fé e a responsabilidade pelas nossas atitudes?',
    options: [
      'Nossa liberdade individual deve estar acima de qualquer preocupação com a fé das outras pessoas',
      'Somos responsáveis apenas por ensinar corretamente, não importando o exemplo que damos',
      'A responsabilidade espiritual pertence exclusivamente aos pastores e líderes da igreja',
      'A influência de nossas atitudes é irrelevante quando acreditamos possuir uma fé verdadeira',
      'Devemos avaliar se nossa maneira de viver aproxima as pessoas de Deus ou contribui para que tropecem na fé',
    ],
    correctAnswer: 4,
    explanation: 'Jesus demonstra a gravidade de fazer tropeçar aqueles que creem nele. A pastoral aplica esse ensinamento à nossa vida cotidiana, lembrando que nossas atitudes influenciam outras pessoas e devem contribuir para sua edificação espiritual.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Por que a pastoral afirma que uma vida cristã que perde o sabor do sal se torna espiritualmente insípida?',
    options: [
      'Porque deixa de testemunhar, buscar a santidade e praticar o bem, perdendo sua influência preservadora',
      'Porque deixa de participar de atividades sociais e eventos religiosos',
      'Porque passa a enfrentar provações e dificuldades que enfraquecem sua fé',
      'Porque deixa de possuir conhecimento suficiente sobre todas as doutrinas bíblicas',
      'Porque não consegue convencer todas as pessoas a se tornarem cristãs',
    ],
    correctAnswer: 0,
    explanation: 'O sal que perde o sabor representa uma vida que deixa de cumprir seu papel. A pastoral destaca que o cristão deve testemunhar sua fé, buscar a santidade e praticar o bem, demonstrando uma vida transformada pelo evangelho.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual afirmação melhor resume a mensagem central da pastoral sobre Marcos 9.42-50?',
    options: [
      'A vida cristã consiste em evitar qualquer relacionamento com pessoas que possam influenciar negativamente nossa fé',
      'A graça de Deus torna desnecessária a renúncia, pois o pecado não compromete a comunhão com o Senhor',
      'Devemos levar o pecado a sério, proteger os pequeninos na fé, renunciar ao que nos faz tropeçar e preservar uma vida transformada pelo evangelho',
      'A santidade depende exclusivamente do esforço humano e da capacidade de resistir às tentações',
      'O testemunho cristão está relacionado apenas ao conhecimento bíblico, não às atitudes praticadas diariamente',
    ],
    correctAnswer: 2,
    explanation: 'A mensagem central da pastoral reúne os ensinamentos de Jesus: cuidar dos pequeninos na fé, tratar o pecado com seriedade, renunciar ao que nos afasta de Deus e manter uma vida de santidade, testemunho e paz. A graça que nos salva também nos transforma.',
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