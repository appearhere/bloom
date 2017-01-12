import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { applyContainerQuery } from 'react-container-query';

import noop from '../../../utils/noop';
import EditorialCard from './EditorialCard';

import linkcss from '../../Link/Link.css';
import css from './EventCard.css';

const query = {
  [css.hideDescription]: {
    minWidth: 320,
    maxWidth: 550,
  },
  [css.ctaBottom]: {
    minWidth: 320,
  },
};

class EventCard extends Component {
  static propTypes = {
    description: PropTypes.node,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    ctaCallback: PropTypes.func,
    ctaLabel: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    containerQuery: PropTypes.shape({
      [css.hideDescription]: PropTypes.bool,
      [css.ctaBottom]: PropTypes.bool,
    }),
  };

  static defaultProps = {
    ctaCallback: noop,
    ctaLabel: 'Get tickets',
  };

  handleBtnClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    this.props.ctaCallback(e);
  };

  render() {
    const {
      description,
      date,
      location,
      ctaLabel,
      containerQuery,
      className,
      ctaCallback: _ctaCallback,
      ...rest,
    } = this.props;

    const classes = cx(containerQuery, className);

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div>
        <EditorialCard { ...rest } className={ classes } tabIndex="0">
          <span className={ css.meta }>{ date } · { location }</span>
          <p className={ css.description }>{ description }</p>
          <span
            className={ cx(css.link, linkcss.root) }
            onClick={ this.handleBtnClick }
            tabIndex="0"
            role="button"
          >
            { ctaLabel }
          </span>
        </EditorialCard>
      </div>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

export default applyContainerQuery(EventCard, query);