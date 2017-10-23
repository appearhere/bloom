import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';

import Input from '../Input/Input';
import noop from '../../../utils/noop';
import mergeObjectStrings from '../../../utils/mergeObjectStrings/mergeObjectStrings';
import css from './Input.css';

class AutoCompleteInput extends Component {
  static propTypes = {
    InputComponent: PropTypes.any,
    inputClassNames: PropTypes.object,
    className: PropTypes.string,
    onFocus: noop,
    onBlur: noop,
  };

  static defaultProps = {
    InputComponent: Input,
  };

  state = {
    hasFocus: false,
  };

  focus = () => {
    this.input.focus();
    this.handleFocus();
  }

  blur = () => {
    this.input.blur();
    this.handleBlur();
  }

  handleFocus = () => {
    const { onFocus } = this.props;
    this.setState({ hasFocus: true }, onFocus);
  };

  handleBlur = () => {
    const { onBlur } = this.props;
    this.setState({ hasFocus: false }, onBlur);
  };

  render() {
    const { InputComponent, className, inputClassNames, ...rest } = this.props;
    const { hasFocus } = this.state;

    return (
      <div
        className={ cx(
          css.root,
          hasFocus ? css.focus : null,
          className,
        ) }
      >
        <InputComponent
          { ...rest }
          ref={ (c) => { this.input = c; } }
          classNames={ mergeObjectStrings(inputClassNames, {
            root: css.root,
            wrapper: css.wrapper,
            input: css.input,
          }) }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
        />
        <div className={ css.activeMarker } />
      </div>
    );
  }
}

export default props => <AutoCompleteInput { ...props } />;
