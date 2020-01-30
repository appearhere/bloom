// @flow

import * as React from 'react';
import cx from 'classnames';

import css from './Tabs.css';

type Props = {
  value: number,
  selected: boolean,
  className: string,
  children: React.Node,
  onClick: Function,
  onFocus: Function,
  onBlur: Function,
}

export default class Tab extends React.Component<Props> {
  component: ?HTMLButtonElement;

  handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    const { onClick, value } = this.props;
    onClick(e, parseInt(value, 10));
  };

  handleFocus = (e: SyntheticEvent<HTMLButtonElement>) => {
    const { onFocus, value } = this.props;
    onFocus(e, parseInt(value, 10));
  };

  handleBlur = (e: SyntheticEvent<HTMLButtonElement>) => {
    const { onBlur, value } = this.props;
    onBlur(e, parseInt(value, 10));
  };

  focus = () => {
    this.component && this.component.focus();
  };

  blur = () => {
    this.component && this.component.blur();
  };

  render() {
    const { value, selected, className, children, ...rest } = this.props;

    const classes = cx(css.tab, selected ? css.tabActive : null, className);

    return (
      <button
        {...rest}
        ref={c => {
          this.component = c;
        }}
        type="button"
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onClick={this.handleClick}
        className={classes}
        value={value}
        tabIndex={selected ? 0 : -1}
      >
        {children}
      </button>
    );
  }
}
