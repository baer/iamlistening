# IAmListening

## How It All Works

This is just an express app that serves a static site. The static site is located in `/public`. With the exception of the `/sass` folder everything else belongs to Express so unless you're doing back end tinkering there is no need to worry about it. To load the results I am inserting a `<script>` tag onto the page with a tiny bit (4 lines) of javascript in it and the results of the API call. You can see what is being inserted by looking at `views/results.tmpl`. It is not as good as returning HTML but if we're doing D3 then we need the raw data anyway so this seemed like our only option. Somebody who really wanted the data could use this API, parse the result as a string using babel, acorn or esprima and pull the result out of the AST. This seems like more than enough friction to deter all but the most determined people which is good enough for me.

## Development

#### Frontend

The frontend is static page so everything is contained in `/public`. The call to the API will make a call to `iAmListening.renderResults` with the data you need to do any D3 or other fancy footwork. I've laid out a nice render path in `public/js/main.js`. You'll see my comments. There are only 2 things I want to mention.

1. sass is located in the `/sass` directory and can be built with the default gulp task. Just type `gulp`. If you want to be specific you can run `gulp sass`
2. vendor libraries are managed via npm and copied in during the build step. You can have a look at the gruntfile to see what I mean. It's only 27 lines long. If you can't find the dependency you need on npm, then you can always just dump the relevant file into `/public/js/vendor` and include it like normal but it would be better if we could track versions using the dep management tool.
3. If you've never worked on an express app you should know that you HAVE TO RESTART THE SERVER TO SEE CHANGES. You can use a tool like nodemon to have it auto restart for you but that's up to you. Just don't forget to restart after you make changes.

#### Backend

Thethe only thing that needs to be done is to fill in the details in `routes/index.js`. At the moment, the `results-partial` route doesn't read a RESTful URL or query params. You'll have to take the param however you choose to get it and fetch the data. I've already tested that stringified data does over the wire properly so it should be cake :).

## Dependencies

* Node.js - I ran this using node 4.1 but I didn't use anything that would prevent you from using 0.10.x or 0.12.x. Up to you.
* npm 3.x - Path names depend on the new flattened dependency tree from NPM 3+. If you are not sure which version of npm you have you can do `npm --version`. If you need to install the new version you can run `npm install -g npm`.
* globally installed gulp. If you don't have gulp you can run `npm install -g gulp`

## Run the app

To run in Debug mode with stack traces and everything:
`DEBUG=myapp npm start`

To just run it like you would in prod:
`npm start`
