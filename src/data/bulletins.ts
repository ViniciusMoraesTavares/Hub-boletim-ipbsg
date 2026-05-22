import { Bulletin } from '../types';

import pdf706 from '/pdf/706 - O poder da Palavra e o Reino de Deus - Boletim virtual.pdf';
import pdf704 from '/pdf/704 - O PECADO IMPERDOÁVEL - Boletim virtual.pdf';
import pdf703 from '/pdf/703 - MARCAS DO CHAMADO DE CRISTO - Boletim virtual.pdf';
import pdf702 from '/pdf/702 - O que te leva a Jesus - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'O poder da Palavra e o Reino de Deus',
  date: '24/05/2026',
  version: '706',
  pdf: pdf706,
};

export const previousBulletin1: Bulletin = {
  title: 'O PECADO IMPERDOÁVEL',
  date: '10/05/2026',
  version: '704',
  pdf: pdf704,
};

export const previousBulletin2: Bulletin = {
  title: 'MARCAS DO CHAMADO DE CRISTO',
  date: '03/05/2026',
  version: '703',
  pdf: pdf703,
};

export const previousBulletin3: Bulletin = {
  title: 'O que te leva a Jesus?',
  date: '26/04/2026',
  version: '702',
  pdf: pdf702,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '24/05/2026' &&
  previousBulletin1.date === '10/05/2026' &&
  previousBulletin2.date === '03/05/2026' &&
  previousBulletin3.date === '26/04/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}
