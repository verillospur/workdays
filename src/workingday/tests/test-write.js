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
const errorHandler = require('../../errorHandler');

// ! bit of a "loop-back" as it were, here.... 
// todo: sort it out!
const getDefaultObject = () => require('../../workingday/tests').sample_day.create();

/**
 * * Write a workingDay object to the persistent store.
 * * Returns true if successful.
 * @param {workingDay} dayObject The workingDay object to save
 */
const test_write = dayObject => {
    dayObject = dayObject || getDefaultObject();
    let rv = false;
    try {
        
        const writerFx = require('./../daywriter');
        const writer = writerFx.create();
        const wrwiterSuccess = writer.write(dayObject);
        
        rv = true;
    } catch (e) {
        errorHandler.handle(e);
    }

    return rv;
};

module.exports = test_write;