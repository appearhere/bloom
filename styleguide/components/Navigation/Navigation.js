import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import noop from '../../../utils/noop';
import * as scaffold from '../../components/Scaffold/Scaffold';

import css from './Navigation.css';

const Navigation = ({ className, onLinkClick }) => (
  <div className={ cx(css.root, className) }>
    <div className={ css.section }>
      <span className={ cx(scaffold.h2, css.title) }>Overview</span>
      <ul className={ css.linkList }>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/"
            onClick={ onLinkClick }
          >
            Introduction
          </NavLink>
        </li>
      </ul>
    </div>
    <div className={ css.section }>
      <span className={ cx(scaffold.h2, css.title) }>Design</span>
      <ul className={ css.linkList }>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/design/colors"
            onClick={ onLinkClick }
          >
            Colors
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/design/iconography"
            onClick={ onLinkClick }
          >
            Iconography
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/design/responsive-design"
            onClick={ onLinkClick }
          >
            Responsive design
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/design/typography"
            onClick={ onLinkClick }
          >
            Typography
          </NavLink>
        </li>
      </ul>
    </div>
    <div className={ css.section }>
      <span className={ cx(scaffold.h2, css.title) }>Patterns</span>
      <ul className={ css.linkList }>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/accessibility"
            onClick={ onLinkClick }
          >
            Accessibility
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/animation"
            onClick={ onLinkClick }
          >
            Animation
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/badge"
            onClick={ onLinkClick }
          >
            Badge
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/buttons"
            onClick={ onLinkClick }
          >
            Buttons
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/cards"
            onClick={ onLinkClick }
          >
            Cards
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/carousel"
            onClick={ onLinkClick }
          >
            Carousel
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/figure"
            onClick={ onLinkClick }
          >
            Figure
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/fitted-image"
            onClick={ onLinkClick }
          >
            Fitted image
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/horizontal-overflow-bar"
            onClick={ onLinkClick }
          >
            Horizontal Overflow Bar
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/inputs"
            onClick={ onLinkClick }
          >
            Inputs
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/input-field"
            onClick={ onLinkClick }
          >
            InputField
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/leftright"
            onClick={ onLinkClick }
          >
            LeftRight
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/loader"
            onClick={ onLinkClick }
          >
            Loader
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/markdown"
            onClick={ onLinkClick }
          >
            Markdown
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/medallion"
            onClick={ onLinkClick }
          >
            Medallion
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/modals"
            onClick={ onLinkClick }
          >
            Modals
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/pagination"
            onClick={ onLinkClick }
          >
            Pagination
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/panels"
            onClick={ onLinkClick }
          >
            Panels
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/social-links"
            onClick={ onLinkClick }
          >
            Social Links
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/tabs"
            onClick={ onLinkClick }
          >
            Tabs
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/tab-bar"
            onClick={ onLinkClick }
          >
            Tab Bar
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            exact
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/patterns/tether"
            onClick={ onLinkClick }
          >
            Tether
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
  onLinkClick: noop,
};

export default Navigation;
