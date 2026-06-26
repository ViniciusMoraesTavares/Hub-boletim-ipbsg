import { Bulletin } from '../types';

import pdf711 from '/pdf/711 - A unção com óleo Símbolo, não amuleto - Boletim virtual.pdf';
import pdf710 from '/pdf/710 - A Fé que Sustenta a Oração - Boletim virtual.pdf';
import pdf709 from '/pdf/709 - O Valor de uma Escolha De Bitcoins a Porcos - Boletim virtual.pdf';
import pdf708 from '/pdf/708 - Com Cristo no barco tudo vai muito bem - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'A unção com óleo: Símbolo, não amuleto',
  date: '28/06/2026',
  version: '711',
  pdf: pdf711,
};

export const previousBulletin1: Bulletin = {
  title: 'A Fé que Sustenta a Oração',
  date: '21/06/2026',
  version: '710',
  pdf: pdf710,
};

export const previousBulletin2: Bulletin = {
  title: 'O Valor de uma Escolha: De Bitcoins a Porcos',
  date: '14/06/2026',
  version: '709',
  pdf: pdf709,
};

export const previousBulletin3: Bulletin = {
  title: 'COM CRISTO NO BARCO TUDO VAI MUITO BEM',
  date: '07/06/2026',
  version: '708',
  pdf: pdf708,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '28/06/2026' &&
  previousBulletin1.date === '21/06/2026' &&
  previousBulletin2.date === '14/06/2026' &&
  previousBulletin3.date === '07/06/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}
