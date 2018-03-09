import PropTypes from 'prop-types';
import React, { Component, Children, cloneElement } from 'react';
import uniqueId from 'lodash/fp/uniqueId';
import cx from 'classnames';

import ScreenReadable from '../ScreenReadable/ScreenReadable';
import keyboardHandler from './tabKeyboardHandler';
import css from './Tabs.css';

/**
 * Taken heavy influence from http://codepen.io/svinkle/pen/edmDF?editors=0010
 * for a11y
 */
export default class Tabs extends Component {
  static propTypes = {
    accessibilityDescription: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    accessibilityDescription: 'Use left and right arrows to navigate between tabs.',
  };

  constructor(props) {
    super(props);

    this.id = uniqueId('tabs_');
  }

  state = {
    activeTabIndex: 0,
    focusedTabIndex: null,
  };

  tabs = {};

  updateTabIndexes = i => {
    this.setState({
      activeTabIndex: i,
      focusedTabIndex: i,
    });

    this.tabs[i].focus();
  };

  handleClick = (e, i) => {
    this.updateTabIndexes(i);
  };

  handleFocus = (e, i) => {
    this.setState({ focusedTabIndex: i });
  };

  handleBlur = () => {
    this.setState({ focusedTabIndex: null });
  };

  handleKeyDown = e => {
    const { activeTabIndex } = this.state;
    const { children } = this.props;
    const i = keyboardHandler(e.which, activeTabIndex, Children.count(children));

    if (i > -1) {
      e.preventDefault();
      e.stopPropagation();

      this.updateTabIndexes(i);
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
          {Children.map(children, (child, i) => {
            const id = `${this.id}-${i}-tab`;

            return cloneElement(
              child,
              {
                ref: c => {
                  this.tabs[i] = c;
                },
                key: id,
                id,
                value: i,
                selected: activeTabIndex === i,
                onClick: this.handleClick,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onKeyDown: this.handleKeyDown,
                'aria-controls': `${this.id}-${i}-panel`,
                'aria-describedby': `${this.id}-description`,
                role: 'tab',
              },
              child.props.label,
            );
          })}
        </div>
        <div className={css.tabsContent}>
          {Children.map(children, (child, i) => {
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
