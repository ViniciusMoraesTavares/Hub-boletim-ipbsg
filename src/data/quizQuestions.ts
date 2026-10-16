import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual passagem bíblica fundamenta a pastoral “OUVIR O FILHO NO CAMINHO DA CRUZ”?',
    options: [
      'Mateus 5.1-12',
      'João 11.1-16',
      'Marcos 9.1-13',
      'Lucas 15.11-32',
      'Salmos 23.1-6',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral é baseada em Marcos 9.1-13, passagem que apresenta a transfiguração de Jesus e a ordem do Pai: “A ele ouvi”.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Quais discípulos acompanharam Jesus ao monte da transfiguração?',
    options: [
      'Pedro, Tiago e João',
      'Pedro, André e Mateus',
      'João, Filipe e Tomé',
      'Tiago, Judas e André',
      'Pedro, Mateus e Tomé',
    ],
    correctAnswer: 0,
    explanation: 'Pedro, Tiago e João foram os discípulos que acompanharam Jesus e testemunharam sua transfiguração.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Quem apareceu conversando com Jesus durante a transfiguração?',
    options: [
      'Abraão e Isaque',
      'Davi e Salomão',
      'Isaías e Jeremias',
      'Moisés e Elias',
      'Abraão e Moisés',
    ],
    correctAnswer: 3,
    explanation: 'Moisés e Elias apareceram conversando com Jesus. A pastoral destaca que a Lei e os Profetas apontam para Cristo.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'O que Pedro propôs fazer ao presenciar a glória de Jesus no monte?',
    options: [
      'Voltar imediatamente para Jerusalém',
      'Construir três tendas, uma para Jesus, outra para Moisés e outra para Elias',
      'Reunir todos os discípulos para anunciar o acontecimento',
      'Pedir que Jesus realizasse outro milagre',
      'Construir um altar para oferecer sacrifícios',
    ],
    correctAnswer: 1,
    explanation: 'Pedro propôs construir três tendas. Sua reação revela o desejo de permanecer naquele lugar glorioso, embora os discípulos ainda precisassem seguir Jesus no caminho da obediência e da cruz.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Qual foi a declaração do Pai durante a transfiguração?',
    options: [
      'Este é o profeta que eu escolhi; sigam também Moisés e Elias',
      'Este é o rei de Israel; permaneçam neste monte',
      'Este é o meu servo; construam aqui um lugar de adoração',
      'Este é o Filho amado; a ele ouvi',
      'Este é o enviado; não temam o sofrimento',
    ],
    correctAnswer: 3,
    explanation: 'O Pai declarou: “Este é o meu Filho amado; a ele ouvi”. A ordem destaca a autoridade singular de Jesus e a necessidade de ouvir e obedecer à sua palavra.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'O que a pastoral ensina a partir do desaparecimento de Moisés e Elias, quando os discípulos veem somente Jesus?',
    options: [
      'Que Moisés e Elias deixaram de ter importância para a história bíblica',
      'Que a Lei e os Profetas devem ser abandonados pelos cristãos',
      'Que nenhuma experiência, tradição ou autoridade pode ocupar o lugar de Cristo',
      'Que os discípulos deveriam procurar novas experiências extraordinárias',
      'Que Jesus não precisava cumprir as promessas do Antigo Testamento',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral ensina que a Lei e os Profetas apontam para Cristo. Nenhuma experiência, tradição ou autoridade pode ocupar o lugar do Filho de Deus.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Segundo a pastoral, o que significa seguir Jesus depois de uma experiência espiritual marcante?',
    options: [
      'Permanecer buscando experiências extraordinárias para renovar a fé',
      'Seguir o Salvador no cotidiano, com obediência, serviço e perseverança, mesmo em meio ao sofrimento',
      'Evitar situações difíceis para preservar a alegria espiritual',
      'Permanecer afastado das responsabilidades comuns da vida',
      'Buscar a glória presente sem se preocupar com o caminho da cruz',
    ],
    correctAnswer: 1,
    explanation: 'A fé cristã não consiste em buscar apenas experiências extraordinárias, mas em seguir Jesus no caminho cotidiano, confiando nele mesmo quando a glória parece escondida.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Qual é o significado central da transfiguração apresentado pela pastoral em relação ao caminho da cruz?',
    options: [
      'A glória de Jesus confirma que o sofrimento e a cruz fazem parte do caminho estabelecido por Deus para a redenção',
      'A transfiguração demonstra que Jesus abandonaria o sofrimento e estabeleceria seu reino imediatamente',
      'A presença de Moisés e Elias indica que Jesus precisava dividir sua missão com outros profetas',
      'O acontecimento ensina que os cristãos devem evitar o sofrimento para alcançar a glória',
      'A transfiguração foi uma experiência destinada apenas a fortalecer a posição de Pedro entre os discípulos',
    ],
    correctAnswer: 0,
    explanation: 'A glória revelada no monte não anula o caminho da cruz. Ela confirma que o sofrimento e a morte de Jesus fazem parte do plano de Deus para a redenção.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Como a transfiguração fortalece a esperança cristã diante do sofrimento presente?',
    options: [
      'Mostrando que os verdadeiros cristãos não passarão por dificuldades',
      'Ensinando que a glória de Deus só pode ser experimentada nesta vida',
      'Garantindo que toda experiência dolorosa terminará imediatamente em prosperidade material',
      'Revelando que o sofrimento presente não terá a palavra final, pois Cristo morreu, ressuscitou e voltará em glória',
      'Demonstrando que a igreja deve se afastar do mundo até a volta de Jesus',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral ensina que o sofrimento presente não terá a palavra final. O Cristo que morreu e ressuscitou voltará em glória, sustentando a esperança da igreja.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual afirmação melhor resume a mensagem central da pastoral “OUVIR O FILHO NO CAMINHO DA CRUZ”?',
    options: [
      'A vida cristã consiste em permanecer em experiências espirituais extraordinárias e evitar o sofrimento',
      'A glória de Cristo torna desnecessária a obediência durante as dificuldades da vida',
      'A tradição religiosa deve ter a mesma autoridade de Jesus para orientar a igreja',
      'O sofrimento demonstra que Deus deixou de acompanhar aqueles que o seguem',
      'A igreja deve ouvir a Cristo, segui-lo em obediência e perseverar na esperança de sua volta gloriosa, sem se escandalizar com a cruz',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral chama a igreja a ouvir o Filho, seguir sua Palavra no cotidiano, anunciar o evangelho e permanecer fiel mesmo em meio ao sofrimento, aguardando o retorno glorioso de Cristo.',
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
