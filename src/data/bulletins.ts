import { Bulletin } from '../types';

import pdf703 from '/pdf/703 - MARCAS DO CHAMADO DE CRISTO - Boletim virtual.pdf';
import pdf702 from '/pdf/702 - O que te leva a Jesus - Boletim virtual.pdf';
import pdf701 from '/pdf/701 - Quando se abandona o amor - Boletim virtual.pdf';
import pdf700 from '/pdf/700 - JESUS É O SENHOR DO SÁBADO - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'MARCAS DO CHAMADO DE CRISTO',
  date: '03/05/2026',
  version: '703',
  pdf: pdf703,
};

export const previousBulletin1: Bulletin = {
  title: 'O que te leva a Jesus?',
  date: '26/04/2026',
  version: '702',
  pdf: pdf702,
};

export const previousBulletin2: Bulletin = {
  title: 'Quando se abandona o amor',
  date: '19/04/2026',
  version: '701',
  pdf: pdf701,
};

export const previousBulletin3: Bulletin = {
  title: 'JESUS É O SENHOR DO SÁBADO',
  date: '12/04/2026',
  version: '700',
  pdf: pdf700,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '03/05/2026' &&
  previousBulletin1.date === '26/04/2026' &&
  previousBulletin2.date === '19/04/2026' &&
  previousBulletin3.date === '12/04/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}