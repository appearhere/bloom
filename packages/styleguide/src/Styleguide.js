import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SiteHeader from './components/SiteHeader/SiteHeader';
import Navigation from './components/Navigation/Navigation';
import OffCanvasPanel from './components/OffCanvasPanel/OffCanvasPanel';

import {
  BtnContainer,
  Icon,
  ScreenReadable,
  Wrapper
} from '@appearhere/bloom';
import { BodyClassNameConductor } from '@appearhere/bloom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import GoogleAnalytics from './utils/GoogleAnalytics';

/* Pages */
import Introduction from './screens/Overview/Introduction';
import Colors from './screens/Design/Colors';
import Iconography from './screens/Design/Iconography';
import ResponsiveDesign from './screens/Design/ResponsiveDesign';
import Typography from './screens/Design/Typography';
import Patterns from './screens/Patterns/Patterns';
import Modifiers from './screens/Utilities/Modifiers';
import FourOhFour from './404';

import css from './Styleguide.module.css';

export default class Styleguide extends Component {
  constructor(props) {
    super(props);
    this.bodyClassName = new BodyClassNameConductor(this.id);
  }

  state = {
    showNavigation: false,
  };

  toggleNavigation = () => {
    this.setState(({ showNavigation }) => ({
      showNavigation: !showNavigation,
    }));
  };

  openNavigation = () => {
    this.setState({ showNavigation: true });
    this.bodyClassName.add('overflowHidden');
    this.bodyClassName.add('positionFixed');
  };

  closeNavigation = () => {
    this.setState({ showNavigation: false });
    this.bodyClassName.remove('overflowHidden');
    this.bodyClassName.remove('positionFixed');
  };

  render() {
    const { showNavigation } = this.state;

    return (
      <BrowserRouter>
        <ScrollToTop>
          <Route path="/" component={GoogleAnalytics} />
          <div className={css.root}>
            <BtnContainer className={css.menuBtn} onClick={this.openNavigation}>
              <Icon className={css.menuIcon} name="menu" />
              <ScreenReadable>Open menu</ScreenReadable>
            </BtnContainer>
            <OffCanvasPanel
              className={css.navigationSm}
              activeClassName={css.navigationActive}
              active={showNavigation}
              onClose={this.closeNavigation}
            >
              <SiteHeader version={process.env.npm_package_version} onLinkClick={this.closeMenu} />
              <Navigation onLinkClick={this.closeNavigation} />
            </OffCanvasPanel>
            <div className={css.navigationLg}>
              <SiteHeader version={process.env.npm_package_version} onLinkClick={this.closeMenu} />
              <Navigation onLinkClick={this.closeNavigation} />
            </div>
            <div className={css.body}>
              <Wrapper className={css.wrapper}>
                <Switch>
                  <Route exact path="/" component={Introduction} />
                  <Route path="/design/colors" component={Colors} />
                  <Route path="/design/responsive-design" component={ResponsiveDesign} />
                  <Route path="/design/iconography" component={Iconography} />
                  <Route path="/design/typography" component={Typography} />
                  <Route path="/utilities/modifiers" component={Modifiers} />

                  <Patterns />

                  <Route component={FourOhFour} />
                </Switch>
              </Wrapper>
            </div>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}
