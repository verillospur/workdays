// log.js 
//  ~/log.js 
// ----------------------------- 
//  App message logging.
// 
// --------------------------------------------- 
// 	2020-04-13  BS      Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const moment = require('moment');
const config = require('../config');
const LOG_LEVELS = require('./levels');

// const FORMAT_TIMESTAMP = moment.HTML5_FMT.DATETIME_LOCAL_MS;
const FORMAT_TIMESTAMP = config.LOG.FORMAT_TIMESTAMP;

const getStamp = () => {
    const stamp = moment().format(FORMAT_TIMESTAMP);
    return stamp;
}

const getLevel = () => {
    return config.LOG.LEVEL;
};

const getLevelNum = () => {
    return parseInt(LOG_LEVELS[config.LOG.LEVEL]) || 0;
};

const getLevels = () => {
    return {...LOG_LEVELS};
};

const add = (data, level) => {
    level = level || LOG_LEVELS.verbose;

    let levelNum;
    if (!isNaN(level)) {
        levelNum = parseInt(level.toString());
    }
    else {
        levelNum = parseInt(LOG_LEVELS[level]);
    }

    const configLevelNum = getLevelNum();

    let rv = false;
    if (levelNum >= configLevelNum) {

        const stamp = getStamp();
        const entry = `${stamp}: ${data}`;
        
        let consoleFn;
        switch (levelNum) {
            case LOG_LEVELS.warn:
                consoleFn = console.warn;
                break;
            case LOG_LEVELS.error:
                consoleFn = console.error;
                break;
            case LOG_LEVELS.verbose:
            case LOG_LEVELS.info:
            default:
                consoleFn = console.info;
                break;
        }
        consoleFn(entry);

        rv = true;
    }
    
    return rv;
};


module.exports = {
    add: add,
    getLevel: getLevel,
    getLevelNum: getLevelNum,
    getLevels: getLevels,
    getStamp: getStamp
}