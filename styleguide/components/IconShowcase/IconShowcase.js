import React, { PropTypes } from 'react';
import cx from 'classnames';

import Specimen from '../Specimen/Specimen';
import Icon from '../../../components/Icon/Icon';

import css from './IconShowcase.css';

const IconShowcase = ({ className, name, value, brandIcon }) => (
  <Specimen
    classNames={ {
      root: className,
      specimenContainer: cx(
        brandIcon ? css.brand : css.icon,
      ),
    } }
    name={ name }
    attributes={ [value] }
  >
    { !brandIcon ? <Icon name={ value } /> : brandIcon }
  </Specimen>
);

IconShowcase.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  brandIcon: PropTypes.node,
};

export default IconShowcase;
