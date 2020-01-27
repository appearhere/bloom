//@flow
import * as React from 'react';

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

type CSS = {
  showDescription: boolean,
  showMeta: boolean,
  showLink: boolean
}

type ContainerQuery = {
  css: CSS
}

type Props = {
  description: React.Node,
  location?: string,
  date: string,
  ctaCallback: Function,
  ctaLabel: string,
  href: string,
  className?: string,
  containerQuery: ContainerQuery,
};

class EventCard extends React.Component<Props> {

  static defaultProps = {
    ctaLabel: 'Get tickets',
  };

  handleBtnClick = e => {
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
      ...rest
    } = this.props;

    const classes = cx(containerQuery, className);

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div>
        <EditorialCard {...rest} className={classes} tabIndex="0">
          <div className={css.body}>
            <span className={css.meta}>
              {date}
              {date && location && ' · '}
              {location}
            </span>
            <p className={css.description}>{description}</p>
            {ctaCallback && (
              <span
                className={cx(css.link, linkcss.root)}
                onClick={this.handleBtnClick}
                tabIndex="0"
                role="button"
              >
                {ctaLabel}
              </span>
            )}
          </div>
        </EditorialCard>
      </div>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

export default applyContainerQuery(EventCard, query);
