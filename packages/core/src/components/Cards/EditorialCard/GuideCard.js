import * as React from 'react';

import cx from 'classnames';
import { applyContainerQuery, ContainerQuery } from 'react-container-query';

import noop from '../../../utils/noop';
import EditorialCard from './EditorialCard';

import linkcss from '../../Link/Link.css';
import css from './GuideCard.css';

const query = {
  [css.showDescription]: {
    minWidth: 340,
  },
  [css.singleLineDescription]: {
    minWidth: 340,
    maxWidth: 460,
  },
  [css.showLink]: {
    minWidth: 480,
  },
};

type CSS = {
  showDescription: boolean,
  singleLineDescription: boolean,
  showLink: boolean,
}

type ContainerQueryType = {
  css: CSS
}

type Props = {
  description: React.Node,
  downloadCallback?: Function,
  unlockCallback: Function,
  downloadLabel: string,
  unlockLabel: string,
  href: string,
  className?: string,
  containerQuery: ContainerQueryType,
}
class GuideCard extends React.Component<Props> {

  static defaultProps = {
    unlockCallback: noop,
    downloadLabel: 'Download',
    unlockLabel: 'Unlock',
  };

  handleBtnClick = e => {
    e.stopPropagation();
    e.preventDefault();
    const { unlockCallback, downloadCallback } = this.props;

    if (downloadCallback && typeof downloadCallback === 'function') {
      downloadCallback(e);
    } else {
      unlockCallback(e);
    }
  };

  render() {
    const {
      description,
      downloadCallback,
      downloadLabel,
      unlockLabel,
      containerQuery,
      className,
      unlockCallback: _unlockCallback,
      downloadCallback: _downloadCallback,
      ...rest
    } = this.props;

    const classes = cx(containerQuery, className);

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div>
        <EditorialCard {...rest} className={classes} tabIndex="0">
          <p className={css.description}>{description}</p>
          <span
            className={cx(css.link, linkcss.root)}
            onClick={this.handleBtnClick}
            tabIndex="0"
            role="button"
          >
            {downloadCallback ? downloadLabel : unlockLabel}
          </span>
        </EditorialCard>
      </div>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

export default applyContainerQuery(GuideCard, query);
