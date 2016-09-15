import React, { PropTypes } from 'react';

const Link = ({ children, ...rest }) => <a { ...rest }>{ children }</a>;

Link.propTypes = {
  children: PropTypes.node,
};

export default Link;