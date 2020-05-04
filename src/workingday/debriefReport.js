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

/**
 * * Generate a debrief report for a working day.
 * @param {workingDay} dayObject The workingDay object to produce the debrief report for.
 */
const generateReport = dayObject => {

    // check param
    if (!require('./fw-pv').isWorkingDayInstance(dayObject)) {
        throw new Error('Invalid workingDay object');
    }

    // load template
    const config = require('../config');
    const template = config.WORKINGDAY.DEBRIEF_TEMPLATE.load();

    // build output
    const day = dayObject;
    const output = template
        .replace('${year}', day.year)
        .replace('${month}', day.month)
        .replace('${day}', day.day)
        .replace('${routeNumber}', day.routeNumber)
        .replace('${mileageDebrief}', day.mileageDebrief)
        .replace('${mileageLoading}', day.mileageLoading)
        .replace('${packageCount}', day.packageCount)
        .replace('${stopCount}', day.stopCount)
        .replace('${returnsCount}', day.returnsCount)
        .replace('${returnsInfo}', day.returnsInfo)
        .replace('${breakMinutes}', day.breakMinutes)
        .replace('${loadingTime}', day.loadingTime)
        .replace('${debriefTime}', day.debriefTime)
        ;

    return output;
};

module.exports = {
    generateReport: generateReport
};