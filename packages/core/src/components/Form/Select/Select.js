// @flow
import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import cx from 'classnames';

import mergeObjectStrings from '../../../utils/mergeObjectStrings/mergeObjectStrings';
import Icon from '../../Icon/Icon';
import noop from '../../../utils/noop';
import css from './Select.css';

type Classnames = {
  wrapper: string,
  select: string,
  high: string,
  error: string,
  post: string,
  errorMsg: string,
  enter: string,
  enterActive: string,
  appear: string,
  appearActive: string,
  leave: string,
  leaveActive: string,
}

type Props = {
  onFocus: Function,
  onBlur: Function,
  onChange: Function,
  name: string,
  id: string,
  required: boolean,
  classNames: Classnames,
  hasError: boolean,
  multiple: boolean,
  children: React.Node,
  value: string | Array<number>,
  error: string,
  priority: 'high',
}

type State = {
  hasFocus: boolean,
}
export default class Select extends React.Component<Props, State> {
  select: ?HTMLSelectElement;

  static defaultProps = {
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
  };

  state = {
    hasFocus: false,
  };

  focus = (): void => {
    this.select && this.select.focus();
    this.handleFocus();
  };

  blur = (): void => {
    this.select && this.select.blur();
    this.handleBlur();
  };

  handleFocus = (): void => {
    const { onFocus } = this.props;
    this.setState({ hasFocus: true }, onFocus);
  };

  handleBlur = (): void => {
    const { onBlur } = this.props;
    this.setState({ hasFocus: false }, onBlur);
  };

  handleChange = (e: SyntheticInputEvent<>) => {
    const { onChange, name, multiple } = this.props;
    if (!this.select) return;
    const value = multiple
      ? [].filter.call(this.select.options, o => o.selected).map(o => o.value)
      : e.target.value;

    onChange(e, name, value);
  };

  render() {
    const { hasFocus } = this.state;

    const {
      name,
      id,
      required,
      error,
      classNames,
      multiple,
      value,
      children,
      priority,
      ...rest
    } = this.props;

    const mergedClassNames = mergeObjectStrings(css, classNames);

    const classes = cx(
      mergedClassNames.select,
      hasFocus ? mergedClassNames.focus : null,
      error ? css.error : null,
      css[priority],
    );

    return (
      <div className={mergedClassNames.wrapper}>
        <select
          {...rest}
          ref={c => {
            this.select = c;
          }}
          className={classes}
          name={name}
          id={id}
          required={required}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          value={value}
          multiple={multiple}
        >
          {children}
        </select>
        {!multiple && <Icon name="chevron" className={mergedClassNames.arrow} />}
        <CSSTransitionGroup
          className={mergedClassNames.post}
          transitionName={css}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionAppearTimeout={500}
          transitionAppear
        >
          {error && error.length > 0 && <div className={mergedClassNames.errorMsg}>{error}</div>}
        </CSSTransitionGroup>
      </div>
    );
  }
}
