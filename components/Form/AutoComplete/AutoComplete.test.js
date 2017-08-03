import React from 'react';
import { render } from 'react-dom';

import noop from '../../../utils/noop';
import AutoComplete from './AutoComplete';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <AutoComplete
      suggestions={ [] }
      onSuggestionsFetchRequested={ noop }
      onSuggestionsClearRequested={ noop }
      getSuggestionValue={ noop }
      renderSuggestion={ () => <span /> }
      inputProps={ {
        onChange: noop,
        value: '',
      } }
    />,
    div
  );
});
