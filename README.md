# Bloom
[![Build Status](https://travis-ci.com/appearhere/bloom.svg?token=Dby1wcjAJdzRsf4NN8um&branch=master)](https://travis-ci.com/appearhere/bloom)

![Bloom v0.0.1 Icon](https://dl.dropboxusercontent.com/u/15027214/bloom-icon.png)

Bloom acts as a central repository for reuseable React components and common styles to promote consistency across various projects at Appear Here. It also acts as a style guide to demonstrate how components should be used on their own and in combination with each other.

It's been bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app), and has a number of additional features to make development easier.

Find the [development roadmap on Trello](https://trello.com/b/GEtat29h/bloom-development).

## Use Bloom in your project

Include Bloom in your projects like any other npm module:

```shell
npm install @appearhere/bloom
```

You'll now be able to require components from bloom like any other module:

```javascript
var bloom = require('@appearhere/bloom');
var Link = require('@appearhere/bloom/components/Link/Link');

// ES2016
import bloom from '@appearhere/bloom';
import Link from '@appearhere/bloom/components/Link/Link';
```

If the module import fails like so, `You may need an appropriate loader to handle this file type`, you'll need to make sure you're transpiling Bloom along with the rest of your code:

```javascript
// BEFORE
{
  test: /\.(js|jsx)$/,
  include: './src',
  loader: 'babel',
  query: require('./babel.dev')
},

// AFTER
{
  test: /\.(js|jsx)$/,
  include: ['./src', './node_modules/@appearhere/bloom'],
  loader: 'babel',
  query: require('./babel.dev')
}
```

## Running the style guide

To build the style guide for deployment:

```shell
npm run build
```

This will create a static version of the style guide in `/build`.

To build the style guide for development:

```shell
npm start
```

This will run the style guide, automatically opening your browser window at the root page. We use hot module reloading, so the vast majority of changes you'll make to components or the style guide itself will auto update on the page.

**NOTE: changes to variables current require you to restart the project, as they're consumed on the initial run 🌚**

## React Storybook

Aside from running the style guide locally on your machine, we also have the option to use [React Storybook](https://getstorybook.io/).

> React Storybook is a UI development environment for your React components. With it, you can visualize different states of your UI components and develop them interactively.

To use storybook, simply run:


```shell
npm run storybook
```

## Building components

All components inside Bloom should:

1. Be reuseable
2. Have tests
3. Have stories (as per React Storybook)

Component styles, tests and stories should live along side their components. Tests and stories are automatically picked up by their respective modules via a strict naming convention:

```
// Component
Link.js

// Styles
Link.css

// Tests
Link.test.js

// Story
Link.story.js
```

Typically speaking, components should live in their own directory with the same name as the component, e.g., `components/Link/Link.js`. In some cases, you may find it makes more sense to have multiple components live in the same directory, where there is a tight relationship between them.

When developing components, it's suggested your start by developing them in isolation, using React Storybook, before adding them to the style guide to demonstrate how they work together with other components. That's not to say you _have_ to do this, how you actually go about it is down to your personal preference.

### Testing components

Currently, we're setup to use [Jest](http://facebook.github.io/jest/) for testing.

At minimum, **all** components should have a "does it render" test:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Link from './Link';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Link />, div);
});

```

You may also want to test class level functions:

```javascript
it('tracks the number of clicks', () => {
  const div = document.createElement('div');
  const instance = ReactDOM.render(<Link />, div);

  t.equals(instace.state.clicks, 0);
  instance.trackClick();
  t.equals(instace.state.clicks, 1);
});
```

Be careful when adding tests; we want to ensure that a simple change to a component's mark up, e.g., changing the `className` value, don't result a ton of failing tests. We also need to be wary of when we're effectively testing the React internals as opposed to our own components.

### Developing Bloom alongside your main project

Sometimes you might need to make changes to Bloom while you're working on your main project. Having to flip over to Bloom, PR the changes and get them published is slow and cumbersome. `npm install ../path/to/bloom` is one option, but every time you make a change, you'll have to redo the command _and_ recompile.

**Enter `npm link`**

`npm link` uses symlinks to reference your local copy of Bloom in your main project, meaning changes are reflected in **every** project that consumes your local copy of Bloom.

To get started, head to your copy of Bloom and run

```shell
npm link
```

This will create a global symlink to your copy of Bloom. Head to your project and run to use this reference instead of the regularly installed package:

```shell
npm link @appearhere/bloom
```

One flaw with this, is that a Webpack loader's `include` property **won't** follow symlinks. Earlier in the README, we managed to get Bloom into your project like so:

```javascript
{
  test: /\.(js|jsx)$/,
  include: ['./src', './node_modules/@appearhere/bloom'],
  loader: 'babel',
  query: require('./babel.dev')
}
```

To make this work, we instead need to ensure the include path to Bloom is absolute:

```javascript
const pathToBloom = fs.realpathSync('./node_modules/@appearhere/bloom');

{
  test: /\.(js|jsx)$/,
  include: ['./src', pathToBloom],
  loader: 'babel',
  query: require('./babel.dev')
}
```

Additional bonus: if the loader you're using is setup to work with hot module reloading, changes to Bloom **will also get hot reloaded in your main project** 😍

## Publishing Bloom

TBC

## Why "Bloom"?

It's the collective name for Jellyfish; they're pretty dumb, [look cool](http://static2.businessinsider.com/image/55a7ee522acae7c23f8b4cf6/youtubers-caught-a-jellyfish-sting-in-slow-motion--and-what-they-saw-gave-a-scientist-goosebumps.jpg)
and have a [form of immortality through regeneration](https://en.wikipedia.org/wiki/Turritopsis_dohrnii#Biological_immortality) which are all aspects of a good pattern library. `bloom.appearhere.co.uk` also sounds decent!

## More information

The repo was bootstrapped with create-react-app, and you can find the readme that it ships with [here](Bootstrap.README.md). It's worth reading if you want to know more about the foundation of this project. Note that some of it might be out of date.