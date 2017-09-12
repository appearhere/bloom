import React, { PropTypes } from 'react';
import cx from 'classnames';

import Icon from '../../../components/Icon/Icon';

import css from './IconShowcase.css';

const IconShowcase = ({ name, value, brandIcon }) => (
  <div className={ css.root }>
    <div
      className={ cx(
        css.container,
        brandIcon ? css.brand : null,
      ) }
    >
      { !brandIcon ? <Icon name={ value } /> : brandIcon }
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
          css.value
        ) }
      >
        { value }
      </li>
    </ul>
  </div>
);

IconShowcase.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  brandIcon: PropTypes.node,
};

export default IconShowcase;
