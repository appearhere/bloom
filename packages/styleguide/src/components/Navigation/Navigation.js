import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import { Typography as t } from '@appearhere/bloom';
import * as scaffold from '../../components/Scaffold/Scaffold';

import css from './Navigation.module.css';

const Navigation = ({ className, onLinkClick }) => (
  <div className={cx(css.root, className)}>
    <div className={css.section}>
      <span className={cx(scaffold.h2, css.title)}>Overview</span>
      <ul className={css.linkList}>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/"
            onClick={onLinkClick}
          >
            Introduction
          </NavLink>
        </li>
      </ul>
    </div>
    <div className={css.section}>
      <span className={cx(scaffold.h2, css.title)}>Design</span>
      <ul className={css.linkList}>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/design/colors"
            onClick={onLinkClick}
          >
            Colors
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/design/iconography"
            onClick={onLinkClick}
          >
            Iconography
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/design/responsive-design"
            onClick={onLinkClick}
          >
            Responsive design
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/design/typography"
            onClick={onLinkClick}
          >
            Typography
          </NavLink>
        </li>
      </ul>
    </div>
    <div className={css.section}>
      <span className={cx(scaffold.h2, css.title)}>Patterns</span>
      <ul className={css.linkList}>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/accessibility"
            onClick={onLinkClick}
          >
            Accessibility
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/animation"
            onClick={onLinkClick}
          >
            Animation
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/badge"
            onClick={onLinkClick}
          >
            Badge
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/buttons"
            onClick={onLinkClick}
          >
            Buttons
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/calendar"
            onClick={onLinkClick}
          >
            Calendar
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/cards"
            onClick={onLinkClick}
          >
            Cards
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/carousel"
            onClick={onLinkClick}
          >
            Carousel
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/dropdown"
            onClick={onLinkClick}
          >
            Dropdown
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/figure"
            onClick={onLinkClick}
          >
            Figure
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/fitted-image"
            onClick={onLinkClick}
          >
            Fitted image
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/horizontal-overflow-bar"
            onClick={onLinkClick}
          >
            Horizontal Overflow Bar
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/inputs"
            onClick={onLinkClick}
          >
            Inputs
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/input-field"
            onClick={onLinkClick}
          >
            InputField
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/leftright"
            onClick={onLinkClick}
          >
            LeftRight
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/loader"
            onClick={onLinkClick}
          >
            Loader
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/markdown"
            onClick={onLinkClick}
          >
            Markdown
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/medallion"
            onClick={onLinkClick}
          >
            Medallion
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/modals"
            onClick={onLinkClick}
          >
            Modals
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/pagination"
            onClick={onLinkClick}
          >
            Pagination
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/panels"
            onClick={onLinkClick}
          >
            Panels
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/social-links"
            onClick={onLinkClick}
          >
            Social Links
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/tabs"
            onClick={onLinkClick}
          >
            Tabs
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/tab-bar"
            onClick={onLinkClick}
          >
            Tab Bar
          </NavLink>
        </li>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/patterns/tether"
            onClick={onLinkClick}
          >
            Tether
          </NavLink>
        </li>
      </ul>
    </div>
    <div className={css.section}>
      <span className={cx(scaffold.h2, css.title)}>Utilities</span>
      <ul className={css.linkList}>
        <li className={css.linkListItem}>
          <NavLink
            exact
            activeClassName={css.linkActive}
            className={cx(css.link, t.fontRegular)}
            to="/utilities/modifiers"
            onClick={onLinkClick}
          >
            Modifiers
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

Navigation.propTypes = {
  onLinkClick: PropTypes.func,
  className: PropTypes.string,
};

Navigation.defaultProps = {
  onLinkClick: () => {},
};

export default Navigation;
