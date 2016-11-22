import React, { PropTypes, Component } from 'react';
import uniqueId from 'lodash/fp/uniqueId';
import { subscribe } from 'subscribe-ui-event';
import { canUseDOM } from 'exenv';

import css from './BackgroundColorSwitcher.css';

export default class BackgroundColorSwitcher extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
    threshold: PropTypes.number,
  };

  static defaultProps = {
    // %
    threshold: 50,
  };

  constructor(props) {
    super(props);

    this.state = {
      visibleChildIndex: -1,
    };

    this.id = uniqueId('bgColorSwitcher');
  }

  componentDidMount() {
    this.handleScroll();

    this.resizeEventSubscription = subscribe('resize', this.handleScroll, {
      useRAF: true,
    });

    this.scrollEventSubscription = subscribe('scroll', this.handleScroll, {
      useRAF: true,
    });
  }

  componentWillUnmount() {
    this.scrollEventSubscription.unsubscribe();
    this.resizeEventSubscription.unsubscribe();
  }

  handleScroll = () => {
    if (!canUseDOM) return;

    const { children, threshold } = this.props;
    /* eslint-disable no-undef */
    const viewportHeight = window.innerHeight;
    /* eslint-enable no-undef */

    for (let i = 0; i < children.length; i += 1) {
      const { top } = this.sections[i].getBoundingClientRect();
      const actualThreshold = viewportHeight * (threshold / 100);

      if ((top * -1) < actualThreshold) {
        this.setState({
          visibleChildIndex: i,
        });

        break;
      }
    }
  };

  sections = {};

  render() {
    const { children } = this.props;
    const { visibleChildIndex } = this.state;

    let backgroundColor = null;
    if (visibleChildIndex > -1 && visibleChildIndex < children.length) {
      backgroundColor = children[visibleChildIndex].props['data-bgColor'];
    }

    // reset refs in case children have changed
    this.sections = {};

    return (
      <div
        ref={ (c) => { this.wrapper = c; } }
        className={ css.root }
        style={ {
          backgroundColor,
        } }
      >
        { children.map((child, i) => (
          <div
            key={ `${this.id}-section-${i}` }
            ref={ (c) => { this.sections[i] = c; } }
          >
            { child }
          </div>
        )) }
      </div>
    );
  }
}