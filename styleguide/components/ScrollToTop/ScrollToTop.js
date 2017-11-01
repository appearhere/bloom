/*
  global
  window: true,
 */

import PropTypes from 'prop-types';

import { Component } from 'react';
import { withRouter } from 'react-router-dom';

/**
 * https://reacttraining.com/react-router/web/guides/scroll-restoration
 */
class ScrollToTop extends Component {
  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.node,
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
