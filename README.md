# lucca-icons
Icon font by Lucca
[demo page](http://luccasa.github.io/lucca-ui/#/icons)


## How to install
```
bower install lucca-icons
```
## How to use
Import the lucca-icons.min.css in your html page
```html
<link rel="stylesheet" href="bower_components/lucca-icons/dist/lucca-icons.min.css"/>
```
or import the main less/sass file in your less/sass file [recommended]
```less
@import "bower_components/lucca-icons/src/lucca-icons";
```
## Change font source
By default the fonts will be imported from //cdn.lucca.fr/lucca-icons/fonts/lucca-icons.(woff,eot,ttf). You change this by overriding the variable `@luccaIcons_font-path`

```less
@import "bower_components/lucca-icons/src/lucca-icons";
@luccaIcons_font-path: '/my/path/to/fonts'; 
// will try to get fonts from '/my/path/to/fonts/lucca-icons.(woff,eot,ttf)'
```
