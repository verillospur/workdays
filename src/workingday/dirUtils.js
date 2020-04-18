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

const dataDirectoryExists = () => {
    datadir = config.WORKINGDAY.DATA_DIRECTORY_PATH;
};

const createDataDirectory = () => {

};

module.exports = {
    dataDirectoryExists: dataDirectoryExists,
    createDataDirectory: createDataDirectory
};