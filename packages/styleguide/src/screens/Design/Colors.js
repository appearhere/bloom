import React from 'react';

import Swatch from '../../components/Swatch/Swatch';
import { H, D } from '../../components/Scaffold/Scaffold';

import { brand, greys, ui } from './swatches';
import css from './Colors.css';

const Colors = () => (
  <div>
    <H level={1}>Colors</H>
    <D>
      <H level={2}>Brand</H>
      <div className={css.colorGroup}>
        {brand.map(color => (
          <Swatch
            key={color.id}
            className={css.color}
            name={color.name}
            hex={color.hex}
            rgb={color.rgb}
            variable={color.variable}
          />
        ))}
      </div>
    </D>
    <D>
      <H level={2}>Greys</H>
      <div className={css.colorGroup}>
        {greys.map(color => (
          <Swatch
            key={color.id}
            className={css.color}
            name={color.name}
            hex={color.hex}
            rgb={color.rgb}
            variable={color.variable}
          />
        ))}
      </div>
    </D>
    <D>
      <H level={2}>UI</H>
      <div className={css.colorGroup}>
        {ui.map(color => (
          <Swatch
            key={color.id}
            className={css.color}
            name={color.name}
            hex={color.hex}
            rgb={color.rgb}
            variable={color.variable}
          />
        ))}
      </div>
    </D>
  </div>
);

export default Colors;
