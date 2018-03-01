import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import ModalAnimator from './ModalAnimator';
import Window, { WindowTitle } from './Window';
import WithCross from './WithCross';
import m from '../../globals/modifiers.css';

const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);

stories
  .add('Default `<Window />` pairing', () => (
    <ModalAnimator active={boolean('active', true)} onClose={action('Closing')}>
      <Window
        header={<WindowTitle>Modal heading</WindowTitle>}
        footer={<button>Cancel</button>}
      >
        <p className={[m.fontRegular, m.fgGreyDarker, m.mt0, m.mb0].join(' ')}>
          {
            'Aliquam consequat consequat pharetra. Proin sagittis quis ipsum maximus laoreet.' +
            ' Maecenas condimentum nisl vel lectus vehicula dapibus. Nunc suscipit suscipit leo,' +
            ' at molestie nibh ultrices quis. Integer mattis enim est, eget interdum magna' +
            ' facilisis sed. Pellentesque vehicula eget ligula in dapibus. In vel neque sed' +
            ' lacus sollicitudin viverra. Vestibulum lacinia quam dictum finibus tristique.' +
            ' Cras vel eros id dolor posuere tempor nec id lectus. Pellentesque eleifend neque' +
            ' diam, eget luctus diam volutpat nec. In arcu nisl, semper sed pellentesque ut,' +
            ' vulputate vel ante. Nulla iaculis ligula sit amet nulla sollicitudin, in iaculis' +
            ' libero sodales.'
          }
        </p>
        <p className={[m.fontRegular, m.fgGreyDarker, m.mtl, m.mb0].join(' ')}>
          {
            'Aliquam consequat consequat pharetra. Proin sagittis quis ipsum maximus laoreet.' +
            ' Maecenas condimentum nisl vel lectus vehicula dapibus. Nunc suscipit suscipit leo,' +
            ' at molestie nibh ultrices quis. Integer mattis enim est, eget interdum magna' +
            ' facilisis sed. Pellentesque vehicula eget ligula in dapibus. In vel neque sed' +
            ' lacus sollicitudin viverra. Vestibulum lacinia quam dictum finibus tristique.' +
            ' Cras vel eros id dolor posuere tempor nec id lectus. Pellentesque eleifend neque' +
            ' diam, eget luctus diam volutpat nec. In arcu nisl, semper sed pellentesque ut,' +
            ' vulputate vel ante. Nulla iaculis ligula sit amet nulla sollicitudin, in iaculis' +
            ' libero sodales.'
          }
        </p>
        <p className={[m.fontRegular, m.fgGreyDarker, m.mtl, m.mb0].join(' ')}>
          {
            'Aliquam consequat consequat pharetra. Proin sagittis quis ipsum maximus laoreet.' +
            ' Maecenas condimentum nisl vel lectus vehicula dapibus. Nunc suscipit suscipit leo,' +
            ' at molestie nibh ultrices quis. Integer mattis enim est, eget interdum magna' +
            ' facilisis sed. Pellentesque vehicula eget ligula in dapibus. In vel neque sed' +
            ' lacus sollicitudin viverra. Vestibulum lacinia quam dictum finibus tristique.' +
            ' Cras vel eros id dolor posuere tempor nec id lectus. Pellentesque eleifend neque' +
            ' diam, eget luctus diam volutpat nec. In arcu nisl, semper sed pellentesque ut,' +
            ' vulputate vel ante. Nulla iaculis ligula sit amet nulla sollicitudin, in iaculis' +
            ' libero sodales.'
          }
        </p>
      </Window>
    </ModalAnimator>
  ))
  .add('Default `<WithCross />` pairing', () => (
    <ModalAnimator active={boolean('active', true)} onClose={action('Closing')}>
      <WithCross onClose={action('Closing')}>
        <p className={[m.fontRegular, m.fgGreyDarker, m.mt0, m.mb0].join(' ')}>
          {
            'Aliquam consequat consequat pharetra. Proin sagittis quis ipsum maximus laoreet.' +
            ' Maecenas condimentum nisl vel lectus vehicula dapibus. Nunc suscipit suscipit leo,' +
            ' at molestie nibh ultrices quis. Integer mattis enim est, eget interdum magna' +
            ' facilisis sed. Pellentesque vehicula eget ligula in dapibus. In vel neque sed' +
            ' lacus sollicitudin viverra. Vestibulum lacinia quam dictum finibus tristique.' +
            ' Cras vel eros id dolor posuere tempor nec id lectus. Pellentesque eleifend neque' +
            ' diam, eget luctus diam volutpat nec. In arcu nisl, semper sed pellentesque ut,' +
            ' vulputate vel ante. Nulla iaculis ligula sit amet nulla sollicitudin, in iaculis' +
            ' libero sodales.'
          }
        </p>
        <p className={[m.fontRegular, m.fgGreyDarker, m.mtl, m.mb0].join(' ')}>
          {
            'Aliquam consequat consequat pharetra. Proin sagittis quis ipsum maximus laoreet.' +
            ' Maecenas condimentum nisl vel lectus vehicula dapibus. Nunc suscipit suscipit leo,' +
            ' at molestie nibh ultrices quis. Integer mattis enim est, eget interdum magna' +
            ' facilisis sed. Pellentesque vehicula eget ligula in dapibus. In vel neque sed' +
            ' lacus sollicitudin viverra. Vestibulum lacinia quam dictum finibus tristique.' +
            ' Cras vel eros id dolor posuere tempor nec id lectus. Pellentesque eleifend neque' +
            ' diam, eget luctus diam volutpat nec. In arcu nisl, semper sed pellentesque ut,' +
            ' vulputate vel ante. Nulla iaculis ligula sit amet nulla sollicitudin, in iaculis' +
            ' libero sodales.'
          }
        </p>
      </WithCross>
    </ModalAnimator>
  ));
