import React from 'react';
import cx from 'classnames';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, A, C } from '../../../components/Scaffold/Scaffold';

import {
  Carousel,
  PictureCard,
  ControlledCarousel
} from '@appearhere/bloom';

import shared from '../../../shared.css';
import { Modifiers as m } from '@appearhere/bloom';
import css from './Carousel.module.css';

const CarouselDocumentation = () => (
  <div>
    <H level={1}>Carousel</H>
    <T elm="p" className={cx(m.mtr, m.largeI, m.demi)}>
      A carousel is a way of displaying and cycling through a series of content (Images, text or
      custom markup). Carousels are some of the worst ways of displaying content on a page, and in
      most cases, users scroll straight past them. We recommend using as a last case scenario.
    </T>
    <D>
      <H level={2}>Default</H>
      <T elm="p" className={m.mtr}>
        The regular carousel component provides all of the carousel functionality without dictating
        how it is controlled. Use this to build other carousels that require a set of controls
        and/or indicators. It is based on our own fork of{' '}
        <A href="https://github.com/FormidableLabs/nuka-carousel">NukaCarousel</A>.
      </T>
      <Specimen
        classNames={{
          root: m.mtr,
          specimenContainer: m.par,
        }}
        code={dedent`
          <Carousel>
            { /* Slides */ }
          </Carousel>
        `}
      >
        <Carousel>
          <div className={css.slide}>
            <PictureCard
              src="https://i1.wp.com/selectitaly.com/blog/wp-content/uploads/2014/11/Screen-Shot-2014-10-26-at-7.01.19-PM.png"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://i.pinimg.com/originals/62/76/a2/6276a25a5f45db33d3d1986406a24c1b.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://static1.squarespace.com/static/530e4e29e4b0ac922f793833/558248e5e4b00d5e96213624/55824b10e4b0344e14768da4/1434603518100/6th+Course_+Tagliatelle+with+ragu.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://blog4foodies.files.wordpress.com/2012/10/4-guitar-string-pasta.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://b70f084e29f3f8faffb0-389fffc5b90936635d166a32fdb11b6a.ssl.cf3.rackcdn.com/andy-hayler-osteria-francescana-monkfish-pasta-w709-h532.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
        </Carousel>
      </Specimen>
      <H level={3} className={m.mtLgIi}>
        Displaying multiple slides
      </H>
      <T elm="p" className={m.mtr}>
        You can show multiple slides at the same time using the <C>slidesToShow</C> prop.
      </T>
      <Specimen
        classNames={{
          root: m.mtr,
          specimenContainer: m.par,
        }}
        code={dedent`
          <Carousel slidesToShow={ 3 }>
            { /* Slides */ }
          </Carousel>
        `}
      >
        <Carousel slidesToShow={3}>
          <div className={css.slide}>
            <PictureCard
              src="https://i1.wp.com/selectitaly.com/blog/wp-content/uploads/2014/11/Screen-Shot-2014-10-26-at-7.01.19-PM.png"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://i.pinimg.com/originals/62/76/a2/6276a25a5f45db33d3d1986406a24c1b.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://static1.squarespace.com/static/530e4e29e4b0ac922f793833/558248e5e4b00d5e96213624/55824b10e4b0344e14768da4/1434603518100/6th+Course_+Tagliatelle+with+ragu.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://blog4foodies.files.wordpress.com/2012/10/4-guitar-string-pasta.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://b70f084e29f3f8faffb0-389fffc5b90936635d166a32fdb11b6a.ssl.cf3.rackcdn.com/andy-hayler-osteria-francescana-monkfish-pasta-w709-h532.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
        </Carousel>
      </Specimen>
      <H level={3} className={m.mtLgIi}>
        Infinite slides
      </H>
      <T elm="p" className={m.mtr}>
        To make the carousel wrap around when you reach the end of the slides, provide the{' '}
        <C>wrapAround</C> prop.
      </T>
      <Specimen
        classNames={{
          root: m.mtr,
          specimenContainer: m.par,
        }}
        code={dedent`
          <Carousel wrapAround>
            { /* Slides */ }
          </Carousel>
        `}
      >
        <Carousel wrapAround>
          <div className={css.slide}>
            <PictureCard
              src="https://i1.wp.com/selectitaly.com/blog/wp-content/uploads/2014/11/Screen-Shot-2014-10-26-at-7.01.19-PM.png"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://i.pinimg.com/originals/62/76/a2/6276a25a5f45db33d3d1986406a24c1b.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://static1.squarespace.com/static/530e4e29e4b0ac922f793833/558248e5e4b00d5e96213624/55824b10e4b0344e14768da4/1434603518100/6th+Course_+Tagliatelle+with+ragu.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://blog4foodies.files.wordpress.com/2012/10/4-guitar-string-pasta.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://b70f084e29f3f8faffb0-389fffc5b90936635d166a32fdb11b6a.ssl.cf3.rackcdn.com/andy-hayler-osteria-francescana-monkfish-pasta-w709-h532.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
        </Carousel>
      </Specimen>
      <H level={3} className={m.mtLgIi}>
        Peaking
      </H>
      <T elm="p" className={m.mtr}>
        To indicate to the user there is actually more content on the page than just the first
        slide, you can partially show the next and previous slides. To do this, provide the{' '}
        <C>peaking</C> prop.
      </T>
      <Specimen
        classNames={{
          root: m.mtr,
          specimenContainer: m.par,
        }}
        code={dedent`
          <Carousel peaking>
            { /* Slides */ }
          </Carousel>
        `}
      >
        <Carousel peaking>
          <div className={css.slide}>
            <PictureCard
              src="https://i1.wp.com/selectitaly.com/blog/wp-content/uploads/2014/11/Screen-Shot-2014-10-26-at-7.01.19-PM.png"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://i.pinimg.com/originals/62/76/a2/6276a25a5f45db33d3d1986406a24c1b.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://static1.squarespace.com/static/530e4e29e4b0ac922f793833/558248e5e4b00d5e96213624/55824b10e4b0344e14768da4/1434603518100/6th+Course_+Tagliatelle+with+ragu.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://blog4foodies.files.wordpress.com/2012/10/4-guitar-string-pasta.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://b70f084e29f3f8faffb0-389fffc5b90936635d166a32fdb11b6a.ssl.cf3.rackcdn.com/andy-hayler-osteria-francescana-monkfish-pasta-w709-h532.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
        </Carousel>
      </Specimen>
      <T elm="p" className={m.mtr}>
        All of these props, and more (found in the{' '}
        <A href="https://github.com/FormidableLabs/nuka-carousel">NukaCarousel documentation</A>),
        can be used in combination of each other.
      </T>
    </D>
    <D>
      <H level={2} className={shared.componentTitle}>
        Controlled Carousel
      </H>
      <T elm="p" className={m.mtr}>
        You should use this component in the majority of cases where you need a carousel. It
        provides the default set of controls and indicators to provide the base level of interaction
        expected when using a carousel.
      </T>
      <Specimen
        classNames={{
          root: m.mtr,
          specimenContainer: m.par,
        }}
        code={dedent`
          <ControlledCarousel>
            { /* Slides */ }
          </ControlledCarousel>
        `}
      >
        <ControlledCarousel>
          <div className={css.slide}>
            <PictureCard
              src="https://i1.wp.com/selectitaly.com/blog/wp-content/uploads/2014/11/Screen-Shot-2014-10-26-at-7.01.19-PM.png"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://i.pinimg.com/originals/62/76/a2/6276a25a5f45db33d3d1986406a24c1b.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://static1.squarespace.com/static/530e4e29e4b0ac922f793833/558248e5e4b00d5e96213624/55824b10e4b0344e14768da4/1434603518100/6th+Course_+Tagliatelle+with+ragu.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://blog4foodies.files.wordpress.com/2012/10/4-guitar-string-pasta.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
          <div className={css.slide}>
            <PictureCard
              src="https://b70f084e29f3f8faffb0-389fffc5b90936635d166a32fdb11b6a.ssl.cf3.rackcdn.com/andy-hayler-osteria-francescana-monkfish-pasta-w709-h532.jpg"
              center
              href="#"
              className={css.slideContent}
            />
          </div>
        </ControlledCarousel>
      </Specimen>
    </D>
  </div>
);

export default CarouselDocumentation;
