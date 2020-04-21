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

const exec = (fn, args) => {
    
    const errorHandler = require('./errorHandler');
  
    let func;
    if (typeof(fn) == 'function') {
        func = fn;
    } 
    else {
        func = () => fn(args);
    } 
    // Function.apply()
    
    let rv;
    try {
        rv = func();
    } catch (e) {
        errorHandler.handle(e);
    }

    return rv;

};

module.exports = {
    try: exec
};