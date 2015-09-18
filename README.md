# garp

A static site processor, like Harp.js, but with Gulp.

## Installation

1. Clone the repository.

    ```
    git clone https://github.com/furf/garp.git
    ```

1. Install the dependencies.

    ```
    cd garp
    npm i
    ```

## Developing

1. Start the development environment.

    ```
    npm start
    ```

    This is a shortcut for running the `develop` Gulp task.

    ```
    npm run gulp develop
    ```

1. Each Gulp task can be run following the above pattern.

    ```
    npm run gulp taskname
    ```

    The following tasks are available:

    * `build-css-less`
    * `build-css-sass`
    * `build-css-stylus`
    * `build-css`
    * `build-html-ejs`
    * `build-html-jade`
    * `build-html-swig`
    * `build-html`
    * `build-js`
    * `build`
    * `clean`
    * `constants`
    * `copy-assets`
    * `default`
    * `develop`
    * `helpers`
    * `serve`
    * `watch`

1. Preview the site at [http://localhost:8440/](http://localhost:8440/). The port can be configured in the `tasks/constants` file.

---

Copyright (c) 2015, Dave Furfero <furf@furf.com>. Released under [ISC License (ISC)](http://opensource.org/licenses/ISC).
