// @flow
import * as React from 'react';

import Card from '../Card/Card';
import css from './ContentHubCard.css';
import FittedImage from '../../FittedImage/FittedImage';
import Chip from '../../Chip/Chip';
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
    <Card target="_self" className={classes}>
      <div className={css.imageContainer}>
        <FittedImage src={src} alt={title} className={css.image} />
      </div>
      <div className={css.content}>
        <div className={css.categoryContainer}>
          <span className={css.category}>{category}</span>
          {date && category && ' · '}
          <span className={css.date}>{date}</span>
        </div>
        <a href={href} className={css.title}>{title}</a>
        <p className={css.description}>{description}</p>
        <div className={css.chipContainer}>
          { tags && tags.map((tag) => (
            <Chip
              href={tag.href}
              text={tag.name}
              className={css.chip}
            />
          ))}
        </div>
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
