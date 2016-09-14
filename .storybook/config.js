import { configure } from '@kadira/storybook';

function loadStories() {
  require('../components/stories');
}

configure(loadStories, module);
