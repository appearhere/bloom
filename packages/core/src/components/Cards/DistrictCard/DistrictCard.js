// @flow
import React from 'react';
import css from './DistrictCard.css';
import FittedImage from "../../FittedImage/FittedImage";
import Card from "../Card/Card";
import cx from 'classnames';

type Props = {
  title: string,
  subtitle?: string,
  src: string,
  alt: string,
  href: string,
  truncateText: boolean,
}


const DistrictCard = (props: Props) => {
  const {title, subtitle, src, alt, href, truncateText = true, ...rest} = props;

  return (
    <Card href={href} className={css.district} {...(rest: any)}>
      <div className={css.imageContainer}>
        <FittedImage src={src} alt={alt} className={css.image}/>
      </div>

      <div className={css.content}>
        <h3 className={cx(css.title, { [css.truncated]: truncateText })}>{title}</h3>
        { subtitle &&
          <p className={cx(css.subtitle, { [css.truncated]: truncateText })}>{subtitle}</p>
        }
      </div>
    </Card>
  );
};

DistrictCard.defaultProps = {
  truncateText: true,
};


export default DistrictCard;
