# Takealot admin UI CLI

This is a tool to help automate some common admin UI-related tasks. If it gains adoption, it will help us standardize the way we build admin UIs throughout the company.

# Dev Status:
> 

In the process of turning this into a tool anyone in the company can use to build admin UIs. 

The idea is for master branch to be very very basic, and that we create branches for different toolsets / use cases.

Future branches include a redux integration branch and deployment configuration branch.


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


# CLI

## Starting parameters

`-t=dir-name`    :     Target directory. This is the directory where cli operations will be performed. The given value is automatically prepended with `../` in order to transform it into a path, so the target directory will always be a sibling of the `cli` directory. 
Defaults to `app`.

## Commands

help             :     show help menu of commands

doc              :     Generate Documentation and analysis overview of codebase

test             :     Run Tests

npm run build    :     build Production files



## CLI Generators


Container:

  create global:        ```create container {Name}```

  create nested:        ```create container {Name} at {path/relative/to/Root/}```



Component

  create global:        ```create component {Name}```

  create nested:        ```create component {Name} at {path/relative/to/Root/}```



Element

  create global:        ```create element {Name}```

  create nested:        ```create element {Name} at {path/relative/to/Root/}```




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







# Getting started on a new Feature

once you have run npm start in either the ./app or ./cli folder, 

type ```help``` in the CLI.

to create a new View, try these commands:

- ```create container TestView```

- ```create component Test at containers/TestView/components/```


> in your IDE, open ./app/src/containers/App/index.js

- add ```import TestView from 'CONTAINER/TestView' ``` to top of file.

- add ```<Route exact path="/test" render={props => <TestView {...this.state} /> } />``` to the render







# Starting a new Project

Using this as a template? Try this in terminal:

- git clone this repo

- DELETE the old ```.git``` folder

- DELETE the old ```app``` folder

- ```git init``` to start your new repo

- type ```cd cli && npm start```

- type ``` new-app``` into CLI

- you should be up and running! 
