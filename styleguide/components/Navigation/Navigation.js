import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import noop from '../../../utils/noop';

import css from './Navigation.css';

const Navigation = ({ className, onLinkClick }) => (
  <div className={ cx(css.root, className) }>
    <div className={ css.section }>
      <span className={ css.title }>Overview</span>
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
        <li className={ css.linkListItem }>
          <NavLink
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/goals"
            onClick={ onLinkClick }
          >
            Goals
          </NavLink>
        </li>
        <li className={ css.linkListItem }>
          <NavLink
            activeClassName={ css.linkActive }
            className={ css.link }
            to="/faq"
            onClick={ onLinkClick }
          >
            FAQs
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
