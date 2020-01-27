//@flow

import getValidIndex from '../../utils/getValidIndex/getValidIndex';

const tabKeyboardHandler = (keyCode: number, currentIndex: number, tabsLength: number) => {
  switch (keyCode) {
    // Left/Up
    case 37:
    case 38:
      return getValidIndex(currentIndex - 1, tabsLength, 1);
    // Right/Down
    case 39:
    case 40:
      return getValidIndex(currentIndex + 1, tabsLength, 1);
    // Home
    case 36:
      return 0;
    // End
    case 35:
      return tabsLength - 1;
    // Enter/Space
    case 13:
    case 32:
      return currentIndex;
    default:
      return -1;
  }
};

export default tabKeyboardHandler;
