import svgClean from '../../utils/svg-clean';
import svgReplaceClassName from '../../utils/svg-replaceClassname';
import css from './ValueIcon.css';
/* eslint-disable global-require */
export default {
  'boxing-glove': svgReplaceClassName(svgClean(require('./icons/icon-punch.svg')), css),
  'thumbs-up': svgReplaceClassName(svgClean(require('./icons/icon-thumbs-up.svg')), css),
  'no-bull': svgReplaceClassName(svgClean(require('./icons/icon-no-bull.svg')), css),
  handshake: svgReplaceClassName(svgClean(require('./icons/icon-handshake.svg')), css),
  open: svgReplaceClassName(svgClean(require('./icons/icon-open.svg')), css),
  scissors: svgReplaceClassName(svgClean(require('./icons/icon-scissors.svg')), css),
};
/* eslint-ensable global-require */