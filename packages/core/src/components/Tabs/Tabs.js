// @flow

import * as React from 'react';
import uniqueId from 'lodash/fp/uniqueId';
import cx from 'classnames';

import ScreenReadable from '../ScreenReadable/ScreenReadable';
import keyboardHandler from './tabKeyboardHandler';
import css from './Tabs.css';

/**
 * Taken heavy influence from http://codepen.io/svinkle/pen/edmDF?editors=0010
 * for a11y
 */
type Props = {
  accessibilityDescription: string,
  children: React.Node,
  initialActiveTabIndex: number,
}

type State = {
  activeTabIndex: number,
  focusedTabIndex: ?number,
}

type Callback<T> = (e?: T) => void;

export default class Tabs extends React.Component<Props, State> {
  id: string;

  static defaultProps = {
    accessibilityDescription: 'Use left and right arrows to navigate between tabs.',
  };

  constructor(props: Props) {
    super(props);

    this.id = uniqueId('tabs_');
  }

  state = {
    activeTabIndex: this.props.initialActiveTabIndex || 0,
    focusedTabIndex: null,
  };

  tabs = {};

  updateTabIndexes = (i: number) => {
    this.setState({
      activeTabIndex: i,
      focusedTabIndex: i,
    });

    this.tabs[i].focus();
  };

  handleClick = (onClick: Callback<SyntheticEvent<>>) => (e: SyntheticEvent<>, i: number) => {
    this.updateTabIndexes(i);
    if (onClick) {
      onClick(e)
    }
  };

  handleFocus = (onFocus: Callback<SyntheticEvent<>>) => (e: SyntheticEvent<>, i: number) => {
    this.setState({ focusedTabIndex: i });
    if(onFocus) {
      onFocus(e);
    }
  };

  handleBlur = (onBlur: Callback<SyntheticEvent<>>) => () => {
    this.setState({ focusedTabIndex: null });
    if (onBlur) {
      onBlur();
    }
  };

  handleKeyDown = (onKeyDown: Callback<KeyboardEvent>) => (e: KeyboardEvent) => {
    const { activeTabIndex } = this.state;
    const { children } = this.props;
    const i = keyboardHandler(e.which, activeTabIndex, React.Children.count(children));

    if (i > -1) {
      e.preventDefault();
      e.stopPropagation();

      this.updateTabIndexes(i);
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  render() {
    const { children, accessibilityDescription } = this.props;
    const { activeTabIndex } = this.state;

    return (
      <div className={css.tabs}>
        <ScreenReadable>
          <span id={`${this.id}-description`}>{accessibilityDescription}</span>
        </ScreenReadable>
        <div className={css.tabsContainer}>
          {React.Children.toArray(children).filter(Boolean).map((child, i) => {
            const id = `${this.id}-${i}-tab`;

            return React.cloneElement(
              child,
              {
                ref: c => {
                  this.tabs[i] = c;
                },
                key: id,
                id,
                value: i,
                selected: activeTabIndex === i,
                onClick: this.handleClick(child.props.onClick),
                onFocus: this.handleFocus(child.props.onFocus),
                onBlur: this.handleBlur(child.props.onBlur),
                onKeyDown: this.handleKeyDown(child.props.onKeyDown),
                'aria-controls': `${this.id}-${i}-panel`,
                'aria-describedby': `${this.id}-description`,
                role: 'tab',
              },
              child.props.label,
            );
          })}
        </div>
        <div className={css.tabsContent}>
          {React.Children.toArray(children).filter(Boolean).map((child, i) => {
            const id = `${this.id}-${i}-panel`;
            const classes = cx(css.tabContent, activeTabIndex === i ? css.tabContentActive : null);

            return (
              <div
                key={id}
                id={id}
                aria-labelledby={`${this.id}-${i}-tab`}
                aria-hidden={activeTabIndex !== i}
                role="tabpanel"
                className={classes}
              >
                {child.props.children}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
