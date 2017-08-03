import { HORIZONTAL_ATTACHMENTS } from '../Tether';

export default [{
  method: 'getOptimalHorizontalAttachment',
  args: {
    boundaryRect: {
      left: 0,
      right: 20,
    },
    targetRect: {
      width: 10,
      left: 5,
      right: 15,
    },
    componentRect: {
      width: 15,
    },
    attachmentPreference: HORIZONTAL_ATTACHMENTS.LEFT,
    flushHorizontal: true,
  },
  expected: HORIZONTAL_ATTACHMENTS.LEFT,
}, {
  method: 'getOptimalHorizontalAttachment',
  args: {
    boundaryRect: {
      left: 0,
      right: 20,
    },
    targetRect: {
      width: 10,
      left: 0,
      right: 10,
    },
    componentRect: {
      width: 15,
    },
    attachmentPreference: HORIZONTAL_ATTACHMENTS.LEFT,
    flushHorizontal: true,
  },
  expected: HORIZONTAL_ATTACHMENTS.RIGHT,
}, {
  method: 'getOptimalHorizontalAttachment',
  args: {
    boundaryRect: {
      left: 0,
      right: 20,
    },
    targetRect: {
      width: 10,
      left: 5,
      right: 15,
    },
    componentRect: {
      width: 25,
    },
    attachmentPreference: HORIZONTAL_ATTACHMENTS.LEFT,
    flushHorizontal: true,
  },
  expected: HORIZONTAL_ATTACHMENTS.CENTER,
}, {
  method: 'getOptimalHorizontalAttachment',
  args: {
    boundaryRect: {
      left: 0,
      right: 20,
    },
    targetRect: {
      width: 10,
      left: 10,
      right: 20,
    },
    componentRect: {
      width: 15,
    },
    attachmentPreference: HORIZONTAL_ATTACHMENTS.RIGHT,
    flushHorizontal: true,
  },
  expected: HORIZONTAL_ATTACHMENTS.LEFT,
}, {
  method: 'getOptimalHorizontalAttachment',
  args: {
    boundaryRect: {
      left: 0,
      right: 20,
    },
    targetRect: {
      width: 10,
      left: 0,
      right: 10,
    },
    componentRect: {
      width: 15,
    },
    attachmentPreference: HORIZONTAL_ATTACHMENTS.RIGHT,
    flushHorizontal: true,
  },
  expected: HORIZONTAL_ATTACHMENTS.RIGHT,
}, {
  method: 'getOptimalHorizontalAttachment',
  args: {
    boundaryRect: {
      left: 0,
      right: 20,
    },
    targetRect: {
      width: 10,
      left: 5,
      right: 15,
    },
    componentRect: {
      width: 25,
    },
    attachmentPreference: HORIZONTAL_ATTACHMENTS.RIGHT,
    flushHorizontal: true,
  },
  expected: HORIZONTAL_ATTACHMENTS.CENTER,
}, {
  method: 'getOptimalHorizontalAttachment',
  args: {
    boundaryRect: {
      left: 0,
      right: 20,
    },
    targetRect: {
      width: 10,
      left: 5,
      right: 15,
    },
    componentRect: {
      width: 15,
    },
    attachmentPreference: HORIZONTAL_ATTACHMENTS.CENTER,
    flushHorizontal: true,
  },
  expected: HORIZONTAL_ATTACHMENTS.CENTER,
}, {
  method: 'getOptimalHorizontalAttachment',
  args: {
    boundaryRect: {
      left: 0,
      right: 20,
    },
    targetRect: {
      width: 10,
      left: 0,
      right: 10,
    },
    componentRect: {
      width: 25,
    },
    attachmentPreference: HORIZONTAL_ATTACHMENTS.CENTER,
    flushHorizontal: true,
  },
  expected: HORIZONTAL_ATTACHMENTS.CENTER,
}];
