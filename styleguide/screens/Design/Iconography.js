import React from 'react';

import IconShowcase from '../../components/IconShowcase/IconShowcase';
import { H, D } from '../../components/Scaffold/Scaffold';

import { uiIcons, brandIcons, valueIcons } from './icons';
import css from './Iconography.css';

const Iconography = () => (
  <div>
    <H level={ 1 }>Iconography</H>
    <D>
      <H level={ 2 }>UI Icons</H>
      <div className={ css.iconGroup }>
        { uiIcons.map(icon => (
          <IconShowcase
            key={ icon.value }
            className={ css.icon }
            name={ icon.name }
            value={ icon.value }
          />
        )) }
      </div>
    </D>
    <D>
      <H level={ 2 }>Brand Icons</H>
      <div className={ css.iconGroup }>
        { brandIcons.map(icon => (
          <IconShowcase
            key={ icon.value }
            className={ css.icon }
            name={ icon.name }
            value={ icon.value }
          />
        )) }
      </div>
    </D>
    <D>
      <H level={ 2 }>Value Icons</H>
      <div className={ css.iconGroup }>
        { valueIcons.map(icon => (
          <IconShowcase
            key={ icon.value }
            className={ css.icon }
            name={ icon.name }
            value={ icon.value }
            brandIcon={ <icon.valueIcon /> }
          />
        )) }
      </div>
    </D>
  </div>
);

export default Iconography;
