import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AutoComplete from './AutoComplete';

storiesOf('AutoComplete', module)
  .add('Default', () => (
    <AutoComplete
      suggestions={ ['Richard', 'Jordan', 'Simon', 'Nick', 'Nique', 'Mike', 'Ben', 'Melita'] }
      onSuggestionsFetchRequested={ action('Fetching suggestions') }
      onSuggestionsClearRequested={ action('Clearing suggestions') }
      onSuggestionSelected={ action('Selecting suggestion') }
      inputProps={ {
        value: '',
        onChange: action('input onChange'),
      } }
      renderSuggestion={ (suggestion) => <span>{ suggestion }</span> }
      getSuggestionValue={ val => val }
      focusFirstSuggestion
      alwaysRenderSuggestions
    />
  ));