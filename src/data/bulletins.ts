import { Bulletin } from '../types';

// Atualização: lista de boletins com o mais recente primeiro
import pdf689 from '/pdf/689 - O BATISMO DE JOÃO - Boletim virtual.pdf';
import pdf688 from '/pdf/688 - A PREGAÇÃO DE JOÃO BATISTA - Boletim virtual.pdf';
import pdf687 from '/pdf/687 - APROXIME SEU FILHO DA IGREJA - Boletim virtual.pdf';
import pdf685 from '/pdf/685 - AGRACIADOS PARA SERMOS CANAIS DE GRAÇA - Boletim virtual.pdf';
import pdf684 from '/pdf/684 - O SENTIDO DA VIDA ESTÁ EM DEUS pt II  - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'O BATISMO DE JOÃO',
  date: '25/01/2026',
  version: '689',
  pdf: pdf689,
};

export const previousBulletin1: Bulletin = {
  title: 'A PREGAÇÃO DE JOÃO BATISTA',
  date: '18/01/2026',
  pdf: pdf688,
  version: '688',
};

export const previousBulletin2: Bulletin = {
  title: 'APROXIME SEU FILHO DA IGREJA',
  date: '11/01/2026',
  pdf: pdf687,
  version: '687',
};

export const previousBulletin3: Bulletin = {
  title: 'AGRACIADOS PARA SERMOS CANAIS DE GRAÇA',
  date: '28/12/2025',
  pdf: pdf685,
  version: '685',
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];
