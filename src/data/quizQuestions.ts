import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual dos três atos preparatórios é o último antes do ministério público de Jesus, segundo a pastoral?',
    options: ['Batismo de Jesus', 'Entrada triunfal em Jerusalém', 'Ceia pascal', 'Tentação de Jesus'],
    correctAnswer: 3,
    explanation: 'A pastoral afirma que a tentação de Jesus é “o último dos três atos preparatórios” para o Seu ministério terreno. Em Marcos, a sequência destacada é: vinda de João, batismo de Jesus e, por fim, a tentação no deserto. Esse terceiro ato, portanto, encerra o ciclo de preparação com uma prova em que Jesus, impelido pelo Espírito, enfrenta o estratagema do maligno por quarenta dias e sai vitorioso pela Palavra e pelo Espírito. As opções “batismo”, “entrada triunfal” e “ceia” pertencem a momentos distintos do ministério e não são apresentadas como o último ato preparatório no texto.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Segundo a pastoral, por quantos dias Jesus esteve em tentação no deserto?',
    options: ['30 dias', '40 dias', '7 dias', '12 dias'],
    correctAnswer: 1,
    explanation: 'O texto diz explicitamente: “Durante quarenta dias, Jesus enfrentou a tentação; embora enfraquecido em Seu corpo, saiu vitorioso...”. A menção aos 40 dias reforça a relação tipológica com Israel (quarenta anos no deserto), destacando como Jesus obedece onde Israel falhou. As demais durações (30, 7 ou 12) não aparecem no conteúdo da pastoral, e a escolha correta é fundamentada na afirmação literal do texto.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'No relato da pastoral, o que sustenta a vitória de Jesus na tentação?',
    options: ['Apoio político de líderes religiosos', 'Provisão miraculosa de pão', 'A ação do Espírito e a Palavra de Deus', 'Exército de anjos com armas'],
    correctAnswer: 2,
    explanation: 'A pastoral diz que Jesus “saiu vitorioso, fortalecido pelo Espírito e pela Palavra de Deus”. Essa dupla ênfase mostra o fundamento da vitória: dependência do Espírito Santo e fidelidade à Escritura. As demais alternativas (apoio político, pão miraculoso como base, ou exército angelical) não são citadas como causa ou meio da vitória no texto; a resposta correta reproduz exatamente a fonte.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'O que significa Jesus como “Segundo Adão”, conforme a pastoral?',
    options: [
      'Que Ele repete a desobediência do primeiro Adão',
      'Que Ele obedece plenamente, cumprindo o Pacto de Obras em nosso lugar',
      'Que Ele substitui a criação original',
      'Que Ele rejeita qualquer referência à Lei',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral explica: “O primeiro Adão desobedeceu... Em contraste, Jesus, obediente a Deus em todos os momentos, conquistou o direito à justiça e à vida eterna... cumprindo o Pacto de Obras em nosso lugar.” Logo, “Segundo Adão” significa obediência plena vicária, garantindo justiça e vida aos representados. As alternativas que sugerem repetição da desobediência, substituição da criação ou rejeição da Lei não refletem o ensino do texto.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Como Jesus se mostra “Verdadeiro Israel” nos quarenta dias, segundo a pastoral?',
    options: [
      'Buscando pão como prioridade suprema',
      'Testando a Deus para garantia imediata',
      'Adotando práticas idólatras aceitas socialmente',
      'Afirmando que a Palavra de Deus é superior ao pão, recusando testar a Deus e rejeitando idolatria',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral contrasta Israel (quarenta anos) com Jesus (quarenta dias). Israel murmurou por comida, testou a Deus e cultuou ídolos; Jesus declarou a superioridade da Palavra sobre o pão, recusou-se a provar o Senhor e não se curvou diante de Satanás. A resposta correta reúne os três elementos positivos. As alternativas incorretas espelham justamente as falhas de Israel, negadas pela obediência de Cristo.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Por que Jesus é qualificado como “Sumo Sacerdote plenamente compassivo” na pastoral?',
    options: [
      'Porque nunca experimentou pressões humanas',
      'Porque foi tentado em todas as coisas e venceu, conhecendo a pressão da tentação',
      'Porque atuou somente no templo',
      'Porque não precisou interceder por ninguém',
    ],
    correctAnswer: 1,
    explanation: 'O texto afirma que sua compaixão “não é meramente teórica, mas fundamentada em Sua experiência humana real” e que “conhece a pressão da tentação”. Ao vencer em tudo, Ele torna-se o intercessor perfeito para os que lutam contra o pecado. As alternativas que negam a experiência, reduzem o ofício ao templo ou negam a intercessão contrariam diretamente o argumento da pastoral.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 7,
    question: 'Qual leitura tipológica melhor integra os 40 anos de Israel e os 40 dias de Jesus no deserto?',
    options: [
      'Israel é paradigma suficiente; Jesus apenas replica o cenário',
      'Oséias 11:1 invalida qualquer conexão com o deserto',
      'Israel falha em comida, teste e idolatria; Jesus obedece onde Israel falhou, confirmando a missão como Verdadeiro Israel',
      'A tipologia é irrelevante para a pastoral',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral explicita o paralelismo: Israel, “filho de Deus”, quarenta anos no deserto — murmurou por comida, testou a Deus, cultuou ídolos. Jesus, quarenta dias — declara Palavra superior ao pão, recusa testar o Senhor, rejeita adoração ao maligno. Essa estrutura tipológica mostra a função representativa de Cristo: Ele encarna o “Verdadeiro Israel”, obedecendo e vencendo onde o povo falhou. Assim, a tentação não é mera repetição cênica, mas demonstração teológica de cumprimento e correção da história de Israel em Jesus.',
    difficulty: 'hard',
  },
  {
    id: 8,
    question: 'Como se relacionam, na pastoral, “Segundo Adão” e “Sumo Sacerdote compassivo” para a nossa salvação?',
    options: [
      'São títulos decorativos sem efeito soteriológico',
      'Ambos indicam derrota diante da tentação',
      'Expressam obediência vicária (justiça e vida) e qualificação empática para interceder por tentados',
      'Negam a necessidade de aproximação confiante a Cristo',
    ],
    correctAnswer: 2,
    explanation: '“Segundo Adão” comunica a obediência representativa que conquista justiça e vida eterna; “Sumo Sacerdote compassivo” comunica a capacidade de ajudar os tentados por conhecer a pressão da tentação. Juntas, as duas categorias apresentam Cristo como garantia objetiva (obra perfeita) e ajuda subjetiva (intercessão compassiva). A pastoral culmina no convite: “Acheguemo-nos, portanto, a Ele...”, mostrando que tais títulos não são ornamentais, mas fundamentos pastorais para fé e aproximação confiante.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Qual aplicação final a pastoral exige dos leitores diante da vitória de Jesus na tentação?',
    options: [
      'Autossuficiência moral sem intercessor',
      'Evitar reflexão sobre tentação',
      'Afastar-se do Senhor por reverência',
      'Achegar-se a Cristo como Senhor e Salvador, confiando em sua compaixão e vitória',
    ],
    correctAnswer: 3,
    explanation: 'O texto conclui: “Acheguemo-nos, portanto, a Ele como nosso Senhor e Salvador.” Essa aplicação deriva de toda a argumentação: Jesus vence como Segundo Adão, como Verdadeiro Israel e como Sumo Sacerdote, tornando-se o intercessor perfeito. Logo, a resposta adequada não é autossuficiência, fuga ou formalismo, mas aproximação confiante ao Cristo vencedor, que conhece nossas lutas e nos socorre. A alternativa correta reproduz esse chamado explícito e fundamentado.',
    difficulty: 'hard',
  },
];
