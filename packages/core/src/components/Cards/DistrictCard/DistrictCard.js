import PropTypes from 'prop-types';
import React from 'react';
import css from './DistrictCard.css';
import FittedImage from "../../FittedImage/FittedImage";
import Card from "../Card/Card";

const DistrictCard = props => {
  const {title, subtitle, src, alt, href} = props;


  return (
    <Card href={href} className={css.district}>
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

DistrictCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  src: PropTypes.string,
  href: PropTypes.string,
};

export default DistrictCard;
