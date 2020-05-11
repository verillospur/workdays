// debrieftemplateloader.js 
//  ~/workingday/debrieftemplateloader.js 
// ----------------------------------------- 
//  Debrief report template loader.
// 
// --------------------------------------------- 
// 	2020-05-03		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';


const filepath = __dirname + '\\debrief-template.txt';

/**
 * * Load the debrief report template.
 * * Returns a string.
 */
const load = () => {
    const log = require('../log');
    const lg = m => {log.add(`[debriefloader]: ${m}`, 'verbose');};

    lg('started');
    lg(`filepath=${filepath}`);
            
    let rv = '';
    try {
        lg('reading file');
        const fs = require('fs');
        const content = fs.readFileSync(filepath, 'utf8');
        
        lg('file read complete');
        lg('content :-');
        lg('\n' + content);    

        rv = content;

    } catch (err) {
        const errorHandler = require('../errorHandler');
        errorHandler.handle(err);
        lg(`error: ${err}`);
    }
        
    lg('finished');
    return rv;
};

module.exports = {
    load: load
};