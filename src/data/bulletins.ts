import { Bulletin } from '../types';

// Atual
import pdf684 from '/pdf/684 - O SENTIDO DA VIDA ESTÁ EM DEUS pt II  - Boletim virtual.pdf';

// Anteriores
import pdf683 from '/pdf/683 - O SENTIDO DA VIDA ESTÁ EM DEUS - Boletim virtual.pdf';
import pdf682 from '/pdf/682 - A igreja deve ser testemunha aqui e também lá! - Boletim virtual.pdf';
import pdf681 from '/pdf/681 - A Consciência do Controle de Deus afasta a ansiedade - Boletim virtual.pdf';

// Boletim atual disponível sem PDF: manter título, data e versão
export const currentBulletin: Partial<Bulletin> & Pick<Bulletin, 'title' | 'date' | 'version'> = {
  title: 'O SENTIDO DA VIDA ESTÁ EM DEUS pt II',
  date: '21/12/2025',
  version: '684',
  pdf: pdf684,
};

export const previousBulletin1: Bulletin = {
  title: 'O SENTIDO DA VIDA ESTÁ EM DEUS',
  date: '14/12/2025',
  pdf: pdf683,
  version: '683',
};

export const previousBulletin2: Bulletin = {
  title: 'A igreja deve ser testemunha aqui e também lá!',
  date: '07/12/2025',
  pdf: pdf682,
  version: '682',
};

export const previousBulletin3: Bulletin = {
  title: 'A Consciência do Controle de Deus afasta a ansiedade',
  date: '30/11/2025',
  pdf: pdf681,
  version: '681',
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];
