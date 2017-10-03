import React from 'react';
import cx from 'classnames';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, Dl, A, C } from '../../../components/Scaffold/Scaffold';

import FunnelInputField from '../../../../components/FunnelInputField/FunnelInputField';
import Input from '../../../../components/Form/Input/Input';

import m from '../../../../globals/modifiers.css';

const InputFieldDocumentation = () => (
  <div>
    <H level={ 1 }>InputField</H>
    <T elm="p" className={ cx(m.mtr, m.largeI, m.demi) }>
      An <C>InputField</C> combines multiple elements that may be required when using
      any given input. It gives you the flexibility to build out your forms in
      many different ways.
    </T>
    <D>
      <Specimen
        classNames={ {
          root: m.mtr,
          specimenContainer: m.par,
        } }
        code={ dedent`
          <FunnelInputField
            id="example"
            meta="Meta data"
            label="Label"
            optionalLabel="optional"
            valueReplay="Value replay"
            description="Description/helper text"
          >
            <Input value="Input component" />
          </FunnelInputField>
        ` }
      >
        <FunnelInputField
          id="example"
          meta="Meta data"
          label="Label"
          optionalLabel="optional"
          valueReplay="Value replay"
          description="Description/helper text"
        >
          <Input value="Input component" />
        </FunnelInputField>
      </Specimen>
    </D>
    <D>
      <T elm="p">
        Each property on the <C>InputField</C> has a specific purpose. They should be used like so:
      </T>
      <Dl className={ m.mtr }>
        <T elm="dt">
          Meta data
        </T>
        <T elm="dd">
          Should provide the user with non-critical, but useful information.
          E.g., “Question 1 of 5”.
        </T>
        <T elm="dt">
          Label
        </T>
        <T elm="dd">
          Is the caption for the input. It should provide the user enough
          information as the expected value of the input. E.g., “First name”.
        </T>
        <T elm="dt">
          Optional
        </T>
        <T elm="dd">
          This tells the user whether or not the input is optional. As the
          majority of our inputs are mandatory, we’ve opted to display for
          edge cases and not the majority.
        </T>
        <T elm="dt">
          Value replay
        </T>
        <T elm="dd">
          This property can be used to repeat the current value of the
          input. This is useful in scenarios where the input is not clear,
          such as with an InputRange. E.g., “£150 - 800”.
        </T>
        <T elm="dt">
          Description/helper text
        </T>
        <T elm="dd">
          Use this to provide the user with additional information as to
          what is expected of them, such as validation rules. E.g.,
          “8 characters minimum”. This is placed below the label as it is
          supporting material. The solid break gives distinction to both
          elements, and avoids overflow across multiple lines.
        </T>
        <T elm="dt">
          Input component
        </T>
        <T elm="dd">
          The input field component accepts our <A href="/patterns/inputs">input
          components</A> as it’s child.
        </T>
      </Dl>
    </D>
    <D>
      <H level={ 2 }>Usage</H>
      <T elm="p" className={ m.mtr }>
        When using <C>InputField</C>, be careful not to over complicate
        the interface by using <strong>too many</strong> of the available
        properties. At minimum, you should include a label and input. From there,
        add additional elements when necessary.
      </T>
      <T elm="p" className={ m.mtr }>
        When the only elements on the page are a series of
        <C>InputField</C> components, having them left-aligned may not
        be appropriate. In this case, center it.
      </T>
    </D>
  </div>
);

export default InputFieldDocumentation;
