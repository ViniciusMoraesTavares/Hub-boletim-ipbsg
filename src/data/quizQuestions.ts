import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // Fáceis
  {
    id: 1,
    question: "Qual animal representa Cristo na Páscoa?",
    options: [
      "Bezerro", 
      "Bode", 
      "Pomba",
      "Cordeiro"
    ],
    correctAnswer: 3,
    explanation: "O cordeiro é o símbolo central da Páscoa, apontando para Cristo, o Cordeiro de Deus que tira o pecado do mundo (João 1:29; 1 Coríntios 5:7). Os outros animais aparecem em sacrifícios, mas não na Páscoa, que é o tipo específico que prefigura a obra redentora de Cristo (Êxodo 12:5-7).",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "Qual rito substitui a Páscoa na nova aliança em Cristo?",
    options: [
      "Batismo", 
      "Santa Ceia", 
      "Dízimo", 
      "Oração"
    ],
    correctAnswer: 1,
    explanation: "A Santa Ceia substitui a Páscoa como memorial do sacrifício de Cristo (Mateus 26:26-29; 1 Coríntios 11:23-26). Batismo, dízimo e oração são práticas bíblicas, mas não cumprem o papel memorial da Páscoa; a Ceia é o rito que celebra e ensina sobre a obra redentora de Cristo.",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "O que o sangue do cordeiro simboliza para os que participam?",
    options: [
      "Perdão e proteção", 
      "Prosperidade", 
      "Sabedoria", 
      "Pureza ritual"
    ],
    correctAnswer: 0,
    explanation: "O sangue do cordeiro protegia o povo no Egito (Êxodo 12:13) e, em Cristo, significa perdão de pecados e redenção (Hebreus 9:22; Efésios 1:7). As demais opções podem ter sentido bíblico em outros contextos, mas não representam a função redentora do sangue pascal.",
    difficulty: "easy"
  },

  // Médias
  {
    id: 4,
    question: "O que não podia ser quebrado no cordeiro da Páscoa?",
    options: [
      "Pele", 
      "Chifre",
      "Dente",
      "Osso",
    ],
    correctAnswer: 3,
    explanation: "Nenhum osso do cordeiro podia ser quebrado (Êxodo 12:46), prefigurando Cristo que morreu sem que seus ossos fossem quebrados (João 19:36). Pele, chifre e dentes não têm relevância tipológica para a Páscoa.",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Qual era a principal regra da Festa dos Pães Asmos em relação à comida?",
    options: [
      "Não consumir nada com mel",
      "Não comer carne assada",
      "Não comer fermento",
      "Não beber vinho durante sete dias"
    ],
    correctAnswer: 2,
    explanation: "Durante sete dias não se podia comer pão com fermento (Êxodo 12:15), símbolo de corrupção que apontava para a pureza que Cristo traz (1 Coríntios 5:7-8). As outras restrições não eram o foco da festa.",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Quantos ajuntamentos públicos eram feitos durante a Festa dos Pães Asmos?",
    options: [
      "1", 
      "3", 
      "2", 
      "7"],
    correctAnswer: 2,
    explanation: "Havia dois ajuntamentos solenes, no primeiro e no sétimo dia (Êxodo 12:16). Outros números não refletem a estrutura estabelecida para a festa.",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Qual é o papel dos pais na celebração da Páscoa segundo o texto?",
     options: [
      "Explicar aos filhos o significado da celebração",
      "Conduzir os cânticos e orações da família",
      "Apresentar ofertas adicionais no templo",
      "Guardar silêncio durante o sacrifício"
    ],
    correctAnswer: 0,
    explanation: "Segundo Êxodo 12:26-27, os pais deviam ensinar aos filhos o significado da Páscoa, transmitindo a obra redentora de Deus. Cânticos, ofertas ou silêncio não são o papel essencial da Páscoa, que é pedagógico e instrutivo.",
    difficulty: "medium"
  },

  // Difíceis
  {
    id: 8,
    question: "Como o rito da Páscoa se cumpre em Cristo?",
    options: [
      "Cristo estabelece a Ceia como continuidade da Páscoa",
      "Cristo ensina o verdadeiro significado da lei",
      "Cristo é o cordeiro sacrificado",
      "Cristo cumpre a justiça de Deus pelo sacrifício"
    ],
    correctAnswer: 2,
    explanation: "Cristo cumpre a Páscoa como o Cordeiro sacrificado (1 Coríntios 5:7; João 1:29). A Ceia e o ensino da lei são importantes, mas o ponto central é que Ele mesmo é o sacrifício tipificado no cordeiro pascal.",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "O que significa “apresentar-se santos e irrepreensíveis diante do Cordeiro”?",
    options: [
      "Ser perfeito em obras", 
      "Ser justificado em Cristo", 
      "Cumprir a lei", 
      "Ter sabedoria"
    ],
    correctAnswer: 1,
    explanation: "Significa estar justificado em Cristo (Efésios 1:4; Colossenses 1:22), não perfeição por obras, cumprimento da lei ou sabedoria humana. A santidade diante de Deus é imputada por Cristo, não conquistada por esforço humano.",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Por que a Santa Ceia é chamada de memorial e pedagógica?",
    options: [
      "Porque atualiza o sacrifício de Cristo em cada celebração",
      "Porque recorda a obra de Cristo e instrui a igreja",
      "Porque substitui os sacrifícios e festas judaicas",
      "Porque representa simbolicamente a união dos crentes"
  ],
    correctAnswer: 1,
     explanation: "A Ceia recorda o sacrifício de Cristo e instrui a igreja sobre a obra redentora (Lucas 22:19; 1 Coríntios 11:24-25). Não substitui literalmente os ritos do AT, mas cumpre seu sentido em Cristo e permanece como ordenança da Nova Aliança.",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Qual é a relação entre a Páscoa, o juízo sobre o Egito e a redenção do povo de Deus?",
    options: [
      "Todas prefiguram a libertação definitiva em Cristo",
      "Representam apenas eventos históricos sem conexão",
      "Mostram como Israel venceu o Egito por suas próprias forças",
      "Ensinam que cada geração deve repetir o mesmo rito de sacrifício"
    ],
    correctAnswer: 0,
    explanation: "A Páscoa, o juízo sobre o Egito e a saída de Israel são tipos que apontam para Cristo e sua obra de redenção (Êxodo 12; 1 Coríntios 10:1-4). Outras interpretações ignoram o sentido tipológico e a prefiguração do Evangelho.",
    difficulty: "hard"
  }
];
