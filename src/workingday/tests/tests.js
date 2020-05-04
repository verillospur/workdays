// tests.js 
//  ~/workingday/tests.js 
// ----------------------------------------- 
//  Tests stuff for workingDay. 
// 
// --------------------------------------------- 
// 	2020-04-28		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const workingDay = require('../../workingday');

const create_sample_day = () => {
    const o = new workingDay(tests.sample_day.getWorkingDate());
    o.setShiftTimes(10, 45, 19, 20, 10);
    o.routeNumber = 'T385';
    o.packageCount = 220;
    o.stopCount = 158;
    o.mileageLoading = 52649;
    o.mileageDebrief = 52784;
    return o;
};

const tests = {

    //#region day_store

    day_store: {

        testWrite: require('./test-write'),
        generateDebriefText: require('./test-debriefgen')
    },
    //#endregion

    //#region sample_day

    sample_day: {

        create: create_sample_day,
        getWorkingDate: () => new Date()

    }
    //#endregion
    
};

module.exports = tests;