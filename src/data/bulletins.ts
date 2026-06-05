import { Bulletin } from '../types';

import pdf708 from '/pdf/708 - Com Cristo no barco tudo vai muito bem - Boletim virtual.pdf';
import pdf707 from '/pdf/707 - Quão bom é estarmos em união - Boletim virtual.pdf';
import pdf706 from '/pdf/706 - O poder da Palavra e o Reino de Deus - Boletim virtual.pdf';
import pdf704 from '/pdf/704 - O PECADO IMPERDOÁVEL - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'COM CRISTO NO BARCO TUDO VAI MUITO BEM',
  date: '07/06/2026',
  version: '708',
  pdf: pdf708,
};

export const previousBulletin1: Bulletin = {
  title: 'QUÃO BOM É ESTARMOS EM UNIÃO',
  date: '31/05/2026',
  version: '707',
  pdf: pdf707,
};

export const previousBulletin2: Bulletin = {
  title: 'O poder da Palavra e o Reino de Deus',
  date: '24/05/2026',
  version: '706',
  pdf: pdf706,
};

export const previousBulletin3: Bulletin = {
  title: 'O PECADO IMPERDOÁVEL',
  date: '10/05/2026',
  version: '704',
  pdf: pdf704,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '07/06/2026' &&
  previousBulletin1.date === '31/05/2026' &&
  previousBulletin2.date === '24/05/2026' &&
  previousBulletin3.date === '10/05/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}
