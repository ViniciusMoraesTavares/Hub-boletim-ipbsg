import { Bulletin } from '../types';

// PDFs atuais e anteriores (do diretório public/pdf)
import atual from '/pdf/682 - A igreja deve ser testemunha aqui e também lá! - Boletim virtual.pdf';
import anterior1 from '/pdf/679 - Até aqui nos ajudou o SENHOR - 36 Anos - Boletim virtual.pdf';
import anterior2 from '/pdf/680 - Até aqui nos ajudou o SENHOR II - Boletim virtual.pdf';
import anterior3 from '/pdf/681 - A Consciência do Controle de Deus afasta a ansiedade - Boletim virtual.pdf';

export const currentBulletin: Bulletin = {
  title: 'A igreja deve ser testemunha aqui e também lá!',
  date: '07/12/2025',
  pdf: atual,
  version: '682', 
};

export const previousBulletins: Bulletin[] = [
  { title: 'Até aqui nos ajudou o SENHOR - 36 anos', date: '16/11/2025', pdf: anterior1, version: '679' },
  { title: 'Até aqui nos ajudou o SENHOR II', date: '23/11/2025', pdf: anterior2, version: '680' },
  { title: 'A Consciência do Controle de Deus afasta a ansiedade', date: '30/11/2025', pdf: anterior3, version: '681' },
];