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

const tests = {

    //#region day_store

    day_store: {

        testWrite: require('./test-write'),
        generateDebriefText: require('./test-debriefgen')
    },
    //#endregion

    //#region sample_day

    sample_day: {

        create: () => new workingDay(tests.sample_day.getWorkingDate()),
        getWorkingDate: () => new Date()

    }
    //#endregion
    
};

module.exports = tests;