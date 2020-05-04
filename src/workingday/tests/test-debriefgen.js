// test-debriefgen.js 
//  ~/workingday/tests/test-debriefgen.js 
// ----------------------------------------- 
//  Test: workingDay generate debrief text
// 
// --------------------------------------------- 
// 	2020-05-03		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../../log');
const errorHandler = require('../../errorHandler');

/**
 * * Generates debrief text for a working day.
 * * Returns true if successful.
 * @param {workingDay} dayObject The workingDay object to generate debrief text for.
 */
const test_debriefgen = dayObject => {
    dayObject = dayObject || getDefaultObject();
    let rv = false;
    try {
        
        
        rv = true;
    } catch (e) {
        errorHandler.handle(e);
    }

    return rv;
};

module.exports = test_debriefgen;