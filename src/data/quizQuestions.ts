import { QuizQuestion } from '../types';

// Quiz baseado na pastoral "O AMOR QUE VAI ATÉ A CRUZ"
// Mantida a estrutura e tipagem do arquivo para compatibilidade
export const quizQuestions: QuizQuestion[] = [
  // Básico
  {
    id: 1,
    question: 'Segundo a pastoral, como é descrito o amor verdadeiro?',
    options: [
      'Apenas um sentimento intenso.',
      'Proposital e operoso, demonstrado em atos incondicionais.',
      'Uma emoção passageira.',
      'Uma ideia filosófica abstrata.',
    ],
    correctAnswer: 1,
    explanation:
      'A pastoral afirma: "O amor verdadeiro é proposital e operoso, muito além de um sentimento é demonstrado em atos incondicionais." (parágrafo 1).',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Qual exemplo supremo de amor a pastoral manda olhar?',
    options: [
      'Ao templo e seus rituais.',
      'À cruz de Cristo.',
      'Aos profetas do Antigo Testamento.',
      'À igreja primitiva.',
    ],
    correctAnswer: 1,
    explanation:
      'O texto orienta: "Se você quer um verdadeiro exemplo de amor olhe para a cruz de Cristo." (parágrafo 1).',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Qual propósito de vida é atribuído a Cristo na pastoral?',
    options: [
      'Ensinar bons costumes.',
      'Nascer para morrer.',
      'Fundar uma instituição humana.',
      'Ser um mártir do sistema.',
    ],
    correctAnswer: 1,
    explanation:
      'A pastoral diz: "Cristo nasceu para morrer" e descreve sua entrega até a cruz (parágrafo 2).',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'Qual antítese doutrinária aparece no texto sobre a encarnação?',
    options: [
      'Sendo homem se fez Deus.',
      'Sendo Deus se fez homem.',
      'Sendo anjo se fez homem.',
      'Sendo profeta se fez rei.',
    ],
    correctAnswer: 1,
    explanation:
      'No parágrafo 2: "Sendo Deus se fez homem; sendo senhor, se fez servo; sendo santo, se fez pecado; sendo bendito se fez maldição".',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'Que atitude Cristo escolheu diante do sofrimento segundo a pastoral?',
    options: [
      'Defender-se com poder e sinais.',
      'Calou a si mesmo como ovelha muda.',
      'Convocou exércitos celestiais.',
      'Fugiu para evitar a cruz.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 2: "tendo o poder de calar o céu e o mar escolheu calar a si mesmo e como ovelha muda ... não abriu a boca".',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'Segundo a pastoral, Cristo foi vítima do sistema?',
    options: [
      'Sim, foi pego pelos líderes religiosos e políticos.',
      'Não, foi intencionalmente para a cruz.',
      'Sim, foi surpreendido no Getsêmani.',
      'Parcialmente, por causa de Judas.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 3: "Ele não foi vítima do sistema ... Ele foi intencionalmente para a cruz".',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'Por qual motivo o Pai entregou o Filho, segundo o texto?',
    options: [
      'Por justiça apenas.',
      'Por amor.',
      'Por necessidade histórica.',
      'Por pressão do povo.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 3: "ele foi porque o Pai o entregou por amor."',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'Quais dimensões do sofrimento Cristo suportou na cruz?',
    options: [
      'Mental, econômica e política.',
      'Física, moral e espiritual.',
      'Social, cultural e intelectual.',
      'Psicológica, financeira e material.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 4: "sofrimento físico ... o sofrimento moral ... o sofrimento espiritual".',
    difficulty: 'easy',
  },

  // Intermediário
  {
    id: 9,
    question: 'O que significa a expressão "matou a morte" no texto?',
    options: [
      'Que negou a realidade da morte.',
      'Que venceu a morte, removendo seu aguilhão.',
      'Que adiou a morte para outro tempo.',
      'Que não experimentou a morte física.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 5: "através da sua morte na cruz ele matou a morte, rompendo seus grilhões e retirando o seu aguilhão".',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'Qual obra Cristo realizou por seu sangue, segundo a pastoral?',
    options: [
      'Apenas um exemplo moral.',
      'Redimiu e comprou-nos, fazendo-nos povo de Deus.',
      'Conquistou poder político.',
      'Estabeleceu leis civis.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 5: "Ele nos remiu, comprou-nos com o seu sangue fazendo de nós o povo de Deus."',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'Qual é o chamado direcionado aos crentes no final da pastoral?',
    options: [
      'Evitar qualquer sofrimento.',
      'Tomar a nossa cruz e seguir a Cristo.',
      'Buscar sucesso terreno.',
      'Imitar líderes políticos.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 5: "Somos chamados a também tomar a nossa cruz e seguir a Cristo".',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'A expressão "ovelha muda" indica que postura de Cristo?',
    options: [
      'Rebeldia contra os opressores.',
      'Submissão silenciosa e voluntária.',
      'Astúcia para escapar.',
      'Indiferença ao sofrimento.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 2: "como ovelha muda diante do seu tosquiador não abriu a boca" — postura de submissão e entrega.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'Que eventos não surpreenderam Jesus segundo a pastoral?',
    options: [
      'A prisão e a negação de Pedro.',
      'Os guardas no Getsêmani, a traição de Judas e o negar de Pedro.',
      'A coroação real.',
      'A aclamação popular em Jerusalém.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 3: "Não foi ele surpreendido pelos guardas no Getsêmani, pela traição de Judas ou pelo negar de Pedro."',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'As antíteses "sendo santo se fez pecado; sendo bendito se fez maldição" apontam para qual doutrina?',
    options: [
      'Teologia da prosperidade.',
      'Substituição vicária e expiação.',
      'Deificação humana.',
      'Racionalismo ético.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 2: As antíteses expressam a obra substitutiva de Cristo, tomando sobre si o pecado e a maldição por nós.',
    difficulty: 'medium',
  },

  // Avançado
  {
    id: 15,
    question: 'Em termos de fundamentos teológicos, qual síntese melhor expressa a obra da cruz no texto?',
    options: [
      'Cristo vence apenas sofrimentos humanos.',
      'Cristo expia, redime e derrota a morte em nosso favor.',
      'Cristo apenas ensina moral elevada.',
      'Cristo inaugura reformas sociais.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafos 4 e 5: sofrimento pleno (físico, moral, espiritual) e efeitos: "matou a morte", "nos remiu" e "comprou-nos".',
    difficulty: 'hard',
  },
  {
    id: 16,
    question: 'Quanto aos objetivos e missão, qual é a finalidade explícita da ida de Cristo à cruz?',
    options: [
      'Provar sua inocência pública.',
      'Ir pelos nossos pecados e formar o povo de Deus.',
      'Conquistar Jerusalém politicamente.',
      'Evitar a perseguição religiosa.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 3 e 5: "assim o fez pelos nossos pecados" e "comprou-nos ... fazendo de nós o povo de Deus".',
    difficulty: 'hard',
  },
  {
    id: 17,
    question: 'A “estrutura organizacional” do sofrimento apresentada indica o que sobre sua abrangência?',
    options: [
      'Que foi parcial e temporária.',
      'Que alcança corpo, reputação e relação com o Pai.',
      'Que foi apenas física.',
      'Que foi apenas espiritual.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 4 organiza o sofrimento em três dimensões: físico, moral (rejeição) e espiritual (desamparo), mostrando sua total abrangência.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'Quais “metodologias de atuação” emergem do texto sobre a conduta de Jesus?',
    options: [
      'Militarização e confronto.',
      'Intencionalidade, auto-negação, silêncio e obediência.',
      'Marketing e persuasão.',
      'Negociação política.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafos 2 e 3: escolha consciente de calar, ir intencionalmente à cruz e obedecer por amor, revelando método de entrega.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'Quem é o “público-alvo” diretamente afetado e convocado no texto?',
    options: [
      'A elite religiosa.',
      'Os remidos, o povo de Deus, chamados a tomar a cruz.',
      'Os governantes romanos.',
      'Os filósofos gregos.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 5: "Ele nos remiu, comprou-nos ... fazendo de nós o povo de Deus" e "Somos chamados a também tomar a nossa cruz".',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'Qual contraste o texto estabelece sobre a agência de Cristo diante dos eventos?',
    options: [
      'Agência passiva e vítima do sistema.',
      'Agência soberana e intencional rumo à cruz.',
      'Agência manipulada por Judas.',
      'Agência dependente do povo.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 3: "Ele não foi vítima do sistema ... Ele foi intencionalmente para a cruz" — agência ativa e voluntária.',
    difficulty: 'hard',
  },
];