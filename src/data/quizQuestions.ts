import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // Fáceis
  {
    id: 1,
    question: "O que significa a expressão \"Solus Christus\"?",
    options: [
      "Que a salvação vem pela fé e pelas obras.",
      "Que somente Cristo é o mediador entre Deus e os homens.",
      "Que a tradição da igreja tem autoridade igual às Escrituras.",
      "Que a igreja é a única mediadora da salvação.",
      "Que os santos podem interceder por nós junto a Deus.",
    ],
    correctAnswer: 1,
    explanation: "Solus Christus é um dos cinco princípios da Reforma Protestante que afirma que somente Cristo é o mediador entre Deus e os homens, sem necessidade de outros intercessores.",
    difficulty: 'easy',
  },
  {
    id: 2,
    question: "Qual passagem bíblica afirma que há um só mediador entre Deus e os homens?",
    options: [
      "João 3:16",
      "Romanos 8:28",
      "1 Timóteo 2:5",
      "Gálatas 2:20",
      "Hebreus 11:1",
    ],
    correctAnswer: 2,
    explanation: "A passagem de 1 Timóteo 2:5 declara: \"Porquanto há um só Deus e um só Mediador entre Deus e os homens, Cristo Jesus, homem\", estabelecendo claramente a exclusividade de Cristo como mediador.",
    difficulty: 'easy',
  },
  {
    id: 3,
    question: "De acordo com o princípio Solus Christus, como o homem alcança a salvação?",
    options: [
      "Por meio de rituais religiosos.",
      "Através de penitências e boas obras.",
      "Pela graça, mediante a fé em Cristo.",
      "Pelo batismo regenerador.",
      "Através da intercessão dos santos.",
    ],
    correctAnswer: 2,
    explanation: "Segundo o princípio Solus Christus, a salvação é obra de Deus, oferecida aos pecadores pela graça, mediante a fé em Cristo, não por obras ou rituais religiosos.",
    difficulty: 'easy',
  },

  // Médias
  {
    id: 4,
    question: "Quais afirmações sobre Cristo são destacadas no princípio Solus Christus?",
    options: [
      "Cristo é um dos mediadores; um dos salvadores; um dos sacerdotes.",
      "Cristo é o único mediador; o único salvador; o único cabeça da igreja.",
      "Cristo é o mediador principal; o salvador mais importante; o primeiro sacerdote.",
      "Cristo é o mediador histórico; o salvador simbólico; o sacerdote exemplar.",
      "Cristo é o mediador terreno; o salvador espiritual; o sacerdote eterno.",
    ],
    correctAnswer: 1,
    explanation: "O princípio Solus Christus destaca que Cristo é o único mediador entre Deus e os homens, o único salvador dado por Deus aos homens, e o único cabeça e Senhor da igreja.",
    difficulty: 'medium',
  },
  {
    id: 5,
    question: "Por que, segundo o texto, a ideia de que o batismo pode regenerar o homem é considerada um engano?",
    options: [
      "Porque o batismo é apenas um símbolo sem valor espiritual.",
      "Porque apenas o batismo no Espírito Santo tem valor.",
      "Porque somente Cristo pode salvar, não os rituais da igreja.",
      "Porque o batismo só é válido se realizado na idade adulta.",
      "Porque o batismo precisa ser complementado com a eucaristia.",
    ],
    correctAnswer: 2,
    explanation: "A ideia de que o batismo regenera o homem é considerada um engano porque, segundo o princípio Solus Christus, somente Cristo salva, não os rituais da igreja. A salvação é obra exclusiva de Deus através de Cristo.",
    difficulty: 'medium',
  },
  {
    id: 6,
    question: "Qual é o papel de Cristo como Sumo Sacerdote segundo o texto?",
    options: [
      "Oferecer sacrifícios contínuos pelos pecados dos fiéis.",
      "Interceder pelos santos junto a Maria e aos anjos.",
      "Estar no céu à direita de Deus, intercedendo pela igreja.",
      "Abençoar os sacramentos realizados pelos sacerdotes na terra.",
      "Transmitir autoridade sacerdotal aos líderes da igreja.",
    ],
    correctAnswer: 2,
    explanation: "Como Sumo Sacerdote, Cristo está no céu à direita de Deus, intercedendo pela igreja. Ele penetrou os céus (Hb 4:14) e, por ter oferecido o sacrifício perfeito, pode salvar totalmente aqueles que se aproximam de Deus por meio dele.",
    difficulty: 'medium',
  },

  // Difíceis
  {
    id: 7,
    question: "Como o texto relaciona o sacrifício de Cristo com nossa justificação?",
    options: [
      "O sacrifício de Cristo nos dá exemplo de como devemos sofrer para sermos justificados.",
      "O sacrifício de Cristo nos concede méritos que, somados aos nossos, nos justificam.",
      "O sacrifício de Cristo foi substitutivo, e com base nele fomos declarados justos diante de Deus.",
      "O sacrifício de Cristo nos inspira a realizar boas obras que nos justificam diante de Deus.",
      "O sacrifício de Cristo nos dá força espiritual para realizarmos nossa própria justificação.",
    ],
    correctAnswer: 2,
    explanation: "O texto afirma que Jesus foi o sacrifício perfeito e o Sacerdote supremo, e que nossos pecados foram julgados nele. Com base em seu sacrifício substitutivo, fomos declarados justos diante do tribunal de Deus.",
    difficulty: 'hard',
  },
  {
    id: 8,
    question: "Qual a relação entre os conceitos de Cristo como 'único cabeça da igreja' e as passagens bíblicas citadas no texto?",
    options: [
      "As passagens contradizem a ideia de Cristo como único cabeça, mostrando a autoridade dos apóstolos.",
      "As passagens mostram que Cristo compartilha sua autoridade com Pedro e seus sucessores.",
      "As passagens estabelecem Cristo como fundamento (1Co 3:11), cabeça (Ef 1:22), dono (Mt 16:18) e Senhor (Fp 2:9-11) da igreja.",
      "As passagens indicam que Cristo é cabeça espiritual, enquanto a igreja precisa de uma cabeça terrena.",
      "As passagens sugerem que Cristo delega sua autoridade aos líderes da igreja através da sucessão apostólica.",
    ],
    correctAnswer: 2,
    explanation: "O texto cita passagens bíblicas que estabelecem Cristo como o único fundamento (1Co 3:11), o único cabeça (Ef 1:22), o único dono (Mt 16:18) e o único Senhor (Fp 2:9-11) da igreja, reforçando a exclusividade de sua autoridade.",
    difficulty: 'hard',
  },
  {
    id: 9,
    question: "Por que o texto afirma que Cristo 'pode salvar-nos totalmente'?",
    options: [
      "Porque ele nos dá exemplo perfeito de vida santa.",
      "Porque ele nos concede graça para completarmos nossa salvação.",
      "Porque ele morreu, ressuscitou e agora intercede por nós à direita de Deus.",
      "Porque ele estabeleceu sacramentos que garantem nossa salvação.",
      "Porque ele nos ensina como alcançar a salvação por nossos próprios esforços.",
    ],
    correctAnswer: 2,
    explanation: "O texto, baseando-se em Hebreus 7:25, afirma que Cristo pode salvar-nos totalmente porque ele morreu pelos nossos pecados, ressuscitou para nossa justificação, penetrou os céus e agora está à direita de Deus intercedendo por nós.",
    difficulty: 'hard',
  },
];
