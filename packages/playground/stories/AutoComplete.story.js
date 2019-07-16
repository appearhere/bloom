import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  AutoComplete,
  AutoCompleteHeading,
  AutoCompleteSuggestion,
  AutoCompleteInput,
  autoCompleteTheme
} from '@appearhere/bloom';

const grouped = [
  { discipline: 'tech', members: ['Mike N.', 'Richard', 'Steve', 'Nick', 'Michael B.'] },
  { discipline: 'design', members: ['Jordan', 'Nique'] },
  { discipline: 'product', members: ['Melita', 'Ben'] },
];

/* eslint-disable prefer-spread */
const names = [].concat(...grouped.map(section => section.members));
/* eslint-enable prefer-spread */

storiesOf('AutoComplete', module)
  .add('Default', () => (
    <AutoComplete
      suggestions={names}
      onSuggestionsFetchRequested={action('Fetching suggestions')}
      onSuggestionsClearRequested={action('Clearing suggestions')}
      onSuggestionSelected={action('Selecting suggestion')}
      inputProps={{
        value: '',
        onChange: action('input onChange'),
      }}
      renderSuggestion={suggestion => <span>{suggestion}</span>}
      getSuggestionValue={val => val}
      focusFirstSuggestion
      alwaysRenderSuggestions
    />
  ))
  .add('Heading', () => <AutoCompleteHeading>Category</AutoCompleteHeading>)
  .add('Suggestion', () => <AutoCompleteSuggestion>Neil</AutoCompleteSuggestion>)
  .add('Input', () => <AutoCompleteInput />)
  .add('with default theme', () => (
    <AutoComplete
      theme={autoCompleteTheme}
      suggestions={names}
      onSuggestionsFetchRequested={action('Fetching suggestions')}
      onSuggestionsClearRequested={action('Clearing suggestions')}
      onSuggestionSelected={action('Selecting suggestion')}
      inputProps={{
        value: '',
        onChange: action('input onChange'),
      }}
      renderSuggestion={suggestion => <span>{suggestion}</span>}
      getSuggestionValue={val => val}
      focusFirstSuggestion
      alwaysRenderSuggestions
    />
  ))
  .add('with styled suggestion', () => (
    <AutoComplete
      theme={autoCompleteTheme}
      suggestions={names}
      onSuggestionsFetchRequested={action('Fetching suggestions')}
      onSuggestionsClearRequested={action('Clearing suggestions')}
      onSuggestionSelected={action('Selecting suggestion')}
      inputProps={{
        value: '',
        onChange: action('input onChange'),
      }}
      renderSuggestion={suggestion => <AutoCompleteSuggestion>{suggestion}</AutoCompleteSuggestion>}
      getSuggestionValue={val => val}
      focusFirstSuggestion
      alwaysRenderSuggestions
    />
  ))
  .add('with groups', () => (
    <AutoComplete
      theme={autoCompleteTheme}
      suggestions={grouped}
      onSuggestionsFetchRequested={action('Fetching suggestions')}
      onSuggestionsClearRequested={action('Clearing suggestions')}
      onSuggestionSelected={action('Selecting suggestion')}
      inputProps={{
        value: '',
        onChange: action('input onChange'),
      }}
      renderSectionTitle={section => <AutoCompleteHeading>{section.discipline}</AutoCompleteHeading>}
      renderSuggestion={member => <AutoCompleteSuggestion>{member}</AutoCompleteSuggestion>}
      getSectionSuggestions={section => section.members}
      getSuggestionValue={val => val}
      focusFirstSuggestion
      alwaysRenderSuggestions
      multiSection
    />
  ))
  .add('Search with autocomplete', () => (
    <AutoComplete
      theme={autoCompleteTheme}
      suggestions={grouped}
      onSuggestionsFetchRequested={action('Fetching suggestions')}
      onSuggestionsClearRequested={action('Clearing suggestions')}
      onSuggestionSelected={action('Selecting suggestion')}
      inputProps={{
        value: '',
        onChange: action('input onChange'),
      }}
      renderSectionTitle={section => <AutoCompleteHeading>{section.discipline}</AutoCompleteHeading>}
      renderSuggestion={member => <AutoCompleteSuggestion>{member}</AutoCompleteSuggestion>}
      getSectionSuggestions={section => section.members}
      getSuggestionValue={val => val}
      renderInputComponent={AutoCompleteInput}
      focusFirstSuggestion
      alwaysRenderSuggestions
      multiSection
    />
  ));
