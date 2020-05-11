// dayreader.js 
//  ~/workingday/dayreader.js 
// ----------------------------------------- 
//  Reads workingDay objects from persistent store. 
// 
// --------------------------------------------- 
// 	2020-04-27		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const path = require('path');
const fs = require('fs');

const log = require('../../log');
const config = require('../../config');
const errorHandler = require('../../errorHandler');

const workingDay = require('../workingday');

/**
 * * Reads workingDay data from the specified file path.
 * * Returns a workingDay object.
 * @param {string} filepath Path to the data file
 */
const performRead = filepath => {
    
    const fn = 'dayreader.performRead()';
    const lg = msg => { log.add(`[${fn}]: ${msg}`, 'verbose'); };

    
    let rv = null;
    try {

        // check file exists
        if (!fs.existsSync(filepath)) {
            lg(`${filepath} does not exist!`);
            throw new Error('File does not exist: ' + filepath);
        }

        // read it
        lg('reading file');
        const data = fs.readFileSync(filepath, config.WORKINGDAY.DATAFILE_ENCODING);
        
        // create object
        lg('creating workingDay object');
        rv = workingDay.fromJson(data);

        lg(`created workingDay object: date=${rv.date}, id=${rv.id}`);

    } catch (err) {

        errorHandler.handle(err);
        lg(`handled error: ${err}`);
    }


    lg('all done.');
    return rv;
};


const dayreader = () => {
    return {

        read: performRead

    };
};

module.exports = {
    create: dayreader
}
