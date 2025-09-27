import { Bulletin } from '../types';

// PDFs atuais e anteriores (do diretório public/pdf)
import atual from '/pdf/672 - Um convite à adoração - Boletim virtual.pdf';
import anterior1 from '/pdf/669 - A Consagração dos primogênitos - Boletim virtual.pdf';
import anterior2 from '/pdf/670-UMA JORNADA-MAIS-LONGA-Boletim-virtual.pdf';
import anterior3 from '/pdf/671 - DIGA AO POVO QUE MARCHEM.pdf';

export const currentBulletin: Bulletin = {
  title: 'Um convite à adoração',
  date: '28/09/2025',
  pdf: atual,
  version: '672',
};

export const previousBulletins: Bulletin[] = [
  { title: '669 - A Consagração dos primogênitos', date: '', pdf: anterior1, version: '669' },
  { title: '670 - UMA JORNADA MAIS LONGA', date: '', pdf: anterior2, version: '670' },
  { title: '671 - DIGA AO POVO QUE MARCHEM', date: '', pdf: anterior3, version: '671' },
];
