import { Bulletin } from '../types';

import pdf697 from '/pdf/697 - DESCANSE NO COLO DE DEUS - Boletim virtual.pdf';
import pdf696 from '/pdf/696 - A AUTORIDADE DE JESUS - Boletim virtual.pdf';
import pdf695 from '/pdf/695 - O Chamado Radical ao Discipulado - Boletim virtual.pdf';
import pdf693 from '/pdf/693 - Lições de Daniel - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'DESCANSE NO COLO DE DEUS',
  date: '22/03/2026',
  version: '697',
  pdf: pdf697,
};

export const previousBulletin1: Bulletin = {
  title: 'A AUTORIDADE DE JESUS',
  date: '15/03/2026',
  version: '696',
  pdf: pdf696,
};

export const previousBulletin2: Bulletin = {
  title: 'O Chamado Radical ao Discipulado',
  date: '08/03/2026',
  version: '695',
  pdf: pdf695,
};

export const previousBulletin3: Bulletin = {
  title: 'Lições de Daniel',
  date: '22/02/2026',
  version: '693',
  pdf: pdf693,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '22/03/2026' &&
  previousBulletin1.date === '15/03/2026' &&
  previousBulletin2.date === '08/03/2026' &&
  previousBulletin3.date === '22/02/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}