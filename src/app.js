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


const wd = new workingDay(new Date());
console.log(JSON.stringify(wd));
