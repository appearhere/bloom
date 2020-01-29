// @flow
import React from 'react';
import css from './DistrictCard.css';
import FittedImage from "../../FittedImage/FittedImage";
import Card from "../Card/Card";

type Props = {
  title: string,
  subtitle: string,
  src: string,
  alt: string,
  href: string,
}


const DistrictCard = (props: Props) => {
  const {title, subtitle, src, alt, href, ...rest} = props;

  return (
    <Card href={href} className={css.district} {...(rest: any)}>
      <div className={css.imageContainer}>
        <FittedImage src={src} alt={alt} className={css.image}/>
      </div>

      <div className={css.content}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.subtitle}>{subtitle}</p>
      </div>
    </Card>
  );
};


export default DistrictCard;
