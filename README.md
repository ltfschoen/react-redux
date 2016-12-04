## Local Setup

* `npm install`
* `npm start -s` - Run Express web server, ESLint Watch, and suppress noise

* Note: Run individual NPM scripts with `npm run ___`

### Debugging

* Use `debugger;` in within code and run in browser to introspect breakpoints

### Mock API Delay

* Show preloader by enabling simulated delay of real API by increasing delay in src/api/delay.js

### Testing

* Travic CI Build Status: [![Build Status](https://api.travis-ci.org/ltfschoen/react-redux.svg)](https://travis-ci.org/ltfschoen/react-redux)

* `npm run test:watch`
* Change from `progress` to `spec` in package.json Mocha script configuration for more verbose outputs 

## Production Build

* Run production build locally with `npm run build` and go to http://localhost:5000

## Config

* ESLint
  * Rules: 0-off, 1-warning, 2-error
  * ESLint supports ES6 in `parserOptions` and `jsx` support option
  * ESLint environments and global variables to be aware under `env`

## TODO

* [ ] User Administration - prevent delete user who already has a skill
* [ ] Delete Skill functionality
* [ ] Hide empty skill list if all skills deleted
* [ ] Notify user if try leave Manage Skill form with unsaved changes
* [ ] Client-side validation of link data
* [ ] Handle 404s by adding logic to `mapStateToProps`
* [ ] Show quantity of skills in the Header (leverages Single Store model without issues syncing)
* [ ] Pagination and infinite scrolling to support large data sets
* [ ] Sort Skill table alphabetically by default by adding logic to `mapStateToProps`
* [ ] Store old Skill form data so can revert to changes when user navigates to different page  

## Credits

* Built based upon following Pluralsight course Building Apps with React and Redux in ES6
using [pluralsight-redux-starter](https://github.com/coryhouse/pluralsight-redux-starter) to scaffold the app, and integrating some parts
of [react-slingshot](https://github.com/coryhouse/react-slingshot)
