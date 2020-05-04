// test-write.js 
//  ~/workingday/tests/test-write.js 
// ----------------------------------------- 
//  Test: workingDay persistent store write
// 
// --------------------------------------------- 
// 	2020-04-28		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../../log');

// ! bit of a "loop-back" as it were, here.... 
// todo: sort it out!
const getDefaultObject = () => require('../../workingday/tests').sample_day.create();

/**
 * * Write a workingDay object to the persistent store.
 * * Returns true if successful.
 * @param {workingDay} dayObject The workingDay object to save
 */
const test_write = dayObject => {
    const lg = msg => { log.add(`[test_write()]: ${msg}`, 'verbose'); };

    dayObject = dayObject || getDefaultObject();
    let rv = false;
    try {
        
        lg(' writing...');
        const writerFx = require('./../daywriter');
        const writer = writerFx.create();
        const writerSuccess = writer.write(dayObject);
        
        lg(`writerSuccess: ${writerSuccess}`)

        rv = writerSuccess;
    } catch (e) {
        lg(`error: ${err.msg}`);
        const errorHandler = require('../../errorHandler');
        errorHandler.handle(e);
    }

    return rv;
};

module.exports = test_write;