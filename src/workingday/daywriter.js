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

/**
 * * Write a workingDay file to the data directory.
 * * Returns true if successful.
 * @param {workingDay} dayObject The workingDay object to save.
 */
const performWrite = dayObject => {
    
    const fn = 'daywriter.performWrite()';
    const log = require('../log');
    const lg = msg => { log.add(`[${fn}]: ${msg}`, 'verbose'); };

    // const workingDay = require('./workingday');
    // if (!dayObject || !(dayObject instanceof workingDay)) {
    //     throw new Error('Invalid workingDay object');
    // }
    if (!require('./fw-pv').isWorkingDayInstance(dayObject)) {
        lg('invalid workingDay object');
        throw new Error('Invalid workingDay object');
    }
    
    let rv = false;
    try {

        // get data directory
        const config = require('../config');
        const dirpath = config.WORKINGDAY.DATA_DIRECTORY_PATH;
        lg(`data directory: ${dirpath}`);

        // build file name
        let filename = dayObject.getUniqueName();
        filename += '.' + config.WORKINGDAY.DATAFILE_USE_JSON_FILEEXT ?
            'json' : config.WORKINGDAY.DATAFILE_DEFAULTEXT;
        lg(`generated filename: ${filename}`);
        
        // get content
        const dataRaw = dayObject.toPersistanceDataString();
        lg(`raw data length: ${dataRaw.length}`);

        // kablintzify it
        const enc = config.WORKINGDAY.DATAFILE_ENCODING;
        const fileData = Buffer.from(dataRaw, enc);
        lg(`generated fileData: ${fileData.length}`);

        //
        // write the file
        lg('writing file...');
        const fs = require('fs');
        fs.writeFile(dirpath, fileData, () => { lg('[fs.writeFile() callback]'); });
        
        lg('[end-of-block]');

        rv = true;
    } catch (err) {
        const errorHandler = require('../errorHandler');
        errorHandler.handle(err);
        lg(`handled error: ${err.message}`);
    }

    lg('all done.');
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