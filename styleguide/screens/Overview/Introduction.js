import React from 'react';

import Markdown from '../../../components/Markdown/Markdown';
import introduction from './introduction.md';

import { markdown } from '../../typography.css';

const Introduction = () => (
  <div>
    <Markdown className={markdown} overrideClassname>
      { introduction }
    </Markdown>
  </div>
);

export default Introduction;
