import { Bulletin } from '../types';

import pdf717 from '/pdf/717 - Enxergando a Cristo com Clareza  O milagre pedagógico - Boletim virtual.pdf';
import pdf716 from '/pdf/716 - O SENHOR ESTÁ PERTO DE TODOS - Boletim virtual.pdf';
import pdf715 from '/pdf/715 - A Grandeza de se Curvar diante de Deus - Boletim virtual.pdf';
import pdf714 from '/pdf/714 - Distorção do corbã - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'ENXERGANDO A CRISTO COM CLAREZA: O MILAGRE PEDAGÓGICO',
  date: '09/08/2026',
  version: '717',
  pdf: pdf717,
};

export const previousBulletin1: Bulletin = {
  title: 'O SENHOR ESTÁ PERTO DE TODOS',
  date: '02/08/2026',
  version: '716',
  pdf: pdf716,
};

export const previousBulletin2: Bulletin = {
  title: 'A GRANDEZA DE SE CURVAR DIANTE DE DEUS',
  date: '26/07/2026',
  version: '715',
  pdf: pdf715,
};

export const previousBulletin3: Bulletin = {
  title: 'DISTORÇÃO DO CORBÃ',
  date: '19/07/2026',
  version: '714',
  pdf: pdf714,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '09/08/2026' &&
  previousBulletin1.date === '02/08/2026' &&
  previousBulletin2.date === '26/07/2026' &&
  previousBulletin3.date === '19/07/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}