import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { applyContainerQuery } from 'react-container-query';

import FittedImage from '../../FittedImage/FittedImage';
import Card from '../Card/Card';

import css from './EditorialCard.css';

const query = {
  [css.large]: {
    minWidth: 400,
  },
};

class EditorialCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    src: PropTypes.string,
    allowHorizontal: PropTypes.bool,
    forceHorizontal: PropTypes.bool,
    containerQuery: PropTypes.shape({
      [css.horizontal]: PropTypes.bool,
      [css.large]: PropTypes.bool,
    }),
  };

  static defaultProps = {
    allowHorizontal: true,
  };

  render() {
    const {
      title,
      className,
      src,
      children,
      containerQuery,
      allowHorizontal,
      forceHorizontal,
      ...rest,
    } = this.props;

    const renderHorizontal = (allowHorizontal && containerQuery[css.horizontal]) ||
      forceHorizontal;

    const classes = cx(
      css.root, {
        ...containerQuery,
        [css.horizontal]: renderHorizontal,
      },
      className,
    );

    return (
      <Card { ...rest } className={ classes }>
        <div className={ css.imageContainer }>
          <FittedImage
            src={ src }
            alt={ title }
            className={ css.image }
          />
        </div>
        <div className={ css.content }>
          <span className={ css.title }>{ title }</span>
          <div className={ css.body }>{ children }</div>
        </div>
      </Card>
    );
  }
}

export default applyContainerQuery(EditorialCard, query);
