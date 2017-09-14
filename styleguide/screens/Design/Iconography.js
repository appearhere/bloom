import React from 'react';

import IconShowcase from '../../components/IconShowcase/IconShowcase';

import { uiIcons, brandIcons } from './icons';

import type from '../../typography.css';
import css from './Iconography.css';

const Iconography = () => (
  <div>
    <h1 className={ type.h1 }>Icons</h1>
    <h2 className={ type.h2 }>UI Icons</h2>
    <div className={ css.iconGroup }>
      { uiIcons.map(icon => (
        <div key={ icon.value } className={ css.icon }>
          <IconShowcase
            name={ icon.name }
            value={ icon.value }
          />
        </div>
      )) }
    </div>
    <h2 className={ type.h2 }>Brand Icons</h2>
    <div className={ css.iconGroup }>
      { brandIcons.map(icon => (
        <div key={ icon.value } className={ css.icon }>
          <IconShowcase
            name={ icon.name }
            value={ icon.value }
            brandIcon={ <icon.valueIcon /> }
          />
        </div>
      )) }
    </div>
  </div>
);

export default Iconography;
