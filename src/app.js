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


const impt = require('./server/importer');
const oo = impt();
console.log('oo.reader: %o, oo.reader(): %s', oo.reader, oo.reader());
console.log('%cblue?', 'font-size: x-large')
// log.add(oo.reader);
// log.add(oo.reader());


// const ri = require('./workingday/required-input');
// const data = ri();
// log.add(data.getName);



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
