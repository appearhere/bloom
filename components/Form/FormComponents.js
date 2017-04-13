/* eslint-disable react/no-multi-comp */
import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './FormComponents.css';

export const Field = ({ className, children }) => (
  <div className={ cx(css.field, className) }>
    { children }
  </div>
);

export const Meta = ({ className, children }) => (
  <span className={ cx(css.meta, className) }>
    { children }
  </span>
);

export const Description = ({ className, children }) => (
  <span className={ cx(css.description, className) }>
    { children }
  </span>
);

export const Label = (props) => {
  const {
    className,
    children,
    htmlFor,
    error,
    optionalLabel,
  } = props;

  return (
    <label
      htmlFor={ htmlFor }
      className={ cx(
        css.label,
        error ? css.error : null,
        className
      ) }
    >
      { children } { optionalLabel && (
        <span className={ css.optional }>{ optionalLabel }</span>
      ) }
    </label>
  );
};

export const Value = ({ className, children }) => (
  <span className={ cx(css.value, className) }>
    { children }
  </span>
);

export const InputWrapper = ({ className, children }) => (
  <div className={ cx(css.inputWrapper, className) }>
    { children }
  </div>
);

const sharedPropTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Field.propTypes = sharedPropTypes;
Meta.propTypes = sharedPropTypes;
Description.propTypes = sharedPropTypes;
Label.propTypes = {
  ...sharedPropTypes,
  htmlFor: PropTypes.string,
  error: PropTypes.string,
  optionalLabel: PropTypes.string,
};
Value.propTypes = sharedPropTypes;
InputWrapper.propTypes = sharedPropTypes;
/* eslint-enable react/no-multi-comp */