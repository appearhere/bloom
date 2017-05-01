import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './ProfileCard.css';

const ProfileCard = ({ image, children, className, ...rest }) => (
  <div { ...rest } className={ className }>
    <img src={ image } className={ css.img } />
    { children }
  </div>
);

ProfileCard.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProfileCard;