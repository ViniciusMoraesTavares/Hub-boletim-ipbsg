import { Bulletin } from '../types';

import pdf701 from '/pdf/701 - Quando se abandona o amor - Boletim virtual.pdf';
import pdf700 from '/pdf/700 - JESUS É O SENHOR DO SÁBADO - Boletim virtual.pdf';
import pdf699 from '/pdf/699 - O PARALÍTICO OS AMIGOS E A FÉ - Boletim virtual.pdf';
import pdf698 from '/pdf/698 - JESUS, O SERVO REI - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'QUANDO SE ABANDONA O AMOR',
  date: '19/04/2026',
  version: '701',
  pdf: pdf701,
};

export const previousBulletin1: Bulletin = {
  title: 'JESUS É O SENHOR DO SÁBADO',
  date: '12/04/2026',
  version: '700',
  pdf: pdf700,
};

export const previousBulletin2: Bulletin = {
  title: 'O PARALÍTICO, OS AMIGOS E A FÉ',
  date: '05/04/2026',
  version: '699',
  pdf: pdf699,
};

export const previousBulletin3: Bulletin = {
  title: 'JESUS, O SERVO REI',
  date: '29/03/2026',
  version: '698',
  pdf: pdf698,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '19/04/2026' &&
  previousBulletin1.date === '12/04/2026' &&
  previousBulletin2.date === '05/04/2026' &&
  previousBulletin3.date === '29/03/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}