import React, { PropTypes, Component } from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Input from './Input';

class StateManager extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  state = {
    value: '',
    error: '',
  };

  handleChange = (e, value) => {
    this.setState({
      value,
      error: value === 'error' ? 'error message' : '',
    });
  }

  render() {
    return React.cloneElement(this.props.children, {
      onChange: this.handleChange,
      value: this.state.value,
      error: this.state.error,
    });
  }
}

storiesOf('Input', module)
  .add('base', () => (
    <Input
      label="Name"
      onChange={ action('Change') }
    />
  ))
  .add('optional', () => (
    <Input
      label="Name"
      onChange={ action('Change') }
      optional
    />
  ))
  .add('with description', () => (
    <Input
      label="Name"
      description="What shall we call you?"
      onChange={ action('Change') }
      value=" "
    />
  ))
  .add('with custom optional label', () => (
    <Input
      label="Name"
      optionalLabel="optionnel"
      onChange={ action('Change') }
      optional
    />
  ))
  .add('with error', () => (
    <Input
      label="Name"
      error="Uh oh, something went wrong"
      onChange={ action('Change') }
    />
  ))
  .add('with placeholder', () => (
    <Input
      label="Name"
      placeholder="First and last name"
      onChange={ action('Change') }
    />
  ))
  .add('with everything', () => (
    <StateManager>
      <Input
        label="Name"
        placeholder="First and last name"
        optionalLabel="optionnel"
        description="Type 'error' to generate an error message"
        optional
      />
    </StateManager>
  ));