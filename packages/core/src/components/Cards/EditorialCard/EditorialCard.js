// @flow
import * as React from 'react';

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

type Css = {
  horizontal: boolean,
  large: boolean
}

type ContainerQuery = {
  css: Css
}

type Props = {
  title: string,
  children: React.Node,
  className?: string,
  src: string,
  allowHorizontal: boolean,
  forceHorizontal?: boolean,
  containerQuery: ContainerQuery,
}

class EditorialCard extends React.Component<Props> {

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
      ...rest
    } = this.props;

    const renderHorizontal = (allowHorizontal && containerQuery[css.horizontal]) || forceHorizontal;

    const classes = cx(
      css.root,
      {
        ...containerQuery,
        [css.horizontal]: renderHorizontal,
      },
      className,
    );

    return (
      <Card {...(rest: any)} className={classes}>
        <div className={css.imageContainer}>
          <FittedImage src={src} alt={title} className={css.image} />
        </div>
        <div className={css.content}>
          <span className={css.title}>{title}</span>
          <div className={css.body}>{children}</div>
        </div>
      </Card>
    );
  }
}

export default applyContainerQuery(EditorialCard, query);
