import { Bulletin } from '../types';

import pdf687 from '/pdf/687 - APROXIME SEU FILHO DA IGREJA - Boletim virtual.pdf';
import pdf685 from '/pdf/685 - AGRACIADOS PARA SERMOS CANAIS DE GRAÇA - Boletim virtual.pdf';
import pdf684 from '/pdf/684 - O SENTIDO DA VIDA ESTÁ EM DEUS pt II  - Boletim virtual.pdf';
import pdf683 from '/pdf/683 - O SENTIDO DA VIDA ESTÁ EM DEUS - Boletim virtual.pdf';

// Boletim atual disponível sem PDF: manter título, data e versão
export const currentBulletin: Partial<Bulletin> & Pick<Bulletin, 'title' | 'date' | 'version'> = {
  title: 'APROXIME SEU FILHO DA IGREJA',
  date: '11/01/2026',
  version: '687',
  pdf: pdf687,
};

export const previousBulletin1: Bulletin = {
  title: 'AGRACIADOS PARA SERMOS CANAIS DE GRAÇA',
  date: '28/12/2025',
  pdf: pdf685,
  version: '685',
};

export const previousBulletin2: Bulletin = {
  title: 'O SENTIDO DA VIDA ESTÁ EM DEUS pt II',
  date: '21/12/2025',
  pdf: pdf684,
  version: '684',
};

export const previousBulletin3: Bulletin = {
  title: 'O SENTIDO DA VIDA ESTÁ EM DEUS',
  date: '14/12/2025',
  pdf: pdf683,
  version: '683',
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];
