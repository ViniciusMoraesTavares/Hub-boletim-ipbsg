import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // Fáceis
  {
    id: 1,
    question: "O que significa \"Sola Fide\" como princípio da Reforma Protestante?",
    options: [
      "Salvação pela fé e pelas boas obras.",
      "Salvação somente pela fé.",
      "Salvação pela fé e pelos sacramentos.",
      "Salvação pela fé e pela tradição da igreja.",
      "Salvação pela fé e pela penitência.",
    ],
    correctAnswer: 1,
    explanation: "Sola Fide significa \"Somente a Fé\" como meio de justificação. É um dos cinco princípios da Reforma Protestante que afirma que a salvação é obtida exclusivamente pela fé, não por obras ou outros meios.",
    difficulty: 'easy',
  },
  {
    id: 2,
    question: "Segundo a pastoral, qual passagem bíblica Paulo usa para argumentar sobre a graça versus obras?",
    options: [
      "Efésios 2:8-9",
      "Romanos 11:6",
      "Gálatas 2:16",
      "Tito 3:5",
      "2 Timóteo 1:9",
    ],
    correctAnswer: 1,
    explanation: "A pastoral cita Romanos 11:6: \"E, se é pela graça, já não é pelas obras; do contrário, a graça já não é graça\", demonstrando que a graça exclui totalmente as obras na salvação.",
    difficulty: 'easy',
  },
  {
    id: 3,
    question: "De acordo com o texto, o que o homem pode oferecer a Deus por sua salvação?",
    options: [
      "Suas boas obras e esforços pessoais.",
      "Sua obediência à lei de Deus.",
      "Nada - ele nada pode e nada tem para oferecer.",
      "Sua fé sincera e arrependimento.",
      "Seus sacrifícios e ofertas.",
    ],
    correctAnswer: 2,
    explanation: "A pastoral afirma claramente que \"o homem nada pode e nada tem para oferecer a Deus por sua salvação\". A única coisa que lhe cabe fazer é aceitar o dom da salvação pela fé.",
    difficulty: 'easy',
  },
  {
    id: 4,
    question: "O que é imputado (creditado) gratuitamente ao homem segundo o texto?",
    options: [
      "Suas próprias boas obras.",
      "A obra suficiente de Cristo.",
      "Sua fé e arrependimento.",
      "Sua obediência parcial à lei.",
      "Seus méritos pessoais.",
    ],
    correctAnswer: 1,
    explanation: "O texto explica que a fé é \"na obra suficiente de Cristo, que lhe é imputada (creditada em sua conta) gratuitamente\". É a obra de Cristo, não a nossa, que nos é creditada.",
    difficulty: 'easy',
  },

  // Médias
  {
    id: 5,
    question: "Em que consiste a obra de Cristo que é imputada ao crente?",
    options: [
      "Apenas sua morte na cruz pelos pecados.",
      "Sua vida de perfeita obediência à lei de Deus em lugar do homem.",
      "Seus milagres e ensinamentos durante o ministério terreno.",
      "Sua ressurreição e ascensão aos céus.",
      "Sua intercessão contínua no céu.",
    ],
    correctAnswer: 1,
    explanation: "A pastoral explica que a obra de Cristo \"consiste na sua vida de perfeita obediência à lei de Deus, em lugar do homem\", obediência que nem Adão nem qualquer descendente pôde prestar devido à morte espiritual.",
    difficulty: 'medium',
  },
  {
    id: 6,
    question: "Por que foi necessário que alguém \"sem culpa e com méritos divinos\" assumisse o lugar do pecador?",
    options: [
      "Para dar exemplo de vida santa aos homens.",
      "Para ensinar o caminho da salvação.",
      "Para que Deus pudesse punir o pecador e ao mesmo tempo declará-lo justo.",
      "Para estabelecer uma nova aliança com a humanidade.",
      "Para demonstrar o amor de Deus pelos pecadores.",
    ],
    correctAnswer: 2,
    explanation: "O texto explica que foi necessário para que \"Deus pudesse punir o pecador, mas ao mesmo tempo declará-lo justo (que é o significado bíblico de justificar)\". Cristo assumiu a culpa e morreu no lugar do eleito, satisfazendo a justiça de Deus.",
    difficulty: 'medium',
  },
  {
    id: 7,
    question: "Segundo a pastoral, qual é a situação atual do protestantismo em relação à doutrina da justificação pela fé?",
    options: [
      "Mantém-se fiel aos princípios originais da Reforma.",
      "Fortaleceu ainda mais a ênfase na justificação pela fé.",
      "Mudou, e poucos evangélicos ainda dão ênfase ao aspecto objetivo da justificação unicamente pela fé.",
      "Desenvolveu uma compreensão mais profunda da doutrina.",
      "Permanece inalterado desde os dias de Lutero.",
    ],
    correctAnswer: 2,
    explanation: "A pastoral afirma que \"o protestantismo mudou\" e que \"são poucos os evangélicos hoje que ainda dão ênfase ao aspecto objetivo da justificação unicamente pela fé\".",
    difficulty: 'medium',
  },

  // Difíceis
  {
    id: 8,
    question: "Qual é a crítica feita na pastoral às práticas evangélicas contemporâneas?",
    options: [
      "Falta de organização nas igrejas locais.",
      "Experiências subjetivas e avivamentos emocionais estão tomando o lugar da pregação dos temas chaves da Reforma.",
      "Excesso de formalismo nos cultos.",
      "Falta de evangelismo e missões.",
      "Problemas administrativos e financeiros.",
    ],
    correctAnswer: 1,
    explanation: "A pastoral critica que \"experiências subjetivas, avivamentos emocionais, respostas a apelos e outras práticas estão tomando o lugar da pregação dos temas chaves da Reforma\".",
    difficulty: 'hard',
  },
  {
    id: 9,
    question: "Quais doutrinas fundamentais da Reforma estão sendo negadas por muitos evangélicos segundo o texto?",
    options: [
      "Trindade, encarnação, ressurreição e segunda vinda.",
      "Pecado original, expiação vicária, eleição incondicional e justificação somente pela fé.",
      "Autoridade das Escrituras, sacerdócio universal, batismo e ceia.",
      "Criação, queda, redenção e glorificação.",
      "Fé, esperança, amor e santificação.",
    ],
    correctAnswer: 1,
    explanation: "O texto especifica que \"as doutrinas do pecado original, da expiação vicária, da eleição incondicional e da justificação somente pela fé estão sendo negadas hoje por muitos evangélicos\".",
    difficulty: 'hard',
  },
  {
    id: 10,
    question: "Por que a pastoral afirma que \"nada menos\" que a obra substitutiva de Cristo foi suficiente para justificar o pecador?",
    options: [
      "Porque Deus exige apenas sinceridade do coração.",
      "Porque a justiça de Deus exige punição do pecado e justiça perfeita, sendo Ele aquele que \"não inocenta o culpado\".",
      "Porque as boas obras humanas são insuficientes por natureza.",
      "Porque a lei de Moisés foi abolida na nova aliança.",
      "Porque a fé precisa ser demonstrada através de obras.",
    ],
    correctAnswer: 1,
    explanation: "A pastoral explica que \"a justiça de Deus exige punição do pecado\" e cita que Ele é aquele que \"não inocenta o culpado\" (Ex 34:7), exigindo \"justiça perfeita\". Por isso, nada menos que a obra perfeita e substitutiva de Cristo foi suficiente.",
    difficulty: 'hard',
  },
];
