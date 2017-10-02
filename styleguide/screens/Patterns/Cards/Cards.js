import React, { Component } from 'react';
import cx from 'classnames';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, C } from '../../../components/Scaffold/Scaffold';

import Card from '../../../../components/Cards/Card/Card';
import PictureCard from '../../../../components/Cards/PictureCard/PictureCard';
import SpaceFeatureCard from '../../../../components/Cards/SpaceFeatureCard/SpaceFeatureCard';
import EmptyListingCard from '../../../../components/Cards/EmptyListingCard/EmptyListingCard';
import SpaceListingCard from '../../../../components/Cards/SpaceListingCard/SpaceListingCard';
import Badge from '../../../../components/Badge/Badge';
import CondensedSpaceCard from '../../../../components/Cards/CondensedSpaceCard/CondensedSpaceCard';
import PlaceListingCard from '../../../../components/Cards/PlaceListingCard/PlaceListingCard';
import EditorialCard from '../../../../components/Cards/EditorialCard/EditorialCard';
import GuideCard from '../../../../components/Cards/EditorialCard/GuideCard';
import EventCard from '../../../../components/Cards/EditorialCard/EventCard';

import shared from '../../../../styleguide/shared.css';
import m from '../../../../globals/modifiers.css';
import css from './Cards.css';

export default class CardDocumentation extends Component {
  state = {
    isSpaceFavourited: false,
    isUserLoggedin: false,
  };

  handleFavouriteClick = () => {
    this.setState(currentState => ({
      ...currentState,
      isSpaceFavourited: !currentState.isSpaceFavourited,
    }));
  };

  handleLoginClick = () => {
    this.setState({
      isUserLoggedin: true,
    });
  };

