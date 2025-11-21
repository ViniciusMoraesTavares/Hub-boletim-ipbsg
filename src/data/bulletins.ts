import { Bulletin } from '../types';

// PDFs atuais e anteriores (do diretório public/pdf)
import atual from '/pdf/680 - Até aqui nos ajudou o SENHOR II - Boletim virtual.pdf';
import anterior1 from '/pdf/677 - A Biblia ou o Pecado - Boletim virtual.pdf';
import anterior2 from '/pdf/678 - O AMOR QUE VAI ATÉ A CRUZ - Boletim virtual.pdf';
import anterior3 from '/pdf/679 - Até aqui nos ajudou o SENHOR - 36 Anos - Boletim virtual.pdf';

export const currentBulletin: Bulletin = {
  title: 'Até aqui nos ajudou o Senhor. II',
  date: '23/11/2025',
  pdf: atual,
  version: '680', 
};

export const previousBulletins: Bulletin[] = [
  { title: 'A Biblia ou o Pecado', date: '02/11/2025', pdf: anterior1, version: '677' },
  { title: 'O AMOR QUE VAI ATÉ A CRUZ', date: '09/11/2025', pdf: anterior2, version: '678' },
  { title: 'Até aqui nos ajudou o SENHOR - 36 anos', date: '16/11/2025', pdf: anterior3, version: '679' },
];

