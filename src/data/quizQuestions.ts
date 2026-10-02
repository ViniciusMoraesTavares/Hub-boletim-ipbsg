import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual igreja é apresentada na pastoral de Apocalipse 3.14-22?',
    options: [
      'A igreja de Laodiceia',
      'A igreja de Sardes',
      'A igreja de Filadélfia',
      'A igreja de Tiatira',
      'A igreja de Pérgamo',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral é baseada em Apocalipse 3.14-22, passagem em que Jesus dirige uma mensagem à igreja de Laodiceia.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Como os habitantes de Laodiceia se consideravam?',
    options: [
      'Pobres e necessitados',
      'Ricos, abastados e sem necessidade de coisa alguma',
      'Perseguidos e abandonados',
      'Fracos e sem influência',
      'Dependentes dos recursos de outras cidades',
    ],
    correctAnswer: 1,
    explanation: 'Laodiceia dizia: “Estou rico e abastado e não preciso de coisa alguma”. Essa autossuficiência também havia influenciado a vida espiritual da igreja.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Como Cristo enxergava a verdadeira condição espiritual dos laodicenses?',
    options: [
      'Como uma igreja pobre, cega e nua espiritualmente',
      'Como uma igreja rica e espiritualmente madura',
      'Como uma igreja perseguida, mas completamente fiel',
      'Como uma igreja pequena, porém cheia de amor',
      'Como uma igreja forte e comprometida com a missão',
    ],
    correctAnswer: 0,
    explanation: 'Embora Laodiceia se considerasse rica e completa, Cristo mostrava sua verdadeira condição: pobre, cega e nua espiritualmente.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'O que Jesus reprova especialmente na igreja de Laodiceia?',
    options: [
      'A falta de recursos financeiros',
      'A ausência de atividades religiosas',
      'A perseguição sofrida pela igreja',
      'A sua mornidão espiritual',
      'A falta de conhecimento sobre a cidade',
    ],
    correctAnswer: 3,
    explanation: 'Jesus repreende Laodiceia por sua mornidão espiritual. A igreja não assumia uma posição verdadeira diante de Deus e havia perdido seu compromisso e testemunho.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Segundo a pastoral, qual é um dos perigos de se considerar espiritualmente abastado?',
    options: [
      'Aumentar o interesse pela Palavra de Deus',
      'Tornar-se mais disposto a receber correção',
      'Acomodar-se espiritualmente e deixar de reconhecer a própria necessidade de Deus',
      'Desenvolver maior compaixão pelos necessitados',
      'Buscar mais orientação e conselhos',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral destaca que o perigo de se achar abastado é acomodar-se espiritualmente. A pessoa passa a pensar que já sabe o suficiente e deixa de reconhecer sua necessidade de Deus.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Que atitude pode revelar a autossuficiência espiritual mencionada na pastoral?',
    options: [
      'Aceitar humildemente a correção da Palavra',
      'Rejeitar orientação e ouvir apenas conselhos que confirmam as próprias opiniões',
      'Procurar servir aos necessitados',
      'Reconhecer as próprias limitações',
      'Buscar a comunhão com Cristo',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral alerta que a autossuficiência pode levar a pessoa a não aceitar orientação, rejeitar correção e ouvir somente aquilo que confirma suas próprias opiniões.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'O que Jesus aconselhou a igreja de Laodiceia a comprar dele?',
    options: [
      'Prata, roupas coloridas e perfumes',
      'Pães, vinho e azeite',
      'Ouro refinado, vestes brancas e colírio para os olhos',
      'Lã negra, ouro e alimentos',
      'Uma nova casa de oração e instrumentos musicais',
    ],
    correctAnswer: 2,
    explanation: 'Jesus aconselhou Laodiceia a comprar dele ouro refinado, vestes brancas e colírio para os olhos, símbolos relacionados à verdadeira riqueza, pureza e visão espiritual.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Qual é o principal contraste apresentado pela pastoral sobre a riqueza de Laodiceia?',
    options: [
      'A cidade era pobre materialmente, mas rica em conhecimento',
      'A igreja tinha poucos recursos, mas grande influência política',
      'Laodiceia era perseguida externamente, mas não enfrentava problemas internos',
      'Os habitantes eram ricos materialmente, mas sua autossuficiência revelava pobreza espiritual',
      'A igreja possuía muitos membros, mas não tinha nenhum recurso financeiro',
    ],
    correctAnswer: 3,
    explanation: 'O contraste central é entre a riqueza material e a pobreza espiritual. Laodiceia possuía grandes riquezas, mas não conseguia enxergar sua verdadeira necessidade diante de Cristo.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'O que a pastoral ensina sobre a relação entre autossuficiência e testemunho cristão?',
    options: [
      'A autossuficiência pode fazer o coração perder a compaixão, levando a pessoa a não testemunhar, não se importar com os necessitados e pouco se envolver com a missão de Deus',
      'A autossuficiência sempre aumenta o compromisso com a missão de Deus',
      'Quanto mais autossuficiente uma pessoa é, mais facilmente reconhece sua necessidade de Cristo',
      'A autossuficiência afeta apenas a vida financeira, sem consequências espirituais',
      'Uma pessoa autossuficiente tende naturalmente a servir mais aos necessitados',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral mostra que a autossuficiência espiritual pode fazer o coração perder a compaixão. Isso se manifesta na falta de testemunho, no pouco cuidado com os necessitados e no afastamento da missão de Deus.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual afirmação melhor resume a mensagem central da pastoral “QUANDO A RIQUEZA ESCONDE A POBREZA ESPIRITUAL”?',
    options: [
      'A riqueza material é sempre um sinal de aprovação de Deus',
      'O principal objetivo da vida cristã deve ser alcançar estabilidade financeira',
      'Cristo não se importa com a condição espiritual daqueles que estão acomodados',
      'A aparência de prosperidade é mais importante que a comunhão com Cristo',
      'A verdadeira riqueza está em reconhecer nossa necessidade de Cristo, abandonar a soberba, arrepender-nos e viver em sua graça, fé e presença',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral conclui que é melhor sermos encontrados ricos na graça, na fé e na presença de Deus do que parecermos ricos diante das pessoas. Cristo chama os mornos ao arrependimento e à comunhão com ele.',
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
