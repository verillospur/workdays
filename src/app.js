// app.js
//  ~/app.js
// -----------------------------
//  App entry point.
//
// ---------------------------------------------
//  2020-04-13      BS      Created.
// ---------------------------------------------
//
'use strict';

const log = require('./log');
const exec = require('./exec');

log.add('Working...', log.levels.info);
log.add('... apparently.', log.levels.verbose);

const workingDay = require('./workingday/workingday');

const welcome = require('./welcome');
welcome.show();


// * ***************************************************
// ! ---------------------------------------------------
// ?----------------------------------------------------
// todo: this. complete the tests runner.
// ?----------------------------------------------------
// ! ---------------------------------------------------
// * ***************************************************


const sv = require('./server/webapp/__tester');
log.add(sv.run());


// const wf = require('./workflow');
// wf.WORKING_DAY.DEBRIEF_WORKFLOW.start();


// const runner = require('./workingday/tests/runner');
//runner.run();


welcome.goodbye();
