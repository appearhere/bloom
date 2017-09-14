import React from 'react';

import Swatch from '../../components/Swatch/Swatch';

import { brand, greys, ui } from './swatches';
import type from '../../typography.css';
import css from './Colors.css';

const Colors = () => (
  <div>
    <h1 className={ type.h1 }>Colors</h1>
    <h2 className={ type.h2 }>Brand</h2>
    <div className={ css.colorGroup }>
      { brand.map(color => (
        <Swatch
          key={ color.id }
          className={ css.color }
          name={ color.name }
          hex={ color.hex }
          rgb={ color.rgb }
          variable={ color.variable }
        />
      )) }
    </div>
    <h2 className={ type.h2 }>Greys</h2>
    <div className={ css.colorGroup }>
      { greys.map(color => (
        <Swatch
          key={ color.id }
          className={ css.color }
          name={ color.name }
          hex={ color.hex }
          rgb={ color.rgb }
          variable={ color.variable }
        />
      )) }
    </div>
    <h2 className={ type.h2 }>UI</h2>
    <div className={ css.colorGroup }>
      { ui.map(color => (
        <Swatch
          key={ color.id }
          className={ css.color }
          name={ color.name }
          hex={ color.hex }
          rgb={ color.rgb }
          variable={ color.variable }
        />
      )) }
    </div>
  </div>
);

export default Colors;
