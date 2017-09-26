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
            to="/design/typography"
            onClick={ onLinkClick }
          >
            Typography
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
