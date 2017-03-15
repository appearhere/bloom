import { canUseDOM } from 'exenv';

import css from './BodyClassNameConductor.css';

export default class BodyClassNameConductor {
  static classNameOriginMap = {};

  constructor(origin) {
    this.origin = origin;
  }

  getClassNameOriginMap = className =>
    BodyClassNameConductor.classNameOriginMap[className] || new Set();

  getBody = () => {
    if (!this.body) this.body = document.querySelector('body');
    return this.body;
  }

  addClassNameOrigin = (className) => {
    const originList = this.getClassNameOriginMap(className);
    originList.add(this.origin);

    BodyClassNameConductor.classNameOriginMap = Object.assign({},
      BodyClassNameConductor.classNameOriginMap, {
        [className]: originList,
      }
    );
  };

  removeClassNameOrigin = (className) => {
    const originList = this.getClassNameOriginMap(className);
    originList.delete(this.origin);

    BodyClassNameConductor.classNameOriginMap = Object.assign({},
      BodyClassNameConductor.classNameOriginMap, {
        [className]: originList,
      }
    );
  };

  add = (className) => {
    if (!canUseDOM) return;

    this.addClassNameOrigin(className);

    if (!this.getBody().classList.contains(css[className])) {
      this.getBody().classList.add(css[className]);
    }
  };

  remove = (className) => {
    if (!canUseDOM) return;

    this.removeClassNameOrigin(className);

    if (
      this.getClassNameOriginMap(className).size <= 0 &&
      this.getBody().classList.contains(css[className])
    ) {
      this.getBody().classList.remove(css[className]);
    }
  };

  toggle = (className) => {
    if (!canUseDOM) return;

    const originMap = this.getClassNameOriginMap(className);

    if (originMap.has(this.origin)) {
      this.remove(className);
    } else {
      this.add(className);
    }
  };
}