import svgClean from '../../utils/svg-clean';
import svgReplaceClassName from '../../utils/svg-replaceClassname';
import css from './ValueIcon.css';

import iconPunch from './icons/icon-punch.svg';
import iconThumbsUp from './icons/icon-thumbs-up.svg';
import iconNoBull from './icons/icon-no-bull.svg';
import iconHandshake from './icons/icon-handshake.svg';
import iconOpen from './icons/icon-open.svg';
import iconScissors from './icons/icon-scissors.svg';

const clean = icon => svgReplaceClassName(svgClean(icon), css);

export default {
  'boxing-glove': clean(iconPunch),
  'thumbs-up': clean(iconThumbsUp),
  'no-bull': clean(iconNoBull),
  handshake: clean(iconHandshake),
  open: clean(iconOpen),
  scissors: clean(iconScissors),
};