import { QuizQuestion } from '../types';

// Quiz baseado na pastoral "Até aqui nos ajudou o SENHOR - 36 Anos"
// Mantida a estrutura e tipagem do arquivo para compatibilidade
export const quizQuestions: QuizQuestion[] = [
  // Básico
  {
    id: 1,
    question: 'Quem, segundo a pastoral, conhece, orienta, defende e habilita a igreja?',
    options: [
      'Os apóstolos.',
      'Cristo.',
      'Os concílios.',
      'A tradição.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 1: Cristo é quem conhece sua igreja, orienta, defende e a habilita para crescer e expandir o Reino.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Qual livro e capítulo são citados na referência à igreja de Filadélfia?',
    options: [
      'João 3.',
      'Apocalipse 3.',
      'Romanos 8.',
      'Atos 2.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 2 cita Apocalipse 3:8 ao lembrar a porta aberta diante da igreja fiel.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Como a pastoral descreve o início da igreja local?',
    options: [
      'Com grande estrutura e muitos recursos.',
      'Com começo humilde em espaços improvisados.',
      'Com apoio governamental.',
      'Com patrocínio internacional.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 2: começo humilde, espaços improvisados, tijolos de fornos desmanchados e mutirões em diversas etapas.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'Qual expressão da carta a Filadélfia é destacada na pastoral?',
    options: [
      '“Porta aberta que ninguém pode fechar”.',
      '“Grande poder e muitos recursos”.',
      '“Não tereis tribulações”.',
      '“Sede exaltados entre as nações”.',
    ],
    correctAnswer: 0,
    explanation:
      'Parágrafo 2: a porta aberta é mencionada como promessa de Cristo à igreja fiel.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'O que significa “tens pouca força” no contexto da pastoral?',
    options: [
      'Fraqueza que impede qualquer obra.',
      'Pequenez humana sustentada por fidelidade a Cristo.',
      'Ausência de fé na comunidade.',
      'Limitação dada por leis humanas.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 2: apesar de pouca força, a igreja guardou a Palavra e não negou o nome de Cristo.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'Qual reconhecimento está estampado no interior da igreja, segundo a pastoral?',
    options: [
      '“Somos fortes e autossuficientes”.',
      '“Até aqui nos ajudou o SENHOR”.',
      '“Vencemos por nossos esforços”.',
      '“Nada nos deterá”.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 3: a frase “ATÉ AQUI NOS AJUDOU O SENHOR” é destacada como reconhecimento público.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'Quais ações atuais a pastoral cita como parte da missão da igreja?',
    options: [
      'Proclamar a Verdade, sustentar missões e apoiar causas sociais.',
      'Buscar poder político e influenciar eleições.',
      'Expandir apenas a estrutura física.',
      'Priorizar eventos culturais.',
    ],
    correctAnswer: 0,
    explanation:
      'Parágrafo 3: proclamação da Verdade, sustento missionário, apoio a causas sociais e estrutura robusta para glória de Deus.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'De quem é a glória pela expansão da igreja, conforme a pastoral?',
    options: [
      'Do esforço humano apenas.',
      'De Deus.',
      'De líderes influentes.',
      'Da cultura local.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 3: toda expansão é “para a glória de Deus”, sem vanglórias ou orgulho próprio.',
    difficulty: 'easy',
  },

  // Intermediário
  {
    id: 9,
    question: 'Segundo a pastoral, o governo de Cristo sobre a igreja implica o quê?',
    options: [
      'Autonomia plena da igreja sem Cristo.',
      'Direção, defesa e capacitação para o crescimento.',
      'Supremacia de tradições humanas.',
      'Dependência de recursos financeiros.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 1: Cristo governa orientando, defendendo e habilitando sua igreja para expandir o Reino.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'Por que a referência à Filadélfia é apropriada à história da igreja local?',
    options: [
      'Porque a igreja local é infalível.',
      'Porque houve fidelidade mesmo com pouca força e Deus abriu portas.',
      'Porque não houve oposição.',
      'Porque a igreja é rica e poderosa.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 2: guardaram a Palavra, não negaram o nome e receberam uma porta aberta que ninguém pode fechar.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'O que os mutirões e tijolos descartados simbolizam na narrativa pastoral?',
    options: [
      'Imprudência e improviso sem propósito.',
      'Providência, humildade e empenho comunitário na edificação.',
      'Apoio estatal indispensável.',
      'Rejeição a trabalho manual.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 2: história de edificação com recursos simples e esforço coletivo aponta para dependência de Deus e serviço.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'Em que áreas a pastoral afirma que a igreja tem crescido?',
    options: [
      'Apenas em número de membros.',
      'Fisicamente e espiritualmente, com missão, Verdade e causas sociais.',
      'Somente em patrimônio material.',
      'Em influência política.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 3: crescimento físico e espiritual, trabalhando vidas, proclamando a Verdade, missões e causas sociais.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'O que significa a “porta aberta que ninguém pode fechar” aplicada à igreja?',
    options: [
      'Imunidade a dificuldades.',
      'Oportunidade missionária concedida por Cristo soberano.',
      'Garantia de riqueza financeira.',
      'Autonomia institucional irrestrita.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 2: Cristo abre e sustenta oportunidades para sua igreja fiel cumprir a missão.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'Qual postura a pastoral rejeita ao falar da expansão da igreja?',
    options: [
      'Vanglória e orgulho próprio.',
      'Gratidão a Deus.',
      'Reconhecimento da providência divina.',
      'Humildade comunitária.',
    ],
    correctAnswer: 0,
    explanation:
      'Parágrafo 3: tudo é para a glória de Deus; não há espaço para vanglória ou orgulho.',
    difficulty: 'medium',
  },

  // Avançado
  {
    id: 15,
    question: 'Qual implicação eclesiológica emerge da imagem de Cristo que conhece e governa a igreja?',
    options: [
      'Cristo é cabeça que disciplina, guia e sustenta sua igreja.',
      'A igreja é autossuficiente e independe de Cristo.',
      'A liderança humana é absoluta.',
      'As tradições se sobrepõem ao evangelho.',
    ],
    correctAnswer: 0,
    explanation:
      'Parágrafo 1: governo ativo de Cristo sobre sua igreja constrói a eclesiologia centrada na cabeça que corrige e conduz.',
    difficulty: 'hard',
  },
  {
    id: 16,
    question: 'Como a memória histórica da comunidade fortalece sua identidade e missão presentes?',
    options: [
      'Exaltando feitos humanos como centrais.',
      'Reconhecendo providência divina e encorajando fidelidade contínua.',
      'Focando em comparações com outras igrejas.',
      'Esquecendo limitações e fragilidades.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafos 2 e 3: lembrar do início humilde e da ajuda do SENHOR molda identidade e perseverança na missão.',
    difficulty: 'hard',
  },
  {
    id: 17,
    question: 'Que leitura pastoral vincula Filadélfia à igreja local, segundo o texto?',
    options: [
      'Equivalência histórica literal.',
      'Aplicação pastoral por paralelismo de fidelidade e promessa.',
      'Interpretação meramente alegórica sem base.',
      'Desconsideração do contexto bíblico.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 2: as palavras ditas à Filadélfia são aplicadas como encorajamento por fidelidade e “porta aberta”.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'Qual risco a pastoral explicitamente evita ao narrar a expansão?',
    options: [
      'Triunfalismo e vanglória.',
      'Gratidão a Deus.',
      'Missão e serviço.',
      'Proclamação da Verdade.',
    ],
    correctAnswer: 0,
    explanation:
      'Parágrafo 3: a expansão é atribuída à glória de Deus, afastando orgulho e autopromoção.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'Qual doutrina subjacente ao lema “Até aqui nos ajudou o SENHOR”?',
    options: [
      'Meritocracia humana.',
      'Providência e fidelidade divina na história.',
      'Determinismo institucional.',
      'Autonomia espiritual plena.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 3: reconhecimento público de que a ajuda do SENHOR sustentou cada etapa da jornada comunitária.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'Segundo a pastoral, qual síntese melhor descreve a missão atual da igreja?',
    options: [
      'Crescer apenas em estrutura física.',
      'Trabalhar vidas, proclamar a Verdade, apoiar missões e causas sociais.',
      'Conquistar espaço político.',
      'Priorizar tradições locais.',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 3: missão integrando cuidado de pessoas, proclamação do evangelho, sustento missionário e serviço social para glória de Deus.',
    difficulty: 'hard',
  },
];