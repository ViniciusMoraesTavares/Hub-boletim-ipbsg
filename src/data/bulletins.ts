import { Bulletin } from '../types';

// Atual
import pdf683 from '/pdf/683 - O SENTIDO DA VIDA ESTÁ EM DEUS - Boletim virtual.pdf';

// Anteriores
import pdf682 from '/pdf/682 - A igreja deve ser testemunha aqui e também lá! - Boletim virtual.pdf';
import pdf681 from '/pdf/681 - A Consciência do Controle de Deus afasta a ansiedade - Boletim virtual.pdf';
import pdf680 from '/pdf/680 - Até aqui nos ajudou o SENHOR II - Boletim virtual.pdf';

// Boletim atual disponível sem PDF: manter título, data e versão
export const currentBulletin: Partial<Bulletin> & Pick<Bulletin, 'title' | 'date' | 'version'> = {
  title: 'O SENTIDO DA VIDA ESTÁ EM DEUS',
  date: '14/12/2025',
  pdf: pdf683,
  version: '683',
};

export const previousBulletin1: Bulletin = {
  title: 'A igreja deve ser testemunha aqui e também lá!',
  date: '07/12/2025',
  pdf: pdf682,
  version: '682',
};

export const previousBulletin2: Bulletin = {
  title: 'A Consciência do Controle de Deus afasta a ansiedade',
  date: '30/10/2025',
  pdf: pdf681,
  version: '681',
};

export const previousBulletin3: Bulletin = {
  title: 'Até aqui nos ajudou o SENHOR II',
  date: '23/10/2025',
  pdf: pdf680,
  version: '680',
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];
