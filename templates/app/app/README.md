# TODO TITLE


## Description


# Getting started

- clone this repo

- run ```cd app && npm start``` in terminal

- type ```help``` for a list of commands ;)

# Core Technologies:
> 
React 16

React Router 4

Webpack 3

Less / SCSS

Babel

Semantic UI

# Testing 

Jest

Puppeteer


# Documentation

ESDOC documentation

Plato Code Analysis

Instanbul Code Coverage

Puppeteer Snapshots

# Analytics and Error Logging

Google Tag Manager is used for User Analytics.

Sentry.io + Raven.js is used for errors in production/staging.


# Designs

Designs are currently hosted via Zeplin, speak to Design for access.





# Path.alias

```CONTAINER```              ./src/containers

```COMPONENT```              ./src/components

```MOD```                    ./src/mods

```ELEMENT```                ./src/elements

```~LESS```                  ./src/containers/App/less

```NODE_MODULES```           ./node_modules

# Methodology / File Structure


## Containers:

#### Index - layout file 

  - Should generally only contain constructor, mount and render or pure render layout logic

  - Should pass down props and relative state

#### ACTIONS

  - Should only contain functions (all actions generally will be bound to the class)

  - Should not make requests - calls on API file

#### API

  - Should handle any OTA transactions and pass back to the actions

  - Does not bind to class and operates as a raw JS object for ACTIONS

#### style.less

  - Should use global variables in line with style guide

  - Each component should have a holding class and all relative elements should be nested within the class. (CSS component scoping)

#### test.spec
  - Should contain one failing test from the get go

  - Should provide comprehensive tests relative to the container


## Mods

MODS are native JS object files with helper methods to use across the system




## SEMANTIC-UI_REACT GOTCHAS
===============================

#### Compatability 


- Semantic conflicts with alot of the Webpack and Babel plugin eco-sphere, and most performance and build augmentations have been removed.
- Semantic is constantly being fixed as they head for release v1, and these problems will hopefully over time be amended.
- As stability increases, these types of enhancement add-ons can slowly creep back in under stable testing envronments, but due to this being essentially a non SEO admin system,
  performance is 2nd to stability and due to these factors build will be heavy with semantic and lodash, but hopefully light on other 3rd party libraries.

```
> some known issues

webpack-lodash-replacement plugin
group-css-media-queries plugin
babel-plugin-transform-semantic-ui-react-imports -    Ie segment and container styles - This mostly works but does not import relative css styles
CSS/LESS - recommended method was also problematic and generally requires dropping the entire lib into codebase
+++

```