//@flow
import * as React from 'react';

import cx from 'classnames';

import css from './FormComponents.css';

type Props = {
  className?: string,
  children: React.Node,
  error?: React.Node,
  htmlFor?: string,
  optionalLabel?: string,
};

export const Field = ({ className, children, error }: Props) => (
  <div className={cx(css.field, error ? css.errorField : null, className)}>{children}</div>
);

export const Meta = ({ className, children }: Props) => (
  <span className={cx(css.meta, className)}>{children}</span>
);

export const Description = ({ className, children }: Props) => (
  <span className={cx(css.description, className)}>{children}</span>
);

export const Label = (props: Props) => {
  const { className, children, htmlFor, error, optionalLabel } = props;

  return (
    <label htmlFor={htmlFor} className={cx(css.label, error ? css.error : null, className)}>
      {children} {optionalLabel && <span className={css.optional}>{optionalLabel}</span>}
    </label>
  );
};

export const Value = ({ className, children }: Props) => (
  <span className={cx(css.value, className)}>{children}</span>
);

export const Placeholder = ({ className, children }: Props) => (
  <span className={cx(css.placeholder, className)}>{children}</span>
);

export const InputWrapper = ({ className, children }: Props) => (
  <div className={cx(css.inputWrapper, className)}>{children}</div>
);

/* eslint-enable react/no-multi-comp */
