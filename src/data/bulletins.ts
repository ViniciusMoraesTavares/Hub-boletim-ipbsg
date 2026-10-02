import { Bulletin } from '../types';

import pdf725 from '/pdf/725 - Quando a riqueza esconde a pobreza espiritual - Boletim virtual.pdf';
import pdf724 from '/pdf/724 - Quando a aparência esconde a realidade - Boletim virtual.pdf';
import pdf723 from '/pdf/723 - Uma igreja pequena nas mãos de um Deus grande - Boletim virtual.pdf';
import pdf722 from '/pdf/722 - Não deixe o amor esfriar - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'QUANDO A RIQUEZA ESCONDE A POBREZA ESPIRITUAL',
  date: '04/10/2026',
  version: '725',
  pdf: pdf725,
};

export const previousBulletin1: Bulletin = {
  title: 'QUANDO A APARÊNCIA ESCONDE A REALIDADE',
  date: '27/09/2026',
  version: '724',
  pdf: pdf724,
};

export const previousBulletin2: Bulletin = {
  title: 'UMA IGREJA PEQUENA NAS MÃOS DE UM DEUS GRANDE',
  date: '20/09/2026',
  version: '723',
  pdf: pdf723,
};

export const previousBulletin3: Bulletin = {
  title: 'NÃO DEIXE O AMOR ESFRIAR',
  date: '13/09/2026',
  version: '722',
  pdf: pdf722,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '04/10/2026' &&
  previousBulletin1.date === '27/09/2026' &&
  previousBulletin2.date === '20/09/2026' &&
  previousBulletin3.date === '13/09/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}
