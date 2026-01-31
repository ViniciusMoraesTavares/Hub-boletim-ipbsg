import { Bulletin } from '../types';

// Atualização: lista de boletins com o mais recente primeiro
import pdf690 from '/pdf/690 - A TENTAÇÃO DE JESUS - Boletim virtual.pdf';
import pdf689 from '/pdf/689 - O BATISMO DE JOÃO - Boletim virtual.pdf';
import pdf688 from '/pdf/688 - A PREGAÇÃO DE JOÃO BATISTA - Boletim virtual.pdf';
import pdf687 from '/pdf/687 - APROXIME SEU FILHO DA IGREJA - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'A TENTAÇÃO DE JESUS',
  date: '01/02/2026',
  version: '690',
  pdf: pdf690,
};

export const previousBulletin1: Bulletin = {
  title: 'O BATISMO DE JOÃO',
  date: '25/01/2026',
  pdf: pdf689,
  version: '689',
};

export const previousBulletin2: Bulletin = {
  title: 'A PREGAÇÃO DE JOÃO BATISTA',
  date: '18/01/2026',
  pdf: pdf688,
  version: '688',
};

export const previousBulletin3: Bulletin = {
  title: 'APROXIME SEU FILHO DA IGREJA',
  date: '11/01/2026',
  pdf: pdf687,
  version: '687',
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];
