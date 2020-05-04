// dayNamer.js
//  ~/workingday/dayNamer.js
// ----------------------------------------- 
//  Generates unique (file) name for workingDay objects. 
// 
// --------------------------------------------- 
// 	2020-04-29		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const utils = require('../utils');

/**
 * * Generate a unique name for a workingDay object.
 * * Returns the generated name string.
 * @param {workingDay} dayObject The workingDay object to generate a unique name for.
 */
const getUniqueName = dayObject => {
    const workingDay = require('./workingday');
    if (!dayObject || !(dayObject instanceof workingDay)) {
        throw new Error('Invalid workingDay object');
    }

    let rv = 'noname';
    try {
        const config = require('../config');
        const template = config.WORKINGDAY.DATAFILE_NAME_FORMAT;

        // get data for placeholders
        const year = dayObject.year;
        const month = utils.doubleDigits(dayObject.month);
        const day = utils.doubleDigits(dayObject.day);
        const routeNumber = dayObject.routeNumber;

        // construct name
        let objname = `${year}-${month}-${day}-${routeNumber}`;

        // job's a wet one
        rv = objname;

    } catch (err) {
        const errorHandler = require('../errorHandler');
        errorHandler.handle(err);
    }

    return rv;
};


module.exports = {
    getUniqueName: getUniqueName
};