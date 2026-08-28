import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ---- Fáceis ----
  {
    id: 1,
    question: 'Qual igreja recebeu a carta de ânimo e orientação mencionada na pastoral?',
    options: [
      'A igreja de Éfeso',
      'A igreja de Esmirna',
      'A igreja de Laodiceia',
      'A igreja de Sardes',
      'A igreja de Filadélfia',
    ],
    correctAnswer: 1,
    explanation: 'A pastoral trata da mensagem de Cristo à igreja de Esmirna, uma igreja que enfrentava oposição, pobreza e perseguição, mas era chamada a permanecer fiel.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Segundo a pastoral, quem era Policarpo?',
    options: [
      'Um imperador romano que perseguiu a Igreja',
      'Um dos reis que governaram Esmirna',
      'Um apóstolo enviado por Paulo',
      'Um pastor de Esmirna e discípulo de João',
      'Um dos autores do livro de Apocalipse',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral apresenta Policarpo como pastor da igreja de Esmirna e discípulo de João. Ele também enfrentou perseguição por causa de sua fé em Cristo.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'O que Policarpo preferiu fazer diante da ordem para negar a Cristo?',
    options: [
      'Morrer queimado a negar a Cristo',
      'Fugir da cidade para preservar sua vida',
      'Pedir que outro cristão respondesse em seu lugar',
      'Negar a Cristo temporariamente para evitar a perseguição',
      'Abandonar o ministério e permanecer em silêncio',
    ],
    correctAnswer: 0,
    explanation: 'Policarpo permaneceu fiel a Cristo mesmo diante da ameaça de morte. Sua disposição de morrer em vez de negar o Senhor demonstra uma fé que não depende das circunstâncias.',
    difficulty: 'easy',
  },

  // ---- Médias ----
  {
    id: 4,
    question: 'Como a pastoral descreve a relação entre a fé verdadeira e as circunstâncias?',
    options: [
      'A fé verdadeira depende de uma vida sem sofrimento',
      'A fé verdadeira é fortalecida principalmente pela ausência de dificuldades',
      'A fé verdadeira não depende das circunstâncias, mas conhece o valor daquele em quem confia',
      'A fé verdadeira evita qualquer tipo de perseguição',
      'A fé verdadeira só pode permanecer quando Deus remove as dificuldades',
    ],
    correctAnswer: 2,
    explanation: 'A pastoral destaca, a partir do exemplo de Policarpo, que uma fé genuína não está fundamentada em circunstâncias favoráveis, mas no valor e na fidelidade de Cristo.',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Na pastoral, por que Jesus é apresentado como “o primeiro e o último”?',
    options: [
      'Porque Ele foi o primeiro líder da igreja de Esmirna',
      'Porque Ele possui soberania sobre todos os reis e impérios',
      'Porque Ele foi o primeiro cristão a sofrer perseguição',
      'Porque Ele representa o início e o fim da história de cada igreja local',
      'Porque Ele foi o primeiro a receber a mensagem de Apocalipse',
    ],
    correctAnswer: 1,
    explanation: 'Ao apresentar Cristo como “o primeiro e o último”, a pastoral destaca Sua soberania absoluta. Ele está acima de todos os reis, poderes e impérios.',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'Qual é a diferença entre a primeira e a segunda morte apresentada na pastoral?',
    options: [
      'A primeira é espiritual e a segunda é física',
      'A primeira acontece apenas com os incrédulos e a segunda com os cristãos',
      'A primeira é temporária e a segunda acontece durante a perseguição',
      'A primeira separa o corpo da alma, enquanto a segunda é a separação eterna de Deus',
      'A primeira ocorre antes da conversão e a segunda depois da conversão',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral explica que a primeira morte separa o corpo da alma, enquanto a segunda morte representa a separação eterna de Deus. Cristo, porém, garante aos Seus que não sofrerão o dano da segunda morte.',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Qual promessa Cristo oferece àqueles que permanecem fiéis?',
    options: [
      'A coroa da vida',
      'Uma vida sem sofrimento',
      'Riquezas materiais',
      'Autoridade sobre todos os impérios',
      'Libertação imediata de toda perseguição',
    ],
    correctAnswer: 0,
    explanation: 'A pastoral conclui destacando a promessa de Cristo aos que permanecem fiéis: a coroa da vida. A esperança do cristão está na vitória final concedida pelo Senhor.',
    difficulty: 'medium',
  },

  // ---- Difíceis ----
  {
    id: 8,
    question: 'Qual é a principal razão apresentada pela pastoral para que o cristão não abandone o Senhor em meio ao sofrimento?',
    options: [
      'Porque o sofrimento sempre termina rapidamente',
      'Porque Deus promete eliminar todas as dificuldades desta vida',
      'Porque a perseverança garante reconhecimento diante das pessoas',
      'Porque permanecer fiel evita qualquer consequência terrena',
      'Porque Cristo é soberano, venceu a morte e promete a coroa da vida aos que perseveram',
    ],
    correctAnswer: 4,
    explanation: 'A pastoral direciona o olhar do cristão para Cristo, que é soberano, venceu a morte e garante a vida aos que permanecem fiéis. A esperança futura sustenta a perseverança presente.',
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'O que a pastoral ensina sobre a maneira correta de enfrentar as dificuldades do caminho?',
    options: [
      'Devemos concentrar nossa atenção nas dificuldades para aprender a superá-las',
      'Devemos buscar evitar todo sofrimento possível para preservar nossa fé',
      'Devemos confiar principalmente em nossa própria força espiritual',
      'Devemos fixar os olhos no Deus redentor que nos sustenta e na promessa que nos aguarda',
      'Devemos esperar que as circunstâncias mudem antes de continuar servindo a Cristo',
    ],
    correctAnswer: 3,
    explanation: 'A pastoral ensina que o cristão não deve olhar apenas para as dificuldades, mas para Deus, que sustenta Seu povo, e para a promessa futura que aguarda aqueles que permanecem fiéis.',
    difficulty: 'hard',
  },
  {
    id: 10,
    question: 'Qual síntese melhor expressa a mensagem central da pastoral sobre fidelidade a Cristo?',
    options: [
      'A fidelidade cristã consiste em buscar uma vida sem sofrimento por meio da confiança em Deus',
      'A fidelidade cristã significa permanecer em Cristo mesmo diante do sofrimento, confiando em Sua vitória sobre a morte e perseverando até receber a coroa da vida',
      'A fidelidade cristã depende da capacidade humana de suportar perseguições sem fraquejar',
      'A fidelidade cristã exige abandonar tudo o que possa trazer dificuldades nesta vida',
      'A fidelidade cristã é demonstrada principalmente pela ausência de dúvidas e problemas',
    ],
    correctAnswer: 1,
    explanation: 'A mensagem central da pastoral é um chamado à perseverança. O cristão pode enfrentar sofrimento e perseguição, mas permanece fiel porque confia em Cristo, vencedor da morte, e na promessa da coroa da vida.',
    difficulty: 'hard',
  },
];

const __distribution = [0, 0, 0, 0, 0];

for (const q of quizQuestions) {
  const idx = q.correctAnswer;
  if (idx >= 0 && idx <= 4) __distribution[idx]++;
}

const __min = Math.min(...__distribution);
const __max = Math.max(...__distribution);

if (__distribution.some((c) => c === 0)) {
  console.error(
    'Quiz correctAnswer distribution missing one or more indices',
    __distribution,
  );
} else if (__max - __min > 1) {
  console.warn(
    'Quiz correctAnswer distribution unbalanced',
    __distribution,
  );
}
