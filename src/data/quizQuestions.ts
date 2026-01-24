import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Quem é o homem sem pecados que se aproximou para ser batizado por João, segundo a pastoral?',
    options: ['Pedro', 'João Batista', 'Paulo', 'Jesus'],
    correctAnswer: 3,
    explanation: 'A pastoral descreve a cena às margens do Jordão, onde muitos buscavam o batismo de arrependimento confessando pecados e endireitando caminhos. Diferentemente deles, um homem se aproxima sem ter pecados a abandonar: Jesus. Ele não necessita do batismo de arrependimento, pois é o Prometido que batiza com o Espírito Santo. Essa identificação é teologicamente central: o Messias participa do rito não por culpa pessoal, mas para cumprir justiça, iniciar seu ministério sob confirmação divina e vincular-se solidariamente ao povo que veio salvar. Assim, reconhecer “Jesus” como o homem sem pecados evita confundir o ofício de João com a missão do Cristo e destaca a singularidade do batismo de Jesus.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Quais são os três atos preparatórios narrados por Marcos que antecedem o ministério de Cristo?',
    options: [
      'Nascimento, fuga ao Egito, retorno a Nazaré',
      'Escolha dos Doze, primeiro milagre, primeira parábola',
      'Vinda de João, batismo de Jesus, tentação no deserto',
      'Entrada triunfal, ceia pascal, Getsêmani',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral sintetiza Marcos 1 como tríade preparatória: (1) a vinda e pregação de João, que convoca ao arrependimento e prepara o caminho; (2) o batismo de Jesus, em que o Pai e o Espírito confirmam publicamente o Filho; (3) a tentação, onde Jesus demonstra fidelidade sob prova. Esses atos não são ornamentais: formam o alicerce do ministério público, articulando missão, identidade e obediência. Ao respondê-los corretamente, o leitor reconhece o fluxo narrativo e seu sentido: Deus prepara, legitima e treina seu Servo para a obra redentora. As demais alternativas misturam episódios de outros momentos ou de outros evangelhos e não refletem o foco de Marcos 1.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Segundo a pastoral, qual “unção” Jesus recebe no seu batismo?',
    options: [
      'Óleo santo derramado por um sacerdote levita',
      'Água do Jordão acompanhada de incenso',
      'A presença do Espírito Santo que desce como pomba',
      'Tecido consagrado do templo',
    ],
    correctAnswer: 2,
    explanation: 'O texto frisa que Jesus não recebe a unção com óleo como no rito levítico, mas é ungido pelo próprio Espírito Santo, que desce sobre Ele como pomba. Essa distinção é crucial: a consagração de Cristo cumpre e transcende os símbolos da Antiga Aliança. Enquanto o óleo sinalizava consagração em Israel, o Espírito Santo, em Jesus, manifesta a realidade que o óleo apenas prefigurava. Assim, sua unção é pneumatológica e messiânica, autenticando sua missão como Sumo Sacerdote e inaugurador da Nova Aliança. As outras opções descrevem elementos rituais levíticos ou acessórios que não captam a singularidade do evento relatado.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Qual motivo principal explica por que Jesus se submeteu ao batismo de João?',
    options: [
      'Ato de preparação ministerial e consagração sacerdotal',
      'Necessidade pessoal de arrependimento',
      'Obediência às tradições farisaicas',
      'Desejo de popularidade junto às multidões',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral esclarece que o batismo de Jesus não foi por necessidade de arrependimento, mas como início público de seu ministério e consagração sacerdotal. Marcos o apresenta como parte dos três atos preparatórios, e o texto conecta esse gesto às exigências da Lei para consagrados: idade de serviço, lavagem com água e confirmação divina. Assim, o batismo sela o começo de sua missão, sob o endosso do Pai e a unção do Espírito. Alternativas que falam de “arrependimento pessoal”, “tradições farisaicas” ou “popularidade” não correspondem ao foco bíblico-teológico dado pela pastoral, que sublinha justiça, consagração e missão messiânica.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'A pastoral relaciona requisitos da consagração com quais textos da Antiga Aliança?',
    options: [
      'Números 4:3 (idade de 30 anos); Êxodo 29:4–5 (lavagem); Êxodo 28:1 / Hebreus 5:4 (chamado/ confirmação)',
      'Levítico 16 (Dia da Expiação) somente',
      'Deuteronômio 6 (Shema) e Salmos 23',
      'Isaías 58 e Amós 5 sem menção ao sacerdócio',
    ],
    correctAnswer: 0,
    explanation: 'O texto aponta explicitamente três eixos: (1) idade de serviço — 30 anos (Nm 4:3); (2) purificação com água — Êx 29:4–5; (3) chamado e confirmação divina — Êx 28:1 e Hb 5:4. Esses elementos compõem o padrão de consagração, que Jesus cumpre ao iniciar seu ministério. As demais alternativas ou reduzem a questão a um único rito (Levítico 16), ou citam textos de piedade e ética sem foco sacerdotal (Dt 6; Sl 23; Isaías 58; Amós 5). A resposta correta liga o evento do batismo a um arcabouço legal e teológico que o apresenta como consagração sacerdotal em chave cristológica.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'A que ordem sacerdotal Jesus pertence, segundo a pastoral?',
    options: [
      'Levi/ Aarão',
      'Zadok',
      'Melquisedeque',
      'Samuel',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral afirma que Jesus não pertence à ordem dos levitas, mas à ordem de Melquisedeque (Hb 7:11). Teologicamente, isso realça um sacerdócio superior, eterno e não baseado em linhagem levítica. Em Hebreus, Melquisedeque é figura-tipo do sacerdócio de Cristo, caracterizado por justiça, paz e permanência. Essa diferença ajuda a entender por que a consagração de Jesus supera os ritos levíticos: Ele é Sumo Sacerdote perfeito, cuja obra não depende de genealogia terrena, mas de poder indissolúvel de vida. As demais opções citam personagens ou linhas sacerdotais que não se aplicam ao ofício singular do Messias.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Qual contraste a pastoral estabelece entre o batismo de João e o de Jesus?',
    options: [
      'Ambos removem definitivamente o pecado por rito',
      'João é preparatório; Jesus traz o batismo maior, com remoção do pecado e derramamento do Espírito',
      'João é definitivo; Jesus é simbólico',
      'Nenhuma diferença substancial existe',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral apresenta João como preparador: sua prática chama ao arrependimento e aponta para o Messias. Já Jesus realiza o batismo maior e definitivo, associado à remoção do pecado e ao derramamento do Espírito (cf. profecias). Assim, o contraste é escatológico e soteriológico: João indica, Jesus cumpre. Alternativas que igualam os dois ou invertem papéis não refletem o desenvolvimento bíblico-teológico: João nunca pretendeu ser fim último, mas “voz” que prepara o povo, enquanto Cristo é o Sumo Sacerdote que inaugura a Nova Aliança pela obra do Espírito.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Como o batismo e consagração de Jesus “cumpre e supera” a Antiga Aliança segundo a pastoral?',
    options: [
      'Reproduz ritos sem alteração de sentido',
      'Cumpre requisitos legais e manifesta realidade espiritual que os ritos levíticos apenas sombream (Hb 10:1)',
      'Abandona totalmente a simbologia veterotestamentária',
      'Baseia-se em óleo sacerdotal tradicional',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral articula dois movimentos: cumprimento e superação. Jesus cumpre os requisitos de consagração (idade, lavagem, chamado/ confirmação) e, ao mesmo tempo, revela a realidade que esses ritos prefiguravam: unção verdadeira pelo Espírito, sacerdócio eterno segundo Melquisedeque e inauguração da Nova Aliança. Hebreus 10:1 chama os rituais de “sombra” — em Cristo, a “substância” aparece. Assim, não se trata de repetir simbolismos vazios, nem de rejeitar todo o AT, mas de realizar sua finalidade em chave cristológica. As alternativas incorretas ou negam o vínculo com o AT, ou reduzem a consagração à repetição ritual, ou enfatizam óleo quando a unção é pelo Espírito.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Qual implicação hermenêutica a pastoral sugere ao ligar consagração de Jesus e inauguração da Nova Aliança?',
    options: [
      'A Nova Aliança independe de qualquer referência à Antiga',
      'A consagração indica continuidade e culminação: requisitos veterotestamentários projetam-se em cumprimento cristológico',
      'A Nova Aliança é apenas metáfora litúrgica',
      'O batismo é irrelevante para a leitura canônica',
    ],
    correctAnswer: 1,
    explanation: 'Ao conectar requisitos da Antiga Aliança (Nm 4:3; Êx 29:4–5; Êx 28:1; Hb 5:4) à consagração de Jesus, a pastoral propõe leitura canônica de continuidade/ culminação: o AT aponta, o NT realiza em Cristo. Não se trata de independência ou mera metáfora, mas de cumprimento histórico e teológico que inaugura a Nova Aliança sob o Sumo Sacerdote eterno (Hb 7:24–27). O batismo se torna chave hermenêutica para ver a passagem de “sombra” para “substância”, iluminando como práticas antigas foram assumidas e transfiguradas no ministério do Messias. As alternativas incorretas quebram o fio da revelação ou minimizam a densidade do evento.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual mapeamento correto entre elementos de consagração e textos, conforme a pastoral?',
    options: [
      'Idade 30 — Jeremias 31; Lavagem — Levítico 1; Chamado — Isaías 6',
      'Idade 30 — Números 4:3; Lavagem — Êxodo 29:4–5; Chamado/ confirmação — Êxodo 28:1 / Hebreus 5:4',
      'Idade 30 — Salmos 23; Lavagem — Deuteronômio 6; Chamado — Amós 5',
      'Idade 30 — Êxodo 20; Lavagem — Isaías 58; Chamado — Joel 2',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral especifica os textos que moldam o enredo da consagração: a idade de serviço (30 anos) em Números 4:3; a purificação com água em Êxodo 29:4–5; e o chamado/ confirmação divina em Êxodo 28:1, reforçado por Hebreus 5:4. Esse mapeamento mostra que o batismo de Jesus ocorre no horizonte da Lei e dos Profetas, mas com realização superior: a unção é pelo Espírito, o sacerdócio é eterno. As outras combinações citam passagens sem relação direta com consagração sacerdotal, confundindo temas de nova aliança, ética social ou salmos devocionais com requisitos rituais. Assim, a resposta correta alinha exegese e teologia da pastoral.',
    difficulty: 'hard',
  },
];
