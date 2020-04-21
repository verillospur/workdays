// errorHandler.js 
//  ~/errorHandler/errorHandler.js 
// ----------------------------- 
//  App-wide error handling.
// 
// --------------------------------------------- 
// 	2020-04-18	BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../log');

const handler = e => {
    log.add(e, log.getLevels().error);
};

module.exports = {
    handle: handler
};