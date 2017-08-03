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
      height: 5,
    },
    attachmentPreference: VERTICAL_ATTACHMENTS.TOP,
  },
  expected: VERTICAL_ATTACHMENTS.TOP,
}, {
  method: 'getOptimalVerticalAttachment',
  args: {
    viewportHeight: 20,
    targetRect: {
      height: 10,
      top: 0,
      bottom: 10,
    },
    componentRect: {
      height: 5,
    },
    attachmentPreference: VERTICAL_ATTACHMENTS.TOP,
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
      height: 25,
    },
    attachmentPreference: VERTICAL_ATTACHMENTS.TOP,
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
      height: 5,
    },
    attachmentPreference: VERTICAL_ATTACHMENTS.BOTTOM,
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
      height: 5,
    },
    attachmentPreference: VERTICAL_ATTACHMENTS.BOTTOM,
  },
  expected: VERTICAL_ATTACHMENTS.TOP,
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
      height: 25,
    },
    attachmentPreference: VERTICAL_ATTACHMENTS.BOTTOM,
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
      height: 5,
    },
    attachmentPreference: VERTICAL_ATTACHMENTS.CENTER,
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
  },
  expected: VERTICAL_ATTACHMENTS.CENTER,
}];
