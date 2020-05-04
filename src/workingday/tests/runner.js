// runner.js.js 
//  ~/workingday/tests/runner.js
// ----------------------------------------- 
//  Working day tests runner.
// 
// --------------------------------------------- 
// 	2020-04-28		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../../log');
const errorHandler = require('../../errorHandler');

const dirpath = __dirname;

const run = async () => {
    const lg = msg => {log.add(`[testsrunner]: ${msg}`);};
    lg('started');

    lg(`dirpath: ${dirpath}`);

    // const fs = require('fs');
    // lg('reading files');
    // const files = await fs.promises.readdir(dirpath);
    // lg('files read returned');

    lg('reading files');
    const fs = require('fs');
    fs.promises.readdir(dirpath)
        .catch(err => {
            errorHandler.handle(err);
            lg('error!');
        })
        .then(
            files => {
                lg('files read returned');
                files.forEach(f => {
                    lg(`-file: ${f}`);
                });
            },
            () => {
                lg('files read rejected');
            }
        )
    ;

    lg('finished');
};

module.exports = {
    run: run, 
}