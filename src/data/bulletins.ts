import { Bulletin } from '../types';

import pdf732 from '/pdf/732 - Quando a lei nos conduz a Cristo - Boletim virtual.pdf';
import pdf731 from '/pdf/731 - Casamento uma aliança diante de Deus - Boletim virtual.pdf';
import pdf730 from '/pdf/730 - Sal em nós mesmos - Boletim virtual.pdf';
import pdf729 from '/pdf/729 - Conhecidos por Deus e conduzidos por sua presença - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'Quando a lei nos conduz a Cristo',
  date: '22/11/2026',
  version: '732',
  pdf: pdf732,
};

export const previousBulletin1: Bulletin = {
  title: 'Casamento uma aliança diante de Deus',
  date: '15/11/2026',
  version: '731',
  pdf: pdf731,
};

export const previousBulletin2: Bulletin = {
  title: 'Sal em nós mesmos',
  date: '08/11/2026',
  version: '730',
  pdf: pdf730,
};

export const previousBulletin3: Bulletin = {
  title: 'Conhecidos por Deus e conduzidos por sua presença',
  date: '01/11/2026',
  version: '729',
  pdf: pdf729,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '22/11/2026' &&
  previousBulletin1.date === '15/11/2026' &&
  previousBulletin2.date === '08/11/2026' &&
  previousBulletin3.date === '01/11/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}
