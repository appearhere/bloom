import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { applyContainerQuery } from 'react-container-query';

import HorizontalOverflowBar from './HorizontalOverflowBar';
import navcss from './HorizontalOverflowBar.css';


const CenteredProgressSteps = applyContainerQuery(HorizontalOverflowBar, {
  [navcss.centered]: {
    minWidth: 750,
  },
});


const links = [{
  href: 'http://www.appearhere.co.uk/1',
  label: 'Mission',
  active: true,
}, {
  href: 'http://www.appearhere.co.uk/2',
  label: 'Company',
  active: false,
}, {
  href: 'http://www.appearhere.co.uk/3',
  label: 'Careers',
  active: false,
}, {
  href: 'http://www.appearhere.co.uk/4',
  label: 'Press',
  active: false,
}];

storiesOf('HorizontalOverflowBar', module)
  .add('HorizontalOverflowBar', () => (
    <div>
      <HorizontalOverflowBar>
        { linkComponent => links.map(link =>
          linkComponent({
            key: link.href,
            ...link,
          })
        ) }
      </HorizontalOverflowBar>
    </div>
  )).add('CenteredHorizontalOverflowBar', () => (
    <div>
      <CenteredProgressSteps>
        { linkComponent => links.map(link =>
          linkComponent({
            key: link.href,
            ...link,
          })
        ) }
      </CenteredProgressSteps>
    </div>
  ));
