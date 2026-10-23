import { Bulletin } from '../types';

import pdf728 from '/pdf/728 - Quando a fé reconhece sua fraqueza - Boletim virtual.pdf';
import pdf727 from '/pdf/727 - Ouvir o Filho no caminho da cruz - Boletim virtual.pdf';
import pdf726 from '/pdf/726 - Ensinar é caminhar junto - Boletim virtual.pdf';
import pdf725 from '/pdf/725 - Quando a riqueza esconde a pobreza espiritual - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'QUANDO A FÉ RECONHECE SUA FRAQUEZA',
  date: '25/10/2026',
  version: '728',
  pdf: pdf728,
};

export const previousBulletin1: Bulletin = {
  title: 'OUVIR O FILHO NO CAMINHO DA CRUZ',
  date: '18/10/2026',
  version: '727',
  pdf: pdf727,
};

export const previousBulletin2: Bulletin = {
  title: 'ENSINAR É CAMINHAR JUNTO',
  date: '11/10/2026',
  version: '726',
  pdf: pdf726,
};

export const previousBulletin3: Bulletin = {
  title: 'QUANDO A RIQUEZA ESCONDE A POBREZA ESPIRITUAL',
  date: '04/10/2026',
  version: '725',
  pdf: pdf725,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '25/10/2026' &&
  previousBulletin1.date === '18/10/2026' &&
  previousBulletin2.date === '11/10/2026' &&
  previousBulletin3.date === '04/10/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}
