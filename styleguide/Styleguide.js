import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SiteHeader from './components/SiteHeader/SiteHeader';
import Navigation from './components/Navigation/Navigation';
import OffCanvasPanel from './components/OffCanvasPanel/OffCanvasPanel';
import BtnContainer from '../components/BtnContainer/BtnContainer';
import Icon from '../components/Icon/Icon';
import ScreenReadable from '../components/ScreenReadable/ScreenReadable';
import Wrapper from '../components/Wrapper/Wrapper';
import BodyClassNameConductor from '../utils/BodyClassNameConductor/BodyClassNameConductor';

/* Pages */
import Introduction from './screens/Overview/Introduction';
import Goals from './screens/Overview/Goals';
import Faq from './screens/Overview/Faq';
import Colors from './screens/Design/Colors';
import Typography from './screens/Design/Typography';
import Iconography from './screens/Design/Iconography';
import FourOhFour from './404';

import css from './Styleguide.css';

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
        <div className={ css.root }>
          <BtnContainer className={ css.menuBtn } onClick={ this.openNavigation }>
            <Icon className={ css.menuIcon } name="menu" />
            <ScreenReadable>Open menu</ScreenReadable>
          </BtnContainer>
          <OffCanvasPanel
            className={ css.navigationSm }
            activeClassName={ css.navigationActive }
            active={ showNavigation }
            onClose={ this.closeNavigation }
          >
            <SiteHeader
              version={ process.env.npm_package_version }
              onLinkClick={ this.closeMenu }
            />
            <Navigation onLinkClick={ this.closeNavigation } />
          </OffCanvasPanel>
          <div className={ css.navigationLg }>
            <SiteHeader
              version={ process.env.npm_package_version }
              onLinkClick={ this.closeMenu }
            />
            <Navigation onLinkClick={ this.closeNavigation } />
          </div>
          <div className={ css.body }>
            <Wrapper className={ css.wrapper }>
              <Switch>
                <Route exact path="/" component={ Introduction } />
                <Route path="/goals" component={ Goals } />
                <Route path="/faq" component={ Faq } />

                <Route path="/design/colors" component={ Colors } />
                <Route path="/design/typography" component={ Typography } />
                <Route path="/design/iconography" component={ Iconography } />

                <Route component={ FourOhFour } />
              </Switch>
            </Wrapper>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
