import React, { Component, PropTypes, cloneElement } from 'react';

import {
  Field,
  Meta,
  Label,
  Value,
  Placeholder,
  Description,
  InputWrapper,
} from '../FormComponents';

export default class InputField extends Component {
  static propTypes = {
    classNames: PropTypes.shape({
      root: PropTypes.string,
      meta: PropTypes.string,
      label: PropTypes.string,
      valueReplay: PropTypes.string,
      description: PropTypes.string,
    }),
    Element: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    id: PropTypes.string.isRequired,
    meta: PropTypes.node,
    label: PropTypes.node,
    description: PropTypes.node,
    children: PropTypes.element,
    error: PropTypes.node,
    valueReplay: PropTypes.node,
    placeholder: PropTypes.node,
    required: PropTypes.bool,
    optionalLabel: PropTypes.string,
  };

  static defaultProps = {
    classNames: {},
    Element: Field,
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
      placeholder,
      required,
      optionalLabel,
      ...rest,
    } = this.props;

    const descriptionId = `${id}-description`;
    const sharedProps = { error };

    return (
      <Element className={ classNames.root }>
        { meta && (
          <Meta
            { ...sharedProps }
            className={ classNames.meta }
          >
            { meta }
          </Meta>
        ) }
        <Label
          { ...sharedProps }
          htmlFor={ id }
          className={ classNames.label }
          optionalLabel={ !required && optionalLabel }
        >
          { label }
        </Label>
        { !valueReplay && placeholder ? (
          <Placeholder
            { ...sharedProps }
            className={ classNames.valueReplay }
          >
            { placeholder }
          </Placeholder>
        ) : (
          <Value
            { ...sharedProps }
            className={ classNames.valueReplay }
          >
            { valueReplay }
          </Value>
        ) }
        { description && (
          <Description
            { ...sharedProps }
            id={ descriptionId }
            className={ classNames.description }
          >
            { description }
          </Description>
        ) }
        { children && (
          <InputWrapper
            { ...sharedProps }
            classNames={ classNames.inputWrapper }
          >
            { cloneElement(children, {
              ...rest,
              ...sharedProps,
              ref: (c) => { this.input = c; },
              name: id,
              id,
              required,
              'aria-describedby': descriptionId,
            }) }
          </InputWrapper>
        ) }
      </Element>
    );
  }
}
