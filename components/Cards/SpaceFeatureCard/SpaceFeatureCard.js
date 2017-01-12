import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import { applyContainerQuery } from 'react-container-query';

import css from './SpaceFeatureCard.css';
import PictureCard from '../PictureCard/PictureCard';

const query = {
  [css.large]: {
    minWidth: 192,
  },
  [css.full]: {
    minHeight: 360,
  },
};

/* eslint-disable react/prefer-stateless-function */
class SpaceFeatureCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    location: PropTypes.string,
    containerQuery: PropTypes.shape({
      [css.large]: PropTypes.bool,
      [css.full]: PropTypes.bool,
    }),
    className: PropTypes.string,
    children: PropTypes.any,
  };

  render() {
    const {
      name,
      price,
      location,
      containerQuery,
      className,
      children: _children,
      ...rest
    } = this.props;

    const classes = cx(
      css.root,
      containerQuery,
      className,
    );


    return (
      <PictureCard { ...rest } className={ classes }>
        <div className={ css.inner }>
          <span className={ css.location }>
            { location }
          </span>
          <div className={ css.bottom }>
            <div className={ css.name }>
              { name }
            </div>
            <div className={ css.price }>
              { price }
            </div>
          </div>
        </div>
      </PictureCard>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default applyContainerQuery(SpaceFeatureCard, query);