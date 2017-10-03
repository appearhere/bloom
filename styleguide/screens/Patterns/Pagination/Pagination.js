/* globals
  window: true
*/

import React from 'react';
import cx from 'classnames';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, C } from '../../../components/Scaffold/Scaffold';

import Pagination from '../../../../components/Pagination/Pagination';
import PaginationTrack from '../../../../components/Pagination/PaginationTrack';

import m from '../../../../globals/modifiers.css';

/* eslint-disable */
const PaginationButton = ({ page, disabled }) => (
  <button
    disabled={ disabled }
    onClick={ () => window.alert(`Going to page ${page}`) }
  >
    Go to page { page }
  </button>
);
/* eslint-enable */

const PaginationDocumentation = () => (
  <div>
    <H level={ 1 }>Pagination</H>
    <T elm="p" className={ cx(m.mtr, m.largeI, m.demi) }>
      Pagination allows you to split content across multiple pages, and
      provides a way for users to navigate between pages. Using pagination can
      help improve performance and overall experience for users.
    </T>
    <D>
      <H level={ 2 }>Default</H>
      <T elm="p" className={ m.mtr }>
        By default, the component will only display previous and next arrows.
        This provides us with the flexibility to implement different styles of
        pagination depending on the context of the page.
      </T>
      <T elm="p" className={ m.mtr }>
        Both arrows in the default form are anchor tags, which automatically
        have the page query parameter appended to the current
        URL: <C>?page={ '{page_number}' }</C>.
      </T>
      <Specimen
        classNames={ {
          root: m.mtr,
          specimenContainer: m.par,
        } }
        code="<Pagination currentPage={ 1 } totalPages={ 5 } />"
      >
        <Pagination currentPage={ 1 } totalPages={ 5 } />
      </Specimen>
      <H level={ 3 } className={ m.mtLgIi }>
        As part of a SPA
      </H>
      <T elm="p" className={ m.mtr }>
        You can override the default behaviour by providing the pagination
        component with the <C>PreviousComponent</C> and <C>NextComponent</C> props.
        Each prop should be a react component which should transition the user
        to the previous or next page. Each component will automatically receive
        the page number it should take the user to, as the <C>page</C> prop, along
        with whether or not that link should be disabled or not.
      </T>
      <Specimen
        classNames={ {
          root: m.mtr,
          specimenContainer: m.par,
        } }
        code={ dedent`
          <Pagination
            currentPage={ 1 }
            totalPages={ 5 }
            NextComponent={ PaginationButton }
            PreviousComponent={ PaginationButton }
          />
        ` }
      >
        <Pagination
          currentPage={ 1 }
          totalPages={ 5 }
          NextComponent={ PaginationButton }
          PreviousComponent={ PaginationButton }
        />
      </Specimen>
    </D>
    <D>
      <H level={ 2 }>Providing additional context</H>
      <T elm="p" className={ m.mtr }>
        In it’s default form, the pagination component provides very little
        information to the user around which page they’re on, or the number
        of pages that are available for them to look at. It’s a good idea to
        provide them with this information in some way.
      </T>
      <H level={ 3 } className={ m.mtLgIi }>
        Current page and total pages
      </H>
      <T elm="p" className={ m.mtr }>
        At bare minimum, you should provide the user with the current page and
        total number of pages available.
      </T>
      <Specimen
        classNames={ {
          root: m.mtr,
          specimenContainer: m.par,
        } }
        code={ dedent`
          <Pagination
            currentPage={ 1 }
            totalPages={ 5 }
          >
            { currentPage } of { totalPages }
          </Pagination>
        ` }
      >
        <Pagination currentPage={ 1 } totalPages={ 5 }>
          1 of 5
        </Pagination>
      </Specimen>
      <H level={ 3 } className={ m.mtLgIi }>
        Jump to page
      </H>
      <T elm="p" className={ m.mtr }>
        When you have more screen real estate to play with, you may want to
        provide additional functionality to the user, to allow them to jump to
        a particular page. We have provided an additional component to make
        this easy.
      </T>
      <Specimen
        classNames={ {
          root: m.mtr,
          specimenContainer: m.par,
        } }
        code={ dedent`
          <Pagination
            currentPage={ 1 }
            totalPages={ 5 }
          >
            <PaginationTrack
              currentPage={ 1 }
              totalPages={ 5 }
            />
          </Pagination>
        ` }
      >
        <Pagination currentPage={ 1 } totalPages={ 5 }>
          <PaginationTrack currentPage={ 1 } totalPages={ 5 } />
        </Pagination>
      </Specimen>
      <T elm="p" className={ m.mtr }>
        When using the track to provide the additional functionality, it will
        likely be a good idea to switch between the two solutions above
        depending on the user’s window size.
      </T>
    </D>
  </div>
);

export default PaginationDocumentation;
