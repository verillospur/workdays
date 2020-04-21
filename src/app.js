// app.js
//  ~/app.js
// -----------------------------
//  App entry point.
//
// ---------------------------------------------
//  2020-04-13      BS      Created.
// ---------------------------------------------
//
'use strict';

const log = require('./log');
const exec = require('./exec');

log.add('Working...', log.levels.info);
log.add('... apparently.', log.levels.verbose);


const du = require('./workingday/dirUtils');
exec.try(
    () => {
        return log.add(`datadir: ${du.getDataDirectoryPath()}`);
    }
);


exec.try(() => {du.createDataDirectory();});
exec.try(du.createDataDirectory);

if (!exec.try(du.dataDirectoryExists)) {
    exec.try(du.createDataDirectory);
}


