import { Bulletin } from '../types';

import pdf723 from '/pdf/723 - Uma igreja pequena nas mãos de um Deus grande - Boletim virtual.pdf';
import pdf722 from '/pdf/722 - Não deixe o amor esfriar - Boletim virtual.pdf';
import pdf721 from '/pdf/721 - Saia de cima do muro - Boletim virtual.pdf';
import pdf720 from '/pdf/720 - Fiéis em qualquer circunstância - A igreja de Esmirna - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'UMA IGREJA PEQUENA NAS MÃOS DE UM DEUS GRANDE',
  date: '20/09/2026',
  version: '723',
  pdf: pdf723,
};

export const previousBulletin1: Bulletin = {
  title: 'NÃO DEIXE O AMOR ESFRIAR',
  date: '13/09/2026',
  version: '722',
  pdf: pdf722,
};

export const previousBulletin2: Bulletin = {
  title: 'SAIA DE CIMA DO MURO',
  date: '06/09/2026',
  version: '721',
  pdf: pdf721,
};

export const previousBulletin3: Bulletin = {
  title: 'FIÉIS EM QUALQUER CIRCUNSTÂNCIA: A IGREJA DE ESMIRNA',
  date: '30/08/2026',
  version: '720',
  pdf: pdf720,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '20/09/2026' &&
  previousBulletin1.date === '13/09/2026' &&
  previousBulletin2.date === '06/09/2026' &&
  previousBulletin3.date === '30/08/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}