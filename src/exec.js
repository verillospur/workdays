// exec.js 
//  ~/exec.js 
// -----------------------------------------
//  The Executor! 
// 
// --------------------------------------------- 
// 	2020-04-21      BS		Created. 
// --------------------------------------------- 
// 
'use strict';

/**
 * * Executes specified code in a 'standard' way.
 * ! Exceptions are handled using the standard error handler.
 * * Returns the result of the specified function.
 * @param {*} fn The function to execute.
 * @param {*} args Optional arguments to pass to the executing function.
 */
const exec = (fn, args) => {

    const errorHandler = require('./errorHandler');

    if (typeof (fn) != 'function') {
        throw new Error('Attempt to execute non-function.');
    }

    let rv;
    try {
        if (args) {
            rv = fn(args);
        }
        else {
            rv = fn();
        }

    }
    catch (e) {
        errorHandler.handle(e);
    }

    return rv;

};

module.exports = {
    try: exec
};