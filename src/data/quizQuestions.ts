import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
// ---- Fáceis ----
{
id: 1,
question: 'Qual passagem bíblica fundamenta a pastoral “Conhecidos por Deus e conduzidos por sua presença”?',
options: [
'Salmos 23.1-6',
'Provérbios 3.1-12',
'Salmos 139',
'Isaías 40.1-11',
'Romanos 8.28-39',
],
correctAnswer: 2,
explanation: 'A pastoral é fundamentada no Salmo 139, que apresenta Deus como onipotente, onisciente, onipresente e pessoal, aquele que conhece profundamente seus filhos e os conduz em seu caminho.',
difficulty: 'easy',
},
{
id: 2,
question: 'O que significa afirmar que Deus é onipotente?',
options: [
'Que ele possui todo o poder e que nada é difícil ou impossível para ele',
'Que ele conhece apenas aquilo que os seres humanos revelam',
'Que ele está presente somente nos lugares de adoração',
'Que ele depende da capacidade humana para realizar seus propósitos',
'Que ele aprende com os acontecimentos ao longo do tempo',
],
correctAnswer: 0,
explanation: 'A onipotência significa que Deus possui todo o poder. Conforme a pastoral, nossas dificuldades e lutas são pequenas diante de seu poder.',
difficulty: 'easy',
},
{
id: 3,
question: 'Segundo a pastoral, o que significa dizer que Deus é onipresente?',
options: [
'Que Deus conhece apenas o passado e o presente',
'Que Deus está limitado aos céus e não acompanha os seres humanos',
'Que Deus se manifesta somente em experiências espirituais extraordinárias',
'Que Deus está presente em todos os lugares e nenhum lugar pode nos ocultar dele',
'Que Deus está presente apenas na vida daqueles que nunca enfrentam dificuldades',
],
correctAnswer: 3,
explanation: 'A onipresença significa que Deus está presente em todos os lugares. Como ensina o Salmo 139, não existe lugar tão alto, profundo ou escuro que possa nos ocultar de sua presença.',
difficulty: 'easy',
},

  // ---- Médias ----
{
id: 4,
question: 'O que significa afirmar que Deus é onisciente?',
options: [
'Que ele possui poder, mas precisa descobrir nossas necessidades por meio de nossas orações',
'Que ele conhece todas as coisas, sabe quais são nossas necessidades e o que é melhor para nós',
'Que ele conhece apenas as intenções que decidimos revelar a outras pessoas',
'Que ele determina nossas escolhas porque desconhece o que faremos no futuro',
'Que ele observa nossas ações, mas não conhece nossos pensamentos e sentimentos',
],
correctAnswer: 1,
explanation: 'A onisciência significa que Deus conhece todas as coisas. A pastoral destaca que ele nos conhece melhor do que nós mesmos e sabe quais são nossas verdadeiras necessidades.',
difficulty: 'medium',
},
{
id: 5,
question: 'Por que a pastoral afirma que Deus não é apenas uma força espiritual?',
options: [
'Porque Deus depende de forças espirituais superiores para agir no mundo',
'Porque sua presença pode ser percebida somente por meio de fenômenos sobrenaturais',
'Porque ele se relaciona apenas com pessoas que possuem conhecimento teológico',
'Porque seus atributos se limitam ao poder e ao conhecimento',
'Porque Deus é pessoal e se relaciona, manifestando misericórdia, bondade, amor, santidade, justiça e retidão',
],
correctAnswer: 4,
explanation: 'A pastoral apresenta Deus como pessoal, não como uma força impessoal. Ele se relaciona e manifesta atributos como misericórdia, bondade, amor, santidade, justiça e retidão.',
difficulty: 'medium',
},
{
id: 6,
question: 'Segundo a pastoral, qual é uma das consequências de sabermos que Deus nos conhece profundamente?',
options: [
'Podemos esconder dele nossos pensamentos mais íntimos quando necessário',
'Não precisamos mais examinar nossas atitudes, pois Deus já conhece nosso coração',
'Podemos confiar em seu cuidado e pedir que ele sonde nosso coração e nos conduza à santidade',
'Devemos evitar orar sobre nossas fraquezas, porque Deus já conhece todas elas',
'Precisamos conquistar o conhecimento de Deus por meio de nossas boas obras',
],
correctAnswer: 2,
explanation: 'Sabendo que Deus nos conhece profundamente, podemos descansar em seu cuidado e pedir que ele sonde nosso coração, transforme nossos pensamentos e nos conduza no caminho da santidade.',
difficulty: 'medium',
},
{
id: 7,
question: 'De acordo com a pastoral, como Deus conduz seus filhos?',
options: [
'Transformando seus pensamentos e seu coração e direcionando-os para longe do caminho mau',
'Retirando deles toda responsabilidade pelas próprias escolhas',
'Garantindo que nunca enfrentarão problemas ou situações difíceis',
'Conduzindo-os apenas por meio de sinais extraordinários e visíveis',
'Impedindo que precisem crescer espiritualmente ao longo da vida',
],
correctAnswer: 0,
explanation: 'A pastoral ensina que Deus tem prazer em conduzir os seus, transformando seus pensamentos e seu coração e direcionando-os para longe do caminho mau.',
difficulty: 'medium',
},

  // ---- Difíceis ----
{
id: 8,
question: 'Como os atributos da onipotência, onisciência e onipresença se complementam na mensagem da pastoral?',
options: [
'Deus possui poder para agir, mas precisa da sabedoria humana para determinar o que é melhor',
'Deus conhece nossas necessidades, mas nem sempre tem poder para nos ajudar',
'Deus está presente em todos os lugares, mas não conhece os pensamentos de seus filhos',
'Deus tem poder para agir, conhece perfeitamente nossas necessidades e está continuamente presente conosco',
'Deus manifesta esses atributos somente quando seus filhos demonstram uma fé sem dúvidas',
],
correctAnswer: 3,
explanation: 'A pastoral apresenta esses atributos de forma complementar: Deus pode agir por seu poder, conhece perfeitamente nossas necessidades por sua onisciência e está presente conosco por sua onipresença. Por isso, podemos confiar em seu cuidado.',
difficulty: 'hard',
},
{
id: 9,
question: 'Qual é a relação entre o conhecimento que Deus tem de nós e o chamado à santidade apresentado na pastoral?',
options: [
'Como Deus já conhece nossas fraquezas, não precisamos buscar transformação espiritual',
'O conhecimento de Deus nos leva a pedir que ele sonde nosso coração, transforme nossa vida e nos conduza para longe do caminho mau',
'A santidade depende exclusivamente da força de vontade humana, sem a ação de Deus',
'Deus conhece nossas atitudes exteriores, mas deixa nossos pensamentos e desejos sem direção',
'O chamado à santidade significa que devemos alcançar a perfeição antes de nos aproximarmos de Deus',
],
correctAnswer: 1,
explanation: 'A pastoral relaciona o conhecimento profundo que Deus tem de nós com a oração para que ele sonde nosso coração e nos conduza à santidade. Reconhecer que somos conhecidos por Deus deve nos levar à transformação, não à acomodação.',
difficulty: 'hard',
},
{
id: 10,
question: 'Qual afirmação melhor resume a mensagem central da pastoral “Conhecidos por Deus e conduzidos por sua presença”?',
options: [
'A segurança cristã depende principalmente da capacidade humana de compreender todos os planos de Deus',
'A presença de Deus é importante apenas nos momentos de sofrimento intenso',
'Deus conhece todas as coisas, mas deixa seus filhos sem direção para que encontrem sozinhos o caminho da santidade',
'A onipotência de Deus garante que todos os nossos desejos serão realizados da maneira que esperamos',
'Podemos descansar no poder de Deus, confiar em sua sabedoria, desfrutar de sua presença e pedir que ele nos conduza no caminho da santidade',
],
correctAnswer: 4,
explanation: 'A pastoral nos convida a descansar no poder de Deus, confiar em sua sabedoria, desfrutar de sua presença constante e pedir que ele sonde nosso coração e nos conduza pessoalmente no caminho da santidade.',
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
