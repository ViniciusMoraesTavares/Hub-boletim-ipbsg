import { Bulletin } from '../types';

import pdf685 from '/pdf/685 - AGRACIADOS PARA SERMOS CANAIS DE GRAÇA - Boletim virtual.pdf';
import pdf684 from '/pdf/684 - O SENTIDO DA VIDA ESTÁ EM DEUS pt II  - Boletim virtual.pdf';
import pdf683 from '/pdf/683 - O SENTIDO DA VIDA ESTÁ EM DEUS - Boletim virtual.pdf';
import pdf682 from '/pdf/682 - A igreja deve ser testemunha aqui e também lá! - Boletim virtual.pdf';

// Boletim atual disponível sem PDF: manter título, data e versão
export const currentBulletin: Partial<Bulletin> & Pick<Bulletin, 'title' | 'date' | 'version'> = {
  title: 'AGRACIADOS PARA SERMOS CANAIS DE GRAÇA',
  date: '28/12/2025',
  version: '685',
  pdf: pdf685,
};

export const previousBulletin1: Bulletin = {
  title: 'O SENTIDO DA VIDA ESTÁ EM DEUS pt II',
  date: '21/12/2025',
  pdf: pdf684,
  version: '684',
};

export const previousBulletin2: Bulletin = {
  title: 'O SENTIDO DA VIDA ESTÁ EM DEUS',
  date: '14/12/2025',
  pdf: pdf683,
  version: '683',
};

export const previousBulletin3: Bulletin = {
  title: 'A igreja deve ser testemunha aqui e também lá!',
  date: '07/12/2025',
  pdf: pdf682,
  version: '682',
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];
