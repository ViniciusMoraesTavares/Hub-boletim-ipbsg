import { Bulletin } from '../types';

// PDFs atuais e anteriores (do diretório public/pdf)
import atual from '/pdf/674-SOLUS_CHRISTUS-Boletim virtual.pdf';
import anterior1 from '/pdf/671 - DIGA AO POVO QUE MARCHEM - Boletim virtual.pdf';
import anterior2 from '/pdf/672 - Um convite à adoração - Boletim virtual.pdf';
import anterior3 from '/pdf/673 - SOLA SCRIPTURA - Boletim virtual.pdf';

export const currentBulletin: Bulletin = {
  title: 'SOLA CHIRISTUS',
  date: '12/10/2025',
  pdf: atual,
  version: '674',
};

export const previousBulletins: Bulletin[] = [
  { title: 'DIGA AO POVO QUE MARCHEM', date: '', pdf: anterior1, version: '671' },
  { title: 'Um convite à adoração', date: '', pdf: anterior2, version: '672' },
  { title: 'SOLA SCRIPTURA', date: '', pdf: anterior3, version: '673' },
];