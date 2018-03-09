import PropTypes from 'prop-types';
import React from 'react';

import mergeObjectStrings from '../../utils/mergeObjectStrings/mergeObjectStrings';
import InputField from '../Form/InputField/InputField';
import css from './FunnelInputField.css';

const FunnelInputField = ({ classNames, ...rest }) => {
  const classes = mergeObjectStrings(css, classNames);

  return <InputField {...rest} classNames={classes} />;
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
};

FunnelInputField.defaultProps = {
  classNames: {},
};

export default FunnelInputField;
