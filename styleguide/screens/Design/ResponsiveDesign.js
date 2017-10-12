import React from 'react';
import { Link } from 'react-router-dom';
import dedent from 'dedent';

import { H, T, D, A, Bq } from '../../components/Scaffold/Scaffold';
import CodeBlock from '../../components/CodeBlock/CodeBlock';

import m from '../../../globals/modifiers.css';
import scaffoldCss from '../../components/Scaffold/Scaffold.css';

const ResponsiveDesign = () => (
  <div>
    <H level={ 1 }>Responsive design</H>
    <Bq
      citation={
        <div className={ m.mtr }>
          John Allsop, "<A href="http://www.alistapart.com/articles/dao/">A Doa of Web Design</A>"
        </div>
      }
      className={ m.mtr }
    >
      The control which designers know in the print medium, and often desire in the web medium,
      is simply a function of the limitation of the printed page. We should embrace the fact that
      the web doesn’t have the same constraints, and design for this flexibility. But first,
      we must 'accept the ebb and flow of things.'
    </Bq>
    <D>
      <H level={ 2 }>Bottom up</H>
      <T elm="p" className={ m.mtr }>
        When it comes to design and building out our interfaces we take a bottom up approach.
        By starting to consider a page in the smallest context it will appear, such as a device
        with a small screen, we are forced to prioritise the important parts of the page. This
        allows us to ensure everything we add to the page provides value to the user, and forces
        us to be ruthless in removing unnecessary cruft and excess features.
      </T>
      <T elm="p" className={ m.mtr }>
        By looking at the smallest context first, we provided feature parity across all devices,
        and provides users of mobile and touch devices with a first class experience.
      </T>
    </D>
    <D>
      <H level={ 2 }>Media queries</H>
      <T elm="p" className={ m.mtr }>
        Media queries allow us to apply CSS rules depending on characteristics of a device or
        browser window. They allow us to create responsive web pages, which are suitable for
        use across many different devices.
      </T>
      <T elm="p" className={ m.mtr }>
        As described <A href="#">above</A> you should take a bottom up approach.
        This means, writing your CSS to address the smallest sizes first.
        We do this for two key reasons:
      </T>
      <ol className={ m.mtr }>
        <T elm="li">
          Larger viewport layouts are typically more complex than their small counterparts.
          With this in mind, you’ll likely end up writing fewer CSS rules to achieve the desired
          result across all scenarios.
        </T>
        <T elm="li">
          By building the page for the lowest common denominator, you’ll be taking into account
          devices that we’re unable to test on, or even those that don’t exist yet.
        </T>
      </ol>
      <T elm="p" className={ m.mtr }>
        When working “bottom up”, it should apparent become that you need to add a media query when
        the page or feature begins to look and feel rubbish. Look to increase the window size until
        this point, add a media query which adds additional styles which improve the page or
        feature’s appearance, then rinse and repeat. Use common sense with doing this, as we don’t
        want to add too many media queries at the expense of bloat in our code.
      </T>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          .container {
            display: inline-block;
            width: 100%;
          }

          @media(min-width: 30rem) {
            .container {
              width: 50%;
            }
          }
        ` }
        syntax="css"
      />
    </D>
    <D>
      <H level={ 2 }>Grid system</H>
      <T elm="p" className={ m.mtr }>
        Unlike many patterns on the web, we don’t follow a specific grid. We take the approach that
        every layout is unique, and deserves a unique set of properties. This allows us to be much
        more flexible, and design for content at hand.
      </T>
      <T elm="p" className={ m.mtr }>
        For common patterns, such as splitting a container in half,
        we used <A href="http://lostgrid.org/">Lost grid</A> to do the work for us. This shouldn’t
        be used for positioning on the page, and only for breaking content into common column sizes.
      </T>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          .outer {
            lost-utility: clearfix;
          }

          .inner {
            lost-column: 1/2;
          }
      ` }
        syntax="css"
      />
    </D>
    <D>
      <H level={ 2 }>Responsive images</H>
      <T elm="p" className={ m.mtr }>
        As our designs are flexible, and transform based on screen size, we need our images to
        fluidly scale. We can do this by filling a space and cropping a selection of the image,
        or by constraining the height/width of an image to scale by retaining it’s aspect ratio.
        see <Link to="/patterns/fitted-image" className={ scaffoldCss.link }>FittedImage</Link>.
      </T>
    </D>
    <D>
      <H level={ 2 }>Screen size over devices</H>
      <T elm="p" className={ m.mtr }>
        Rather than building for ‘devices’ we approach screen size as a whole. So if content doesn’t
        look good as your screen gets bigger, add a media query to fix it.
      </T>
      <T elm="p" className={ m.mtr }>
        Note: It’s important to note that "common" screen sizes don’t exist. And we can never assume
        a user will see a piece of content based on ‘the fold’.
        Refer to <A href="https://iamthefold.com/">iamthefold</A> for more information.
      </T>
    </D>
  </div>
);

export default ResponsiveDesign;
