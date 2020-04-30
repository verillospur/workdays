// config.js 
//  ~/workingday/config.js 
// ----------------------------- 
//  workingDay config 
// 
// --------------------------------------------- 
// 	2020-04-14  BS      Created.  
// 
// --------------------------------------------- 
// 
'use strict';

const config = (() => {

    return {
        
        // * The directory workingday data files are stored in. At. By.
        //
        DATA_DIRECTORY_PATH: 'c:\\dev\\verillospur\\server\\workdays\\data',

        // * If true, workingday data files are given
        // * the JSON file extension (.json). 
        // * If false, the default extension is used.
        //
        DATAFILE_USE_JSON_FILEEXT: true, 

        // * Filename extension given to workingday data files.
        //
        DATAFILE_DEFAULTEXT: 'day',

        // * Template for workingday data file names.
        //
        DATAFILE_NAME_FORMAT: '${year}-${month}-${day}-${routeNumber}',

        // * Encoding for workingday data file content.
        //
        DATAFILE_ENCODING: 'utf8',

    };
})();

module.exports = config;