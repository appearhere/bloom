import React from 'react';
import { storiesOf } from '@storybook/react';
import Tether, { VERTICAL_ATTACHMENTS, HORIZONTAL_ATTACHMENTS } from './Tether';

const tetherStories = storiesOf('Tether', module)
  .add('Tether left top', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.TOP}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.LEFT}
        active
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether center top', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.TOP}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.CENTER}
        active
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether right top', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.TOP}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.RIGHT}
        active
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether right center', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.CENTER}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.RIGHT}
        active
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether right bottom', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'right',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.BOTTOM}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.RIGHT}
        active
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether center bottom', () => (
    <div
      style={{
        marginTop: '98vh',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.BOTTOM}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.CENTER}
        active
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether left bottom', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'left',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.BOTTOM}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.LEFT}
        active
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether left center', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.CENTER}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.LEFT}
        active
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether center center', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.CENTER}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.CENTER}
        active
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ));

tetherStories
  .add('Tether flushHorizontal left top', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.TOP}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.LEFT}
        active
        flushHorizontal
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether flushHorizontal right top', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.TOP}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.RIGHT}
        active
        flushHorizontal
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether flushHorizontal right center', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.CENTER}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.RIGHT}
        active
        flushHorizontal
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether flushHorizontal right bottom', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'right',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.BOTTOM}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.RIGHT}
        active
        flushHorizontal
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether flushHorizontal left bottom', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'left',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.BOTTOM}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.LEFT}
        active
        flushHorizontal
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether flushHorizontal left center', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.CENTER}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.LEFT}
        active
        flushHorizontal
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ));

tetherStories
  .add('Tether flushVertical left top', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.TOP}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.LEFT}
        active
        flushVertical
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether flushVertical right top', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.TOP}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.RIGHT}
        active
        flushVertical
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether flushVertical right center', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.CENTER}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.RIGHT}
        active
        flushVertical
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether flushVertical right bottom', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'right',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.BOTTOM}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.RIGHT}
        active
        flushVertical
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether flushVertical left bottom', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'left',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.BOTTOM}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.LEFT}
        active
        flushVertical
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether flushVertical left center', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.CENTER}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.LEFT}
        active
        flushVertical
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ));

tetherStories
  .add('Tether flushVertical flushHorizontal left top', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.TOP}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.LEFT}
        active
        flushVertical
        flushHorizontal
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether flushVertical flushHorizontal right top', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.TOP}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.RIGHT}
        active
        flushVertical
        flushHorizontal
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether flushVertical flushHorizontal right center', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.CENTER}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.RIGHT}
        active
        flushVertical
        flushHorizontal
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether flushVertical flushHorizontal right bottom', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'right',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.BOTTOM}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.RIGHT}
        active
        flushVertical
        flushHorizontal
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether flushVertical flushHorizontal left bottom', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'left',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.BOTTOM}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.LEFT}
        active
        flushVertical
        flushHorizontal
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ))
  .add('Tether flushVertical flushHorizontal left center', () => (
    <div
      style={{
        marginTop: '10rem',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Tether
        target={<button>Anchor</button>}
        verticalAttachment={VERTICAL_ATTACHMENTS.CENTER}
        horizontalAttachment={HORIZONTAL_ATTACHMENTS.LEFT}
        active
        flushVertical
        flushHorizontal
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255, 185, 197, 0.5)',
          }}
        />
      </Tether>
    </div>
  ));
