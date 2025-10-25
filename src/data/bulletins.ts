import { Bulletin } from '../types';

// PDFs atuais e anteriores (do diretório public/pdf)
import atual from '/pdf/676 - Soli Deo Gloria - Boletim virtual.pdf';
import anterior1 from '/pdf/673 - SOLA SCRIPTURA - Boletim virtual.pdf';
import anterior2 from '/pdf/674 - SOLUS CHRISTUS- Boletim virtual.pdf';
import anterior3 from '/pdf/675 - SOLA FIDE - Boletim virtual.pdf';

export const currentBulletin: Bulletin = {
  title: 'Soli Deo Gloria',
  date: '26/10/2025',
  pdf: atual,
  version: '676',
};

export const previousBulletins: Bulletin[] = [
  { title: 'SOLA SCRIPTURA', date: '12/10/2025', pdf: anterior1, version: '673' },
  { title: 'SOLUS CHRISTUS', date: '05/10/2025', pdf: anterior2, version: '674' },
  { title: 'SOLA FIDE', date: '19/10/2025', pdf: anterior3, version: '675' },
];