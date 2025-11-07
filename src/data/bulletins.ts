import { Bulletin } from '../types';

// PDFs atuais e anteriores (do diretório public/pdf)
import atual from '/pdf/678 - O AMOR QUE VAI ATÉ A CRUZ - Boletim virtual.pdf';
import anterior1 from '/pdf/675 - SOLA FIDE - Boletim virtual.pdf';
import anterior2 from '/pdf/676 - Soli Deo Gloria - Boletim virtual.pdf';
import anterior3 from '/pdf/677 - A Biblia ou o Pecado - Boletim virtual.pdf';

export const currentBulletin: Bulletin = {
  title: 'O AMOR QUE VAI ATÉ A CRUZ',
  date: '09/11/2025',
  pdf: atual,
  version: '678',
};

export const previousBulletins: Bulletin[] = [
  { title: 'SOLA FIDE', date: '19/10/2025', pdf: anterior1, version: '675' },
  { title: 'Soli Deo Gloria', date: '26/10/2025', pdf: anterior2, version: '676' },
  { title: 'A Biblia ou o Pecado', date: '02/11/2025', pdf: anterior3, version: '677' },
];