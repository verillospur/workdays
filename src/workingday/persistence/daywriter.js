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

const path = require('path');
const fs = require('fs');

const log = require('../../log');
const config = require('../../config');
const errorHandler = require('../../errorHandler');

/**
 * * Write a workingDay file to the data directory.
 * * Returns true if successful.
 * @param {workingDay} dayObject The workingDay object to save.
 */
const performWrite = dayObject => {
    
    const fn = 'daywriter.performWrite()';
    const lg = msg => { log.add(`[${fn}]: ${msg}`, 'verbose'); };

    // const workingDay = require('./workingday');
    // if (!dayObject || !(dayObject instanceof workingDay)) {
    //     throw new Error('Invalid workingDay object');
    // }
    if (!require('../fw-pv').isWorkingDayInstance(dayObject)) {
        lg('invalid workingDay object');
        throw new Error('Invalid workingDay object');
    }
    
    let rv = false;
    try {

        //
        // get file path
        const getfilepath = require('./getfilepath');
        const filepath = getfilepath.getfilepath(dayObject);

 
        //
        // get content
        const dataRaw = dayObject.toPersistanceDataString();
        lg(`raw data length: ${dataRaw.length}`);

        // kablintzify it
        const enc = config.WORKINGDAY.DATAFILE_ENCODING;
        const fileData = Buffer.from(dataRaw, enc);
        lg(`generated fileData.length: ${fileData.length}`);


        //
        // write the file
        lg(`writing file: ${filepath}`);
        fs.writeFile(filepath, fileData, () => { lg('[fs.writeFile() callback]'); });
        
        lg('[end-of-block]');

        rv = true;


    } catch (err) {

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