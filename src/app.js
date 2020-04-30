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

const moment = require('moment');
const date10April20at0h15m = new Date(2020, 4, 10, 0, 15, 0, 0);
const date10April20at0h40m = new Date(2020, 4, 10, 0, 40, 0, 0);
const dateDiffMins = moment(date10April20at0h40m).diff(moment(date10April20at0h15m), 'minutes');
// console.log(dateDiffMins);

const tests = require('./workingday/tests');

// * ***************************************************
// ! ---------------------------------------------------
// ?----------------------------------------------------
// todo: this. complete the tests runner.
// ?----------------------------------------------------
// ! ---------------------------------------------------
// * ***************************************************
tests.day_store.testWrite();



// const wd1 = new workingDay(tests.sample_day.getWorkingDate());
// const wd2 = tests.sample_day.create();

