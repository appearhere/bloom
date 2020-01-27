//@flow
import * as React from 'react';

import {
  Field,
  Meta,
  Label,
  Value,
  Placeholder,
  Description,
  InputWrapper,
} from '../FormComponents';

type Classnames = {
  root: string,
  meta: string,
  label: string,
  valueReplay: string,
  description: string,
  inputWrapper: string,
};

type Props = {
  classNames: Classnames,
  Element: string | Function,
  id: string,
  meta?: React.Node,
  label: React.Node,
  description?: React.Node,
  children?: React.Element<any>,
  error: React.Node,
  valueReplay?: React.Node,
  placeholderValue?: React.Node,
  required?: boolean,
  optionalLabel?: string,
};

export default class InputField extends React.Component<Props> {
  input: any;

  static defaultProps = {
    classNames: {},
    Element: Field,
    error: '',
  };

  render() {
    const {
      id,
      Element,
      meta,
      label,
      description,
      children,
      classNames,
      error,
      valueReplay,
      placeholderValue,
      required,
      optionalLabel,
      ...rest
    } = this.props;

    const descriptionId = `${id}-description`;
    const sharedProps = { error };

    return (
      <Element {...sharedProps} className={classNames.root}>
        {meta && (
          <Meta {...sharedProps} className={classNames.meta}>
            {meta}
          </Meta>
        )}
        <Label
          {...sharedProps}
          htmlFor={id}
          className={classNames.label}
          optionalLabel={!required ? optionalLabel : undefined}
        >
          {label}
        </Label>
        {!valueReplay && placeholderValue && (
          <Placeholder {...sharedProps} className={classNames.valueReplay}>
            {placeholderValue}
          </Placeholder>
        )}
        {valueReplay && (
          <Value {...sharedProps} className={classNames.valueReplay}>
            {valueReplay}
          </Value>
        )}
        {description && (
          <Description {...sharedProps} id={descriptionId} className={classNames.description}>
            {description}
          </Description>
        )}
        {children && (
          <InputWrapper {...sharedProps} className={classNames.inputWrapper}>
            {React.cloneElement(children, {
              ...rest,
              ...sharedProps,
              ref: c => {
                this.input = c;
              },
              name: id,
              id,
              required,
              'aria-describedby': descriptionId,
            })}
          </InputWrapper>
        )}
      </Element>
    );
  }
}
