import { Bulletin } from '../types';

import pdf729 from '/pdf/729 - Conhecidos por Deus e conduzidos por sua presença - Boletim virtual.pdf';
import pdf728 from '/pdf/728 - Quando a fé reconhece sua fraqueza - Boletim virtual.pdf';
import pdf727 from '/pdf/727 - Ouvir o Filho no caminho da cruz - Boletim virtual.pdf';
import pdf726 from '/pdf/726 - Ensinar é caminhar junto - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'CONHECIDOS POR DEUS E CONDUZIDOS POR SUA PRESENÇA',
  date: '01/11/2026',
  version: '729',
  pdf: pdf729,
};

export const previousBulletin1: Bulletin = {
  title: 'QUANDO A FÉ RECONHECE SUA FRAQUEZA',
  date: '25/10/2026',
  version: '728',
  pdf: pdf728,
};

export const previousBulletin2: Bulletin = {
  title: 'OUVIR O FILHO NO CAMINHO DA CRUZ',
  date: '18/10/2026',
  version: '727',
  pdf: pdf727,
};

export const previousBulletin3: Bulletin = {
  title: 'ENSINAR É CAMINHAR JUNTO',
  date: '11/10/2026',
  version: '726',
  pdf: pdf726,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '01/11/2026' &&
  previousBulletin1.date === '25/10/2026' &&
  previousBulletin2.date === '18/10/2026' &&
  previousBulletin3.date === '11/10/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}
