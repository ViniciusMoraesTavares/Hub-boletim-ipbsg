import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // Fáceis
  {
    id: 1,
    question: 'No capítulo 1 de Jonas, qual aspecto da soberania de Deus é evidenciado?',
    options: [
      'Ele tumultua e acalma a tempestade e o mar',
      'Cria e remove uma planta',
      'Converte os ninivitas',
      'Ordena ao peixe devolver Jonas',
    ],
    correctAnswer: 0,
    explanation:
      'Parágrafo 1: Deus demonstra soberania sobre a criação ao controlar tempestade e mar, ensinando que nada está fora do seu governo.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Como Deus preserva a vida de Jonas no capítulo 2?',
    options: [
      'Por meio do peixe que o mantém vivo e depois o devolve à superfície',
      'A tripulação o resgata com cordas',
      'Jonas nada até a costa sozinho',
      'Por meio de uma planta que o abriga no mar',
    ],
    correctAnswer: 0,
    explanation:
      'Parágrafo 1: Deus exerce soberania preservando Jonas em lugar inóspito e ordenando ao peixe que o devolva à superfície.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Para onde Jonas tentou fugir quando foi chamado para Nínive?',
    options: ['Társis', 'Jerusalém', 'Babilônia', 'Egito'],
    correctAnswer: 0,
    explanation:
      'Parágrafo 3: Jonas se dispôs a ir para Társis ao invés de obedecer ao chamado para Nínive, escolhendo o oposto da vontade de Deus.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'Qual consequência o texto destaca ao escolher o caminho oposto da vontade de Deus?',
    options: [
      'Prosperidade imediata',
      'Reconhecimento público',
      'Perda de propósito e sentido da vida',
      'Melhor posicionamento social',
    ],
    correctAnswer: 2,
    explanation:
      'Parágrafo 3: ao distanciar-se de Deus, perde-se o propósito para o qual fomos criados e o sentido da vida.',
    difficulty: 'easy',
  },

  // Médias
  {
    id: 5,
    question: 'Qual leitura teológica melhor expressa “fomos criados por Deus e para Deus”?',
    options: [
      'A vida tem propósito centrado em Deus',
      'A existência é autônoma e independente de Deus',
      'Cumprir apenas rituais externos',
      'Buscar sucesso material como fim último',
    ],
    correctAnswer: 0,
    explanation:
      'Parágrafo 2: a dependência e finalidade da vida estão em Deus; viver nele dá sentido e direção autênticos.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Qual afirmação melhor explica a conversão dos ninivitas no capítulo 3?',
    options: [
      'Resultado de persuasão humana de Jonas',
      'Soberania de Deus operando salvação mesmo diante da má vontade de Jonas',
      'Estratégia política da cidade',
      'Medo dos marinheiros',
    ],
    correctAnswer: 1,
    explanation:
      'Parágrafo 1: a conversão em massa revela a soberania salvadora de Deus, que age apesar da resistência do profeta.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Qual emparelhamento está correto segundo a narrativa apresentada?',
    options: [
      'Cap. 2 — Deus cria e remove a planta',
      'Cap. 1 — Conversão dos ninivitas',
      'Cap. 4 — Deus cria e elimina a planta',
      'Cap. 3 — Tempestade no mar',
    ],
    correctAnswer: 2,
    explanation:
      'Parágrafo 1: capítulo 4 destaca a soberania de Deus ao criar e eliminar a planta; os demais emparelhamentos estão trocados.',
    difficulty: 'medium',
  },
  {
    id: 8,
    question: 'Segundo a citação de Simonton, qual postura é a mais segura?',
    options: [
      'Evitar riscos a qualquer custo',
      'Seguir a maioria nas decisões',
      'Viver no centro da vontade de Deus',
      'Confiar apenas em autoproteção',
    ],
    correctAnswer: 2,
    explanation:
      'Parágrafo 4: “o lugar mais seguro ... é no centro da vontade de Deus”, aplicando obediência e confiança mesmo em ameaças.',
    difficulty: 'medium',
  },

  // Difíceis
  {
    id: 9,
    question: 'Aplicação: Em crises, o que a soberania de Deus sobre criação e eventos nos ensina?',
    options: [
      'Que tudo é aleatório e sem direção',
      'Que devemos controlar todas as variáveis humanas',
      'Que Deus é deísta e não intervém',
      'Que Deus governa e usa circunstâncias para nos chamar de volta ao seu propósito',
    ],
    correctAnswer: 3,
    explanation:
      'Parágrafos 1 e 3: Deus ordena tempestade, mar, peixe e planta, orientando nosso retorno à sua vontade e propósito.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Por que, segundo o texto, distanciar-se de Deus resulta em vazio existencial?',
    options: [
      'Pressões externas inevitáveis',
      'Falta de recursos materiais',
      'Rompemos com a fonte do propósito: fomos criados por e para Deus',
      'Ausência de educação formal',
    ],
    correctAnswer: 2,
    explanation:
      'Parágrafos 2 e 3: quando escolhemos o oposto da vontade de Deus, perdemos o propósito do Criador para nossa vida.',
    difficulty: 'hard',
  },
  {
    id: 11,
    question: 'Completar: “O sentido da vida está em ______”.',
    options: ['Deus', 'Trabalho', 'Tradição', 'Liberdade pessoal'],
    correctAnswer: 0,
    explanation:
      'Título e corpo: o sentido encontra-se em Deus; nele a vida ganha direção, significado e estabilidade.',
    difficulty: 'hard',
  },
  {
    id: 12,
    question: 'O que revelam as ordens de Deus ao peixe (cap. 2) e à planta (cap. 4)?',
    options: [
      'Deus é remoto e não intervém',
      'A narrativa é apenas mítica',
      'Tema ecológico como foco exclusivo',
      'Deus intervém ativamente na criação para cumprir seus propósitos soberanos',
    ],
    correctAnswer: 3,
    explanation:
      'Parágrafo 1: Deus ordena elementos da criação conforme seu propósito, revelando governo santo, sábio e poderoso.',
    difficulty: 'hard',
  },
];
