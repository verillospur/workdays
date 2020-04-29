// daywriter.js 
//  ~/workingday/daywriter.js 
// ----------------------------------------- 
//  Writes workingDay objects to persistent store. 
// 
// --------------------------------------------- 
// 	2020-04-27		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../log');

const daywriter = () => {
    return {

        x: () => {
            const m = new (class emmObj {constructor(){this._val = 'tiss';}})();
            log.line();
            console.dir(m);
            log.line();
        }
    };
};

module.exports = {
    create: daywriter
}