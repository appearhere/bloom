import React from 'react';
import cx from 'classnames';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T } from '../../../components/Scaffold/Scaffold';

import { Loader } from '@appearhere/bloom';

import { Modifiers as m } from '@appearhere/bloom';

const LoaderDocumentation = () => (
  <div>
    <H level={1}>Loader</H>
    <T elm="p" className={cx(m.mtr, m.largeI, m.demi)}>
      Loaders help notify the user that the application is loading content.
    </T>
    <D>
      <Specimen
        classNames={{
          specimenContainer: m.par,
        }}
        code="<Loader />"
      >
        <Loader className={m.fontLgIv} />
      </Specimen>
    </D>
  </div>
);

export default LoaderDocumentation;
