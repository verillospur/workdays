// debriefReport.js 
//  ~/workingday/debriefReport.js 
// ----------------------------------------- 
//  Debrief report generator. 
// 
// --------------------------------------------- 
// 	2020-05-03		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../log');
const utils = require('../utils');

/**
 * * Generate a debrief report for a working day.
 * @param {workingDay} dayObject The workingDay object to produce the debrief report for.
 */
const generateReport = dayObject => {
    const lg = msg => log.add(`[generateReport()]: ${msg}`, 'verbose');
    lg('started');

    // check param
    if (!require('./fw-pv').isWorkingDayInstance(dayObject)) {
        lg('invalid workingDay object');
        throw new Error('Invalid workingDay object');
    }

    // load template
    lg('loading template');
    const config = require('../config');
    const template = config.WORKINGDAY.DEBRIEF_TEMPLATE.load();
    // const loader = require('./debrieftemplateloader');
    // const template = loader.load();
    
    lg('template loaded :-');
    lg(template);

    // double-digitor (e.g. '3' -> '03')
    const dd = utils.doubleDigits;

    // time formatter
    const tf = utils.formatTime;

    // build output
    lg('building report');
    const day = dayObject;
    const output = template
        .replace('${year}', day.year)
        .replace('${month}', dd(day.month))
        .replace('${day}', dd(day.day))
        .replace('${routeNumber}', day.routeNumber)
        .replace('${mileage}', day.mileage)
        .replace('${mileageDebrief}', day.mileageDebrief)
        .replace('${mileageLoading}', day.mileageLoading)
        .replace('${packageCount}', day.packageCount)
        .replace('${stopCount}', day.stopCount)
        .replace('${returnsCount}', day.returnsCount)
        .replace('${returnsInfo}', day.returnsInfo)
        .replace('${breakMinutes}', day.breakMinutes)
        .replace('${loadingTime}', tf(day.loadingTime))
        .replace('${debriefTime}', tf(day.debriefTime))
        ;

    lg('finished');
    return output;
};

module.exports = {
    generateReport: generateReport
};