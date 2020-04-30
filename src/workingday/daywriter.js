// daywriter.js 
//  ~/workingday/daywriter.js 
// ----------------------------------------- 
//  Writes workingDay objects to persistent store. 
// 
// --------------------------------------------- 
// 	2020-04-27		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../log');
const errorHandler = require('../errorHandler');

/**
 * * Write a workingDay file to the data directory.
 * * Returns true if successful.
 * @param {workingDay} dayObject The workingDay object to save.
 */
const performWrite = dayObject => {
    const fn = 'daywriter.performWrite()';
    // const workingDay = require('./workingday');
    // if (!dayObject || !(dayObject instanceof workingDay)) {
    //     throw new Error('Invalid workingDay object');
    // }
    if (!require('./fw-pv').isWorkingDayInstance(dayObject)) {
        throw new Error('Invalid workingDay object');
    }
    
    let rv = false;
    try {

        // get data directory
        const config = require('../config');
        const dirpath = config.WORKINGDAY.DATA_DIRECTORY_PATH;
        log.add(`${fn}: data directory: ${dirpath}`);

        // build file name
        let filename = dayObject.getUniqueName();
        filename += '.' + config.WORKINGDAY.DATAFILE_USE_JSON_FILEEXT ?
            'json' : config.WORKINGDAY.DATAFILE_DEFAULTEXT;
        log.add(`${fn}: generated filename: ${filename}`);
        
        // get content
        const dataRaw = dayObject.toPersistanceDataString();
        log.add(`${fn}: raw data length: ${dataRaw.length}`);

        // kablintzify it
        const enc = config.WORKINGDAY.DATAFILE_ENCODING;
        const fileData = Buffer.from(dataRaw, enc);
        log.add(`${fn}: generated fileData: ${fileData.length}`);

        //
        // write the file
        log.add(`${fn}: writing file...`);
        const fs = require('fs');
        fs.writeFile(dirpath, fileData, () => {log.add(`${fn}: [fs.writeFile() callback]`);});
        
        log.add(`${fn}: [end-of-block]`);

        rv = true;
    } catch (err) {
        errorHandler.handle(err);
        log.add(`${fn}: handled error: ${err.message}`);
    }

    log.add(`${fn}: all done.`);
    return rv;
};


const daywriter = () => {
    return {

        write: performWrite

    };
};

module.exports = {
    create: daywriter
}