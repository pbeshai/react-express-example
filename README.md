# React Express Example

A basic example of using [Express](http://expressjs.com/) and [React](http://facebook.github.io/react/index.html) for both client-side and server-side rendering. This project makes use of a basic layout with a global react mount point, which differs from [react-page](https://github.com/facebook/react-page) where all of the html is rendered from React. One benefit of this approach is the ability to include a doctype.

## How To

Run `grunt browserify` to compile the client-side code into `app/public/js/output.js`.

Start the Express server by running `node app/server.js`.

## Tools Used
This project uses:

   * [node-jsx](https://github.com/petehunt/node-jsx) for transparently compiling files with JSX when requiring on the server-side
   * [Express](http://expressjs.com/) for running the web server
   * [React](http://facebook.github.io/react/index.html) for server-side and client-side rendering
   * [grunt-react](https://github.com/ericclemmons/grunt-react) with [browserify](http://browserify.org/) to concatenate and compile the JSX for the client-side code