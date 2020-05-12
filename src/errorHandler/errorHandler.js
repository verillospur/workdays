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

/**
 * * Handle an exception.
 * @param {Error} e The error to handle.
 * @param {boolean} doNotSuppress If true, throws the error after handling
 */
const handler = (e, doNotSuppress) => {
    try {
        const log = require('../log');    
        log.error(e, log.getLevels().error);
        doNotSuppress = doNotSuppress || false;
        log.error((new Error()).stack, log.getLevels().error);
        if (doNotSuppress) throw e;
    } catch (ex) {
    }
};

module.exports = {
    handle: handler
};