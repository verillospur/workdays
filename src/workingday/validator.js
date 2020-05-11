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

const log = require('../log');


//#region fieldValidation
const fieldValidation = (() => {
    return {
        checkString: o => {
            let rv = false;
            try {
                if (o) {
                    if (o.toString().trim().length > 0) {
                        rv = true;
                    }
                }

            } catch (err) {
                log.add(`fieldValidation.checkString(): error: ${err}`);
            }
            log.add(`fieldValidation.checkString() validated: \"${o}\"`);
            return rv;
        },

        checkNonZeroNumber: o => {
            let rv = false;
            try {
                
                if (o) {
                    if (!isNaN(o)) {
                        if (Number(o) > 0) {
                            rv = true;
                        }
                    }
                    
                }
                
            } catch (err) {
                log.add(`fieldValidation.checkNonZeroNumber(): error: ${err}`);
            }
            log.add(`fieldValidation.checkNonZeroNumber() validated: ${o}`);
            return true;
        },

        checkDate: o => {
            let rv = false;
            try {
                
                
                if (o) {
                    if (!isNaN(Date.parse(o))) {
                        rv = true;
                    }
                    
                }
                
            } catch (err) {
                log.add(`fieldValidation.checkDate(): error: ${err}`);
            }
            log.add(`fieldValidation.checkDate() validated: ${o}`);
            return true;
        },
    };
})();
//#endregion


/**
 * * Validate a workingDay object.
 * * Returns true if validation passes, false if validation fails.
 * @param {workingDay} dayObject The workingDay object to validate
 * @param {function} callback Validation callback: (err, validationSuccess, validationMessages[])
 */
const validate = (dayObject, callback) => {
    
    // const log = require('../log');
    const lg = msg => { log.add(`[validator()]: ${msg}`, 'verbose') };

    // const workingDay = require('./workingday');
    // if (!dayObject || !(dayObject instanceof workingDay)) {
    //     throw new Error('Invalid workingDay object');
    // }
    if (!require('./fw-pv').isWorkingDayInstance(dayObject)) {
        lg('invalid workingDay object')
        throw new Error('Invalid workingDay object');
    }
    lg('started');
    
    let success = false;
    let messages = [];
    let error = null;
    try {
        
        // check is valid date
        if (!fieldValidation.checkDate(dayObject.date)) {
            lg('validation failed: checkDate() failed');
            success = false;
            messages.push('Invalid date.');
        }

        const nowX = new Date();
        const dayX = dayObject.date;
        const nowD = new Date(nowX.getUTCFullYear, nowX.getUTCMonth, nowX.getUTCDay, 0, 0, 0, 0);
        const dayD = new Date(dayX.getUTCFullYear, dayX.getUTCMonth, dayX.getUTCDay, 0, 0, 0, 0);

        // ! is in future?
        if (dayD > nowD) {
            lg('validation failed: date in future');
            success = false;
            messages.push('Date is in the future.');
        }


        // const workingDay = require('./workingday');
        // const d = new workingDay(nowX);

        // check if... etc

        if (!fieldValidation.checkDate(dayObject.loadingTime)) {
            lg('validation failed: checkDate() failed: loadingTime');
            success = false;
            messages.push('Invalid loading time.');
        }
        if (!fieldValidation.checkDate(dayObject.debriefTime)) {
            lg('validation failed: checkDate() failed: debriefTime');
            success = false;
            messages.push('Invalid debrief time.');
        }
        if (!fieldValidation.checkString(dayObject.routeNumber)) {
            lg('validation failed: checkString() failed: routeNumber');
            success = false;
            messages.push('Invalid route number.');
        }
        if (!fieldValidation.checkNonZeroNumber(dayObject.packageCount)) {
            lg('validation failed: checkNonZeroNumber() failed: packageCount');
            success = false;
            messages.push('Invalid package count.');
        }
        if (!fieldValidation.checkNonZeroNumber(dayObject.stopCount)) {
            lg('validation failed: checkNonZeroNumber() failed: stopCount');
            success = false;
            messages.push('Invalid stop count.');
        }
        
        // success?
        lg(`validation message count: ${messages.length}`);
        if (messages.length == 0) {

            // * validation succeeds!
            //
            lg('validation completed successfully.');
            success = true;
        }
        
    } 
    catch (err) {
        const errorHandler = require('../errorHandler');
        errorHandler.handle(err, false);

        // validation fails
        success = false;
        error = err;
        lg(`validation failed: error: ${err}`);
    }

    //
    // fire callback
    if (callback) {
        lg('firing callback');
        callback(error, success, messages);
    }

    lg(`returning: ${success}`);
    return success;
};


module.exports = {
    validate: validate
};