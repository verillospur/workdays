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

const config = require('../config');
const path = require('path');
const fs = require('fs');

const getDataDirectoryPath = () => {
    const datadir = config.WORKINGDAY.DATA_DIRECTORY_PATH;
    return datadir;
};

const dataDirectoryExists = () => {
    const datadir = getDataDirectoryPath();
    return fs.existsSync(datadir);
};

const createDataDirectory = () => {
    const e = new Error('Fuck off!');
    throw e;
};

module.exports = {
    dataDirectoryExists: dataDirectoryExists,
    createDataDirectory: createDataDirectory,
    getDataDirectoryPath: getDataDirectoryPath,
};