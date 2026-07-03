import { Bulletin } from '../types';

import pdf712 from '/pdf/712 - As faces da incredulidade - Boletim virtual.pdf';
import pdf711 from '/pdf/711 - A unção com óleo Símbolo, não amuleto - Boletim virtual.pdf';
import pdf710 from '/pdf/710 - A Fé que Sustenta a Oração - Boletim virtual.pdf';
import pdf709 from '/pdf/709 - O Valor de uma Escolha De Bitcoins a Porcos - Boletim virtual.pdf';

// Boletim atual (mais recente)
export const currentBulletin: Bulletin = {
  title: 'AS FACES DA INCREDULIDADE',
  date: '05/07/2026',
  version: '712',
  pdf: pdf712,
};

export const previousBulletin1: Bulletin = {
  title: 'A unção com óleo: Símbolo, não amuleto',
  date: '28/06/2026',
  version: '711',
  pdf: pdf711,
};

export const previousBulletin2: Bulletin = {
  title: 'A Fé que Sustenta a Oração',
  date: '21/06/2026',
  version: '710',
  pdf: pdf710,
};

export const previousBulletin3: Bulletin = {
  title: 'O Valor de uma Escolha: De Bitcoins a Porcos',
  date: '14/06/2026',
  version: '709',
  pdf: pdf709,
};

export const previousBulletins: Bulletin[] = [
  previousBulletin1,
  previousBulletin2,
  previousBulletin3,
];

// Lista completa com o atual seguido dos anteriores (mais recente → mais antigo)
export const bulletins: Bulletin[] = [currentBulletin, ...previousBulletins];

const __datesOk = (
  currentBulletin.date === '05/07/2026' &&
  previousBulletin1.date === '28/06/2026' &&
  previousBulletin2.date === '21/06/2026' &&
  previousBulletin3.date === '14/06/2026'
);

if (!__datesOk) {
  console.error('Bulletin dates misconfigured');
}
