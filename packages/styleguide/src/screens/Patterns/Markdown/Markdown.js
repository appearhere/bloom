import React from 'react';
import cx from 'classnames';
import dedent from 'dedent';

import { Markdown } from '@appearhere/bloom';
import Specimen from '../../../components/Specimen/Specimen';
import { H, T, C } from '../../../components/Scaffold/Scaffold';

import css from './Markdown.module.css';
import { Modifiers as m } from '@appearhere/bloom';
import markdown from './example.md';

const MarkdownDocumentation = () => (
  <div>
    <H level={1}>Markdown</H>
    <T elm="p" className={cx(m.mtr, m.largeI, m.demi)}>
      At Appear Here, we use markdown to markup content for use across our applications.
    </T>
    <T elm="p" className={m.mtLgIi}>
      To enable us to do this, we have created a <C>Markdown</C> component which provides basic
      styling of markdown content.
    </T>
    <Specimen
      classNames={{
        root: m.mtr,
        specimenContainer: m.par,
      }}
      code={dedent`
        <Markdown>
          # An exhibit of Markdown
          ...
        </Markdown>
      `}
    >
      <Markdown>{markdown}</Markdown>
    </Specimen>
    <T elm="p" className={m.mtLgIi}>
      You can add to or make changes to the markdown styles using the
      <C>className</C> prop. To do this, the class should act as a root selector, and style the any
      HTML elements you wish using the element selector.
    </T>
    <Specimen
      classNames={{
        root: m.mtr,
        specimenContainer: m.par,
      }}
      code={dedent`
        // styles.css
        .markdownExtended h1 {
          color: var(--color-gold);
        }

        // Component.js
        import Markdown from './components/Markdown';
        import css from './styles.css';

        <Markdown className={ css.markdownExtended }>
          # An exhibit of Markdown
          ...
        </Markdown>
      `}
    >
      <Markdown className={css.markdownExtended}>{markdown}</Markdown>
    </Specimen>
    <T elm="p" className={m.mtLgIi}>
      If you wish to write your own styles from scratch, set overrideClassname to true.
    </T>
    <Specimen
      classNames={{
        root: m.mtr,
        specimenContainer: m.par,
      }}
      code={dedent`
        // styles.css
        .markdownOverride * {
          font-family: georgia, serif;
        }

        .markdownOverride * + * {
          margin-top: var(--size-regular);
        }

        .markdownOverride h1 {
          text-decoration: underline;
        }

        .markdownOverride p {
          color: var(--color-grey);
        }

        // Component.js
        import Markdown from './components/Markdown';
        import css from './styles.css';

        <Markdown className={ css.markdownOverride } overrideClassname>
          # An exhibit of Markdown
          ...
        </Markdown>
      `}
    >
      <Markdown className={css.markdownOverride} overrideClassname>
        {markdown}
      </Markdown>
    </Specimen>
  </div>
);

export default MarkdownDocumentation;
