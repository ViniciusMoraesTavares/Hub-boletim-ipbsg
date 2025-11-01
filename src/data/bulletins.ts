import { Bulletin } from '../types';

// PDFs atuais e anteriores (do diretório public/pdf)
import atual from '/pdf/677 - A Biblia ou o Pecado - Boletim virtual.pdf';
import anterior1 from '/pdf/674 - SOLUS CHRISTUS- Boletim virtual.pdf';
import anterior2 from '/pdf/675 - SOLA FIDE - Boletim virtual.pdf';
import anterior3 from '/pdf/676 - Soli Deo Gloria - Boletim virtual.pdf';

export const currentBulletin: Bulletin = {
  title: 'A Bíblia te afastará do pecado ou o pecado te afastará deste livro',
  date: '02/11/2025',
  pdf: atual,
  version: '677',
};

export const previousBulletins: Bulletin[] = [
  { title: 'SOLUS CHRISTUS', date: '12/10/2025', pdf: anterior1, version: '674' },
  { title: 'SOLA FIDE', date: '05/10/2025', pdf: anterior2, version: '675' },
  { title: 'Soli Deo Gloria', date: '19/10/2025', pdf: anterior3, version: '676' },
];