import { Bulletin } from '../types';

import pdf714 from '/pdf/714 - Distorção do corbã - Boletim virtual.pdf';
import pdf713 from '/pdf/713 - O PASTOR DA NOSSA ALMA - Boletim virtual.pdf';
import pdf712 from '/pdf/712 - As faces da incredulidade - Boletim virtual.pdf';
import pdf711 from '/pdf/711 - A unção com óleo Símbolo, não amuleto - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'DISTORÇÃO DO CORBÃ',
  date: '19/07/2026',
  version: '714',
  pdf: pdf714,
};

export const previousBulletin1: Bulletin = {
  title: 'O PASTOR DA NOSSA ALMA',
  date: '12/07/2026',
  version: '713',
  pdf: pdf713,
};

export const previousBulletin2: Bulletin = {
  title: 'AS FACES DA INCREDULIDADE',
  date: '05/07/2026',
  version: '712',
  pdf: pdf712,
};

export const previousBulletin3: Bulletin = {
  title: 'A unção com óleo: Símbolo, não amuleto',
  date: '28/06/2026',
  version: '711',
  pdf: pdf711,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '19/07/2026' &&
  previousBulletin1.date === '12/07/2026' &&
  previousBulletin2.date === '05/07/2026' &&
  previousBulletin3.date === '28/06/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}
