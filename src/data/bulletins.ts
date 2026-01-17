import { Bulletin } from '../types';

// Atualização: boletim 688 como atual (18/01/2026) e três anteriores em ordem cronológica
import pdf688 from '/pdf/688 - A PREGAÇÃO DE JOÃO BATISTA - Boletim virtual.pdf';
import pdf687 from '/pdf/687 - APROXIME SEU FILHO DA IGREJA - Boletim virtual.pdf';
import pdf685 from '/pdf/685 - AGRACIADOS PARA SERMOS CANAIS DE GRAÇA - Boletim virtual.pdf';
import pdf684 from '/pdf/684 - O SENTIDO DA VIDA ESTÁ EM DEUS pt II  - Boletim virtual.pdf';

export const currentBulletin: Partial<Bulletin> & Pick<Bulletin, 'title' | 'date' | 'version'> = {
  title: 'A PREGAÇÃO DE JOÃO BATISTA',
  date: '18/01/2026',
  version: '688',
  pdf: pdf688,
};

export const previousBulletin1: Bulletin = {
  title: 'APROXIME SEU FILHO DA IGREJA',
  date: '11/01/2026',
  pdf: pdf687,
  version: '687',
};

export const previousBulletin2: Bulletin = {
  title: 'AGRACIADOS PARA SERMOS CANAIS DE GRAÇA',
  date: '28/12/2025',
  pdf: pdf685,
  version: '685',
};

export const previousBulletin3: Bulletin = {
  title: 'O SENTIDO DA VIDA ESTÁ EM DEUS pt II',
  date: '21/12/2025',
  pdf: pdf684,
  version: '684',
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];
