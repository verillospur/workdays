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

        // check data directory
        const du = require('./dirUtils');
        if (!du.dataDirectoryExists()) {
            lg('data directory does not exist');
            if (!du.createDataDirectory()) {
                lg('data directory could not be created');
                throw new Error('Could not create data directory.');
            }
            lg('data directory created');
        }

        // build file name
        let filename = dayObject.getUniqueName();
        filename += '.';
        filename += (config.WORKINGDAY.DATAFILE_USE_JSON_FILEEXT ?
            'json' : config.WORKINGDAY.DATAFILE_DEFAULTEXT);
        lg(`generated filename: ${filename}`);
        
        // get content
        const dataRaw = dayObject.toPersistanceDataString();
        lg(`raw data length: ${dataRaw.length}`);

        // kablintzify it
        const enc = config.WORKINGDAY.DATAFILE_ENCODING;
        const fileData = Buffer.from(dataRaw, enc);
        lg(`generated fileData.length: ${fileData.length}`);

        const path = require('path');
        const filepath = path.join(dirpath, filename);

        //
        // write the file
        lg(`writing file: ${filepath}`);
        const fs = require('fs');
        fs.writeFile(filepath, fileData, () => { lg('[fs.writeFile() callback]'); });
        
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