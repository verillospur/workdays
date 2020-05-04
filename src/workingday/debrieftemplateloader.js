// debrieftemplateloader.js 
//  ~/workingday/debrieftemplateloader.js 
// ----------------------------------------- 
//  Debrief text generation template loader.
// 
// --------------------------------------------- 
// 	2020-05-03		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const filepath = __dirname + '\\debrief-template.txt';

const errorHandler = require('../errorHandler');

/**
 * * Load the debrief text generation template.
 * * Returns a string.
 */
const load = () => {
    const log = require('../log');
    const la = m => {log.add(`[debriefloader]: ${m}`);};
    la('started');
    la(`filepath=${filepath}`);
    var rv = '';

    //
    // * using promises
    //
    la('reading file');
    const fs = require('fs');
    fs.promises.readFile(filepath, 'utf8')
        .catch(err => {
            errorHandler.handle(err);
            la('error!');
        })
        .then(content => {
            la('file read complete');
            la('content :-');
            la('\n' + content);
            rv = content;
        },
        () => {})
        ;

    //
    // ? using async/await
    //
    // (async () => {
    //     try {
    //         la('reading file');
    //         const fs = require('fs');
    //         const content = await fs.promises.readFile(filepath, 'utf8');
    //         la('file read complete');
    //         la('content :-')
    //         la('\n' + content);
    //         rv = content;
    //     } catch (err) {
    //         errorHandler.handle(err);
    //         la('error!');
    //     }
    // })();
    
    
    la('finished');
    return rv;
};

module.exports = {
    load: load
};