import React from 'react';
import cx from 'classnames';

import Specimen from '../../components/Specimen/Specimen';
import { H, D } from '../../components/Scaffold/Scaffold';

import css from './Typography.css';

const Typography = () => (
  <div>
    <H level={ 1 }>Typography</H>
    <D>
      <H level={ 2 }>Font Family</H>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
          specimen: cx(css.specimen, css.fontLargeI),
        } }
        attributes={ ['Avenir Next'] }
      >
        <div>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
        <div>a b c d e f g h i j k l m n o p q r s t u v w x y z</div>
        <div>0 1 2 3 4 5 6 7 8 9 0</div>
      </Specimen>
    </D>
    <D>
      <H level={ 2 }>Font sizes</H>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
          specimen: cx(css.specimen, css.fontLargeV),
        } }
        attributes={ [
          'Large V',
          '2.75rem / 44px',
          '--fontsize-large-v',
        ] }
      >
        We started with a little store for the Queen
      </Specimen>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
          specimen: cx(css.specimen, css.fontLargeIv),
        } }
        attributes={ [
          'Large Iv',
          '2rem / 32px',
          '--fontsize-large-iv',
        ] }
      >
        We started with a little store for the Queen
      </Specimen>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
          specimen: cx(css.specimen, css.fontLargeIii),
        } }
        attributes={ [
          'Large Iii',
          '1.75rem / 28px',
          '--fontsize-large-iii',
        ] }
      >
        We started with a little store for the Queen
      </Specimen>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
          specimen: cx(css.specimen, css.fontLargeIi),
        } }
        attributes={ [
          'Large Ii',
          '1.5rem / 24px',
          '--fontsize-large-ii',
        ] }
      >
        We started with a little store for the Queen
      </Specimen>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
          specimen: cx(css.specimen, css.fontLargeI),
        } }
        attributes={ [
          'Large I',
          '1.1875rem / 19px',
          '--fontsize-large-i',
        ] }
      >
        We started with a little store for the Queen
      </Specimen>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
          specimen: cx(css.specimen, css.fontRegular),
        } }
        attributes={ [
          'Regular',
          '1rem / 16px',
          '--fontsize-regular',
        ] }
      >
        We started with a little store for the Queen
      </Specimen>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
          specimen: cx(css.specimen, css.fontSmallI),
        } }
        attributes={ [
          'Small',
          '0.875rem / 14px',
          '--fontsize-small-i',
        ] }
      >
        We started with a little store for the Queen
      </Specimen>
      <Specimen
        classNames={ {
          root: css.specimenRoot,
          specimenContainer: css.specimenContainer,
          specimen: cx(css.specimen, css.fontSmallIi),
        } }
        attributes={ [
          'Small Ii',
          '0.6875rem / 11px',
          '--fontsize-small-ii',
        ] }
      >
        We started with a little store for the Queen
      </Specimen>
    </D>
    <D>
      <H level={ 2 }>Font weights</H>
      <div className={ css.weightGroup }>
        <Specimen
          classNames={ {
            root: cx(css.specimenRoot, css.weight),
            specimenContainer: css.specimenContainer,
            specimen: cx(css.specimen, css.fontLargeV, css.regular),
          } }
          attributes={ [
            'Regular',
            '--fontweight-regular',
          ] }
        >
          Aa
        </Specimen>
        <Specimen
          classNames={ {
            root: cx(css.specimenRoot, css.weight),
            specimenContainer: css.specimenContainer,
            specimen: cx(css.specimen, css.fontLargeV, css.demi),
          } }
          attributes={ [
            'Demi',
            '--fontweight-demi',
          ] }
        >
          Aa
        </Specimen>
        <Specimen
          classNames={ {
            root: cx(css.specimenRoot, css.weight),
            specimenContainer: css.specimenContainer,
            specimen: cx(css.specimen, css.fontLargeV, css.bold),
          } }
          attributes={ [
            'Bold',
            '--fontweight-bold',
          ] }
        >
          Aa
        </Specimen>
      </div>
    </D>
  </div>
);

export default Typography;
