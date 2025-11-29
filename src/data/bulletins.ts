import { Bulletin } from '../types';

// PDFs atuais e anteriores (do diretório public/pdf)
import atual from '/pdf/681 - A Consciência do Controle de Deus afasta a ansiedade - Boletim virtual.pdf';
import anterior1 from '/pdf/678 - O AMOR QUE VAI ATÉ A CRUZ - Boletim virtual.pdf';
import anterior2 from '/pdf/679 - Até aqui nos ajudou o SENHOR - 36 Anos - Boletim virtual.pdf';
import anterior3 from '/pdf/680 - Até aqui nos ajudou o SENHOR II - Boletim virtual.pdf';

export const currentBulletin: Bulletin = {
  title: 'A Consciência do Controle de Deus afasta a ansiedade',
  date: '30/11/2025',
  pdf: atual,
  version: '681', 
};

export const previousBulletins: Bulletin[] = [
  { title: 'O AMOR QUE VAI ATÉ A CRUZ', date: '09/11/2025', pdf: anterior1, version: '678' },
  { title: 'Até aqui nos ajudou o SENHOR - 36 anos', date: '16/11/2025', pdf: anterior2, version: '679' },
  { title: 'Até aqui nos ajudou o SENHOR II', date: '23/11/2025', pdf: anterior3, version: '680' },
];

