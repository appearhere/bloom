import React from 'react';
import { Link } from 'react-router-dom';
import dedent from 'dedent';
import cx from 'classnames';

import { H, T, D, A, C } from '../../components/Scaffold/Scaffold';
import CodeBlock from '../../components/CodeBlock/CodeBlock';

import m from '../../../globals/modifiers.css';
import scaffoldCss from '../../components/Scaffold/Scaffold.css';
import css from './Modifiers.css';

const Modifiers = () => (
  <div>
    <H level={ 1 }>Modifiers</H>
    <T elm="p" className={ cx(m.mtr, m.largeI, m.demi) }>
      To aid in the development of interfaces at Appear Here, we provide a&nbsp;
      <A href="http://tachyons.io/" className={ css.link }>tachyons</A> inspired
      set of modifier classes. These are helper classes designed to promote consistency
      across each interface, including spacing,&nbsp;
      <Link className={ cx(scaffoldCss.link, css.link) } to="/design/typography">
        typography
      </Link> and&nbsp;
      <Link className={ cx(scaffoldCss.link, css.link) } to="/design/colors">colors</Link>.
    </T>
    <T elm="p" className={ m.mtr }>
      Typically speaking, you should use modifier classes where it is more efficient than writing a
      bespoke CSS rule. They’re great when you need a few basic rules and are great building blocks
      for prototyping. Use modifier classes until the code becomes hard to read.
      A good rule of thumb for this is if you’d have to place the classes on
      multiple lines, or use five different modifiers.
    </T>
    <T elm="p" className={ m.mtr }>For example:</T>
    <CodeBlock
      className={ m.mtr }
      code={ dedent`
          { /* Good */ }
          <div className={ cx(m.mtr, m.bgBlack, m.fgWhite) }>
            ...
          </div>

          { /* Bad */ }
          <div className={ cx(m.mtr, m.bgBlack, m.fgWhite, m.pal, m.widthAuto, m.dib) }>
            ...
          </div>
        ` }
      syntax="jsx"
    />
    <D>
      <H level={ 2 }>Variables</H>
      <H level={ 3 } className={ m.mtr }>Size</H>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          // 12.5rem / 200px
          --size-lg-vii

          // 9rem / 144px
          --size-lg-vi

          // 6rem / 96px
          --size-lg-v

          // 5rem / 80px
          --size-lg-iv

          // 4rem / 64px
          --size-lg-iii

          // 3rem / 48px
          --size-lg-ii

          // 1.5rem / 24px
          --size-lg-i

          // 1rem / 16px
          --size-regular

          // 0.75rem / 12px
          --size-sm-i

          // 0.5rem / 8px
          --size-sm-ii

          // 0.25rem / 4px
          --size-sm-iii

          // 0.1rem / 1.6px
          --size-sm-iv
        ` }
        syntax="jsx"
      />
    </D>
    <D>
      <H level={ 3 }>Margin and padding</H>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          // verbose
          .[margin|padding][side][size]
        ` }
        syntax="jsx"
      />
      <T elm="p" className={ m.mtr }>
        Pick margin or padding, by using the first letter of either word:
      </T>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          // margin
          .m[side][size]

          // padding
          .p[side][size]
        ` }
        syntax="jsx"
      />
      <T elm="p" className={ m.mtr }>From here, you can choose a size like so:</T>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          // top
          .mt[size]

          // left
          .ml[size]

          // bottom
          .mb[size]

          // right
          .mr[size]
        ` }
        syntax="jsx"
      />
      <T elm="p" className={ m.mtr }>
        Then you can supply a size, which maps to the variables defined above:
      </T>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          // --size-lg-vii / 12.5rem / 200px
          .ptLgVii

          // --size-lg-vi / 9rem / 144px
          .ptLgVi

          // --size-lg-v / 6rem / 96px
          .ptLgV

          // --size-lg-iv / 5rem / 80px
          .ptLgIv

          // --size-lg-iii / 4rem / 64px
          .ptLgIii

          // --size-lg-ii / 3rem / 48px
          .ptLgIi

          // --size-lg-i / 1.5rem / 24px
          .ptLgI

          // --size-regular / 1rem / 16px
          .ptr

          // --size-sm-i / 0.75rem / 12px
          .ptSmI

          // --size-sm-ii / 0.5rem / 8px
          .ptSmIi

          // --size-sm-iii / 0.25rem / 4px
          .ptSmIii

          // --size-sm-iv / 0.1rem / 1.6px
          .ptSmIv
        ` }
        syntax="jsx"
      />
    </D>
    <D>
      <H level={ 3 }>Colors</H>
      <T elm="p" className={ m.mtr }>
        As with the sizes, all of our&nbsp;
        <Link className={ scaffoldCss.link } to="/design/colors">colors</Link> are also available
        as modifiers.  You can apply the colours to the foreground of a background element like so:
      </T>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          // foreground
          .fg[color]

          // background
          .bg[color]

          // color: var(--color-white)
          .fgWhite

          // background-color: var(--color-black)
          .bgBlack
        ` }
        syntax="jsx"
      />
    </D>
    <D>
      <H level={ 3 }>Typography</H>
      <T elm="p" className={ m.mtr }>
        To style typography with the full set of typographic rules,
        you can use the <C>.font[size]</C> classes
      </T>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          /*
            font-family: var(--font-avenir);
            font-size: var(--fontsize-large-v);
            line-height: var(--lineheight-large-v);
            letter-spacing: var(--letter-spacing-large-v);
            font-weight: var(--fontweight-bold);
          */
          .fontLgV

          /*
            font-family: var(--font-avenir);
            font-size: var(--fontsize-large-iv);
            line-height: var(--lineheight-large-iv);
            letter-spacing: var(--letter-spacing-large-iv);
            font-weight: var(--fontweight-demi);
          */
          .fontLgIv

          /*
            font-family: var(--font-avenir);
            font-size: var(--fontsize-large-iii);
            line-height: var(--lineheight-large-iii);
            letter-spacing: var(--letter-spacing-large-iii);
            font-weight: var(--fontweight-demi);
          */
          .fontLgIii

          /*
            font-family: var(--font-avenir);
            font-size: var(--fontsize-large-ii);
            line-height: var(--lineheight-large-ii);
            letter-spacing: var(--letter-spacing-large-ii);
            font-weight: var(--fontweight-demi);
          */
          .fontLgIi

          /*
            font-family: var(--font-avenir);
            font-size: var(--fontsize-large-i);
            line-height: var(--lineheight-large-i);
            letter-spacing: var(--letter-spacing-large-i);
            font-weight: var(--fontweight-demi);
          */
          .fontLgI

          /*
            font-family: var(--font-avenir);
            font-size: var(--fontsize-regular);
            line-height: var(--lineheight-regular);
            letter-spacing: var(--letter-spacing-regular);
            font-weight: var(--fontweight-regular);
          */
          .fontRegular

          /*
            font-family: var(--font-avenir);
            font-size: var(--fontsize-small-i);
            line-height: var(--lineheight-small-i);
            letter-spacing: var(--letter-spacing-small-i);
            font-weight: var(--fontweight-regular);
          */
          .fontSmI

          /*
            font-family: var(--font-avenir);
            font-size: var(--fontsize-small-ii);
            line-height: var(--lineheight-small-ii);
            letter-spacing: var(--letter-spacing-small-ii);
            font-weight: var(--fontweight-regular);
          */
          .fontSmIi
        ` }
        syntax="jsx"
      />
      <T elm="p" className={ m.mtr }>
        At some points, you may just want to apply <C>font-size</C> to an element.
        If you don’t want to compose your own class, you can use the following modifiers:
      </T>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          // --fontsize-large-v
          .largeV

          // --fontsize-large-vi
          .largeIv

          // --fontsize-large-iii
          .largeIii

          // --fontsize-large-ii
          .largeIi

          // --fontsize-large-i
          .largeI

          // --fontsize-regular
          .regular

          // --fontsize-small-i
          .smallI

          // --fontsize-small-ii
          .smallIi
        ` }
        syntax="jsx"
      />
      <T elm="p" className={ m.mtr }>
        Similarly, you can provide the letter spacing that is associated to each font size:
      </T>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          // --letter-spacing-large-v
          .letSpacingLargeV

          // --letter-spacing-large-iv
          .letSpacingLargeIv

          // --letter-spacing-large-iii
          .letSpacingLargeIii

          // --letter-spacing-large-ii
          .letSpacingLargeIi

          // --letter-spacing-large-i
          .letSpacingLargeI

          // --letter-spacing-regular
          .letSpacingRegular

          // --letter-spacing-small-i
          .letSpacingSmallI

          // --letter-spacing-small-ii
          .letSpacingSmallIi
        ` }
        syntax="jsx"
      />
      <T elm="p" className={ m.mtr }>
        Apply additional typographic styles using various classes which apply weights, styles,
        decorations and transforms:
      </T>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          // font-weight: var(--fontweight-bold);
          .bold

          // font-weight: var(--fontweight-demi);
          .demi

          // font-style: italic;
          .italic

          // text-decoration: line-through;
          .strike

          // font-family: monospace;
          .code

          // text-decoration: underline;
          .underline

          // text-transform: uppercase;
          .uppercase

          // text-transform: none;
          .normal

          // white-space: normal;
          .wrap

          // white-space: nowrap;
          .nowrap

          // text-align: left;
          .left

          // text-align: center;
          .center

          // text-align: right;
          .right
        ` }
        syntax="jsx"
      />
    </D>
    <D>
      <H level={ 2 } className={ m.mtr }>Additional utilities</H>
      <H level={ 3 } className={ m.mtr }>Rotation</H>
      <T elm="p" className={ m.mtr }>
        You can rotate elements simply by providing them with a class that fits the pattern
        <C>rotate[degrees]</C>. These classes work great when you need to rotate icons, such as them
        arrow or chevron, allowing you to point them in different directions as required while
        allowing us to minimise the number of icons available.
      </T>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          // transform: rotate(90deg);
          .rotate90

          // transform: rotate(180deg);
          .rotate180

          // transform: rotate(270deg);
          .rotate270
        ` }
        syntax="jsx"
      />
      <H level={ 3 } className={ m.mtr }>Display and position</H>
      <T elm="p" className={ m.mtr }>
        These classes allow you to easily change an elements <C>display</C> or
        <C>position</C> properties.
      </T>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          // display: inline-block;
          .dib

          // display: block;
          .db

          // display: inline;
          .di

          // position: relative;
          .pr

          // position: absolute;
          .pa

          // position: static;
          .ps

          // position: fixed;
          .pf
        ` }
        syntax="jsx"
      />
      <H level={ 3 } className={ m.mtr }>Vertical Alignment</H>
      <T elm="p" className={ m.mtr }>
        Similarly, we have provided classes for easily setting an element’s <C>vertical-align</C>
        property.
      </T>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          // vertical-align: top;
          .valignt

          // vertical-align: middle;
          .valignm

          // vertical-align: bottom;
          .valignb
        ` }
        syntax="jsx"
      />
      <H level={ 3 } className={ m.mtr }>Float</H>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          // vertical-align: top;
          .valignt

          // vertical-align: middle;
          .valignm

          // vertical-align: bottom;
          .valignb
        ` }
        syntax="jsx"
      />
      <H level={ 3 } className={ m.mtr }>Clearfix</H>
      <T elm="p" className={ m.mtr }>
        If you need to apply a “clearfix” to an element, you can either use
        <C>lost-utility: clearfix</C> in your own class, or supply the <C>.cf</C> class.
      </T>
      <H level={ 3 } className={ m.mtr }>Width</H>
      <T elm="p" className={ m.mtr }>
        You can make elements full width, or set them back to auto:
      </T>
      <CodeBlock
        className={ m.mtr }
        code={ dedent`
          // width: 100%
          .widthFull

          // width: auto;
          .widthAuto
        ` }
        syntax="jsx"
      />
    </D>
  </div>
);

export default Modifiers;
