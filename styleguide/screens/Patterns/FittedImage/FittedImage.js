import React from 'react';
import cx from 'classnames';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, C, A } from '../../../components/Scaffold/Scaffold';

import FittedImage from '../../../../components/FittedImage/FittedImage';

import css from './FittedImage.css';
import m from '../../../../globals/modifiers.css';

const FittedImageDocumentation = () => (
  <div>
    <H level={ 1 }>Fitted Image</H>
    <T elm="p" className={ cx(m.mtr, m.largeI, m.demi) }>
      In CSS we’re able to use the <C>background-size</C> property to avoid weird
      image crops and ensure elements with background images look great at all
      sizes.
    </T>
    <T elm="p" className={ m.mtr }>
      Similarly, modern browsers have introduced the <C>object-fit</C> property
      which allows us to do exactly the same thing but instead
      with <C>img</C> and <C>video</C> elements. Unfortunately, support for
      this <A href="https://caniuse.com/#search=object-fit">property is patchy</A>.
      Luckily we are able
      to <A href="https://github.com/bfred-it/object-fit-images">polyfill the functionality</A> as
      required.
    </T>
    <T elm="p" className={ m.mtr }>
      To use <C>object-fit</C> with your images, use the <C>FittedImage</C> component
      which automatically runs the polyfill once the component has mounted.
    </T>
    <D>
      <H level={ 2 }>Object-fit: cover</H>
      <T elm="p" className={ m.mtr }>
        <C>cover</C> will resize the image to fit it’s container. If the image doesn’t
        match the aspect ratio, the image will be clipped to fit.
      </T>
      <Specimen
        classNames={ {
          root: m.mtr,
          specimenContainer: m.par,
        } }
        code={ '<FittedImage className={ css.cover } src="..." />' }
      >
        <div className={ css.imageContainer }>
          <FittedImage
            className={ cx(css.image, css.cover) }
            src="https://source.unsplash.com/360x270/weekly"
          />
        </div>
      </Specimen>
    </D>
    <D>
      <H level={ 2 }>Object-fit: contain</H>
      <T elm="p" className={ m.mtr }>
        <C>contain</C> will scale the image to fit the container whilst preserving
        it’s aspect ratio. This will result in a letterbox effect.
      </T>
      <Specimen
        classNames={ {
          root: m.mtr,
          specimenContainer: m.par,
        } }
        code={ '<FittedImage className={ css.cover } src="..." />' }
      >
        <div className={ css.imageContainer }>
          <FittedImage
            className={ cx(css.image, css.contain) }
            src="https://source.unsplash.com/360x270/weekly"
          />
        </div>
      </Specimen>
    </D>
  </div>
);

export default FittedImageDocumentation;
