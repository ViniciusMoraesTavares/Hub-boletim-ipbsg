import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual é a passagem bíblica central citada na pastoral?',
    options: ['Gênesis 22', '2 Reis 4', 'Salmo 23', 'Oséias 11', 'João 3'],
    correctAnswer: 1,
    explanation: 'A pastoral situa o relato em 2 Reis, capítulo 4, no encontro entre o profeta Eliseu e a mulher sunamita. Todo o desenvolvimento teológico e espiritual do texto parte desse episódio específico, tornando 2 Reis 4 a referência bíblica central. As outras passagens não estruturam o conteúdo apresentado.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Qual foi a resposta da sunamita ao ser perguntada por Eliseu sobre como poderia retribuí-la?',
    options: ['“Quero um filho”', '“Preciso de riquezas”', '“Habito no meio do meu povo”', '“Desejo honra pública”', '“Peço cura para meu marido”'],
    correctAnswer: 2,
    explanation: 'A frase “Habito no meio do meu povo” é destacada como uma das declarações mais profundas das Escrituras, por revelar contentamento e gratidão. Ela não lista pedidos; antes, evidencia satisfação com o cuidado de Deus na comunidade onde vive.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Qual era a condição familiar da sunamita descrita no texto?',
    options: ['Viúva com muitos filhos', 'Casada sem filhos, marido idoso', 'Solteira e próspera', 'Casada com filhos pequenos', 'Separada e sem recursos'],
    correctAnswer: 1,
    explanation: 'A pastoral informa que a sunamita não tinha filhos e que a esperança era remota, pois seu marido já era idoso. Esse contexto ressalta o valor cultural da maternidade e, ainda assim, o foco da mulher se mantém em gratidão pelo que possui.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'O que a postura da sunamita ensina sobre contentamento?',
    options: ['Contentamento depende de possuir tudo', 'Contentamento ignora a realidade', 'Contentamento é agradecer pelo que se tem e não lamentar o que não se recebeu', 'Contentamento exige ausência total de problemas', 'Contentamento é resignação amarga'],
    correctAnswer: 2,
    explanation: 'A pastoral enfatiza que a sunamita “olha para o que tem e não para o que não tem”, agradece a Deus e não vive amargurada pelo que não recebeu. Esse é o cerne do contentamento: reconhecer e desfrutar as bênçãos presentes, sem se fixar nas ausências.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Segundo a pastoral, qual é o erro comum que leva à insatisfação espiritual?',
    options: ['Excesso de oração', 'Excesso de trabalho', 'Incapacidade de contar as bênçãos de Deus', 'Busca por conhecimento bíblico', 'Vida comunitária intensa'],
    correctAnswer: 2,
    explanation: 'O texto afirma que “quantas pessoas não conseguem contar as bênçãos de Deus e vivem uma vida insatisfeita”. A raiz apontada é a falta de percepção do cuidado divino, que impede a gratidão e alimenta o vazio.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Como a resposta da sunamita contrasta com expectativas culturais da época?',
    options: ['Ela exige herdeiros imediatamente', 'Ela pede riqueza e status', 'Ela não apresenta pedidos, mesmo sem filhos e com marido idoso', 'Ela reclama da sua sorte', 'Ela abandona sua fé'],
    correctAnswer: 2,
    explanation: 'Na cultura antiga, a maternidade e um herdeiro eram altamente valorizados. Mesmo assim, a sunamita não pede isso ao profeta; sua resposta mostra que sua satisfação não vem do que falta, mas do cuidado de Deus no presente.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Qual ideia teológica é sugerida pelo contraste “abastadas, mas sentem falta” e “cheias de tudo, mas vazias”?',
    options: ['Prosperidade garante plenitude', 'Falta de recursos gera contentamento', 'O vazio humano não é suprido por posses', 'A solução é mais consumo religioso', 'A comunidade resolve todo problema'],
    correctAnswer: 2,
    explanation: 'A pastoral observa o paradoxo de pessoas com muitos bens que ainda sentem falta. O ponto é que posse material não preenche o vazio espiritual; contentamento genuíno vem de reconhecer Deus como fonte de plenitude.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Qual leitura espiritual melhor expressa “Habito no meio do meu povo” no contexto da pastoral?',
    options: ['Apego a status social', 'Indiferença às promessas de Deus', 'Confissão de pertença e gratidão pela provisão divina na comunidade', 'Isolamento espiritual como ideal', 'Busca por recompensa profética'],
    correctAnswer: 2,
    explanation: 'A frase revela pertença, satisfação e gratidão pela vida entre o povo de Deus. Não é pedido por status, isolamento ou recompensa; é reconhecimento de que Deus já supriu, e a comunidade é parte da provisão percebida com fé.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Como o pensamento de Dostoiévski (“um vazio do tamanho de Deus”) se conecta ao ensino da pastoral?',
    options: ['Defende nihilismo', 'Afirma suficiência das riquezas', 'Aponta que apenas Deus preenche o vazio humano', 'Propõe ascetismo extremo', 'Nega valor da comunidade'],
    correctAnswer: 2,
    explanation: 'A citação reforça o diagnóstico espiritual: há um vazio que não se resolve com posses, status ou técnicas; somente Deus o preenche. Isso ecoa o chamado da pastoral à gratidão e ao contentamento em Deus, não nas ausências percebidas.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual aplicação prática a pastoral incentiva diante do que “falta” em nossa vida?',
    options: ['Fixar-se nas carências e reclamar', 'Comparar-se constantemente aos outros', 'Agradecer pelo que Deus já deu, contar as bênçãos e viver contente', 'Buscar soluções exclusivamente materiais', 'Evitar a vida comunitária'],
    correctAnswer: 2,
    explanation: 'A pastoral instrui: olhar para o que se tem, agradecer e não viver amargurado pelo que não recebeu. A prática inclui contar as bênçãos de Deus e desfrutar do que Ele já providenciou, combatendo insatisfação e vazio.',
    difficulty: 'hard',
  },
  {
    id: 11,
    question: 'Qual papel a comunidade (“meu povo”) desempenha no contentamento da sunamita segundo a pastoral?',
    options: ['É irrelevante', 'É obstáculo espiritual', 'É expressão do cuidado de Deus percebido e valorizado', 'É substituto de Deus', 'É mera formalidade social'],
    correctAnswer: 2,
    explanation: 'Ao dizer “Habito no meio do meu povo”, a sunamita valoriza a comunidade como cenário do cuidado divino. Não substitui Deus, mas revela como Deus nos sustenta por meio da vida compartilhada; negar ou minimizar isso seria distorcer o ensinamento.',
    difficulty: 'hard',
  },
];
