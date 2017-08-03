import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { applyContainerQuery } from 'react-container-query';

import EditorialCard from './EditorialCard';

import linkcss from '../../Link/Link.css';
import css from './EventCard.css';

const query = {
  [css.showMeta]: {
    minWidth: 320,
  },
  [css.showLink]: {
    minWidth: 360,
  },
  [css.showDescription]: {
    minWidth: 540,
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
      [css.showDescription]: PropTypes.bool,
      [css.showMeta]: PropTypes.bool,
      [css.showLink]: PropTypes.bool,
    }),
  };

  static defaultProps = {
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
      ctaCallback,
      ...rest,
    } = this.props;

    const classes = cx(containerQuery, className);

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div>
        <EditorialCard { ...rest } className={ classes } tabIndex="0">
          <div className={ css.body }>
            <span className={ css.meta }>
              { date }{ date && location && ' · ' }{ location }
            </span>
            <p className={ css.description }>{ description }</p>
            { ctaCallback && (
              <span
                className={ cx(css.link, linkcss.root) }
                onClick={ this.handleBtnClick }
                tabIndex="0"
                role="button"
              >
                { ctaLabel }
              </span>
            ) }
          </div>
        </EditorialCard>
      </div>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

export default applyContainerQuery(EventCard, query);
