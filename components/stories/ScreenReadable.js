import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ScreenReadable from '../ScreenReadable/ScreenReadable';

storiesOf('ScreenReadable', module)
  .add('default view', () => (
    <div>
      <p>Helper text that only renders for screen readers. Open the inspector for an example.</p>
      <ScreenReadable>
        <section>
          <h1>Dieter Rams Ten Principles of “Good Design”</h1>

          <h2>Good Design Is Innovative</h2>
          <p>The possibilities for innovation are not, by any means, exhausted. Technological development is always offering new opportunities for innovative design. But innovative design always develops in tandem with innovative technology, and can never be an end in itself.</p>

          <h2>Good Design Makes a Product Useful</h2>
          <p>A product is bought to be used. It has to satisfy certain criteria, not only functional but also psychological and aesthetic. Good design emphasizes the usefulness of a product while disregarding anything that could possibly detract from it.</p>

          <h2>Good Design Is Aesthetic</h2>
          <p>The aesthetic quality of a product is integral to its usefulness because products are used every day and have an effect on people and their well-being. Only well-executed objects can be beautiful.</p>

          <h2>Good Design Makes A Product Understandable</h2>
          <p>It clarifies the product’s structure. Better still, it can make the product clearly express its function by making use of the user’s intuition. At best, it is self-explanatory.</p>

          <h2>Good Design Is Unobtrusive</h2>
          <p>Products fulfilling a purpose are like tools. They are neither decorative objects nor works of art. Their design should therefore be both neutral and restrained, to leave room for the user’s self-expression.</p>

          <h2>Good Design Is Honest</h2>
          <p>It does not make a product more innovative, powerful or valuable than it really is. It does not attempt to manipulate the consumer with promises that cannot be kept</p>

          <h2>Good Design Is Long-lasting</h2>
          <p>It avoids being fashionable and therefore never appears antiquated. Unlike fashionable design, it lasts many years – even in today’s throwaway society.</p>

          <h2>Good Design Is Thorough Down to the Last Detail</h2>
          <p>Nothing must be arbitrary or left to chance. Care and accuracy in the design process show respect towards the consumer.</p>

          <h2>Good Design Is Environmentally Friendly</h2>
          <p>Design makes an important contribution to the preservation of the environment. It conserves resources and minimises physical and visual pollution throughout the lifecycle of the product.</p>

          <h2>Good Design Is as Little Design as Possible</h2>
          <p>Less, but better – because it concentrates on the essential aspects, and the products are not burdened with non-essentials. Back to purity, back to simplicity.</p>
        </section>
      </ScreenReadable>
    </div>
  ));