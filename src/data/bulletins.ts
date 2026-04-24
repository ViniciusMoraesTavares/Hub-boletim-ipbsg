import { Bulletin } from '../types';

import pdf702 from '/pdf/702 - O que te leva a Jesus - Boletim virtual.pdf';
import pdf701 from '/pdf/701 - Quando se abandona o amor - Boletim virtual.pdf';
import pdf700 from '/pdf/700 - JESUS É O SENHOR DO SÁBADO - Boletim virtual.pdf';
import pdf699 from '/pdf/699 - O PARALÍTICO OS AMIGOS E A FÉ - Boletim virtual.pdf';


// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'O que te leva a Jesus?',
  date: '26/04/2026',
  version: '702',
  pdf: pdf702,
};

export const previousBulletin1: Bulletin = {
  title: 'Quando se abandona o amor',
  date: '19/04/2026',
  version: '701',
  pdf: pdf701,
};

export const previousBulletin2: Bulletin = {
  title: 'JESUS É O SENHOR DO SÁBADO',
  date: '12/04/2026',
  version: '700',
  pdf: pdf700,
};

export const previousBulletin3: Bulletin = {
  title: 'O PARALÍTICO OS AMIGOS E A FÉ',
  date: '05/04/2026',
  version: '699',
  pdf: pdf699,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '26/04/2026' &&
  previousBulletin1.date === '19/04/2026' &&
  previousBulletin2.date === '12/04/2026' &&
  previousBulletin3.date === '05/04/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}