  render() {
    const { isSpaceFavourited, isUserLoggedin } = this.state;
    return (
      <div>
        <H level={ 1 }>Cards</H>
        <T elm="p" className={ cx(m.mtr, m.largeI, m.demi) }>
          A card serves as an entry point to more detailed information.
        </T>
        <D>
          <H level={ 2 }>Default Cards</H>
          <T elm="p" className={ m.mtr }>
            The <C>Card</C> component is used as the foundation for other card components.
            It&#39;s unlikely you&#39;ll ever use it for any other purpose than composing
            together another card component, like the ones found below.
          </T>

          <H level={ 3 } className={ m.mtLgIi }>Default</H>
          <T elm="p" className={ m.mtr }>Normally, the card component does absolutely nothing.</T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: m.par,
            } }
            code={ dedent`
                <Card>
                  // Card content
                </Card>
            ` }
          >
            <div className={ css.cardContainer }>
              <div className={ css.cardContainer }>
                <Card className={ css.card }>
                  <div className={ css.defaultCardContent }>
                    Default
                  </div>
                </Card>
              </div>
            </div>
          </Specimen>
          <H level={ 3 } className={ m.mtLgIi }>As a link</H>
          <T elm="p" className={ m.mtr }>
            When provided a href prop, the card adds a hover effect,
            which moves the card further off the page than it&#39;s surrounding elements.
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: cx(m.par, css.specimenContainer),
            } }
            code={ dedent`
              <Card href="#">
                // Card content
              </Card>
            ` }
          >

            <div className={ css.cardContainer }>
              <Card href="#" className={ css.card }>
                <div className={ css.defaultCardContent }>
                  With a link
                </div>
              </Card>
            </div>
          </Specimen>
        </D>
        <D>
          <H level={ 2 } className={ shared.componentTitle }>Picture Card</H>
          <T elm="p" className={ m.mtr }>
            Similarly to the <C>Card</C> component, the picture card is
            the foundation of other card components. It&#39;s typically
            used where the background of the card should be a full
            bleed image. Otherwise, it acts exactly as the regular card component.
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: m.par,
            } }
            code={ dedent`
              <PictureCard
                src="https://source.unsplash.com/random"
              >
                // PictureCard content
              </PictureCard>
            ` }
          >
            <div className={ css.cardContainer }>
              <PictureCard
                src="https://source.unsplash.com/random"
                className={ css.pictureCard }
              >
                PictureCard
              </PictureCard>
            </div>
          </Specimen>
        </D>
        <D>
          <H level={ 2 } className={ shared.componentTitle }>Space Feature Card with Link</H>
          <T elm="p" className={ m.mtr }>
            Use when you want to feature a space in a more discrete way,
            where it&#39;s not the primary purpose of the page / section.
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: m.par,
            } }
            code={ dedent`
              <SpaceFeatureCard
                name="Mulberry Street"
                price="$1500 / day"
                location="New York"
                href="#"
                src="https://source.unsplash.com/random"
              />
            ` }
          >
            <div className={ css.cardContainer }>
              <SpaceFeatureCard
                name="Mulberry Street"
                price="$1500 / day"
                location="New York"
                href="#"
                src="https://source.unsplash.com/random"
                className={ css.card }
              />
            </div>
          </Specimen>
        </D>
        <D>
          <H level={ 2 } className={ shared.componentTitle }>Empty Listing Card</H>
          <T elm="p" className={ m.mtr }>
            Used as a placeholder / loading state for <C>SpaceListingCard</C>
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: m.par,
            } }
            code={ dedent`<EmptyListingCard />` }
          >
            <div className={ css.cardContainer }>
              <EmptyListingCard className={ css.card } />
            </div>
          </Specimen>
        </D>
        <D>
          <H level={ 2 } className={ shared.componentTitle }>Space Listing Card</H>
          <T elm="p" className={ m.mtr }>
            Should be used at the primary way to display space within the app.
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: m.par,
            } }
            code={ dedent`
              <SpaceListingCard
                price="$10,000,000"
                priceUnit="/day"
                location="Shoreditch, London in the Greater London Area"
                size="1000 sqft"
                name="A really long Bold Street Shop, maybe the biggest shop you've ever seen"
                images={
                  [{
                    src: 'https://source.unsplash.com/random/500x500',
                    alt: 'hello',
                  }, {
                    src: 'https://source.unsplash.com/random/500x503',
                    alt: 'hello2',
                  }, {
                    src: 'https://source.unsplash.com/random/500x502',
                    alt: 'hello',
                  }, {
                    src: 'https://source.unsplash.com/random/500x501',
                    alt: 'hello2',
                  }]
                }
                href="#"
              />
            ` }
          >
            <div className={ css.cardContainer }>
              <SpaceListingCard
                price="$10,000,000"
                priceUnit="/day"
                location="Shoreditch, London in the Greater London Area"
                size="1000 sqft"
                name="A really long Bold Street Shop, maybe the biggest shop you've ever seen"
                images={
                  [{
                    src: 'https://source.unsplash.com/random/500x500',
                    alt: 'hello',
                  }, {
                    src: 'https://source.unsplash.com/random/500x503',
                    alt: 'hello2',
                  }, {
                    src: 'https://source.unsplash.com/random/500x502',
                    alt: 'hello',
                  }, {
                    src: 'https://source.unsplash.com/random/500x501',
                    alt: 'hello2',
                  }]
                }
                href="#"
                className={ css.card }
              />
            </div>
          </Specimen>
        </D>
        <D>
          <H level={ 2 } className={ shared.componentTitle }>Space Listing Card with Badge</H>
          <T elm="p" className={ m.mtr }>
            Should be used to display additional information to a Space Listing Card (i.e NEW).
            Using the <C>Badge</C> component.
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: m.par,
            } }
            code={ dedent`
              <SpaceListingCard
                price="$10,000,00000000000000000000000"
                priceUnit="/day"
                badge={ <Badge context="primary" hollow={ false }>New</Badge> }
                location="Shoreditch, London in the Greater London Area"
                size="1000 sqft"
                name="A really long Bold Street Shop, maybe the biggest shop you've ever seen"
                images={
                  [{
                    src: 'https://source.unsplash.com/random/500x500',
                    alt: 'hello',
                  }, {
                    src: 'https://source.unsplash.com/random/500x503',
                    alt: 'hello2',
                  }, {
                    src: 'https://source.unsplash.com/random/500x502',
                    alt: 'hello',
                  }, {
                    src: 'https://source.unsplash.com/random/500x501',
                    alt: 'hello2',
                  }]
                }
                href="#"
              />
            ` }
          >
            <div className={ css.cardContainer }>
              <SpaceListingCard
                price="$10,000,00000000000000000000000"
                priceUnit="/day"
                badge={ <Badge context="primary" hollow={ false }>New</Badge> }
                location="Shoreditch, London in the Greater London Area"
                size="1000 sqft"
                name="A really long Bold Street Shop, maybe the biggest shop you've ever seen"
                images={
                  [{
                    src: 'https://source.unsplash.com/random/500x500',
                    alt: 'hello',
                  }, {
                    src: 'https://source.unsplash.com/random/500x503',
                    alt: 'hello2',
                  }, {
                    src: 'https://source.unsplash.com/random/500x502',
                    alt: 'hello',
                  }, {
                    src: 'https://source.unsplash.com/random/500x501',
                    alt: 'hello2',
                  }]
                }
                href="#"
                className={ css.card }
              />
            </div>
          </Specimen>
        </D>
        <D>
          <H level={ 2 } className={ shared.componentTitle }>
            Space Listing Card as a part of a place
          </H>
          <T elm="p" className={ m.mtr }>
            Should be used as the primary way to display space within the app.
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: m.par,
            } }
            code={ dedent`
              <SpaceListingCard
                price="$10,000,000"
                priceUnit="/day"
                location="Shoreditch, London"
                size="1000 sqft"
                name="Bold Street Shop"
                placeLabel="Part of Boxpark"
                placeHref="#"
                images={
                  [{
                    src: 'https://source.unsplash.com/random/500x500',
                    alt: 'hello',
                  }, {
                    src: 'https://source.unsplash.com/random/500x503',
                    alt: 'hello2',
                  }, {
                    src: 'https://source.unsplash.com/random/500x502',
                    alt: 'hello',
                  }, {
                    src: 'https://source.unsplash.com/random/500x501',
                    alt: 'hello2',
                  }]
                }
                href="#"
              />
            ` }
          >
            <div className={ css.cardContainer }>
              <SpaceListingCard
                price="$10,000,000"
                priceUnit="/day"
                location="Shoreditch, London"
                size="1000 sqft"
                name="Bold Street Shop"
                placeLabel="Part of Boxpark"
                placeHref="#"
                images={
                  [{
                    src: 'https://source.unsplash.com/random/500x500',
                    alt: 'hello',
                  }, {
                    src: 'https://source.unsplash.com/random/500x503',
                    alt: 'hello2',
                  }, {
                    src: 'https://source.unsplash.com/random/500x502',
                    alt: 'hello',
                  }, {
                    src: 'https://source.unsplash.com/random/500x501',
                    alt: 'hello2',
                  }]
                }
                href="#"
                className={ css.card }
              />
            </div>
          </Specimen>
        </D>
        <D>
          <H level={ 2 } className={ shared.componentTitle }>Favouritable SpaceListingCard</H>
          <T elm="p" className={ m.mtr }>
            Same as Space Listing Card, but allows users to favourite/unfavourite a space.
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: m.par,
            } }
            code={ dedent`
              <SpaceListingCard
                price="$10,000,000"
                priceUnit="/day"
                location="Shoreditch, London"
                size="1000 sqft"
                name="Bold Street Shop"
                images={
                  [{
                    src: 'https://source.unsplash.com/random/500x500',
                    alt: 'hello',
                  }, {
                    src: 'https://source.unsplash.com/random/500x503',
                    alt: 'hello2',
                  }, {
                    src: 'https://source.unsplash.com/random/500x502',
                    alt: 'hello',
                  }, {
                    src: 'https://source.unsplash.com/random/500x501',
                    alt: 'hello2',
                  }]
                }
                href="#"
                onFavouriteClick={ this.handleFavouriteClick }
                favourite={ isSpaceFavourited }
                favouriteable
              />
            ` }
          >
            <div className={ css.cardContainer }>
              <SpaceListingCard
                price="$10,000,000"
                priceUnit="/day"
                location="Shoreditch, London"
                size="1000 sqft"
                name="Bold Street Shop"
                images={
                  [{
                    src: 'https://source.unsplash.com/random/500x500',
                    alt: 'hello',
                  }, {
                    src: 'https://source.unsplash.com/random/500x503',
                    alt: 'hello2',
                  }, {
                    src: 'https://source.unsplash.com/random/500x502',
                    alt: 'hello',
                  }, {
                    src: 'https://source.unsplash.com/random/500x501',
                    alt: 'hello2',
                  }]
                }
                href="#"
                onFavouriteClick={ this.handleFavouriteClick }
                favourite={ isSpaceFavourited }
                favouriteable
                className={ css.card }
              />
            </div>
          </Specimen>
        </D>
        <D>
          <H level={ 2 } className={ shared.componentTitle }>Condensed Space Card</H>
          <T elm="p" className={ m.mtr }>
            Should be used when space is limited, and isn&#39;t the primary way to view
            a <C>SpaceListingCard</C> (typically shown with a tooltip)
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: m.par,
            } }
            code={ dedent`
              <CondensedSpaceCard
                price="$10,000,000"
                priceUnit="/day"
                name="Bold Street Shop"
                placeLabel="Part of Boxpark"
                placeHref="#"
                images={
                  [{
                    src: 'https://source.unsplash.com/random/500x500',
                    alt: 'hello',
                  }]
                }
                href="#"
              />
            ` }
          >
            <div className={ css.cardContainer }>
              <CondensedSpaceCard
                price="$10,000,000"
                priceUnit="/day"
                name="Bold Street Shop"
                placeLabel="Part of Boxpark"
                placeHref="#"
                images={
                  [{
                    src: 'https://source.unsplash.com/random/500x500',
                    alt: 'hello',
                  }]
                }
                href="#"
                className={ css.card }
              />
            </div>
          </Specimen>
        </D>
        <D>
          <H level={ 2 } className={ shared.componentTitle }>Place Listing Card</H>
          <T elm="p" className={ m.mtr }>
            Should be used as the primary way to display a place within the app.
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: m.par,
            } }
            code={ dedent`
              <PlaceListingCard
                price="$10,000,000"
                priceUnit="/day"
                priceFromLabel="from"
                location="Shoreditch, London"
                size="1000 sqft"
                name="BOXPARK"
                imageSrc="https://source.unsplash.com/random/500x500"
                spaceDetail="2 available spaces"
                href="#"
              />
            ` }
          >
            <div className={ css.cardContainer }>
              <PlaceListingCard
                price="$10,000,000"
                priceUnit="/day"
                priceFromLabel="from"
                location="Shoreditch, London"
                size="1000 sqft"
                name="BOXPARK"
                imageSrc="https://source.unsplash.com/random/500x500"
                spaceDetail="2 available spaces"
                href="#"
                className={ css.card }
              />
            </div>
          </Specimen>
        </D>
        <D>
          <H level={ 2 } className={ shared.componentTitle }>Editorial Card</H>
          <T elm="p" className={ m.mtr }>
            A card used to display information that is not a space
            (used within the editorial seciton of the website)
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: m.par,
            } }
            code={ dedent`
              <EditorialCard
                title="Mulberry Street"
                href="#"
                src="https://source.unsplash.com/random/500x500"
              >
                Nam erat urna, tincidunt eleifend libero ut, posuere dictum augue.
              </EditorialCard>
            ` }
          >
            <div className={ css.cardContainer }>
              <EditorialCard
                title="Mulberry Street"
                href="#"
                src="https://source.unsplash.com/random/500x500"
                className={ css.card }
              >
                Nam erat urna, tincidunt eleifend libero ut, posuere dictum augue.
              </EditorialCard>
            </div>
          </Specimen>
        </D>
        <D>
          <H level={ 2 } className={ shared.componentTitle }>Guide Card</H>
          <T elm="p" className={ m.mtr }>
            Same as the EditorialCard but provides a link to an additional resource.
            This link can exist in a locked an unlocked state, which is useful for
            providing different funtionality to users in different states, e.g.,
            logged in and logged out.
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: m.par,
            } }
            code={ dedent`
              <GuideCard
                title="How to PR your Pop Up Shop"
                href="#"
                src="https://source.unsplash.com/random/500x500"
                description={ 'Inside, you’ll find everything you need to know to launch a shop share' }
                unlockLabel="Login to download"
                unlockCallback={ this.handleLoginClick }
                downloadCallback={ isUserLoggedin ? () => { alert('Downloading') } : null }
              />
            ` }
          >
            <div className={ css.cardContainer }>
              <GuideCard
                title="How to PR your Pop Up Shop"
                href="#"
                src="https://source.unsplash.com/random/500x500"
                description={ 'Inside, you’ll find everything you need to know to launch a shop share' }
                unlockLabel="Login to download"
                unlockCallback={ this.handleLoginClick }
                downloadCallback={ isUserLoggedin ? () => { alert('Downloading'); } : null }
                className={ css.card }
              />
            </div>
          </Specimen>
        </D>
        <D>
          <H level={ 2 } className={ shared.componentTitle }>Event Card</H>
          <T elm="p" className={ m.mtr }>
            Same as the EditorialCard, but displays a date and location. Used to display all events.
          </T>
          <Specimen
            classNames={ {
              root: m.mtr,
              specimenContainer: m.par,
            } }
            code={ dedent`
              <EventCard
                title="Underground Session: The Editors"
                href="#"
                src="https://source.unsplash.com/random/500x500"
                description="Nam erat urna, tincidunt eleifend libero ut, posuere dictum augue."
                location="London"
                date="28th August 2016"
              />
            ` }
          >
            <div className={ css.cardContainer }>
              <EventCard
                title="Underground Session: The Editors"
                href="#"
                src="https://source.unsplash.com/random/500x500"
                description="Nam erat urna, tincidunt eleifend libero ut, posuere dictum augue."
                location="London"
                date="28th August 2016"
                className={ css.card }
              />
            </div>
          </Specimen>
        </D>
      </div>
    );
  }
}
