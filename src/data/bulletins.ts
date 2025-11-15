import { Bulletin } from '../types';

// PDFs atuais e anteriores (do diretório public/pdf)
import atual from '/pdf/679 - Até aqui nos ajudou o SENHOR - 36 Anos - Boletim virtual.pdf';
import anterior1 from '/pdf/676 - Soli Deo Gloria - Boletim virtual.pdf';
import anterior2 from '/pdf/677 - A Biblia ou o Pecado - Boletim virtual.pdf';
import anterior3 from '/pdf/678 - O AMOR QUE VAI ATÉ A CRUZ - Boletim virtual.pdf';

export const currentBulletin: Bulletin = {
  title: 'Até aqui nos ajudou o SENHOR - 36 anos da IPB-SG',
  date: '16/11/2025',
  pdf: atual,
  version: '679',
};

export const previousBulletins: Bulletin[] = [
  { title: 'Soli Deo Gloria', date: '26/10/2025', pdf: anterior1, version: '676' },
  { title: 'A Biblia ou o Pecado', date: '02/10/2025', pdf: anterior2, version: '677' },
  { title: 'O AMOR QUE VAI ATÉ A CRUZ', date: '09/11/2025', pdf: anterior3, version: '678' },
];

