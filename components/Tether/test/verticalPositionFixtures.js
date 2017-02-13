import { VERTICAL_ATTACHMENTS } from '../Tether';

export default [{
  method: 'getTopPosition',
  args: {
    attachment: VERTICAL_ATTACHMENTS.TOP,
    boundaryRect: {
      top: 0,
    },
    targetRect: {
      height: 10,
      top: 0,
    },
    componentRect: {
      height: 10,
    },
  },
  expected: -10,
}, {
  method: 'getTopPosition',
  args: {
    attachment: VERTICAL_ATTACHMENTS.BOTTOM,
    boundaryRect: {
      top: 0,
    },
    targetRect: {
      height: 10,
      top: 0,
    },
    componentRect: {
      height: 10,
    },
  },
  expected: 10,
}, {
  method: 'getTopPosition',
  args: {
    attachment: VERTICAL_ATTACHMENTS.CENTER,
    boundaryRect: {
      top: 0,
    },
    targetRect: {
      height: 10,
      top: 0,
    },
    componentRect: {
      height: 10,
    },
  },
  expected: 0,
}, {
  method: 'getTopPosition',
  args: {
    attachment: VERTICAL_ATTACHMENTS.TOP,
    boundaryRect: {
      top: 0,
    },
    targetRect: {
      height: 10,
      top: 0,
    },
    componentRect: {
      height: 10,
    },
    flushVertical: true,
  },
  expected: 0,
}, {
  method: 'getTopPosition',
  args: {
    attachment: VERTICAL_ATTACHMENTS.BOTTOM,
    boundaryRect: {
      top: 0,
    },
    targetRect: {
      height: 10,
      top: 0,
    },
    componentRect: {
      height: 10,
    },
    flushVertical: true,
  },
  expected: 0,
}];