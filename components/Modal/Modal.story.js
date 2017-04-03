import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, boolean } from '@kadira/storybook-addon-knobs';
import ModalAnimator from './ModalAnimator';
import Window from './Window';
import WithTitleBar from './WithTitleBar';
import WithActionBar from './WithActionBar';
import WithCross from './WithCross';
import m from '../../globals/modifiers.css';

const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);

stories
  .add('Default `<Window />` pairing', () => (
    <ModalAnimator active={ boolean('active', false) } onClose={ action('Closing') }>
      <Window>
        <p className={ [m.fontRegular, m.fgGreyDarker, m.mt0, m.mb0].join(' ') }>
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
  .add('Dark `<Window />` pairing', () => (
    <ModalAnimator active={ boolean('active', false) } onClose={ action('Closing') }>
      <Window variant="dark">
        <p className={ [m.fontRegular, m.fgWhite, m.mt0, m.mb0].join(' ') }>
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
  .add('Default `<WithTitleBar />` pairing', () => (
    <ModalAnimator active={ boolean('active', false) } onClose={ action('Closing') }>
      <WithTitleBar onClose={ action('Closing') }>
        <p className={ [m.fontRegular, m.fgGreyDarker, m.mt0, m.mb0].join(' ') }>
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
        <p className={ [m.fontRegular, m.fgGreyDarker, m.mtl, m.mb0].join(' ') }>
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
        <p className={ [m.fontRegular, m.fgGreyDarker, m.mtl, m.mb0].join(' ') }>
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
        <p className={ [m.fontRegular, m.fgGreyDarker, m.mtl, m.mb0].join(' ') }>
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
      </WithTitleBar>
    </ModalAnimator>
  ))
  .add('Default `<WithCross />` pairing', () => (
    <ModalAnimator active={ boolean('active', false) } onClose={ action('Closing') }>
      <WithCross onClose={ action('Closing') }>
        <p className={ [m.fontRegular, m.fgGreyDarker, m.mt0, m.mb0].join(' ') }>
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
        <p className={ [m.fontRegular, m.fgGreyDarker, m.mtl, m.mb0].join(' ') }>
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
  ))
  .add('Dark `<WithCross />` pairing', () => (
    <ModalAnimator active={ boolean('active', false) } onClose={ action('Closing') }>
      <WithCross variant="dark" onClose={ action('Closing') }>
        <p className={ [m.fontRegular, m.fgWhite, m.mt0, m.mb0].join(' ') }>
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
        <p className={ [m.fontRegular, m.fgWhite, m.mtl, m.mb0].join(' ') }>
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
  ))
  .add('Default `<WithActionBar />` pairing', () => (
    <ModalAnimator active={ boolean('active', false) } onClose={ action('Closing') }>
      <WithActionBar
        actions={ (
          <div>
            <button onClick={ action('actioning....') }>Action</button>
          </div>
        ) }
      >
        <p className={ [m.fontRegular, m.fgGreyDarker, m.mt0, m.mb0].join(' ') }>
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
        <p className={ [m.fontRegular, m.fgGreyDarker, m.mtl, m.mb0].join(' ') }>
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
        <p className={ [m.fontRegular, m.fgGreyDarker, m.mtl, m.mb0].join(' ') }>
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
        <p className={ [m.fontRegular, m.fgGreyDarker, m.mtl, m.mb0].join(' ') }>
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
        <p className={ [m.fontRegular, m.fgGreyDarker, m.mtl, m.mb0].join(' ') }>
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
        <p className={ [m.fontRegular, m.fgGreyDarker, m.mtl, m.mb0].join(' ') }>
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
      </WithActionBar>
    </ModalAnimator>
  ));