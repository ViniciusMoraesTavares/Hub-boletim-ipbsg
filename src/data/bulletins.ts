import { Bulletin } from '../types';

// PDFs atuais e anteriores (do diretório public/pdf)
import atual from '/pdf/673 - SOLA SCRIPTURA - Boletim virtual.pdf';
import anterior1 from '/pdf/670 - UMA JORNADA MAIS LONGA - Boletim virtual.pdf';
import anterior2 from '/pdf/671 - DIGA AO POVO QUE MARCHEM - Boletim virtual.pdf';
import anterior3 from '/pdf/672 - Um convite à adoração - Boletim virtual.pdf';

export const currentBulletin: Bulletin = {
  title: 'SOLA SCRIPTURA',
  date: '05/10/2025',
  pdf: atual,
  version: '673',
};

export const previousBulletins: Bulletin[] = [
  { title: 'UMA JORNADA MAIS LONGA', date: '', pdf: anterior1, version: '670' },
  { title: 'DIGA AO POVO QUE MARCHEM', date: '', pdf: anterior2, version: '671' },
  { title: 'Um convite à adoração', date: '', pdf: anterior3, version: '672' },
];