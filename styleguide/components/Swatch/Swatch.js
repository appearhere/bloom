import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './Swatch.css';

const Color = ({ name, hex, rgb, variable }) => (
  <div className={ css.root }>
    <div className={ css.colorContainer }>
      <div
        className={ css.color }
        style={ {
          backgroundColor: rgb,
        } }
      />
    </div>
    <ul className={ css.attributes }>
      <li
        className={ cx(
          css.attribute,
          css.name
        ) }
      >
        { name }
      </li>
      <li
        className={ cx(
          css.attribute,
          css.hex
        ) }
      >
        { hex }
      </li>
      <li
        className={ cx(
          css.attribute,
          css.rgb
        ) }
      >
        { rgb }
      </li>
      <li
        className={ cx(
          css.attribute,
          css.variable
        ) }
      >
        { variable }
      </li>
    </ul>
  </div>
);

Color.propTypes = {
  name: PropTypes.string,
  hex: PropTypes.string,
  rgb: PropTypes.string,
  variable: PropTypes.string,
};

export default Color;
