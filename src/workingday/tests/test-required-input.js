// test-required-input.js 
//  ~/workingday/tests/test-required-input.js
// ----------------------------------------- 
//  Test: workingDay required input
// 
// --------------------------------------------- 
// 	2020-05-06		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../../log');

// ! bit of a "loop-back" as it were, here.... 
// todo: sort it out!
const getDefaultObject = () => require('../../workingday/tests').sample_day.create();

/**
 * * Generates a requiredInput object populated with test data.
 * * Returns the requiredInput object if successful.
 * @param {workingDay} dayObject The workingDay object to generate the object for.
 * If no workingDay object is supplied, the default test sample object is used/created.
 */
const test_required_input = dayObject => {
    const lg = msg => log.add(`[test_required_input()]: ${msg}`, 'verbose');
    lg('started');

    dayObject = dayObject || (() => { lg('using default object'); return getDefaultObject(); ; })();
    
    let rv = false;
    let data;
    try {
 
        lg('creating requiredInput object');
        const ri = require('../required-input');
        data = ri();

        lg('populating from workingDay object');
        data.populateFromWorkingDayObject(dayObject);
        
        if (data.routeNumber == dayObject.routeNumber 
            && data.date == dayObject.date
            && data.packageCount == dayObject.packageCount
            && data.stopCount == dayObject.stopCount
            && data.mileageLoading == dayObject.mileageLoading
            && data.mileageDebrief == dayObject.mileageDebrief
            // that'll do
            ) {

            lg('seems to match');
            lg(`workingDay.routeNumber=${dayObject.routeNumber}; requiredInput.routeNumber=${data.routeNumber}`);
            lg('etc');

            rv = true;
        }

    } catch (err) {
        const errorHandler = require('../../errorHandler');
        errorHandler.handle(err);
        lg(`error: ${err}`);
    }

    lg('finished');
    // return rv;
    return data;
};

module.exports = test_required_input;