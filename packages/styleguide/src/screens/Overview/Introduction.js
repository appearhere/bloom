import React from 'react';

import { Markdown } from '@appearhere/bloom';
import introduction from './introduction.md';

import { markdown } from '../../typography.module.css';

const Introduction = () => (
  <div>
    <Markdown className={markdown} overrideClassname>
      {introduction}
    </Markdown>
  </div>
);

export default Introduction;
