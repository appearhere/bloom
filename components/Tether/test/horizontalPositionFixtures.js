import { HORIZONTAL_ATTACHMENTS } from '../Tether';

export default [{
  method: 'getLeftPosition',
  args: {
    attachment: HORIZONTAL_ATTACHMENTS.LEFT,
    targetRect: {
      width: 10,
      left: 0,
      right: 10,
    },
    componentRect: {
      width: 10,
    },
  },
  expected: -10,
}, {
  method: 'getLeftPosition',
  args: {
    attachment: HORIZONTAL_ATTACHMENTS.RIGHT,
    targetRect: {
      width: 10,
      left: 0,
      right: 10,
    },
    componentRect: {
      width: 10,
    },
  },
  expected: 10,
}, {
  method: 'getLeftPosition',
  args: {
    attachment: HORIZONTAL_ATTACHMENTS.CENTER,
    targetRect: {
      width: 10,
      left: 0,
      right: 10,
    },
    componentRect: {
      width: 10,
    },
  },
  expected: 0,
}, {
  method: 'getLeftPosition',
  args: {
    attachment: HORIZONTAL_ATTACHMENTS.LEFT,
    targetRect: {
      width: 10,
      left: 0,
      right: 10,
    },
    componentRect: {
      width: 10,
    },
    flushHorizontal: true,
  },
  expected: 0,
}, {
  method: 'getLeftPosition',
  args: {
    attachment: HORIZONTAL_ATTACHMENTS.RIGHT,
    targetRect: {
      width: 10,
      left: 0,
      right: 10,
    },
    componentRect: {
      width: 10,
    },
    flushHorizontal: true,
  },
  expected: 0,
}];