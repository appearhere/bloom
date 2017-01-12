import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { applyContainerQuery } from 'react-container-query';

import noop from '../../../utils/noop';
import EditorialCard from './EditorialCard';

import linkcss from '../../Link/Link.css';
import css from './GuideCard.css';

const query = {
  [css.hideDescription]: {
    minWidth: 320,
    maxWidth: 420,
  },
  [css.singleLineDescription]: {
    minWidth: 420,
    maxWidth: 500,
  },
  [css.downloadBottom]: {
    minWidth: 320,
  },
};

class GuideCard extends Component {
  static propTypes = {
    description: PropTypes.node,
    downloadCallback: PropTypes.func,
    unlockCallback: PropTypes.func,
    downloadLabel: PropTypes.string,
    unlockLabel: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    containerQuery: PropTypes.shape({
      [css.hideDescription]: PropTypes.bool,
      [css.singleLineDescription]: PropTypes.bool,
      [css.downloadBottom]: PropTypes.bool,
    }),
  };

  static defaultProps = {
    unlockCallback: noop,
    downloadLabel: 'Download',
    unlockLabel: 'Unlock',
  };

  handleBtnClick = (e) => {
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
      ...rest,
    } = this.props;

    const classes = cx(containerQuery, className);

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div>
        <EditorialCard { ...rest } className={ classes } tabIndex="0">
          <p className={ css.description }>{ description }</p>
          <span
            className={ cx(css.link, linkcss.root) }
            onClick={ this.handleBtnClick }
            tabIndex="0"
            role="button"
          >
            { downloadCallback ? downloadLabel : unlockLabel }
          </span>
        </EditorialCard>
      </div>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

export default applyContainerQuery(GuideCard, query);