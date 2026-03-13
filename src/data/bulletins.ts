import { Bulletin } from '../types';

import pdf696 from '/pdf/696 - A AUTORIDADE DE JESUS - Boletim virtual.pdf';
import pdf695 from '/pdf/695 - O Chamado Radical ao Discipulado - Boletim virtual.pdf';
import pdf694 from '/pdf/694 - O TEMPO CUMPRIDO ARREPENDIMENTO E FÉ - Boletim virtual_compressed.pdf';
import pdf693 from '/pdf/693 - Lições de Daniel - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'A AUTORIDADE DE JESUS',
  date: '15/03/2026',
  version: '696',
  pdf: pdf696,
};

export const previousBulletin1: Bulletin = {
  title: 'O Chamado Radical ao Discipulado',
  date: '08/03/2026',
  version: '695',
  pdf: pdf695,
};

export const previousBulletin2: Bulletin = {
  title: 'Lições de Daniel',
  date: '22/02/2026',
  version: '693',
  pdf: pdf693,
};

export const previousBulletin3: Bulletin = {
  title: 'O TEMPO CUMPRIDO: ARREPENDIMENTO E FÉ',
  date: '01/02/2026',
  version: '694',
  pdf: pdf694,
};


export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '15/03/2026' &&
  previousBulletin1.date === '08/03/2026' &&
  previousBulletin2.date === '22/02/2026' &&
  previousBulletin3.date === '01/02/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}
