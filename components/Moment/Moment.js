import React, { PropTypes } from 'react';
import cx from 'classnames';

import Wrapper from '../Wrapper/Wrapper';

import css from './Moment.css';
import Icon from '../Icon/Icon';

const Moment = ({ icon, title, children, className }) => (
  <Wrapper className={ cx(css.root, className) }>
    <div className={ css.inner }>
      <div className={ css.header }>
        <Icon name={ icon } className={ css.icon } />
        <div className={ css.title }>{ title }</div>
      </div>
      <div className={ css.body }>
        { children }
      </div>
    </div>
  </Wrapper>
);

Moment.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Moment.defaultProps = {
  icon: 'tick-c',
};

export default Moment;