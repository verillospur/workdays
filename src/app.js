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

const welcome = require('./welcome');
welcome.show();


/*
    * reset data
*/
// const da = require('./workingday/persistence/admin');
// da.reset_data();


                                            /*
* ***************************************************
 ! ---------------------------------------------------
  ?----------------------------------------------------
 todo: this. complete the tests runner.
  ?----------------------------------------------------
 ! ---------------------------------------------------
* ***************************************************
                                */


// const workingDay = require('./workingday/workingday');


// const px = require('./workingday/persistence');
// const reg = require('./workingday/persistence/register');

// const wf = require('./workflow');
// wf.WORKING_DAY.DEBRIEF_WORKFLOW.start();


// const runner = require('./workingday/tests/runner');
//runner.run();


welcome.goodbye();
