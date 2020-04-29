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

/**
 * Handle an exception.
 * @param {Error} e 
 */
const handler = e => {
    log.error(e, log.getLevels().error);
};

module.exports = {
    handle: handler
};