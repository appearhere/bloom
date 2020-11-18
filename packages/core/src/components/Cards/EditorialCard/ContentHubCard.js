// @flow
import * as React from 'react';

import Card from '../Card/Card';
import css from './ContentHubCard.css';
import FittedImage from '../../FittedImage/FittedImage';
import ChipGroup from '../../ChipGroup/ChipGroup';
import Btn from '../../Btn/Btn';
import cx from 'classnames';

type Tag = {
  href: string,
  name: string,
}

type Props = {
  description?: string,
  category?: string,
  date?: string,
  cta?: string,
  tags?: Array<Tag>,
  src: string,
  title: string,
  href: string,
  onButtonClick?: Function,
  className?: string,
};

const ContentHubCard = ({
  description,
  category,
  date,
  cta,
  tags,
  src,
  title,
  href,
  onButtonClick,
  className,
}: Props) => {

  const handleButtonClick = e => {
    e.stopPropagation();
    e.preventDefault();
    onButtonClick && onButtonClick();
  };

  const classes = cx(className, css.root);

  return (
    <Card className={classes}>
      <div className={css.imageContainer}>
        <FittedImage src={src} alt={title} className={css.image} />
      </div>
      <div className={css.content}>
        <div className={css.categoryContainer}>
          <span className={css.category}>{category}</span>
          {date && category && ' · '}
          <span className={css.date}>{date}</span>
        </div>
        <h3 className={css.title}><a href={href} className={css.titleLink}>{title}</a></h3>
        <p className={css.description}>{description}</p>
        { tags && <ChipGroup tags={tags} className={css.chipContainer} />}
        {cta &&
          <Btn
            className={css.btn}
            context="primary"
            onClick={handleButtonClick}
          >
            {cta}
          </Btn>
        }
      </div>
    </Card>
  );
}

export default ContentHubCard;
