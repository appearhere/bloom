//@flow
/* eslint-disable react/no-multi-comp */
import * as React from 'react';
import cx from 'classnames';
import warning from 'warning';

import Tether, { HORIZONTAL_ATTACHMENTS, VERTICAL_ATTACHMENTS } from '../Tether/Tether';
import css from './Tooltip.css';

export { HORIZONTAL_ATTACHMENTS, VERTICAL_ATTACHMENTS } from '../Tether/Tether';

type Attachments = {
  center: string,
  top: string,
  bottom: string,
}

type VerticalClassNames = {
  [VERTICAL_ATTACHMENTS]: Attachments,
}

type HorizontalClassNames = {
  [HORIZONTAL_ATTACHMENTS]: Attachments,
}

const verticalAttachmentTypes = Object.keys(VERTICAL_ATTACHMENTS);
const horizontalAttachmentTypes = Object.keys(VERTICAL_ATTACHMENTS);

type Props = {
  children: React.Element<any>,
  verticalAttachment?: typeof verticalAttachmentTypes,
  horizontalAttachment?: typeof horizontalAttachmentTypes,
  className: string,
  verticalClassNames: VerticalClassNames,
  horizontalClassNames: HorizontalClassNames,
  flushHorizontal?: boolean,
  flushVertical?: boolean,
  active?: boolean,
}

/* eslint-disable react/prefer-stateless-function */
class TetherDirectionWrapper extends React.Component<Props> {
  render() {
    const {
      verticalAttachment,
      horizontalAttachment,
      verticalClassNames,
      horizontalClassNames,
      flushHorizontal,
      flushVertical,
      children,
      className,
      active,
      ...rest
    } = this.props;

    const classNames = cx(
      className,
      verticalClassNames[verticalAttachment],
      horizontalClassNames[horizontalAttachment],
      flushVertical ? verticalClassNames.flushVertical : null,
      flushHorizontal ? horizontalClassNames.flushHorizontal : null,
      active ? css.active : null,
    );

    return (
      <div className={classNames}>
        {React.cloneElement(children, {
          ...rest,
          verticalAttachment,
          horizontalAttachment,
        })}
      </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */
type Vertical = {
  [x: number]: any,
  flushVertical: any,
}

type Horizontal = {
  [x: number]: any,
  flushHorizontal: any,
}

type TargetClassNames = {
  vertical: Vertical,
  horizontal: Horizontal,
}

type TooltipProps = {
  target: React.Element<any>,
  children: React.Element<any>,
  variant: TargetClassNames,
  targetClassName: string,
  className: string,
  flushHorizontal: boolean,
  flushVertical: boolean,
}

export default class Tooltip extends React.Component<TooltipProps> {
  target: any;
  tooltip: any;

  static defaultProps = {
    variant: 'dark',
  };

  render() {
    const {
      target,
      children,
      variant,
      flushHorizontal,
      flushVertical,
      className,
      ...rest
    } = this.props;

    const targetClassNames = {
      vertical: {
        [VERTICAL_ATTACHMENTS.CENTER]: css.targetVerticalCenter,
        [VERTICAL_ATTACHMENTS.TOP]: css.targetTop,
        [VERTICAL_ATTACHMENTS.BOTTOM]: css.targetBottom,
        flushVertical: css.targetFlushVertical,
      },
      horizontal: {
        [HORIZONTAL_ATTACHMENTS.CENTER]: css.targetHorizontalCenter,
        [HORIZONTAL_ATTACHMENTS.LEFT]: css.targetLeft,
        [HORIZONTAL_ATTACHMENTS.RIGHT]: css.targetRight,
        flushHorizontal: css.targetFlushHorizontal,
      },
    };

    const tooltipClassNames = {
      vertical: {
        [VERTICAL_ATTACHMENTS.CENTER]: css.tooltipVerticalCenter,
        [VERTICAL_ATTACHMENTS.TOP]: css.tooltipTop,
        [VERTICAL_ATTACHMENTS.BOTTOM]: css.tooltipBottom,
        flushVertical: css.tooltipFlushVertical,
      },
      horizontal: {
        [HORIZONTAL_ATTACHMENTS.CENTER]: css.tooltipHorizontalCenter,
        [HORIZONTAL_ATTACHMENTS.LEFT]: css.tooltipLeft,
        [HORIZONTAL_ATTACHMENTS.RIGHT]: css.tooltipRight,
        flushHorizontal: css.tooltipFlushHorizontal,
      },
    };

    const targetClasses = cx(css.target, css[variant]);

    const tooltipClasses = cx(css.tooltip, css[variant], className);

    warning(
      !(flushVertical && flushHorizontal),
      "`Tooltip` component doesn't support the use of `flushVertical` and `flushHorizontal`" +
        " in tandem. The tooltip will cover it's target and may cause unexpected behaviour",
    );

    return (
      <Tether
        {...rest}
        flushVertical={flushVertical}
        flushHorizontal={flushHorizontal}
        target={
          <TetherDirectionWrapper
            ref={c => {
              this.target = c;
            }}
            className={targetClasses}
            verticalClassNames={targetClassNames.vertical}
            horizontalClassNames={targetClassNames.horizontal}
          >
            {target}
          </TetherDirectionWrapper>
        }
      >
        <TetherDirectionWrapper
          ref={c => {
            this.tooltip = c;
          }}
          className={tooltipClasses}
          verticalClassNames={tooltipClassNames.vertical}
          horizontalClassNames={tooltipClassNames.horizontal}
        >
          {children}
        </TetherDirectionWrapper>
      </Tether>
    );
  }
}
/* eslint-enable react/no-multi-comp */
