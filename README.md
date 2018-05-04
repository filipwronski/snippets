# CAPE MORRIS website

CAPE MORRIS frontend boilerplate

## Filestructure
```
.
├── dist
│   ├── css
│       ├── style.css
│       └── style.css.map
│   ├── js
│       ├── scripts.js
│       ├── scripts.min.js
│       └── scripts.min.js.map
│   ├── img
│       ├── sprites
│           └── spites.svg
│       ├── ...
│       └── xxxx.jpg
│   └── other
│       ├── ...
│       └── xxxx.js
├── node_modules
├── src
│   └── js
│       ├── bootstrap
│           ├── ...
│           └── xxx.js
│       ├── plugins
│           ├── jquery.waypoints.js
│           ├── lazyload.js
│           └── slick.js
│       ├── main.js
│       └── slick.js
│   ├── scss
│       ├── bootstrap
│           ├── ...
│           └── xxx.scss
│       ├── plugins
│           ├── animate.css
│           ├── slick-theme.scss
│           └── slick.scss
│       ├── common.scss
│       ├── main.scss
│       ├── sprite.scss
│       ├── styles.scss
│       └── variables.scss
├── index.html
├── gulpfile.js
├── package-lock.json
├── package.json
├── yarn.lock
└── README.md
```

## Installing:

First install gulp and yarn globally `npm install -g gulp yarn`
Then install all dev-dependencies for this gulpfile with command: `yarn`


## Other commands:

* Compile JS: `gulp js`
* Compile SCSS: `gulp scss`
* Watch JS without browser sync: `gulp watch:js`
* Watch SCSS without browser sync: `gulp watch:scss`
* Watch JS and SCSS without browser sync: `gulp watch`
* Default (compile:js and compile:scss): `gulp`
* Watch SCSS + JS + browser sync with css injection: `gulp serv`
* Watch SCSS + browser sync with css injection: `gulp serv:scss`
* Creating svg sprite incorporating scss code and .svg file: `gulp sprites:svg`
    _(gets all svg files from `src/sprites` and creates `dist/img/sprites/sprites.css.svg` and scss file which is automaticly incorporate to main `style.min.css`
     file)_
* To add version to main css and js (link footer and header) to all html files: `gulp version`


## .gitignore:

Ignored folders:
```
node_modules/
dist/css/
dist/js/
```

# Snippets

## JS
* to add another plugin to compilated js add `@import 'plugins/xxx.js';` to `src/js/scripts.js` and place file to `src/js/plugin` folder
* to add particular js bootstrap functions you need to add to `src/js/scripts.js` one of:
    ```
    @import 'bootstrap/util.js';
    @import 'bootstrap/button.js';
    @import 'bootstrap/carousel.js';
    @import 'bootstrap/collapse.js';
    @import 'bootstrap/dropdown.js';
    @import 'bootstrap/modal.js';
    @import 'bootstrap/popover.js';
    @import 'bootstrap/scrollspy.js';
    @import 'bootstrap/tab.js';
    @import 'bootstrap/tooltip.js';
    ```
    or add it as cdn to html
___

## CSS/SCSS
* to add another plugin to compilated scss, add `@import 'plugins/xxx';` to `src/scss/styles.scss` and place file to `src/scss/plugin` folder
* to add bootstrap element to compilated scss, uncomment wanted scss bootstrap element in `'bootstrap/bootstrap-set.scss'`

### Sprites svg
to create sprites:
1. place svg files in to `src/sprites/`
1. start gulp task `gulp sprites` (it will automaticly create svg sprite file in `dist/img/sprites`, create `sprites.scss` file in `src/scss/` and it will start compilation of scss files)

#### Sprites svg usage
```html
<div><span class="svg-sprite svg-FILE_NAME svg-FILE_NAME-dims"></span></div>
```
___
# Plugins

Attatched plugins:

* SlickSlider (css & js)  http://kenwheeler.github.io/slick/
* Waipoint.js (js)        http://imakewebthings.com/waypoints/
* lazyload.js (js)        https://appelsiini.net/projects/lazyload/
* animate.css (css)       https://daneden.github.io/animate.css/

