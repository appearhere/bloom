import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import throttle from 'lodash/fp/throttle';
import { canUseDOM } from 'exenv';

import m from '../../globals/modifiers.css';
import css from './ScrollableNavBar.css';

export default class ScrollableNavBar extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    threshold: PropTypes.number,
    className: PropTypes.string,
    /* eslint-disable react/no-unused-prop-types */
    containerQuery: PropTypes.shape({
      [css.centered]: PropTypes.bool,
    }),
    /* eslint-enable react/no-unused-prop-types */
  };

  static defaultProps = {
    threshold: 1,
  };

  constructor(props) {
    super(props);

    this.state = {
      edgeNearlyReached: 'left',
    };

    this.actualListWidth = 0;
    this.handleEdgeNearlyReached = throttle(100, this.handleEdgeNearlyReached);
  }

  componentDidMount() {
    this.scrollable.addEventListener('scroll', this.handleEdgeNearlyReached);
    this.getActualListWidth();
    this.handleEdgeNearlyReached();
  }

  componentWillUnmount() {
    this.scrollable.removeEventListener('scroll', this.handleEdgeNearlyReached);
  }

  getActualListWidth = () => {
    if (!canUseDOM) return;

    const { scrollable } = this;
    const listItems = Array.prototype.slice.call(
      scrollable.querySelectorAll(`.${css.item}`)
    );

    const unpaddedWidth = listItems.reduce((prev, component) =>
      prev + component.offsetWidth
    , 0);

    const leftPadding = parseInt(
      /* eslint-disable no-undef */
      window.getComputedStyle(scrollable, null).getPropertyValue('padding-left').slice('px')[0],
      10
      /* eslint-enable no-undef */
    );
    const rightPadding = parseInt(
      /* eslint-disable no-undef */
      window.getComputedStyle(scrollable, null).getPropertyValue('padding-right').slice('px')[0],
      10
      /* eslint-enable no-undef */
    );

    this.actualListWidth = unpaddedWidth + leftPadding + rightPadding;
  };

  handleEdgeNearlyReached = () => {
    if (!canUseDOM) return;

    const { navigation, scrollable, actualListWidth } = this;
    const { threshold } = this.props;
    const { left: leftPosition } = scrollable.getBoundingClientRect();
    const { scrollLeft: scrollPosition } = scrollable;
    const outerWidth = navigation.getBoundingClientRect().width;
    if (scrollPosition <= leftPosition + threshold) {
      this.setState({
        edgeNearlyReached: 'left',
      });
    } else if (actualListWidth - outerWidth - scrollPosition < threshold) {
      this.setState({
        edgeNearlyReached: 'right',
      });
    } else {
      this.setState({
        edgeNearlyReached: null,
      });
    }
  };

  render() {
    const { children, className, containerQuery } = this.props;
    const { edgeNearlyReached } = this.state;

    const classes = cx(
      css.root,
      {
        [css.left]: edgeNearlyReached === 'left',
        [css.right]: edgeNearlyReached === 'right',
      },
      className,
      containerQuery,
      m.fontRegular);

    return (
      <nav className={ classes } ref={ (c) => { this.navigation = c; } }>
        <div className={ css.listWrapper } ref={ (c) => { this.scrollable = c; } }>
          <ul className={ css.list }>
            { children && children(({
              className: childClassName,
              href,
              label,
              active,
              ...rest
            }) => {
              const itemClasses = cx(css.item, childClassName, {
                [css.active]: active,
              });
              const linkClasses = cx(css.link, {
                [css.activeLink]: active,
              });

              return (
                <li className={ itemClasses } { ...rest }>
                  <a className={ linkClasses } href={ href }>{ label }</a>
                </li>
              );
            }) }
          </ul>
        </div>
      </nav>
    );
  }
}