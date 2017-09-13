import React, { PropTypes } from 'react';

import mergeObjectStrings from '../../../utils/mergeObjectStrings/mergeObjectStrings';
import css from './Specimen.css';

const Specimen = ({ classNames, children, attributes }) => {
  const classes = mergeObjectStrings(css, classNames);

  return (
    <div className={ classes.root }>
      <div className={ classes.specimenContainer }>
        <span className={ classes.specimen }>
          { children }
        </span>
      </div>
      { attributes.length > 0 && (
        <ul className={ classes.attributes }>
          { attributes.map((attribute, i) => (
            <li key={ i } className={ classes.attribute }>
              { attribute }
            </li>
          )) }
        </ul>
      ) }
    </div>
  );
};

Specimen.propTypes = {
  classNames: PropTypes.shape({
    root: PropTypes.string,
    specimenContainer: PropTypes.string,
    specimen: PropTypes.string,
    attribute: PropTypes.string,
  }),
  attributes: PropTypes.array,
  children: PropTypes.node,
};

Specimen.defaultProps = {
  attributes: [],
};

export default Specimen;
