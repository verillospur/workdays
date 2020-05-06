// required-input.js 
//  ~/workingday/required-input.js 
// ----------------------------------------- 
//  Requisite input for workingday workflow.
// 
// --------------------------------------------- 
// 	2020-05-05		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../log');
const utils = require('../utils');

const DEFAULT_VALUE = '<undefined>';

const REQUIRED = () => {
    const o = {

        defaultValue: DEFAULT_VALUE
        ,
        date: DEFAULT_VALUE,
        routeNumber: DEFAULT_VALUE,
        mileageLoading: DEFAULT_VALUE,
        mileageDebrief: DEFAULT_VALUE,
        timeLoading: DEFAULT_VALUE,
        timeDebrief: DEFAULT_VALUE,
        packageCount: DEFAULT_VALUE,
        stopCount: DEFAULT_VALUE,
        breakMinutes: DEFAULT_VALUE,
        returnsInfo: DEFAULT_VALUE,

    };
    o.name = utils.generateName();
    return o;
};

module.exports = REQUIRED;