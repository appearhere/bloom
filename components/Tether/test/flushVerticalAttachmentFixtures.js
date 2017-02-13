import { VERTICAL_ATTACHMENTS } from '../Tether';

export default [{
  method: 'getOptimalVerticalAttachment',
  args: {
    viewportHeight: 20,
    targetRect: {
      height: 10,
      top: 5,
      bottom: 15,
    },
    componentRect: {
      height: 10,
    },
    attachmentPreference: VERTICAL_ATTACHMENTS.TOP,
    flushVertical: true,
  },
  expected: VERTICAL_ATTACHMENTS.TOP,
}, {
  method: 'getOptimalVerticalAttachment',
  args: {
    viewportHeight: 20,
    targetRect: {
      height: 10,
      top: -2,
      bottom: 8,
    },
    componentRect: {
      height: 10,
    },
    attachmentPreference: VERTICAL_ATTACHMENTS.TOP,
    flushVertical: true,
  },
  expected: VERTICAL_ATTACHMENTS.BOTTOM,
}, {
  method: 'getOptimalVerticalAttachment',
  args: {
    viewportHeight: 20,
    targetRect: {
      height: 10,
      top: 5,
      bottom: 25,
    },
    componentRect: {
      height: 25,
    },
    attachmentPreference: VERTICAL_ATTACHMENTS.TOP,
    flushVertical: true,
  },
  expected: VERTICAL_ATTACHMENTS.BOTTOM,
}, {
  method: 'getOptimalVerticalAttachment',
  args: {
    viewportHeight: 20,
    targetRect: {
      height: 10,
      top: 5,
      bottom: 15,
    },
    componentRect: {
      height: 10,
    },
    attachmentPreference: VERTICAL_ATTACHMENTS.BOTTOM,
    flushVertical: true,
  },
  expected: VERTICAL_ATTACHMENTS.BOTTOM,
}, {
  method: 'getOptimalVerticalAttachment',
  args: {
    viewportHeight: 20,
    targetRect: {
      height: 10,
      top: 15,
      bottom: 20,
    },
    componentRect: {
      height: 15,
    },
    attachmentPreference: VERTICAL_ATTACHMENTS.BOTTOM,
    flushVertical: true,
  },
  expected: VERTICAL_ATTACHMENTS.TOP,
}, {
  method: 'getOptimalVerticalAttachment',
  args: {
    viewportHeight: 20,
    targetRect: {
      height: 10,
      top: 5,
      bottom: 15,
    },
    componentRect: {
      height: 25,
    },
    attachmentPreference: VERTICAL_ATTACHMENTS.BOTTOM,
    flushVertical: true,
  },
  expected: VERTICAL_ATTACHMENTS.BOTTOM,
}, {
  method: 'getOptimalVerticalAttachment',
  args: {
    viewportHeight: 20,
    targetRect: {
      height: 10,
      top: 5,
      bottom: 15,
    },
    componentRect: {
      height: 10,
    },
    attachmentPreference: VERTICAL_ATTACHMENTS.CENTER,
    flushVertical: true,
  },
  expected: VERTICAL_ATTACHMENTS.CENTER,
}, {
  method: 'getOptimalVerticalAttachment',
  args: {
    viewportHeight: 20,
    targetRect: {
      height: 10,
      top: 5,
      bottom: 15,
    },
    componentRect: {
      height: 25,
    },
    attachmentPreference: VERTICAL_ATTACHMENTS.CENTER,
    flushVertical: true,
  },
  expected: VERTICAL_ATTACHMENTS.CENTER,
}];