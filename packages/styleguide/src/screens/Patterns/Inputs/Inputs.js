import React, { Component } from 'react';
import cx from 'classnames';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { H, T, D, C, A } from '../../../components/Scaffold/Scaffold';

import {
  CheckboxGroup,
  IconInput,
  Input,
  InputRange,
  InputRangeWithHistogram,
  Option,
  RadioGroup,
  Select
} from '@appearhere/bloom';

import shared from '../../../shared.css';
import { Modifiers as m } from '@appearhere/bloom';

export default class Inputs extends Component {
  state = {
    checkboxes: [],
    radios: '',
    input: '',
    inputLowPriority: '',
    inputWithError: '',
    textarea: '',
    inputWithIcon: '',
    inputRange: 0,
    multiInputRange: {
      min: 0,
      max: 100,
    },
    inputRangeHistogram: 0,
    select: '',
  };

  handleChange = (e, name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      checkboxes,
      radios,
      input,
      inputLowPriority,
      inputWithError,
      textarea,
      inputWithIcon,
      inputRange,
      multiInputRange,
      inputRangeHistogram,
      select,
    } = this.state;

    return (
      <div>
        <H level={1}>Inputs</H>
        <T elm="p" className={cx(m.mtr, m.largeI, m.demi)}>
          These are the building blocks for interactivity across our applications.
        </T>
        <D>
          <H level={2}>Checkbox Group</H>
          <T elm="p" className={m.mtr}>
            A checkbox should be used to list out multiple items, where a user
            can select none, one or many options.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
              <CheckboxGroup
                value={ this.state.checkboxes }
                onChange={ this.handleChange }
              >
                { checkbox => (
                  <span>
                    { checkbox({ value: '1', label: 'One' }) }
                    { checkbox({ value: '2', label: 'Two' }) }
                    { checkbox({ value: '3', label: 'Three' }) }
                    { checkbox({ value: '4', label: 'Four' }) }
                    { checkbox({ value: '5', label: 'Five' }) }
                  </span>
                ) }
              </CheckboxGroup>
            ` }
          >
            <CheckboxGroup
              name="checkboxes"
              value={checkboxes}
              onChange={this.handleChange}
            >
              { checkbox => (
                <span>
                  { checkbox({ value: '1', label: 'One' }) }
                  { checkbox({ value: '2', label: 'Two' }) }
                  { checkbox({ value: '3', label: 'Three' }) }
                  { checkbox({ value: '4', label: 'Four' }) }
                  { checkbox({ value: '5', label: 'Five' }) }
                </span>
              ) }
            </CheckboxGroup>
          </Specimen>
        </D>
        <D>
          <H level={2} className={shared.componentTitle}>Radio Group</H>
          <T elm="p" className={m.mtr}>
            A radio button should be used to list out two or more items, where a
            user can only select one option.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
              <RadioGroup
                value={ this.state.radios }
                onChange={ this.handleChange }
              >
                { radio => (
                  <span>
                    { radio({ value: '1', label: 'One' }) }
                    { radio({ value: '2', label: 'Two' }) }
                    { radio({ value: '3', label: 'Three' }) }
                    { radio({ value: '4', label: 'Four' }) }
                    { radio({ value: '5', label: 'Five' }) }
                  </span>
                ) }
              </RadioGroup>
            ` }
          >
            <RadioGroup
              name="radios"
              value={radios}
              onChange={this.handleChange}
            >
              { radio => (
                <span>
                  { radio({ value: '1', label: 'One' }) }
                  { radio({ value: '2', label: 'Two' }) }
                  { radio({ value: '3', label: 'Three' }) }
                  { radio({ value: '4', label: 'Four' }) }
                  { radio({ value: '5', label: 'Five' }) }
                </span>
              ) }
            </RadioGroup>
          </Specimen>
        </D>
        <D>
          <H level={2} className={shared.componentTitle}>Input</H>
          <T elm="p" className={m.mtr}>
            An input should be used for shorter, free form text entry.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
              <Input value={ this.state.input } onChange={ this.handleChange } />
            ` }
          >
            <Input
              name="input"
              value={input}
              onChange={this.handleChange}
            />
          </Specimen>
          <H level={3} className={m.mtLgIi}>Input priority</H>
          <T elm="p" className={m.mtr}>
            Your can decrease the impact of an input by setting the <C>priority</C>
            prop to low. This should be used for inputs that are secondary
            elements to a page. Exercise caution when using this.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
              <Input
                value={ this.state.input }
                onChange={ this.handleChange }
                priority="low"
              />
            ` }
          >
            <Input
              name="inputLowPriority"
              value={inputLowPriority}
              onChange={this.handleChange}
              priority="low"
            />
          </Specimen>
          <H level={3} className={m.mtLgIi}>Input with error</H>
          <T elm="p" className={m.mtr}>
            When the input’s value is not valid, you can provide additional
            context to the user by passing an error message.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: cx(m.ptr, m.plr, m.prr, m.pbLgIi),
            }}
            code={dedent`
              <Input
                value={ this.state.input }
                onChange={ this.handleChange }
                error="An error message"
              />
            ` }
          >
            <Input
              name="inputWithError"
              value={inputWithError}
              onChange={this.handleChange}
              error="An error message"
            />
          </Specimen>
          <H level={3} className={m.mtLgIi}>Textarea</H>
          <T elm="p" className={m.mtr}>
            When the user is required to write longer-form content, set the
            input’s <C>type</C> to <C>textarea</C>. This will render a HTML
            <C>{ '<textarea />' }</C> instead of an <C>{ '<input />' }</C>.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
              <Input
                value={ this.state.input }
                onChange={ this.handleChange }
                type="textarea"
              />
            ` }
          >
            <Input
              name="textarea"
              value={textarea}
              onChange={this.handleChange}
              type="textarea"
            />
          </Specimen>
        </D>
        <D>
          <H level={2} className={shared.componentTitle}>Input with Icon</H>
          <T elm="p" className={m.mtr}>
            To add a visual aid to an input, you can add an icon on both left or
            right sides of an input. This would typically be used to inform a
            user of the desired outcome. This follows the same documentation as
            the regular input component.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
              <IconInput
                iconName="search"
                value={ this.state.input }
                onChange={ this.handleInputChange }
              />
            ` }
          >
            <IconInput
              name="inputWithIcon"
              iconName="search"
              value={inputWithIcon}
              onChange={this.handleChange}
            />
          </Specimen>
        </D>
        <D>
          <H level={2} className={shared.componentTitle}>Input range</H>
          <T elm="p" className={m.mtr}>
            Use an input range when a user can increase or decrease a number,
            where it doesn’t need to be precise. For more information
            read <A href="https://www.nngroup.com/articles/gui-slider-controls/" target="_blank">
              Slider Design: Rule of thumb
            </A>.
          </T>
          <H level={3} className={m.mtLgIi}>Single</H>
          <T elm="p" className={m.mtr}>
            Use when selecting a single value.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.paLgI,
            }}
            code={dedent`
              <InputRange
                minValue={ 0 }
                maxValue={ 100 }
                value={ this.state.inputRange }
                onChange={ this.handleChange }
              />
            ` }
          >
            <InputRange
              name="inputRange"
              minValue={0}
              maxValue={100}
              value={inputRange}
              onChange={this.handleChange}
            />
          </Specimen>
          <H level={3} className={m.mtLgIi}>Multi</H>
          <T elm="p" className={m.mtr}>
            Use when selecting a range.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.paLgI,
            }}
            code={dedent`
              <InputRange
                minValue={ 0 }
                maxValue={ 100 }
                value={ {
                  min: this.state.multiInputRange.min,
                  max: this.state.multiInputRange.max,
                } }
                onChange={ this.handleChange }
              />
            ` }
          >
            <InputRange
              name="multiInputRange"
              minValue={0}
              maxValue={100}
              value={{
                min: multiInputRange.min,
                max: multiInputRange.max,
              }}
              onChange={this.handleChange}
            />
          </Specimen>
        </D>
        <D>
          <H level={2} className={shared.componentTitle}>Input range with histogram</H>
          <T elm="p" className={m.mtr}>
            Use the InputRange with Histogram to give the user more information
            about the shape of the data they will see after changing the value.
            It functions in exactly the same way as the regular InputRange with
            one exception that it accepts an array of data points which are
            rendered as a histogram in the background of the component.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.paLgI,
            }}
            code={dedent`
              <InputRangeWithHistogram
                minValue={ 0 }
                maxValue={ 100 }
                value={ this.state.inputRange }
                onChange={ this.handleChange }
                data={ [10, 5, 3, 6, 7, 8, 2, 3, 9, 8, 6, 3, 2, 1, 5, 6, 7, 7] }
              />
            ` }
          >
            <InputRangeWithHistogram
              name="inputRangeHistogram"
              minValue={0}
              maxValue={100}
              value={inputRangeHistogram}
              onChange={this.handleChange}
              data={[10, 5, 3, 6, 7, 8, 2, 3, 9, 8, 6, 3, 2, 1, 5, 6, 7, 7]}
            />
          </Specimen>
        </D>
        <D>
          <H level={2} className={shared.componentTitle}>Select</H>
          <T elm="p" className={m.mtr}>
            Use a select when a user wants to select from a list of pre-defined
            options. This should be a last resort, and used if no other input
            type is suitable.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
              <Select
                value={ select }
                onChange={ this.handleChange }
              >
                <Option value="1">One</Option>
                <Option value="2">Two</Option>
                <Option value="3">Three</Option>
                <Option value="4">Four</Option>
                <Option value="5">Five</Option>
              </Select>
            ` }
          >
            <Select
              name="select"
              value={select}
              onChange={this.handleChange}
            >
              <Option value="1">One</Option>
              <Option value="2">Two</Option>
              <Option value="3">Three</Option>
              <Option value="4">Four</Option>
              <Option value="5">Five</Option>
            </Select>
          </Specimen>
        </D>
      </div>
    );
  }
}
