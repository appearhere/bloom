import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { applyContainerQuery } from 'react-container-query';

import ScrollableNavBar from './ScrollableNavBar';
import navcss from './ScrollableNavBar.css';


const CenteredProgressSteps = applyContainerQuery(ScrollableNavBar, {
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

storiesOf('ScrollableNavBar', module)
  .add('ScrollableNavBar', () => (
    <div>
      <ScrollableNavBar>
        { linkComponent => links.map(link =>
          linkComponent({
            key: link.href,
            ...link,
          })
        ) }
      </ScrollableNavBar>
    </div>
  )).add('CenteredScrollableNavBar', () => (
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