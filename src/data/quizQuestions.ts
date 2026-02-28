import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual termo a pastoral usa para designar o “momento oportuno” determinado por Deus?',
    options: ['Chronos', 'Aion', 'Kairos', 'Kairós', 'Logos'],
    correctAnswer: 3,
    explanation: 'A pastoral afirma que Jesus anuncia o “kairós” — o momento oportuno determinado por Deus para o cumprimento das promessas. A forma grafada com acento (Kairós) corresponde ao mesmo termo grego kairos, destacando o tempo qualitativo da ação divina.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Qual natureza do Reino proclamado por Jesus segundo a pastoral?',
    options: ['Política/militar', 'Espiritual que se estabelece no coração', 'Territorial com fronteiras humanas', 'Econômica e administrativa', 'Cultural e acadêmica'],
    correctAnswer: 1,
    explanation: 'O texto esclarece que o Reino não é político ou militar, mas espiritual, estabelecendo-se primeiramente no coração do homem. Isso confronta expectativas da época e alinha a mensagem ao foco transformacional interior.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Como a pastoral descreve a manifestação do Reino de Deus?',
    options: ['Uma única etapa histórica', 'Eternamente oculta', 'Apenas futura', 'Em duas etapas: “já” e “ainda não”', 'Exclusivamente institucional'],
    correctAnswer: 4,
    explanation: 'A pastoral afirma duas etapas: o “já”, iniciado com a vinda de Cristo, e o “ainda não”, consumado em sua volta gloriosa. Essa tensão escatológica orienta a vida cristã entre o início presente e a consumação futura.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'O que caracteriza o arrependimento bíblico conforme a pastoral?',
    options: [
      'Remorso emocional passageiro',
      'Mudança radical de mente e direção, abandonando rebelião e pecados',
      'Autopunição ritual',
      'Negação de responsabilidade pessoal',
      'Adaptação social sem transformação',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral define arrependimento como metanoia: mudança profunda de mente e rumo, abandonando a rebelião contra Deus e os pecados. Vai além de remorso; implica retorno pela graça à vontade do Pai.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Qual definição de fé a pastoral apresenta?',
    options: [
      'Concordância intelectual com fatos históricos',
      'Confiança total em Jesus como Messias e Filho de Deus',
      'Esforço humano para alcançar mérito',
      'Experiência mística sem conteúdo',
      'Otimismo religioso geral',
    ],
    correctAnswer: 2,
    explanation: 'Fé, segundo a pastoral, não é mero assentimento intelectual; é confiar totalmente em Jesus e descansar na obra completa de Cristo na cruz, reconhecendo-o como Messias e Filho de Deus.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Quais são as duas condições necessárias para entrar no Reino, segundo a pastoral?',
    options: [
      'Jejum e caridade',
      'Arrependimento e fé',
      'Conhecimento e tradição',
      'Moralidade e cultura',
      'Experiência e pertença institucional',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral apresenta duas condições centrais: arrependimento (metanoia, mudança de direção) e fé (confiança total em Jesus). Jejum ou prática cultural não substituem essa resposta ao Evangelho.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Como o “já” e o “ainda não” do Reino afetam a vida cristã segundo a pastoral?',
    options: [
      'Eliminam a necessidade de esperança',
      'Produzem antinomianismo',
      'Convidam a viver frutos presentes enquanto se espera a consumação futura',
      'Exigem retirada do mundo',
      'Tornam a ética irrelevante',
    ],
    correctAnswer: 0,
    explanation: 'A tensão escatológica leva o crente a viver hoje sob o governo de Cristo (humildade, perdão, alegria), aguardando o cumprimento final. Não nega ética nem esperança; conjuga presente e futuro.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Quais frutos visíveis a pastoral aponta como sinais do Reino já habitando em nós?',
    options: ['Prosperidade material e status', 'Humildade, perdão e alegria', 'Ascetismo rigoroso', 'Isolamento social', 'Debate teológico sem prática'],
    correctAnswer: 1,
    explanation: 'O texto conclui que a verdadeira resposta ao Evangelho produz frutos visíveis: humildade, perdão e alegria. Esses sinais manifestam o governo de Cristo no coração e a transformação do caráter.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Que correção a pastoral oferece à expectativa de um Reino político/militar?',
    options: ['Adotar estratégias de poder humano', 'Negar o Reino', 'Afirmar que o Reino é espiritual e começa no coração', 'Postergar toda transformação para o futuro', 'Substituir discipulado por ativismo'],
    correctAnswer: 2,
    explanation: 'A pastoral corrige a expectativa equivocada: o Reino não é político/militar. É espiritual, estabelecido primeiramente no coração, transformando pessoas que vivem sob o senhorio de Cristo.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Teologicamente, como a pastoral relaciona “kairós” e cumprimento das promessas?',
    options: [
      'O kairós é imprevisível e sem relação com promessas',
      'O kairós marca o tempo qualitativo determinado por Deus para cumprir suas promessas',
      'O kairós depende de vontade humana',
      'O kairós elimina o “ainda não” escatológico',
      'O kairós é mero símbolo literário',
    ],
    correctAnswer: 4,
    explanation: 'Segundo a pastoral, o “tempo cumprido” (kairós) indica o momento oportuno em que Deus age para realizar suas promessas. Não depende de mérito humano, nem revoga a tensão do “já/ainda não”.',
    difficulty: 'hard',
  },
  {
    id: 11,
    question: 'Qual correção pastoral se alguém confunde “arrependimento” com mero remorso e “fé” com assentimento intelectual?',
    options: [
      'Aceitar emoções como suficientes',
      'Reduzir o Evangelho a informação',
      'Arrependimento é mudança de direção; fé é confiar totalmente em Cristo e descansar na cruz',
      'Postergar resposta até a consumação',
      'Focar apenas em ética social',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral insiste: arrependimento bíblico é metanoia, e fé é confiança total no Filho, descansando na obra da cruz. Emoções ou mera informação não substituem a resposta integral ao Evangelho.',
    difficulty: 'hard',
  },
];
