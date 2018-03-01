/**
 * We don't actually need to do anything with the sticky node component,
 * but having a reference to it beyond just the dependency in package.json
 * seems like a good idea.
 *
 * Also means if we switch out which component we rely on, the import statement
 * can stay pretty much unchanged.
 *
 * https://github.com/yahoo/react-stickynode
 */
import PropTypes from 'prop-types';

import React from 'react';
import StickyNode from '@appearhere/react-stickynode';
import cx from 'classnames';

import css from './StickyNode.css';

const Sticky = ({ className, ...rest }) => {
  const classes = cx(css.root, className);
  return <StickyNode {...rest} className={classes} />;
};

Sticky.propTypes = {
  className: PropTypes.string,
};

export default Sticky;
