import PropTypes from 'prop-types';
import React from 'react';
import css from './DistrictCard.css';
import FittedImage from "../../FittedImage/FittedImage";

const DistrictCard = props => {
  const {title, subtitle, src, alt, href} = props;


  return (
    <div className={css.district}>
      <FittedImage src={src} alt={alt} className={css.image}/>
      <div className={css.info}>
        <a href={href} className={css.title}>{title}</a>
        <p className={css.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

DistrictCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  src: PropTypes.string,
  href: PropTypes.string,
};

export default DistrictCard;
