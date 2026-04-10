import { Bulletin } from '../types';

import pdf700 from '/pdf/700 - JESUS É O SENHOR DO SÁBADO - Boletim virtual.pdf';
import pdf699 from '/pdf/699 - O PARALÍTICO OS AMIGOS E A FÉ - Boletim virtual.pdf';
import pdf698 from '/pdf/698 - JESUS, O SERVO REI - Boletim virtual.pdf';
import pdf697 from '/pdf/697 - DESCANSE NO COLO DE DEUS - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'JESUS É O SENHOR DO SÁBADO',
  date: '12/04/2026',
  version: '700',
  pdf: pdf700,
};

export const previousBulletin1: Bulletin = {
  title: 'O PARALÍTICO, OS AMIGOS E A FÉ',
  date: '05/04/2026',
  version: '699',
  pdf: pdf699,
};

export const previousBulletin2: Bulletin = {
  title: 'JESUS, O SERVO REI',
  date: '29/03/2026',
  version: '698',
  pdf: pdf698,
};

export const previousBulletin3: Bulletin = {
  title: 'DESCANSE NO COLO DE DEUS',
  date: '22/03/2026',
  version: '697',
  pdf: pdf697,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '12/04/2026' &&
  previousBulletin1.date === '05/04/2026' &&
  previousBulletin2.date === '29/03/2026' &&
  previousBulletin3.date === '22/03/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}