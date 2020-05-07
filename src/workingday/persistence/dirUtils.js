// dirUtils.js 
//  ~/workingday/dirUtils.js 
// ----------------------------- 
//  workingDay data directory functions 
// 
// --------------------------------------------- 
// 	2020-04-14  BS      Created.  
// 
// --------------------------------------------- 
// 
'use strict';

const config = require('../../config');
const path = require('path');
const fs = require('fs');

/**
 * * Get the path to the data directory. Returns string.
 */
const getDataDirectoryPath = () => {
    const datadir = config.WORKINGDAY.DATA_DIRECTORY_PATH;
    return datadir;
};

/**
 * * Check if the data directory exists. Returns boolean.
 */
const dataDirectoryExists = () => {
    const datadir = getDataDirectoryPath();
    return fs.existsSync(datadir);
};

/**
 * * Create the data directory. Returns true if successful.
 */
const createDataDirectory = () => {
    let rv = false;
    try {
        
        const datadir = getDataDirectoryPath();
        const fs = require('fs');
        fs.mkdirSync(datadir);

        rv = true;
    } catch (err) {
        const errorHandler = require('../../errorHandler');
        errorHandler.handle(err);
    }
    return rv;
};

//#region exports
module.exports = {
    dataDirectoryExists: dataDirectoryExists,
    createDataDirectory: createDataDirectory,
    getDataDirectoryPath: getDataDirectoryPath,
};
//#endregion