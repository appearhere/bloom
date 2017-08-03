import React, { PropTypes } from 'react';

import mergeObjectStrings from '../../utils/mergeObjectStrings/mergeObjectStrings';
import InputField from '../Form/InputField/InputField';
import css from './FunnelInputField.css';

const FunnelInputField = ({ classNames, valueReplay: _val, ...rest }) => {
  const classes = mergeObjectStrings(css, classNames);

  return (
    <InputField
      { ...rest }
      classNames={ classes }
    />
  );
};

FunnelInputField.propTypes = {
  classNames: PropTypes.shape({
    root: PropTypes.string,
    meta: PropTypes.string,
    label: PropTypes.string,
    valueReplay: PropTypes.string,
    placeholder: PropTypes.string,
    description: PropTypes.string,
  }),
  valueReplay: PropTypes.any,
};

FunnelInputField.defaultProps = {
  classNames: {},
};

export default FunnelInputField;
