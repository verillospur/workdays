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
 * * Handle an exception.
 * @param {Error} e The error to handle.
 * @param {boolean} doNotSuppress If true, throws the error after handling
 */
const handler = (e, doNotSuppress) => {
    log.error(e, log.getLevels().error);
    doNotSuppress = doNotSuppress || false;
    if (doNotSuppress) throw e;
};

module.exports = {
    handle: handler
};