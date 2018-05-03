# TODO TITLE


## Description







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