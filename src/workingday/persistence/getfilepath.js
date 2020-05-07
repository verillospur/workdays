// getfilepath.js 
//  ~/workingday/persistence/getfilepath.js 
// ----------------------------------------- 
//  Generates a full path for a workingday data file
// 
// --------------------------------------------- 
// 	2020-05-06		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const path = require('path');

const log = require('../../log');
const config = require('../../config');

const du = require('./dirUtils');
const getfilename = require('./getfilename');

/**
 * * Generate file path for a workingDay object
 * @param {workingDay} dayObject Object to generate filename for.
 */
const getfilepath = dayObject => {
    const lg = msg => { log.add(`[${getfilepath}]: ${msg}`, 'verbose'); };
    lg('started');

    // get data directory
    const dirpath = config.WORKINGDAY.DATA_DIRECTORY_PATH;
    lg(`data directory: ${dirpath}`);

    // check data directory
    if (!du.dataDirectoryExists()) {
        lg('data directory does not exist');
        if (!du.createDataDirectory()) {
            lg('data directory could not be created');
            throw new Error('Could not create data directory.');
        }
        lg('data directory created');
    }

    // get filename
    const filename = getfilename.getfilename(dayObject);

    // stick em together
    const filepath = path.join(dirpath, filename);
    
    lg(`generated filepath: $${filepath}`);
    lg('finished');
    
    return filepath;
};

module.exports = {
    getfilepath: getfilepath
};