// directoryManager.js
//  ~/workingday/persistence/directoryManager.js
// ----------------------------------------- 
//  Data Directory Manager
// 
// --------------------------------------------- 
// 	2020-05-14		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../../log');
const config = require('../../config');

const directoryManager = (() => {
    const lg = msg => { log.add(`[directoryManager()]: ${msg}`, log.levels.verbose); };

    const rv = {};

    rv.getDataDirectory = user => {
        const lg = msg => { log.add(`[getfilepath()]: ${msg}`, 'verbose'); };
        lg('started');

        // get data directory
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

        // get user
        const userDir = `user_${user}`;
        lg(`userdir=${userDir}`);

        // check path
        const path = require('path');
        const userdirpath = path.join(dirpath, userDir);
                
        // done
        lg(`generated path: ${userdirpath}`);
        lg('finished');

        return userdirpath;

    };

    return rv;

})();

module.exports = directoryManager;