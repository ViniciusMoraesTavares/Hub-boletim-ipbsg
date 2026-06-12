import { Bulletin } from '../types';

import pdf709 from '/pdf/709 - O Valor de uma Escolha De Bitcoins a Porcos - Boletim virtual.pdf';
import pdf708 from '/pdf/708 - Com Cristo no barco tudo vai muito bem - Boletim virtual.pdf';
import pdf707 from '/pdf/707 - Quão bom é estarmos em união - Boletim virtual.pdf';
import pdf706 from '/pdf/706 - O poder da Palavra e o Reino de Deus - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'O Valor de uma Escolha: De Bitcoins a Porcos',
  date: '14/06/2026',
  version: '709',
  pdf: pdf709,
};

export const previousBulletin1: Bulletin = {
  title: 'COM CRISTO NO BARCO TUDO VAI MUITO BEM',
  date: '07/06/2026',
  version: '708',
  pdf: pdf708,
};

export const previousBulletin2: Bulletin = {
  title: 'QUÃO BOM É ESTARMOS EM UNIÃO',
  date: '31/05/2026',
  version: '707',
  pdf: pdf707,
};

export const previousBulletin3: Bulletin = {
  title: 'O poder da Palavra e o Reino de Deus',
  date: '24/05/2026',
  version: '706',
  pdf: pdf706,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '14/06/2026' &&
  previousBulletin1.date === '07/06/2026' &&
  previousBulletin2.date === '31/05/2026' &&
  previousBulletin3.date === '24/05/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}
