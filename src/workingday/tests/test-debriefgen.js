// test-debriefgen.js 
//  ~/workingday/tests/test-debriefgen.js 
// ----------------------------------------- 
//  Test: workingDay generate debrief report
// 
// --------------------------------------------- 
// 	2020-05-03		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../../log');

// ! bit of a "loop-back" as it were, here.... 
// todo: sort it out!
const getDefaultObject = () => require('../../workingday/tests').sample_day.create();

/**
 * * Generates debrief report for a working day.
 * * Returns true if successful.
 * @param {workingDay} dayObject The workingDay object to generate debrief report for.
 */
const test_debriefgen = dayObject => {
    const lg = msg => log.add(`[test_debriefgen()]: ${msg}`, 'verbose');
    lg('started');

    dayObject = dayObject || (() => { lg('using default object'); return getDefaultObject(); ; })();
    
    let rv = false;
    try {
 
        lg('generating report');
        const reporter = require('../debriefReport');
        const report = reporter.generateReport(dayObject);

        lg('report generated :- ');
        lg('...\n' + report);
        
        rv = true;
    } catch (err) {
        const errorHandler = require('../../errorHandler');
        errorHandler.handle(err);
        lg(`error: ${err.message}`);
    }

    lg('finished');
    return rv;
};

module.exports = test_debriefgen;