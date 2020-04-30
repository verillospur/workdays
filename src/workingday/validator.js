// validator.js
//  ~/workingday/validator.js
// ----------------------------------------- 
//  Validates workingDay objects. 
//   
// --------------------------------------------- 
// 	2020-04-29		BS		Created. 
// 
// --------------------------------------------- 
// 
'use this';

const errorHandler = require('../errorHandler');

/**
 * * Validate a workingDay object.
 * * Returns true if validation passes, false if validation fails.
 * @param {workingDay} dayObject The workingDay object to validate
 * @param {function} callback Validation callback: (err, validationSuccess, validationMessages[])
 */
const validator = (dayObject, callback) => {
    // const workingDay = require('./workingday');
    // if (!dayObject || !(dayObject instanceof workingDay)) {
    //     throw new Error('Invalid workingDay object');
    // }
    if (!require('./fw-pv').isWorkingDayInstance(dayObject)) {
        throw new Error('Invalid workingDay object');
    }
    
    let success = false;
    let messages = [];
    let error = null;
    try {
        
        // check is valid date
        const nowX = new Date();
        const dayX = dayObject.date;
        const nowD = new Date(nowX.getUTCFullYear, nowX.getUTCMonth, nowX.getUTCDay, 0, 0, 0, 0);
        const dayD = new Date(dayX.getUTCFullYear, dayX.getUTCMonth, dayX.getUTCDay, 0, 0, 0, 0);

        // ! is in future?
        if (dayD > nowD) {
            success = false;
            messages.push('Date is in the future.');
        }

        // check if... etc

        
        //
        // * validation succeeds!
        //
        success = true;
        
    } catch (err) {
        errorHandler.handle(err, false);

        // validation fails
        success = false;
        error = err;
    }

    //
    // fire callback
    if (callback) {
        callback(error, success, messages);
    }

    return success;
};
