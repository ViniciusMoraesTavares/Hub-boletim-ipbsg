import { Bulletin } from '../types';

import pdf693 from '/pdf/693 - Lições de Daniel - Boletim virtual.pdf';
import pdf691 from '/pdf/691 - A Lição da Mulher Sunamita - Boletim virtual.pdf';
import pdf690 from '/pdf/690 - A TENTAÇÃO DE JESUS - Boletim virtual.pdf';
import pdf689 from '/pdf/689 - O BATISMO DE JOÃO - Boletim virtual.pdf';


// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'Lições de Daniel',
  date: '20/02/2026',
  version: '693',
  pdf: pdf693,
};

export const previousBulletin1: Bulletin = {
  title: 'A Lição da Mulher Sunamita',
  date: '08/02/2026',
  version: '691',
  pdf: pdf691,
};

export const previousBulletin2: Bulletin = {
  title: 'A TENTAÇÃO DE JESUS',
  date: '01/02/2026',
  pdf: pdf690,
  version: '690',
};

export const previousBulletin3: Bulletin = {
  title: 'O BATISMO DE JOÃO',
  date: '25/01/2026',
  pdf: pdf689,
  version: '689',
};


export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '08/02/2026' &&
  previousBulletin1.date === '01/02/2026' &&
  previousBulletin2.date === '25/01/2026' &&
  previousBulletin3.date === '18/01/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}
