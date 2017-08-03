import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './SignPost.css';

const SignPost = ({ title, children, className, ...rest }) => (
  <div { ...rest } className={ cx(css.root, className) }>
    <span className={ css.title }>
      { title }
    </span>
    <div className={ css.body }>
      { children }
    </div>
  </div>
);

SignPost.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SignPost;
