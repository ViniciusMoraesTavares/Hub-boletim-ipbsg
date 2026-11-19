import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual passagem bíblica fundamenta a pastoral “Quando a lei nos conduz a Cristo”?',
    options: [
      'Marcos 9.42-50',
      'Marcos 10.17-27',
      'Mateus 5.1-12',
      'Lucas 15.11-32',
      'João 3.1-21',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral é fundamentada em Marcos 10.17-27, passagem que apresenta o encontro de Jesus com um homem rico que pergunta o que deve fazer para herdar a vida eterna.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Como o homem que se aproximou de Jesus se apresentava?',
    options: [
      'Como alguém que desconhecia os mandamentos e desejava aprender a lei',
      'Como um homem pobre que buscava ajuda financeira',
      'Como alguém que já havia abandonado sua riqueza para seguir a Jesus',
      'Como um homem moralmente respeitado, rico e que afirmava guardar os mandamentos desde a juventude',
      'Como um discípulo que desejava ensinar Jesus sobre a vida eterna',
    ],
    correctAnswer: 3,
    explanation: 'O homem possuía riquezas, era moralmente respeitado e afirmava guardar os mandamentos desde a juventude. Apesar disso, Jesus revelou que ainda havia algo fundamental em seu coração que precisava ser confrontado.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Segundo a pastoral, qual era o principal problema revelado no coração daquele homem?',
    options: [
      'Sua confiança na própria obediência e em suas riquezas, em vez de confiar plenamente em Deus',
      'Sua falta de conhecimento sobre os mandamentos de Deus',
      'Sua dificuldade em compreender os ensinamentos dos profetas',
      'Sua ausência de reconhecimento diante das autoridades religiosas',
      'Sua incapacidade de acumular riquezas suficientes para viver bem',
    ],
    correctAnswer: 0,
    explanation: 'O problema não era simplesmente possuir riquezas, mas permitir que elas ocupassem o lugar de Deus. O homem também confiava em sua própria obediência, como se pudesse conquistar a vida eterna por seus méritos.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Qual é a função da lei de Deus apresentada na pastoral?',
    options: [
      'Garantir que pessoas moralmente corretas conquistem a vida eterna',
      'Oferecer uma lista de regras que torna desnecessária a fé em Cristo',
      'Demonstrar que o pecado é apenas um problema de comportamento externo',
      'Estabelecer diferentes caminhos de salvação conforme o esforço de cada pessoa',
      'Revelar o pecado, confrontar a autoconfiança humana e mostrar nossa incapacidade de salvar a nós mesmos',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral apresenta a lei como um espelho que revela o pecado e desmonta a confiança humana na própria capacidade de alcançar a salvação. Sua função é mostrar nossa necessidade de Cristo.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'O que Jesus quis ensinar ao utilizar a imagem do camelo passando pelo fundo de uma agulha?',
    options: [
      'Que pessoas ricas precisam apenas fazer doações para entrar no Reino de Deus',
      'Que a salvação é impossível de ser alcançada pelo esforço humano',
      'Que somente pessoas pobres podem receber a vida eterna',
      'Que o cumprimento rigoroso dos mandamentos é suficiente para a salvação',
      'Que a entrada no Reino depende da posição social e da influência de cada pessoa',
    ],
    correctAnswer: 1,
    explanation: 'A imagem do camelo e do fundo de uma agulha enfatiza a impossibilidade humana de conquistar a salvação por seus próprios esforços. Jesus conclui que aquilo que é impossível aos homens é possível para Deus.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Segundo a pastoral, por que a moralidade externa daquele homem não era suficiente?',
    options: [
      'Porque obedecer aos mandamentos não possui qualquer importância para a vida cristã',
      'Porque somente pessoas sem riquezas conseguem obedecer verdadeiramente a Deus',
      'Porque suas boas ações eram suficientes, mas ele precisava de mais reconhecimento público',
      'Porque sua aparência de obediência não revelava um coração inteiramente dedicado a Deus',
      'Porque Jesus ensinou que todos os mandamentos deveriam ser abandonados',
    ],
    correctAnswer: 3,
    explanation: 'Embora o homem afirmasse guardar os mandamentos, seu apego às riquezas revelou que sua confiança e seu amor não estavam inteiramente em Deus. A obediência externa não substitui uma vida de verdadeira dependência do Senhor.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Qual deve ser a motivação da obediência cristã, de acordo com a pastoral?',
    options: [
      'Conquistar o favor de Deus por meio de boas obras e esforço pessoal',
      'Demonstrar superioridade moral em relação às pessoas que não seguem a fé',
      'Responder com gratidão ao amor que já recebemos de Deus em Cristo',
      'Garantir que Deus conceda prosperidade e estabilidade financeira',
      'Evitar qualquer dificuldade ou sofrimento durante a vida cristã',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral ensina que nossa obediência não deve ser uma tentativa de comprar o amor de Deus. Ela é uma resposta agradecida ao amor recebido em Cristo, que nos salvou sem que pudéssemos conquistar essa salvação.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Qual é a relação entre a lei de Deus e a obra de Cristo apresentada na pastoral?',
    options: [
      'A lei revela o pecado e a incapacidade humana de salvar-se, conduzindo-nos à necessidade de Cristo, que cumpriu perfeitamente a vontade do Pai',
      'A lei oferece salvação aos que conseguem cumpri-la, enquanto Cristo atua apenas como exemplo de comportamento',
      'A lei e a obra de Cristo representam caminhos independentes pelos quais podemos alcançar a vida eterna',
      'A lei perdeu sua importância porque Cristo ensinou que a obediência não tem valor para os cristãos',
      'A lei revela o pecado, mas a salvação continua dependendo principalmente da capacidade humana de mudar de comportamento',
    ],
    correctAnswer: 0,
    explanation: 'A lei funciona como um espelho que revela nossa condição pecaminosa e mostra que não podemos salvar a nós mesmos. Cristo, diferentemente de nós, cumpriu perfeitamente a vontade do Pai e entregou sua vida para salvar pecadores.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Por que a pastoral afirma que o problema do homem rico não era simplesmente possuir riquezas?',
    options: [
      'Porque a riqueza é sempre uma bênção que demonstra a aprovação de Deus',
      'Porque Jesus ensinou que os bens materiais não possuem qualquer influência sobre o coração humano',
      'Porque a pobreza, por si só, garante uma relação correta com Deus',
      'Porque o homem poderia conservar todas as suas riquezas desde que continuasse cumprindo os mandamentos externamente',
      'Porque o problema estava em permitir que as riquezas ocupassem o lugar de Deus e se tornassem objeto de sua confiança e amor',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral não afirma que possuir bens materiais seja, por si só, o problema. O perigo está em transformar as riquezas em fonte de segurança e em algo que ocupa o lugar que pertence somente a Deus.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual afirmação melhor resume a mensagem central da pastoral “Quando a lei nos conduz a Cristo”?',
    options: [
      'A vida eterna é uma recompensa concedida às pessoas que conseguem manter uma conduta moral suficientemente boa',
      'A lei revela nossa incapacidade de salvar a nós mesmos, enquanto Cristo, por sua perfeita obediência e sacrifício, nos oferece a salvação e se torna nosso maior tesouro',
      'A salvação depende da combinação entre boas obras, riquezas utilizadas corretamente e conhecimento dos mandamentos',
      'A obediência cristã é o preço que precisamos pagar para receber o perdão e conquistar o amor de Deus',
      'O principal ensinamento do encontro de Jesus com o homem rico é que todas as pessoas precisam abandonar qualquer bem material para serem salvas',
    ],
    correctAnswer: 1,
    explanation: 'A mensagem central é que não podemos conquistar a salvação por nossa obediência ou por nossos próprios esforços. A lei revela nossa necessidade de um Salvador, e somente Cristo cumpriu perfeitamente a vontade de Deus e entregou sua vida por nós. Nele recebemos perdão, vida eterna e o maior tesouro: a presença de Deus.',
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
