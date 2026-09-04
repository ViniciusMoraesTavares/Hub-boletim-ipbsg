import { Bulletin } from '../types';

import pdf721 from '/pdf/721 - Saia de cima do muro - Boletim virtual.pdf';
import pdf720 from '/pdf/720 - Fiéis em qualquer circunstância - A igreja de Esmirna - Boletim virtual.pdf';
import pdf719 from '/pdf/719 - Carta à Igreja de Éfeso - Boletim virtual.pdf';
import pdf718 from '/pdf/718 - ASSEMBLEIA EXTRAORDINÁRIA PARA ELEIÇÃO - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'SAIA DE CIMA DO MURO',
  date: '06/09/2026',
  version: '721',
  pdf: pdf721,
};

export const previousBulletin1: Bulletin = {
  title: 'FIÉIS EM QUALQUER CIRCUNSTÂNCIA: A IGREJA DE ESMIRNA',
  date: '30/08/2026',
  version: '720',
  pdf: pdf720,
};

export const previousBulletin2: Bulletin = {
  title: 'CARTA À IGREJA DE ÉFESO',
  date: '23/08/2026',
  version: '719',
  pdf: pdf719,
};

export const previousBulletin3: Bulletin = {
  title: 'ASSEMBLEIA EXTRAORDINÁRIA PARA ELEIÇÃO',
  date: '16/08/2026',
  version: '718',
  pdf: pdf718,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '06/09/2026' &&
  previousBulletin1.date === '30/08/2026' &&
  previousBulletin2.date === '23/08/2026' &&
  previousBulletin3.date === '16/08/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}
