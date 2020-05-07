// getfilename.js 
//  ~/workingday/persistence/getfilename.js 
// ----------------------------------------- 
//  Generates a filename for a workingday data file
// 
// --------------------------------------------- 
// 	2020-05-06		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../../log');
const config = require('../../config');

/**
 * * Generate filename for a workingDay object
 * @param {workingDay} dayObject Object to generate filename for.
 */
const getfilename = dayObject => {
    log.add('getfilename(): started', 'verbose');

    let filename = dayObject.getUniqueName();
    filename += '.';
    filename += (config.WORKINGDAY.DATAFILE_USE_JSON_FILEEXT ?
        'json' : config.WORKINGDAY.DATAFILE_DEFAULTEXT);
    
    log.add(`getfilename(): generated filename: ${filename}`, 'verbose');
    log.add('getfilename(): started', 'finished');
    
    return filename;
};

module.exports = {
    getfilename: getfilename
};