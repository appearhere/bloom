import React from 'react';
import { storiesOf, action } from '@storybook/react';
import AutoComplete from './AutoComplete';
import Heading from './Heading';
import Suggestion from './Suggestion';
import Input from './Input';
import theme from './AutoComplete.css';

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
      renderSuggestion={suggestion => <span>{ suggestion }</span>}
      getSuggestionValue={val => val}
      focusFirstSuggestion
      alwaysRenderSuggestions
    />
  ))
  .add('Heading', () => (
    <Heading>Category</Heading>
  ))
  .add('Suggestion', () => (
    <Suggestion>Neil</Suggestion>
  ))
  .add('Input', () => (
    <Input />
  ))
  .add('with default theme', () => (
    <AutoComplete
      theme={theme}
      suggestions={names}
      onSuggestionsFetchRequested={action('Fetching suggestions')}
      onSuggestionsClearRequested={action('Clearing suggestions')}
      onSuggestionSelected={action('Selecting suggestion')}
      inputProps={{
        value: '',
        onChange: action('input onChange'),
      }}
      renderSuggestion={suggestion => <span>{ suggestion }</span>}
      getSuggestionValue={val => val}
      focusFirstSuggestion
      alwaysRenderSuggestions
    />
  ))
  .add('with styled suggestion', () => (
    <AutoComplete
      theme={theme}
      suggestions={names}
      onSuggestionsFetchRequested={action('Fetching suggestions')}
      onSuggestionsClearRequested={action('Clearing suggestions')}
      onSuggestionSelected={action('Selecting suggestion')}
      inputProps={{
        value: '',
        onChange: action('input onChange'),
      }}
      renderSuggestion={suggestion => <Suggestion>{ suggestion }</Suggestion>}
      getSuggestionValue={val => val}
      focusFirstSuggestion
      alwaysRenderSuggestions
    />
  ))
  .add('with groups', () => (
    <AutoComplete
      theme={theme}
      suggestions={grouped}
      onSuggestionsFetchRequested={action('Fetching suggestions')}
      onSuggestionsClearRequested={action('Clearing suggestions')}
      onSuggestionSelected={action('Selecting suggestion')}
      inputProps={{
        value: '',
        onChange: action('input onChange'),
      }}
      renderSectionTitle={section => <Heading>{ section.discipline }</Heading>}
      renderSuggestion={member => <Suggestion>{ member }</Suggestion>}
      getSectionSuggestions={section => section.members}
      getSuggestionValue={val => val}
      focusFirstSuggestion
      alwaysRenderSuggestions
      multiSection
    />
  ))
  .add('Search with autocomplete', () => (
    <AutoComplete
      theme={theme}
      suggestions={grouped}
      onSuggestionsFetchRequested={action('Fetching suggestions')}
      onSuggestionsClearRequested={action('Clearing suggestions')}
      onSuggestionSelected={action('Selecting suggestion')}
      inputProps={{
        value: '',
        onChange: action('input onChange'),
      }}
      renderSectionTitle={section => <Heading>{ section.discipline }</Heading>}
      renderSuggestion={member => <Suggestion>{ member }</Suggestion>}
      getSectionSuggestions={section => section.members}
      getSuggestionValue={val => val}
      renderInputComponent={Input}
      focusFirstSuggestion
      alwaysRenderSuggestions
      multiSection
    />
  ));
