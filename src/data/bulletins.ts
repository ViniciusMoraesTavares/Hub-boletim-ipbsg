import { Bulletin } from '../types';

import pdf719 from '/pdf/719 - Carta à Igreja de Éfeso - Boletim virtual.pdf';
import pdf718 from '/pdf/718 - ASSEMBLEIA EXTRAORDINÁRIA PARA ELEIÇÃO - Boletim virtual.pdf';
import pdf717 from '/pdf/717 - Enxergando a Cristo com Clareza  O milagre pedagógico - Boletim virtual.pdf';
import pdf716 from '/pdf/716 - O SENHOR ESTÁ PERTO DE TODOS - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'CARTA À IGREJA DE ÉFESO',
  date: '23/08/2026',
  version: '719',
  pdf: pdf719,
};

export const previousBulletin1: Bulletin = {
  title: 'ASSEMBLEIA EXTRAORDINÁRIA PARA ELEIÇÃO',
  date: '16/08/2026',
  version: '718',
  pdf: pdf718,
};

export const previousBulletin2: Bulletin = {
  title: 'ENXERGANDO A CRISTO COM CLAREZA: O MILAGRE PEDAGÓGICO',
  date: '09/08/2026',
  version: '717',
  pdf: pdf717,
};

export const previousBulletin3: Bulletin = {
  title: 'O SENHOR ESTÁ PERTO DE TODOS',
  date: '02/08/2026',
  version: '716',
  pdf: pdf716,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '23/08/2026' &&
  previousBulletin1.date === '16/08/2026' &&
  previousBulletin2.date === '09/08/2026' &&
  previousBulletin3.date === '02/08/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}