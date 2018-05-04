# Admin UI CLI

This is a tool to help automate some common admin UI-related tasks. If it gains adoption, it could help us standardize the way we build admin UIs throughout the company.

This is a modified version of Tim Lycett's work, so thanks Tim!

# Dev Status:
> 

In the process of turning this into a tool anyone in the company can use to build admin UIs. 

The idea is for master branch to be very very basic, and that we create branches for different toolsets / use cases.

Future branches include a redux integration branch and a deployment configuration branch.

There is still A LOT left to do.

# Usage

## Starting parameters

`-t=dir-name`    :     Target directory. This is the directory where cli operations will be performed. The given value is automatically prepended with `../` in order to transform it into a path, so the target directory will always be a sibling of the `cli` directory. Defaults to `app`.

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








# Getting started on a new Feature

For this example, Let's assume we have to add the feature to an app that lives in the `existing-project` directory, and that directory is a sibling of this repo's directory.

Start the cli with the correct target directory:  `cd admin-ui-cli && npm start -t=existing-project`

type ```help``` in the CLI.

to create a new View, try these commands:

- ```create container TestView```

- ```create component Test at containers/TestView/components/```


> in your IDE, open ../existing-project/src/containers/App/index.js

- add ```import TestView from 'CONTAINER/TestView' ``` to top of file.

- add ```<Route exact path="/test" render={props => <TestView {...this.state} /> } />``` to the render







# Starting a new Project

In the terminal:

- git clone this repo

- type ```cd admin-ui-cli && npm start -t=your-new-project```

- type ``` new-app``` into CLI

- you should be up and running! 
